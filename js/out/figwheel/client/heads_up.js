// Compiled by ClojureScript 0.0-2913 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__22857_22865 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__22858_22866 = null;
var count__22859_22867 = (0);
var i__22860_22868 = (0);
while(true){
if((i__22860_22868 < count__22859_22867)){
var k_22869 = cljs.core._nth.call(null,chunk__22858_22866,i__22860_22868);
e.setAttribute(cljs.core.name.call(null,k_22869),cljs.core.get.call(null,attrs,k_22869));

var G__22870 = seq__22857_22865;
var G__22871 = chunk__22858_22866;
var G__22872 = count__22859_22867;
var G__22873 = (i__22860_22868 + (1));
seq__22857_22865 = G__22870;
chunk__22858_22866 = G__22871;
count__22859_22867 = G__22872;
i__22860_22868 = G__22873;
continue;
} else {
var temp__4126__auto___22874 = cljs.core.seq.call(null,seq__22857_22865);
if(temp__4126__auto___22874){
var seq__22857_22875__$1 = temp__4126__auto___22874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22857_22875__$1)){
var c__4011__auto___22876 = cljs.core.chunk_first.call(null,seq__22857_22875__$1);
var G__22877 = cljs.core.chunk_rest.call(null,seq__22857_22875__$1);
var G__22878 = c__4011__auto___22876;
var G__22879 = cljs.core.count.call(null,c__4011__auto___22876);
var G__22880 = (0);
seq__22857_22865 = G__22877;
chunk__22858_22866 = G__22878;
count__22859_22867 = G__22879;
i__22860_22868 = G__22880;
continue;
} else {
var k_22881 = cljs.core.first.call(null,seq__22857_22875__$1);
e.setAttribute(cljs.core.name.call(null,k_22881),cljs.core.get.call(null,attrs,k_22881));

var G__22882 = cljs.core.next.call(null,seq__22857_22875__$1);
var G__22883 = null;
var G__22884 = (0);
var G__22885 = (0);
seq__22857_22865 = G__22882;
chunk__22858_22866 = G__22883;
count__22859_22867 = G__22884;
i__22860_22868 = G__22885;
continue;
}
} else {
}
}
break;
}

