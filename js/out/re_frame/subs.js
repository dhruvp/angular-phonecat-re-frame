// Compiled by ClojureScript 0.0-2913 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.utils');
goog.require('re_frame.db');
re_frame.subs.key__GT_fn = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* register a hander function for an id
*/
re_frame.subs.register = (function register(key_v,handler_fn){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,re_frame.subs.key__GT_fn),key_v)){
re_frame.utils.warn.call(null,"re-frame: overwriting subscription-handler for: ",key_v);
} else {
}

return cljs.core.swap_BANG_.call(null,re_frame.subs.key__GT_fn,cljs.core.assoc,key_v,handler_fn);
});
/**
* returns a reagent/reaction which observes a part of the
*/
re_frame.subs.subscribe = (function subscribe(v){
var key_v = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.key__GT_fn),key_v);
if((handler_fn == null)){
return re_frame.utils.warn.call(null,"re-frame: no subscription handler registered for: \"",key_v,"\".  Returning a nil subscription.");
} else {
return handler_fn.call(null,re_frame.db.app_db,v);
}
});

//# sourceMappingURL=subs.js.map