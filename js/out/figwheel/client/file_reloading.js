// Compiled by ClojureScript 0.0-2913 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__23133_SHARP_,p2__23134_SHARP_){
var and__3212__auto__ = p1__23133_SHARP_;
if(cljs.core.truth_(and__3212__auto__)){
return p2__23134_SHARP_;
} else {
return and__3212__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__3224__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__3224__auto__){
return or__3224__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__23136_SHARP_,p2__23135_SHARP_){
return [cljs.core.str(p2__23135_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__3224__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__3224__auto__){
return or__3224__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__3224__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__3224__auto__)){
return or__3224__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__4121__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4122__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4123__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4124__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4125__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4125__auto__,method_table__4121__auto__,prefer_table__4122__auto__,method_cache__4123__auto__,cached_hierarchy__4124__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__23137){
var map__23138 = p__23137;
var map__23138__$1 = ((cljs.core.seq_QMARK_.call(null,map__23138))?cljs.core.apply.call(null,cljs.core.hash_map,map__23138):map__23138);
var file = cljs.core.get.call(null,map__23138__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__23139){
var map__23140 = p__23139;
var map__23140__$1 = ((cljs.core.seq_QMARK_.call(null,map__23140))?cljs.core.apply.call(null,cljs.core.hash_map,map__23140):map__23140);
var namespace = cljs.core.get.call(null,map__23140__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__4121__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4122__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4123__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4124__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4125__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4125__auto__,method_table__4121__auto__,prefer_table__4122__auto__,method_cache__4123__auto__,cached_hierarchy__4124__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e23141){if((e23141 instanceof Error)){
var e = e23141;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23141;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__23142,callback){
var map__23144 = p__23142;
var map__23144__$1 = ((cljs.core.seq_QMARK_.call(null,map__23144))?cljs.core.apply.call(null,cljs.core.hash_map,map__23144):map__23144);
var file_msg = map__23144__$1;
var request_url = cljs.core.get.call(null,map__23144__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23144,map__23144__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23144,map__23144__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__23145){
var map__23147 = p__23145;
var map__23147__$1 = ((cljs.core.seq_QMARK_.call(null,map__23147))?cljs.core.apply.call(null,cljs.core.hash_map,map__23147):map__23147);
var file_msg = map__23147__$1;
var meta_data = cljs.core.get.call(null,map__23147__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__23147__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__3224__auto__ = meta_data;
if(cljs.core.truth_(or__3224__auto__)){
return or__3224__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__3212__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__3212__auto__){
var or__3224__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__3224__auto__)){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__3224__auto____$1)){
return or__3224__auto____$1;
} else {
var and__3212__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__3212__auto____$1){
var or__3224__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__3224__auto____$2){
return or__3224__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__3212__auto____$1;
}
}
}
} else {
return and__3212__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__23148,callback){
var map__23150 = p__23148;
var map__23150__$1 = ((cljs.core.seq_QMARK_.call(null,map__23150))?cljs.core.apply.call(null,cljs.core.hash_map,map__23150):map__23150);
var file_msg = map__23150__$1;
var namespace = cljs.core.get.call(null,map__23150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__23150__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__7158__auto___23237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___23237,out){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___23237,out){
return (function (state_23219){
var state_val_23220 = (state_23219[(1)]);
if((state_val_23220 === (7))){
var inst_23203 = (state_23219[(7)]);
var inst_23209 = (state_23219[(2)]);
var inst_23210 = cljs.core.async.put_BANG_.call(null,out,inst_23209);
var inst_23199 = inst_23203;
var state_23219__$1 = (function (){var statearr_23221 = state_23219;
(statearr_23221[(8)] = inst_23199);

(statearr_23221[(9)] = inst_23210);

return statearr_23221;
})();
var statearr_23222_23238 = state_23219__$1;
(statearr_23222_23238[(2)] = null);

(statearr_23222_23238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (6))){
var inst_23215 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
var statearr_23223_23239 = state_23219__$1;
(statearr_23223_23239[(2)] = inst_23215);

(statearr_23223_23239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (5))){
var inst_23213 = cljs.core.async.close_BANG_.call(null,out);
var state_23219__$1 = state_23219;
var statearr_23224_23240 = state_23219__$1;
(statearr_23224_23240[(2)] = inst_23213);

(statearr_23224_23240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (4))){
var inst_23202 = (state_23219[(10)]);
var inst_23207 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23202);
var state_23219__$1 = state_23219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23219__$1,(7),inst_23207);
} else {
if((state_val_23220 === (3))){
var inst_23217 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23219__$1,inst_23217);
} else {
if((state_val_23220 === (2))){
var inst_23202 = (state_23219[(10)]);
var inst_23199 = (state_23219[(8)]);
var inst_23202__$1 = cljs.core.nth.call(null,inst_23199,(0),null);
var inst_23203 = cljs.core.nthnext.call(null,inst_23199,(1));
var inst_23204 = (inst_23202__$1 == null);
var inst_23205 = cljs.core.not.call(null,inst_23204);
var state_23219__$1 = (function (){var statearr_23225 = state_23219;
(statearr_23225[(10)] = inst_23202__$1);

(statearr_23225[(7)] = inst_23203);

return statearr_23225;
})();
if(inst_23205){
var statearr_23226_23241 = state_23219__$1;
(statearr_23226_23241[(1)] = (4));

} else {
var statearr_23227_23242 = state_23219__$1;
(statearr_23227_23242[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (1))){
var inst_23197 = cljs.core.nth.call(null,files,(0),null);
var inst_23198 = cljs.core.nthnext.call(null,files,(1));
var inst_23199 = files;
var state_23219__$1 = (function (){var statearr_23228 = state_23219;
(statearr_23228[(8)] = inst_23199);

(statearr_23228[(11)] = inst_23197);

(statearr_23228[(12)] = inst_23198);

return statearr_23228;
})();
var statearr_23229_23243 = state_23219__$1;
(statearr_23229_23243[(2)] = null);

(statearr_23229_23243[(1)] = (2));


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
});})(c__7158__auto___23237,out))
;
return ((function (switch__7102__auto__,c__7158__auto___23237,out){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_23233 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23233[(0)] = state_machine__7103__auto__);

(statearr_23233[(1)] = (1));

return statearr_23233;
});
var state_machine__7103__auto____1 = (function (state_23219){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_23219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e23234){if((e23234 instanceof Object)){
var ex__7106__auto__ = e23234;
var statearr_23235_23244 = state_23219;
(statearr_23235_23244[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23245 = state_23219;
state_23219 = G__23245;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_23219){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_23219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___23237,out))
})();
var state__7160__auto__ = (function (){var statearr_23236 = f__7159__auto__.call(null);
(statearr_23236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___23237);

return statearr_23236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___23237,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__23246,p__23247){
var map__23250 = p__23246;
var map__23250__$1 = ((cljs.core.seq_QMARK_.call(null,map__23250))?cljs.core.apply.call(null,cljs.core.hash_map,map__23250):map__23250);
var opts = map__23250__$1;
var url_rewriter = cljs.core.get.call(null,map__23250__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__23251 = p__23247;
var map__23251__$1 = ((cljs.core.seq_QMARK_.call(null,map__23251))?cljs.core.apply.call(null,cljs.core.hash_map,map__23251):map__23251);
var file_msg = map__23251__$1;
var file = cljs.core.get.call(null,map__23251__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__23252){
var map__23255 = p__23252;
var map__23255__$1 = ((cljs.core.seq_QMARK_.call(null,map__23255))?cljs.core.apply.call(null,cljs.core.hash_map,map__23255):map__23255);
var file = cljs.core.get.call(null,map__23255__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__23255__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__3212__auto__ = eval_body__$1;
if(cljs.core.truth_(and__3212__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__3212__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e23256){var e = e23256;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__23261,p__23262){
var map__23463 = p__23261;
var map__23463__$1 = ((cljs.core.seq_QMARK_.call(null,map__23463))?cljs.core.apply.call(null,cljs.core.hash_map,map__23463):map__23463);
var opts = map__23463__$1;
var load_unchanged_files = cljs.core.get.call(null,map__23463__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__23463__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__23463__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__23464 = p__23262;
var map__23464__$1 = ((cljs.core.seq_QMARK_.call(null,map__23464))?cljs.core.apply.call(null,cljs.core.hash_map,map__23464):map__23464);
var msg = map__23464__$1;
var files = cljs.core.get.call(null,map__23464__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files){
return (function (state_23588){
var state_val_23589 = (state_23588[(1)]);
if((state_val_23589 === (7))){
var inst_23477 = (state_23588[(7)]);
var inst_23475 = (state_23588[(8)]);
var inst_23478 = (state_23588[(9)]);
var inst_23476 = (state_23588[(10)]);
var inst_23483 = cljs.core._nth.call(null,inst_23476,inst_23478);
var inst_23484 = figwheel.client.file_reloading.eval_body.call(null,inst_23483);
var inst_23485 = (inst_23478 + (1));
var tmp23590 = inst_23477;
var tmp23591 = inst_23475;
var tmp23592 = inst_23476;
var inst_23475__$1 = tmp23591;
var inst_23476__$1 = tmp23592;
var inst_23477__$1 = tmp23590;
var inst_23478__$1 = inst_23485;
var state_23588__$1 = (function (){var statearr_23593 = state_23588;
(statearr_23593[(7)] = inst_23477__$1);

(statearr_23593[(8)] = inst_23475__$1);

(statearr_23593[(9)] = inst_23478__$1);

(statearr_23593[(10)] = inst_23476__$1);

(statearr_23593[(11)] = inst_23484);

return statearr_23593;
})();
var statearr_23594_23663 = state_23588__$1;
(statearr_23594_23663[(2)] = null);

(statearr_23594_23663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (20))){
var inst_23520 = (state_23588[(12)]);
var inst_23525 = (state_23588[(13)]);
var inst_23527 = (state_23588[(14)]);
var inst_23524 = (state_23588[(15)]);
var inst_23521 = (state_23588[(16)]);
var inst_23530 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23532 = (function (){var files_not_loaded = inst_23527;
var res = inst_23525;
var res_SINGLEQUOTE_ = inst_23524;
var files_SINGLEQUOTE_ = inst_23521;
var all_files = inst_23520;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23520,inst_23525,inst_23527,inst_23524,inst_23521,inst_23530,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files){
return (function (p__23531){
var map__23595 = p__23531;
var map__23595__$1 = ((cljs.core.seq_QMARK_.call(null,map__23595))?cljs.core.apply.call(null,cljs.core.hash_map,map__23595):map__23595);
var file = cljs.core.get.call(null,map__23595__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__23595__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23520,inst_23525,inst_23527,inst_23524,inst_23521,inst_23530,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files))
})();
var inst_23533 = cljs.core.map.call(null,inst_23532,inst_23525);
var inst_23534 = cljs.core.pr_str.call(null,inst_23533);
var inst_23535 = figwheel.client.utils.log.call(null,inst_23534);
var inst_23536 = (function (){var files_not_loaded = inst_23527;
var res = inst_23525;
var res_SINGLEQUOTE_ = inst_23524;
var files_SINGLEQUOTE_ = inst_23521;
var all_files = inst_23520;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23520,inst_23525,inst_23527,inst_23524,inst_23521,inst_23530,inst_23532,inst_23533,inst_23534,inst_23535,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23520,inst_23525,inst_23527,inst_23524,inst_23521,inst_23530,inst_23532,inst_23533,inst_23534,inst_23535,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files))
})();
var inst_23537 = setTimeout(inst_23536,(10));
var state_23588__$1 = (function (){var statearr_23596 = state_23588;
(statearr_23596[(17)] = inst_23530);

(statearr_23596[(18)] = inst_23535);

return statearr_23596;
})();
var statearr_23597_23664 = state_23588__$1;
(statearr_23597_23664[(2)] = inst_23537);

(statearr_23597_23664[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (27))){
var inst_23547 = (state_23588[(19)]);
var state_23588__$1 = state_23588;
var statearr_23598_23665 = state_23588__$1;
(statearr_23598_23665[(2)] = inst_23547);

(statearr_23598_23665[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (1))){
var inst_23467 = (state_23588[(20)]);
var inst_23465 = before_jsload.call(null,files);
var inst_23466 = (function (){return ((function (inst_23467,inst_23465,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files){
return (function (p1__23257_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23257_SHARP_);
});
;})(inst_23467,inst_23465,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files))
})();
var inst_23467__$1 = cljs.core.filter.call(null,inst_23466,files);
var inst_23468 = cljs.core.not_empty.call(null,inst_23467__$1);
var state_23588__$1 = (function (){var statearr_23599 = state_23588;
(statearr_23599[(20)] = inst_23467__$1);

(statearr_23599[(21)] = inst_23465);

return statearr_23599;
})();
if(cljs.core.truth_(inst_23468)){
var statearr_23600_23666 = state_23588__$1;
(statearr_23600_23666[(1)] = (2));

} else {
var statearr_23601_23667 = state_23588__$1;
(statearr_23601_23667[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (24))){
var state_23588__$1 = state_23588;
var statearr_23602_23668 = state_23588__$1;
(statearr_23602_23668[(2)] = null);

(statearr_23602_23668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (4))){
var inst_23512 = (state_23588[(2)]);
var inst_23513 = (function (){return ((function (inst_23512,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files){
return (function (p1__23258_SHARP_){
var and__3212__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23258_SHARP_);
if(cljs.core.truth_(and__3212__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23258_SHARP_));
} else {
return and__3212__auto__;
}
});
;})(inst_23512,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files))
})();
var inst_23514 = cljs.core.filter.call(null,inst_23513,files);
var state_23588__$1 = (function (){var statearr_23603 = state_23588;
(statearr_23603[(22)] = inst_23514);

(statearr_23603[(23)] = inst_23512);

return statearr_23603;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_23604_23669 = state_23588__$1;
(statearr_23604_23669[(1)] = (16));

} else {
var statearr_23605_23670 = state_23588__$1;
(statearr_23605_23670[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (15))){
var inst_23502 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
var statearr_23606_23671 = state_23588__$1;
(statearr_23606_23671[(2)] = inst_23502);

(statearr_23606_23671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (21))){
var state_23588__$1 = state_23588;
var statearr_23607_23672 = state_23588__$1;
(statearr_23607_23672[(2)] = null);

(statearr_23607_23672[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (31))){
var inst_23555 = (state_23588[(24)]);
var inst_23565 = (state_23588[(2)]);
var inst_23566 = cljs.core.not_empty.call(null,inst_23555);
var state_23588__$1 = (function (){var statearr_23608 = state_23588;
(statearr_23608[(25)] = inst_23565);

return statearr_23608;
})();
if(cljs.core.truth_(inst_23566)){
var statearr_23609_23673 = state_23588__$1;
(statearr_23609_23673[(1)] = (32));

} else {
var statearr_23610_23674 = state_23588__$1;
(statearr_23610_23674[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (32))){
var inst_23555 = (state_23588[(24)]);
var inst_23568 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23555);
var inst_23569 = cljs.core.pr_str.call(null,inst_23568);
var inst_23570 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_23569)].join('');
var inst_23571 = figwheel.client.utils.log.call(null,inst_23570);
var state_23588__$1 = state_23588;
var statearr_23611_23675 = state_23588__$1;
(statearr_23611_23675[(2)] = inst_23571);

(statearr_23611_23675[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (33))){
var state_23588__$1 = state_23588;
var statearr_23612_23676 = state_23588__$1;
(statearr_23612_23676[(2)] = null);

(statearr_23612_23676[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (13))){
var inst_23488 = (state_23588[(26)]);
var inst_23492 = cljs.core.chunk_first.call(null,inst_23488);
var inst_23493 = cljs.core.chunk_rest.call(null,inst_23488);
var inst_23494 = cljs.core.count.call(null,inst_23492);
var inst_23475 = inst_23493;
var inst_23476 = inst_23492;
var inst_23477 = inst_23494;
var inst_23478 = (0);
var state_23588__$1 = (function (){var statearr_23613 = state_23588;
(statearr_23613[(7)] = inst_23477);

(statearr_23613[(8)] = inst_23475);

(statearr_23613[(9)] = inst_23478);

(statearr_23613[(10)] = inst_23476);

return statearr_23613;
})();
var statearr_23614_23677 = state_23588__$1;
(statearr_23614_23677[(2)] = null);

(statearr_23614_23677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (22))){
var inst_23527 = (state_23588[(14)]);
var inst_23540 = (state_23588[(2)]);
var inst_23541 = cljs.core.not_empty.call(null,inst_23527);
var state_23588__$1 = (function (){var statearr_23615 = state_23588;
(statearr_23615[(27)] = inst_23540);

return statearr_23615;
})();
if(cljs.core.truth_(inst_23541)){
var statearr_23616_23678 = state_23588__$1;
(statearr_23616_23678[(1)] = (23));

} else {
var statearr_23617_23679 = state_23588__$1;
(statearr_23617_23679[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (36))){
var state_23588__$1 = state_23588;
var statearr_23618_23680 = state_23588__$1;
(statearr_23618_23680[(2)] = null);

(statearr_23618_23680[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (29))){
var inst_23556 = (state_23588[(28)]);
var inst_23559 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23556);
var inst_23560 = cljs.core.pr_str.call(null,inst_23559);
var inst_23561 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23560)].join('');
var inst_23562 = figwheel.client.utils.log.call(null,inst_23561);
var state_23588__$1 = state_23588;
var statearr_23619_23681 = state_23588__$1;
(statearr_23619_23681[(2)] = inst_23562);

(statearr_23619_23681[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (6))){
var inst_23509 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
var statearr_23620_23682 = state_23588__$1;
(statearr_23620_23682[(2)] = inst_23509);

(statearr_23620_23682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (28))){
var inst_23556 = (state_23588[(28)]);
var inst_23553 = (state_23588[(2)]);
var inst_23554 = cljs.core.get.call(null,inst_23553,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23555 = cljs.core.get.call(null,inst_23553,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_23556__$1 = cljs.core.get.call(null,inst_23553,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23557 = cljs.core.not_empty.call(null,inst_23556__$1);
var state_23588__$1 = (function (){var statearr_23621 = state_23588;
(statearr_23621[(28)] = inst_23556__$1);

(statearr_23621[(24)] = inst_23555);

(statearr_23621[(29)] = inst_23554);

return statearr_23621;
})();
if(cljs.core.truth_(inst_23557)){
var statearr_23622_23683 = state_23588__$1;
(statearr_23622_23683[(1)] = (29));

} else {
var statearr_23623_23684 = state_23588__$1;
(statearr_23623_23684[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (25))){
var inst_23586 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23588__$1,inst_23586);
} else {
if((state_val_23589 === (34))){
var inst_23554 = (state_23588[(29)]);
var inst_23574 = (state_23588[(2)]);
var inst_23575 = cljs.core.not_empty.call(null,inst_23554);
var state_23588__$1 = (function (){var statearr_23624 = state_23588;
(statearr_23624[(30)] = inst_23574);

return statearr_23624;
})();
if(cljs.core.truth_(inst_23575)){
var statearr_23625_23685 = state_23588__$1;
(statearr_23625_23685[(1)] = (35));

} else {
var statearr_23626_23686 = state_23588__$1;
(statearr_23626_23686[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (17))){
var inst_23514 = (state_23588[(22)]);
var state_23588__$1 = state_23588;
var statearr_23627_23687 = state_23588__$1;
(statearr_23627_23687[(2)] = inst_23514);

(statearr_23627_23687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (3))){
var state_23588__$1 = state_23588;
var statearr_23628_23688 = state_23588__$1;
(statearr_23628_23688[(2)] = null);

(statearr_23628_23688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (12))){
var inst_23505 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
var statearr_23629_23689 = state_23588__$1;
(statearr_23629_23689[(2)] = inst_23505);

(statearr_23629_23689[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (2))){
var inst_23467 = (state_23588[(20)]);
var inst_23474 = cljs.core.seq.call(null,inst_23467);
var inst_23475 = inst_23474;
var inst_23476 = null;
var inst_23477 = (0);
var inst_23478 = (0);
var state_23588__$1 = (function (){var statearr_23630 = state_23588;
(statearr_23630[(7)] = inst_23477);

(statearr_23630[(8)] = inst_23475);

(statearr_23630[(9)] = inst_23478);

(statearr_23630[(10)] = inst_23476);

return statearr_23630;
})();
var statearr_23631_23690 = state_23588__$1;
(statearr_23631_23690[(2)] = null);

(statearr_23631_23690[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (23))){
var inst_23520 = (state_23588[(12)]);
var inst_23547 = (state_23588[(19)]);
var inst_23525 = (state_23588[(13)]);
var inst_23527 = (state_23588[(14)]);
var inst_23524 = (state_23588[(15)]);
var inst_23521 = (state_23588[(16)]);
var inst_23543 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23546 = (function (){var files_not_loaded = inst_23527;
var res = inst_23525;
var res_SINGLEQUOTE_ = inst_23524;
var files_SINGLEQUOTE_ = inst_23521;
var all_files = inst_23520;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23520,inst_23547,inst_23525,inst_23527,inst_23524,inst_23521,inst_23543,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files){
return (function (p__23545){
var map__23632 = p__23545;
var map__23632__$1 = ((cljs.core.seq_QMARK_.call(null,map__23632))?cljs.core.apply.call(null,cljs.core.hash_map,map__23632):map__23632);
var meta_data = cljs.core.get.call(null,map__23632__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23520,inst_23547,inst_23525,inst_23527,inst_23524,inst_23521,inst_23543,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files))
})();
var inst_23547__$1 = cljs.core.group_by.call(null,inst_23546,inst_23527);
var inst_23548 = cljs.core.seq_QMARK_.call(null,inst_23547__$1);
var state_23588__$1 = (function (){var statearr_23633 = state_23588;
(statearr_23633[(19)] = inst_23547__$1);

(statearr_23633[(31)] = inst_23543);

return statearr_23633;
})();
if(inst_23548){
var statearr_23634_23691 = state_23588__$1;
(statearr_23634_23691[(1)] = (26));

} else {
var statearr_23635_23692 = state_23588__$1;
(statearr_23635_23692[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (35))){
var inst_23554 = (state_23588[(29)]);
var inst_23577 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23554);
var inst_23578 = cljs.core.pr_str.call(null,inst_23577);
var inst_23579 = [cljs.core.str("not required: "),cljs.core.str(inst_23578)].join('');
var inst_23580 = figwheel.client.utils.log.call(null,inst_23579);
var state_23588__$1 = state_23588;
var statearr_23636_23693 = state_23588__$1;
(statearr_23636_23693[(2)] = inst_23580);

(statearr_23636_23693[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (19))){
var inst_23520 = (state_23588[(12)]);
var inst_23525 = (state_23588[(13)]);
var inst_23524 = (state_23588[(15)]);
var inst_23521 = (state_23588[(16)]);
var inst_23524__$1 = (state_23588[(2)]);
var inst_23525__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23524__$1);
var inst_23526 = (function (){var res = inst_23525__$1;
var res_SINGLEQUOTE_ = inst_23524__$1;
var files_SINGLEQUOTE_ = inst_23521;
var all_files = inst_23520;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23520,inst_23525,inst_23524,inst_23521,inst_23524__$1,inst_23525__$1,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files){
return (function (p1__23260_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23260_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23520,inst_23525,inst_23524,inst_23521,inst_23524__$1,inst_23525__$1,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files))
})();
var inst_23527 = cljs.core.filter.call(null,inst_23526,inst_23524__$1);
var inst_23528 = cljs.core.not_empty.call(null,inst_23525__$1);
var state_23588__$1 = (function (){var statearr_23637 = state_23588;
(statearr_23637[(13)] = inst_23525__$1);

(statearr_23637[(14)] = inst_23527);

(statearr_23637[(15)] = inst_23524__$1);

return statearr_23637;
})();
if(cljs.core.truth_(inst_23528)){
var statearr_23638_23694 = state_23588__$1;
(statearr_23638_23694[(1)] = (20));

} else {
var statearr_23639_23695 = state_23588__$1;
(statearr_23639_23695[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (11))){
var state_23588__$1 = state_23588;
var statearr_23640_23696 = state_23588__$1;
(statearr_23640_23696[(2)] = null);

(statearr_23640_23696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (9))){
var inst_23507 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
var statearr_23641_23697 = state_23588__$1;
(statearr_23641_23697[(2)] = inst_23507);

(statearr_23641_23697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (5))){
var inst_23477 = (state_23588[(7)]);
var inst_23478 = (state_23588[(9)]);
var inst_23480 = (inst_23478 < inst_23477);
var inst_23481 = inst_23480;
var state_23588__$1 = state_23588;
if(cljs.core.truth_(inst_23481)){
var statearr_23642_23698 = state_23588__$1;
(statearr_23642_23698[(1)] = (7));

} else {
var statearr_23643_23699 = state_23588__$1;
(statearr_23643_23699[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (14))){
var inst_23488 = (state_23588[(26)]);
var inst_23497 = cljs.core.first.call(null,inst_23488);
var inst_23498 = figwheel.client.file_reloading.eval_body.call(null,inst_23497);
var inst_23499 = cljs.core.next.call(null,inst_23488);
var inst_23475 = inst_23499;
var inst_23476 = null;
var inst_23477 = (0);
var inst_23478 = (0);
var state_23588__$1 = (function (){var statearr_23644 = state_23588;
(statearr_23644[(7)] = inst_23477);

(statearr_23644[(8)] = inst_23475);

(statearr_23644[(9)] = inst_23478);

(statearr_23644[(10)] = inst_23476);

(statearr_23644[(32)] = inst_23498);

return statearr_23644;
})();
var statearr_23645_23700 = state_23588__$1;
(statearr_23645_23700[(2)] = null);

(statearr_23645_23700[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (26))){
var inst_23547 = (state_23588[(19)]);
var inst_23550 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23547);
var state_23588__$1 = state_23588;
var statearr_23646_23701 = state_23588__$1;
(statearr_23646_23701[(2)] = inst_23550);

(statearr_23646_23701[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (16))){
var inst_23514 = (state_23588[(22)]);
var inst_23516 = (function (){var all_files = inst_23514;
return ((function (all_files,inst_23514,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files){
return (function (p1__23259_SHARP_){
return cljs.core.update_in.call(null,p1__23259_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_23514,state_val_23589,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files))
})();
var inst_23517 = cljs.core.map.call(null,inst_23516,inst_23514);
var state_23588__$1 = state_23588;
var statearr_23647_23702 = state_23588__$1;
(statearr_23647_23702[(2)] = inst_23517);

(statearr_23647_23702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (30))){
var state_23588__$1 = state_23588;
var statearr_23648_23703 = state_23588__$1;
(statearr_23648_23703[(2)] = null);

(statearr_23648_23703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (10))){
var inst_23488 = (state_23588[(26)]);
var inst_23490 = cljs.core.chunked_seq_QMARK_.call(null,inst_23488);
var state_23588__$1 = state_23588;
if(inst_23490){
var statearr_23649_23704 = state_23588__$1;
(statearr_23649_23704[(1)] = (13));

} else {
var statearr_23650_23705 = state_23588__$1;
(statearr_23650_23705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (18))){
var inst_23520 = (state_23588[(12)]);
var inst_23521 = (state_23588[(16)]);
var inst_23520__$1 = (state_23588[(2)]);
var inst_23521__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_23520__$1);
var inst_23522 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23521__$1);
var state_23588__$1 = (function (){var statearr_23651 = state_23588;
(statearr_23651[(12)] = inst_23520__$1);

(statearr_23651[(16)] = inst_23521__$1);

return statearr_23651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23588__$1,(19),inst_23522);
} else {
if((state_val_23589 === (37))){
var inst_23583 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
var statearr_23652_23706 = state_23588__$1;
(statearr_23652_23706[(2)] = inst_23583);

(statearr_23652_23706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (8))){
var inst_23488 = (state_23588[(26)]);
var inst_23475 = (state_23588[(8)]);
var inst_23488__$1 = cljs.core.seq.call(null,inst_23475);
var state_23588__$1 = (function (){var statearr_23653 = state_23588;
(statearr_23653[(26)] = inst_23488__$1);

return statearr_23653;
})();
if(inst_23488__$1){
var statearr_23654_23707 = state_23588__$1;
(statearr_23654_23707[(1)] = (10));

} else {
var statearr_23655_23708 = state_23588__$1;
(statearr_23655_23708[(1)] = (11));

}

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
}
}
}
});})(c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files))
;
return ((function (switch__7102__auto__,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_23659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23659[(0)] = state_machine__7103__auto__);

(statearr_23659[(1)] = (1));

return statearr_23659;
});
var state_machine__7103__auto____1 = (function (state_23588){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_23588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e23660){if((e23660 instanceof Object)){
var ex__7106__auto__ = e23660;
var statearr_23661_23709 = state_23588;
(statearr_23661_23709[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23710 = state_23588;
state_23588 = G__23710;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_23588){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_23588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files))
})();
var state__7160__auto__ = (function (){var statearr_23662 = f__7159__auto__.call(null);
(statearr_23662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto__);

return statearr_23662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto__,map__23463,map__23463__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23464,map__23464__$1,msg,files))
);

return c__7158__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__23713,link){
var map__23715 = p__23713;
var map__23715__$1 = ((cljs.core.seq_QMARK_.call(null,map__23715))?cljs.core.apply.call(null,cljs.core.hash_map,map__23715):map__23715);
var file = cljs.core.get.call(null,map__23715__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__23715,map__23715__$1,file){
return (function (p1__23711_SHARP_,p2__23712_SHARP_){
if(cljs.core._EQ_.call(null,p1__23711_SHARP_,p2__23712_SHARP_)){
return p1__23711_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__23715,map__23715__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23719){
var map__23720 = p__23719;
var map__23720__$1 = ((cljs.core.seq_QMARK_.call(null,map__23720))?cljs.core.apply.call(null,cljs.core.hash_map,map__23720):map__23720);
var current_url_length = cljs.core.get.call(null,map__23720__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__23720__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23716_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23716_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__23721){
var map__23723 = p__23721;
var map__23723__$1 = ((cljs.core.seq_QMARK_.call(null,map__23723))?cljs.core.apply.call(null,cljs.core.hash_map,map__23723):map__23723);
var f_data = map__23723__$1;
var request_url = cljs.core.get.call(null,map__23723__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__23723__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__3224__auto__ = request_url;
if(cljs.core.truth_(or__3224__auto__)){
return or__3224__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__23724,files_msg){
var map__23746 = p__23724;
var map__23746__$1 = ((cljs.core.seq_QMARK_.call(null,map__23746))?cljs.core.apply.call(null,cljs.core.hash_map,map__23746):map__23746);
var opts = map__23746__$1;
var on_cssload = cljs.core.get.call(null,map__23746__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23747_23767 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23748_23768 = null;
var count__23749_23769 = (0);
var i__23750_23770 = (0);
while(true){
if((i__23750_23770 < count__23749_23769)){
var f_23771 = cljs.core._nth.call(null,chunk__23748_23768,i__23750_23770);
figwheel.client.file_reloading.reload_css_file.call(null,f_23771);

var G__23772 = seq__23747_23767;
var G__23773 = chunk__23748_23768;
var G__23774 = count__23749_23769;
var G__23775 = (i__23750_23770 + (1));
seq__23747_23767 = G__23772;
chunk__23748_23768 = G__23773;
count__23749_23769 = G__23774;
i__23750_23770 = G__23775;
continue;
} else {
var temp__4126__auto___23776 = cljs.core.seq.call(null,seq__23747_23767);
if(temp__4126__auto___23776){
var seq__23747_23777__$1 = temp__4126__auto___23776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23747_23777__$1)){
var c__4011__auto___23778 = cljs.core.chunk_first.call(null,seq__23747_23777__$1);
var G__23779 = cljs.core.chunk_rest.call(null,seq__23747_23777__$1);
var G__23780 = c__4011__auto___23778;
var G__23781 = cljs.core.count.call(null,c__4011__auto___23778);
var G__23782 = (0);
seq__23747_23767 = G__23779;
chunk__23748_23768 = G__23780;
count__23749_23769 = G__23781;
i__23750_23770 = G__23782;
continue;
} else {
var f_23783 = cljs.core.first.call(null,seq__23747_23777__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23783);

var G__23784 = cljs.core.next.call(null,seq__23747_23777__$1);
var G__23785 = null;
var G__23786 = (0);
var G__23787 = (0);
seq__23747_23767 = G__23784;
chunk__23748_23768 = G__23785;
count__23749_23769 = G__23786;
i__23750_23770 = G__23787;
continue;
}
} else {
}
}
break;
}

var c__7158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto__,map__23746,map__23746__$1,opts,on_cssload){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto__,map__23746,map__23746__$1,opts,on_cssload){
return (function (state_23757){
var state_val_23758 = (state_23757[(1)]);
if((state_val_23758 === (2))){
var inst_23753 = (state_23757[(2)]);
var inst_23754 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_23755 = on_cssload.call(null,inst_23754);
var state_23757__$1 = (function (){var statearr_23759 = state_23757;
(statearr_23759[(7)] = inst_23753);

return statearr_23759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23757__$1,inst_23755);
} else {
if((state_val_23758 === (1))){
var inst_23751 = cljs.core.async.timeout.call(null,(100));
var state_23757__$1 = state_23757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23757__$1,(2),inst_23751);
} else {
return null;
}
}
});})(c__7158__auto__,map__23746,map__23746__$1,opts,on_cssload))
;
return ((function (switch__7102__auto__,c__7158__auto__,map__23746,map__23746__$1,opts,on_cssload){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_23763 = [null,null,null,null,null,null,null,null];
(statearr_23763[(0)] = state_machine__7103__auto__);

(statearr_23763[(1)] = (1));

return statearr_23763;
});
var state_machine__7103__auto____1 = (function (state_23757){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_23757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e23764){if((e23764 instanceof Object)){
var ex__7106__auto__ = e23764;
var statearr_23765_23788 = state_23757;
(statearr_23765_23788[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23789 = state_23757;
state_23757 = G__23789;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_23757){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_23757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto__,map__23746,map__23746__$1,opts,on_cssload))
})();
var state__7160__auto__ = (function (){var statearr_23766 = f__7159__auto__.call(null);
(statearr_23766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto__);

return statearr_23766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto__,map__23746,map__23746__$1,opts,on_cssload))
);

return c__7158__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map