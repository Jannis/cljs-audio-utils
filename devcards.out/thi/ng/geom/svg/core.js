// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.svg.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.color.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.strf.core');
thi.ng.geom.svg.core.stroke_round = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round"], null);
thi.ng.geom.svg.core.xml_preamble = "<?xml version=\"1.0\"?>\n";
thi.ng.geom.svg.core._STAR_ff_STAR_ = thi.ng.strf.core.float$.call(null,(2));
thi.ng.geom.svg.core._STAR_fmt_vec_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_vec_STAR_(p){
return [cljs.core.str(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p))),cljs.core.str(","),cljs.core.str(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))))].join('');
});
thi.ng.geom.svg.core._STAR_fmt_percent_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_percent_STAR_(x){
return [cljs.core.str(((x * (100)) | (0))),cljs.core.str("%")].join('');
});
thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["matrix(",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,")"], null);
thi.ng.geom.svg.core.point_seq_format2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format3 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format4 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format = (function thi$ng$geom$svg$core$point_seq_format(n){
var G__12751 = (n | (0));
switch (G__12751) {
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);

break;
case (2):
return thi.ng.geom.svg.core.point_seq_format2;

break;
case (3):
return thi.ng.geom.svg.core.point_seq_format3;

break;
case (4):
return thi.ng.geom.svg.core.point_seq_format4;

break;
default:
return cljs.core.interpose.call(null," ",cljs.core.repeat.call(null,n,thi.ng.geom.svg.core._STAR_fmt_vec_STAR_));

}
});
thi.ng.geom.svg.core.path_segment_formats = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"L","L",-1038307519),new cljs.core.Keyword(null,"M","M",-1755742206),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"Z","Z",459124588),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["l",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null)]);

/**
 * @interface
 */
thi.ng.geom.svg.core.PSVGConvert = function(){};

thi.ng.geom.svg.core.as_svg = (function thi$ng$geom$svg$core$as_svg(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$svg$core$PSVGConvert$as_svg$arity$2 == null)))){
return _.thi$ng$geom$svg$core$PSVGConvert$as_svg$arity$2(_,opts);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.svg.core.as_svg[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,opts);
} else {
var m__7142__auto____$1 = (thi.ng.geom.svg.core.as_svg["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PSVGConvert.as-svg",_);
}
}
}
});

