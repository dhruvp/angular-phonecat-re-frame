(ns phonecat-re-frame.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [cljsjs.react :as react]
              [re-frame.core :as re-frame])
    (:require-macros [reagent.ratom  :refer [reaction]])
    (:import goog.History))

;; -------------------------
;; Re-frame data

(re-frame/register-subs        ;; a new subscription handler
   :phones             ;; usage (subscribe [:phones])
   (fn [db]
     (reaction (:phones @db))))  ;; pulls out :phones

(re-frame/register-pure-handler
   :initialise-db             ;; usage: (dispatch [:initialise-db])
   (fn 
     [_ _]                   ;; Ignore both params (db and v). 
     {:phones [{:name "Nexus S" :snippet "Fast just got faster with Nexus S."}
               {:name "Motorola XOOM™ with Wi-Fi" :snippet "The Next, Next Generation tablet."}
               {:name "Motoral Xoom" :snippet "The Next, Next Generation tablet."}]}))

;; -------------------------
;; Views

(defn phone-component
  [name snippet]
  [:li
   [:span name]
   [:p snippet]])

(defn phones-component
  []
  (let [phones (re-frame/subscribe [:phones])]
    (fn []
      [:ul (doall  (map (fn [phone] ^{:key phone} [phone-component (:name phone) (:snippet phone)]) @phones))])))

(defn home-page []
  [phones-component])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))


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
  (reagent/render-component [current-page] (.getElementById js/document "app")))
