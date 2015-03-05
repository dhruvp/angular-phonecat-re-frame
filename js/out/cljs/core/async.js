// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t18932 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18932 = (function (f,fn_handler,meta18933){
this.f = f;
this.fn_handler = fn_handler;
this.meta18933 = meta18933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18932.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t18932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18934){
var self__ = this;
var _18934__$1 = this;
return self__.meta18933;
});

cljs.core.async.t18932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18934,meta18933__$1){
var self__ = this;
var _18934__$1 = this;
return (new cljs.core.async.t18932(self__.f,self__.fn_handler,meta18933__$1));
});

cljs.core.async.t18932.cljs$lang$type = true;

cljs.core.async.t18932.cljs$lang$ctorStr = "cljs.core.async/t18932";

cljs.core.async.t18932.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cljs.core.async/t18932");
});

cljs.core.async.__GT_t18932 = (function __GT_t18932(f__$1,fn_handler__$1,meta18933){
return (new cljs.core.async.t18932(f__$1,fn_handler__$1,meta18933));
});

}

return (new cljs.core.async.t18932(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__18936 = buff;
if(G__18936){
var bit__3905__auto__ = null;
if(cljs.core.truth_((function (){var or__3224__auto__ = bit__3905__auto__;
if(cljs.core.truth_(or__3224__auto__)){
return or__3224__auto__;
} else {
return G__18936.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__18936.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18936);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18936);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18937 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18937);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18937,ret){
return (function (){
return fn1.call(null,val_18937);
});})(val_18937,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4111__auto___18938 = n;
var x_18939 = (0);
while(true){
if((x_18939 < n__4111__auto___18938)){
(a[x_18939] = (0));

var G__18940 = (x_18939 + (1));
x_18939 = G__18940;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__18941 = (i + (1));
i = G__18941;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t18945 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18945 = (function (flag,alt_flag,meta18946){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18946 = meta18946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18945.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18945.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t18945.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t18945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18947){
var self__ = this;
var _18947__$1 = this;
return self__.meta18946;
});})(flag))
;

cljs.core.async.t18945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18947,meta18946__$1){
var self__ = this;
var _18947__$1 = this;
return (new cljs.core.async.t18945(self__.flag,self__.alt_flag,meta18946__$1));
});})(flag))
;

cljs.core.async.t18945.cljs$lang$type = true;

cljs.core.async.t18945.cljs$lang$ctorStr = "cljs.core.async/t18945";

cljs.core.async.t18945.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cljs.core.async/t18945");
});})(flag))
;

cljs.core.async.__GT_t18945 = ((function (flag){
return (function __GT_t18945(flag__$1,alt_flag__$1,meta18946){
return (new cljs.core.async.t18945(flag__$1,alt_flag__$1,meta18946));
});})(flag))
;

}

return (new cljs.core.async.t18945(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t18951 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18951 = (function (cb,flag,alt_handler,meta18952){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18952 = meta18952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18951.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18951.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t18951.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t18951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18953){
var self__ = this;
var _18953__$1 = this;
return self__.meta18952;
});

cljs.core.async.t18951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18953,meta18952__$1){
var self__ = this;
var _18953__$1 = this;
return (new cljs.core.async.t18951(self__.cb,self__.flag,self__.alt_handler,meta18952__$1));
});

cljs.core.async.t18951.cljs$lang$type = true;

cljs.core.async.t18951.cljs$lang$ctorStr = "cljs.core.async/t18951";

cljs.core.async.t18951.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cljs.core.async/t18951");
});

cljs.core.async.__GT_t18951 = (function __GT_t18951(cb__$1,flag__$1,alt_handler__$1,meta18952){
return (new cljs.core.async.t18951(cb__$1,flag__$1,alt_handler__$1,meta18952));
});

}