var seq__22861_22886 = cljs.core.seq.call(null,children);
var chunk__22862_22887 = null;
var count__22863_22888 = (0);
var i__22864_22889 = (0);
while(true){
if((i__22864_22889 < count__22863_22888)){
var ch_22890 = cljs.core._nth.call(null,chunk__22862_22887,i__22864_22889);
e.appendChild(ch_22890);

var G__22891 = seq__22861_22886;
var G__22892 = chunk__22862_22887;
var G__22893 = count__22863_22888;
var G__22894 = (i__22864_22889 + (1));
seq__22861_22886 = G__22891;
chunk__22862_22887 = G__22892;
count__22863_22888 = G__22893;
i__22864_22889 = G__22894;
continue;
} else {
var temp__4126__auto___22895 = cljs.core.seq.call(null,seq__22861_22886);
if(temp__4126__auto___22895){
var seq__22861_22896__$1 = temp__4126__auto___22895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22861_22896__$1)){
var c__4011__auto___22897 = cljs.core.chunk_first.call(null,seq__22861_22896__$1);
var G__22898 = cljs.core.chunk_rest.call(null,seq__22861_22896__$1);
var G__22899 = c__4011__auto___22897;
var G__22900 = cljs.core.count.call(null,c__4011__auto___22897);
var G__22901 = (0);
seq__22861_22886 = G__22898;
chunk__22862_22887 = G__22899;
count__22863_22888 = G__22900;
i__22864_22889 = G__22901;
continue;
} else {
var ch_22902 = cljs.core.first.call(null,seq__22861_22896__$1);
e.appendChild(ch_22902);

var G__22903 = cljs.core.next.call(null,seq__22861_22896__$1);
var G__22904 = null;
var G__22905 = (0);
var G__22906 = (0);
seq__22861_22886 = G__22903;
chunk__22862_22887 = G__22904;
count__22863_22888 = G__22905;
i__22864_22889 = G__22906;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__22907__i = 0, G__22907__a = new Array(arguments.length -  2);
while (G__22907__i < G__22907__a.length) {G__22907__a[G__22907__i] = arguments[G__22907__i + 2]; ++G__22907__i;}
  children = new cljs.core.IndexedSeq(G__22907__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__22908){
var t = cljs.core.first(arglist__22908);
arglist__22908 = cljs.core.next(arglist__22908);
var attrs = cljs.core.first(arglist__22908);
var children = cljs.core.rest(arglist__22908);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4121__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4122__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4123__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4124__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4125__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4121__auto__,prefer_table__4122__auto__,method_cache__4123__auto__,cached_hierarchy__4124__auto__,hierarchy__4125__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4121__auto__,prefer_table__4122__auto__,method_cache__4123__auto__,cached_hierarchy__4124__auto__,hierarchy__4125__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4125__auto__,method_table__4121__auto__,prefer_table__4122__auto__,method_cache__4123__auto__,cached_hierarchy__4124__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_22909 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_22909.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_22909.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_22909.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_22909);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__22910,st_map){
var map__22914 = p__22910;
var map__22914__$1 = ((cljs.core.seq_QMARK_.call(null,map__22914))?cljs.core.apply.call(null,cljs.core.hash_map,map__22914):map__22914);
var container_el = cljs.core.get.call(null,map__22914__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__22914,map__22914__$1,container_el){
return (function (p__22915){
var vec__22916 = p__22915;
var k = cljs.core.nth.call(null,vec__22916,(0),null);
var v = cljs.core.nth.call(null,vec__22916,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__22914,map__22914__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__22917,dom_str){
var map__22919 = p__22917;
var map__22919__$1 = ((cljs.core.seq_QMARK_.call(null,map__22919))?cljs.core.apply.call(null,cljs.core.hash_map,map__22919):map__22919);
var c = map__22919__$1;
var content_area_el = cljs.core.get.call(null,map__22919__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__22920){
var map__22922 = p__22920;
var map__22922__$1 = ((cljs.core.seq_QMARK_.call(null,map__22922))?cljs.core.apply.call(null,cljs.core.hash_map,map__22922):map__22922);
var content_area_el = cljs.core.get.call(null,map__22922__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__7158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto__){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto__){
return (function (state_22964){
var state_val_22965 = (state_22964[(1)]);
if((state_val_22965 === (2))){
var inst_22949 = (state_22964[(7)]);
var inst_22958 = (state_22964[(2)]);
var inst_22959 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_22960 = ["auto"];
var inst_22961 = cljs.core.PersistentHashMap.fromArrays(inst_22959,inst_22960);
var inst_22962 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22949,inst_22961);
var state_22964__$1 = (function (){var statearr_22966 = state_22964;
(statearr_22966[(8)] = inst_22958);

return statearr_22966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22964__$1,inst_22962);
} else {
if((state_val_22965 === (1))){
var inst_22949 = (state_22964[(7)]);
var inst_22949__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22950 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22951 = ["10px","10px","100%","68px","1.0"];
var inst_22952 = cljs.core.PersistentHashMap.fromArrays(inst_22950,inst_22951);
var inst_22953 = cljs.core.merge.call(null,inst_22952,style);
var inst_22954 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22949__$1,inst_22953);
var inst_22955 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22949__$1,msg);
var inst_22956 = cljs.core.async.timeout.call(null,(300));
var state_22964__$1 = (function (){var statearr_22967 = state_22964;
(statearr_22967[(9)] = inst_22954);

(statearr_22967[(10)] = inst_22955);

(statearr_22967[(7)] = inst_22949__$1);

return statearr_22967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22964__$1,(2),inst_22956);
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
var statearr_22971 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22971[(0)] = state_machine__7103__auto__);

(statearr_22971[(1)] = (1));

return statearr_22971;
});
var state_machine__7103__auto____1 = (function (state_22964){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_22964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e22972){if((e22972 instanceof Object)){
var ex__7106__auto__ = e22972;
var statearr_22973_22975 = state_22964;
(statearr_22973_22975[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22976 = state_22964;
state_22964 = G__22976;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_22964){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_22964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto__))
})();
var state__7160__auto__ = (function (){var statearr_22974 = f__7159__auto__.call(null);
(statearr_22974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto__);

return statearr_22974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto__))
);

return c__7158__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__22978 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__22978,(0),null);
var ln = cljs.core.nth.call(null,vec__22978,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__22981 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__22981,(0),null);
var file_line = cljs.core.nth.call(null,vec__22981,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__22981,file_name,file_line){
return (function (p1__22979_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__22979_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__22981,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__22983 = figwheel.client.heads_up.ensure_container.call(null);
var map__22983__$1 = ((cljs.core.seq_QMARK_.call(null,map__22983))?cljs.core.apply.call(null,cljs.core.hash_map,map__22983):map__22983);
var content_area_el = cljs.core.get.call(null,map__22983__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__7158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto__){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto__){
return (function (state_23030){
var state_val_23031 = (state_23030[(1)]);
if((state_val_23031 === (3))){
var inst_23013 = (state_23030[(7)]);
var inst_23027 = (state_23030[(2)]);
var inst_23028 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23013,"");
var state_23030__$1 = (function (){var statearr_23032 = state_23030;
(statearr_23032[(8)] = inst_23027);

return statearr_23032;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23030__$1,inst_23028);
} else {
if((state_val_23031 === (2))){
var inst_23013 = (state_23030[(7)]);
var inst_23020 = (state_23030[(2)]);
var inst_23021 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23022 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23023 = cljs.core.PersistentHashMap.fromArrays(inst_23021,inst_23022);
var inst_23024 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23013,inst_23023);
var inst_23025 = cljs.core.async.timeout.call(null,(200));
var state_23030__$1 = (function (){var statearr_23033 = state_23030;
(statearr_23033[(9)] = inst_23024);

(statearr_23033[(10)] = inst_23020);

return statearr_23033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23030__$1,(3),inst_23025);
} else {
if((state_val_23031 === (1))){
var inst_23013 = (state_23030[(7)]);
var inst_23013__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23014 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23015 = ["0.0"];
var inst_23016 = cljs.core.PersistentHashMap.fromArrays(inst_23014,inst_23015);
var inst_23017 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23013__$1,inst_23016);
var inst_23018 = cljs.core.async.timeout.call(null,(300));
var state_23030__$1 = (function (){var statearr_23034 = state_23030;
(statearr_23034[(11)] = inst_23017);

(statearr_23034[(7)] = inst_23013__$1);

return statearr_23034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23030__$1,(2),inst_23018);
} else {
return null;
}
}
}
});})(c__7158__auto__))
;
return ((function (switch__7102__auto__,c__7158__auto__){
return (function() {
var state_machine__7103__auto__ = null;
var state_machine__7103__auto____0 = (function (){
var statearr_23038 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23038[(0)] = state_machine__7103__auto__);

(statearr_23038[(1)] = (1));

return statearr_23038;
});
var state_machine__7103__auto____1 = (function (state_23030){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_23030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e23039){if((e23039 instanceof Object)){
var ex__7106__auto__ = e23039;
var statearr_23040_23042 = state_23030;
(statearr_23040_23042[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23043 = state_23030;
state_23030 = G__23043;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_23030){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_23030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto__))
})();
var state__7160__auto__ = (function (){var statearr_23041 = f__7159__auto__.call(null);
(statearr_23041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto__);

return statearr_23041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto__))
);

return c__7158__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__7158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7158__auto__){
return (function (){
var f__7159__auto__ = (function (){var switch__7102__auto__ = ((function (c__7158__auto__){
return (function (state_23075){
var state_val_23076 = (state_23075[(1)]);
if((state_val_23076 === (4))){
var inst_23073 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23075__$1,inst_23073);
} else {
if((state_val_23076 === (3))){
var inst_23070 = (state_23075[(2)]);
var inst_23071 = figwheel.client.heads_up.clear.call(null);
var state_23075__$1 = (function (){var statearr_23077 = state_23075;
(statearr_23077[(7)] = inst_23070);

return statearr_23077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23075__$1,(4),inst_23071);
} else {
if((state_val_23076 === (2))){
var inst_23067 = (state_23075[(2)]);
var inst_23068 = cljs.core.async.timeout.call(null,(400));
var state_23075__$1 = (function (){var statearr_23078 = state_23075;
(statearr_23078[(8)] = inst_23067);

return statearr_23078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23075__$1,(3),inst_23068);
} else {
if((state_val_23076 === (1))){
var inst_23065 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23075__$1,(2),inst_23065);
} else {
return null;
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
var statearr_23082 = [null,null,null,null,null,null,null,null,null];
(statearr_23082[(0)] = state_machine__7103__auto__);

(statearr_23082[(1)] = (1));

return statearr_23082;
});
var state_machine__7103__auto____1 = (function (state_23075){
while(true){
var ret_value__7104__auto__ = (function (){try{while(true){
var result__7105__auto__ = switch__7102__auto__.call(null,state_23075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7105__auto__;
}
break;
}
}catch (e23083){if((e23083 instanceof Object)){
var ex__7106__auto__ = e23083;
var statearr_23084_23086 = state_23075;
(statearr_23084_23086[(5)] = ex__7106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23087 = state_23075;
state_23075 = G__23087;
continue;
} else {
return ret_value__7104__auto__;
}
break;
}
});
state_machine__7103__auto__ = function(state_23075){
switch(arguments.length){
case 0:
return state_machine__7103__auto____0.call(this);
case 1:
return state_machine__7103__auto____1.call(this,state_23075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7103__auto____0;
state_machine__7103__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7103__auto____1;
return state_machine__7103__auto__;
})()
;})(switch__7102__auto__,c__7158__auto__))
})();
var state__7160__auto__ = (function (){var statearr_23085 = f__7159__auto__.call(null);
(statearr_23085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7158__auto__);

return statearr_23085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7160__auto__);
});})(c__7158__auto__))
);

return c__7158__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map