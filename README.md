# Draft of the angular-phonecat tutorial in re-frame #

## Sources ##

A lot of this work was done referencing vvvvvalvalval's excellent Reagent port of the Angular Phonecat Tutorial [here] (https://github.com/vvvvalvalval/reagent-phonecat). Additionally, Mike Thompson's excellent [writeup](https://github.com/Day8/re-frame) on Re-Frame was consulted extensively. Finally, I based the actual tutorial on the official Angular Phonecat tutorial [here] (https://docs.angularjs.org/tutorial).

## Setup ##

Run lein ring server followed by lein figwheel in the directory to see the page.

Each step of the tutorial is in a different branch of this repository (step-1, step-2, ... ).

The relevant code is in src/cljs/phonecat_re_frame/core.cljs

The following blog post walks you through each step: TO BE INSERTED.

## Diffs ##

* Step 1 and Step 0: <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-0...step-1" target="_blank"> Diff </a>
* Step 2 and Step 1: <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-1...step-2" target="_blank"> Diff </a>
* Step 3 and Step 2: <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-2...step-3" target="_blank"> Diff </a>
* Step 4 and Step 3: <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-3...step-4" target="_blank"> Diff </a>
* Step 5 and Step 4: <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-4...step-5" target="_blank"> Diff </a>
* Step 6 and Step 5: <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-5...step-6" target="_blank"> Diff </a>
* Step 7 and Step 6: <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-6...step-7" target="_blank"> Diff </a>
* Step 8 and Step 7: <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-7...step-8" target="_blank"> Diff </a>
* Step 9 and Step 8: <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-8...step-9" target="_blank"> Diff </a>
* Step 10 and Step 9: <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-9...step-10" target="_blank"> Diff </a>
## Step 0 - Setting up ##

### <a href="https://github.com/dhruvp/angular-phonecat-re-frame/tree/step-0" target="_blank">Diff</a>###

### Explanation ###

Okay let's get started! Step 0 is where we set up our application. The steps are as follows:

1. Download <a href="http://leiningen.org/" target="_blank">Leiningen</a>
2. Run lein new reagent angular-phonecat-re-frame

Awesome! You should have the scaffolding for the app. Let's try and understand the pieces of the scaffolding.

* project.clj

  * Project.clj defines the libraries your project depends on and its build settings. See <a href="https://github.com/technomancy/leiningen#configuration" target="_blank">here</a> for more information.

* src/cljs/phonecat_re_frame/

  * This is where most of our main application logic will go. During the build step, we are going to look at the cljs code here and compile it into javascript.

* resources/templates

  * This is where we will place our html.

* resources/public

  * This will hold the css, images, js, and other resources for our project. After the build compiles the clojurescript into javascript, it will place the javascript in a subdirectory of this folder.

Now go ahead and open src/cljs/phonecat_re_frame/core.cljs. This is where our main logic will go! I'm going to assume that you have a basic idea of reagent from here going forward. If you don't check out my <a href="http://dhruvp.github.io/2015/02/23/mailchimip-clojure/" target="_blank">post</a> on reagent where I go into further detail than I'll have room for here.

## Step 1 - A basic phone page ##

### <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-0...step-1" target="_blank">Diff</a> ###

### Explanation ###

In our first step, we just fill out our home page to show a little information about some phones. If you haven't seen hiccup before this should be a good introduction. Hiccup allows us to define html elements using Clojure vectors. Let's look at an example to understand how it works. In the current step, we added the following Hiccup Vector:

```clojure
[:ul
 [:li
  [:span "Nexus S"]
  [:p "Fast just got faster with Nexus S."]]
 [:li
  [:span "Motorola XOOM with Wi-Fi"]
  [:p "The Next, Next Generation tablet."]]]
```

This translates into the following html:

```html
<ul>
  <li>
    <span>"Nexus S"</span>
    <p>"Fast just got faster with the Nexus S."</p>
  </li>
  <li>
    <span>"Motorola XOOM with Wi-Fi"</span>
    <p>"The Next, Next Generation tablet."</p>
  </li>
</ul>
```

So what's going on here? The first element in the vector is just the tag. So [:ul] indicates that we are creating a <ul> element. Next, we can nest elements inside other elements by nesting vectors. So [:ul [:li]] translates to <ul><li></li></ul>. To fill out the body of the element, we just add the body details after the tag name in the vector. So in our example [:span "Nexus S"] gives us <span>Nexus S</span>. Pretty neat right?

The awesome part about this is that our HTML is now a first class data structure that we can compose, return, and apply functions upon. Basically we have way more power over them! You'll see how this will come in handy as we write some basic templating functions in future steps.

## Step 2 - Using real data ##

### <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-1...step-2">Diff</a> ###

### Explanation ###

Now we are going to change our phones page to use data from a database that we setup. The re-frame architecture espouses the idea of storing all your application data in a single place. This isolates state mutations to a single place and also ensures that all your data is in sync. Ok enough talk. How do we actually set up this db?

#### Handlers ####

In re-frame, we make mutations to our db by creating handlers. A handler is just a function that takes in the current application state and some parameters and returns a new application state. What could be simpler?

We create our handler as an anonymous function and then register it by passing it into re-frame/register-pure-handler (pure handler just indicates that our handler doesn't mutate state).

```clojure
(re-frame/register-pure-handler
   :initialise-db             ;; usage: (dispatch [:initialise-db])
   (fn
     [db v]                   ;; Ignore both params (db and v).
     {:phones [{:name "Nexus S" :snippet "Fast just got faster with Nexus S."}
               {:name "Motorola XOOM™ with Wi-Fi" :snippet "The Next, Next Generation tablet."}
               {:name "Motoral Xoom" :snippet "The Next, Next Generation tablet."}]}))
```

So above, we initialize our db as a hashmap with a key :phones and a corresponding value.

In the above declaration, we have also given our handler a name :initialise-db that re-frame will use to lookup the handler.

#### Dispatchers ####

Now that we've created our handler, how do we call it? That's done in this little bit:

```clojure
(re-frame/dispatch [:initialise-db])
```

We call handlers by calling the re-frame dispatch function with the name of our handler. So in summary, here's the process of what's going on:

1. We call dispatch with a handler name.
2. Re-frame looks up the handler and calls it with the current app data and any additional params you passed it.
3. Re-frame updates the app data with the output of the handler.

This is going to be our flow for ALL events. Dispatch is called with a handler, the handler creates a new db, and we use that db going forward. But how does our app know when parts of the db have changed? We would need to update our views right?

#### Subscriptions ####

In Re-frame, we do that through subscriptions, which we use in the following code:

```clojure
(re-frame/register-subs        ;; a new subscription handler
   :phones             ;; usage (subscribe [:phones])
   (fn [db]
     (reaction (:phones @db))))  ;; pulls out :phones
```

Just like register-handler, register-subs takes in two arguments: a name, and a function. The function in this case returns an ratom that represents some part of the data (Don't worry we'll get into ratoms in a sec). We then use this subscription to always get access to the latest value of :phones in our db. We use it as below:

```clojure
(let [phones (re-frame/subscribe [:phones])]
```

Now, whenever we call @phones, we will always have the latest value of phones in our database. The beautiful part about this is that @phones will automatically update when the underlying value gets changed in our database. Wow! That to me is pretty sick. Ok but what's the dark magic going on here?

Our subscriber function,

```clojure

(fn [db]
  (reaction (:phones @db))))  ;; pulls out :phones

```

returns an ratom representing the latest value of :phones in our app database. This is achieved through using Reagent's reaction function. Reaction takes in a function that depends on an ratom, and returns another ratom. Now whenever the value of the ratom we depend on changes, @db in this case, the function is recomputed and the value of the ratom that reaction returns updates also. So say I had the following:

```clojure

(def db (ratom {:a 1}))
(def a-value (reaction (:a @db)))

```

At this point, @a-value will be 1. If I update db and print a-value,

```clojure

(assoc db [:a] 3)

(println @a-value)
; 3
{% endhighlight clojure %}

@a-value automatically updates! Under the hood, reaction just creates a callback that fires whenever @db changes. It then sets resets the output of its returned ratom to be the result of calling this callback on the new @db.

#### View Layer ####

We've also updated our view layer in a few important ways. First, we've created a separate function that is responsible for displaying each individual phone item. We see it here:

```clojure

(defn phone-component
  [phone]
  [:li
   [:span (:name @phone)]
   [:p (:snippet @phone)]])

```

Check out how freaking easy it is to create separate view components! This component just takes in a phone ratom and displays its name and snippet. Simple.
We then also create a component for displaying the phones list and have it use the phone-component we defined above:

```clojure
(defn phones-component
  []
  (let [phones (re-frame/subscribe [:phones])] ; subscribe to the phones value in our db
    (fn []
      [:ul (for [phone in @phones] ^{:key phone} [phone-component phone] @phones)])))

```

In the above snippet we first subscribe to the phones value in our db. Then, we use the power of hiccup to iterate over each phone in our database (for [phone in @phones]) and display a separate phone-component for it. We use the phone-component function by calling [phone-component phone]. To understand how this works see Mike Thompson's awesome explanation of Reagent components [here](https://github.com/Day8/re-frame/wiki/Creating-Reagent-Components). Note how we don't need to use any new templating language - we just use clojurescript!

## Step 3 - Search##

### <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-2...step-3" target="_blank">Diff</a> ###

Now let's add a little search box that allows us to search for phones and just display the ones we are interested in.

#### Handlers ####

As in the previous step, we start by adding in a handler that fires when a user types something into the search box. This handler will update our app data with the new search term.

```clojure
(defn handle-search-input-entered
  [app-state [_ search-input]]
  (assoc-in app-state [:search-input] search-input))
```

```clojure
(re-frame/register-pure-handler
 :search-input-entered
 handle-search-input-entered)
```

#### Subscribers ####

We also create a new subscriber to get the latest search term from the db:

```clojure
(re-frame/register-subs
 :search-input
 (fn [db]
   (reaction (:search-input @db))))
```

#### View Layer ####

Next, we create a simple search component that calls our new handler whenever the user types something in:

```clojure
(defn search
  []
  (let [search-input (re-frame/subscribe [:search-input])])
  (fn []
    [:input {:on-change #(re-frame/dispatch [:search-input-entered (-> % .-target .-value)])}]))
```

Note how we are passing a value into our handler function by giving dispatch a vector of two items: the first is the name of the handler, the next is the additional argument to that handler.

Finally, we update our phones-component to only show phones that match the search term in some way:

```clojure
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
        search-input (re-frame/subscribe [:search-input])]
    (fn []
      [:ul {:class "phones"}
       (for [phone (filter (partial matches-query? @search-input) @phones)]
         ^{:key phone} [phone-component phone])])))
```

Here, we use Clojure's filter function to just filter our phones vector with the function matches-query?. Note how we don't have to create any messy callbacks or anything. @search-input automatically updates with the new value!

matches-query just uses a regexp to check if the search term is present in the name or snippet of the phone. Again, notice how we don't have to define any special filters in our template. We are using plain old Clojure code.


## Step 4 - Sorting our phones ##

### <a href="https://github.com/dhruvp/angular-phonecat-re-frame/compare/step-3...step-4" target="_blank">Diff</a> ###

Step 4 is almost identical in nature to step 3. We are going to store an 'order-prop' property in our app-db and use it to sort the phones in the list. In the view layer, we simply create an order-by component that will allow users to select how they want their list to be ordered. To actually get the ordering to be used, we change this pieces of the phones-component:

```clojure
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
         ^{:key phone} [phone-component @phone])])))
