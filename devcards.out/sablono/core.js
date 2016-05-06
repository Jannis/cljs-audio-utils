// Compiled by ClojureScript 1.7.228 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__19631__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__19623 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__19623,(0),null);
var body = cljs.core.nthnext.call(null,vec__19623,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__19631 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19632__i = 0, G__19632__a = new Array(arguments.length -  0);
while (G__19632__i < G__19632__a.length) {G__19632__a[G__19632__i] = arguments[G__19632__i + 0]; ++G__19632__i;}
  args = new cljs.core.IndexedSeq(G__19632__a,0);
} 
return G__19631__delegate.call(this,args);};
G__19631.cljs$lang$maxFixedArity = 0;
G__19631.cljs$lang$applyTo = (function (arglist__19633){
var args = cljs.core.seq(arglist__19633);
return G__19631__delegate(args);
});
G__19631.cljs$core$IFn$_invoke$arity$variadic = G__19631__delegate;
return G__19631;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7258__auto__ = (function sablono$core$update_arglists_$_iter__19638(s__19639){
return (new cljs.core.LazySeq(null,(function (){
var s__19639__$1 = s__19639;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19639__$1);
if(temp__4657__auto__){
var s__19639__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19639__$2)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,s__19639__$2);
var size__7257__auto__ = cljs.core.count.call(null,c__7256__auto__);
var b__19641 = cljs.core.chunk_buffer.call(null,size__7257__auto__);
if((function (){var i__19640 = (0);
while(true){
if((i__19640 < size__7257__auto__)){
var args = cljs.core._nth.call(null,c__7256__auto__,i__19640);
cljs.core.chunk_append.call(null,b__19641,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__19643 = (i__19640 + (1));
i__19640 = G__19643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19641),sablono$core$update_arglists_$_iter__19638.call(null,cljs.core.chunk_rest.call(null,s__19639__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19641),null);
}
} else {
var args = cljs.core.first.call(null,s__19639__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__19638.call(null,cljs.core.rest.call(null,s__19639__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7258__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7551__auto__ = [];
var len__7544__auto___19671 = arguments.length;
var i__7545__auto___19672 = (0);
while(true){
if((i__7545__auto___19672 < len__7544__auto___19671)){
args__7551__auto__.push((arguments[i__7545__auto___19672]));

var G__19673 = (i__7545__auto___19672 + (1));
i__7545__auto___19672 = G__19673;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7258__auto__ = (function sablono$core$iter__19652(s__19653){
return (new cljs.core.LazySeq(null,(function (){
var s__19653__$1 = s__19653;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19653__$1);
if(temp__4657__auto__){
var s__19653__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19653__$2)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,s__19653__$2);
var size__7257__auto__ = cljs.core.count.call(null,c__7256__auto__);
var b__19655 = cljs.core.chunk_buffer.call(null,size__7257__auto__);
if((function (){var i__19654 = (0);
while(true){
if((i__19654 < size__7257__auto__)){
var style = cljs.core._nth.call(null,c__7256__auto__,i__19654);
cljs.core.chunk_append.call(null,b__19655,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__19684 = (i__19654 + (1));
i__19654 = G__19684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19655),sablono$core$iter__19652.call(null,cljs.core.chunk_rest.call(null,s__19653__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19655),null);
}
} else {
var style = cljs.core.first.call(null,s__19653__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__19652.call(null,cljs.core.rest.call(null,s__19653__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7258__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq19646){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19646));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to19688 = (function sablono$core$link_to19688(var_args){
var args__7551__auto__ = [];
var len__7544__auto___19691 = arguments.length;
var i__7545__auto___19692 = (0);
while(true){
if((i__7545__auto___19692 < len__7544__auto___19691)){
args__7551__auto__.push((arguments[i__7545__auto___19692]));

var G__19693 = (i__7545__auto___19692 + (1));
i__7545__auto___19692 = G__19693;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.link_to19688.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.link_to19688.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to19688.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19688.cljs$lang$applyTo = (function (seq19689){
var G__19690 = cljs.core.first.call(null,seq19689);
var seq19689__$1 = cljs.core.next.call(null,seq19689);
return sablono.core.link_to19688.cljs$core$IFn$_invoke$arity$variadic(G__19690,seq19689__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to19688);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19694 = (function sablono$core$mail_to19694(var_args){
var args__7551__auto__ = [];
var len__7544__auto___19699 = arguments.length;
var i__7545__auto___19700 = (0);
while(true){
if((i__7545__auto___19700 < len__7544__auto___19699)){
args__7551__auto__.push((arguments[i__7545__auto___19700]));

var G__19701 = (i__7545__auto___19700 + (1));
i__7545__auto___19700 = G__19701;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.mail_to19694.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.mail_to19694.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19697){
var vec__19698 = p__19697;
var content = cljs.core.nth.call(null,vec__19698,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6486__auto__ = content;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19694.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19694.cljs$lang$applyTo = (function (seq19695){
var G__19696 = cljs.core.first.call(null,seq19695);
var seq19695__$1 = cljs.core.next.call(null,seq19695);
return sablono.core.mail_to19694.cljs$core$IFn$_invoke$arity$variadic(G__19696,seq19695__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to19694);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19703 = (function sablono$core$unordered_list19703(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7258__auto__ = (function sablono$core$unordered_list19703_$_iter__19708(s__19709){
return (new cljs.core.LazySeq(null,(function (){
var s__19709__$1 = s__19709;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19709__$1);
if(temp__4657__auto__){
var s__19709__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19709__$2)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,s__19709__$2);
var size__7257__auto__ = cljs.core.count.call(null,c__7256__auto__);
var b__19711 = cljs.core.chunk_buffer.call(null,size__7257__auto__);
if((function (){var i__19710 = (0);
while(true){
if((i__19710 < size__7257__auto__)){
var x = cljs.core._nth.call(null,c__7256__auto__,i__19710);
cljs.core.chunk_append.call(null,b__19711,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__19712 = (i__19710 + (1));
i__19710 = G__19712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19711),sablono$core$unordered_list19703_$_iter__19708.call(null,cljs.core.chunk_rest.call(null,s__19709__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19711),null);
}
} else {
var x = cljs.core.first.call(null,s__19709__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list19703_$_iter__19708.call(null,cljs.core.rest.call(null,s__19709__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7258__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list19703);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19713 = (function sablono$core$ordered_list19713(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7258__auto__ = (function sablono$core$ordered_list19713_$_iter__19719(s__19720){
return (new cljs.core.LazySeq(null,(function (){
var s__19720__$1 = s__19720;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19720__$1);
if(temp__4657__auto__){
var s__19720__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19720__$2)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,s__19720__$2);
var size__7257__auto__ = cljs.core.count.call(null,c__7256__auto__);
var b__19722 = cljs.core.chunk_buffer.call(null,size__7257__auto__);
if((function (){var i__19721 = (0);
while(true){
if((i__19721 < size__7257__auto__)){
var x = cljs.core._nth.call(null,c__7256__auto__,i__19721);
cljs.core.chunk_append.call(null,b__19722,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__19723 = (i__19721 + (1));
i__19721 = G__19723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19722),sablono$core$ordered_list19713_$_iter__19719.call(null,cljs.core.chunk_rest.call(null,s__19720__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19722),null);
}
} else {
var x = cljs.core.first.call(null,s__19720__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list19713_$_iter__19719.call(null,cljs.core.rest.call(null,s__19720__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7258__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list19713);
/**
 * Create an image element.
 */
sablono.core.image19724 = (function sablono$core$image19724(var_args){
var args19725 = [];
var len__7544__auto___19728 = arguments.length;
var i__7545__auto___19729 = (0);
while(true){
if((i__7545__auto___19729 < len__7544__auto___19728)){
args19725.push((arguments[i__7545__auto___19729]));

var G__19730 = (i__7545__auto___19729 + (1));
i__7545__auto___19729 = G__19730;
continue;
} else {
}
break;
}

var G__19727 = args19725.length;
switch (G__19727) {
case 1:
return sablono.core.image19724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19725.length)].join('')));

}
});

sablono.core.image19724.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image19724.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image19724.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image19724);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__19732_SHARP_,p2__19733_SHARP_){
return [cljs.core.str(p1__19732_SHARP_),cljs.core.str("["),cljs.core.str(p2__19733_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__19734_SHARP_,p2__19735_SHARP_){
return [cljs.core.str(p1__19734_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19735_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field19737 = (function sablono$core$color_field19737(var_args){
var args19738 = [];
var len__7544__auto___19864 = arguments.length;
var i__7545__auto___19865 = (0);
while(true){
if((i__7545__auto___19865 < len__7544__auto___19864)){
args19738.push((arguments[i__7545__auto___19865]));

var G__19866 = (i__7545__auto___19865 + (1));
i__7545__auto___19865 = G__19866;
continue;
} else {
}
break;
}

var G__19740 = args19738.length;
switch (G__19740) {
case 1:
return sablono.core.color_field19737.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19737.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19738.length)].join('')));

}
});

sablono.core.color_field19737.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.color_field19737.call(null,name__19611__auto__,null);
});

sablono.core.color_field19737.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.color_field19737.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field19737);

/**
 * Creates a date input field.
 */
sablono.core.date_field19741 = (function sablono$core$date_field19741(var_args){
var args19742 = [];
var len__7544__auto___19868 = arguments.length;
var i__7545__auto___19869 = (0);
while(true){
if((i__7545__auto___19869 < len__7544__auto___19868)){
args19742.push((arguments[i__7545__auto___19869]));

var G__19870 = (i__7545__auto___19869 + (1));
i__7545__auto___19869 = G__19870;
continue;
} else {
}
break;
}

var G__19745 = args19742.length;
switch (G__19745) {
case 1:
return sablono.core.date_field19741.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19741.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19742.length)].join('')));

}
});

sablono.core.date_field19741.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.date_field19741.call(null,name__19611__auto__,null);
});

sablono.core.date_field19741.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.date_field19741.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field19741);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19747 = (function sablono$core$datetime_field19747(var_args){
var args19748 = [];
var len__7544__auto___19874 = arguments.length;
var i__7545__auto___19875 = (0);
while(true){
if((i__7545__auto___19875 < len__7544__auto___19874)){
args19748.push((arguments[i__7545__auto___19875]));

var G__19877 = (i__7545__auto___19875 + (1));
i__7545__auto___19875 = G__19877;
continue;
} else {
}
break;
}

var G__19750 = args19748.length;
switch (G__19750) {
case 1:
return sablono.core.datetime_field19747.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19747.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19748.length)].join('')));

}
});

sablono.core.datetime_field19747.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.datetime_field19747.call(null,name__19611__auto__,null);
});

sablono.core.datetime_field19747.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.datetime_field19747.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field19747);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19753 = (function sablono$core$datetime_local_field19753(var_args){
var args19754 = [];
var len__7544__auto___19879 = arguments.length;
var i__7545__auto___19880 = (0);
while(true){
if((i__7545__auto___19880 < len__7544__auto___19879)){
args19754.push((arguments[i__7545__auto___19880]));

var G__19881 = (i__7545__auto___19880 + (1));
i__7545__auto___19880 = G__19881;
continue;
} else {
}
break;
}

var G__19758 = args19754.length;
switch (G__19758) {
case 1:
return sablono.core.datetime_local_field19753.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19753.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19754.length)].join('')));

}
});

sablono.core.datetime_local_field19753.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.datetime_local_field19753.call(null,name__19611__auto__,null);
});

sablono.core.datetime_local_field19753.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.datetime_local_field19753.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field19753);

/**
 * Creates a email input field.
 */
sablono.core.email_field19759 = (function sablono$core$email_field19759(var_args){
var args19760 = [];
var len__7544__auto___19883 = arguments.length;
var i__7545__auto___19884 = (0);
while(true){
if((i__7545__auto___19884 < len__7544__auto___19883)){
args19760.push((arguments[i__7545__auto___19884]));

var G__19885 = (i__7545__auto___19884 + (1));
i__7545__auto___19884 = G__19885;
continue;
} else {
}
break;
}

var G__19762 = args19760.length;
switch (G__19762) {
case 1:
return sablono.core.email_field19759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19760.length)].join('')));

}
});

sablono.core.email_field19759.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.email_field19759.call(null,name__19611__auto__,null);
});

sablono.core.email_field19759.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.email_field19759.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field19759);

/**
 * Creates a file input field.
 */
sablono.core.file_field19763 = (function sablono$core$file_field19763(var_args){
var args19764 = [];
var len__7544__auto___19887 = arguments.length;
var i__7545__auto___19888 = (0);
while(true){
if((i__7545__auto___19888 < len__7544__auto___19887)){
args19764.push((arguments[i__7545__auto___19888]));

var G__19889 = (i__7545__auto___19888 + (1));
i__7545__auto___19888 = G__19889;
continue;
} else {
}
break;
}

var G__19766 = args19764.length;
switch (G__19766) {
case 1:
return sablono.core.file_field19763.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19763.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19764.length)].join('')));

}
});

sablono.core.file_field19763.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.file_field19763.call(null,name__19611__auto__,null);
});

sablono.core.file_field19763.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.file_field19763.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field19763);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19767 = (function sablono$core$hidden_field19767(var_args){
var args19768 = [];
var len__7544__auto___19891 = arguments.length;
var i__7545__auto___19892 = (0);
while(true){
if((i__7545__auto___19892 < len__7544__auto___19891)){
args19768.push((arguments[i__7545__auto___19892]));

var G__19893 = (i__7545__auto___19892 + (1));
i__7545__auto___19892 = G__19893;
continue;
} else {
}
break;
}

var G__19770 = args19768.length;
switch (G__19770) {
case 1:
return sablono.core.hidden_field19767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19768.length)].join('')));

}
});

sablono.core.hidden_field19767.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.hidden_field19767.call(null,name__19611__auto__,null);
});

sablono.core.hidden_field19767.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.hidden_field19767.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field19767);

/**
 * Creates a month input field.
 */
sablono.core.month_field19771 = (function sablono$core$month_field19771(var_args){
var args19772 = [];
var len__7544__auto___19895 = arguments.length;
var i__7545__auto___19896 = (0);
while(true){
if((i__7545__auto___19896 < len__7544__auto___19895)){
args19772.push((arguments[i__7545__auto___19896]));

var G__19897 = (i__7545__auto___19896 + (1));
i__7545__auto___19896 = G__19897;
continue;
} else {
}
break;
}

var G__19775 = args19772.length;
switch (G__19775) {
case 1:
return sablono.core.month_field19771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field19771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19772.length)].join('')));

}
});

sablono.core.month_field19771.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.month_field19771.call(null,name__19611__auto__,null);
});

sablono.core.month_field19771.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.month_field19771.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field19771);

/**
 * Creates a number input field.
 */
sablono.core.number_field19776 = (function sablono$core$number_field19776(var_args){
var args19777 = [];
var len__7544__auto___19899 = arguments.length;
var i__7545__auto___19900 = (0);
while(true){
if((i__7545__auto___19900 < len__7544__auto___19899)){
args19777.push((arguments[i__7545__auto___19900]));

var G__19901 = (i__7545__auto___19900 + (1));
i__7545__auto___19900 = G__19901;
continue;
} else {
}
break;
}

var G__19779 = args19777.length;
switch (G__19779) {
case 1:
return sablono.core.number_field19776.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field19776.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19777.length)].join('')));

}
});

