// Compiled by ClojureScript 0.0-2913 {}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.middleware');
goog.require('re_frame.subs');
goog.require('re_frame.handlers');
re_frame.core.register_handler = re_frame.handlers.register;
re_frame.core.dispatch = re_frame.handlers.dispatch;
re_frame.core.dispatch_sync = re_frame.handlers.dispatch_sync;
re_frame.core.register_subs = re_frame.subs.register;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.pure = re_frame.middleware.pure;
re_frame.core.undoable = re_frame.middleware.undoable;
re_frame.core.path = re_frame.middleware.path;
re_frame.core.validate = re_frame.middleware.validate;
re_frame.core.log_events = re_frame.middleware.log_events;
re_frame.core.apply_event = re_frame.middleware.apply_event;
re_frame.core.register_pure_handler = (function() {
var register_pure_handler = null;
var register_pure_handler__2 = (function (id,handler){
return re_frame.core.register_handler.call(null,id,re_frame.core.pure,handler);
});
var register_pure_handler__3 = (function (id,middleware,handler){
return re_frame.core.register_handler.call(null,id,cljs.core.comp.call(null,re_frame.core.pure,middleware),handler);
});
register_pure_handler = function(id,middleware,handler){
switch(arguments.length){
case 2:
return register_pure_handler__2.call(this,id,middleware);
case 3:
return register_pure_handler__3.call(this,id,middleware,handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
register_pure_handler.cljs$core$IFn$_invoke$arity$2 = register_pure_handler__2;
register_pure_handler.cljs$core$IFn$_invoke$arity$3 = register_pure_handler__3;
return register_pure_handler;
})()
;

//# sourceMappingURL=core.js.map