```

So we just subscribe to the order-property and sort our phones list by the order property. Again, very simple clojure syntax. And notice how I don't have to write watches, or run digest cycles etc. My subscription to order-prop will automatically update when order-prop changes and as a result the phones-component will automatically update. This is really cool.

## Step 5 - Loading the phones list via ajax ##

Now, we are going to do away with the mock phones data and load it in via ajax. To do so, we start by dispatching a call to make the ajax request on page load:

```clojure
(re-frame/dispatch [:load-phones])
```

We then create a handler to process this response. Our handler will simple make the Ajax calls and make a call out to dispatch to process their responses. Here's what the handler will be:

```clojure
(re-frame/register-handler
 :load-phones
 (fn
   [app-state _]
   (ajax/GET "phones/phones.json"
                  {:handler #(re-frame/dispatch [:process-phones-response %1])
                   :error-handler #(re-frame/dispatch [:process-phones-bad-response %1])
                   :response-format :json
                   :keywords? true})
   app-state))
```

Notice how we are passing in the response as an argument to the handler by making it the second item of the vector in [:process-phones-response %1].

Let's now write handlers for processing the ajax request responses:

```clojure

(re-frame/register-handler
 :process-phones-response
 (fn
   [app-state [_ response]]
   (assoc-in app-state [:phones] response)))

