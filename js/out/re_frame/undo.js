// Compiled by ClojureScript 0.0-2913 {}
goog.provide('re_frame.undo');
goog.require('cljs.core');
goog.require('re_frame.subs');
goog.require('re_frame.handlers');
goog.require('re_frame.db');
goog.require('reagent.core');
re_frame.undo.max_undos = cljs.core.atom.call(null,(50));
re_frame.undo.set_max_undos = (function set_max_undos(n){
return cljs.core.reset_BANG_.call(null,re_frame.undo.max_undos,n);
});
re_frame.undo.undo_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
re_frame.undo.redo_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
re_frame.undo.clear_history_BANG_ = (function clear_history_BANG_(){
cljs.core.reset_BANG_.call(null,re_frame.undo.undo_list,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,re_frame.undo.undo_list,cljs.core.PersistentVector.EMPTY);
});
/**
* stores the value currently in app-db, so the user can later undo
*/
re_frame.undo.store_now_BANG_ = (function store_now_BANG_(){
cljs.core.reset_BANG_.call(null,re_frame.undo.redo_list,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,re_frame.undo.undo_list,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,re_frame.undo.max_undos),cljs.core.conj.call(null,cljs.core.deref.call(null,re_frame.undo.undo_list),cljs.core.deref.call(null,re_frame.db.app_db)))));
});
re_frame.subs.register.call(null,new cljs.core.Keyword(null,"undos?","undos?",-1094259081),(function handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return (cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.undo.undo_list)) > (1));
}));
}));
re_frame.subs.register.call(null,new cljs.core.Keyword(null,"redos?","redos?",1340247550),(function handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return (cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.undo.redo_list)) > (0));
}));
}));
re_frame.handlers.register.call(null,new cljs.core.Keyword(null,"undo","undo",-1818036302),(function handler(_,___$1){
if((cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.undo.undo_list)) > (0))){
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,cljs.core.last.call(null,cljs.core.deref.call(null,re_frame.undo.undo_list)));

cljs.core.reset_BANG_.call(null,re_frame.undo.redo_list,cljs.core.cons.call(null,cljs.core.deref.call(null,re_frame.db.app_db),cljs.core.deref.call(null,re_frame.undo.redo_list)));

return cljs.core.reset_BANG_.call(null,re_frame.undo.undo_list,cljs.core.pop.call(null,cljs.core.deref.call(null,re_frame.undo.undo_list)));
} else {
return null;
}
}));
re_frame.handlers.register.call(null,new cljs.core.Keyword(null,"redo","redo",501190664),(function handler(_,___$1){
if((cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.undo.redo_list)) > (0))){
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.undo.redo_list)));

cljs.core.reset_BANG_.call(null,re_frame.undo.redo_list,cljs.core.rest.call(null,cljs.core.deref.call(null,re_frame.undo.redo_list)));

return cljs.core.reset_BANG_.call(null,re_frame.undo.undo_list,cljs.core.conj.call(null,cljs.core.deref.call(null,re_frame.undo.undo_list),cljs.core.deref.call(null,re_frame.db.app_db)));
} else {
return null;
}
}));

//# sourceMappingURL=undo.js.map