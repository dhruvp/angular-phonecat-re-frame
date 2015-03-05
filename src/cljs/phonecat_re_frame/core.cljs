(ns phonecat-re-frame.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [cljsjs.react :as react]
              [re-frame.core :as re-frame]
              [ajax.core :as ajax])
    (:require-macros [reagent.ratom  :refer [reaction]])
    (:import goog.History))

;; -------------------------
;; Re-frame data

(re-frame/register-subs        ;; a new subscription handler
   :phones             ;; usage (subscribe [:phones])
   (fn [db]
     (reaction (:phones @db))))  ;; pulls out :phones

(re-frame/register-subs
 :search-input
 (fn [db]
   (reaction (:search-input @db))))

(re-frame/register-subs
 :phone-query
 (fn [db [_ phone-id]]
   (let [phone-details-reaction (reaction (:phone-details @db))]
     (reaction ((fn []
                  ((keyword phone-id) @phone-details-reaction)))))))

(re-frame/register-subs
 :phone-details
 (fn [db]
   (reaction (:phone-details @db))))

(re-frame/register-subs
 :order-prop
 (fn [db]
   (reaction (:order-prop @db))))

(re-frame/register-pure-handler
 :process-phones-response
 (fn
   [app-state [_ response]]
   (assoc-in app-state [:phones] response)))

(re-frame/register-pure-handler
 :process-phones-bad-response
 (fn
   [app-state [_ response]]
   (println "Error getting phones" response)
   app-state))

(re-frame/register-pure-handler
 :load-phones
 (fn
   [app-state _]
   (ajax/GET "phones/phones.json"
                  {:handler #(re-frame/dispatch [:process-phones-response %1])
                   :error-handler #(re-frame/dispatch [:process-phones-bad-response %1])
                   :response-format :json
                   :keywords? true})
   app-state))

(re-frame/register-pure-handler
 :process-phone-detail-response
 (fn
   [app-state [_ [phone-id response]]]
   (assoc-in app-state [:phone-details (keyword phone-id)] response)))

(re-frame/register-pure-handler
 :process-phone-detail-bad-response
 (fn
   [app-state [_ [phone-id response]]]
   (println "Error getting phone detail for id: " phone-id)
   (println response)
   app-state))

(re-frame/register-pure-handler
 :load-phone-detail
 (fn
   [app-state [_ phone-id]]
   (ajax/GET (str "phones/" phone-id ".json")
             {:handler #(re-frame/dispatch [:process-phone-detail-response [phone-id %1]])
              :error-handler #(re-frame/dispatch [:process-phone-detail-bad-response [phone-id %1]])
              :response-format :json
              :keywords? true})))

(re-frame/register-pure-handler
   :initialise-db             ;; usage: (dispatch [:initialise-db])
   (fn 
     [_ _]                   ;; Ignore both params (db and v). 
     {:phones []
      :phone-details {}
      :search-input ""
      :order-prop "name"}))

(defn handle-search-input-entered
  [app-state [_ search-input]]
  (assoc-in app-state [:search-input] search-input))

(defn handle-order-prop-changed
  [app-state [_ order-prop]]
  (assoc-in app-state [:order-prop] order-prop))

(re-frame/register-pure-handler
 :search-input-entered
 handle-search-input-entered)

(re-frame/register-pure-handler
 :order-prop-changed
 handle-order-prop-changed)
;; -------------------------
;; Views

(defn phone-component
  [phone]
  [:li {:class "thumbnail"}
   [:a {:href (str "#/phones/" (:id phone))}
    [:img {:src (:imageUrl phone)}]]
   [:a {:href (str "#/phones/" (:id phone))} (:name phone)]
   [:p (:snippet phone)]])

(defn matches-query?
  [search-input phone]
  (if (= "" search-input)
    true
    (boolean (or
              (re-find (re-pattern search-input) (:name phone))
              (re-find (re-pattern search-input) (:snippet phone))))))

(defn phones-component
  []
  (let [phones (re-frame/subscribe [:phones])
        search-input (re-frame/subscribe [:search-input])
        order-prop (re-frame/subscribe [:order-prop])]
    (fn []
      [:ul {:class= "phones"}
       (for [phone (->> @phones
                        (filter (partial matches-query? @search-input))
                        (sort-by (keyword @order-prop)))]
         ^{:key phone} [phone-component phone])])))

(defn search-component
  []
  (let [search-input (re-frame/subscribe [:search-input])])
  (fn []
    [:div "Search"
     [:input {:on-change #(re-frame/dispatch [:search-input-entered (-> % .-target .-value)])}]]))

(defn mark-selected
  [props order-prop current-prop-value]
  (if (= order-prop current-prop-value)
    (reagent/merge-props props {:selected "selected"})
    props))

(defn order-by-component
  []
  (let [order-prop (re-frame/subscribe [:order-prop])]
    (fn []
      [:div "Sort by: "
       [:select {:on-change #(re-frame/dispatch [:order-prop-changed (-> % .-target .-value)])}
        [:option (mark-selected {:value "name"} @order-prop "Alphabetical") "Alphabetical"]
        [:option (mark-selected {:value "age"} @order-prop "Newest") "Newest"]]])))

(defn home-page []
  [:div {:class "container-fluid"}
   [:div {:class "row"}
    [:div {:class "col-md-2"}
     [search-component]
     [order-by-component]]
    [:div {:class "col-md-10"}
     [phones-component]]]])

(defn phone-page [{phone-id :phone-id}]
  (let [phone (re-frame/subscribe [:phone-query phone-id])]
    (fn []
      [:div
       [:ul {:class "phone-thumbs"}
        (for [image (:images @phone)]
             ^{:key image} [:img {:src image}])]])))

(defn current-page []
  [:div [(session/get :current-page) (session/get :params)]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/phones" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/phones/:phone-id" {:as params}
  (session/put! :current-page #'phone-page)
  (session/put! :params params)
  (re-frame/dispatch [:load-phone-detail (:phone-id params)]))

(defn redirect-to
  [resource]
  (secretary/dispatch! resource)
  (.setToken (History.) resource))

(secretary/defroute "*" []
  (redirect-to "/phones"))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn init! []
  (hook-browser-navigation!)
  (re-frame/dispatch [:initialise-db])
  (re-frame/dispatch [:load-phones])
  (reagent/render-component [current-page] (.getElementById js/document "app")))