thi.ng.geom.svg.core.color_attrib = (function thi$ng$geom$svg$core$color_attrib(attribs,id){
var temp__4655__auto__ = attribs.call(null,id);
if(cljs.core.truth_(temp__4655__auto__)){
var att = temp__4655__auto__;
if(typeof att === 'string'){
return attribs;
} else {
return cljs.core.assoc.call(null,attribs,id,cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,att)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.matrix_attrib = (function thi$ng$geom$svg$core$matrix_attrib(attribs,id){
var temp__4655__auto__ = attribs.call(null,id);
if(cljs.core.truth_(temp__4655__auto__)){
var mat = temp__4655__auto__;
if(typeof mat === 'string'){
return attribs;
} else {
var vec__12758 = mat;
var a = cljs.core.nth.call(null,vec__12758,(0),null);
var c = cljs.core.nth.call(null,vec__12758,(1),null);
var e = cljs.core.nth.call(null,vec__12758,(2),null);
var b = cljs.core.nth.call(null,vec__12758,(3),null);
var d = cljs.core.nth.call(null,vec__12758,(4),null);
var f = cljs.core.nth.call(null,vec__12758,(5),null);
return cljs.core.assoc.call(null,attribs,id,cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.filter_attribs = (function thi$ng$geom$svg$core$filter_attribs(attribs){
var acc = cljs.core.transient$.call(null,attribs);
var ks = cljs.core.keys.call(null,attribs);
while(true){
if(cljs.core.truth_(ks)){
var G__12762 = ((cljs.core._EQ_.call(null,"__",cljs.core.subs.call(null,cljs.core.name.call(null,cljs.core.first.call(null,ks)),(0),(2))))?cljs.core.dissoc_BANG_.call(null,acc,cljs.core.first.call(null,ks)):acc);
var G__12763 = cljs.core.next.call(null,ks);
acc = G__12762;
ks = G__12763;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,acc);
}
break;
}
});
thi.ng.geom.svg.core.svg_attribs = (function thi$ng$geom$svg$core$svg_attribs(attribs,base){
if(cljs.core.seq.call(null,attribs)){
return cljs.core.into.call(null,thi.ng.geom.svg.core.matrix_attrib.call(null,thi.ng.geom.svg.core.color_attrib.call(null,thi.ng.geom.svg.core.color_attrib.call(null,thi.ng.geom.svg.core.filter_attribs.call(null,attribs),new cljs.core.Keyword(null,"stroke","stroke",1741823555)),new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.Keyword(null,"transform","transform",1381301764)),base);
} else {
return base;
}
});
thi.ng.geom.svg.core.svg = (function thi$ng$geom$svg$core$svg(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12767 = arguments.length;
var i__7545__auto___12768 = (0);
while(true){
if((i__7545__auto___12768 < len__7544__auto___12767)){
args__7551__auto__.push((arguments[i__7545__auto___12768]));

var G__12769 = (i__7545__auto___12768 + (1));
i__7545__auto___12768 = G__12769;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 3, ["xmlns","http://www.w3.org/2000/svg","xmlns:xlink","http://www.w3.org/1999/xlink","version","1.1"], null)),body], null);
});

thi.ng.geom.svg.core.svg.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.svg.cljs$lang$applyTo = (function (seq12765){
var G__12766 = cljs.core.first.call(null,seq12765);
var seq12765__$1 = cljs.core.next.call(null,seq12765);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic(G__12766,seq12765__$1);
});
thi.ng.geom.svg.core.defs = (function thi$ng$geom$svg$core$defs(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12774 = arguments.length;
var i__7545__auto___12775 = (0);
while(true){
if((i__7545__auto___12775 < len__7544__auto___12774)){
args__7551__auto__.push((arguments[i__7545__auto___12775]));

var G__12776 = (i__7545__auto___12775 + (1));
i__7545__auto___12775 = G__12776;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic = (function (defs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),defs], null);
});

thi.ng.geom.svg.core.defs.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.defs.cljs$lang$applyTo = (function (seq12770){
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12770));
});
thi.ng.geom.svg.core.gradient_stop = (function thi$ng$geom$svg$core$gradient_stop(p__12787){
var vec__12789 = p__12787;
var pos = cljs.core.nth.call(null,vec__12789,(0),null);
var col = cljs.core.nth.call(null,vec__12789,(1),null);
var col__$1 = ((typeof col === 'string')?col:cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,col)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.call(null,pos),new cljs.core.Keyword(null,"stop-color","stop-color",316173955),col__$1], null)], null);
});
thi.ng.geom.svg.core.linear_gradient = (function thi$ng$geom$svg$core$linear_gradient(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12794 = arguments.length;
var i__7545__auto___12795 = (0);
while(true){
if((i__7545__auto___12795 < len__7544__auto___12794)){
args__7551__auto__.push((arguments[i__7545__auto___12795]));

var G__12796 = (i__7545__auto___12795 + (1));
i__7545__auto___12795 = G__12796;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((2) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((2)),(0))):null);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),cljs.core.assoc.call(null,attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.call(null,thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.linear_gradient.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.linear_gradient.cljs$lang$applyTo = (function (seq12790){
var G__12791 = cljs.core.first.call(null,seq12790);
var seq12790__$1 = cljs.core.next.call(null,seq12790);
var G__12792 = cljs.core.first.call(null,seq12790__$1);
var seq12790__$2 = cljs.core.next.call(null,seq12790__$1);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(G__12791,G__12792,seq12790__$2);
});
thi.ng.geom.svg.core.radial_gradient = (function thi$ng$geom$svg$core$radial_gradient(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12800 = arguments.length;
var i__7545__auto___12801 = (0);
while(true){
if((i__7545__auto___12801 < len__7544__auto___12800)){
args__7551__auto__.push((arguments[i__7545__auto___12801]));

var G__12802 = (i__7545__auto___12801 + (1));
i__7545__auto___12801 = G__12802;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((2) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((2)),(0))):null);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),cljs.core.assoc.call(null,attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.call(null,thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.radial_gradient.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.radial_gradient.cljs$lang$applyTo = (function (seq12797){
var G__12798 = cljs.core.first.call(null,seq12797);
var seq12797__$1 = cljs.core.next.call(null,seq12797);
var G__12799 = cljs.core.first.call(null,seq12797__$1);
var seq12797__$2 = cljs.core.next.call(null,seq12797__$1);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic(G__12798,G__12799,seq12797__$2);
});
thi.ng.geom.svg.core.group = (function thi$ng$geom$svg$core$group(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12805 = arguments.length;
var i__7545__auto___12806 = (0);
while(true){
if((i__7545__auto___12806 < len__7544__auto___12805)){
args__7551__auto__.push((arguments[i__7545__auto___12806]));

var G__12807 = (i__7545__auto___12806 + (1));
i__7545__auto___12806 = G__12807;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,null)], null),body);
});

thi.ng.geom.svg.core.group.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.group.cljs$lang$applyTo = (function (seq12803){
var G__12804 = cljs.core.first.call(null,seq12803);
var seq12803__$1 = cljs.core.next.call(null,seq12803);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic(G__12804,seq12803__$1);
});
thi.ng.geom.svg.core.path = (function thi$ng$geom$svg$core$path(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12812 = arguments.length;
var i__7545__auto___12813 = (0);
while(true){
if((i__7545__auto___12813 < len__7544__auto___12812)){
args__7551__auto__.push((arguments[i__7545__auto___12813]));

var G__12814 = (i__7545__auto___12813 + (1));
i__7545__auto___12813 = G__12814;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic = (function (segments,p__12810){
var vec__12811 = p__12810;
var attribs = cljs.core.nth.call(null,vec__12811,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.apply.call(null,thi.ng.strf.core.format,cljs.core.mapcat.call(null,cljs.core.comp.call(null,thi.ng.geom.svg.core.path_segment_formats,cljs.core.first),segments),cljs.core.mapcat.call(null,cljs.core.rest,segments))], null))], null);
});

thi.ng.geom.svg.core.path.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.path.cljs$lang$applyTo = (function (seq12808){
var G__12809 = cljs.core.first.call(null,seq12808);
var seq12808__$1 = cljs.core.next.call(null,seq12808);
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic(G__12809,seq12808__$1);
});
thi.ng.geom.svg.core.text = (function thi$ng$geom$svg$core$text(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12822 = arguments.length;
var i__7545__auto___12823 = (0);
while(true){
if((i__7545__auto___12823 < len__7544__auto___12822)){
args__7551__auto__.push((arguments[i__7545__auto___12823]));

var G__12824 = (i__7545__auto___12823 + (1));
i__7545__auto___12823 = G__12824;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((2) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((2)),(0))):null);
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic = (function (p__12818,txt,p__12819){
var vec__12820 = p__12818;
var x = cljs.core.nth.call(null,vec__12820,(0),null);
var y = cljs.core.nth.call(null,vec__12820,(1),null);
var vec__12821 = p__12819;
var attribs = cljs.core.nth.call(null,vec__12821,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y)], null)),txt], null);
});

thi.ng.geom.svg.core.text.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.text.cljs$lang$applyTo = (function (seq12815){
var G__12816 = cljs.core.first.call(null,seq12815);
var seq12815__$1 = cljs.core.next.call(null,seq12815);
var G__12817 = cljs.core.first.call(null,seq12815__$1);
var seq12815__$2 = cljs.core.next.call(null,seq12815__$1);
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic(G__12816,G__12817,seq12815__$2);
});
thi.ng.geom.svg.core.circle = (function thi$ng$geom$svg$core$circle(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12844 = arguments.length;
var i__7545__auto___12845 = (0);
while(true){
if((i__7545__auto___12845 < len__7544__auto___12844)){
args__7551__auto__.push((arguments[i__7545__auto___12845]));

var G__12846 = (i__7545__auto___12845 + (1));
i__7545__auto___12845 = G__12846;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((2) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((2)),(0))):null);
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic = (function (p__12837,radius,p__12838){
var vec__12842 = p__12837;
var x = cljs.core.nth.call(null,vec__12842,(0),null);
var y = cljs.core.nth.call(null,vec__12842,(1),null);
var vec__12843 = p__12838;
var attribs = cljs.core.nth.call(null,vec__12843,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),radius], null))], null);
});