(re-frame/register-handler
 :process-phones-bad-response
 (fn
   [app-state [_ response]]
   (println "Error getting phones" response)
   app-state))
```

Let's focus on the success response handler. We take in the response handler by destructuring the second argument passed in. If you're curious, the second argument to all handlers is the exact vector you pass in to dispatch. So in this case, it is just a vector of two elements: [:process-phones-response response]. We use our response to create a new app-state with the response as the new value for phones. Watch how when this updates, everything in our view will auto-update as well! Under the hood, what happens is that all subscribers depending on app-db are recomputed and all views that have dependencies on these subscribers are re-rendered if their subscriber values changed.

## Step 6 - Adding thumbnails ##

We are now going to add simple thumbnails to our phone component. In the angular version of this example, this is an introduction to ng-src so you know how to insert data into image links. For us, we don't have to worry about learning anything new! We just again use basic clojure syntax to place the data from phones.json as the src for the image. We do so below:

```clojure
(defn phone-component
  [phone]
  [:li {:class "thumbnail phone-listing"}
   [:a {:href (str "#/phones/" (:id phone))
        :class "thumb"}
    [:img {:src (:imageUrl phone)}]]
   [:a {:href (str "#/phones/" (:id phone))} (:name phone)]
   [:p (:snippet phone)]])
