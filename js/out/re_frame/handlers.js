// Compiled by ClojureScript 0.0-2913 {}
goog.provide('re_frame.handlers');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.db');
goog.require('reagent.core');
re_frame.handlers.id__GT_fn = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* register a handler for an event
*/
re_frame.handlers.register = (function() {
var register = null;
var register__2 = (function (event_id,handler_fn){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,re_frame.handlers.id__GT_fn),event_id)){
re_frame.utils.warn.call(null,"re-frame: overwriting an event-handler for: ",event_id);
} else {
}

return cljs.core.swap_BANG_.call(null,re_frame.handlers.id__GT_fn,cljs.core.assoc,event_id,handler_fn);
});
var register__3 = (function (event_id,middleware,handler_fn){
return register.call(null,event_id,middleware.call(null,handler_fn));
});
register = function(event_id,middleware,handler_fn){
switch(arguments.length){
case 2:
return register__2.call(this,event_id,middleware);
case 3:
return register__3.call(this,event_id,middleware,handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
register.cljs$core$IFn$_invoke$arity$2 = register__2;
register.cljs$core$IFn$_invoke$arity$3 = register__3;
return register;
})()
;
re_frame.handlers.event_chan = cljs.core.async.chan.call(null);
/**
* Look up the handler for the given event, then call it, passing in 2 parameters.
*/
re_frame.handlers.handle = (function handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var handler_fn = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.handlers.id__GT_fn),event_id);
if((handler_fn == null)){
return re_frame.utils.warn.call(null,"re-frame: no event handler registered for: \"",event_id,"\". Ignoring.");
} else {
return handler_fn.call(null,re_frame.db.app_db,event_v);
}
});
var c__7158__auto___18918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___18918){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___18918){
return (function (state_18900){
var state_val_18901 = (state_18900[(1)]);
if((state_val_18901 === (9))){
var inst_18892 = (state_18900[(2)]);
var state_18900__$1 = state_18900;
var statearr_18902_18919 = state_18900__$1;
(statearr_18902_18919[(2)] = inst_18892);

(statearr_18902_18919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18901 === (8))){
var inst_18888 = (state_18900[(2)]);
var state_18900__$1 = state_18900;
var statearr_18903_18920 = state_18900__$1;
(statearr_18903_18920[(2)] = inst_18888);

(statearr_18903_18920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18901 === (7))){
var inst_18881 = (state_18900[(7)]);
var inst_18894 = (state_18900[(2)]);
var inst_18895 = re_frame.handlers.handle.call(null,inst_18881);
var state_18900__$1 = (function (){var statearr_18904 = state_18900;
(statearr_18904[(8)] = inst_18894);

(statearr_18904[(9)] = inst_18895);

return statearr_18904;
})();
var statearr_18905_18921 = state_18900__$1;
(statearr_18905_18921[(2)] = null);

(statearr_18905_18921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18901 === (6))){
var inst_18890 = cljs.core.async.timeout.call(null,(0));
var state_18900__$1 = state_18900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18900__$1,(9),inst_18890);
} else {
if((state_val_18901 === (5))){
var inst_18885 = reagent.core.flush.call(null);
var inst_18886 = cljs.core.async.timeout.call(null,(20));
var state_18900__$1 = (function (){var statearr_18906 = state_18900;
(statearr_18906[(10)] = inst_18885);

return statearr_18906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18900__$1,(8),inst_18886);
} else {
if((state_val_18901 === (4))){
var inst_18881 = (state_18900[(7)]);
var inst_18881__$1 = (state_18900[(2)]);
var inst_18882 = cljs.core.meta.call(null,inst_18881__$1);
var inst_18883 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_18882);
var state_18900__$1 = (function (){var statearr_18907 = state_18900;
(statearr_18907[(7)] = inst_18881__$1);

return statearr_18907;
})();
if(cljs.core.truth_(inst_18883)){
var statearr_18908_18922 = state_18900__$1;
(statearr_18908_18922[(1)] = (5));

} else {
var statearr_18909_18923 = state_18900__$1;
(statearr_18909_18923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18901 === (3))){
var inst_18898 = (state_18900[(2)]);
var state_18900__$1 = state_18900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18900__$1,inst_18898);
} else {
if((state_val_18901 === (2))){
var state_18900__$1 = state_18900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18900__$1,(4),re_frame.handlers.event_chan);
} else {
if((state_val_18901 === (1))){
var state_18900__$1 = state_18900;
var statearr_18910_18924 = state_18900__$1;
(statearr_18910_18924[(2)] = null);

(statearr_18910_18924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7158__auto___18918))
;
return ((function (switch__7102__auto__,c__7158__auto___18918){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_18914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18914[(0)] = state_machine__7103__auto__);

(statearr_18914[(1)] = (1));

return statearr_18914;
});
var state_machine__7103__auto____1 = (function (state_18900){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_18900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e18915){if((e18915 instanceof Object)){
var ex__7106__auto__ = e18915;
var statearr_18916_18925 = state_18900;
(statearr_18916_18925[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18926 = state_18900;
state_18900 = G__18926;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_18900){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_18900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___18918))
})();
var state__7160__auto__ = (function (){var statearr_18917 = f__7159__auto__.call(null);
(statearr_18917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___18918);

return statearr_18917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___18918))
);

/**
* reagent components use this function to send events.
* Usage example:
* (dispatch [:delete-item 42])
*/
re_frame.handlers.dispatch = (function dispatch(event_v){
if((event_v == null)){
return re_frame.utils.warn.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
return cljs.core.async.put_BANG_.call(null,re_frame.handlers.event_chan,event_v);
}
});
/**
* Invoke the event handler sycronously, avoiding the async-inducing use of core.async/chan
*/
re_frame.handlers.dispatch_sync = (function dispatch_sync(event_v){
return re_frame.handlers.handle.call(null,event_v);
});

//# sourceMappingURL=handlers.js.map