thi.ng.geom.svg.core.circle.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.circle.cljs$lang$applyTo = (function (seq12834){
var G__12835 = cljs.core.first.call(null,seq12834);
var seq12834__$1 = cljs.core.next.call(null,seq12834);
var G__12836 = cljs.core.first.call(null,seq12834__$1);
var seq12834__$2 = cljs.core.next.call(null,seq12834__$1);
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic(G__12835,G__12836,seq12834__$2);
});
thi.ng.geom.svg.core.arc_segment = (function thi$ng$geom$svg$core$arc_segment(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
var radius__$1 = thi.ng.geom.core.vector.vec2.call(null,radius);
var p = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.vector.vec2.call(null,center),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.geom.core.vector.x.call(null,radius__$1),theta1)));
var q = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.vector.vec2.call(null,center),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.geom.core.vector.y.call(null,radius__$1),theta2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),p], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",-1688942394),radius__$1,(0),(cljs.core.truth_(great_QMARK_)?(1):(0)),(cljs.core.truth_(ccw_QMARK_)?(1):(0)),q], null)], null);
});
thi.ng.geom.svg.core.arc = (function thi$ng$geom$svg$core$arc(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12865 = arguments.length;
var i__7545__auto___12866 = (0);
while(true){
if((i__7545__auto___12866 < len__7544__auto___12865)){
args__7551__auto__.push((arguments[i__7545__auto___12866]));

var G__12867 = (i__7545__auto___12866 + (1));
i__7545__auto___12866 = G__12867;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((6) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((6)),(0))):null);
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,p__12863){
var vec__12864 = p__12863;
var attribs = cljs.core.nth.call(null,vec__12864,(0),null);
return thi.ng.geom.svg.core.path.call(null,thi.ng.geom.svg.core.arc_segment.call(null,center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_),attribs);
});