sablono.core.number_field19776.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.number_field19776.call(null,name__19611__auto__,null);
});

sablono.core.number_field19776.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.number_field19776.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field19776);

/**
 * Creates a password input field.
 */
sablono.core.password_field19782 = (function sablono$core$password_field19782(var_args){
var args19783 = [];
var len__7544__auto___19903 = arguments.length;
var i__7545__auto___19904 = (0);
while(true){
if((i__7545__auto___19904 < len__7544__auto___19903)){
args19783.push((arguments[i__7545__auto___19904]));

var G__19906 = (i__7545__auto___19904 + (1));
i__7545__auto___19904 = G__19906;
continue;
} else {
}
break;
}

var G__19786 = args19783.length;
switch (G__19786) {
case 1:
return sablono.core.password_field19782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field19782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19783.length)].join('')));

}
});

sablono.core.password_field19782.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.password_field19782.call(null,name__19611__auto__,null);
});

sablono.core.password_field19782.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.password_field19782.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field19782);

/**
 * Creates a range input field.
 */
sablono.core.range_field19793 = (function sablono$core$range_field19793(var_args){
var args19794 = [];
var len__7544__auto___19908 = arguments.length;
var i__7545__auto___19909 = (0);
while(true){
if((i__7545__auto___19909 < len__7544__auto___19908)){
args19794.push((arguments[i__7545__auto___19909]));

var G__19910 = (i__7545__auto___19909 + (1));
i__7545__auto___19909 = G__19910;
continue;
} else {
}
break;
}

var G__19802 = args19794.length;
switch (G__19802) {
case 1:
return sablono.core.range_field19793.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field19793.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19794.length)].join('')));

}
});

