// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__12185_12189 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__12186_12190 = null;
var count__12187_12191 = (0);
var i__12188_12192 = (0);
while(true){
if((i__12188_12192 < count__12187_12191)){
var k_12193 = cljs.core._nth.call(null,chunk__12186_12190,i__12188_12192);
var v_12194 = (b[k_12193]);
(a[k_12193] = v_12194);

var G__12195 = seq__12185_12189;
var G__12196 = chunk__12186_12190;
var G__12197 = count__12187_12191;
var G__12198 = (i__12188_12192 + (1));
seq__12185_12189 = G__12195;
chunk__12186_12190 = G__12196;
count__12187_12191 = G__12197;
i__12188_12192 = G__12198;
continue;
} else {
var temp__4126__auto___12199 = cljs.core.seq.call(null,seq__12185_12189);
if(temp__4126__auto___12199){
var seq__12185_12200__$1 = temp__4126__auto___12199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12185_12200__$1)){
var c__4011__auto___12201 = cljs.core.chunk_first.call(null,seq__12185_12200__$1);
var G__12202 = cljs.core.chunk_rest.call(null,seq__12185_12200__$1);
var G__12203 = c__4011__auto___12201;
var G__12204 = cljs.core.count.call(null,c__4011__auto___12201);
var G__12205 = (0);
seq__12185_12189 = G__12202;
chunk__12186_12190 = G__12203;
count__12187_12191 = G__12204;
i__12188_12192 = G__12205;
continue;
} else {
var k_12206 = cljs.core.first.call(null,seq__12185_12200__$1);
var v_12207 = (b[k_12206]);
(a[k_12206] = v_12207);

var G__12208 = cljs.core.next.call(null,seq__12185_12200__$1);
var G__12209 = null;
var G__12210 = (0);
var G__12211 = (0);
seq__12185_12189 = G__12208;
chunk__12186_12190 = G__12209;
count__12187_12191 = G__12210;
i__12188_12192 = G__12211;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__12212 = (i + (2));
var G__12213 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__12212;
ret = G__12213;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12214_12218 = cljs.core.seq.call(null,v);
var chunk__12215_12219 = null;
var count__12216_12220 = (0);
var i__12217_12221 = (0);
while(true){
if((i__12217_12221 < count__12216_12220)){
var x_12222 = cljs.core._nth.call(null,chunk__12215_12219,i__12217_12221);
ret.push(x_12222);

var G__12223 = seq__12214_12218;
var G__12224 = chunk__12215_12219;
var G__12225 = count__12216_12220;
var G__12226 = (i__12217_12221 + (1));
seq__12214_12218 = G__12223;
chunk__12215_12219 = G__12224;
count__12216_12220 = G__12225;
i__12217_12221 = G__12226;
continue;
} else {
var temp__4126__auto___12227 = cljs.core.seq.call(null,seq__12214_12218);
if(temp__4126__auto___12227){
var seq__12214_12228__$1 = temp__4126__auto___12227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12214_12228__$1)){
var c__4011__auto___12229 = cljs.core.chunk_first.call(null,seq__12214_12228__$1);
var G__12230 = cljs.core.chunk_rest.call(null,seq__12214_12228__$1);
var G__12231 = c__4011__auto___12229;
var G__12232 = cljs.core.count.call(null,c__4011__auto___12229);
var G__12233 = (0);
seq__12214_12218 = G__12230;
chunk__12215_12219 = G__12231;
count__12216_12220 = G__12232;
i__12217_12221 = G__12233;
continue;
} else {
var x_12234 = cljs.core.first.call(null,seq__12214_12228__$1);
ret.push(x_12234);

var G__12235 = cljs.core.next.call(null,seq__12214_12228__$1);
var G__12236 = null;
var G__12237 = (0);
var G__12238 = (0);
seq__12214_12218 = G__12235;
chunk__12215_12219 = G__12236;
count__12216_12220 = G__12237;
i__12217_12221 = G__12238;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12239_12243 = cljs.core.seq.call(null,v);
var chunk__12240_12244 = null;
var count__12241_12245 = (0);
var i__12242_12246 = (0);
while(true){
if((i__12242_12246 < count__12241_12245)){
var x_12247 = cljs.core._nth.call(null,chunk__12240_12244,i__12242_12246);
ret.push(x_12247);

var G__12248 = seq__12239_12243;
var G__12249 = chunk__12240_12244;
var G__12250 = count__12241_12245;
var G__12251 = (i__12242_12246 + (1));
seq__12239_12243 = G__12248;
chunk__12240_12244 = G__12249;
count__12241_12245 = G__12250;
i__12242_12246 = G__12251;
continue;
} else {
var temp__4126__auto___12252 = cljs.core.seq.call(null,seq__12239_12243);
if(temp__4126__auto___12252){
var seq__12239_12253__$1 = temp__4126__auto___12252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12239_12253__$1)){
var c__4011__auto___12254 = cljs.core.chunk_first.call(null,seq__12239_12253__$1);
var G__12255 = cljs.core.chunk_rest.call(null,seq__12239_12253__$1);
var G__12256 = c__4011__auto___12254;
var G__12257 = cljs.core.count.call(null,c__4011__auto___12254);
var G__12258 = (0);
seq__12239_12243 = G__12255;
chunk__12240_12244 = G__12256;
count__12241_12245 = G__12257;
i__12242_12246 = G__12258;
continue;
} else {
var x_12259 = cljs.core.first.call(null,seq__12239_12253__$1);
ret.push(x_12259);

var G__12260 = cljs.core.next.call(null,seq__12239_12253__$1);
var G__12261 = null;
var G__12262 = (0);
var G__12263 = (0);
seq__12239_12243 = G__12260;
chunk__12240_12244 = G__12261;
count__12241_12245 = G__12262;
i__12242_12246 = G__12263;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12264_12268 = cljs.core.seq.call(null,v);
var chunk__12265_12269 = null;
var count__12266_12270 = (0);
var i__12267_12271 = (0);
while(true){
if((i__12267_12271 < count__12266_12270)){
var x_12272 = cljs.core._nth.call(null,chunk__12265_12269,i__12267_12271);
ret.push(x_12272);

var G__12273 = seq__12264_12268;
var G__12274 = chunk__12265_12269;
var G__12275 = count__12266_12270;
var G__12276 = (i__12267_12271 + (1));
seq__12264_12268 = G__12273;
chunk__12265_12269 = G__12274;
count__12266_12270 = G__12275;
i__12267_12271 = G__12276;
continue;
} else {
var temp__4126__auto___12277 = cljs.core.seq.call(null,seq__12264_12268);
if(temp__4126__auto___12277){
var seq__12264_12278__$1 = temp__4126__auto___12277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12264_12278__$1)){
var c__4011__auto___12279 = cljs.core.chunk_first.call(null,seq__12264_12278__$1);
var G__12280 = cljs.core.chunk_rest.call(null,seq__12264_12278__$1);
var G__12281 = c__4011__auto___12279;
var G__12282 = cljs.core.count.call(null,c__4011__auto___12279);
var G__12283 = (0);
seq__12264_12268 = G__12280;
chunk__12265_12269 = G__12281;
count__12266_12270 = G__12282;
i__12267_12271 = G__12283;
continue;
} else {
var x_12284 = cljs.core.first.call(null,seq__12264_12278__$1);
ret.push(x_12284);

var G__12285 = cljs.core.next.call(null,seq__12264_12278__$1);
var G__12286 = null;
var G__12287 = (0);
var G__12288 = (0);
seq__12264_12268 = G__12285;
chunk__12265_12269 = G__12286;
count__12266_12270 = G__12287;
i__12267_12271 = G__12288;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12298 = cljs.core.clone.call(null,handlers);
x12298.forEach = ((function (x12298,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__12299 = cljs.core.seq.call(null,coll);
var chunk__12300 = null;
var count__12301 = (0);
var i__12302 = (0);
while(true){
if((i__12302 < count__12301)){
var vec__12303 = cljs.core._nth.call(null,chunk__12300,i__12302);
var k = cljs.core.nth.call(null,vec__12303,(0),null);
var v = cljs.core.nth.call(null,vec__12303,(1),null);
f.call(null,v,k);

var G__12305 = seq__12299;
var G__12306 = chunk__12300;
var G__12307 = count__12301;
var G__12308 = (i__12302 + (1));
seq__12299 = G__12305;
chunk__12300 = G__12306;
count__12301 = G__12307;
i__12302 = G__12308;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12299);
if(temp__4126__auto__){
var seq__12299__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12299__$1)){
var c__4011__auto__ = cljs.core.chunk_first.call(null,seq__12299__$1);
var G__12309 = cljs.core.chunk_rest.call(null,seq__12299__$1);
var G__12310 = c__4011__auto__;
var G__12311 = cljs.core.count.call(null,c__4011__auto__);
var G__12312 = (0);
seq__12299 = G__12309;
chunk__12300 = G__12310;
count__12301 = G__12311;
i__12302 = G__12312;
continue;
} else {
var vec__12304 = cljs.core.first.call(null,seq__12299__$1);
var k = cljs.core.nth.call(null,vec__12304,(0),null);
var v = cljs.core.nth.call(null,vec__12304,(1),null);
f.call(null,v,k);

var G__12313 = cljs.core.next.call(null,seq__12299__$1);
var G__12314 = null;
var G__12315 = (0);
var G__12316 = (0);
seq__12299 = G__12313;
chunk__12300 = G__12314;
count__12301 = G__12315;
i__12302 = G__12316;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12298,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x12298;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__12297 = obj;
G__12297.push(kfn.call(null,k),vfn.call(null,v));

return G__12297;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t12320 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t12320 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta12321){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta12321 = meta12321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t12320.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t12320.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t12320.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t12320.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t12320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12322){
var self__ = this;
var _12322__$1 = this;
return self__.meta12321;
});

cognitect.transit.t12320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12322,meta12321__$1){
var self__ = this;
var _12322__$1 = this;
return (new cognitect.transit.t12320(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta12321__$1));
});

cognitect.transit.t12320.cljs$lang$type = true;

cognitect.transit.t12320.cljs$lang$ctorStr = "cognitect.transit/t12320";

cognitect.transit.t12320.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cognitect.transit/t12320");
});

cognitect.transit.__GT_t12320 = (function __GT_t12320(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta12321){
return (new cognitect.transit.t12320(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta12321));
});

}

return (new cognitect.transit.t12320(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,cljs.core.PersistentArrayMap.EMPTY));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big integer from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big integer value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map