thi.ng.geom.svg.core.arc.cljs$lang$maxFixedArity = (6);

thi.ng.geom.svg.core.arc.cljs$lang$applyTo = (function (seq12856){
var G__12857 = cljs.core.first.call(null,seq12856);
var seq12856__$1 = cljs.core.next.call(null,seq12856);
var G__12858 = cljs.core.first.call(null,seq12856__$1);
var seq12856__$2 = cljs.core.next.call(null,seq12856__$1);
var G__12859 = cljs.core.first.call(null,seq12856__$2);
var seq12856__$3 = cljs.core.next.call(null,seq12856__$2);
var G__12860 = cljs.core.first.call(null,seq12856__$3);
var seq12856__$4 = cljs.core.next.call(null,seq12856__$3);
var G__12861 = cljs.core.first.call(null,seq12856__$4);
var seq12856__$5 = cljs.core.next.call(null,seq12856__$4);
var G__12862 = cljs.core.first.call(null,seq12856__$5);
var seq12856__$6 = cljs.core.next.call(null,seq12856__$5);
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic(G__12857,G__12858,G__12859,G__12860,G__12861,G__12862,seq12856__$6);
});
thi.ng.geom.svg.core.rect = (function thi$ng$geom$svg$core$rect(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12886 = arguments.length;
var i__7545__auto___12887 = (0);
while(true){
if((i__7545__auto___12887 < len__7544__auto___12886)){
args__7551__auto__.push((arguments[i__7545__auto___12887]));

var G__12888 = (i__7545__auto___12887 + (1));
i__7545__auto___12887 = G__12888;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((3) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((3)),(0))):null);
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic = (function (p__12882,w,h,p__12883){
var vec__12884 = p__12882;
var x = cljs.core.nth.call(null,vec__12884,(0),null);
var y = cljs.core.nth.call(null,vec__12884,(1),null);
var vec__12885 = p__12883;
var attribs = cljs.core.nth.call(null,vec__12885,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y),new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null))], null);
});

thi.ng.geom.svg.core.rect.cljs$lang$maxFixedArity = (3);

thi.ng.geom.svg.core.rect.cljs$lang$applyTo = (function (seq12878){
var G__12879 = cljs.core.first.call(null,seq12878);
var seq12878__$1 = cljs.core.next.call(null,seq12878);
var G__12880 = cljs.core.first.call(null,seq12878__$1);
var seq12878__$2 = cljs.core.next.call(null,seq12878__$1);
var G__12881 = cljs.core.first.call(null,seq12878__$2);
var seq12878__$3 = cljs.core.next.call(null,seq12878__$2);
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic(G__12879,G__12880,G__12881,seq12878__$3);
});
thi.ng.geom.svg.core.line = (function thi$ng$geom$svg$core$line(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12901 = arguments.length;
var i__7545__auto___12902 = (0);
while(true){
if((i__7545__auto___12902 < len__7544__auto___12901)){
args__7551__auto__.push((arguments[i__7545__auto___12902]));

var G__12903 = (i__7545__auto___12902 + (1));
i__7545__auto___12902 = G__12903;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((2) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((2)),(0))):null);
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic = (function (p__12894,p__12895,p__12896){
var vec__12897 = p__12894;
var ax = cljs.core.nth.call(null,vec__12897,(0),null);
var ay = cljs.core.nth.call(null,vec__12897,(1),null);
var vec__12898 = p__12895;
var bx = cljs.core.nth.call(null,vec__12898,(0),null);
var by = cljs.core.nth.call(null,vec__12898,(1),null);
var vec__12899 = p__12896;
var attribs = cljs.core.nth.call(null,vec__12899,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,ax),new cljs.core.Keyword(null,"y1","y1",589123466),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,ay),new cljs.core.Keyword(null,"x2","x2",-1362513475),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,bx),new cljs.core.Keyword(null,"y2","y2",-718691301),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,by)], null))], null);
});