sablono.core.range_field19793.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.range_field19793.call(null,name__19611__auto__,null);
});

sablono.core.range_field19793.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.range_field19793.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field19793);

/**
 * Creates a search input field.
 */
sablono.core.search_field19809 = (function sablono$core$search_field19809(var_args){
var args19810 = [];
var len__7544__auto___19912 = arguments.length;
var i__7545__auto___19913 = (0);
while(true){
if((i__7545__auto___19913 < len__7544__auto___19912)){
args19810.push((arguments[i__7545__auto___19913]));

var G__19914 = (i__7545__auto___19913 + (1));
i__7545__auto___19913 = G__19914;
continue;
} else {
}
break;
}

var G__19818 = args19810.length;
switch (G__19818) {
case 1:
return sablono.core.search_field19809.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field19809.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19810.length)].join('')));

}
});

sablono.core.search_field19809.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.search_field19809.call(null,name__19611__auto__,null);
});

sablono.core.search_field19809.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.search_field19809.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field19809);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field19825 = (function sablono$core$tel_field19825(var_args){
var args19826 = [];
var len__7544__auto___19916 = arguments.length;
var i__7545__auto___19917 = (0);
while(true){
if((i__7545__auto___19917 < len__7544__auto___19916)){
args19826.push((arguments[i__7545__auto___19917]));

var G__19918 = (i__7545__auto___19917 + (1));
i__7545__auto___19917 = G__19918;
continue;
} else {
}
break;
}

var G__19828 = args19826.length;
switch (G__19828) {
case 1:
return sablono.core.tel_field19825.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field19825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19826.length)].join('')));

}
});

