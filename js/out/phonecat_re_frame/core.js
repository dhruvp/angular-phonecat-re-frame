// Compiled by ClojureScript 0.0-2913 {}
goog.provide('phonecat_re_frame.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('re_frame.core');
re_frame.core.register_subs.call(null,new cljs.core.Keyword(null,"phones","phones",232561938),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"phones","phones",232561938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_subs.call(null,new cljs.core.Keyword(null,"search-input","search-input",-576916149),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"search-input","search-input",-576916149).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_subs.call(null,new cljs.core.Keyword(null,"selected-image-url","selected-image-url",-1927683660),(function (db,p__10005){
var vec__10006 = p__10005;
var _ = cljs.core.nth.call(null,vec__10006,(0),null);
var phone_id = cljs.core.nth.call(null,vec__10006,(1),null);
var phone = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phone-query","phone-query",-87436530),phone_id], null));
var phone_details = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phone-details","phone-details",-267431425)], null));
var images = reagent.ratom.make_reaction.call(null,((function (phone,phone_details,vec__10006,_,phone_id){
return (function (){
return new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone));
});})(phone,phone_details,vec__10006,_,phone_id))
);
return reagent.ratom.make_reaction.call(null,((function (phone,phone_details,images,vec__10006,_,phone_id){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,phone_details))){
var temp__4124__auto__ = new cljs.core.Keyword(null,"selected-image-url","selected-image-url",-1927683660).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone_details));
if(cljs.core.truth_(temp__4124__auto__)){
var image_url = temp__4124__auto__;
return image_url;
} else {
return cljs.core.first.call(null,cljs.core.deref.call(null,images));
}
} else {
return null;
}
});})(phone,phone_details,images,vec__10006,_,phone_id))
);
}));
re_frame.core.register_subs.call(null,new cljs.core.Keyword(null,"phone-query","phone-query",-87436530),(function (db,p__10007){
var vec__10008 = p__10007;
var _ = cljs.core.nth.call(null,vec__10008,(0),null);
var phone_id = cljs.core.nth.call(null,vec__10008,(1),null);
var phone_details_reaction = reagent.ratom.make_reaction.call(null,((function (vec__10008,_,phone_id){
return (function (){
return new cljs.core.Keyword(null,"phone-details","phone-details",-267431425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(vec__10008,_,phone_id))
);
return reagent.ratom.make_reaction.call(null,((function (phone_details_reaction,vec__10008,_,phone_id){
return (function (){
return ((function (phone_details_reaction,vec__10008,_,phone_id){
return (function (){
return cljs.core.keyword.call(null,phone_id).call(null,cljs.core.deref.call(null,phone_details_reaction));
});})(phone_details_reaction,vec__10008,_,phone_id))
.call(null);
});})(phone_details_reaction,vec__10008,_,phone_id))
);
}));
re_frame.core.register_subs.call(null,new cljs.core.Keyword(null,"phone-details","phone-details",-267431425),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"phone-details","phone-details",-267431425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_subs.call(null,new cljs.core.Keyword(null,"order-prop","order-prop",-1545508264),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"order-prop","order-prop",-1545508264).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_pure_handler.call(null,new cljs.core.Keyword(null,"set-image","set-image",1635371098),(function (app_state,p__10009){
var vec__10010 = p__10009;
var _ = cljs.core.nth.call(null,vec__10010,(0),null);
var selected_image_url = cljs.core.nth.call(null,vec__10010,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phone-details","phone-details",-267431425),new cljs.core.Keyword(null,"selected-image-url","selected-image-url",-1927683660)], null),selected_image_url);
}));
re_frame.core.register_pure_handler.call(null,new cljs.core.Keyword(null,"process-phones-response","process-phones-response",383418379),(function (app_state,p__10011){
var vec__10012 = p__10011;
var _ = cljs.core.nth.call(null,vec__10012,(0),null);
var response = cljs.core.nth.call(null,vec__10012,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phones","phones",232561938)], null),response);
}));
re_frame.core.register_pure_handler.call(null,new cljs.core.Keyword(null,"process-phones-bad-response","process-phones-bad-response",-2007114957),(function (app_state,p__10013){
var vec__10014 = p__10013;
var _ = cljs.core.nth.call(null,vec__10014,(0),null);
var response = cljs.core.nth.call(null,vec__10014,(1),null);
cljs.core.println.call(null,"Error getting phones",response);

return app_state;
}));
re_frame.core.register_pure_handler.call(null,new cljs.core.Keyword(null,"load-phones","load-phones",163559429),(function (app_state,_){
ajax.core.GET.call(null,"phones/phones.json",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__10015_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-phones-response","process-phones-response",383418379),p1__10015_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__10016_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-phones-bad-response","process-phones-bad-response",-2007114957),p1__10016_SHARP_], null));
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));

return app_state;
}));
re_frame.core.register_pure_handler.call(null,new cljs.core.Keyword(null,"process-phone-detail-response","process-phone-detail-response",1475855172),(function (app_state,p__10017){
var vec__10018 = p__10017;
var _ = cljs.core.nth.call(null,vec__10018,(0),null);
var vec__10019 = cljs.core.nth.call(null,vec__10018,(1),null);
var phone_id = cljs.core.nth.call(null,vec__10019,(0),null);
var response = cljs.core.nth.call(null,vec__10019,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phone-details","phone-details",-267431425),cljs.core.keyword.call(null,phone_id)], null),response);
}));
re_frame.core.register_pure_handler.call(null,new cljs.core.Keyword(null,"process-phone-detail-bad-response","process-phone-detail-bad-response",-1139789174),(function (app_state,p__10020){
var vec__10021 = p__10020;
var _ = cljs.core.nth.call(null,vec__10021,(0),null);
var vec__10022 = cljs.core.nth.call(null,vec__10021,(1),null);
var phone_id = cljs.core.nth.call(null,vec__10022,(0),null);
var response = cljs.core.nth.call(null,vec__10022,(1),null);
cljs.core.println.call(null,"Error getting phone detail for id: ",phone_id);

cljs.core.println.call(null,response);

return app_state;
}));
re_frame.core.register_pure_handler.call(null,new cljs.core.Keyword(null,"load-phone-detail","load-phone-detail",-1950534767),(function (app_state,p__10025){
var vec__10026 = p__10025;
var _ = cljs.core.nth.call(null,vec__10026,(0),null);
var phone_id = cljs.core.nth.call(null,vec__10026,(1),null);
return ajax.core.GET.call(null,[cljs.core.str("phones/"),cljs.core.str(phone_id),cljs.core.str(".json")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__10026,_,phone_id){
return (function (p1__10023_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-phone-detail-response","process-phone-detail-response",1475855172),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phone_id,p1__10023_SHARP_], null)], null));
});})(vec__10026,_,phone_id))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__10026,_,phone_id){
return (function (p1__10024_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-phone-detail-bad-response","process-phone-detail-bad-response",-1139789174),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phone_id,p1__10024_SHARP_], null)], null));
});})(vec__10026,_,phone_id))
,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
}));
re_frame.core.register_pure_handler.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"phones","phones",232561938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"phone-details","phone-details",-267431425),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"search-input","search-input",-576916149),"",new cljs.core.Keyword(null,"order-prop","order-prop",-1545508264),"name"], null);
}));
phonecat_re_frame.core.handle_search_input_entered = (function handle_search_input_entered(app_state,p__10027){
var vec__10029 = p__10027;
var _ = cljs.core.nth.call(null,vec__10029,(0),null);
var search_input = cljs.core.nth.call(null,vec__10029,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-input","search-input",-576916149)], null),search_input);
});
phonecat_re_frame.core.handle_order_prop_changed = (function handle_order_prop_changed(app_state,p__10030){
var vec__10032 = p__10030;
var _ = cljs.core.nth.call(null,vec__10032,(0),null);
var order_prop = cljs.core.nth.call(null,vec__10032,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-prop","order-prop",-1545508264)], null),order_prop);
});
re_frame.core.register_pure_handler.call(null,new cljs.core.Keyword(null,"search-input-entered","search-input-entered",1024465718),phonecat_re_frame.core.handle_search_input_entered);
re_frame.core.register_pure_handler.call(null,new cljs.core.Keyword(null,"order-prop-changed","order-prop-changed",1059494959),phonecat_re_frame.core.handle_order_prop_changed);
phonecat_re_frame.core.phone_component = (function phone_component(phone){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"thumbnail phone-listing"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/phones/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(phone))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"thumb"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"imageUrl","imageUrl",1269643151).cljs$core$IFn$_invoke$arity$1(phone)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/phones/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(phone))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(phone)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"snippet","snippet",953581994).cljs$core$IFn$_invoke$arity$1(phone)], null)], null);
});
phonecat_re_frame.core.matches_query_QMARK_ = (function matches_query_QMARK_(search_input,phone){
if(cljs.core._EQ_.call(null,"",search_input)){
return true;
} else {
return cljs.core.boolean$.call(null,(function (){var or__3224__auto__ = cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,search_input),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(phone));
if(cljs.core.truth_(or__3224__auto__)){
return or__3224__auto__;
} else {
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,search_input),new cljs.core.Keyword(null,"snippet","snippet",953581994).cljs$core$IFn$_invoke$arity$1(phone));
}
})());
}
});
phonecat_re_frame.core.phones_component = (function phones_component(){
var phones = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phones","phones",232561938)], null));
var search_input = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-input","search-input",-576916149)], null));
var order_prop = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-prop","order-prop",-1545508264)], null));
return ((function (phones,search_input,order_prop){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"phones"], null),(function (){var iter__3980__auto__ = ((function (phones,search_input,order_prop){
return (function iter__10037(s__10038){
return (new cljs.core.LazySeq(null,((function (phones,search_input,order_prop){
return (function (){
var s__10038__$1 = s__10038;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10038__$1);
if(temp__4126__auto__){
var s__10038__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10038__$2)){
var c__3978__auto__ = cljs.core.chunk_first.call(null,s__10038__$2);
var size__3979__auto__ = cljs.core.count.call(null,c__3978__auto__);
var b__10040 = cljs.core.chunk_buffer.call(null,size__3979__auto__);
if((function (){var i__10039 = (0);
while(true){
if((i__10039 < size__3979__auto__)){
var phone = cljs.core._nth.call(null,c__3978__auto__,i__10039);
cljs.core.chunk_append.call(null,b__10040,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.phone_component,phone], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),phone], null)));

var G__10041 = (i__10039 + (1));
i__10039 = G__10041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10040),iter__10037.call(null,cljs.core.chunk_rest.call(null,s__10038__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10040),null);
}
} else {
var phone = cljs.core.first.call(null,s__10038__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.phone_component,phone], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),phone], null)),iter__10037.call(null,cljs.core.rest.call(null,s__10038__$2)));
}
} else {
return null;
}
break;
}
});})(phones,search_input,order_prop))
,null,null));
});})(phones,search_input,order_prop))
;
return iter__3980__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.keyword.call(null,cljs.core.deref.call(null,order_prop)),cljs.core.filter.call(null,cljs.core.partial.call(null,phonecat_re_frame.core.matches_query_QMARK_,cljs.core.deref.call(null,search_input)),cljs.core.deref.call(null,phones))));
})()], null);
});
;})(phones,search_input,order_prop))
});
phonecat_re_frame.core.search_component = (function search_component(){
var search_input_10043 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-input","search-input",-576916149)], null));

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Search",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10042_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-input-entered","search-input-entered",1024465718),p1__10042_SHARP_.target.value], null));
})], null)], null)], null);
});
});
phonecat_re_frame.core.mark_selected = (function mark_selected(props,order_prop,current_prop_value){
if(cljs.core._EQ_.call(null,order_prop,current_prop_value)){
return reagent.core.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),"selected"], null));
} else {
return props;
}
});
phonecat_re_frame.core.order_by_component = (function order_by_component(){
var order_prop = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-prop","order-prop",-1545508264)], null));
return ((function (order_prop){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Sort by: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (order_prop){
return (function (p1__10044_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-prop-changed","order-prop-changed",1059494959),p1__10044_SHARP_.target.value], null));
});})(order_prop))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),phonecat_re_frame.core.mark_selected.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"name"], null),cljs.core.deref.call(null,order_prop),"Alphabetical"),"Alphabetical"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),phonecat_re_frame.core.mark_selected.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"age"], null),cljs.core.deref.call(null,order_prop),"Newest"),"Newest"], null)], null)], null);
});
;})(order_prop))
});
phonecat_re_frame.core.home_page = (function home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container-fluid"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-2"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.search_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.order_by_component], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-10"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.phones_component], null)], null)], null)], null);
});
phonecat_re_frame.core.current_page = (function current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)),reagent.session.get.call(null,new cljs.core.Keyword(null,"params","params",710516235))], null)], null);
});
phonecat_re_frame.core.phone_info_template = (function phone_info_template(section_title,attributes_map){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),section_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),cljs.core.map.call(null,(function (attribute){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(attribute)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),(function (){var pred__10048 = cljs.core._EQ_;
var expr__10049 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attribute);
if(cljs.core.truth_(pred__10048.call(null,true,expr__10049))){
return "\u2713";
} else {
if(cljs.core.truth_(pred__10048.call(null,false,expr__10049))){
return "\u2718";
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attribute);
}
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),attribute], null));
}),attributes_map)], null)], null);
});
phonecat_re_frame.core.thumbnails = (function thumbnails(phone){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"phone-thumbs"], null),(function (){var iter__3980__auto__ = (function iter__10055(s__10056){
return (new cljs.core.LazySeq(null,(function (){
var s__10056__$1 = s__10056;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10056__$1);
if(temp__4126__auto__){
var s__10056__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10056__$2)){
var c__3978__auto__ = cljs.core.chunk_first.call(null,s__10056__$2);
var size__3979__auto__ = cljs.core.count.call(null,c__3978__auto__);
var b__10058 = cljs.core.chunk_buffer.call(null,size__3979__auto__);
if((function (){var i__10057 = (0);
while(true){
if((i__10057 < size__3979__auto__)){
var image = cljs.core._nth.call(null,c__3978__auto__,i__10057);
cljs.core.chunk_append.call(null,b__10058,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),image,new cljs.core.Keyword(null,"class","class",-2030961996),"phone",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__10057,image,c__3978__auto__,size__3979__auto__,b__10058,s__10056__$2,temp__4126__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-image","set-image",1635371098),image], null));
});})(i__10057,image,c__3978__auto__,size__3979__auto__,b__10058,s__10056__$2,temp__4126__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),image], null)));

var G__10059 = (i__10057 + (1));
i__10057 = G__10059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10058),iter__10055.call(null,cljs.core.chunk_rest.call(null,s__10056__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10058),null);
}
} else {
var image = cljs.core.first.call(null,s__10056__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),image,new cljs.core.Keyword(null,"class","class",-2030961996),"phone",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (image,s__10056__$2,temp__4126__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-image","set-image",1635371098),image], null));
});})(image,s__10056__$2,temp__4126__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),image], null)),iter__10055.call(null,cljs.core.rest.call(null,s__10056__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__3980__auto__.call(null,new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone)));
})()], null);
});
phonecat_re_frame.core.availability = (function availability(availability__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Availability and Networks"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"Availability"], null),(function (){var iter__3980__auto__ = (function iter__10064(s__10065){
return (new cljs.core.LazySeq(null,(function (){
var s__10065__$1 = s__10065;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10065__$1);
if(temp__4126__auto__){
var s__10065__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10065__$2)){
var c__3978__auto__ = cljs.core.chunk_first.call(null,s__10065__$2);
var size__3979__auto__ = cljs.core.count.call(null,c__3978__auto__);
var b__10067 = cljs.core.chunk_buffer.call(null,size__3979__auto__);
if((function (){var i__10066 = (0);
while(true){
if((i__10066 < size__3979__auto__)){
var availability__$2 = cljs.core._nth.call(null,c__3978__auto__,i__10066);
cljs.core.chunk_append.call(null,b__10067,availability__$2);

var G__10068 = (i__10066 + (1));
i__10066 = G__10068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10067),iter__10064.call(null,cljs.core.chunk_rest.call(null,s__10065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10067),null);
}
} else {
var availability__$2 = cljs.core.first.call(null,s__10065__$2);
return cljs.core.cons.call(null,availability__$2,iter__10064.call(null,cljs.core.rest.call(null,s__10065__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__3980__auto__.call(null,cljs.core.deref.call(null,availability__$1));
})()], null)], null);
});
phonecat_re_frame.core.battery = (function battery(battery__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.phone_info_template,"Battery",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Type",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,battery__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Talk Time",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"talkTime","talkTime",1765456966).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,battery__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Standby time (max)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"standbyTime","standbyTime",-1756136561).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,battery__$1))], null)], null)], null);
});
phonecat_re_frame.core.storage_and_memory = (function storage_and_memory(storage){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.phone_info_template,"Storage And Memory",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"RAM",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ram","ram",-1633008146).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,storage))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Internal Storage",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"flash","flash",934660619).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,storage))], null)], null)], null);
});
phonecat_re_frame.core.connectivity = (function connectivity(connectivity__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.phone_info_template,"Connectivity",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Network Support",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cell","cell",764245084).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,connectivity__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Wifi",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"wifi","wifi",-1882242824).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,connectivity__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Bluetooth",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"bluetooth","bluetooth",1738618990).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,connectivity__$1))], null)], null)], null);
});
phonecat_re_frame.core.android = (function android(android__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.phone_info_template,"Android",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"OS Version",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"os","os",795021913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,android__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"UI",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,android__$1))], null)], null)], null);
});
phonecat_re_frame.core.size_and_weight = (function size_and_weight(size_and_weight__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.phone_info_template,"Size And Weight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Dimensions",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,size_and_weight__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Weight",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,size_and_weight__$1))], null)], null)], null);
});
phonecat_re_frame.core.display = (function display(display__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.phone_info_template,"Display",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Screen size",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"screenSize","screenSize",2065547384).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,display__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Screen resolution",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"screenResolution","screenResolution",1582761518).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,display__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Touch screen",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"touchScreen","touchScreen",-73571513).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,display__$1))], null)], null)], null);
});
phonecat_re_frame.core.hardware = (function hardware(hardware__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.phone_info_template,"Hardware",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"CPU",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cpu","cpu",106162238).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hardware__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"USB",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"usb","usb",-1435901583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hardware__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Audio / headphone jack",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"audioJack","audioJack",1247568867).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hardware__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"FM Radio",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"fmRadio","fmRadio",116564596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hardware__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Accelerometer",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"accelerometer","accelerometer",10662678).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hardware__$1))], null)], null)], null);
});
phonecat_re_frame.core.camera = (function camera(camera__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.phone_info_template,"Camera",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Primary",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,camera__$1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Features",new cljs.core.Keyword(null,"value","value",305978217),clojure.string.join.call(null,", ",new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,camera__$1)))], null)], null)], null);
});
phonecat_re_frame.core.additional_features = (function additional_features(additional_features__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Additional Features"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),cljs.core.deref.call(null,additional_features__$1)], null)], null);
});
phonecat_re_frame.core.specs = (function specs(phone){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"specs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.availability,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"availiability","availiability",-308754604).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.battery,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"battery","battery",18489324).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.storage_and_memory,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"storage","storage",1867247511).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.connectivity,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"connectivity","connectivity",-977244116).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.android,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"android","android",-2084094573).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.display,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.hardware,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"hardware","hardware",515915884).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.camera,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.additional_features,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"additionalFeatures","additionalFeatures",-525926480).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone));
}))], null)], null);
});
phonecat_re_frame.core.phone_page = (function phone_page(p__10069){
var map__10071 = p__10069;
var map__10071__$1 = ((cljs.core.seq_QMARK_.call(null,map__10071))?cljs.core.apply.call(null,cljs.core.hash_map,map__10071):map__10071);
var phone_id = cljs.core.get.call(null,map__10071__$1,new cljs.core.Keyword(null,"phone-id","phone-id",-1076294753));
var phone = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phone-query","phone-query",-87436530),phone_id], null));
var image_url = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-image-url","selected-image-url",-1927683660),phone_id], null));
return ((function (phone,image_url,map__10071,map__10071__$1,phone_id){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,image_url),new cljs.core.Keyword(null,"class","class",-2030961996),"phone"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phone))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.thumbnails,phone], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.specs,phone], null)], null);
});
;})(phone,image_url,map__10071,map__10071__$1,phone_id))
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__9995__auto___10074 = (function (params__9996__auto__){
if(cljs.core.map_QMARK_.call(null,params__9996__auto__)){
var map__10072 = params__9996__auto__;
var map__10072__$1 = ((cljs.core.seq_QMARK_.call(null,map__10072))?cljs.core.apply.call(null,cljs.core.hash_map,map__10072):map__10072);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return phonecat_re_frame.core.home_page;},new cljs.core.Symbol("phonecat-re-frame.core","home-page","phonecat-re-frame.core/home-page",-1886221986,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"phonecat-re-frame.core","phonecat-re-frame.core",-1870748220,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/dhruv/Documents/engineering/experiments/phonecat-re-frame/src/cljs/phonecat_re_frame/core.cljs",17,7,187,187,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(phonecat_re_frame.core.home_page)?phonecat_re_frame.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9996__auto__)){
var vec__10073 = params__9996__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return phonecat_re_frame.core.home_page;},new cljs.core.Symbol("phonecat-re-frame.core","home-page","phonecat-re-frame.core/home-page",-1886221986,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"phonecat-re-frame.core","phonecat-re-frame.core",-1870748220,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/dhruv/Documents/engineering/experiments/phonecat-re-frame/src/cljs/phonecat_re_frame/core.cljs",17,7,187,187,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(phonecat_re_frame.core.home_page)?phonecat_re_frame.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/phones",action__9995__auto___10074);

var action__9995__auto___10077 = (function (params__9996__auto__){
if(cljs.core.map_QMARK_.call(null,params__9996__auto__)){
var map__10075 = params__9996__auto__;
var map__10075__$1 = ((cljs.core.seq_QMARK_.call(null,map__10075))?cljs.core.apply.call(null,cljs.core.hash_map,map__10075):map__10075);
var params = map__10075__$1;
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return phonecat_re_frame.core.phone_page;},new cljs.core.Symbol("phonecat-re-frame.core","phone-page","phonecat-re-frame.core/phone-page",-30725049,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"phonecat-re-frame.core","phonecat-re-frame.core",-1870748220,null),new cljs.core.Symbol(null,"phone-page","phone-page",-2089840054,null),"/Users/dhruv/Documents/engineering/experiments/phonecat-re-frame/src/cljs/phonecat_re_frame/core.cljs",18,7,322,322,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"phone-id","phone-id",564236774,null),new cljs.core.Keyword(null,"phone-id","phone-id",-1076294753)], null)], null))),null,(cljs.core.truth_(phonecat_re_frame.core.phone_page)?phonecat_re_frame.core.phone_page.cljs$lang$test:null)])));

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"params","params",710516235),params);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-phone-detail","load-phone-detail",-1950534767),new cljs.core.Keyword(null,"phone-id","phone-id",-1076294753).cljs$core$IFn$_invoke$arity$1(params)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9996__auto__)){
var map__10076 = params__9996__auto__;
var map__10076__$1 = ((cljs.core.seq_QMARK_.call(null,map__10076))?cljs.core.apply.call(null,cljs.core.hash_map,map__10076):map__10076);
var params = map__10076__$1;
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return phonecat_re_frame.core.phone_page;},new cljs.core.Symbol("phonecat-re-frame.core","phone-page","phonecat-re-frame.core/phone-page",-30725049,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"phonecat-re-frame.core","phonecat-re-frame.core",-1870748220,null),new cljs.core.Symbol(null,"phone-page","phone-page",-2089840054,null),"/Users/dhruv/Documents/engineering/experiments/phonecat-re-frame/src/cljs/phonecat_re_frame/core.cljs",18,7,322,322,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"phone-id","phone-id",564236774,null),new cljs.core.Keyword(null,"phone-id","phone-id",-1076294753)], null)], null))),null,(cljs.core.truth_(phonecat_re_frame.core.phone_page)?phonecat_re_frame.core.phone_page.cljs$lang$test:null)])));

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"params","params",710516235),params);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-phone-detail","load-phone-detail",-1950534767),new cljs.core.Keyword(null,"phone-id","phone-id",-1076294753).cljs$core$IFn$_invoke$arity$1(params)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/phones/:phone-id",action__9995__auto___10077);