thi.ng.geom.svg.core.line.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.line.cljs$lang$applyTo = (function (seq12889){
var G__12890 = cljs.core.first.call(null,seq12889);
var seq12889__$1 = cljs.core.next.call(null,seq12889);
var G__12891 = cljs.core.first.call(null,seq12889__$1);
var seq12889__$2 = cljs.core.next.call(null,seq12889__$1);
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic(G__12890,G__12891,seq12889__$2);
});
thi.ng.geom.svg.core.line_decorated = (function thi$ng$geom$svg$core$line_decorated(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12915 = arguments.length;
var i__7545__auto___12916 = (0);
while(true){
if((i__7545__auto___12916 < len__7544__auto___12915)){
args__7551__auto__.push((arguments[i__7545__auto___12916]));

var G__12917 = (i__7545__auto___12916 + (1));
i__7545__auto___12916 = G__12917;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((4) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((4)),(0))):null);
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic = (function (p,q,start,end,p__12910){
var vec__12911 = p__12910;
var attribs = cljs.core.nth.call(null,vec__12911,(0),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_(end)?end.call(null,p,q,(0),attribs):null)),(cljs.core.truth_(start)?start.call(null,q,p,(0),attribs):null)),thi.ng.geom.svg.core.line.call(null,p,q,attribs));
});

thi.ng.geom.svg.core.line_decorated.cljs$lang$maxFixedArity = (4);

thi.ng.geom.svg.core.line_decorated.cljs$lang$applyTo = (function (seq12905){
var G__12906 = cljs.core.first.call(null,seq12905);
var seq12905__$1 = cljs.core.next.call(null,seq12905);
var G__12907 = cljs.core.first.call(null,seq12905__$1);
var seq12905__$2 = cljs.core.next.call(null,seq12905__$1);
var G__12908 = cljs.core.first.call(null,seq12905__$2);
var seq12905__$3 = cljs.core.next.call(null,seq12905__$2);
var G__12909 = cljs.core.first.call(null,seq12905__$3);
var seq12905__$4 = cljs.core.next.call(null,seq12905__$3);
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic(G__12906,G__12907,G__12908,G__12909,seq12905__$4);
});
thi.ng.geom.svg.core.line_strip = (function thi$ng$geom$svg$core$line_strip(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12923 = arguments.length;
var i__7545__auto___12924 = (0);
while(true){
if((i__7545__auto___12924 < len__7544__auto___12923)){
args__7551__auto__.push((arguments[i__7545__auto___12924]));

var G__12925 = (i__7545__auto___12924 + (1));
i__7545__auto___12924 = G__12925;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic = (function (points,p__12921){
var vec__12922 = p__12921;
var attribs = cljs.core.nth.call(null,vec__12922,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format.call(null,cljs.core.count.call(null,points)),points)], null))], null);
});