sablono.core.tel_field19825.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.tel_field19825.call(null,name__19611__auto__,null);
});

sablono.core.tel_field19825.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.tel_field19825.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field19825);

/**
 * Creates a text input field.
 */
sablono.core.text_field19841 = (function sablono$core$text_field19841(var_args){
var args19848 = [];
var len__7544__auto___19920 = arguments.length;
var i__7545__auto___19921 = (0);
while(true){
if((i__7545__auto___19921 < len__7544__auto___19920)){
args19848.push((arguments[i__7545__auto___19921]));

var G__19922 = (i__7545__auto___19921 + (1));
i__7545__auto___19921 = G__19922;
continue;
} else {
}
break;
}

var G__19850 = args19848.length;
switch (G__19850) {
case 1:
return sablono.core.text_field19841.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field19841.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19848.length)].join('')));

}
});

sablono.core.text_field19841.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.text_field19841.call(null,name__19611__auto__,null);
});

sablono.core.text_field19841.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.text_field19841.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field19841);

/**
 * Creates a time input field.
 */
sablono.core.time_field19851 = (function sablono$core$time_field19851(var_args){
var args19852 = [];
var len__7544__auto___19924 = arguments.length;
var i__7545__auto___19925 = (0);
while(true){
if((i__7545__auto___19925 < len__7544__auto___19924)){
args19852.push((arguments[i__7545__auto___19925]));

var G__19926 = (i__7545__auto___19925 + (1));
i__7545__auto___19925 = G__19926;
continue;
} else {
}
break;
}

var G__19854 = args19852.length;
switch (G__19854) {
case 1:
return sablono.core.time_field19851.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field19851.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19852.length)].join('')));

}
});