```

This again may not seem like a big deal but it's an example of how we have to learn far fewer things to get up and running with this framework. The incidental complexity is minimal.

## Step 7 - Adding routing to other pages ##

This step is a little more tricky than the others but still not too difficult. Our goal is to create a separate page for each individual phone with the url /phones/:phone-id. From a view layer perspective, each phone page is just going to point to a new component that we render.

For now, let's call this the phone-page:

```clojure
(defn phone-page [{phone-id :phone-id}]
  [:div "TBD: detail view for"
   [:span phone-id]])
```

Now let's get out routes to point to this page. We use the <a href="https://github.com/gf3/secretary" target="_blank">Secretary</a> library to do this (unlike Angular, re-frame attempts to do as little as possible so it doesn't give you routing etc.). We configure our routing by creating a new route via secretary/defroute!:

```clojure
(secretary/defroute "/phones/:phone-id" {:as params}
  (session/put! :current-page #'phone-page)
  (session/put! :params params))
```

In the above snippet, we declare that when the route matches "/phones/:phone-id", we set the current-page component to be phone-page. Additionally, notice how we are collecting the phone-id of the route. We destructure the phone-id in the url with the statement {:as params} and then store it for future use via (session/put! :params params). So where do we use these params? When we render the current-page of course!

This is what current-page is now going to look like:

```clojure
(defn current-page []
  [(session/get :current-page) (session/get :params)])
```

This just calls the component that :current-page points to with :params as the argument. So when you hit the url /phones/:phone-id, it just calls following component:

```clojure
(defn phone-page [{phone-id :phone-id}]
  [:div "TBD: detail view for"
   [:span phone-id]])
```

How do we actually get the phone-id of the url? We just extract it from the params argument passed in via argument destructuring - [{phone-id :phone-id}]. Great! This should give us the scaffolding we need for pages for each phone. Let's also just make sure that we catch all other urls and send them to the phones-list view.

```clojure
(secretary/defroute "*" []
  (redirect-to "/phones"))
```

What is redirect? It is a little helper function we define below:

```clojure
(defn redirect-to
  [resource]
  (secretary/dispatch! resource)
  (.setToken (History.) resource))
```
This tells secretary to load up the route referring to resource. More interestingly, the next line, (.setToken (History.) resource) uses Google's Closure library to reset the url displayed in the browser to be the resource we pass in.

And with that we should have new pages set up!

## Step 8 - Filling out the Phone Detail Page ##

Now let's make our individual phone pages actually have something useful! Like earlier, we create ajax calls to load the phone info for the resource. That code should be very familiar from Step 5. Instead, let's focus on how we achieve some cool templating using reagent in this step. If you look at the angular html, you'll notice a ton of repetition:

```html
<li>
  <span>Battery</span>
  <dl>
    <dt>Type</dt>
    <dd>{{phone.battery.type}}</dd>
    <dt>Talk Time</dt>
    <dd>{{phone.battery.talkTime}}</dd>
    <dt>Standby time (max)</dt>
    <dd>{{phone.battery.standbyTime}}</dd>
  </dl>
</li>
<li>
  <span>Storage and Memory</span>
  <dl>
    <dt>RAM</dt>
    <dd>{{phone.storage.ram}}</dd>
    <dt>Internal Storage</dt>
    <dd>{{phone.storage.flash}}</dd>
  </dl>
</li>
<li>
  <span>Connectivity</span>
  <dl>
    <dt>Network Support</dt>
    <dd>{{phone.connectivity.cell}}</dd>
    <dt>WiFi</dt>
    <dd>{{phone.connectivity.wifi}}</dd>
    <dt>Bluetooth</dt>
    <dd>{{phone.connectivity.bluetooth}}</dd>
    <dt>Infrared</dt>
    <dd>{{phone.connectivity.infrared}}</dd>
    <dt>GPS</dt>
    <dd>{{phone.connectivity.gps}}</dd>
  </dl>
</li>
<li>
...
```

Looks like all these html components are basically doing the same thing. They have a heading in a span tag and a list of attributes. The name of the attributes are in a <dt> tag and the values are in <dd> tags. Let's encapsulate this idea in a template function:

```clojure
(defn phone-info-template
  [section-title attributes-map]
  [:li
   [:span section-title]
   [:dl
    (map (fn [attribute]
           ^{:key attribute} [:div
                              [:dt (:name attribute)]
                              [:dd (:value attribute)]])
         attributes-map)]])
```

In the above function, we created a generic version of just the type of component that we described. We take in a section title and a set of attributes in a hashmap. We place the section title in a span at the top of the component. We then iterate over the attributes and convert them into <dt> and <dd> elements. Neat right? Ok, how do we use it? Let's see an example below:

```clojure
(defn battery
  [battery]
  [phone-info-template "Battery" [{:name "Type"
                                   :value (:type @battery)}
                                  {:name "Talk Time"
                                   :value (:talkTime @battery)}
                                  {:name "Standby time (max)"
                                   :value (:standbyTime @battery)}]])
```
So this battery component just calls phone-info template with the section title set to "Battery" and a set of custom attributes. We can make a nearly identical one for storage:

```clojure
(defn storage-and-memory
  [storage]
  [phone-info-template "Storage And Memory"  [{:name "RAM"
                                               :value (:ram @storage)}
                                              {:name "Internal Storage"
                                               :value (:flash @storage)}]])
```

If you're from the Angular world you're probably thinking - hey I can just make an isolate scoped directive and achieve the same thing. This is totally true. But I do think it's a lot simpler to achieve the same logic here. Creating the template is just writing a function - no need for all the boilerplate that comes with defining a directive. And calling it is just as easy. In this way, I think the reagent + re-frame framework encourages modularity and code reuse more pronouncedly than Angular in its current state does.

Let's now see how these components are used in the top level phone-component.

```clojure
(defn specs
  [phone]
  [:ul {:class "specs"}
   [availability (reaction (:availiability @phone))]
   [battery (reaction (:battery @phone))]
   [storage-and-memory (reaction (:storage @phone))]
   [connectivity (reaction (:connectivity @phone))]
   [android (reaction (:android @phone))]
   [display (reaction (:display @phone))]
   [hardware (reaction (:hardware @phone))]
   [camera (reaction (:camera @phone))]
   [additional-features (reaction (:additionalFeatures @phone))]])

(defn phone-page [{phone-id :phone-id}]
  (let [phone (re-frame/subscribe [:phone-query phone-id])]
    (fn []
      [:div
       [:img {:src (first (:images @phone))
              :class "phone"}]
       [:h1 (:name @phone)]
       [:p (:description @phone)]
       [thumbnails phone]
       [specs phone]])))
```

Check out how specs just calls each of the individual template components we defined. It's very easy to tell that specs is just composing a bunch of smaller components. Turning our attention to the phone-page component, we see that it creates a subscription to a phone here:   (let [phone (re-frame/subscribe [:phone-query phone-id])]. This shows how you can pass in parameters to a subscribe call. In this case, we are passing in a phone-id to re-frame/subscribe to only subscribe to updates for a given phone. We then just pass that phone into the other subcomponents that will update on changes to the phone.

Let's check out what the subscription function phone-query looks like that we used in the above phone component:

```clojure
(re-frame/register-sub
 :phone-query
 (fn [db [_ phone-id]]
   (let [phone-details-reaction (reaction (:phone-details @db))]
     (reaction ((keyword phone-id) @phone-details-reaction)))))
```

Here, we take in a phone-id and just get the value associated with that phone-id in the phone-details map in our db. Notice how we are chaining reactions here. The first reaction updates the value of phone-details-reaction whenever the underlying app-db changes. The next reaction just regets the value associated with the phone-id keyword in phone-details whenever phone-details changes. In this way, we are allowing changes from the central app-db to flow throughout our system.

What's even cooler about the above subscription is that it's an example of how you can keep non-trivial <a href="http://en.wikipedia.org/wiki/Materialized_view" target="_blank">materialized views</a> in your app that auto-update. Why is this useful? Say we go back to our list of phones view and we want to always show the user the number of unique brands available in the list. This is a nontrivial computation - we have to go through all the phones and see which ones are from different brands. In Angular, I would achieve this by creating a watch on the list of phones that runs on every digest and then computes this list of uniques whenever the list of phones changes. The problem is watching objects sucks as it is an expensive computation that runs on every digest cycle potentially! Alternatively, whenever I update my list of phones, I can have it emit a message and listen for that message to recalculate the new materialized view. This again is non ideal as I have to start worrying about an eventing system and remembering to remove event listeners to prevent memory leaks etc.

The great thing about re-frame is that calculating such materialized views is absolutely trivial for me, and allows me to just focus on the query and not how to keep the query up to date.


## Step 9 - Adding in checkmarks instead of booleans ##
This step is again an example of how re-frame has very little incidental complexity. In the Angular example, the goal here is to create a filter that converts a boolean into a checkmark as follows:

```javascript
angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
```

In our setup, we don't have to deal with any new concepts just to apply some boolean logic on an item in the view. We achieve the same thing with the following Clojure code:

```clojure
[:dd (condp = (:value attribute)
       true "\u2713"
       false "\u2718"
       (:value attribute))]])
