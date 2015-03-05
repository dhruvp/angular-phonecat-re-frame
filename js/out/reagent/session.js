// Compiled by ClojureScript 0.0-2913 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Get the key's value from the session, returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get = (function() { 
var get__delegate = function (k,p__12325){
var vec__12327 = p__12325;
var default$ = cljs.core.nth.call(null,vec__12327,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__12325 = null;
if (arguments.length > 1) {
var G__12328__i = 0, G__12328__a = new Array(arguments.length -  1);
while (G__12328__i < G__12328__a.length) {G__12328__a[G__12328__i] = arguments[G__12328__i + 1]; ++G__12328__i;}
  p__12325 = new cljs.core.IndexedSeq(G__12328__a,0);
} 
return get__delegate.call(this,k,p__12325);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__12329){
var k = cljs.core.first(arglist__12329);
var p__12325 = cljs.core.rest(arglist__12329);
return get__delegate(k,p__12325);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
reagent.session.put_BANG_ = (function put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
* Gets the value at the path specified by the vector ks from the session,
* returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get_in = (function() { 
var get_in__delegate = function (ks,p__12330){
var vec__12332 = p__12330;
var default$ = cljs.core.nth.call(null,vec__12332,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__12330 = null;
if (arguments.length > 1) {
var G__12333__i = 0, G__12333__a = new Array(arguments.length -  1);
while (G__12333__i < G__12333__a.length) {G__12333__a[G__12333__i] = arguments[G__12333__i + 1]; ++G__12333__i;}
  p__12330 = new cljs.core.IndexedSeq(G__12333__a,0);
} 
return get_in__delegate.call(this,ks,p__12330);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__12334){
var ks = cljs.core.first(arglist__12334);
var p__12330 = cljs.core.rest(arglist__12334);
return get_in__delegate(ks,p__12330);
});
get_in.cljs$core$IFn$_invoke$arity$variadic = get_in__delegate;
return get_in;
})()
;
/**
* Replace the current session's value with the result of executing f with
* the current value and args.
* @param {...*} var_args
*/
reagent.session.swap_BANG_ = (function() { 
var swap_BANG___delegate = function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
};
var swap_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__12335__i = 0, G__12335__a = new Array(arguments.length -  1);
while (G__12335__i < G__12335__a.length) {G__12335__a[G__12335__i] = arguments[G__12335__i + 1]; ++G__12335__i;}
  args = new cljs.core.IndexedSeq(G__12335__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__12336){
var f = cljs.core.first(arglist__12336);
var args = cljs.core.rest(arglist__12336);
return swap_BANG___delegate(f,args);
});
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___delegate;
return swap_BANG_;
})()
;
/**
* Remove all data from the session and start over cleanly.
*/
reagent.session.clear_BANG_ = (function clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
* Remove a key from the session
*/
reagent.session.remove_BANG_ = (function remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
* Associates a value in the session, where ks is a
* sequence of keys and v is the new value and returns
* a new nested structure. If any levels do not exist,
* hash-maps will be created.
*/
reagent.session.assoc_in_BANG_ = (function assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__12337_SHARP_){
return cljs.core.assoc_in.call(null,p1__12337_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__12338){
var vec__12340 = p__12338;
var default$ = cljs.core.nth.call(null,vec__12340,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__12338 = null;
if (arguments.length > 1) {
var G__12341__i = 0, G__12341__a = new Array(arguments.length -  1);
while (G__12341__i < G__12341__a.length) {G__12341__a[G__12341__i] = arguments[G__12341__i + 1]; ++G__12341__i;}
  p__12338 = new cljs.core.IndexedSeq(G__12341__a,0);
} 
return get_BANG___delegate.call(this,k,p__12338);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__12342){
var k = cljs.core.first(arglist__12342);
var p__12338 = cljs.core.rest(arglist__12342);
return get_BANG___delegate(k,p__12338);
});
get_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_BANG___delegate;
return get_BANG_;
})()
;
/**
* Destructive get from the session. This returns the current value of the path
* specified by the vector ks and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_in_BANG_ = (function() { 
var get_in_BANG___delegate = function (ks,p__12343){
var vec__12345 = p__12343;
var default$ = cljs.core.nth.call(null,vec__12345,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__12343 = null;
if (arguments.length > 1) {
var G__12346__i = 0, G__12346__a = new Array(arguments.length -  1);
while (G__12346__i < G__12346__a.length) {G__12346__a[G__12346__i] = arguments[G__12346__i + 1]; ++G__12346__i;}
  p__12343 = new cljs.core.IndexedSeq(G__12346__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__12343);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__12347){
var ks = cljs.core.first(arglist__12347);
var p__12343 = cljs.core.rest(arglist__12347);
return get_in_BANG___delegate(ks,p__12343);
});
get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_in_BANG___delegate;
return get_in_BANG_;
})()
;
/**
* 'Updates' a value in the session, where ks is a
* sequence of keys and f is a function that will
* take the old value along with any supplied args and return
* the new value. If any levels do not exist, hash-maps
* will be created.
* @param {...*} var_args
*/
reagent.session.update_in_BANG_ = (function() { 
var update_in_BANG___delegate = function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__12348_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__12348_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__12349__i = 0, G__12349__a = new Array(arguments.length -  2);
while (G__12349__i < G__12349__a.length) {G__12349__a[G__12349__i] = arguments[G__12349__i + 2]; ++G__12349__i;}
  args = new cljs.core.IndexedSeq(G__12349__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__12350){
var ks = cljs.core.first(arglist__12350);
arglist__12350 = cljs.core.next(arglist__12350);
var f = cljs.core.first(arglist__12350);
var args = cljs.core.rest(arglist__12350);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map