thi.ng.geom.svg.core.line_strip.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.line_strip.cljs$lang$applyTo = (function (seq12919){
var G__12920 = cljs.core.first.call(null,seq12919);
var seq12919__$1 = cljs.core.next.call(null,seq12919);
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic(G__12920,seq12919__$1);
});
thi.ng.geom.svg.core.line_strip_decorated = (function thi$ng$geom$svg$core$line_strip_decorated(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12946 = arguments.length;
var i__7545__auto___12947 = (0);
while(true){
if((i__7545__auto___12947 < len__7544__auto___12946)){
args__7551__auto__.push((arguments[i__7545__auto___12947]));

var G__12948 = (i__7545__auto___12947 + (1));
i__7545__auto___12947 = G__12948;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((4) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((4)),(0))):null);
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic = (function (points,start,seg,end,p__12936){
var vec__12937 = p__12936;
var attribs = cljs.core.nth.call(null,vec__12937,(0),null);
var n = (cljs.core.count.call(null,points) - (1));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_(end)?end.call(null,points.call(null,(n - (1))),cljs.core.peek.call(null,points),n,attribs):null)),(cljs.core.truth_(seg)?cljs.core.map_indexed.call(null,((function (n,vec__12937,attribs){
return (function (i,p__12942){
var vec__12943 = p__12942;
var p = cljs.core.nth.call(null,vec__12943,(0),null);
var q = cljs.core.nth.call(null,vec__12943,(1),null);
return seg.call(null,p,q,i,attribs);
});})(n,vec__12937,attribs))
,thi.ng.dstruct.core.successive_nth.call(null,(2),points)):null)),(cljs.core.truth_(start)?start.call(null,points.call(null,(1)),points.call(null,(0)),(0),attribs):null)),thi.ng.geom.svg.core.line_strip.call(null,points,attribs));
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$maxFixedArity = (4);

thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$applyTo = (function (seq12930){
var G__12931 = cljs.core.first.call(null,seq12930);
var seq12930__$1 = cljs.core.next.call(null,seq12930);
var G__12932 = cljs.core.first.call(null,seq12930__$1);
var seq12930__$2 = cljs.core.next.call(null,seq12930__$1);
var G__12933 = cljs.core.first.call(null,seq12930__$2);
var seq12930__$3 = cljs.core.next.call(null,seq12930__$2);
var G__12934 = cljs.core.first.call(null,seq12930__$3);
var seq12930__$4 = cljs.core.next.call(null,seq12930__$3);
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic(G__12931,G__12932,G__12933,G__12934,seq12930__$4);
});
thi.ng.geom.svg.core.polygon = (function thi$ng$geom$svg$core$polygon(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12975 = arguments.length;
var i__7545__auto___12976 = (0);
while(true){
if((i__7545__auto___12976 < len__7544__auto___12975)){
args__7551__auto__.push((arguments[i__7545__auto___12976]));

var G__12977 = (i__7545__auto___12976 + (1));
i__7545__auto___12976 = G__12977;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points,p__12973){
var vec__12974 = p__12973;
var attribs = cljs.core.nth.call(null,vec__12974,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format.call(null,cljs.core.count.call(null,points)),points)], null))], null);
});

thi.ng.geom.svg.core.polygon.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.polygon.cljs$lang$applyTo = (function (seq12961){
var G__12962 = cljs.core.first.call(null,seq12961);
var seq12961__$1 = cljs.core.next.call(null,seq12961);
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic(G__12962,seq12961__$1);
});
thi.ng.geom.svg.core.instance = (function thi$ng$geom$svg$core$instance(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12983 = arguments.length;
var i__7545__auto___12984 = (0);
while(true){
if((i__7545__auto___12984 < len__7544__auto___12983)){
args__7551__auto__.push((arguments[i__7545__auto___12984]));

var G__12985 = (i__7545__auto___12984 + (1));
i__7545__auto___12984 = G__12985;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__12981){
var vec__12982 = p__12981;
var attribs = cljs.core.nth.call(null,vec__12982,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, ["xlink:href",[cljs.core.str("#"),cljs.core.str(id)].join('')], null))], null);
});