```

This logic does the following. It checks the value of the attribute - if it's true, it display the checkmark '\u2713', if it's false it display a cross '\u2718'. Otherwise, it just displays the value as it is. While this isn't especially less verbose I like how I don't have to learn any new ideas to implement it - just Clojure!

## Step 10 - Updating the thumbnail on click ##
In this final step, we are going to update the main thumbnail displayed in the phone page based on what thumbnail the user clicks on. This is again a simple application of the re-frame dispatch, handler, subscribe cycle that we are now used to.

### Dispatch ###

We call dispatch by adding an on-click handler to an image as shown below:
```clojure

(defn thumbnails
  [phone]
  [:ul {:class "phone-thumbs"}
   (for [image (:images @phone)]
     ^{:key image} [:li [:img {:src image
                               :class "phone"
                               :on-click #(re-frame/dispatch [:set-image image])}]])])
```

### Handler ###

We then create a simple handler to fold this data into our app-db.

```clojure
(re-frame/register-handler
 :set-image
 (fn
   [app-state [_ selected-image-url]]
   (assoc-in app-state [:phone-details :selected-image-url] selected-image-url)))
```

### Subscription ###

Next we create a subscription to get the selected image as it's updated:

```clojure
(re-frame/register-sub
 :selected-image-url
 (fn [db [_ phone-id]]
   (let [phone (re-frame/subscribe [:phone-query phone-id])
         phone-details (re-frame/subscribe [:phone-details])
         images (reaction (:images @phone))]
     (reaction
      (if @phone-details
        (if-let [image-url (:selected-image-url @phone-details)]
          image-url
          (first @images)))))))
```

Ok this looks a bit more involved right? Let's break down what's going on. At its core, this function just returns the :selected-image-url attribute of :phone-details in our app-db. If this is not set, it instead just returns the first image of the phone we are interested in.

This logic is achieved very simply in the following if-let statement:
```clojure
(if-let [image-url (:selected-image-url @phone-details)]
  image-url
  (first @images))
```
But how do we know what @images and @phone-details are? We just get those via subscribe calls as defined in the let statement. Cool! This way they auto-update as we desire.

Finally, to get our phone-page to display this selected image, we add a simple subscriber and call it in our view:

```clojure

(defn phone-page [{phone-id :phone-id}]
  (let [phone (re-frame/subscribe [:phone-query phone-id])
        image-url (re-frame/subscribe [:selected-image-url phone-id])]
    (fn []
      [:div
       [:img {:src @image-url
              :class "phone"}]
       [:h1 (:name @phone)]
       [:p (:description @phone)]
       [thumbnails phone]
       [specs phone]])))

```

We get the image above and store it in image-url. We then simply display it and we're done!
There's no doubt this logic is simpler in angular. You just add an ng-click and have it reset the a scope variable. You then bind that scope variable to be the source of the image you have. But what happens when the phone images suddenly change for some reason? Basically when asynchronous data comes in, this model becomes far harder to work with and re-frame shines.
