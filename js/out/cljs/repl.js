// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23094_23098 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23095_23099 = null;
var count__23096_23100 = (0);
var i__23097_23101 = (0);
while(true){
if((i__23097_23101 < count__23096_23100)){
var f_23102 = cljs.core._nth.call(null,chunk__23095_23099,i__23097_23101);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_23102);

var G__23103 = seq__23094_23098;
var G__23104 = chunk__23095_23099;
var G__23105 = count__23096_23100;
var G__23106 = (i__23097_23101 + (1));
seq__23094_23098 = G__23103;
chunk__23095_23099 = G__23104;
count__23096_23100 = G__23105;
i__23097_23101 = G__23106;
continue;
} else {
var temp__4126__auto___23107 = cljs.core.seq.call(null,seq__23094_23098);
if(temp__4126__auto___23107){
var seq__23094_23108__$1 = temp__4126__auto___23107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23094_23108__$1)){
var c__4011__auto___23109 = cljs.core.chunk_first.call(null,seq__23094_23108__$1);
var G__23110 = cljs.core.chunk_rest.call(null,seq__23094_23108__$1);
var G__23111 = c__4011__auto___23109;
var G__23112 = cljs.core.count.call(null,c__4011__auto___23109);
var G__23113 = (0);
seq__23094_23098 = G__23110;
chunk__23095_23099 = G__23111;
count__23096_23100 = G__23112;
i__23097_23101 = G__23113;
continue;
} else {
var f_23114 = cljs.core.first.call(null,seq__23094_23108__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_23114);

var G__23115 = cljs.core.next.call(null,seq__23094_23108__$1);
var G__23116 = null;
var G__23117 = (0);
var G__23118 = (0);
seq__23094_23098 = G__23115;
chunk__23095_23099 = G__23116;
count__23096_23100 = G__23117;
i__23097_23101 = G__23118;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map