sablono.core.time_field19851.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.time_field19851.call(null,name__19611__auto__,null);
});

sablono.core.time_field19851.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.time_field19851.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field19851);

/**
 * Creates a url input field.
 */
sablono.core.url_field19855 = (function sablono$core$url_field19855(var_args){
var args19856 = [];
var len__7544__auto___19928 = arguments.length;
var i__7545__auto___19929 = (0);
while(true){
if((i__7545__auto___19929 < len__7544__auto___19928)){
args19856.push((arguments[i__7545__auto___19929]));

var G__19930 = (i__7545__auto___19929 + (1));
i__7545__auto___19929 = G__19930;
continue;
} else {
}
break;
}

var G__19859 = args19856.length;
switch (G__19859) {
case 1:
return sablono.core.url_field19855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field19855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19856.length)].join('')));

}
});

sablono.core.url_field19855.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.url_field19855.call(null,name__19611__auto__,null);
});

sablono.core.url_field19855.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.url_field19855.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field19855);

/**
 * Creates a week input field.
 */
sablono.core.week_field19860 = (function sablono$core$week_field19860(var_args){
var args19861 = [];
var len__7544__auto___19932 = arguments.length;
var i__7545__auto___19933 = (0);
while(true){
if((i__7545__auto___19933 < len__7544__auto___19932)){
args19861.push((arguments[i__7545__auto___19933]));

var G__19934 = (i__7545__auto___19933 + (1));
i__7545__auto___19933 = G__19934;
continue;
} else {
}
break;
}

var G__19863 = args19861.length;
switch (G__19863) {
case 1:
return sablono.core.week_field19860.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field19860.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19861.length)].join('')));

}
});

