// Compiled by ClojureScript 0.0-2913 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22201__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22202__i = 0, G__22202__a = new Array(arguments.length -  0);
while (G__22202__i < G__22202__a.length) {G__22202__a[G__22202__i] = arguments[G__22202__i + 0]; ++G__22202__i;}
  args = new cljs.core.IndexedSeq(G__22202__a,0);
} 
return G__22201__delegate.call(this,args);};
G__22201.cljs$lang$maxFixedArity = 0;
G__22201.cljs$lang$applyTo = (function (arglist__22203){
var args = cljs.core.seq(arglist__22203);
return G__22201__delegate(args);
});
G__22201.cljs$core$IFn$_invoke$arity$variadic = G__22201__delegate;
return G__22201;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__22204){
var map__22206 = p__22204;
var map__22206__$1 = ((cljs.core.seq_QMARK_.call(null,map__22206))?cljs.core.apply.call(null,cljs.core.hash_map,map__22206):map__22206);
var class$ = cljs.core.get.call(null,map__22206__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__22206__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__3224__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3224__auto__)){
return or__3224__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__3212__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3212__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3212__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__7158__auto___22335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___22335,ch){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___22335,ch){
return (function (state_22309){
var state_val_22310 = (state_22309[(1)]);
if((state_val_22310 === (7))){
var inst_22305 = (state_22309[(2)]);
var state_22309__$1 = state_22309;
var statearr_22311_22336 = state_22309__$1;
(statearr_22311_22336[(2)] = inst_22305);

(statearr_22311_22336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (1))){
var state_22309__$1 = state_22309;
var statearr_22312_22337 = state_22309__$1;
(statearr_22312_22337[(2)] = null);

(statearr_22312_22337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (4))){
var inst_22273 = (state_22309[(7)]);
var inst_22273__$1 = (state_22309[(2)]);
var state_22309__$1 = (function (){var statearr_22313 = state_22309;
(statearr_22313[(7)] = inst_22273__$1);

return statearr_22313;
})();
if(cljs.core.truth_(inst_22273__$1)){
var statearr_22314_22338 = state_22309__$1;
(statearr_22314_22338[(1)] = (5));

} else {
var statearr_22315_22339 = state_22309__$1;
(statearr_22315_22339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (13))){
var state_22309__$1 = state_22309;
var statearr_22316_22340 = state_22309__$1;
(statearr_22316_22340[(2)] = null);

(statearr_22316_22340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (6))){
var state_22309__$1 = state_22309;
var statearr_22317_22341 = state_22309__$1;
(statearr_22317_22341[(2)] = null);

(statearr_22317_22341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (3))){
var inst_22307 = (state_22309[(2)]);
var state_22309__$1 = state_22309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22309__$1,inst_22307);
} else {
if((state_val_22310 === (12))){
var inst_22280 = (state_22309[(8)]);
var inst_22293 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22280);
var inst_22294 = cljs.core.first.call(null,inst_22293);
var inst_22295 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22294);
var inst_22296 = console.warn("Figwheel: Not loading code with warnings - ",inst_22295);
var state_22309__$1 = state_22309;
var statearr_22318_22342 = state_22309__$1;
(statearr_22318_22342[(2)] = inst_22296);

(statearr_22318_22342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (2))){
var state_22309__$1 = state_22309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22309__$1,(4),ch);
} else {
if((state_val_22310 === (11))){
var inst_22289 = (state_22309[(2)]);
var state_22309__$1 = state_22309;
var statearr_22319_22343 = state_22309__$1;
(statearr_22319_22343[(2)] = inst_22289);

(statearr_22319_22343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (9))){
var inst_22279 = (state_22309[(9)]);
var inst_22291 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22279,opts);
var state_22309__$1 = state_22309;
if(inst_22291){
var statearr_22320_22344 = state_22309__$1;
(statearr_22320_22344[(1)] = (12));

} else {
var statearr_22321_22345 = state_22309__$1;
(statearr_22321_22345[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (5))){
var inst_22279 = (state_22309[(9)]);
var inst_22273 = (state_22309[(7)]);
var inst_22275 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22276 = (new cljs.core.PersistentArrayMap(null,2,inst_22275,null));
var inst_22277 = (new cljs.core.PersistentHashSet(null,inst_22276,null));
var inst_22278 = figwheel.client.focus_msgs.call(null,inst_22277,inst_22273);
var inst_22279__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22278);
var inst_22280 = cljs.core.first.call(null,inst_22278);
var inst_22281 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22279__$1,opts);
var state_22309__$1 = (function (){var statearr_22322 = state_22309;
(statearr_22322[(9)] = inst_22279__$1);

(statearr_22322[(8)] = inst_22280);

return statearr_22322;
})();
if(cljs.core.truth_(inst_22281)){
var statearr_22323_22346 = state_22309__$1;
(statearr_22323_22346[(1)] = (8));

} else {
var statearr_22324_22347 = state_22309__$1;
(statearr_22324_22347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (14))){
var inst_22299 = (state_22309[(2)]);
var state_22309__$1 = state_22309;
var statearr_22325_22348 = state_22309__$1;
(statearr_22325_22348[(2)] = inst_22299);

(statearr_22325_22348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (10))){
var inst_22301 = (state_22309[(2)]);
var state_22309__$1 = (function (){var statearr_22326 = state_22309;
(statearr_22326[(10)] = inst_22301);

return statearr_22326;
})();
var statearr_22327_22349 = state_22309__$1;
(statearr_22327_22349[(2)] = null);

(statearr_22327_22349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (8))){
var inst_22280 = (state_22309[(8)]);
var inst_22283 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22284 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22280);
var inst_22285 = cljs.core.async.timeout.call(null,(1000));
var inst_22286 = [inst_22284,inst_22285];
var inst_22287 = (new cljs.core.PersistentVector(null,2,(5),inst_22283,inst_22286,null));
var state_22309__$1 = state_22309;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22309__$1,(11),inst_22287);
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
}
}
}
}
}
});})(c__7158__auto___22335,ch))
;
return ((function (switch__7102__auto__,c__7158__auto___22335,ch){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_22331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22331[(0)] = state_machine__7103__auto__);

(statearr_22331[(1)] = (1));

return statearr_22331;
});
var state_machine__7103__auto____1 = (function (state_22309){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_22309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e22332){if((e22332 instanceof Object)){
var ex__7106__auto__ = e22332;
var statearr_22333_22350 = state_22309;
(statearr_22333_22350[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22351 = state_22309;
state_22309 = G__22351;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_22309){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_22309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___22335,ch))
})();
var state__7160__auto__ = (function (){var statearr_22334 = f__7159__auto__.call(null);
(statearr_22334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___22335);

return statearr_22334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___22335,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22352_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22352_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_22361 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__22354_SHARP_,p2__22353_SHARP_){
return [cljs.core.str(p2__22353_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22361){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_22359 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_22360 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_22359,_STAR_print_newline_STAR_22360,base_path_22361){
return (function() { 
var G__22362__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22363__i = 0, G__22363__a = new Array(arguments.length -  0);
while (G__22363__i < G__22363__a.length) {G__22363__a[G__22363__i] = arguments[G__22363__i + 0]; ++G__22363__i;}
  args = new cljs.core.IndexedSeq(G__22363__a,0);
} 
return G__22362__delegate.call(this,args);};
G__22362.cljs$lang$maxFixedArity = 0;
G__22362.cljs$lang$applyTo = (function (arglist__22364){
var args = cljs.core.seq(arglist__22364);
return G__22362__delegate(args);
});
G__22362.cljs$core$IFn$_invoke$arity$variadic = G__22362__delegate;
return G__22362;
})()
;})(_STAR_print_fn_STAR_22359,_STAR_print_newline_STAR_22360,base_path_22361))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22360;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22359;
}}catch (e22358){if((e22358 instanceof Error)){
var e = e22358;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22361], null));
} else {
var e = e22358;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_22361))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__22365){
var map__22370 = p__22365;
var map__22370__$1 = ((cljs.core.seq_QMARK_.call(null,map__22370))?cljs.core.apply.call(null,cljs.core.hash_map,map__22370):map__22370);
var opts = map__22370__$1;
var build_id = cljs.core.get.call(null,map__22370__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22370,map__22370__$1,opts,build_id){
return (function (p__22371){
var vec__22372 = p__22371;
var map__22373 = cljs.core.nth.call(null,vec__22372,(0),null);
var map__22373__$1 = ((cljs.core.seq_QMARK_.call(null,map__22373))?cljs.core.apply.call(null,cljs.core.hash_map,map__22373):map__22373);
var msg = map__22373__$1;
var msg_name = cljs.core.get.call(null,map__22373__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22372,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__22372,map__22373,map__22373__$1,msg,msg_name,_,map__22370,map__22370__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22372,map__22373,map__22373__$1,msg,msg_name,_,map__22370,map__22370__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22370,map__22370__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__22377){
var vec__22378 = p__22377;
var map__22379 = cljs.core.nth.call(null,vec__22378,(0),null);
var map__22379__$1 = ((cljs.core.seq_QMARK_.call(null,map__22379))?cljs.core.apply.call(null,cljs.core.hash_map,map__22379):map__22379);
var msg = map__22379__$1;
var msg_name = cljs.core.get.call(null,map__22379__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22378,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__22380){
var map__22388 = p__22380;
var map__22388__$1 = ((cljs.core.seq_QMARK_.call(null,map__22388))?cljs.core.apply.call(null,cljs.core.hash_map,map__22388):map__22388);
var on_compile_fail = cljs.core.get.call(null,map__22388__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__22388__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__22388,map__22388__$1,on_compile_fail,on_compile_warning){
return (function (p__22389){
var vec__22390 = p__22389;
var map__22391 = cljs.core.nth.call(null,vec__22390,(0),null);
var map__22391__$1 = ((cljs.core.seq_QMARK_.call(null,map__22391))?cljs.core.apply.call(null,cljs.core.hash_map,map__22391):map__22391);
var msg = map__22391__$1;
var msg_name = cljs.core.get.call(null,map__22391__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22390,(1));
var pred__22392 = cljs.core._EQ_;
var expr__22393 = msg_name;
if(cljs.core.truth_(pred__22392.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22393))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22392.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22393))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22388,map__22388__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto__,msg_hist,msg_names,msg){
return (function (state_22590){
var state_val_22591 = (state_22590[(1)]);
if((state_val_22591 === (7))){
var inst_22526 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22592_22633 = state_22590__$1;
(statearr_22592_22633[(2)] = inst_22526);

(statearr_22592_22633[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (20))){
var inst_22552 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22590__$1 = state_22590;
if(inst_22552){
var statearr_22593_22634 = state_22590__$1;
(statearr_22593_22634[(1)] = (22));

} else {
var statearr_22594_22635 = state_22590__$1;
(statearr_22594_22635[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (27))){
var inst_22564 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22565 = figwheel.client.heads_up.display_warning.call(null,inst_22564);
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22590__$1,(30),inst_22565);
} else {
if((state_val_22591 === (1))){
var inst_22514 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22590__$1 = state_22590;
if(cljs.core.truth_(inst_22514)){
var statearr_22595_22636 = state_22590__$1;
(statearr_22595_22636[(1)] = (2));

} else {
var statearr_22596_22637 = state_22590__$1;
(statearr_22596_22637[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (24))){
var inst_22580 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22597_22638 = state_22590__$1;
(statearr_22597_22638[(2)] = inst_22580);

(statearr_22597_22638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (4))){
var inst_22588 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22590__$1,inst_22588);
} else {
if((state_val_22591 === (15))){
var inst_22541 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22542 = figwheel.client.format_messages.call(null,inst_22541);
var inst_22543 = figwheel.client.heads_up.display_error.call(null,inst_22542);
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22590__$1,(18),inst_22543);
} else {
if((state_val_22591 === (21))){
var inst_22582 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22598_22639 = state_22590__$1;
(statearr_22598_22639[(2)] = inst_22582);

(statearr_22598_22639[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (31))){
var inst_22571 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22590__$1,(34),inst_22571);
} else {
if((state_val_22591 === (32))){
var state_22590__$1 = state_22590;
var statearr_22599_22640 = state_22590__$1;
(statearr_22599_22640[(2)] = null);

(statearr_22599_22640[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (33))){
var inst_22576 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22600_22641 = state_22590__$1;
(statearr_22600_22641[(2)] = inst_22576);

(statearr_22600_22641[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (13))){
var inst_22532 = (state_22590[(2)]);
var inst_22533 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22534 = figwheel.client.format_messages.call(null,inst_22533);
var inst_22535 = figwheel.client.heads_up.display_error.call(null,inst_22534);
var state_22590__$1 = (function (){var statearr_22601 = state_22590;
(statearr_22601[(7)] = inst_22532);

return statearr_22601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22590__$1,(14),inst_22535);
} else {
if((state_val_22591 === (22))){
var inst_22554 = figwheel.client.heads_up.clear.call(null);
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22590__$1,(25),inst_22554);
} else {
if((state_val_22591 === (29))){
var inst_22578 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22602_22642 = state_22590__$1;
(statearr_22602_22642[(2)] = inst_22578);

(statearr_22602_22642[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (6))){
var inst_22522 = figwheel.client.heads_up.clear.call(null);
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22590__$1,(9),inst_22522);
} else {
if((state_val_22591 === (28))){
var inst_22569 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22590__$1 = state_22590;
if(inst_22569){
var statearr_22603_22643 = state_22590__$1;
(statearr_22603_22643[(1)] = (31));

} else {
var statearr_22604_22644 = state_22590__$1;
(statearr_22604_22644[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (25))){
var inst_22556 = (state_22590[(2)]);
var inst_22557 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22558 = figwheel.client.heads_up.display_warning.call(null,inst_22557);
var state_22590__$1 = (function (){var statearr_22605 = state_22590;
(statearr_22605[(8)] = inst_22556);

return statearr_22605;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22590__$1,(26),inst_22558);
} else {
if((state_val_22591 === (34))){
var inst_22573 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22606_22645 = state_22590__$1;
(statearr_22606_22645[(2)] = inst_22573);

(statearr_22606_22645[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (17))){
var inst_22584 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22607_22646 = state_22590__$1;
(statearr_22607_22646[(2)] = inst_22584);

(statearr_22607_22646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (3))){
var inst_22528 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22590__$1 = state_22590;
if(inst_22528){
var statearr_22608_22647 = state_22590__$1;
(statearr_22608_22647[(1)] = (10));

} else {
var statearr_22609_22648 = state_22590__$1;
(statearr_22609_22648[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (12))){
var inst_22586 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22610_22649 = state_22590__$1;
(statearr_22610_22649[(2)] = inst_22586);

(statearr_22610_22649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (2))){
var inst_22516 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_22590__$1 = state_22590;
if(cljs.core.truth_(inst_22516)){
var statearr_22611_22650 = state_22590__$1;
(statearr_22611_22650[(1)] = (5));

} else {
var statearr_22612_22651 = state_22590__$1;
(statearr_22612_22651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (23))){
var inst_22562 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22590__$1 = state_22590;
if(inst_22562){
var statearr_22613_22652 = state_22590__$1;
(statearr_22613_22652[(1)] = (27));

} else {
var statearr_22614_22653 = state_22590__$1;
(statearr_22614_22653[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (19))){
var inst_22549 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22550 = figwheel.client.heads_up.append_message.call(null,inst_22549);
var state_22590__$1 = state_22590;
var statearr_22615_22654 = state_22590__$1;
(statearr_22615_22654[(2)] = inst_22550);

(statearr_22615_22654[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (11))){
var inst_22539 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22590__$1 = state_22590;
if(inst_22539){
var statearr_22616_22655 = state_22590__$1;
(statearr_22616_22655[(1)] = (15));

} else {
var statearr_22617_22656 = state_22590__$1;
(statearr_22617_22656[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (9))){
var inst_22524 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22618_22657 = state_22590__$1;
(statearr_22618_22657[(2)] = inst_22524);

(statearr_22618_22657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (5))){
var inst_22518 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22590__$1,(8),inst_22518);
} else {
if((state_val_22591 === (14))){
var inst_22537 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22619_22658 = state_22590__$1;
(statearr_22619_22658[(2)] = inst_22537);

(statearr_22619_22658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (26))){
var inst_22560 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22620_22659 = state_22590__$1;
(statearr_22620_22659[(2)] = inst_22560);

(statearr_22620_22659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (16))){
var inst_22547 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22590__$1 = state_22590;
if(inst_22547){
var statearr_22621_22660 = state_22590__$1;
(statearr_22621_22660[(1)] = (19));

} else {
var statearr_22622_22661 = state_22590__$1;
(statearr_22622_22661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (30))){
var inst_22567 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22623_22662 = state_22590__$1;
(statearr_22623_22662[(2)] = inst_22567);

(statearr_22623_22662[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (10))){
var inst_22530 = figwheel.client.heads_up.clear.call(null);
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22590__$1,(13),inst_22530);
} else {
if((state_val_22591 === (18))){
var inst_22545 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22624_22663 = state_22590__$1;
(statearr_22624_22663[(2)] = inst_22545);

(statearr_22624_22663[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (8))){
var inst_22520 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22625_22664 = state_22590__$1;
(statearr_22625_22664[(2)] = inst_22520);

(statearr_22625_22664[(1)] = (7));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7158__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__7102__auto__,c__7158__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_22629 = [null,null,null,null,null,null,null,null,null];
(statearr_22629[(0)] = state_machine__7103__auto__);

(statearr_22629[(1)] = (1));

return statearr_22629;
});
var state_machine__7103__auto____1 = (function (state_22590){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_22590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e22630){if((e22630 instanceof Object)){
var ex__7106__auto__ = e22630;
var statearr_22631_22665 = state_22590;
(statearr_22631_22665[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22666 = state_22590;
state_22590 = G__22666;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_22590){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_22590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto__,msg_hist,msg_names,msg))
})();
var state__7160__auto__ = (function (){var statearr_22632 = f__7159__auto__.call(null);
(statearr_22632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto__);

return statearr_22632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto__,msg_hist,msg_names,msg))
);

return c__7158__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7158__auto___22729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___22729,ch){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___22729,ch){
return (function (state_22712){
var state_val_22713 = (state_22712[(1)]);
if((state_val_22713 === (8))){
var inst_22704 = (state_22712[(2)]);
var state_22712__$1 = (function (){var statearr_22714 = state_22712;
(statearr_22714[(7)] = inst_22704);

return statearr_22714;
})();
var statearr_22715_22730 = state_22712__$1;
(statearr_22715_22730[(2)] = null);

(statearr_22715_22730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (7))){
var inst_22708 = (state_22712[(2)]);
var state_22712__$1 = state_22712;
var statearr_22716_22731 = state_22712__$1;
(statearr_22716_22731[(2)] = inst_22708);

(statearr_22716_22731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (6))){
var state_22712__$1 = state_22712;
var statearr_22717_22732 = state_22712__$1;
(statearr_22717_22732[(2)] = null);

(statearr_22717_22732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (5))){
var inst_22700 = (state_22712[(8)]);
var inst_22702 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22700);
var state_22712__$1 = state_22712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22712__$1,(8),inst_22702);
} else {
if((state_val_22713 === (4))){
var inst_22700 = (state_22712[(8)]);
var inst_22700__$1 = (state_22712[(2)]);
var state_22712__$1 = (function (){var statearr_22718 = state_22712;
(statearr_22718[(8)] = inst_22700__$1);

return statearr_22718;
})();
if(cljs.core.truth_(inst_22700__$1)){
var statearr_22719_22733 = state_22712__$1;
(statearr_22719_22733[(1)] = (5));

} else {
var statearr_22720_22734 = state_22712__$1;
(statearr_22720_22734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (3))){
var inst_22710 = (state_22712[(2)]);
var state_22712__$1 = state_22712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22712__$1,inst_22710);
} else {
if((state_val_22713 === (2))){
var state_22712__$1 = state_22712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22712__$1,(4),ch);
} else {
if((state_val_22713 === (1))){
var state_22712__$1 = state_22712;
var statearr_22721_22735 = state_22712__$1;
(statearr_22721_22735[(2)] = null);

(statearr_22721_22735[(1)] = (2));


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
});})(c__7158__auto___22729,ch))
;
return ((function (switch__7102__auto__,c__7158__auto___22729,ch){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_22725 = [null,null,null,null,null,null,null,null,null];
(statearr_22725[(0)] = state_machine__7103__auto__);

(statearr_22725[(1)] = (1));

return statearr_22725;
});
var state_machine__7103__auto____1 = (function (state_22712){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_22712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e22726){if((e22726 instanceof Object)){
var ex__7106__auto__ = e22726;
var statearr_22727_22736 = state_22712;
(statearr_22727_22736[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22737 = state_22712;
state_22712 = G__22737;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_22712){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_22712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___22729,ch))
})();
var state__7160__auto__ = (function (){var statearr_22728 = f__7159__auto__.call(null);
(statearr_22728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___22729);

return statearr_22728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___22729,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__7158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto__){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto__){
return (function (state_22758){
var state_val_22759 = (state_22758[(1)]);
if((state_val_22759 === (2))){
var inst_22755 = (state_22758[(2)]);
var inst_22756 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_22758__$1 = (function (){var statearr_22760 = state_22758;
(statearr_22760[(7)] = inst_22755);

return statearr_22760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22758__$1,inst_22756);
} else {
if((state_val_22759 === (1))){
var inst_22753 = cljs.core.async.timeout.call(null,(3000));
var state_22758__$1 = state_22758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22758__$1,(2),inst_22753);
} else {
return null;
}
}
});})(c__7158__auto__))
;
return ((function (switch__7102__auto__,c__7158__auto__){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_22764 = [null,null,null,null,null,null,null,null];
(statearr_22764[(0)] = state_machine__7103__auto__);

(statearr_22764[(1)] = (1));

return statearr_22764;
});
var state_machine__7103__auto____1 = (function (state_22758){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_22758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e22765){if((e22765 instanceof Object)){
var ex__7106__auto__ = e22765;
var statearr_22766_22768 = state_22758;
(statearr_22766_22768[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22769 = state_22758;
state_22758 = G__22769;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_22758){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_22758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto__))
})();
var state__7160__auto__ = (function (){var statearr_22767 = f__7159__auto__.call(null);
(statearr_22767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto__);

return statearr_22767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto__))
);

return c__7158__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__3212__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__3212__auto__)){
return ("CustomEvent" in window);
} else {
return and__3212__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj22773 = {"detail":url};
return obj22773;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__22774){
var map__22780 = p__22774;
var map__22780__$1 = ((cljs.core.seq_QMARK_.call(null,map__22780))?cljs.core.apply.call(null,cljs.core.hash_map,map__22780):map__22780);
var ed = map__22780__$1;
var exception_data = cljs.core.get.call(null,map__22780__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__22780__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__22781_22785 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__22782_22786 = null;
var count__22783_22787 = (0);
var i__22784_22788 = (0);
while(true){
if((i__22784_22788 < count__22783_22787)){
var msg_22789 = cljs.core._nth.call(null,chunk__22782_22786,i__22784_22788);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22789);

var G__22790 = seq__22781_22785;
var G__22791 = chunk__22782_22786;
var G__22792 = count__22783_22787;
var G__22793 = (i__22784_22788 + (1));
seq__22781_22785 = G__22790;
chunk__22782_22786 = G__22791;
count__22783_22787 = G__22792;
i__22784_22788 = G__22793;
continue;
} else {
var temp__4126__auto___22794 = cljs.core.seq.call(null,seq__22781_22785);
if(temp__4126__auto___22794){
var seq__22781_22795__$1 = temp__4126__auto___22794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22781_22795__$1)){
var c__4011__auto___22796 = cljs.core.chunk_first.call(null,seq__22781_22795__$1);
var G__22797 = cljs.core.chunk_rest.call(null,seq__22781_22795__$1);
var G__22798 = c__4011__auto___22796;
var G__22799 = cljs.core.count.call(null,c__4011__auto___22796);
var G__22800 = (0);
seq__22781_22785 = G__22797;
chunk__22782_22786 = G__22798;
count__22783_22787 = G__22799;
i__22784_22788 = G__22800;
continue;
} else {
var msg_22801 = cljs.core.first.call(null,seq__22781_22795__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22801);

var G__22802 = cljs.core.next.call(null,seq__22781_22795__$1);
var G__22803 = null;
var G__22804 = (0);
var G__22805 = (0);
seq__22781_22785 = G__22802;
chunk__22782_22786 = G__22803;
count__22783_22787 = G__22804;
i__22784_22788 = G__22805;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__22806){
var map__22808 = p__22806;
var map__22808__$1 = ((cljs.core.seq_QMARK_.call(null,map__22808))?cljs.core.apply.call(null,cljs.core.hash_map,map__22808):map__22808);
var w = map__22808__$1;
var message = cljs.core.get.call(null,map__22808__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3212__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3212__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3212__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__22815 = cljs.core.seq.call(null,plugins);
var chunk__22816 = null;
var count__22817 = (0);
var i__22818 = (0);
while(true){
if((i__22818 < count__22817)){
var vec__22819 = cljs.core._nth.call(null,chunk__22816,i__22818);
var k = cljs.core.nth.call(null,vec__22819,(0),null);
var plugin = cljs.core.nth.call(null,vec__22819,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22821 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22815,chunk__22816,count__22817,i__22818,pl_22821,vec__22819,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_22821.call(null,msg_hist);
});})(seq__22815,chunk__22816,count__22817,i__22818,pl_22821,vec__22819,k,plugin))
);
} else {
}

var G__22822 = seq__22815;
var G__22823 = chunk__22816;
var G__22824 = count__22817;
var G__22825 = (i__22818 + (1));
seq__22815 = G__22822;
chunk__22816 = G__22823;
count__22817 = G__22824;
i__22818 = G__22825;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22815);
if(temp__4126__auto__){
var seq__22815__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22815__$1)){
var c__4011__auto__ = cljs.core.chunk_first.call(null,seq__22815__$1);
var G__22826 = cljs.core.chunk_rest.call(null,seq__22815__$1);
var G__22827 = c__4011__auto__;
var G__22828 = cljs.core.count.call(null,c__4011__auto__);
var G__22829 = (0);
seq__22815 = G__22826;
chunk__22816 = G__22827;
count__22817 = G__22828;
i__22818 = G__22829;
continue;
} else {
var vec__22820 = cljs.core.first.call(null,seq__22815__$1);
var k = cljs.core.nth.call(null,vec__22820,(0),null);
var plugin = cljs.core.nth.call(null,vec__22820,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22830 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22815,chunk__22816,count__22817,i__22818,pl_22830,vec__22820,k,plugin,seq__22815__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_22830.call(null,msg_hist);
});})(seq__22815,chunk__22816,count__22817,i__22818,pl_22830,vec__22820,k,plugin,seq__22815__$1,temp__4126__auto__))
);
} else {
}

var G__22831 = cljs.core.next.call(null,seq__22815__$1);
var G__22832 = null;
var G__22833 = (0);
var G__22834 = (0);
seq__22815 = G__22831;
chunk__22816 = G__22832;
count__22817 = G__22833;
i__22818 = G__22834;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__22835){
var map__22837 = p__22835;
var map__22837__$1 = ((cljs.core.seq_QMARK_.call(null,map__22837))?cljs.core.apply.call(null,cljs.core.hash_map,map__22837):map__22837);
var opts = map__22837__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__22835 = null;
if (arguments.length > 0) {
var G__22838__i = 0, G__22838__a = new Array(arguments.length -  0);
while (G__22838__i < G__22838__a.length) {G__22838__a[G__22838__i] = arguments[G__22838__i + 0]; ++G__22838__i;}
  p__22835 = new cljs.core.IndexedSeq(G__22838__a,0);
} 
return watch_and_reload__delegate.call(this,p__22835);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__22839){
var p__22835 = cljs.core.seq(arglist__22839);
return watch_and_reload__delegate(p__22835);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map