phonecat_re_frame.core.redirect_to = (function redirect_to(resource){
secretary.core.dispatch_BANG_.call(null,resource);

return (new goog.History()).setToken(resource);
});
var action__9995__auto___10080 = (function (params__9996__auto__){
if(cljs.core.map_QMARK_.call(null,params__9996__auto__)){
var map__10078 = params__9996__auto__;
var map__10078__$1 = ((cljs.core.seq_QMARK_.call(null,map__10078))?cljs.core.apply.call(null,cljs.core.hash_map,map__10078):map__10078);
return phonecat_re_frame.core.redirect_to.call(null,"/phones");
} else {
if(cljs.core.vector_QMARK_.call(null,params__9996__auto__)){
var vec__10079 = params__9996__auto__;
return phonecat_re_frame.core.redirect_to.call(null,"/phones");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__9995__auto___10080);

phonecat_re_frame.core.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){
var G__10082 = (new goog.History());
goog.events.listen(G__10082,goog.history.EventType.NAVIGATE,((function (G__10082){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__10082))
);

G__10082.setEnabled(true);

return G__10082;
});
phonecat_re_frame.core.init_BANG_ = (function init_BANG_(){
phonecat_re_frame.core.hook_browser_navigation_BANG_.call(null);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-phones","load-phones",163559429)], null));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonecat_re_frame.core.current_page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map