return (new cljs.core.async.t18951(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18954_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18954_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18955_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18955_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3224__auto__ = wport;
if(cljs.core.truth_(or__3224__auto__)){
return or__3224__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18956 = (i + (1));
i = G__18956;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3224__auto__ = ret;
if(cljs.core.truth_(or__3224__auto__)){
return or__3224__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3212__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3212__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3212__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__18957){
var map__18959 = p__18957;
var map__18959__$1 = ((cljs.core.seq_QMARK_.call(null,map__18959))?cljs.core.apply.call(null,cljs.core.hash_map,map__18959):map__18959);
var opts = map__18959__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18957 = null;
if (arguments.length > 1) {
var G__18960__i = 0, G__18960__a = new Array(arguments.length -  1);
while (G__18960__i < G__18960__a.length) {G__18960__a[G__18960__i] = arguments[G__18960__i + 1]; ++G__18960__i;}
  p__18957 = new cljs.core.IndexedSeq(G__18960__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__18957);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18961){
var ports = cljs.core.first(arglist__18961);
var p__18957 = cljs.core.rest(arglist__18961);
return alts_BANG___delegate(ports,p__18957);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__7158__auto___19056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___19056){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___19056){
return (function (state_19032){
var state_val_19033 = (state_19032[(1)]);
if((state_val_19033 === (7))){
var inst_19028 = (state_19032[(2)]);
var state_19032__$1 = state_19032;
var statearr_19034_19057 = state_19032__$1;
(statearr_19034_19057[(2)] = inst_19028);

(statearr_19034_19057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19033 === (1))){
var state_19032__$1 = state_19032;
var statearr_19035_19058 = state_19032__$1;
(statearr_19035_19058[(2)] = null);

(statearr_19035_19058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19033 === (4))){
var inst_19011 = (state_19032[(7)]);
var inst_19011__$1 = (state_19032[(2)]);
var inst_19012 = (inst_19011__$1 == null);
var state_19032__$1 = (function (){var statearr_19036 = state_19032;
(statearr_19036[(7)] = inst_19011__$1);

return statearr_19036;
})();
if(cljs.core.truth_(inst_19012)){
var statearr_19037_19059 = state_19032__$1;
(statearr_19037_19059[(1)] = (5));

} else {
var statearr_19038_19060 = state_19032__$1;
(statearr_19038_19060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19033 === (13))){
var state_19032__$1 = state_19032;
var statearr_19039_19061 = state_19032__$1;
(statearr_19039_19061[(2)] = null);

(statearr_19039_19061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19033 === (6))){
var inst_19011 = (state_19032[(7)]);
var state_19032__$1 = state_19032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19032__$1,(11),to,inst_19011);
} else {
if((state_val_19033 === (3))){
var inst_19030 = (state_19032[(2)]);
var state_19032__$1 = state_19032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19032__$1,inst_19030);
} else {
if((state_val_19033 === (12))){
var state_19032__$1 = state_19032;
var statearr_19040_19062 = state_19032__$1;
(statearr_19040_19062[(2)] = null);

(statearr_19040_19062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19033 === (2))){
var state_19032__$1 = state_19032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19032__$1,(4),from);
} else {
if((state_val_19033 === (11))){
var inst_19021 = (state_19032[(2)]);
var state_19032__$1 = state_19032;
if(cljs.core.truth_(inst_19021)){
var statearr_19041_19063 = state_19032__$1;
(statearr_19041_19063[(1)] = (12));

} else {
var statearr_19042_19064 = state_19032__$1;
(statearr_19042_19064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19033 === (9))){
var state_19032__$1 = state_19032;
var statearr_19043_19065 = state_19032__$1;
(statearr_19043_19065[(2)] = null);

(statearr_19043_19065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19033 === (5))){
var state_19032__$1 = state_19032;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19044_19066 = state_19032__$1;
(statearr_19044_19066[(1)] = (8));

} else {
var statearr_19045_19067 = state_19032__$1;
(statearr_19045_19067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19033 === (14))){
var inst_19026 = (state_19032[(2)]);
var state_19032__$1 = state_19032;
var statearr_19046_19068 = state_19032__$1;
(statearr_19046_19068[(2)] = inst_19026);

(statearr_19046_19068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19033 === (10))){
var inst_19018 = (state_19032[(2)]);
var state_19032__$1 = state_19032;
var statearr_19047_19069 = state_19032__$1;
(statearr_19047_19069[(2)] = inst_19018);

(statearr_19047_19069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19033 === (8))){
var inst_19015 = cljs.core.async.close_BANG_.call(null,to);
var state_19032__$1 = state_19032;
var statearr_19048_19070 = state_19032__$1;
(statearr_19048_19070[(2)] = inst_19015);

(statearr_19048_19070[(1)] = (10));


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
});})(c__7158__auto___19056))
;
return ((function (switch__7102__auto__,c__7158__auto___19056){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_19052 = [null,null,null,null,null,null,null,null];
(statearr_19052[(0)] = state_machine__7103__auto__);

(statearr_19052[(1)] = (1));

return statearr_19052;
});
var state_machine__7103__auto____1 = (function (state_19032){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_19032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e19053){if((e19053 instanceof Object)){
var ex__7106__auto__ = e19053;
var statearr_19054_19071 = state_19032;
(statearr_19054_19071[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19072 = state_19032;
state_19032 = G__19072;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_19032){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_19032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___19056))
})();
var state__7160__auto__ = (function (){var statearr_19055 = f__7159__auto__.call(null);
(statearr_19055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___19056);

return statearr_19055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___19056))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19256){
var vec__19257 = p__19256;
var v = cljs.core.nth.call(null,vec__19257,(0),null);
var p = cljs.core.nth.call(null,vec__19257,(1),null);
var job = vec__19257;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7158__auto___19439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___19439,res,vec__19257,v,p,job,jobs,results){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___19439,res,vec__19257,v,p,job,jobs,results){
return (function (state_19262){
var state_val_19263 = (state_19262[(1)]);
if((state_val_19263 === (2))){
var inst_19259 = (state_19262[(2)]);
var inst_19260 = cljs.core.async.close_BANG_.call(null,res);
var state_19262__$1 = (function (){var statearr_19264 = state_19262;
(statearr_19264[(7)] = inst_19259);

return statearr_19264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19262__$1,inst_19260);
} else {
if((state_val_19263 === (1))){
var state_19262__$1 = state_19262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19262__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7158__auto___19439,res,vec__19257,v,p,job,jobs,results))
;
return ((function (switch__7102__auto__,c__7158__auto___19439,res,vec__19257,v,p,job,jobs,results){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_19268 = [null,null,null,null,null,null,null,null];
(statearr_19268[(0)] = state_machine__7103__auto__);

(statearr_19268[(1)] = (1));

return statearr_19268;
});
var state_machine__7103__auto____1 = (function (state_19262){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_19262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e19269){if((e19269 instanceof Object)){
var ex__7106__auto__ = e19269;
var statearr_19270_19440 = state_19262;
(statearr_19270_19440[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19441 = state_19262;
state_19262 = G__19441;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_19262){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_19262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___19439,res,vec__19257,v,p,job,jobs,results))
})();
var state__7160__auto__ = (function (){var statearr_19271 = f__7159__auto__.call(null);
(statearr_19271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___19439);

return statearr_19271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___19439,res,vec__19257,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19272){
var vec__19273 = p__19272;
var v = cljs.core.nth.call(null,vec__19273,(0),null);
var p = cljs.core.nth.call(null,vec__19273,(1),null);
var job = vec__19273;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4111__auto___19442 = n;
var __19443 = (0);
while(true){
if((__19443 < n__4111__auto___19442)){
var G__19274_19444 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19274_19444) {
case "async":
var c__7158__auto___19446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19443,c__7158__auto___19446,G__19274_19444,n__4111__auto___19442,jobs,results,process,async){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (__19443,c__7158__auto___19446,G__19274_19444,n__4111__auto___19442,jobs,results,process,async){
return (function (state_19287){
var state_val_19288 = (state_19287[(1)]);
if((state_val_19288 === (7))){
var inst_19283 = (state_19287[(2)]);
var state_19287__$1 = state_19287;
var statearr_19289_19447 = state_19287__$1;
(statearr_19289_19447[(2)] = inst_19283);

(statearr_19289_19447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19288 === (6))){
var state_19287__$1 = state_19287;
var statearr_19290_19448 = state_19287__$1;
(statearr_19290_19448[(2)] = null);

(statearr_19290_19448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19288 === (5))){
var state_19287__$1 = state_19287;
var statearr_19291_19449 = state_19287__$1;
(statearr_19291_19449[(2)] = null);

(statearr_19291_19449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19288 === (4))){
var inst_19277 = (state_19287[(2)]);
var inst_19278 = async.call(null,inst_19277);
var state_19287__$1 = state_19287;
if(cljs.core.truth_(inst_19278)){
var statearr_19292_19450 = state_19287__$1;
(statearr_19292_19450[(1)] = (5));

} else {
var statearr_19293_19451 = state_19287__$1;
(statearr_19293_19451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19288 === (3))){
var inst_19285 = (state_19287[(2)]);
var state_19287__$1 = state_19287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19287__$1,inst_19285);
} else {
if((state_val_19288 === (2))){
var state_19287__$1 = state_19287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19287__$1,(4),jobs);
} else {
if((state_val_19288 === (1))){
var state_19287__$1 = state_19287;
var statearr_19294_19452 = state_19287__$1;
(statearr_19294_19452[(2)] = null);

(statearr_19294_19452[(1)] = (2));


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
});})(__19443,c__7158__auto___19446,G__19274_19444,n__4111__auto___19442,jobs,results,process,async))
;
return ((function (__19443,switch__7102__auto__,c__7158__auto___19446,G__19274_19444,n__4111__auto___19442,jobs,results,process,async){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_19298 = [null,null,null,null,null,null,null];
(statearr_19298[(0)] = state_machine__7103__auto__);

(statearr_19298[(1)] = (1));

return statearr_19298;
});
var state_machine__7103__auto____1 = (function (state_19287){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_19287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e19299){if((e19299 instanceof Object)){
var ex__7106__auto__ = e19299;
var statearr_19300_19453 = state_19287;
(statearr_19300_19453[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19454 = state_19287;
state_19287 = G__19454;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_19287){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_19287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(__19443,switch__7102__auto__,c__7158__auto___19446,G__19274_19444,n__4111__auto___19442,jobs,results,process,async))
})();
var state__7160__auto__ = (function (){var statearr_19301 = f__7159__auto__.call(null);
(statearr_19301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___19446);

return statearr_19301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(__19443,c__7158__auto___19446,G__19274_19444,n__4111__auto___19442,jobs,results,process,async))
);


break;
case "compute":
var c__7158__auto___19455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19443,c__7158__auto___19455,G__19274_19444,n__4111__auto___19442,jobs,results,process,async){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (__19443,c__7158__auto___19455,G__19274_19444,n__4111__auto___19442,jobs,results,process,async){
return (function (state_19314){
var state_val_19315 = (state_19314[(1)]);
if((state_val_19315 === (7))){
var inst_19310 = (state_19314[(2)]);
var state_19314__$1 = state_19314;
var statearr_19316_19456 = state_19314__$1;
(statearr_19316_19456[(2)] = inst_19310);

(statearr_19316_19456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19315 === (6))){
var state_19314__$1 = state_19314;
var statearr_19317_19457 = state_19314__$1;
(statearr_19317_19457[(2)] = null);

(statearr_19317_19457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19315 === (5))){
var state_19314__$1 = state_19314;
var statearr_19318_19458 = state_19314__$1;
(statearr_19318_19458[(2)] = null);

(statearr_19318_19458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19315 === (4))){
var inst_19304 = (state_19314[(2)]);
var inst_19305 = process.call(null,inst_19304);
var state_19314__$1 = state_19314;
if(cljs.core.truth_(inst_19305)){
var statearr_19319_19459 = state_19314__$1;
(statearr_19319_19459[(1)] = (5));

} else {
var statearr_19320_19460 = state_19314__$1;
(statearr_19320_19460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19315 === (3))){
var inst_19312 = (state_19314[(2)]);
var state_19314__$1 = state_19314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19314__$1,inst_19312);
} else {
if((state_val_19315 === (2))){
var state_19314__$1 = state_19314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19314__$1,(4),jobs);
} else {
if((state_val_19315 === (1))){
var state_19314__$1 = state_19314;
var statearr_19321_19461 = state_19314__$1;
(statearr_19321_19461[(2)] = null);

(statearr_19321_19461[(1)] = (2));


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
});})(__19443,c__7158__auto___19455,G__19274_19444,n__4111__auto___19442,jobs,results,process,async))
;
return ((function (__19443,switch__7102__auto__,c__7158__auto___19455,G__19274_19444,n__4111__auto___19442,jobs,results,process,async){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_19325 = [null,null,null,null,null,null,null];
(statearr_19325[(0)] = state_machine__7103__auto__);

(statearr_19325[(1)] = (1));

return statearr_19325;
});
var state_machine__7103__auto____1 = (function (state_19314){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_19314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e19326){if((e19326 instanceof Object)){
var ex__7106__auto__ = e19326;
var statearr_19327_19462 = state_19314;
(statearr_19327_19462[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19463 = state_19314;
state_19314 = G__19463;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_19314){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_19314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(__19443,switch__7102__auto__,c__7158__auto___19455,G__19274_19444,n__4111__auto___19442,jobs,results,process,async))
})();
var state__7160__auto__ = (function (){var statearr_19328 = f__7159__auto__.call(null);
(statearr_19328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___19455);

return statearr_19328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(__19443,c__7158__auto___19455,G__19274_19444,n__4111__auto___19442,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19464 = (__19443 + (1));
__19443 = G__19464;
continue;
} else {
}
break;
}

var c__7158__auto___19465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___19465,jobs,results,process,async){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___19465,jobs,results,process,async){
return (function (state_19350){
var state_val_19351 = (state_19350[(1)]);
if((state_val_19351 === (9))){
var inst_19343 = (state_19350[(2)]);
var state_19350__$1 = (function (){var statearr_19352 = state_19350;
(statearr_19352[(7)] = inst_19343);

return statearr_19352;
})();
var statearr_19353_19466 = state_19350__$1;
(statearr_19353_19466[(2)] = null);

(statearr_19353_19466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19351 === (8))){
var inst_19336 = (state_19350[(8)]);
var inst_19341 = (state_19350[(2)]);
var state_19350__$1 = (function (){var statearr_19354 = state_19350;
(statearr_19354[(9)] = inst_19341);

return statearr_19354;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19350__$1,(9),results,inst_19336);
} else {
if((state_val_19351 === (7))){
var inst_19346 = (state_19350[(2)]);
var state_19350__$1 = state_19350;
var statearr_19355_19467 = state_19350__$1;
(statearr_19355_19467[(2)] = inst_19346);

(statearr_19355_19467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19351 === (6))){
var inst_19336 = (state_19350[(8)]);
var inst_19331 = (state_19350[(10)]);
var inst_19336__$1 = cljs.core.async.chan.call(null,(1));
var inst_19337 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19338 = [inst_19331,inst_19336__$1];
var inst_19339 = (new cljs.core.PersistentVector(null,2,(5),inst_19337,inst_19338,null));
var state_19350__$1 = (function (){var statearr_19356 = state_19350;
(statearr_19356[(8)] = inst_19336__$1);

return statearr_19356;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19350__$1,(8),jobs,inst_19339);
} else {
if((state_val_19351 === (5))){
var inst_19334 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19350__$1 = state_19350;
var statearr_19357_19468 = state_19350__$1;
(statearr_19357_19468[(2)] = inst_19334);

(statearr_19357_19468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19351 === (4))){
var inst_19331 = (state_19350[(10)]);
var inst_19331__$1 = (state_19350[(2)]);
var inst_19332 = (inst_19331__$1 == null);
var state_19350__$1 = (function (){var statearr_19358 = state_19350;
(statearr_19358[(10)] = inst_19331__$1);

return statearr_19358;
})();
if(cljs.core.truth_(inst_19332)){
var statearr_19359_19469 = state_19350__$1;
(statearr_19359_19469[(1)] = (5));

} else {
var statearr_19360_19470 = state_19350__$1;
(statearr_19360_19470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19351 === (3))){
var inst_19348 = (state_19350[(2)]);
var state_19350__$1 = state_19350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19350__$1,inst_19348);
} else {
if((state_val_19351 === (2))){
var state_19350__$1 = state_19350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19350__$1,(4),from);
} else {
if((state_val_19351 === (1))){
var state_19350__$1 = state_19350;
var statearr_19361_19471 = state_19350__$1;
(statearr_19361_19471[(2)] = null);

(statearr_19361_19471[(1)] = (2));


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
});})(c__7158__auto___19465,jobs,results,process,async))
;
return ((function (switch__7102__auto__,c__7158__auto___19465,jobs,results,process,async){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_19365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19365[(0)] = state_machine__7103__auto__);

(statearr_19365[(1)] = (1));

return statearr_19365;
});
var state_machine__7103__auto____1 = (function (state_19350){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_19350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e19366){if((e19366 instanceof Object)){
var ex__7106__auto__ = e19366;
var statearr_19367_19472 = state_19350;
(statearr_19367_19472[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19473 = state_19350;
state_19350 = G__19473;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_19350){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_19350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___19465,jobs,results,process,async))
})();
var state__7160__auto__ = (function (){var statearr_19368 = f__7159__auto__.call(null);
(statearr_19368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___19465);

return statearr_19368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___19465,jobs,results,process,async))
);


var c__7158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto__,jobs,results,process,async){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto__,jobs,results,process,async){
return (function (state_19406){
var state_val_19407 = (state_19406[(1)]);
if((state_val_19407 === (7))){
var inst_19402 = (state_19406[(2)]);
var state_19406__$1 = state_19406;
var statearr_19408_19474 = state_19406__$1;
(statearr_19408_19474[(2)] = inst_19402);

(statearr_19408_19474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (20))){
var state_19406__$1 = state_19406;
var statearr_19409_19475 = state_19406__$1;
(statearr_19409_19475[(2)] = null);

(statearr_19409_19475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (1))){
var state_19406__$1 = state_19406;
var statearr_19410_19476 = state_19406__$1;
(statearr_19410_19476[(2)] = null);

(statearr_19410_19476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (4))){
var inst_19371 = (state_19406[(7)]);
var inst_19371__$1 = (state_19406[(2)]);
var inst_19372 = (inst_19371__$1 == null);
var state_19406__$1 = (function (){var statearr_19411 = state_19406;
(statearr_19411[(7)] = inst_19371__$1);

return statearr_19411;
})();
if(cljs.core.truth_(inst_19372)){
var statearr_19412_19477 = state_19406__$1;
(statearr_19412_19477[(1)] = (5));

} else {
var statearr_19413_19478 = state_19406__$1;
(statearr_19413_19478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (15))){
var inst_19384 = (state_19406[(8)]);
var state_19406__$1 = state_19406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19406__$1,(18),to,inst_19384);
} else {
if((state_val_19407 === (21))){
var inst_19397 = (state_19406[(2)]);
var state_19406__$1 = state_19406;
var statearr_19414_19479 = state_19406__$1;
(statearr_19414_19479[(2)] = inst_19397);

(statearr_19414_19479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (13))){
var inst_19399 = (state_19406[(2)]);
var state_19406__$1 = (function (){var statearr_19415 = state_19406;
(statearr_19415[(9)] = inst_19399);

return statearr_19415;
})();
var statearr_19416_19480 = state_19406__$1;
(statearr_19416_19480[(2)] = null);

(statearr_19416_19480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (6))){
var inst_19371 = (state_19406[(7)]);
var state_19406__$1 = state_19406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19406__$1,(11),inst_19371);
} else {
if((state_val_19407 === (17))){
var inst_19392 = (state_19406[(2)]);
var state_19406__$1 = state_19406;
if(cljs.core.truth_(inst_19392)){
var statearr_19417_19481 = state_19406__$1;
(statearr_19417_19481[(1)] = (19));

} else {
var statearr_19418_19482 = state_19406__$1;
(statearr_19418_19482[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (3))){
var inst_19404 = (state_19406[(2)]);
var state_19406__$1 = state_19406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19406__$1,inst_19404);
} else {
if((state_val_19407 === (12))){
var inst_19381 = (state_19406[(10)]);
var state_19406__$1 = state_19406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19406__$1,(14),inst_19381);
} else {
if((state_val_19407 === (2))){
var state_19406__$1 = state_19406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19406__$1,(4),results);
} else {
if((state_val_19407 === (19))){
var state_19406__$1 = state_19406;
var statearr_19419_19483 = state_19406__$1;
(statearr_19419_19483[(2)] = null);

(statearr_19419_19483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (11))){
var inst_19381 = (state_19406[(2)]);
var state_19406__$1 = (function (){var statearr_19420 = state_19406;
(statearr_19420[(10)] = inst_19381);

return statearr_19420;
})();
var statearr_19421_19484 = state_19406__$1;
(statearr_19421_19484[(2)] = null);

(statearr_19421_19484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (9))){
var state_19406__$1 = state_19406;
var statearr_19422_19485 = state_19406__$1;
(statearr_19422_19485[(2)] = null);

(statearr_19422_19485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (5))){
var state_19406__$1 = state_19406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19423_19486 = state_19406__$1;
(statearr_19423_19486[(1)] = (8));

} else {
var statearr_19424_19487 = state_19406__$1;
(statearr_19424_19487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (14))){
var inst_19386 = (state_19406[(11)]);
var inst_19384 = (state_19406[(8)]);
var inst_19384__$1 = (state_19406[(2)]);
var inst_19385 = (inst_19384__$1 == null);
var inst_19386__$1 = cljs.core.not.call(null,inst_19385);
var state_19406__$1 = (function (){var statearr_19425 = state_19406;
(statearr_19425[(11)] = inst_19386__$1);

(statearr_19425[(8)] = inst_19384__$1);

return statearr_19425;
})();
if(inst_19386__$1){
var statearr_19426_19488 = state_19406__$1;
(statearr_19426_19488[(1)] = (15));

} else {
var statearr_19427_19489 = state_19406__$1;
(statearr_19427_19489[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (16))){
var inst_19386 = (state_19406[(11)]);
var state_19406__$1 = state_19406;
var statearr_19428_19490 = state_19406__$1;
(statearr_19428_19490[(2)] = inst_19386);

(statearr_19428_19490[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (10))){
var inst_19378 = (state_19406[(2)]);
var state_19406__$1 = state_19406;
var statearr_19429_19491 = state_19406__$1;
(statearr_19429_19491[(2)] = inst_19378);

(statearr_19429_19491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (18))){
var inst_19389 = (state_19406[(2)]);
var state_19406__$1 = state_19406;
var statearr_19430_19492 = state_19406__$1;
(statearr_19430_19492[(2)] = inst_19389);

(statearr_19430_19492[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19407 === (8))){
var inst_19375 = cljs.core.async.close_BANG_.call(null,to);
var state_19406__$1 = state_19406;
var statearr_19431_19493 = state_19406__$1;
(statearr_19431_19493[(2)] = inst_19375);

(statearr_19431_19493[(1)] = (10));


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
});})(c__7158__auto__,jobs,results,process,async))
;
return ((function (switch__7102__auto__,c__7158__auto__,jobs,results,process,async){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_19435 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19435[(0)] = state_machine__7103__auto__);

(statearr_19435[(1)] = (1));

return statearr_19435;
});
var state_machine__7103__auto____1 = (function (state_19406){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_19406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e19436){if((e19436 instanceof Object)){
var ex__7106__auto__ = e19436;
var statearr_19437_19494 = state_19406;
(statearr_19437_19494[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19495 = state_19406;
state_19406 = G__19495;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_19406){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_19406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto__,jobs,results,process,async))
})();
var state__7160__auto__ = (function (){var statearr_19438 = f__7159__auto__.call(null);
(statearr_19438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto__);

return statearr_19438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto__,jobs,results,process,async))
);

return c__7158__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7158__auto___19596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___19596,tc,fc){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___19596,tc,fc){
return (function (state_19571){
var state_val_19572 = (state_19571[(1)]);
if((state_val_19572 === (7))){
var inst_19567 = (state_19571[(2)]);
var state_19571__$1 = state_19571;
var statearr_19573_19597 = state_19571__$1;
(statearr_19573_19597[(2)] = inst_19567);

(statearr_19573_19597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (1))){
var state_19571__$1 = state_19571;
var statearr_19574_19598 = state_19571__$1;
(statearr_19574_19598[(2)] = null);

(statearr_19574_19598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (4))){
var inst_19548 = (state_19571[(7)]);
var inst_19548__$1 = (state_19571[(2)]);
var inst_19549 = (inst_19548__$1 == null);
var state_19571__$1 = (function (){var statearr_19575 = state_19571;
(statearr_19575[(7)] = inst_19548__$1);

return statearr_19575;
})();
if(cljs.core.truth_(inst_19549)){
var statearr_19576_19599 = state_19571__$1;
(statearr_19576_19599[(1)] = (5));

} else {
var statearr_19577_19600 = state_19571__$1;
(statearr_19577_19600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (13))){
var state_19571__$1 = state_19571;
var statearr_19578_19601 = state_19571__$1;
(statearr_19578_19601[(2)] = null);

(statearr_19578_19601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (6))){
var inst_19548 = (state_19571[(7)]);
var inst_19554 = p.call(null,inst_19548);
var state_19571__$1 = state_19571;
if(cljs.core.truth_(inst_19554)){
var statearr_19579_19602 = state_19571__$1;
(statearr_19579_19602[(1)] = (9));

} else {
var statearr_19580_19603 = state_19571__$1;
(statearr_19580_19603[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (3))){
var inst_19569 = (state_19571[(2)]);
var state_19571__$1 = state_19571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19571__$1,inst_19569);
} else {
if((state_val_19572 === (12))){
var state_19571__$1 = state_19571;
var statearr_19581_19604 = state_19571__$1;
(statearr_19581_19604[(2)] = null);

(statearr_19581_19604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (2))){
var state_19571__$1 = state_19571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19571__$1,(4),ch);
} else {
if((state_val_19572 === (11))){
var inst_19548 = (state_19571[(7)]);
var inst_19558 = (state_19571[(2)]);
var state_19571__$1 = state_19571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19571__$1,(8),inst_19558,inst_19548);
} else {
if((state_val_19572 === (9))){
var state_19571__$1 = state_19571;
var statearr_19582_19605 = state_19571__$1;
(statearr_19582_19605[(2)] = tc);

(statearr_19582_19605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (5))){
var inst_19551 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19552 = cljs.core.async.close_BANG_.call(null,fc);
var state_19571__$1 = (function (){var statearr_19583 = state_19571;
(statearr_19583[(8)] = inst_19551);

return statearr_19583;
})();
var statearr_19584_19606 = state_19571__$1;
(statearr_19584_19606[(2)] = inst_19552);

(statearr_19584_19606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (14))){
var inst_19565 = (state_19571[(2)]);
var state_19571__$1 = state_19571;
var statearr_19585_19607 = state_19571__$1;
(statearr_19585_19607[(2)] = inst_19565);

(statearr_19585_19607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (10))){
var state_19571__$1 = state_19571;
var statearr_19586_19608 = state_19571__$1;
(statearr_19586_19608[(2)] = fc);

(statearr_19586_19608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19572 === (8))){
var inst_19560 = (state_19571[(2)]);
var state_19571__$1 = state_19571;
if(cljs.core.truth_(inst_19560)){
var statearr_19587_19609 = state_19571__$1;
(statearr_19587_19609[(1)] = (12));

} else {
var statearr_19588_19610 = state_19571__$1;
(statearr_19588_19610[(1)] = (13));

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
});})(c__7158__auto___19596,tc,fc))
;
return ((function (switch__7102__auto__,c__7158__auto___19596,tc,fc){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_19592 = [null,null,null,null,null,null,null,null,null];
(statearr_19592[(0)] = state_machine__7103__auto__);

(statearr_19592[(1)] = (1));

return statearr_19592;
});
var state_machine__7103__auto____1 = (function (state_19571){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_19571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e19593){if((e19593 instanceof Object)){
var ex__7106__auto__ = e19593;
var statearr_19594_19611 = state_19571;
(statearr_19594_19611[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19612 = state_19571;
state_19571 = G__19612;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_19571){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_19571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___19596,tc,fc))
})();
var state__7160__auto__ = (function (){var statearr_19595 = f__7159__auto__.call(null);
(statearr_19595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___19596);

return statearr_19595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___19596,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__7158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto__){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto__){
return (function (state_19659){
var state_val_19660 = (state_19659[(1)]);
if((state_val_19660 === (7))){
var inst_19655 = (state_19659[(2)]);
var state_19659__$1 = state_19659;
var statearr_19661_19677 = state_19659__$1;
(statearr_19661_19677[(2)] = inst_19655);

(statearr_19661_19677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19660 === (6))){
var inst_19648 = (state_19659[(7)]);
var inst_19645 = (state_19659[(8)]);
var inst_19652 = f.call(null,inst_19645,inst_19648);
var inst_19645__$1 = inst_19652;
var state_19659__$1 = (function (){var statearr_19662 = state_19659;
(statearr_19662[(8)] = inst_19645__$1);

return statearr_19662;
})();
var statearr_19663_19678 = state_19659__$1;
(statearr_19663_19678[(2)] = null);

(statearr_19663_19678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19660 === (5))){
var inst_19645 = (state_19659[(8)]);
var state_19659__$1 = state_19659;
var statearr_19664_19679 = state_19659__$1;
(statearr_19664_19679[(2)] = inst_19645);

(statearr_19664_19679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19660 === (4))){
var inst_19648 = (state_19659[(7)]);
var inst_19648__$1 = (state_19659[(2)]);
var inst_19649 = (inst_19648__$1 == null);
var state_19659__$1 = (function (){var statearr_19665 = state_19659;
(statearr_19665[(7)] = inst_19648__$1);

return statearr_19665;
})();
if(cljs.core.truth_(inst_19649)){
var statearr_19666_19680 = state_19659__$1;
(statearr_19666_19680[(1)] = (5));

} else {
var statearr_19667_19681 = state_19659__$1;
(statearr_19667_19681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19660 === (3))){
var inst_19657 = (state_19659[(2)]);
var state_19659__$1 = state_19659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19659__$1,inst_19657);
} else {
if((state_val_19660 === (2))){
var state_19659__$1 = state_19659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19659__$1,(4),ch);
} else {
if((state_val_19660 === (1))){
var inst_19645 = init;
var state_19659__$1 = (function (){var statearr_19668 = state_19659;
(statearr_19668[(8)] = inst_19645);

return statearr_19668;
})();
var statearr_19669_19682 = state_19659__$1;
(statearr_19669_19682[(2)] = null);

(statearr_19669_19682[(1)] = (2));


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
});})(c__7158__auto__))
;
return ((function (switch__7102__auto__,c__7158__auto__){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_19673 = [null,null,null,null,null,null,null,null,null];
(statearr_19673[(0)] = state_machine__7103__auto__);

(statearr_19673[(1)] = (1));

return statearr_19673;
});
var state_machine__7103__auto____1 = (function (state_19659){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_19659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e19674){if((e19674 instanceof Object)){
var ex__7106__auto__ = e19674;
var statearr_19675_19683 = state_19659;
(statearr_19675_19683[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19684 = state_19659;
state_19659 = G__19684;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_19659){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_19659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto__))
})();
var state__7160__auto__ = (function (){var statearr_19676 = f__7159__auto__.call(null);
(statearr_19676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto__);

return statearr_19676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto__))
);

return c__7158__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__7158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto__){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto__){
return (function (state_19758){
var state_val_19759 = (state_19758[(1)]);
if((state_val_19759 === (7))){
var inst_19740 = (state_19758[(2)]);
var state_19758__$1 = state_19758;
var statearr_19760_19783 = state_19758__$1;
(statearr_19760_19783[(2)] = inst_19740);

(statearr_19760_19783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (1))){
var inst_19734 = cljs.core.seq.call(null,coll);
var inst_19735 = inst_19734;
var state_19758__$1 = (function (){var statearr_19761 = state_19758;
(statearr_19761[(7)] = inst_19735);

return statearr_19761;
})();
var statearr_19762_19784 = state_19758__$1;
(statearr_19762_19784[(2)] = null);

(statearr_19762_19784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (4))){
var inst_19735 = (state_19758[(7)]);
var inst_19738 = cljs.core.first.call(null,inst_19735);
var state_19758__$1 = state_19758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19758__$1,(7),ch,inst_19738);
} else {
if((state_val_19759 === (13))){
var inst_19752 = (state_19758[(2)]);
var state_19758__$1 = state_19758;
var statearr_19763_19785 = state_19758__$1;
(statearr_19763_19785[(2)] = inst_19752);

(statearr_19763_19785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (6))){
var inst_19743 = (state_19758[(2)]);
var state_19758__$1 = state_19758;
if(cljs.core.truth_(inst_19743)){
var statearr_19764_19786 = state_19758__$1;
(statearr_19764_19786[(1)] = (8));

} else {
var statearr_19765_19787 = state_19758__$1;
(statearr_19765_19787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (3))){
var inst_19756 = (state_19758[(2)]);
var state_19758__$1 = state_19758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19758__$1,inst_19756);
} else {
if((state_val_19759 === (12))){
var state_19758__$1 = state_19758;
var statearr_19766_19788 = state_19758__$1;
(statearr_19766_19788[(2)] = null);

(statearr_19766_19788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (2))){
var inst_19735 = (state_19758[(7)]);
var state_19758__$1 = state_19758;
if(cljs.core.truth_(inst_19735)){
var statearr_19767_19789 = state_19758__$1;
(statearr_19767_19789[(1)] = (4));

} else {
var statearr_19768_19790 = state_19758__$1;
(statearr_19768_19790[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (11))){
var inst_19749 = cljs.core.async.close_BANG_.call(null,ch);
var state_19758__$1 = state_19758;
var statearr_19769_19791 = state_19758__$1;
(statearr_19769_19791[(2)] = inst_19749);

(statearr_19769_19791[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (9))){
var state_19758__$1 = state_19758;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19770_19792 = state_19758__$1;
(statearr_19770_19792[(1)] = (11));

} else {
var statearr_19771_19793 = state_19758__$1;
(statearr_19771_19793[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (5))){
var inst_19735 = (state_19758[(7)]);
var state_19758__$1 = state_19758;
var statearr_19772_19794 = state_19758__$1;
(statearr_19772_19794[(2)] = inst_19735);

(statearr_19772_19794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (10))){
var inst_19754 = (state_19758[(2)]);
var state_19758__$1 = state_19758;
var statearr_19773_19795 = state_19758__$1;
(statearr_19773_19795[(2)] = inst_19754);

(statearr_19773_19795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (8))){
var inst_19735 = (state_19758[(7)]);
var inst_19745 = cljs.core.next.call(null,inst_19735);
var inst_19735__$1 = inst_19745;
var state_19758__$1 = (function (){var statearr_19774 = state_19758;
(statearr_19774[(7)] = inst_19735__$1);

return statearr_19774;
})();
var statearr_19775_19796 = state_19758__$1;
(statearr_19775_19796[(2)] = null);

(statearr_19775_19796[(1)] = (2));


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
});})(c__7158__auto__))
;
return ((function (switch__7102__auto__,c__7158__auto__){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_19779 = [null,null,null,null,null,null,null,null];
(statearr_19779[(0)] = state_machine__7103__auto__);

(statearr_19779[(1)] = (1));

return statearr_19779;
});
var state_machine__7103__auto____1 = (function (state_19758){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_19758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e19780){if((e19780 instanceof Object)){
var ex__7106__auto__ = e19780;
var statearr_19781_19797 = state_19758;
(statearr_19781_19797[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19798 = state_19758;
state_19758 = G__19798;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_19758){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_19758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto__))
})();
var state__7160__auto__ = (function (){var statearr_19782 = f__7159__auto__.call(null);
(statearr_19782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto__);

return statearr_19782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto__))
);

return c__7158__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj19800 = {};
return obj19800;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3212__auto__ = _;
if(and__3212__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3212__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__3868__auto__ = (((_ == null))?null:_);
return (function (){var or__3224__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj19802 = {};
return obj19802;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3212__auto__ = m;
if(and__3212__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3212__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__3868__auto__ = (((m == null))?null:m);
return (function (){var or__3224__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3212__auto__ = m;
if(and__3212__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3212__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__3868__auto__ = (((m == null))?null:m);
return (function (){var or__3224__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3212__auto__ = m;
if(and__3212__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3212__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__3868__auto__ = (((m == null))?null:m);
return (function (){var or__3224__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t20024 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20024 = (function (cs,ch,mult,meta20025){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20025 = meta20025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20024.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20024.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20024.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20024.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20024.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20026){
var self__ = this;
var _20026__$1 = this;
return self__.meta20025;
});})(cs))
;

cljs.core.async.t20024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20026,meta20025__$1){
var self__ = this;
var _20026__$1 = this;
return (new cljs.core.async.t20024(self__.cs,self__.ch,self__.mult,meta20025__$1));
});})(cs))
;

cljs.core.async.t20024.cljs$lang$type = true;

cljs.core.async.t20024.cljs$lang$ctorStr = "cljs.core.async/t20024";

cljs.core.async.t20024.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cljs.core.async/t20024");
});})(cs))
;

cljs.core.async.__GT_t20024 = ((function (cs){
return (function __GT_t20024(cs__$1,ch__$1,mult__$1,meta20025){
return (new cljs.core.async.t20024(cs__$1,ch__$1,mult__$1,meta20025));
});})(cs))
;

}

return (new cljs.core.async.t20024(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7158__auto___20245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___20245,cs,m,dchan,dctr,done){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___20245,cs,m,dchan,dctr,done){
return (function (state_20157){
var state_val_20158 = (state_20157[(1)]);
if((state_val_20158 === (7))){
var inst_20153 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20159_20246 = state_20157__$1;
(statearr_20159_20246[(2)] = inst_20153);

(statearr_20159_20246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (20))){
var inst_20058 = (state_20157[(7)]);
var inst_20068 = cljs.core.first.call(null,inst_20058);
var inst_20069 = cljs.core.nth.call(null,inst_20068,(0),null);
var inst_20070 = cljs.core.nth.call(null,inst_20068,(1),null);
var state_20157__$1 = (function (){var statearr_20160 = state_20157;
(statearr_20160[(8)] = inst_20069);

return statearr_20160;
})();
if(cljs.core.truth_(inst_20070)){
var statearr_20161_20247 = state_20157__$1;
(statearr_20161_20247[(1)] = (22));

} else {
var statearr_20162_20248 = state_20157__$1;
(statearr_20162_20248[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (27))){
var inst_20029 = (state_20157[(9)]);
var inst_20098 = (state_20157[(10)]);
var inst_20100 = (state_20157[(11)]);
var inst_20105 = (state_20157[(12)]);
var inst_20105__$1 = cljs.core._nth.call(null,inst_20098,inst_20100);
var inst_20106 = cljs.core.async.put_BANG_.call(null,inst_20105__$1,inst_20029,done);
var state_20157__$1 = (function (){var statearr_20163 = state_20157;
(statearr_20163[(12)] = inst_20105__$1);

return statearr_20163;
})();
if(cljs.core.truth_(inst_20106)){
var statearr_20164_20249 = state_20157__$1;
(statearr_20164_20249[(1)] = (30));

} else {
var statearr_20165_20250 = state_20157__$1;
(statearr_20165_20250[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (1))){
var state_20157__$1 = state_20157;
var statearr_20166_20251 = state_20157__$1;
(statearr_20166_20251[(2)] = null);

(statearr_20166_20251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (24))){
var inst_20058 = (state_20157[(7)]);
var inst_20075 = (state_20157[(2)]);
var inst_20076 = cljs.core.next.call(null,inst_20058);
var inst_20038 = inst_20076;
var inst_20039 = null;
var inst_20040 = (0);
var inst_20041 = (0);
var state_20157__$1 = (function (){var statearr_20167 = state_20157;
(statearr_20167[(13)] = inst_20040);

(statearr_20167[(14)] = inst_20039);

(statearr_20167[(15)] = inst_20041);

(statearr_20167[(16)] = inst_20075);

(statearr_20167[(17)] = inst_20038);

return statearr_20167;
})();
var statearr_20168_20252 = state_20157__$1;
(statearr_20168_20252[(2)] = null);

(statearr_20168_20252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (39))){
var state_20157__$1 = state_20157;
var statearr_20172_20253 = state_20157__$1;
(statearr_20172_20253[(2)] = null);

(statearr_20172_20253[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (4))){
var inst_20029 = (state_20157[(9)]);
var inst_20029__$1 = (state_20157[(2)]);
var inst_20030 = (inst_20029__$1 == null);
var state_20157__$1 = (function (){var statearr_20173 = state_20157;
(statearr_20173[(9)] = inst_20029__$1);

return statearr_20173;
})();
if(cljs.core.truth_(inst_20030)){
var statearr_20174_20254 = state_20157__$1;
(statearr_20174_20254[(1)] = (5));

} else {
var statearr_20175_20255 = state_20157__$1;
(statearr_20175_20255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (15))){
var inst_20040 = (state_20157[(13)]);
var inst_20039 = (state_20157[(14)]);
var inst_20041 = (state_20157[(15)]);
var inst_20038 = (state_20157[(17)]);
var inst_20054 = (state_20157[(2)]);
var inst_20055 = (inst_20041 + (1));
var tmp20169 = inst_20040;
var tmp20170 = inst_20039;
var tmp20171 = inst_20038;
var inst_20038__$1 = tmp20171;
var inst_20039__$1 = tmp20170;
var inst_20040__$1 = tmp20169;
var inst_20041__$1 = inst_20055;
var state_20157__$1 = (function (){var statearr_20176 = state_20157;
(statearr_20176[(13)] = inst_20040__$1);

(statearr_20176[(14)] = inst_20039__$1);

(statearr_20176[(15)] = inst_20041__$1);

(statearr_20176[(18)] = inst_20054);

(statearr_20176[(17)] = inst_20038__$1);

return statearr_20176;
})();
var statearr_20177_20256 = state_20157__$1;
(statearr_20177_20256[(2)] = null);

(statearr_20177_20256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (21))){
var inst_20079 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20181_20257 = state_20157__$1;
(statearr_20181_20257[(2)] = inst_20079);

(statearr_20181_20257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (31))){
var inst_20105 = (state_20157[(12)]);
var inst_20109 = done.call(null,null);
var inst_20110 = cljs.core.async.untap_STAR_.call(null,m,inst_20105);
var state_20157__$1 = (function (){var statearr_20182 = state_20157;
(statearr_20182[(19)] = inst_20109);

return statearr_20182;
})();
var statearr_20183_20258 = state_20157__$1;
(statearr_20183_20258[(2)] = inst_20110);

(statearr_20183_20258[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (32))){
var inst_20097 = (state_20157[(20)]);
var inst_20098 = (state_20157[(10)]);
var inst_20100 = (state_20157[(11)]);
var inst_20099 = (state_20157[(21)]);
var inst_20112 = (state_20157[(2)]);
var inst_20113 = (inst_20100 + (1));
var tmp20178 = inst_20097;
var tmp20179 = inst_20098;
var tmp20180 = inst_20099;
var inst_20097__$1 = tmp20178;
var inst_20098__$1 = tmp20179;
var inst_20099__$1 = tmp20180;
var inst_20100__$1 = inst_20113;
var state_20157__$1 = (function (){var statearr_20184 = state_20157;
(statearr_20184[(22)] = inst_20112);

(statearr_20184[(20)] = inst_20097__$1);

(statearr_20184[(10)] = inst_20098__$1);

(statearr_20184[(11)] = inst_20100__$1);

(statearr_20184[(21)] = inst_20099__$1);

return statearr_20184;
})();
var statearr_20185_20259 = state_20157__$1;
(statearr_20185_20259[(2)] = null);

(statearr_20185_20259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (40))){
var inst_20125 = (state_20157[(23)]);
var inst_20129 = done.call(null,null);
var inst_20130 = cljs.core.async.untap_STAR_.call(null,m,inst_20125);
var state_20157__$1 = (function (){var statearr_20186 = state_20157;
(statearr_20186[(24)] = inst_20129);

return statearr_20186;
})();
var statearr_20187_20260 = state_20157__$1;
(statearr_20187_20260[(2)] = inst_20130);

(statearr_20187_20260[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (33))){
var inst_20116 = (state_20157[(25)]);
var inst_20118 = cljs.core.chunked_seq_QMARK_.call(null,inst_20116);
var state_20157__$1 = state_20157;
if(inst_20118){
var statearr_20188_20261 = state_20157__$1;
(statearr_20188_20261[(1)] = (36));

} else {
var statearr_20189_20262 = state_20157__$1;
(statearr_20189_20262[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (13))){
var inst_20048 = (state_20157[(26)]);
var inst_20051 = cljs.core.async.close_BANG_.call(null,inst_20048);
var state_20157__$1 = state_20157;
var statearr_20190_20263 = state_20157__$1;
(statearr_20190_20263[(2)] = inst_20051);

(statearr_20190_20263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (22))){
var inst_20069 = (state_20157[(8)]);
var inst_20072 = cljs.core.async.close_BANG_.call(null,inst_20069);
var state_20157__$1 = state_20157;
var statearr_20191_20264 = state_20157__$1;
(statearr_20191_20264[(2)] = inst_20072);

(statearr_20191_20264[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (36))){
var inst_20116 = (state_20157[(25)]);
var inst_20120 = cljs.core.chunk_first.call(null,inst_20116);
var inst_20121 = cljs.core.chunk_rest.call(null,inst_20116);
var inst_20122 = cljs.core.count.call(null,inst_20120);
var inst_20097 = inst_20121;
var inst_20098 = inst_20120;
var inst_20099 = inst_20122;
var inst_20100 = (0);
var state_20157__$1 = (function (){var statearr_20192 = state_20157;
(statearr_20192[(20)] = inst_20097);

(statearr_20192[(10)] = inst_20098);

(statearr_20192[(11)] = inst_20100);

(statearr_20192[(21)] = inst_20099);

return statearr_20192;
})();
var statearr_20193_20265 = state_20157__$1;
(statearr_20193_20265[(2)] = null);

(statearr_20193_20265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (41))){
var inst_20116 = (state_20157[(25)]);
var inst_20132 = (state_20157[(2)]);
var inst_20133 = cljs.core.next.call(null,inst_20116);
var inst_20097 = inst_20133;
var inst_20098 = null;
var inst_20099 = (0);
var inst_20100 = (0);
var state_20157__$1 = (function (){var statearr_20194 = state_20157;
(statearr_20194[(20)] = inst_20097);

(statearr_20194[(27)] = inst_20132);

(statearr_20194[(10)] = inst_20098);

(statearr_20194[(11)] = inst_20100);

(statearr_20194[(21)] = inst_20099);

return statearr_20194;
})();
var statearr_20195_20266 = state_20157__$1;
(statearr_20195_20266[(2)] = null);

(statearr_20195_20266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (43))){
var state_20157__$1 = state_20157;
var statearr_20196_20267 = state_20157__$1;
(statearr_20196_20267[(2)] = null);

(statearr_20196_20267[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (29))){
var inst_20141 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20197_20268 = state_20157__$1;
(statearr_20197_20268[(2)] = inst_20141);

(statearr_20197_20268[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (44))){
var inst_20150 = (state_20157[(2)]);
var state_20157__$1 = (function (){var statearr_20198 = state_20157;
(statearr_20198[(28)] = inst_20150);

return statearr_20198;
})();
var statearr_20199_20269 = state_20157__$1;
(statearr_20199_20269[(2)] = null);

(statearr_20199_20269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (6))){
var inst_20089 = (state_20157[(29)]);
var inst_20088 = cljs.core.deref.call(null,cs);
var inst_20089__$1 = cljs.core.keys.call(null,inst_20088);
var inst_20090 = cljs.core.count.call(null,inst_20089__$1);
var inst_20091 = cljs.core.reset_BANG_.call(null,dctr,inst_20090);
var inst_20096 = cljs.core.seq.call(null,inst_20089__$1);
var inst_20097 = inst_20096;
var inst_20098 = null;
var inst_20099 = (0);
var inst_20100 = (0);
var state_20157__$1 = (function (){var statearr_20200 = state_20157;
(statearr_20200[(29)] = inst_20089__$1);

(statearr_20200[(20)] = inst_20097);

(statearr_20200[(30)] = inst_20091);

(statearr_20200[(10)] = inst_20098);

(statearr_20200[(11)] = inst_20100);

(statearr_20200[(21)] = inst_20099);

return statearr_20200;
})();
var statearr_20201_20270 = state_20157__$1;
(statearr_20201_20270[(2)] = null);

(statearr_20201_20270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (28))){
var inst_20097 = (state_20157[(20)]);
var inst_20116 = (state_20157[(25)]);
var inst_20116__$1 = cljs.core.seq.call(null,inst_20097);
var state_20157__$1 = (function (){var statearr_20202 = state_20157;
(statearr_20202[(25)] = inst_20116__$1);

return statearr_20202;
})();
if(inst_20116__$1){
var statearr_20203_20271 = state_20157__$1;
(statearr_20203_20271[(1)] = (33));

} else {
var statearr_20204_20272 = state_20157__$1;
(statearr_20204_20272[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (25))){
var inst_20100 = (state_20157[(11)]);
var inst_20099 = (state_20157[(21)]);
var inst_20102 = (inst_20100 < inst_20099);
var inst_20103 = inst_20102;
var state_20157__$1 = state_20157;
if(cljs.core.truth_(inst_20103)){
var statearr_20205_20273 = state_20157__$1;
(statearr_20205_20273[(1)] = (27));

} else {
var statearr_20206_20274 = state_20157__$1;
(statearr_20206_20274[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (34))){
var state_20157__$1 = state_20157;
var statearr_20207_20275 = state_20157__$1;
(statearr_20207_20275[(2)] = null);

(statearr_20207_20275[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (17))){
var state_20157__$1 = state_20157;
var statearr_20208_20276 = state_20157__$1;
(statearr_20208_20276[(2)] = null);

(statearr_20208_20276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (3))){
var inst_20155 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20157__$1,inst_20155);
} else {
if((state_val_20158 === (12))){
var inst_20084 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20209_20277 = state_20157__$1;
(statearr_20209_20277[(2)] = inst_20084);

(statearr_20209_20277[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (2))){
var state_20157__$1 = state_20157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20157__$1,(4),ch);
} else {
if((state_val_20158 === (23))){
var state_20157__$1 = state_20157;
var statearr_20210_20278 = state_20157__$1;
(statearr_20210_20278[(2)] = null);

(statearr_20210_20278[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (35))){
var inst_20139 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20211_20279 = state_20157__$1;
(statearr_20211_20279[(2)] = inst_20139);

(statearr_20211_20279[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (19))){
var inst_20058 = (state_20157[(7)]);
var inst_20062 = cljs.core.chunk_first.call(null,inst_20058);
var inst_20063 = cljs.core.chunk_rest.call(null,inst_20058);
var inst_20064 = cljs.core.count.call(null,inst_20062);
var inst_20038 = inst_20063;
var inst_20039 = inst_20062;
var inst_20040 = inst_20064;
var inst_20041 = (0);
var state_20157__$1 = (function (){var statearr_20212 = state_20157;
(statearr_20212[(13)] = inst_20040);

(statearr_20212[(14)] = inst_20039);

(statearr_20212[(15)] = inst_20041);

(statearr_20212[(17)] = inst_20038);

return statearr_20212;
})();
var statearr_20213_20280 = state_20157__$1;
(statearr_20213_20280[(2)] = null);

(statearr_20213_20280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (11))){
var inst_20058 = (state_20157[(7)]);
var inst_20038 = (state_20157[(17)]);
var inst_20058__$1 = cljs.core.seq.call(null,inst_20038);
var state_20157__$1 = (function (){var statearr_20214 = state_20157;
(statearr_20214[(7)] = inst_20058__$1);

return statearr_20214;
})();
if(inst_20058__$1){
var statearr_20215_20281 = state_20157__$1;
(statearr_20215_20281[(1)] = (16));

} else {
var statearr_20216_20282 = state_20157__$1;
(statearr_20216_20282[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (9))){
var inst_20086 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20217_20283 = state_20157__$1;
(statearr_20217_20283[(2)] = inst_20086);

(statearr_20217_20283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (5))){
var inst_20036 = cljs.core.deref.call(null,cs);
var inst_20037 = cljs.core.seq.call(null,inst_20036);
var inst_20038 = inst_20037;
var inst_20039 = null;
var inst_20040 = (0);
var inst_20041 = (0);
var state_20157__$1 = (function (){var statearr_20218 = state_20157;
(statearr_20218[(13)] = inst_20040);

(statearr_20218[(14)] = inst_20039);

(statearr_20218[(15)] = inst_20041);

(statearr_20218[(17)] = inst_20038);

return statearr_20218;
})();
var statearr_20219_20284 = state_20157__$1;
(statearr_20219_20284[(2)] = null);

(statearr_20219_20284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (14))){
var state_20157__$1 = state_20157;
var statearr_20220_20285 = state_20157__$1;
(statearr_20220_20285[(2)] = null);

(statearr_20220_20285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (45))){
var inst_20147 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20221_20286 = state_20157__$1;
(statearr_20221_20286[(2)] = inst_20147);

(statearr_20221_20286[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (26))){
var inst_20089 = (state_20157[(29)]);
var inst_20143 = (state_20157[(2)]);
var inst_20144 = cljs.core.seq.call(null,inst_20089);
var state_20157__$1 = (function (){var statearr_20222 = state_20157;
(statearr_20222[(31)] = inst_20143);

return statearr_20222;
})();
if(inst_20144){
var statearr_20223_20287 = state_20157__$1;
(statearr_20223_20287[(1)] = (42));

} else {
var statearr_20224_20288 = state_20157__$1;
(statearr_20224_20288[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (16))){
var inst_20058 = (state_20157[(7)]);
var inst_20060 = cljs.core.chunked_seq_QMARK_.call(null,inst_20058);
var state_20157__$1 = state_20157;
if(inst_20060){
var statearr_20225_20289 = state_20157__$1;
(statearr_20225_20289[(1)] = (19));

} else {
var statearr_20226_20290 = state_20157__$1;
(statearr_20226_20290[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (38))){
var inst_20136 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20227_20291 = state_20157__$1;
(statearr_20227_20291[(2)] = inst_20136);

(statearr_20227_20291[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (30))){
var state_20157__$1 = state_20157;
var statearr_20228_20292 = state_20157__$1;
(statearr_20228_20292[(2)] = null);

(statearr_20228_20292[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (10))){
var inst_20039 = (state_20157[(14)]);
var inst_20041 = (state_20157[(15)]);
var inst_20047 = cljs.core._nth.call(null,inst_20039,inst_20041);
var inst_20048 = cljs.core.nth.call(null,inst_20047,(0),null);
var inst_20049 = cljs.core.nth.call(null,inst_20047,(1),null);
var state_20157__$1 = (function (){var statearr_20229 = state_20157;
(statearr_20229[(26)] = inst_20048);

return statearr_20229;
})();
if(cljs.core.truth_(inst_20049)){
var statearr_20230_20293 = state_20157__$1;
(statearr_20230_20293[(1)] = (13));

} else {
var statearr_20231_20294 = state_20157__$1;
(statearr_20231_20294[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (18))){
var inst_20082 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20232_20295 = state_20157__$1;
(statearr_20232_20295[(2)] = inst_20082);

(statearr_20232_20295[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (42))){
var state_20157__$1 = state_20157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20157__$1,(45),dchan);
} else {
if((state_val_20158 === (37))){
var inst_20029 = (state_20157[(9)]);
var inst_20125 = (state_20157[(23)]);
var inst_20116 = (state_20157[(25)]);
var inst_20125__$1 = cljs.core.first.call(null,inst_20116);
var inst_20126 = cljs.core.async.put_BANG_.call(null,inst_20125__$1,inst_20029,done);
var state_20157__$1 = (function (){var statearr_20233 = state_20157;
(statearr_20233[(23)] = inst_20125__$1);

return statearr_20233;
})();
if(cljs.core.truth_(inst_20126)){
var statearr_20234_20296 = state_20157__$1;
(statearr_20234_20296[(1)] = (39));

} else {
var statearr_20235_20297 = state_20157__$1;
(statearr_20235_20297[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (8))){
var inst_20040 = (state_20157[(13)]);
var inst_20041 = (state_20157[(15)]);
var inst_20043 = (inst_20041 < inst_20040);
var inst_20044 = inst_20043;
var state_20157__$1 = state_20157;
if(cljs.core.truth_(inst_20044)){
var statearr_20236_20298 = state_20157__$1;
(statearr_20236_20298[(1)] = (10));

} else {
var statearr_20237_20299 = state_20157__$1;
(statearr_20237_20299[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__7158__auto___20245,cs,m,dchan,dctr,done))
;
return ((function (switch__7102__auto__,c__7158__auto___20245,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_20241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20241[(0)] = state_machine__7103__auto__);

(statearr_20241[(1)] = (1));

return statearr_20241;
});
var state_machine__7103__auto____1 = (function (state_20157){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_20157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e20242){if((e20242 instanceof Object)){
var ex__7106__auto__ = e20242;
var statearr_20243_20300 = state_20157;
(statearr_20243_20300[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20301 = state_20157;
state_20157 = G__20301;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_20157){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_20157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___20245,cs,m,dchan,dctr,done))
})();
var state__7160__auto__ = (function (){var statearr_20244 = f__7159__auto__.call(null);
(statearr_20244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___20245);

return statearr_20244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___20245,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj20303 = {};
return obj20303;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3212__auto__ = m;
if(and__3212__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3212__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__3868__auto__ = (((m == null))?null:m);
return (function (){var or__3224__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3212__auto__ = m;
if(and__3212__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3212__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__3868__auto__ = (((m == null))?null:m);
return (function (){var or__3224__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3212__auto__ = m;
if(and__3212__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3212__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__3868__auto__ = (((m == null))?null:m);
return (function (){var or__3224__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3212__auto__ = m;
if(and__3212__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3212__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__3868__auto__ = (((m == null))?null:m);
return (function (){var or__3224__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3212__auto__ = m;
if(and__3212__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3212__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__3868__auto__ = (((m == null))?null:m);
return (function (){var or__3224__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20304){
var map__20309 = p__20304;
var map__20309__$1 = ((cljs.core.seq_QMARK_.call(null,map__20309))?cljs.core.apply.call(null,cljs.core.hash_map,map__20309):map__20309);
var opts = map__20309__$1;
var statearr_20310_20313 = state;
(statearr_20310_20313[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20309,map__20309__$1,opts){
return (function (val){
var statearr_20311_20314 = state;
(statearr_20311_20314[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20309,map__20309__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20312_20315 = state;
(statearr_20312_20315[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20304 = null;
if (arguments.length > 3) {
var G__20316__i = 0, G__20316__a = new Array(arguments.length -  3);
while (G__20316__i < G__20316__a.length) {G__20316__a[G__20316__i] = arguments[G__20316__i + 3]; ++G__20316__i;}
  p__20304 = new cljs.core.IndexedSeq(G__20316__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20304);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20317){
var state = cljs.core.first(arglist__20317);
arglist__20317 = cljs.core.next(arglist__20317);
var cont_block = cljs.core.first(arglist__20317);
arglist__20317 = cljs.core.next(arglist__20317);
var ports = cljs.core.first(arglist__20317);
var p__20304 = cljs.core.rest(arglist__20317);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20304);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t20437 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20437 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20438){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20438 = meta20438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20437.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20437.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20437.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20437.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20437.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20437.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20437.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20437.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20439){
var self__ = this;
var _20439__$1 = this;
return self__.meta20438;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20439,meta20438__$1){
var self__ = this;
var _20439__$1 = this;
return (new cljs.core.async.t20437(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20438__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20437.cljs$lang$type = true;

cljs.core.async.t20437.cljs$lang$ctorStr = "cljs.core.async/t20437";

cljs.core.async.t20437.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cljs.core.async/t20437");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20437 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20437(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20438){
return (new cljs.core.async.t20437(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20438));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20437(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7158__auto___20556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___20556,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___20556,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20509){
var state_val_20510 = (state_20509[(1)]);
if((state_val_20510 === (7))){
var inst_20453 = (state_20509[(7)]);
var inst_20458 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20453);
var state_20509__$1 = state_20509;
var statearr_20511_20557 = state_20509__$1;
(statearr_20511_20557[(2)] = inst_20458);

(statearr_20511_20557[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (20))){
var inst_20468 = (state_20509[(8)]);
var state_20509__$1 = state_20509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20509__$1,(23),out,inst_20468);
} else {
if((state_val_20510 === (1))){
var inst_20443 = (state_20509[(9)]);
var inst_20443__$1 = calc_state.call(null);
var inst_20444 = cljs.core.seq_QMARK_.call(null,inst_20443__$1);
var state_20509__$1 = (function (){var statearr_20512 = state_20509;
(statearr_20512[(9)] = inst_20443__$1);

return statearr_20512;
})();
if(inst_20444){
var statearr_20513_20558 = state_20509__$1;
(statearr_20513_20558[(1)] = (2));

} else {
var statearr_20514_20559 = state_20509__$1;
(statearr_20514_20559[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (24))){
var inst_20461 = (state_20509[(10)]);
var inst_20453 = inst_20461;
var state_20509__$1 = (function (){var statearr_20515 = state_20509;
(statearr_20515[(7)] = inst_20453);

return statearr_20515;
})();
var statearr_20516_20560 = state_20509__$1;
(statearr_20516_20560[(2)] = null);

(statearr_20516_20560[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (4))){
var inst_20443 = (state_20509[(9)]);
var inst_20449 = (state_20509[(2)]);
var inst_20450 = cljs.core.get.call(null,inst_20449,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20451 = cljs.core.get.call(null,inst_20449,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20452 = cljs.core.get.call(null,inst_20449,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20453 = inst_20443;
var state_20509__$1 = (function (){var statearr_20517 = state_20509;
(statearr_20517[(7)] = inst_20453);

(statearr_20517[(11)] = inst_20450);

(statearr_20517[(12)] = inst_20451);

(statearr_20517[(13)] = inst_20452);

return statearr_20517;
})();
var statearr_20518_20561 = state_20509__$1;
(statearr_20518_20561[(2)] = null);

(statearr_20518_20561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (15))){
var state_20509__$1 = state_20509;
var statearr_20519_20562 = state_20509__$1;
(statearr_20519_20562[(2)] = null);

(statearr_20519_20562[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (21))){
var inst_20461 = (state_20509[(10)]);
var inst_20453 = inst_20461;
var state_20509__$1 = (function (){var statearr_20520 = state_20509;
(statearr_20520[(7)] = inst_20453);

return statearr_20520;
})();
var statearr_20521_20563 = state_20509__$1;
(statearr_20521_20563[(2)] = null);

(statearr_20521_20563[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (13))){
var inst_20505 = (state_20509[(2)]);
var state_20509__$1 = state_20509;
var statearr_20522_20564 = state_20509__$1;
(statearr_20522_20564[(2)] = inst_20505);

(statearr_20522_20564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (22))){
var inst_20503 = (state_20509[(2)]);
var state_20509__$1 = state_20509;
var statearr_20523_20565 = state_20509__$1;
(statearr_20523_20565[(2)] = inst_20503);

(statearr_20523_20565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (6))){
var inst_20507 = (state_20509[(2)]);
var state_20509__$1 = state_20509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20509__$1,inst_20507);
} else {
if((state_val_20510 === (25))){
var state_20509__$1 = state_20509;
var statearr_20524_20566 = state_20509__$1;
(statearr_20524_20566[(2)] = null);

(statearr_20524_20566[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (17))){
var inst_20483 = (state_20509[(14)]);
var state_20509__$1 = state_20509;
var statearr_20525_20567 = state_20509__$1;
(statearr_20525_20567[(2)] = inst_20483);

(statearr_20525_20567[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (3))){
var inst_20443 = (state_20509[(9)]);
var state_20509__$1 = state_20509;
var statearr_20526_20568 = state_20509__$1;
(statearr_20526_20568[(2)] = inst_20443);

(statearr_20526_20568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (12))){
var inst_20483 = (state_20509[(14)]);
var inst_20464 = (state_20509[(15)]);
var inst_20469 = (state_20509[(16)]);
var inst_20483__$1 = inst_20464.call(null,inst_20469);
var state_20509__$1 = (function (){var statearr_20527 = state_20509;
(statearr_20527[(14)] = inst_20483__$1);

return statearr_20527;
})();
if(cljs.core.truth_(inst_20483__$1)){
var statearr_20528_20569 = state_20509__$1;
(statearr_20528_20569[(1)] = (17));

} else {
var statearr_20529_20570 = state_20509__$1;
(statearr_20529_20570[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (2))){
var inst_20443 = (state_20509[(9)]);
var inst_20446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20443);
var state_20509__$1 = state_20509;
var statearr_20530_20571 = state_20509__$1;
(statearr_20530_20571[(2)] = inst_20446);

(statearr_20530_20571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (23))){
var inst_20494 = (state_20509[(2)]);
var state_20509__$1 = state_20509;
if(cljs.core.truth_(inst_20494)){
var statearr_20531_20572 = state_20509__$1;
(statearr_20531_20572[(1)] = (24));

} else {
var statearr_20532_20573 = state_20509__$1;
(statearr_20532_20573[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (19))){
var inst_20491 = (state_20509[(2)]);
var state_20509__$1 = state_20509;
if(cljs.core.truth_(inst_20491)){
var statearr_20533_20574 = state_20509__$1;
(statearr_20533_20574[(1)] = (20));

} else {
var statearr_20534_20575 = state_20509__$1;
(statearr_20534_20575[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (11))){
var inst_20468 = (state_20509[(8)]);
var inst_20474 = (inst_20468 == null);
var state_20509__$1 = state_20509;
if(cljs.core.truth_(inst_20474)){
var statearr_20535_20576 = state_20509__$1;
(statearr_20535_20576[(1)] = (14));

} else {
var statearr_20536_20577 = state_20509__$1;
(statearr_20536_20577[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (9))){
var inst_20461 = (state_20509[(10)]);
var inst_20461__$1 = (state_20509[(2)]);
var inst_20462 = cljs.core.get.call(null,inst_20461__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20463 = cljs.core.get.call(null,inst_20461__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20464 = cljs.core.get.call(null,inst_20461__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20509__$1 = (function (){var statearr_20537 = state_20509;
(statearr_20537[(15)] = inst_20464);

(statearr_20537[(10)] = inst_20461__$1);

(statearr_20537[(17)] = inst_20463);

return statearr_20537;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20509__$1,(10),inst_20462);
} else {
if((state_val_20510 === (5))){
var inst_20453 = (state_20509[(7)]);
var inst_20456 = cljs.core.seq_QMARK_.call(null,inst_20453);
var state_20509__$1 = state_20509;
if(inst_20456){
var statearr_20538_20578 = state_20509__$1;
(statearr_20538_20578[(1)] = (7));

} else {
var statearr_20539_20579 = state_20509__$1;
(statearr_20539_20579[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (14))){
var inst_20469 = (state_20509[(16)]);
var inst_20476 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20469);
var state_20509__$1 = state_20509;
var statearr_20540_20580 = state_20509__$1;
(statearr_20540_20580[(2)] = inst_20476);

(statearr_20540_20580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (26))){
var inst_20499 = (state_20509[(2)]);
var state_20509__$1 = state_20509;
var statearr_20541_20581 = state_20509__$1;
(statearr_20541_20581[(2)] = inst_20499);

(statearr_20541_20581[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (16))){
var inst_20479 = (state_20509[(2)]);
var inst_20480 = calc_state.call(null);
var inst_20453 = inst_20480;
var state_20509__$1 = (function (){var statearr_20542 = state_20509;
(statearr_20542[(7)] = inst_20453);

(statearr_20542[(18)] = inst_20479);

return statearr_20542;
})();
var statearr_20543_20582 = state_20509__$1;
(statearr_20543_20582[(2)] = null);

(statearr_20543_20582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (10))){
var inst_20468 = (state_20509[(8)]);
var inst_20469 = (state_20509[(16)]);
var inst_20467 = (state_20509[(2)]);
var inst_20468__$1 = cljs.core.nth.call(null,inst_20467,(0),null);
var inst_20469__$1 = cljs.core.nth.call(null,inst_20467,(1),null);
var inst_20470 = (inst_20468__$1 == null);
var inst_20471 = cljs.core._EQ_.call(null,inst_20469__$1,change);
var inst_20472 = (inst_20470) || (inst_20471);
var state_20509__$1 = (function (){var statearr_20544 = state_20509;
(statearr_20544[(8)] = inst_20468__$1);

(statearr_20544[(16)] = inst_20469__$1);

return statearr_20544;
})();
if(cljs.core.truth_(inst_20472)){
var statearr_20545_20583 = state_20509__$1;
(statearr_20545_20583[(1)] = (11));

} else {
var statearr_20546_20584 = state_20509__$1;
(statearr_20546_20584[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (18))){
var inst_20464 = (state_20509[(15)]);
var inst_20463 = (state_20509[(17)]);
var inst_20469 = (state_20509[(16)]);
var inst_20486 = cljs.core.empty_QMARK_.call(null,inst_20464);
var inst_20487 = inst_20463.call(null,inst_20469);
var inst_20488 = cljs.core.not.call(null,inst_20487);
var inst_20489 = (inst_20486) && (inst_20488);
var state_20509__$1 = state_20509;
var statearr_20547_20585 = state_20509__$1;
(statearr_20547_20585[(2)] = inst_20489);

(statearr_20547_20585[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (8))){
var inst_20453 = (state_20509[(7)]);
var state_20509__$1 = state_20509;
var statearr_20548_20586 = state_20509__$1;
(statearr_20548_20586[(2)] = inst_20453);

(statearr_20548_20586[(1)] = (9));


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
});})(c__7158__auto___20556,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7102__auto__,c__7158__auto___20556,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_20552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20552[(0)] = state_machine__7103__auto__);

(statearr_20552[(1)] = (1));

return statearr_20552;
});
var state_machine__7103__auto____1 = (function (state_20509){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_20509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e20553){if((e20553 instanceof Object)){
var ex__7106__auto__ = e20553;
var statearr_20554_20587 = state_20509;
(statearr_20554_20587[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20588 = state_20509;
state_20509 = G__20588;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_20509){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_20509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___20556,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7160__auto__ = (function (){var statearr_20555 = f__7159__auto__.call(null);
(statearr_20555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___20556);

return statearr_20555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___20556,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj20590 = {};
return obj20590;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3212__auto__ = p;
if(and__3212__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3212__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__3868__auto__ = (((p == null))?null:p);
return (function (){var or__3224__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3212__auto__ = p;
if(and__3212__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3212__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__3868__auto__ = (((p == null))?null:p);
return (function (){var or__3224__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3212__auto__ = p;
if(and__3212__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3212__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__3868__auto__ = (((p == null))?null:p);
return (function (){var or__3224__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3212__auto__ = p;
if(and__3212__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3212__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__3868__auto__ = (((p == null))?null:p);
return (function (){var or__3224__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3868__auto__)]);
if(or__3224__auto__){
return or__3224__auto__;
} else {
var or__3224__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3224__auto____$1){
return or__3224__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3224__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3224__auto__)){
return or__3224__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3224__auto__,mults){
return (function (p1__20591_SHARP_){
if(cljs.core.truth_(p1__20591_SHARP_.call(null,topic))){
return p1__20591_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20591_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3224__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20714 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20714 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20715){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20715 = meta20715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20714.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20714.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20714.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t20714.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20714.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20714.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20714.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20716){
var self__ = this;
var _20716__$1 = this;
return self__.meta20715;
});})(mults,ensure_mult))
;

cljs.core.async.t20714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20716,meta20715__$1){
var self__ = this;
var _20716__$1 = this;
return (new cljs.core.async.t20714(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20715__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20714.cljs$lang$type = true;

cljs.core.async.t20714.cljs$lang$ctorStr = "cljs.core.async/t20714";

cljs.core.async.t20714.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cljs.core.async/t20714");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20714 = ((function (mults,ensure_mult){
return (function __GT_t20714(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20715){
return (new cljs.core.async.t20714(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20715));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20714(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7158__auto___20836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___20836,mults,ensure_mult,p){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___20836,mults,ensure_mult,p){
return (function (state_20788){
var state_val_20789 = (state_20788[(1)]);
if((state_val_20789 === (7))){
var inst_20784 = (state_20788[(2)]);
var state_20788__$1 = state_20788;
var statearr_20790_20837 = state_20788__$1;
(statearr_20790_20837[(2)] = inst_20784);

(statearr_20790_20837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (20))){
var state_20788__$1 = state_20788;
var statearr_20791_20838 = state_20788__$1;
(statearr_20791_20838[(2)] = null);

(statearr_20791_20838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (1))){
var state_20788__$1 = state_20788;
var statearr_20792_20839 = state_20788__$1;
(statearr_20792_20839[(2)] = null);

(statearr_20792_20839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (24))){
var inst_20767 = (state_20788[(7)]);
var inst_20776 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20767);
var state_20788__$1 = state_20788;
var statearr_20793_20840 = state_20788__$1;
(statearr_20793_20840[(2)] = inst_20776);

(statearr_20793_20840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (4))){
var inst_20719 = (state_20788[(8)]);
var inst_20719__$1 = (state_20788[(2)]);
var inst_20720 = (inst_20719__$1 == null);
var state_20788__$1 = (function (){var statearr_20794 = state_20788;
(statearr_20794[(8)] = inst_20719__$1);

return statearr_20794;
})();
if(cljs.core.truth_(inst_20720)){
var statearr_20795_20841 = state_20788__$1;
(statearr_20795_20841[(1)] = (5));

} else {
var statearr_20796_20842 = state_20788__$1;
(statearr_20796_20842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (15))){
var inst_20761 = (state_20788[(2)]);
var state_20788__$1 = state_20788;
var statearr_20797_20843 = state_20788__$1;
(statearr_20797_20843[(2)] = inst_20761);

(statearr_20797_20843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (21))){
var inst_20781 = (state_20788[(2)]);
var state_20788__$1 = (function (){var statearr_20798 = state_20788;
(statearr_20798[(9)] = inst_20781);

return statearr_20798;
})();
var statearr_20799_20844 = state_20788__$1;
(statearr_20799_20844[(2)] = null);

(statearr_20799_20844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (13))){
var inst_20743 = (state_20788[(10)]);
var inst_20745 = cljs.core.chunked_seq_QMARK_.call(null,inst_20743);
var state_20788__$1 = state_20788;
if(inst_20745){
var statearr_20800_20845 = state_20788__$1;
(statearr_20800_20845[(1)] = (16));

} else {
var statearr_20801_20846 = state_20788__$1;
(statearr_20801_20846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (22))){
var inst_20773 = (state_20788[(2)]);
var state_20788__$1 = state_20788;
if(cljs.core.truth_(inst_20773)){
var statearr_20802_20847 = state_20788__$1;
(statearr_20802_20847[(1)] = (23));

} else {
var statearr_20803_20848 = state_20788__$1;
(statearr_20803_20848[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (6))){
var inst_20767 = (state_20788[(7)]);
var inst_20719 = (state_20788[(8)]);
var inst_20769 = (state_20788[(11)]);
var inst_20767__$1 = topic_fn.call(null,inst_20719);
var inst_20768 = cljs.core.deref.call(null,mults);
var inst_20769__$1 = cljs.core.get.call(null,inst_20768,inst_20767__$1);
var state_20788__$1 = (function (){var statearr_20804 = state_20788;
(statearr_20804[(7)] = inst_20767__$1);

(statearr_20804[(11)] = inst_20769__$1);

return statearr_20804;
})();
if(cljs.core.truth_(inst_20769__$1)){
var statearr_20805_20849 = state_20788__$1;
(statearr_20805_20849[(1)] = (19));

} else {
var statearr_20806_20850 = state_20788__$1;
(statearr_20806_20850[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (25))){
var inst_20778 = (state_20788[(2)]);
var state_20788__$1 = state_20788;
var statearr_20807_20851 = state_20788__$1;
(statearr_20807_20851[(2)] = inst_20778);

(statearr_20807_20851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (17))){
var inst_20743 = (state_20788[(10)]);
var inst_20752 = cljs.core.first.call(null,inst_20743);
var inst_20753 = cljs.core.async.muxch_STAR_.call(null,inst_20752);
var inst_20754 = cljs.core.async.close_BANG_.call(null,inst_20753);
var inst_20755 = cljs.core.next.call(null,inst_20743);
var inst_20729 = inst_20755;
var inst_20730 = null;
var inst_20731 = (0);
var inst_20732 = (0);
var state_20788__$1 = (function (){var statearr_20808 = state_20788;
(statearr_20808[(12)] = inst_20732);

(statearr_20808[(13)] = inst_20731);

(statearr_20808[(14)] = inst_20730);

(statearr_20808[(15)] = inst_20754);

(statearr_20808[(16)] = inst_20729);

return statearr_20808;
})();
var statearr_20809_20852 = state_20788__$1;
(statearr_20809_20852[(2)] = null);

(statearr_20809_20852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (3))){
var inst_20786 = (state_20788[(2)]);
var state_20788__$1 = state_20788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20788__$1,inst_20786);
} else {
if((state_val_20789 === (12))){
var inst_20763 = (state_20788[(2)]);
var state_20788__$1 = state_20788;
var statearr_20810_20853 = state_20788__$1;
(statearr_20810_20853[(2)] = inst_20763);

(statearr_20810_20853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (2))){
var state_20788__$1 = state_20788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20788__$1,(4),ch);
} else {
if((state_val_20789 === (23))){
var state_20788__$1 = state_20788;
var statearr_20811_20854 = state_20788__$1;
(statearr_20811_20854[(2)] = null);

(statearr_20811_20854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (19))){
var inst_20719 = (state_20788[(8)]);
var inst_20769 = (state_20788[(11)]);
var inst_20771 = cljs.core.async.muxch_STAR_.call(null,inst_20769);
var state_20788__$1 = state_20788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20788__$1,(22),inst_20771,inst_20719);
} else {
if((state_val_20789 === (11))){
var inst_20729 = (state_20788[(16)]);
var inst_20743 = (state_20788[(10)]);
var inst_20743__$1 = cljs.core.seq.call(null,inst_20729);
var state_20788__$1 = (function (){var statearr_20812 = state_20788;
(statearr_20812[(10)] = inst_20743__$1);

return statearr_20812;
})();
if(inst_20743__$1){
var statearr_20813_20855 = state_20788__$1;
(statearr_20813_20855[(1)] = (13));

} else {
var statearr_20814_20856 = state_20788__$1;
(statearr_20814_20856[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (9))){
var inst_20765 = (state_20788[(2)]);
var state_20788__$1 = state_20788;
var statearr_20815_20857 = state_20788__$1;
(statearr_20815_20857[(2)] = inst_20765);

(statearr_20815_20857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (5))){
var inst_20726 = cljs.core.deref.call(null,mults);
var inst_20727 = cljs.core.vals.call(null,inst_20726);
var inst_20728 = cljs.core.seq.call(null,inst_20727);
var inst_20729 = inst_20728;
var inst_20730 = null;
var inst_20731 = (0);
var inst_20732 = (0);
var state_20788__$1 = (function (){var statearr_20816 = state_20788;
(statearr_20816[(12)] = inst_20732);

(statearr_20816[(13)] = inst_20731);

(statearr_20816[(14)] = inst_20730);

(statearr_20816[(16)] = inst_20729);

return statearr_20816;
})();
var statearr_20817_20858 = state_20788__$1;
(statearr_20817_20858[(2)] = null);

(statearr_20817_20858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (14))){
var state_20788__$1 = state_20788;
var statearr_20821_20859 = state_20788__$1;
(statearr_20821_20859[(2)] = null);

(statearr_20821_20859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (16))){
var inst_20743 = (state_20788[(10)]);
var inst_20747 = cljs.core.chunk_first.call(null,inst_20743);
var inst_20748 = cljs.core.chunk_rest.call(null,inst_20743);
var inst_20749 = cljs.core.count.call(null,inst_20747);
var inst_20729 = inst_20748;
var inst_20730 = inst_20747;
var inst_20731 = inst_20749;
var inst_20732 = (0);
var state_20788__$1 = (function (){var statearr_20822 = state_20788;
(statearr_20822[(12)] = inst_20732);

(statearr_20822[(13)] = inst_20731);

(statearr_20822[(14)] = inst_20730);

(statearr_20822[(16)] = inst_20729);

return statearr_20822;
})();
var statearr_20823_20860 = state_20788__$1;
(statearr_20823_20860[(2)] = null);

(statearr_20823_20860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (10))){
var inst_20732 = (state_20788[(12)]);
var inst_20731 = (state_20788[(13)]);
var inst_20730 = (state_20788[(14)]);
var inst_20729 = (state_20788[(16)]);
var inst_20737 = cljs.core._nth.call(null,inst_20730,inst_20732);
var inst_20738 = cljs.core.async.muxch_STAR_.call(null,inst_20737);
var inst_20739 = cljs.core.async.close_BANG_.call(null,inst_20738);
var inst_20740 = (inst_20732 + (1));
var tmp20818 = inst_20731;
var tmp20819 = inst_20730;
var tmp20820 = inst_20729;
var inst_20729__$1 = tmp20820;
var inst_20730__$1 = tmp20819;
var inst_20731__$1 = tmp20818;
var inst_20732__$1 = inst_20740;
var state_20788__$1 = (function (){var statearr_20824 = state_20788;
(statearr_20824[(12)] = inst_20732__$1);

(statearr_20824[(17)] = inst_20739);

(statearr_20824[(13)] = inst_20731__$1);

(statearr_20824[(14)] = inst_20730__$1);

(statearr_20824[(16)] = inst_20729__$1);

return statearr_20824;
})();
var statearr_20825_20861 = state_20788__$1;
(statearr_20825_20861[(2)] = null);

(statearr_20825_20861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (18))){
var inst_20758 = (state_20788[(2)]);
var state_20788__$1 = state_20788;
var statearr_20826_20862 = state_20788__$1;
(statearr_20826_20862[(2)] = inst_20758);

(statearr_20826_20862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (8))){
var inst_20732 = (state_20788[(12)]);
var inst_20731 = (state_20788[(13)]);
var inst_20734 = (inst_20732 < inst_20731);
var inst_20735 = inst_20734;
var state_20788__$1 = state_20788;
if(cljs.core.truth_(inst_20735)){
var statearr_20827_20863 = state_20788__$1;
(statearr_20827_20863[(1)] = (10));

} else {
var statearr_20828_20864 = state_20788__$1;
(statearr_20828_20864[(1)] = (11));

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
});})(c__7158__auto___20836,mults,ensure_mult,p))
;
return ((function (switch__7102__auto__,c__7158__auto___20836,mults,ensure_mult,p){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_20832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20832[(0)] = state_machine__7103__auto__);

(statearr_20832[(1)] = (1));

return statearr_20832;
});
var state_machine__7103__auto____1 = (function (state_20788){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_20788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e20833){if((e20833 instanceof Object)){
var ex__7106__auto__ = e20833;
var statearr_20834_20865 = state_20788;
(statearr_20834_20865[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20866 = state_20788;
state_20788 = G__20866;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_20788){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_20788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___20836,mults,ensure_mult,p))
})();
var state__7160__auto__ = (function (){var statearr_20835 = f__7159__auto__.call(null);
(statearr_20835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___20836);

return statearr_20835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___20836,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7158__auto___21003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___21003,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___21003,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20973){
var state_val_20974 = (state_20973[(1)]);
if((state_val_20974 === (7))){
var state_20973__$1 = state_20973;
var statearr_20975_21004 = state_20973__$1;
(statearr_20975_21004[(2)] = null);

(statearr_20975_21004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (1))){
var state_20973__$1 = state_20973;
var statearr_20976_21005 = state_20973__$1;
(statearr_20976_21005[(2)] = null);

(statearr_20976_21005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (4))){
var inst_20937 = (state_20973[(7)]);
var inst_20939 = (inst_20937 < cnt);
var state_20973__$1 = state_20973;
if(cljs.core.truth_(inst_20939)){
var statearr_20977_21006 = state_20973__$1;
(statearr_20977_21006[(1)] = (6));

} else {
var statearr_20978_21007 = state_20973__$1;
(statearr_20978_21007[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (15))){
var inst_20969 = (state_20973[(2)]);
var state_20973__$1 = state_20973;
var statearr_20979_21008 = state_20973__$1;
(statearr_20979_21008[(2)] = inst_20969);

(statearr_20979_21008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (13))){
var inst_20962 = cljs.core.async.close_BANG_.call(null,out);
var state_20973__$1 = state_20973;
var statearr_20980_21009 = state_20973__$1;
(statearr_20980_21009[(2)] = inst_20962);

(statearr_20980_21009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (6))){
var state_20973__$1 = state_20973;
var statearr_20981_21010 = state_20973__$1;
(statearr_20981_21010[(2)] = null);

(statearr_20981_21010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (3))){
var inst_20971 = (state_20973[(2)]);
var state_20973__$1 = state_20973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20973__$1,inst_20971);
} else {
if((state_val_20974 === (12))){
var inst_20959 = (state_20973[(8)]);
var inst_20959__$1 = (state_20973[(2)]);
var inst_20960 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20959__$1);
var state_20973__$1 = (function (){var statearr_20982 = state_20973;
(statearr_20982[(8)] = inst_20959__$1);

return statearr_20982;
})();
if(cljs.core.truth_(inst_20960)){
var statearr_20983_21011 = state_20973__$1;
(statearr_20983_21011[(1)] = (13));

} else {
var statearr_20984_21012 = state_20973__$1;
(statearr_20984_21012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (2))){
var inst_20936 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20937 = (0);
var state_20973__$1 = (function (){var statearr_20985 = state_20973;
(statearr_20985[(9)] = inst_20936);

(statearr_20985[(7)] = inst_20937);

return statearr_20985;
})();
var statearr_20986_21013 = state_20973__$1;
(statearr_20986_21013[(2)] = null);

(statearr_20986_21013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (11))){
var inst_20937 = (state_20973[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20973,(10),Object,null,(9));
var inst_20946 = chs__$1.call(null,inst_20937);
var inst_20947 = done.call(null,inst_20937);
var inst_20948 = cljs.core.async.take_BANG_.call(null,inst_20946,inst_20947);
var state_20973__$1 = state_20973;
var statearr_20987_21014 = state_20973__$1;
(statearr_20987_21014[(2)] = inst_20948);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (9))){
var inst_20937 = (state_20973[(7)]);
var inst_20950 = (state_20973[(2)]);
var inst_20951 = (inst_20937 + (1));
var inst_20937__$1 = inst_20951;
var state_20973__$1 = (function (){var statearr_20988 = state_20973;
(statearr_20988[(10)] = inst_20950);

(statearr_20988[(7)] = inst_20937__$1);

return statearr_20988;
})();
var statearr_20989_21015 = state_20973__$1;
(statearr_20989_21015[(2)] = null);

(statearr_20989_21015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (5))){
var inst_20957 = (state_20973[(2)]);
var state_20973__$1 = (function (){var statearr_20990 = state_20973;
(statearr_20990[(11)] = inst_20957);

return statearr_20990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20973__$1,(12),dchan);
} else {
if((state_val_20974 === (14))){
var inst_20959 = (state_20973[(8)]);
var inst_20964 = cljs.core.apply.call(null,f,inst_20959);
var state_20973__$1 = state_20973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20973__$1,(16),out,inst_20964);
} else {
if((state_val_20974 === (16))){
var inst_20966 = (state_20973[(2)]);
var state_20973__$1 = (function (){var statearr_20991 = state_20973;
(statearr_20991[(12)] = inst_20966);

return statearr_20991;
})();
var statearr_20992_21016 = state_20973__$1;
(statearr_20992_21016[(2)] = null);

(statearr_20992_21016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (10))){
var inst_20941 = (state_20973[(2)]);
var inst_20942 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20973__$1 = (function (){var statearr_20993 = state_20973;
(statearr_20993[(13)] = inst_20941);

return statearr_20993;
})();
var statearr_20994_21017 = state_20973__$1;
(statearr_20994_21017[(2)] = inst_20942);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (8))){
var inst_20955 = (state_20973[(2)]);
var state_20973__$1 = state_20973;
var statearr_20995_21018 = state_20973__$1;
(statearr_20995_21018[(2)] = inst_20955);

(statearr_20995_21018[(1)] = (5));


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
});})(c__7158__auto___21003,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7102__auto__,c__7158__auto___21003,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_20999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20999[(0)] = state_machine__7103__auto__);

(statearr_20999[(1)] = (1));

return statearr_20999;
});
var state_machine__7103__auto____1 = (function (state_20973){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_20973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e21000){if((e21000 instanceof Object)){
var ex__7106__auto__ = e21000;
var statearr_21001_21019 = state_20973;
(statearr_21001_21019[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21020 = state_20973;
state_20973 = G__21020;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_20973){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_20973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___21003,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7160__auto__ = (function (){var statearr_21002 = f__7159__auto__.call(null);
(statearr_21002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___21003);

return statearr_21002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___21003,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7158__auto___21128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___21128,out){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___21128,out){
return (function (state_21104){
var state_val_21105 = (state_21104[(1)]);
if((state_val_21105 === (7))){
var inst_21084 = (state_21104[(7)]);
var inst_21083 = (state_21104[(8)]);
var inst_21083__$1 = (state_21104[(2)]);
var inst_21084__$1 = cljs.core.nth.call(null,inst_21083__$1,(0),null);
var inst_21085 = cljs.core.nth.call(null,inst_21083__$1,(1),null);
var inst_21086 = (inst_21084__$1 == null);
var state_21104__$1 = (function (){var statearr_21106 = state_21104;
(statearr_21106[(9)] = inst_21085);

(statearr_21106[(7)] = inst_21084__$1);

(statearr_21106[(8)] = inst_21083__$1);

return statearr_21106;
})();
if(cljs.core.truth_(inst_21086)){
var statearr_21107_21129 = state_21104__$1;
(statearr_21107_21129[(1)] = (8));

} else {
var statearr_21108_21130 = state_21104__$1;
(statearr_21108_21130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (1))){
var inst_21075 = cljs.core.vec.call(null,chs);
var inst_21076 = inst_21075;
var state_21104__$1 = (function (){var statearr_21109 = state_21104;
(statearr_21109[(10)] = inst_21076);

return statearr_21109;
})();
var statearr_21110_21131 = state_21104__$1;
(statearr_21110_21131[(2)] = null);

(statearr_21110_21131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (4))){
var inst_21076 = (state_21104[(10)]);
var state_21104__$1 = state_21104;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21104__$1,(7),inst_21076);
} else {
if((state_val_21105 === (6))){
var inst_21100 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
var statearr_21111_21132 = state_21104__$1;
(statearr_21111_21132[(2)] = inst_21100);

(statearr_21111_21132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (3))){
var inst_21102 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21104__$1,inst_21102);
} else {
if((state_val_21105 === (2))){
var inst_21076 = (state_21104[(10)]);
var inst_21078 = cljs.core.count.call(null,inst_21076);
var inst_21079 = (inst_21078 > (0));
var state_21104__$1 = state_21104;
if(cljs.core.truth_(inst_21079)){
var statearr_21113_21133 = state_21104__$1;
(statearr_21113_21133[(1)] = (4));

} else {
var statearr_21114_21134 = state_21104__$1;
(statearr_21114_21134[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (11))){
var inst_21076 = (state_21104[(10)]);
var inst_21093 = (state_21104[(2)]);
var tmp21112 = inst_21076;
var inst_21076__$1 = tmp21112;
var state_21104__$1 = (function (){var statearr_21115 = state_21104;
(statearr_21115[(10)] = inst_21076__$1);

(statearr_21115[(11)] = inst_21093);

return statearr_21115;
})();
var statearr_21116_21135 = state_21104__$1;
(statearr_21116_21135[(2)] = null);

(statearr_21116_21135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (9))){
var inst_21084 = (state_21104[(7)]);
var state_21104__$1 = state_21104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21104__$1,(11),out,inst_21084);
} else {
if((state_val_21105 === (5))){
var inst_21098 = cljs.core.async.close_BANG_.call(null,out);
var state_21104__$1 = state_21104;
var statearr_21117_21136 = state_21104__$1;
(statearr_21117_21136[(2)] = inst_21098);

(statearr_21117_21136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (10))){
var inst_21096 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
var statearr_21118_21137 = state_21104__$1;
(statearr_21118_21137[(2)] = inst_21096);

(statearr_21118_21137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (8))){
var inst_21085 = (state_21104[(9)]);
var inst_21084 = (state_21104[(7)]);
var inst_21076 = (state_21104[(10)]);
var inst_21083 = (state_21104[(8)]);
var inst_21088 = (function (){var c = inst_21085;
var v = inst_21084;
var vec__21081 = inst_21083;
var cs = inst_21076;
return ((function (c,v,vec__21081,cs,inst_21085,inst_21084,inst_21076,inst_21083,state_val_21105,c__7158__auto___21128,out){
return (function (p1__21021_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21021_SHARP_);
});
;})(c,v,vec__21081,cs,inst_21085,inst_21084,inst_21076,inst_21083,state_val_21105,c__7158__auto___21128,out))
})();
var inst_21089 = cljs.core.filterv.call(null,inst_21088,inst_21076);
var inst_21076__$1 = inst_21089;
var state_21104__$1 = (function (){var statearr_21119 = state_21104;
(statearr_21119[(10)] = inst_21076__$1);

return statearr_21119;
})();
var statearr_21120_21138 = state_21104__$1;
(statearr_21120_21138[(2)] = null);

(statearr_21120_21138[(1)] = (2));


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
});})(c__7158__auto___21128,out))
;
return ((function (switch__7102__auto__,c__7158__auto___21128,out){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_21124 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21124[(0)] = state_machine__7103__auto__);

(statearr_21124[(1)] = (1));

return statearr_21124;
});
var state_machine__7103__auto____1 = (function (state_21104){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_21104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e21125){if((e21125 instanceof Object)){
var ex__7106__auto__ = e21125;
var statearr_21126_21139 = state_21104;
(statearr_21126_21139[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21140 = state_21104;
state_21104 = G__21140;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_21104){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_21104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___21128,out))
})();
var state__7160__auto__ = (function (){var statearr_21127 = f__7159__auto__.call(null);
(statearr_21127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___21128);

return statearr_21127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___21128,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7158__auto___21233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___21233,out){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___21233,out){
return (function (state_21210){
var state_val_21211 = (state_21210[(1)]);
if((state_val_21211 === (7))){
var inst_21192 = (state_21210[(7)]);
var inst_21192__$1 = (state_21210[(2)]);
var inst_21193 = (inst_21192__$1 == null);
var inst_21194 = cljs.core.not.call(null,inst_21193);
var state_21210__$1 = (function (){var statearr_21212 = state_21210;
(statearr_21212[(7)] = inst_21192__$1);

return statearr_21212;
})();
if(inst_21194){
var statearr_21213_21234 = state_21210__$1;
(statearr_21213_21234[(1)] = (8));

} else {
var statearr_21214_21235 = state_21210__$1;
(statearr_21214_21235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (1))){
var inst_21187 = (0);
var state_21210__$1 = (function (){var statearr_21215 = state_21210;
(statearr_21215[(8)] = inst_21187);

return statearr_21215;
})();
var statearr_21216_21236 = state_21210__$1;
(statearr_21216_21236[(2)] = null);

(statearr_21216_21236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (4))){
var state_21210__$1 = state_21210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21210__$1,(7),ch);
} else {
if((state_val_21211 === (6))){
var inst_21205 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21217_21237 = state_21210__$1;
(statearr_21217_21237[(2)] = inst_21205);

(statearr_21217_21237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (3))){
var inst_21207 = (state_21210[(2)]);
var inst_21208 = cljs.core.async.close_BANG_.call(null,out);
var state_21210__$1 = (function (){var statearr_21218 = state_21210;
(statearr_21218[(9)] = inst_21207);

return statearr_21218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21210__$1,inst_21208);
} else {
if((state_val_21211 === (2))){
var inst_21187 = (state_21210[(8)]);
var inst_21189 = (inst_21187 < n);
var state_21210__$1 = state_21210;
if(cljs.core.truth_(inst_21189)){
var statearr_21219_21238 = state_21210__$1;
(statearr_21219_21238[(1)] = (4));

} else {
var statearr_21220_21239 = state_21210__$1;
(statearr_21220_21239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (11))){
var inst_21187 = (state_21210[(8)]);
var inst_21197 = (state_21210[(2)]);
var inst_21198 = (inst_21187 + (1));
var inst_21187__$1 = inst_21198;
var state_21210__$1 = (function (){var statearr_21221 = state_21210;
(statearr_21221[(10)] = inst_21197);

(statearr_21221[(8)] = inst_21187__$1);

return statearr_21221;
})();
var statearr_21222_21240 = state_21210__$1;
(statearr_21222_21240[(2)] = null);

(statearr_21222_21240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (9))){
var state_21210__$1 = state_21210;
var statearr_21223_21241 = state_21210__$1;
(statearr_21223_21241[(2)] = null);

(statearr_21223_21241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (5))){
var state_21210__$1 = state_21210;
var statearr_21224_21242 = state_21210__$1;
(statearr_21224_21242[(2)] = null);

(statearr_21224_21242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (10))){
var inst_21202 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21225_21243 = state_21210__$1;
(statearr_21225_21243[(2)] = inst_21202);

(statearr_21225_21243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (8))){
var inst_21192 = (state_21210[(7)]);
var state_21210__$1 = state_21210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21210__$1,(11),out,inst_21192);
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
});})(c__7158__auto___21233,out))
;
return ((function (switch__7102__auto__,c__7158__auto___21233,out){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_21229 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21229[(0)] = state_machine__7103__auto__);

(statearr_21229[(1)] = (1));

return statearr_21229;
});
var state_machine__7103__auto____1 = (function (state_21210){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_21210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e21230){if((e21230 instanceof Object)){
var ex__7106__auto__ = e21230;
var statearr_21231_21244 = state_21210;
(statearr_21231_21244[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21245 = state_21210;
state_21210 = G__21245;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_21210){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_21210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___21233,out))
})();
var state__7160__auto__ = (function (){var statearr_21232 = f__7159__auto__.call(null);
(statearr_21232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___21233);

return statearr_21232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___21233,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t21253 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21253 = (function (ch,f,map_LT_,meta21254){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21254 = meta21254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21253.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t21253.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21256 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21256 = (function (fn1,_,meta21254,map_LT_,f,ch,meta21257){
this.fn1 = fn1;
this._ = _;
this.meta21254 = meta21254;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21257 = meta21257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21256.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21246_SHARP_){
return f1.call(null,(((p1__21246_SHARP_ == null))?null:self__.f.call(null,p1__21246_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21256.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21258){
var self__ = this;
var _21258__$1 = this;
return self__.meta21257;
});})(___$1))
;

cljs.core.async.t21256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21258,meta21257__$1){
var self__ = this;
var _21258__$1 = this;
return (new cljs.core.async.t21256(self__.fn1,self__._,self__.meta21254,self__.map_LT_,self__.f,self__.ch,meta21257__$1));
});})(___$1))
;

cljs.core.async.t21256.cljs$lang$type = true;

cljs.core.async.t21256.cljs$lang$ctorStr = "cljs.core.async/t21256";

cljs.core.async.t21256.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cljs.core.async/t21256");
});})(___$1))
;

cljs.core.async.__GT_t21256 = ((function (___$1){
return (function __GT_t21256(fn1__$1,___$2,meta21254__$1,map_LT___$1,f__$1,ch__$1,meta21257){
return (new cljs.core.async.t21256(fn1__$1,___$2,meta21254__$1,map_LT___$1,f__$1,ch__$1,meta21257));
});})(___$1))
;

}

return (new cljs.core.async.t21256(fn1,___$1,self__.meta21254,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3212__auto__ = ret;
if(cljs.core.truth_(and__3212__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3212__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t21253.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21253.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21255){
var self__ = this;
var _21255__$1 = this;
return self__.meta21254;
});

cljs.core.async.t21253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21255,meta21254__$1){
var self__ = this;
var _21255__$1 = this;
return (new cljs.core.async.t21253(self__.ch,self__.f,self__.map_LT_,meta21254__$1));
});

cljs.core.async.t21253.cljs$lang$type = true;

cljs.core.async.t21253.cljs$lang$ctorStr = "cljs.core.async/t21253";

cljs.core.async.t21253.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cljs.core.async/t21253");
});

cljs.core.async.__GT_t21253 = (function __GT_t21253(ch__$1,f__$1,map_LT___$1,meta21254){
return (new cljs.core.async.t21253(ch__$1,f__$1,map_LT___$1,meta21254));
});

}

return (new cljs.core.async.t21253(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t21262 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21262 = (function (ch,f,map_GT_,meta21263){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21263 = meta21263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21262.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21262.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t21262.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21262.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21262.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21262.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21264){
var self__ = this;
var _21264__$1 = this;
return self__.meta21263;
});

cljs.core.async.t21262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21264,meta21263__$1){
var self__ = this;
var _21264__$1 = this;
return (new cljs.core.async.t21262(self__.ch,self__.f,self__.map_GT_,meta21263__$1));
});

cljs.core.async.t21262.cljs$lang$type = true;

cljs.core.async.t21262.cljs$lang$ctorStr = "cljs.core.async/t21262";

cljs.core.async.t21262.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cljs.core.async/t21262");
});

cljs.core.async.__GT_t21262 = (function __GT_t21262(ch__$1,f__$1,map_GT___$1,meta21263){
return (new cljs.core.async.t21262(ch__$1,f__$1,map_GT___$1,meta21263));
});

}

return (new cljs.core.async.t21262(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t21268 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21268 = (function (ch,p,filter_GT_,meta21269){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21269 = meta21269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21268.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21268.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t21268.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21268.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21268.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21268.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21268.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21270){
var self__ = this;
var _21270__$1 = this;
return self__.meta21269;
});

cljs.core.async.t21268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21270,meta21269__$1){
var self__ = this;
var _21270__$1 = this;
return (new cljs.core.async.t21268(self__.ch,self__.p,self__.filter_GT_,meta21269__$1));
});

cljs.core.async.t21268.cljs$lang$type = true;

cljs.core.async.t21268.cljs$lang$ctorStr = "cljs.core.async/t21268";

cljs.core.async.t21268.cljs$lang$ctorPrWriter = (function (this__3811__auto__,writer__3812__auto__,opt__3813__auto__){
return cljs.core._write.call(null,writer__3812__auto__,"cljs.core.async/t21268");
});

cljs.core.async.__GT_t21268 = (function __GT_t21268(ch__$1,p__$1,filter_GT___$1,meta21269){
return (new cljs.core.async.t21268(ch__$1,p__$1,filter_GT___$1,meta21269));
});

}

return (new cljs.core.async.t21268(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7158__auto___21353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___21353,out){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___21353,out){
return (function (state_21332){
var state_val_21333 = (state_21332[(1)]);
if((state_val_21333 === (7))){
var inst_21328 = (state_21332[(2)]);
var state_21332__$1 = state_21332;
var statearr_21334_21354 = state_21332__$1;
(statearr_21334_21354[(2)] = inst_21328);

(statearr_21334_21354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21333 === (1))){
var state_21332__$1 = state_21332;
var statearr_21335_21355 = state_21332__$1;
(statearr_21335_21355[(2)] = null);

(statearr_21335_21355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21333 === (4))){
var inst_21314 = (state_21332[(7)]);
var inst_21314__$1 = (state_21332[(2)]);
var inst_21315 = (inst_21314__$1 == null);
var state_21332__$1 = (function (){var statearr_21336 = state_21332;
(statearr_21336[(7)] = inst_21314__$1);

return statearr_21336;
})();
if(cljs.core.truth_(inst_21315)){
var statearr_21337_21356 = state_21332__$1;
(statearr_21337_21356[(1)] = (5));

} else {
var statearr_21338_21357 = state_21332__$1;
(statearr_21338_21357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21333 === (6))){
var inst_21314 = (state_21332[(7)]);
var inst_21319 = p.call(null,inst_21314);
var state_21332__$1 = state_21332;
if(cljs.core.truth_(inst_21319)){
var statearr_21339_21358 = state_21332__$1;
(statearr_21339_21358[(1)] = (8));

} else {
var statearr_21340_21359 = state_21332__$1;
(statearr_21340_21359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21333 === (3))){
var inst_21330 = (state_21332[(2)]);
var state_21332__$1 = state_21332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21332__$1,inst_21330);
} else {
if((state_val_21333 === (2))){
var state_21332__$1 = state_21332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21332__$1,(4),ch);
} else {
if((state_val_21333 === (11))){
var inst_21322 = (state_21332[(2)]);
var state_21332__$1 = state_21332;
var statearr_21341_21360 = state_21332__$1;
(statearr_21341_21360[(2)] = inst_21322);

(statearr_21341_21360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21333 === (9))){
var state_21332__$1 = state_21332;
var statearr_21342_21361 = state_21332__$1;
(statearr_21342_21361[(2)] = null);

(statearr_21342_21361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21333 === (5))){
var inst_21317 = cljs.core.async.close_BANG_.call(null,out);
var state_21332__$1 = state_21332;
var statearr_21343_21362 = state_21332__$1;
(statearr_21343_21362[(2)] = inst_21317);

(statearr_21343_21362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21333 === (10))){
var inst_21325 = (state_21332[(2)]);
var state_21332__$1 = (function (){var statearr_21344 = state_21332;
(statearr_21344[(8)] = inst_21325);

return statearr_21344;
})();
var statearr_21345_21363 = state_21332__$1;
(statearr_21345_21363[(2)] = null);

(statearr_21345_21363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21333 === (8))){
var inst_21314 = (state_21332[(7)]);
var state_21332__$1 = state_21332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21332__$1,(11),out,inst_21314);
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
});})(c__7158__auto___21353,out))
;
return ((function (switch__7102__auto__,c__7158__auto___21353,out){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_21349 = [null,null,null,null,null,null,null,null,null];
(statearr_21349[(0)] = state_machine__7103__auto__);

(statearr_21349[(1)] = (1));

return statearr_21349;
});
var state_machine__7103__auto____1 = (function (state_21332){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_21332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e21350){if((e21350 instanceof Object)){
var ex__7106__auto__ = e21350;
var statearr_21351_21364 = state_21332;
(statearr_21351_21364[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21365 = state_21332;
state_21332 = G__21365;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_21332){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_21332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___21353,out))
})();
var state__7160__auto__ = (function (){var statearr_21352 = f__7159__auto__.call(null);
(statearr_21352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___21353);

return statearr_21352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___21353,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__7158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto__){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto__){
return (function (state_21531){
var state_val_21532 = (state_21531[(1)]);
if((state_val_21532 === (7))){
var inst_21527 = (state_21531[(2)]);
var state_21531__$1 = state_21531;
var statearr_21533_21574 = state_21531__$1;
(statearr_21533_21574[(2)] = inst_21527);

(statearr_21533_21574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (20))){
var inst_21497 = (state_21531[(7)]);
var inst_21508 = (state_21531[(2)]);
var inst_21509 = cljs.core.next.call(null,inst_21497);
var inst_21483 = inst_21509;
var inst_21484 = null;
var inst_21485 = (0);
var inst_21486 = (0);
var state_21531__$1 = (function (){var statearr_21534 = state_21531;
(statearr_21534[(8)] = inst_21508);

(statearr_21534[(9)] = inst_21484);

(statearr_21534[(10)] = inst_21483);

(statearr_21534[(11)] = inst_21486);

(statearr_21534[(12)] = inst_21485);

return statearr_21534;
})();
var statearr_21535_21575 = state_21531__$1;
(statearr_21535_21575[(2)] = null);

(statearr_21535_21575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (1))){
var state_21531__$1 = state_21531;
var statearr_21536_21576 = state_21531__$1;
(statearr_21536_21576[(2)] = null);

(statearr_21536_21576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (4))){
var inst_21472 = (state_21531[(13)]);
var inst_21472__$1 = (state_21531[(2)]);
var inst_21473 = (inst_21472__$1 == null);
var state_21531__$1 = (function (){var statearr_21537 = state_21531;
(statearr_21537[(13)] = inst_21472__$1);

return statearr_21537;
})();
if(cljs.core.truth_(inst_21473)){
var statearr_21538_21577 = state_21531__$1;
(statearr_21538_21577[(1)] = (5));

} else {
var statearr_21539_21578 = state_21531__$1;
(statearr_21539_21578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (15))){
var state_21531__$1 = state_21531;
var statearr_21543_21579 = state_21531__$1;
(statearr_21543_21579[(2)] = null);

(statearr_21543_21579[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (21))){
var state_21531__$1 = state_21531;
var statearr_21544_21580 = state_21531__$1;
(statearr_21544_21580[(2)] = null);

(statearr_21544_21580[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (13))){
var inst_21484 = (state_21531[(9)]);
var inst_21483 = (state_21531[(10)]);
var inst_21486 = (state_21531[(11)]);
var inst_21485 = (state_21531[(12)]);
var inst_21493 = (state_21531[(2)]);
var inst_21494 = (inst_21486 + (1));
var tmp21540 = inst_21484;
var tmp21541 = inst_21483;
var tmp21542 = inst_21485;
var inst_21483__$1 = tmp21541;
var inst_21484__$1 = tmp21540;
var inst_21485__$1 = tmp21542;
var inst_21486__$1 = inst_21494;
var state_21531__$1 = (function (){var statearr_21545 = state_21531;
(statearr_21545[(14)] = inst_21493);

(statearr_21545[(9)] = inst_21484__$1);

(statearr_21545[(10)] = inst_21483__$1);

(statearr_21545[(11)] = inst_21486__$1);

(statearr_21545[(12)] = inst_21485__$1);

return statearr_21545;
})();
var statearr_21546_21581 = state_21531__$1;
(statearr_21546_21581[(2)] = null);

(statearr_21546_21581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (22))){
var state_21531__$1 = state_21531;
var statearr_21547_21582 = state_21531__$1;
(statearr_21547_21582[(2)] = null);

(statearr_21547_21582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (6))){
var inst_21472 = (state_21531[(13)]);
var inst_21481 = f.call(null,inst_21472);
var inst_21482 = cljs.core.seq.call(null,inst_21481);
var inst_21483 = inst_21482;
var inst_21484 = null;
var inst_21485 = (0);
var inst_21486 = (0);
var state_21531__$1 = (function (){var statearr_21548 = state_21531;
(statearr_21548[(9)] = inst_21484);

(statearr_21548[(10)] = inst_21483);

(statearr_21548[(11)] = inst_21486);

(statearr_21548[(12)] = inst_21485);

return statearr_21548;
})();
var statearr_21549_21583 = state_21531__$1;
(statearr_21549_21583[(2)] = null);

(statearr_21549_21583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (17))){
var inst_21497 = (state_21531[(7)]);
var inst_21501 = cljs.core.chunk_first.call(null,inst_21497);
var inst_21502 = cljs.core.chunk_rest.call(null,inst_21497);
var inst_21503 = cljs.core.count.call(null,inst_21501);
var inst_21483 = inst_21502;
var inst_21484 = inst_21501;
var inst_21485 = inst_21503;
var inst_21486 = (0);
var state_21531__$1 = (function (){var statearr_21550 = state_21531;
(statearr_21550[(9)] = inst_21484);

(statearr_21550[(10)] = inst_21483);

(statearr_21550[(11)] = inst_21486);

(statearr_21550[(12)] = inst_21485);

return statearr_21550;
})();
var statearr_21551_21584 = state_21531__$1;
(statearr_21551_21584[(2)] = null);

(statearr_21551_21584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (3))){
var inst_21529 = (state_21531[(2)]);
var state_21531__$1 = state_21531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21531__$1,inst_21529);
} else {
if((state_val_21532 === (12))){
var inst_21517 = (state_21531[(2)]);
var state_21531__$1 = state_21531;
var statearr_21552_21585 = state_21531__$1;
(statearr_21552_21585[(2)] = inst_21517);

(statearr_21552_21585[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (2))){
var state_21531__$1 = state_21531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21531__$1,(4),in$);
} else {
if((state_val_21532 === (23))){
var inst_21525 = (state_21531[(2)]);
var state_21531__$1 = state_21531;
var statearr_21553_21586 = state_21531__$1;
(statearr_21553_21586[(2)] = inst_21525);

(statearr_21553_21586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (19))){
var inst_21512 = (state_21531[(2)]);
var state_21531__$1 = state_21531;
var statearr_21554_21587 = state_21531__$1;
(statearr_21554_21587[(2)] = inst_21512);

(statearr_21554_21587[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (11))){
var inst_21497 = (state_21531[(7)]);
var inst_21483 = (state_21531[(10)]);
var inst_21497__$1 = cljs.core.seq.call(null,inst_21483);
var state_21531__$1 = (function (){var statearr_21555 = state_21531;
(statearr_21555[(7)] = inst_21497__$1);

return statearr_21555;
})();
if(inst_21497__$1){
var statearr_21556_21588 = state_21531__$1;
(statearr_21556_21588[(1)] = (14));

} else {
var statearr_21557_21589 = state_21531__$1;
(statearr_21557_21589[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (9))){
var inst_21519 = (state_21531[(2)]);
var inst_21520 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21531__$1 = (function (){var statearr_21558 = state_21531;
(statearr_21558[(15)] = inst_21519);

return statearr_21558;
})();
if(cljs.core.truth_(inst_21520)){
var statearr_21559_21590 = state_21531__$1;
(statearr_21559_21590[(1)] = (21));

} else {
var statearr_21560_21591 = state_21531__$1;
(statearr_21560_21591[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (5))){
var inst_21475 = cljs.core.async.close_BANG_.call(null,out);
var state_21531__$1 = state_21531;
var statearr_21561_21592 = state_21531__$1;
(statearr_21561_21592[(2)] = inst_21475);

(statearr_21561_21592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (14))){
var inst_21497 = (state_21531[(7)]);
var inst_21499 = cljs.core.chunked_seq_QMARK_.call(null,inst_21497);
var state_21531__$1 = state_21531;
if(inst_21499){
var statearr_21562_21593 = state_21531__$1;
(statearr_21562_21593[(1)] = (17));

} else {
var statearr_21563_21594 = state_21531__$1;
(statearr_21563_21594[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (16))){
var inst_21515 = (state_21531[(2)]);
var state_21531__$1 = state_21531;
var statearr_21564_21595 = state_21531__$1;
(statearr_21564_21595[(2)] = inst_21515);

(statearr_21564_21595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21532 === (10))){
var inst_21484 = (state_21531[(9)]);
var inst_21486 = (state_21531[(11)]);
var inst_21491 = cljs.core._nth.call(null,inst_21484,inst_21486);
var state_21531__$1 = state_21531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21531__$1,(13),out,inst_21491);
} else {
if((state_val_21532 === (18))){
var inst_21497 = (state_21531[(7)]);
var inst_21506 = cljs.core.first.call(null,inst_21497);
var state_21531__$1 = state_21531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21531__$1,(20),out,inst_21506);
} else {
if((state_val_21532 === (8))){
var inst_21486 = (state_21531[(11)]);
var inst_21485 = (state_21531[(12)]);
var inst_21488 = (inst_21486 < inst_21485);
var inst_21489 = inst_21488;
var state_21531__$1 = state_21531;
if(cljs.core.truth_(inst_21489)){
var statearr_21565_21596 = state_21531__$1;
(statearr_21565_21596[(1)] = (10));

} else {
var statearr_21566_21597 = state_21531__$1;
(statearr_21566_21597[(1)] = (11));

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
});})(c__7158__auto__))
;
return ((function (switch__7102__auto__,c__7158__auto__){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_21570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21570[(0)] = state_machine__7103__auto__);

(statearr_21570[(1)] = (1));

return statearr_21570;
});
var state_machine__7103__auto____1 = (function (state_21531){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_21531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e21571){if((e21571 instanceof Object)){
var ex__7106__auto__ = e21571;
var statearr_21572_21598 = state_21531;
(statearr_21572_21598[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21599 = state_21531;
state_21531 = G__21599;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_21531){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_21531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto__))
})();
var state__7160__auto__ = (function (){var statearr_21573 = f__7159__auto__.call(null);
(statearr_21573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto__);

return statearr_21573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto__))
);

return c__7158__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7158__auto___21696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___21696,out){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___21696,out){
return (function (state_21671){
var state_val_21672 = (state_21671[(1)]);
if((state_val_21672 === (7))){
var inst_21666 = (state_21671[(2)]);
var state_21671__$1 = state_21671;
var statearr_21673_21697 = state_21671__$1;
(statearr_21673_21697[(2)] = inst_21666);

(statearr_21673_21697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (1))){
var inst_21648 = null;
var state_21671__$1 = (function (){var statearr_21674 = state_21671;
(statearr_21674[(7)] = inst_21648);

return statearr_21674;
})();
var statearr_21675_21698 = state_21671__$1;
(statearr_21675_21698[(2)] = null);

(statearr_21675_21698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (4))){
var inst_21651 = (state_21671[(8)]);
var inst_21651__$1 = (state_21671[(2)]);
var inst_21652 = (inst_21651__$1 == null);
var inst_21653 = cljs.core.not.call(null,inst_21652);
var state_21671__$1 = (function (){var statearr_21676 = state_21671;
(statearr_21676[(8)] = inst_21651__$1);

return statearr_21676;
})();
if(inst_21653){
var statearr_21677_21699 = state_21671__$1;
(statearr_21677_21699[(1)] = (5));

} else {
var statearr_21678_21700 = state_21671__$1;
(statearr_21678_21700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (6))){
var state_21671__$1 = state_21671;
var statearr_21679_21701 = state_21671__$1;
(statearr_21679_21701[(2)] = null);

(statearr_21679_21701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (3))){
var inst_21668 = (state_21671[(2)]);
var inst_21669 = cljs.core.async.close_BANG_.call(null,out);
var state_21671__$1 = (function (){var statearr_21680 = state_21671;
(statearr_21680[(9)] = inst_21668);

return statearr_21680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21671__$1,inst_21669);
} else {
if((state_val_21672 === (2))){
var state_21671__$1 = state_21671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21671__$1,(4),ch);
} else {
if((state_val_21672 === (11))){
var inst_21651 = (state_21671[(8)]);
var inst_21660 = (state_21671[(2)]);
var inst_21648 = inst_21651;
var state_21671__$1 = (function (){var statearr_21681 = state_21671;
(statearr_21681[(10)] = inst_21660);

(statearr_21681[(7)] = inst_21648);

return statearr_21681;
})();
var statearr_21682_21702 = state_21671__$1;
(statearr_21682_21702[(2)] = null);

(statearr_21682_21702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (9))){
var inst_21651 = (state_21671[(8)]);
var state_21671__$1 = state_21671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21671__$1,(11),out,inst_21651);
} else {
if((state_val_21672 === (5))){
var inst_21648 = (state_21671[(7)]);
var inst_21651 = (state_21671[(8)]);
var inst_21655 = cljs.core._EQ_.call(null,inst_21651,inst_21648);
var state_21671__$1 = state_21671;
if(inst_21655){
var statearr_21684_21703 = state_21671__$1;
(statearr_21684_21703[(1)] = (8));

} else {
var statearr_21685_21704 = state_21671__$1;
(statearr_21685_21704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (10))){
var inst_21663 = (state_21671[(2)]);
var state_21671__$1 = state_21671;
var statearr_21686_21705 = state_21671__$1;
(statearr_21686_21705[(2)] = inst_21663);

(statearr_21686_21705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (8))){
var inst_21648 = (state_21671[(7)]);
var tmp21683 = inst_21648;
var inst_21648__$1 = tmp21683;
var state_21671__$1 = (function (){var statearr_21687 = state_21671;
(statearr_21687[(7)] = inst_21648__$1);

return statearr_21687;
})();
var statearr_21688_21706 = state_21671__$1;
(statearr_21688_21706[(2)] = null);

(statearr_21688_21706[(1)] = (2));


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
});})(c__7158__auto___21696,out))
;
return ((function (switch__7102__auto__,c__7158__auto___21696,out){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_21692 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21692[(0)] = state_machine__7103__auto__);

(statearr_21692[(1)] = (1));

return statearr_21692;
});
var state_machine__7103__auto____1 = (function (state_21671){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_21671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e21693){if((e21693 instanceof Object)){
var ex__7106__auto__ = e21693;
var statearr_21694_21707 = state_21671;
(statearr_21694_21707[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21708 = state_21671;
state_21671 = G__21708;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_21671){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_21671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___21696,out))
})();
var state__7160__auto__ = (function (){var statearr_21695 = f__7159__auto__.call(null);
(statearr_21695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___21696);

return statearr_21695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___21696,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7158__auto___21843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___21843,out){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___21843,out){
return (function (state_21813){
var state_val_21814 = (state_21813[(1)]);
if((state_val_21814 === (7))){
var inst_21809 = (state_21813[(2)]);
var state_21813__$1 = state_21813;
var statearr_21815_21844 = state_21813__$1;
(statearr_21815_21844[(2)] = inst_21809);

(statearr_21815_21844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21814 === (1))){
var inst_21776 = (new Array(n));
var inst_21777 = inst_21776;
var inst_21778 = (0);
var state_21813__$1 = (function (){var statearr_21816 = state_21813;
(statearr_21816[(7)] = inst_21777);

(statearr_21816[(8)] = inst_21778);

return statearr_21816;
})();
var statearr_21817_21845 = state_21813__$1;
(statearr_21817_21845[(2)] = null);

(statearr_21817_21845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21814 === (4))){
var inst_21781 = (state_21813[(9)]);
var inst_21781__$1 = (state_21813[(2)]);
var inst_21782 = (inst_21781__$1 == null);
var inst_21783 = cljs.core.not.call(null,inst_21782);
var state_21813__$1 = (function (){var statearr_21818 = state_21813;
(statearr_21818[(9)] = inst_21781__$1);

return statearr_21818;
})();
if(inst_21783){
var statearr_21819_21846 = state_21813__$1;
(statearr_21819_21846[(1)] = (5));

} else {
var statearr_21820_21847 = state_21813__$1;
(statearr_21820_21847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21814 === (15))){
var inst_21803 = (state_21813[(2)]);
var state_21813__$1 = state_21813;
var statearr_21821_21848 = state_21813__$1;
(statearr_21821_21848[(2)] = inst_21803);

(statearr_21821_21848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21814 === (13))){
var state_21813__$1 = state_21813;
var statearr_21822_21849 = state_21813__$1;
(statearr_21822_21849[(2)] = null);

(statearr_21822_21849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21814 === (6))){
var inst_21778 = (state_21813[(8)]);
var inst_21799 = (inst_21778 > (0));
var state_21813__$1 = state_21813;
if(cljs.core.truth_(inst_21799)){
var statearr_21823_21850 = state_21813__$1;
(statearr_21823_21850[(1)] = (12));

} else {
var statearr_21824_21851 = state_21813__$1;
(statearr_21824_21851[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21814 === (3))){
var inst_21811 = (state_21813[(2)]);
var state_21813__$1 = state_21813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21813__$1,inst_21811);
} else {
if((state_val_21814 === (12))){
var inst_21777 = (state_21813[(7)]);
var inst_21801 = cljs.core.vec.call(null,inst_21777);
var state_21813__$1 = state_21813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21813__$1,(15),out,inst_21801);
} else {
if((state_val_21814 === (2))){
var state_21813__$1 = state_21813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21813__$1,(4),ch);
} else {
if((state_val_21814 === (11))){
var inst_21793 = (state_21813[(2)]);
var inst_21794 = (new Array(n));
var inst_21777 = inst_21794;
var inst_21778 = (0);
var state_21813__$1 = (function (){var statearr_21825 = state_21813;
(statearr_21825[(7)] = inst_21777);

(statearr_21825[(10)] = inst_21793);

(statearr_21825[(8)] = inst_21778);

return statearr_21825;
})();
var statearr_21826_21852 = state_21813__$1;
(statearr_21826_21852[(2)] = null);

(statearr_21826_21852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21814 === (9))){
var inst_21777 = (state_21813[(7)]);
var inst_21791 = cljs.core.vec.call(null,inst_21777);
var state_21813__$1 = state_21813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21813__$1,(11),out,inst_21791);
} else {
if((state_val_21814 === (5))){
var inst_21777 = (state_21813[(7)]);
var inst_21778 = (state_21813[(8)]);
var inst_21781 = (state_21813[(9)]);
var inst_21786 = (state_21813[(11)]);
var inst_21785 = (inst_21777[inst_21778] = inst_21781);
var inst_21786__$1 = (inst_21778 + (1));
var inst_21787 = (inst_21786__$1 < n);
var state_21813__$1 = (function (){var statearr_21827 = state_21813;
(statearr_21827[(11)] = inst_21786__$1);

(statearr_21827[(12)] = inst_21785);

return statearr_21827;
})();
if(cljs.core.truth_(inst_21787)){
var statearr_21828_21853 = state_21813__$1;
(statearr_21828_21853[(1)] = (8));

} else {
var statearr_21829_21854 = state_21813__$1;
(statearr_21829_21854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21814 === (14))){
var inst_21806 = (state_21813[(2)]);
var inst_21807 = cljs.core.async.close_BANG_.call(null,out);
var state_21813__$1 = (function (){var statearr_21831 = state_21813;
(statearr_21831[(13)] = inst_21806);

return statearr_21831;
})();
var statearr_21832_21855 = state_21813__$1;
(statearr_21832_21855[(2)] = inst_21807);

(statearr_21832_21855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21814 === (10))){
var inst_21797 = (state_21813[(2)]);
var state_21813__$1 = state_21813;
var statearr_21833_21856 = state_21813__$1;
(statearr_21833_21856[(2)] = inst_21797);

(statearr_21833_21856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21814 === (8))){
var inst_21777 = (state_21813[(7)]);
var inst_21786 = (state_21813[(11)]);
var tmp21830 = inst_21777;
var inst_21777__$1 = tmp21830;
var inst_21778 = inst_21786;
var state_21813__$1 = (function (){var statearr_21834 = state_21813;
(statearr_21834[(7)] = inst_21777__$1);

(statearr_21834[(8)] = inst_21778);

return statearr_21834;
})();
var statearr_21835_21857 = state_21813__$1;
(statearr_21835_21857[(2)] = null);

(statearr_21835_21857[(1)] = (2));


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
});})(c__7158__auto___21843,out))
;
return ((function (switch__7102__auto__,c__7158__auto___21843,out){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_21839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21839[(0)] = state_machine__7103__auto__);

(statearr_21839[(1)] = (1));

return statearr_21839;
});
var state_machine__7103__auto____1 = (function (state_21813){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_21813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e21840){if((e21840 instanceof Object)){
var ex__7106__auto__ = e21840;
var statearr_21841_21858 = state_21813;
(statearr_21841_21858[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21859 = state_21813;
state_21813 = G__21859;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_21813){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_21813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___21843,out))
})();
var state__7160__auto__ = (function (){var statearr_21842 = f__7159__auto__.call(null);
(statearr_21842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___21843);

return statearr_21842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___21843,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7158__auto___22002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto___22002,out){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto___22002,out){
return (function (state_21972){
var state_val_21973 = (state_21972[(1)]);
if((state_val_21973 === (7))){
var inst_21968 = (state_21972[(2)]);
var state_21972__$1 = state_21972;
var statearr_21974_22003 = state_21972__$1;
(statearr_21974_22003[(2)] = inst_21968);

(statearr_21974_22003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21973 === (1))){
var inst_21931 = [];
var inst_21932 = inst_21931;
var inst_21933 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21972__$1 = (function (){var statearr_21975 = state_21972;
(statearr_21975[(7)] = inst_21932);

(statearr_21975[(8)] = inst_21933);

return statearr_21975;
})();
var statearr_21976_22004 = state_21972__$1;
(statearr_21976_22004[(2)] = null);

(statearr_21976_22004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21973 === (4))){
var inst_21936 = (state_21972[(9)]);
var inst_21936__$1 = (state_21972[(2)]);
var inst_21937 = (inst_21936__$1 == null);
var inst_21938 = cljs.core.not.call(null,inst_21937);
var state_21972__$1 = (function (){var statearr_21977 = state_21972;
(statearr_21977[(9)] = inst_21936__$1);

return statearr_21977;
})();
if(inst_21938){
var statearr_21978_22005 = state_21972__$1;
(statearr_21978_22005[(1)] = (5));

} else {
var statearr_21979_22006 = state_21972__$1;
(statearr_21979_22006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21973 === (15))){
var inst_21962 = (state_21972[(2)]);
var state_21972__$1 = state_21972;
var statearr_21980_22007 = state_21972__$1;
(statearr_21980_22007[(2)] = inst_21962);

(statearr_21980_22007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21973 === (13))){
var state_21972__$1 = state_21972;
var statearr_21981_22008 = state_21972__$1;
(statearr_21981_22008[(2)] = null);

(statearr_21981_22008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21973 === (6))){
var inst_21932 = (state_21972[(7)]);
var inst_21957 = inst_21932.length;
var inst_21958 = (inst_21957 > (0));
var state_21972__$1 = state_21972;
if(cljs.core.truth_(inst_21958)){
var statearr_21982_22009 = state_21972__$1;
(statearr_21982_22009[(1)] = (12));

} else {
var statearr_21983_22010 = state_21972__$1;
(statearr_21983_22010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21973 === (3))){
var inst_21970 = (state_21972[(2)]);
var state_21972__$1 = state_21972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21972__$1,inst_21970);
} else {
if((state_val_21973 === (12))){
var inst_21932 = (state_21972[(7)]);
var inst_21960 = cljs.core.vec.call(null,inst_21932);
var state_21972__$1 = state_21972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21972__$1,(15),out,inst_21960);
} else {
if((state_val_21973 === (2))){
var state_21972__$1 = state_21972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21972__$1,(4),ch);
} else {
if((state_val_21973 === (11))){
var inst_21936 = (state_21972[(9)]);
var inst_21940 = (state_21972[(10)]);
var inst_21950 = (state_21972[(2)]);
var inst_21951 = [];
var inst_21952 = inst_21951.push(inst_21936);
var inst_21932 = inst_21951;
var inst_21933 = inst_21940;
var state_21972__$1 = (function (){var statearr_21984 = state_21972;
(statearr_21984[(11)] = inst_21952);

(statearr_21984[(7)] = inst_21932);

(statearr_21984[(8)] = inst_21933);

(statearr_21984[(12)] = inst_21950);

return statearr_21984;
})();
var statearr_21985_22011 = state_21972__$1;
(statearr_21985_22011[(2)] = null);

(statearr_21985_22011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21973 === (9))){
var inst_21932 = (state_21972[(7)]);
var inst_21948 = cljs.core.vec.call(null,inst_21932);
var state_21972__$1 = state_21972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21972__$1,(11),out,inst_21948);
} else {
if((state_val_21973 === (5))){
var inst_21936 = (state_21972[(9)]);
var inst_21933 = (state_21972[(8)]);
var inst_21940 = (state_21972[(10)]);
var inst_21940__$1 = f.call(null,inst_21936);
var inst_21941 = cljs.core._EQ_.call(null,inst_21940__$1,inst_21933);
var inst_21942 = cljs.core.keyword_identical_QMARK_.call(null,inst_21933,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21943 = (inst_21941) || (inst_21942);
var state_21972__$1 = (function (){var statearr_21986 = state_21972;
(statearr_21986[(10)] = inst_21940__$1);

return statearr_21986;
})();
if(cljs.core.truth_(inst_21943)){
var statearr_21987_22012 = state_21972__$1;
(statearr_21987_22012[(1)] = (8));

} else {
var statearr_21988_22013 = state_21972__$1;
(statearr_21988_22013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21973 === (14))){
var inst_21965 = (state_21972[(2)]);
var inst_21966 = cljs.core.async.close_BANG_.call(null,out);
var state_21972__$1 = (function (){var statearr_21990 = state_21972;
(statearr_21990[(13)] = inst_21965);

return statearr_21990;
})();
var statearr_21991_22014 = state_21972__$1;
(statearr_21991_22014[(2)] = inst_21966);

(statearr_21991_22014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21973 === (10))){
var inst_21955 = (state_21972[(2)]);
var state_21972__$1 = state_21972;
var statearr_21992_22015 = state_21972__$1;
(statearr_21992_22015[(2)] = inst_21955);

(statearr_21992_22015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21973 === (8))){
var inst_21936 = (state_21972[(9)]);
var inst_21932 = (state_21972[(7)]);
var inst_21940 = (state_21972[(10)]);
var inst_21945 = inst_21932.push(inst_21936);
var tmp21989 = inst_21932;
var inst_21932__$1 = tmp21989;
var inst_21933 = inst_21940;
var state_21972__$1 = (function (){var statearr_21993 = state_21972;
(statearr_21993[(14)] = inst_21945);

(statearr_21993[(7)] = inst_21932__$1);

(statearr_21993[(8)] = inst_21933);

return statearr_21993;
})();
var statearr_21994_22016 = state_21972__$1;
(statearr_21994_22016[(2)] = null);

(statearr_21994_22016[(1)] = (2));


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
});})(c__7158__auto___22002,out))
;
return ((function (switch__7102__auto__,c__7158__auto___22002,out){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_21998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21998[(0)] = state_machine__7103__auto__);

(statearr_21998[(1)] = (1));

return statearr_21998;
});
var state_machine__7103__auto____1 = (function (state_21972){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_21972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e21999){if((e21999 instanceof Object)){
var ex__7106__auto__ = e21999;
var statearr_22000_22017 = state_21972;
(statearr_22000_22017[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22018 = state_21972;
state_21972 = G__22018;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_21972){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_21972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto___22002,out))
})();
var state__7160__auto__ = (function (){var statearr_22001 = f__7159__auto__.call(null);
(statearr_22001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto___22002);

return statearr_22001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto___22002,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map