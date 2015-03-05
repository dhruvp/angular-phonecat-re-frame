// Compiled by ClojureScript 0.0-2913 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
re_frame.utils.warn = (function() { 
var warn__delegate = function (args){
return console.warn(cljs.core.apply.call(null,cljs.core.str,args));
};
var warn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18869__i = 0, G__18869__a = new Array(arguments.length -  0);
while (G__18869__i < G__18869__a.length) {G__18869__a[G__18869__i] = arguments[G__18869__i + 0]; ++G__18869__i;}
  args = new cljs.core.IndexedSeq(G__18869__a,0);
} 
return warn__delegate.call(this,args);};
warn.cljs$lang$maxFixedArity = 0;
warn.cljs$lang$applyTo = (function (arglist__18870){
var args = cljs.core.seq(arglist__18870);
return warn__delegate(args);
});
warn.cljs$core$IFn$_invoke$arity$variadic = warn__delegate;
return warn;
})()
;
re_frame.utils.first_in_vector = (function first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.warn.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map