sablono.core.week_field19860.cljs$core$IFn$_invoke$arity$1 = (function (name__19611__auto__){
return sablono.core.week_field19860.call(null,name__19611__auto__,null);
});

sablono.core.week_field19860.cljs$core$IFn$_invoke$arity$2 = (function (name__19611__auto__,value__19612__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19611__auto__,value__19612__auto__);
});

sablono.core.week_field19860.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field19860);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box19936 = (function sablono$core$check_box19936(var_args){
var args19937 = [];
var len__7544__auto___19941 = arguments.length;
var i__7545__auto___19942 = (0);
while(true){
if((i__7545__auto___19942 < len__7544__auto___19941)){
args19937.push((arguments[i__7545__auto___19942]));

var G__19943 = (i__7545__auto___19942 + (1));
i__7545__auto___19942 = G__19943;
continue;
} else {
}
break;
}

var G__19939 = args19937.length;
switch (G__19939) {
case 1:
return sablono.core.check_box19936.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box19936.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box19936.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19937.length)].join('')));

}
});

sablono.core.check_box19936.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box19936.call(null,name,null);
});

sablono.core.check_box19936.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box19936.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box19936.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box19936.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box19936);
/**
 * Creates a radio button.
 */
sablono.core.radio_button19945 = (function sablono$core$radio_button19945(var_args){
var args19946 = [];
var len__7544__auto___19949 = arguments.length;
var i__7545__auto___19950 = (0);
while(true){
if((i__7545__auto___19950 < len__7544__auto___19949)){
args19946.push((arguments[i__7545__auto___19950]));

var G__19951 = (i__7545__auto___19950 + (1));
i__7545__auto___19950 = G__19951;
continue;
} else {
}
break;
}

var G__19948 = args19946.length;
switch (G__19948) {
case 1:
return sablono.core.radio_button19945.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button19945.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button19945.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19946.length)].join('')));

}
});

sablono.core.radio_button19945.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button19945.call(null,group,null);
});