thi.ng.geom.svg.core.instance.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.instance.cljs$lang$applyTo = (function (seq12979){
var G__12980 = cljs.core.first.call(null,seq12979);
var seq12979__$1 = cljs.core.next.call(null,seq12979);
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic(G__12980,seq12979__$1);
});
thi.ng.geom.svg.core.arrow_head = (function thi$ng$geom$svg$core$arrow_head(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12994 = arguments.length;
var i__7545__auto___12995 = (0);
while(true){
if((i__7545__auto___12995 < len__7544__auto___12994)){
args__7551__auto__.push((arguments[i__7545__auto___12995]));

var G__12996 = (i__7545__auto___12995 + (1));
i__7545__auto___12995 = G__12996;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((3) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((3)),(0))):null);
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7552__auto__);
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic = (function (len,theta,solid_QMARK_,p__12990){
var vec__12991 = p__12990;
var opts = cljs.core.nth.call(null,vec__12991,(0),null);
return ((function (vec__12991,opts){
return (function() { 
var G__12997__delegate = function (p,q,idx,p__12992){
var vec__12993 = p__12992;
var attribs = cljs.core.nth.call(null,vec__12993,(0),null);
var q__$1 = thi.ng.geom.core.vector.vec2.call(null,q);
var d = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q__$1,p),len);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_(solid_QMARK_)?thi.ng.geom.svg.core.polygon:thi.ng.geom.svg.core.line_strip).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,(- theta))),q__$1,thi.ng.geom.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,theta))], null),cljs.core.merge.call(null,attribs,opts)));
};
var G__12997 = function (p,q,idx,var_args){
var p__12992 = null;
if (arguments.length > 3) {
var G__12998__i = 0, G__12998__a = new Array(arguments.length -  3);
while (G__12998__i < G__12998__a.length) {G__12998__a[G__12998__i] = arguments[G__12998__i + 3]; ++G__12998__i;}
  p__12992 = new cljs.core.IndexedSeq(G__12998__a,0);
} 
return G__12997__delegate.call(this,p,q,idx,p__12992);};
G__12997.cljs$lang$maxFixedArity = 3;
G__12997.cljs$lang$applyTo = (function (arglist__13002){
var p = cljs.core.first(arglist__13002);
arglist__13002 = cljs.core.next(arglist__13002);
var q = cljs.core.first(arglist__13002);
arglist__13002 = cljs.core.next(arglist__13002);
var idx = cljs.core.first(arglist__13002);
var p__12992 = cljs.core.rest(arglist__13002);
return G__12997__delegate(p,q,idx,p__12992);
});
G__12997.cljs$core$IFn$_invoke$arity$variadic = G__12997__delegate;
return G__12997;
})()
;
;})(vec__12991,opts))
});

thi.ng.geom.svg.core.arrow_head.cljs$lang$maxFixedArity = (3);

thi.ng.geom.svg.core.arrow_head.cljs$lang$applyTo = (function (seq12986){
var G__12987 = cljs.core.first.call(null,seq12986);
var seq12986__$1 = cljs.core.next.call(null,seq12986);
var G__12988 = cljs.core.first.call(null,seq12986__$1);
var seq12986__$2 = cljs.core.next.call(null,seq12986__$1);
var G__12989 = cljs.core.first.call(null,seq12986__$2);
var seq12986__$3 = cljs.core.next.call(null,seq12986__$2);
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic(G__12987,G__12988,G__12989,seq12986__$3);
});
thi.ng.geom.svg.core.line_label = (function thi$ng$geom$svg$core$line_label(var_args){
var args__7551__auto__ = [];
var len__7544__auto___13016 = arguments.length;
var i__7545__auto___13017 = (0);
while(true){
if((i__7545__auto___13017 < len__7544__auto___13016)){
args__7551__auto__.push((arguments[i__7545__auto___13017]));

var G__13018 = (i__7545__auto___13017 + (1));
i__7545__auto___13017 = G__13018;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic = (function (p__13009){
var vec__13010 = p__13009;
var map__13011 = cljs.core.nth.call(null,vec__13010,(0),null);
var map__13011__$1 = ((((!((map__13011 == null)))?((((map__13011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13011):map__13011);
var opts = map__13011__$1;
var __rotate_QMARK_ = cljs.core.get.call(null,map__13011__$1,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580));
var __offset = cljs.core.get.call(null,map__13011__$1,new cljs.core.Keyword(null,"__offset","__offset",-9560190));
var opts__$1 = cljs.core.update_in.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580),new cljs.core.Keyword(null,"__offset","__offset",-9560190)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696)], null),((function (vec__13010,map__13011,map__13011__$1,opts,__rotate_QMARK_,__offset){
return (function (p1__13004_SHARP_){
var or__6486__auto__ = p1__13004_SHARP_;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return "middle";
}
});})(vec__13010,map__13011,map__13011__$1,opts,__rotate_QMARK_,__offset))
);
return ((function (opts__$1,vec__13010,map__13011,map__13011__$1,opts,__rotate_QMARK_,__offset){
return (function() { 
var G__13019__delegate = function (p,q,idx,p__13013){
var vec__13014 = p__13013;
var attribs = cljs.core.nth.call(null,vec__13014,(0),null);
var temp__4655__auto__ = cljs.core.get_in.call(null,attribs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__label","__label",758805562),idx], null));
if(cljs.core.truth_(temp__4655__auto__)){
var label = temp__4655__auto__;
var p__$1 = thi.ng.geom.core.vector.vec2.call(null,p);
var m = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.mix.call(null,p__$1,q),__offset);
var opts__$2 = (cljs.core.truth_(__rotate_QMARK_)?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("rotate("),cljs.core.str(thi.ng.math.core.degrees.call(null,thi.ng.geom.core.heading.call(null,thi.ng.geom.core.normal.call(null,thi.ng.geom.core._.call(null,p__$1,q))))),cljs.core.str(" "),cljs.core.str(m.call(null,(0))),cljs.core.str(" "),cljs.core.str(m.call(null,(1))),cljs.core.str(")")].join('')):opts__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,thi.ng.geom.svg.core.text.call(null,m,label,cljs.core.merge.call(null,cljs.core.dissoc.call(null,attribs,new cljs.core.Keyword(null,"__label","__label",758805562)),opts__$2)));
} else {
return null;
}
};
var G__13019 = function (p,q,idx,var_args){
var p__13013 = null;
if (arguments.length > 3) {
var G__13020__i = 0, G__13020__a = new Array(arguments.length -  3);
while (G__13020__i < G__13020__a.length) {G__13020__a[G__13020__i] = arguments[G__13020__i + 3]; ++G__13020__i;}
  p__13013 = new cljs.core.IndexedSeq(G__13020__a,0);
} 
return G__13019__delegate.call(this,p,q,idx,p__13013);};
G__13019.cljs$lang$maxFixedArity = 3;
G__13019.cljs$lang$applyTo = (function (arglist__13021){
var p = cljs.core.first(arglist__13021);
arglist__13021 = cljs.core.next(arglist__13021);
var q = cljs.core.first(arglist__13021);
arglist__13021 = cljs.core.next(arglist__13021);
var idx = cljs.core.first(arglist__13021);
var p__13013 = cljs.core.rest(arglist__13021);
return G__13019__delegate(p,q,idx,p__13013);
});
G__13019.cljs$core$IFn$_invoke$arity$variadic = G__13019__delegate;
return G__13019;
})()
;
;})(opts__$1,vec__13010,map__13011,map__13011__$1,opts,__rotate_QMARK_,__offset))
});

