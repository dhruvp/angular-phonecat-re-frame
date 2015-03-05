// Compiled by ClojureScript 0.0-2913 {}
goog.provide('re_frame.middleware');
goog.require('cljs.core');
goog.require('re_frame.utils');
goog.require('re_frame.undo');
goog.require('reagent.ratom');
/**
* Middleware which adapts a pure handler to the non-pure standard calling convention
*/
re_frame.middleware.pure = (function pure(handler){
return (function new_handler(app_db,event_vec){
if((function (){var G__18858 = app_db;
if(G__18858){
var bit__3905__auto__ = null;
if(cljs.core.truth_((function (){var or__3224__auto__ = bit__3905__auto__;
if(cljs.core.truth_(or__3224__auto__)){
return or__3224__auto__;
} else {
return G__18858.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__18858.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__18858);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__18858);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("re-frame: pure not given a Ratom"),cljs.core.str(((cljs.core.map_QMARK_.call(null,app_db))?". Perhaps \"pure\" is used twice.":null))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null))))].join('')));
}

return cljs.core.reset_BANG_.call(null,app_db,handler.call(null,cljs.core.deref.call(null,app_db),event_vec));
});
});
/**
* Middleware which stores an undo checkpoint, prior to handler being called.
*/
re_frame.middleware.undoable = (function undoable(handler){
return (function new_handler(app_db,event_vec){
re_frame.undo.store_now_BANG_.call(null);

return handler.call(null,app_db,event_vec);
});
});
/**
* Middleware which removes the first bit of v, and "expands" other parameters.
* Normally handlers get two paramters:  db and v.
* With this middleware, if v was [:id 1 2], the handler would be called with db, 1, 2.
* Use the middleware in the very last place -- right-most in  comp
*/
re_frame.middleware.apply_event = (function apply_event(handler){
return (function new_handler(db,v){
return cljs.core.apply.call(null,handler,cljs.core.cons.call(null,db,cljs.core.rest.call(null,v)));
});
});
/**
* Supplies a sub-tree of `app-db` to the handler.
* Assumes pure is in the middleware pipeline prior.
* Grafts the result back into app-db.
*/
re_frame.middleware.path = (function path(p){
return (function middleware(handler){
return (function new_handler(db,v){
if((function (){var G__18866 = db;
if(G__18866){
var bit__3905__auto__ = null;
if(cljs.core.truth_((function (){var or__3224__auto__ = bit__3905__auto__;
if(cljs.core.truth_(or__3224__auto__)){
return or__3224__auto__;
} else {
return G__18866.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__18866.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__18866);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__18866);
}
})()){
[cljs.core.str("re-frame: \"path\" used in middleware, without prior \"pure\".")].join('');
} else {
}

if(!(cljs.core.vector_QMARK_.call(null,p))){
re_frame.utils.warn.call(null,"re-frame: \"path\" expected a vector, got: ",v);
} else {
}

return cljs.core.assoc_in.call(null,db,p,handler.call(null,cljs.core.get_in.call(null,db,p),v));
});
});
});
/**
* Middleware that applies a validation function to the db after the handler is finished.
* The validation function f, might assoc warnings and errors to the new state, created by the handler.
* By validation, I mean validation of what the user has entered, or the state they have taken the app too
*/
re_frame.middleware.validate = (function validate(f){
return (function middleware(handler){
return (function new_handler(db,v){
return f.call(null,handler.call(null,db,v));
});
});
});
/**
* Middleware that logs events (vec) using to the given logger fucntion
*/
re_frame.middleware.log_events = (function log_events(logger){
return (function middleware(handler){
return (function new_handler(db,v){
logger.call(null,v);

return handler.call(null,db,v);
});
});
});

//# sourceMappingURL=middleware.js.map