sablono.core.radio_button19945.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button19945.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button19945.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button19945.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button19945);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options19957 = (function sablono$core$select_options19957(coll){
var iter__7258__auto__ = (function sablono$core$select_options19957_$_iter__19970(s__19971){
return (new cljs.core.LazySeq(null,(function (){
var s__19971__$1 = s__19971;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19971__$1);
if(temp__4657__auto__){
var s__19971__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19971__$2)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,s__19971__$2);
var size__7257__auto__ = cljs.core.count.call(null,c__7256__auto__);
var b__19973 = cljs.core.chunk_buffer.call(null,size__7257__auto__);
if((function (){var i__19972 = (0);
while(true){
if((i__19972 < size__7257__auto__)){
var x = cljs.core._nth.call(null,c__7256__auto__,i__19972);
cljs.core.chunk_append.call(null,b__19973,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19976 = x;
var text = cljs.core.nth.call(null,vec__19976,(0),null);
var val = cljs.core.nth.call(null,vec__19976,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__19976,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options19957.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__19978 = (i__19972 + (1));
i__19972 = G__19978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19973),sablono$core$select_options19957_$_iter__19970.call(null,cljs.core.chunk_rest.call(null,s__19971__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19973),null);
}
} else {
var x = cljs.core.first.call(null,s__19971__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19977 = x;
var text = cljs.core.nth.call(null,vec__19977,(0),null);
var val = cljs.core.nth.call(null,vec__19977,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__19977,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options19957.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options19957_$_iter__19970.call(null,cljs.core.rest.call(null,s__19971__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7258__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options19957);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down19980 = (function sablono$core$drop_down19980(var_args){
var args19981 = [];
var len__7544__auto___19985 = arguments.length;
var i__7545__auto___19986 = (0);
while(true){
if((i__7545__auto___19986 < len__7544__auto___19985)){
args19981.push((arguments[i__7545__auto___19986]));

var G__19988 = (i__7545__auto___19986 + (1));
i__7545__auto___19986 = G__19988;
continue;
} else {
}
break;
}

var G__19983 = args19981.length;
switch (G__19983) {
case 2:
return sablono.core.drop_down19980.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down19980.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19981.length)].join('')));

}
});

sablono.core.drop_down19980.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down19980.call(null,name,options,null);
});

sablono.core.drop_down19980.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down19980.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down19980);
/**
 * Creates a text area element.
 */
sablono.core.text_area19990 = (function sablono$core$text_area19990(var_args){
var args19991 = [];
var len__7544__auto___19995 = arguments.length;
var i__7545__auto___19996 = (0);
while(true){
if((i__7545__auto___19996 < len__7544__auto___19995)){
args19991.push((arguments[i__7545__auto___19996]));

var G__19997 = (i__7545__auto___19996 + (1));
i__7545__auto___19996 = G__19997;
continue;
} else {
}
break;
}

var G__19994 = args19991.length;
switch (G__19994) {
case 1:
return sablono.core.text_area19990.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area19990.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19991.length)].join('')));

}
});

sablono.core.text_area19990.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area19990.call(null,name,null);
});

sablono.core.text_area19990.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area19990.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area19990);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label19999 = (function sablono$core$label19999(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label19999);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20000 = (function sablono$core$submit_button20000(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20000);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20001 = (function sablono$core$reset_button20001(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20001);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20002 = (function sablono$core$form_to20002(var_args){
var args__7551__auto__ = [];
var len__7544__auto___20007 = arguments.length;
var i__7545__auto___20008 = (0);
while(true){
if((i__7545__auto___20008 < len__7544__auto___20007)){
args__7551__auto__.push((arguments[i__7545__auto___20008]));

var G__20009 = (i__7545__auto___20008 + (1));
i__7545__auto___20008 = G__20009;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.form_to20002.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.form_to20002.cljs$core$IFn$_invoke$arity$variadic = (function (p__20005,body){
var vec__20006 = p__20005;
var method = cljs.core.nth.call(null,vec__20006,(0),null);
var action = cljs.core.nth.call(null,vec__20006,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to20002.cljs$lang$maxFixedArity = (1);

sablono.core.form_to20002.cljs$lang$applyTo = (function (seq20003){
var G__20004 = cljs.core.first.call(null,seq20003);
var seq20003__$1 = cljs.core.next.call(null,seq20003);
return sablono.core.form_to20002.cljs$core$IFn$_invoke$arity$variadic(G__20004,seq20003__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20002);

//# sourceMappingURL=core.js.map