thi.ng.geom.svg.core.line_label.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.line_label.cljs$lang$applyTo = (function (seq13005){
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13005));
});
thi.ng.geom.svg.core.comp_decorators = (function thi$ng$geom$svg$core$comp_decorators(var_args){
var args__7551__auto__ = [];
var len__7544__auto___13025 = arguments.length;
var i__7545__auto___13026 = (0);
while(true){
if((i__7545__auto___13026 < len__7544__auto___13025)){
args__7551__auto__.push((arguments[i__7545__auto___13026]));

var G__13027 = (i__7545__auto___13026 + (1));
i__7545__auto___13026 = G__13027;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function() { 
var G__13028__delegate = function (p,q,idx,p__13023){
var vec__13024 = p__13023;
var attribs = cljs.core.nth.call(null,vec__13024,(0),null);
return cljs.core.reduce.call(null,((function (vec__13024,attribs){
return (function (acc,f){
return cljs.core.concat.call(null,acc,f.call(null,p,q,idx,attribs));
});})(vec__13024,attribs))
,cljs.core.List.EMPTY,fns);
};
var G__13028 = function (p,q,idx,var_args){
var p__13023 = null;
if (arguments.length > 3) {
var G__13029__i = 0, G__13029__a = new Array(arguments.length -  3);
while (G__13029__i < G__13029__a.length) {G__13029__a[G__13029__i] = arguments[G__13029__i + 3]; ++G__13029__i;}
  p__13023 = new cljs.core.IndexedSeq(G__13029__a,0);
} 
return G__13028__delegate.call(this,p,q,idx,p__13023);};
G__13028.cljs$lang$maxFixedArity = 3;
G__13028.cljs$lang$applyTo = (function (arglist__13030){
var p = cljs.core.first(arglist__13030);
arglist__13030 = cljs.core.next(arglist__13030);
var q = cljs.core.first(arglist__13030);
arglist__13030 = cljs.core.next(arglist__13030);
var idx = cljs.core.first(arglist__13030);
var p__13023 = cljs.core.rest(arglist__13030);
return G__13028__delegate(p,q,idx,p__13023);
});
G__13028.cljs$core$IFn$_invoke$arity$variadic = G__13028__delegate;
return G__13028;
})()
;
});

thi.ng.geom.svg.core.comp_decorators.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.comp_decorators.cljs$lang$applyTo = (function (seq13022){
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13022));
});

//# sourceMappingURL=core.js.map