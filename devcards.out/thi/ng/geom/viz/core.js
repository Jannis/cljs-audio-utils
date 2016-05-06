// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.viz.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.ndarray.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.ndarray.contours');
goog.require('thi.ng.strf.core');
thi.ng.geom.viz.core.value_mapper = (function thi$ng$geom$viz$core$value_mapper(scale_x,scale_y){
return (function (p__22849){
var vec__22850 = p__22849;
var x = cljs.core.nth.call(null,vec__22850,(0),null);
var y = cljs.core.nth.call(null,vec__22850,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null);
});
});
thi.ng.geom.viz.core.value_transducer = (function thi$ng$geom$viz$core$value_transducer(p__22857){
var map__22865 = p__22857;
var map__22865__$1 = ((((!((map__22865 == null)))?((((map__22865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22865):map__22865);
var cull_domain = cljs.core.get.call(null,map__22865__$1,new cljs.core.Keyword(null,"cull-domain","cull-domain",408515057));
var cull_range = cljs.core.get.call(null,map__22865__$1,new cljs.core.Keyword(null,"cull-range","cull-range",603502637));
var scale_x = cljs.core.get.call(null,map__22865__$1,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878));
var scale_y = cljs.core.get.call(null,map__22865__$1,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277));
var project = cljs.core.get.call(null,map__22865__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var shape = cljs.core.get.call(null,map__22865__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var item_pos = cljs.core.get.call(null,map__22865__$1,new cljs.core.Keyword(null,"item-pos","item-pos",390857330));
var mapper = thi.ng.geom.viz.core.value_mapper.call(null,scale_x,scale_y);
var item_pos__$1 = (function (){var or__6486__auto__ = item_pos;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return cljs.core.identity;
}
})();
var G__22867 = cljs.core.map.call(null,cljs.core.juxt.call(null,item_pos__$1,cljs.core.identity));
var G__22867__$1 = (cljs.core.truth_(cull_domain)?cljs.core.comp.call(null,G__22867,cljs.core.filter.call(null,((function (G__22867,mapper,item_pos__$1,map__22865,map__22865__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p1__22855_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,cull_domain,cljs.core.ffirst.call(null,p1__22855_SHARP_));
});})(G__22867,mapper,item_pos__$1,map__22865,map__22865__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
)):G__22867);
var G__22867__$2 = cljs.core.comp.call(null,G__22867__$1,cljs.core.map.call(null,((function (G__22867,G__22867__$1,mapper,item_pos__$1,map__22865,map__22865__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p__22868){
var vec__22869 = p__22868;
var p = cljs.core.nth.call(null,vec__22869,(0),null);
var i = cljs.core.nth.call(null,vec__22869,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mapper.call(null,p),i], null);
});})(G__22867,G__22867__$1,mapper,item_pos__$1,map__22865,map__22865__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
))
;
var G__22867__$3 = (cljs.core.truth_(cull_range)?cljs.core.comp.call(null,G__22867__$2,cljs.core.filter.call(null,((function (G__22867,G__22867__$1,G__22867__$2,mapper,item_pos__$1,map__22865,map__22865__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p1__22856_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,cull_range,cljs.core.peek.call(null,cljs.core.first.call(null,p1__22856_SHARP_)));
});})(G__22867,G__22867__$1,G__22867__$2,mapper,item_pos__$1,map__22865,map__22865__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
)):G__22867__$2);
var G__22867__$4 = (cljs.core.truth_(project)?cljs.core.comp.call(null,G__22867__$3,cljs.core.map.call(null,((function (G__22867,G__22867__$1,G__22867__$2,G__22867__$3,mapper,item_pos__$1,map__22865,map__22865__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p__22870){
var vec__22871 = p__22870;
var p = cljs.core.nth.call(null,vec__22871,(0),null);
var i = cljs.core.nth.call(null,vec__22871,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.call(null,p),i], null);
});})(G__22867,G__22867__$1,G__22867__$2,G__22867__$3,mapper,item_pos__$1,map__22865,map__22865__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
)):G__22867__$3);
if(cljs.core.truth_(shape)){
return cljs.core.comp.call(null,G__22867__$4,cljs.core.map.call(null,shape));
} else {
return G__22867__$4;
}
});
thi.ng.geom.viz.core.process_points = (function thi$ng$geom$viz$core$process_points(p__22896,p__22897){
var map__22920 = p__22896;
var map__22920__$1 = ((((!((map__22920 == null)))?((((map__22920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22920):map__22920);
var x_axis = cljs.core.get.call(null,map__22920__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__22920__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__22920__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__22921 = p__22897;
var map__22921__$1 = ((((!((map__22921 == null)))?((((map__22921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22921):map__22921);
var values = cljs.core.get.call(null,map__22921__$1,new cljs.core.Keyword(null,"values","values",372645556));
var item_pos = cljs.core.get.call(null,map__22921__$1,new cljs.core.Keyword(null,"item-pos","item-pos",390857330));
var shape = cljs.core.get.call(null,map__22921__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var vec__22924 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var ry1 = cljs.core.nth.call(null,vec__22924,(0),null);
var ry2 = cljs.core.nth.call(null,vec__22924,(1),null);
return cljs.core.sequence.call(null,thi.ng.geom.viz.core.value_transducer.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cull-domain","cull-domain",408515057),new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"cull-range","cull-range",603502637),(((ry1 < ry2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ry1,ry2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ry2,ry1], null)),new cljs.core.Keyword(null,"item-pos","item-pos",390857330),item_pos,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis),new cljs.core.Keyword(null,"project","project",1124394579),project,new cljs.core.Keyword(null,"shape","shape",1190694006),shape], null)),(cljs.core.truth_(item_pos)?cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.first,item_pos),values):cljs.core.sort_by.call(null,cljs.core.first,values)));
});
thi.ng.geom.viz.core.points__GT_path_segments = (function thi$ng$geom$viz$core$points__GT_path_segments(p__22928){
var vec__22930 = p__22928;
var p = cljs.core.nth.call(null,vec__22930,(0),null);
var more = cljs.core.nthnext.call(null,vec__22930,(1));
return cljs.core.reduce.call(null,((function (vec__22930,p,more){
return (function (p1__22926_SHARP_,p2__22927_SHARP_){
return cljs.core.conj.call(null,p1__22926_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"L","L",-1038307519),p2__22927_SHARP_], null));
});})(vec__22930,p,more))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),p], null)], null),more);
});
thi.ng.geom.viz.core.polar_projection = (function thi$ng$geom$viz$core$polar_projection(origin){
var o = thi.ng.geom.core.vector.vec2.call(null,origin);
return ((function (o){
return (function (p__22934){
var vec__22935 = p__22934;
var x = cljs.core.nth.call(null,vec__22935,(0),null);
var y = cljs.core.nth.call(null,vec__22935,(1),null);
return thi.ng.geom.core._PLUS_.call(null,o,thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.core.vector.vec2.call(null,y,x)));
});
;})(o))
});
thi.ng.geom.viz.core.value_formatter = (function thi$ng$geom$viz$core$value_formatter(prec){
var fmt = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.strf.core.float$.call(null,prec)], null);
return ((function (fmt){
return (function (x){
return thi.ng.strf.core.format.call(null,fmt,x);
});
;})(fmt))
});
thi.ng.geom.viz.core.format_percent = (function thi$ng$geom$viz$core$format_percent(x){
return [cljs.core.str(((x * (100)) | (0))),cljs.core.str("%")].join('');
});
thi.ng.geom.viz.core.default_svg_label = (function thi$ng$geom$viz$core$default_svg_label(f){
return (function (p,x){
return thi.ng.geom.svg.core.text.call(null,p,f.call(null,x));
});
});
/**
 * Given a vector of domain bounds and a collection of data values
 *   (without domain position), produces a lazy-seq of 2-element vectors
 *   representing the values of the original coll uniformly spread over
 *   the full domain range, with each of the form: [domain-pos value].
 */
thi.ng.geom.viz.core.uniform_domain_points = (function thi$ng$geom$viz$core$uniform_domain_points(p__22943,values){
var vec__22945 = p__22943;
var d1 = cljs.core.nth.call(null,vec__22945,(0),null);
var d2 = cljs.core.nth.call(null,vec__22945,(1),null);
return cljs.core.map.call(null,((function (vec__22945,d1,d2){
return (function (t,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.mix.call(null,d1,d2,t),v], null);
});})(vec__22945,d1,d2))
,thi.ng.math.core.norm_range.call(null,(cljs.core.count.call(null,values) - (1))),values);
});
thi.ng.geom.viz.core.domain_bounds_x = (function thi$ng$geom$viz$core$domain_bounds_x(p1__22946_SHARP_){
return thi.ng.geom.core.utils.axis_bounds.call(null,(0),p1__22946_SHARP_);
});
thi.ng.geom.viz.core.domain_bounds_y = (function thi$ng$geom$viz$core$domain_bounds_y(p1__22947_SHARP_){
return thi.ng.geom.core.utils.axis_bounds.call(null,(1),p1__22947_SHARP_);
});
thi.ng.geom.viz.core.domain_bounds_z = (function thi$ng$geom$viz$core$domain_bounds_z(p1__22948_SHARP_){
return thi.ng.geom.core.utils.axis_bounds.call(null,(2),p1__22948_SHARP_);
});
thi.ng.geom.viz.core.total_domain_bounds = (function thi$ng$geom$viz$core$total_domain_bounds(var_args){
var args__7551__auto__ = [];
var len__7544__auto___22955 = arguments.length;
var i__7545__auto___22956 = (0);
while(true){
if((i__7545__auto___22956 < len__7544__auto___22955)){
args__7551__auto__.push((arguments[i__7545__auto___22956]));

var G__22957 = (i__7545__auto___22956 + (1));
i__7545__auto___22956 = G__22957;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return thi.ng.geom.viz.core.total_domain_bounds.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

thi.ng.geom.viz.core.total_domain_bounds.cljs$core$IFn$_invoke$arity$variadic = (function (f,colls){
return cljs.core.transduce.call(null,cljs.core.map.call(null,f),cljs.core.completing.call(null,(function (p__22951,p__22952){
var vec__22953 = p__22951;
var aa = cljs.core.nth.call(null,vec__22953,(0),null);
var ab = cljs.core.nth.call(null,vec__22953,(1),null);
var vec__22954 = p__22952;
var xa = cljs.core.nth.call(null,vec__22954,(0),null);
var xb = cljs.core.nth.call(null,vec__22954,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__6824__auto__ = aa;
var y__6825__auto__ = xa;
return ((x__6824__auto__ < y__6825__auto__) ? x__6824__auto__ : y__6825__auto__);
})(),(function (){var x__6817__auto__ = ab;
var y__6818__auto__ = xb;
return ((x__6817__auto__ > y__6818__auto__) ? x__6817__auto__ : y__6818__auto__);
})()], null);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.INF_PLUS_,thi.ng.math.core.INF_], null),colls);
});

thi.ng.geom.viz.core.total_domain_bounds.cljs$lang$maxFixedArity = (1);

thi.ng.geom.viz.core.total_domain_bounds.cljs$lang$applyTo = (function (seq22949){
var G__22950 = cljs.core.first.call(null,seq22949);
var seq22949__$1 = cljs.core.next.call(null,seq22949);
return thi.ng.geom.viz.core.total_domain_bounds.cljs$core$IFn$_invoke$arity$variadic(G__22950,seq22949__$1);
});
thi.ng.geom.viz.core.value_domain_bounds = (function thi$ng$geom$viz$core$value_domain_bounds(mat){
var vals = cljs.core.seq.call(null,mat);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.min,vals),cljs.core.reduce.call(null,cljs.core.max,vals)], null);
});
thi.ng.geom.viz.core.linear_scale = (function thi$ng$geom$viz$core$linear_scale(domain,range){
return (function (x){
return thi.ng.math.core.map_interval.call(null,x,domain,range);
});
});
thi.ng.geom.viz.core.log = (function thi$ng$geom$viz$core$log(base){
var lb = Math.log(base);
return ((function (lb){
return (function (p1__22961_SHARP_){
return ((((p1__22961_SHARP_ > (0)))?Math.log(p1__22961_SHARP_):(((p1__22961_SHARP_ < (0)))?(- Math.log((- p1__22961_SHARP_))):(0)
)) / lb);
});
;})(lb))
});
thi.ng.geom.viz.core.log_scale = (function thi$ng$geom$viz$core$log_scale(base,p__22962,p__22963){
var vec__22966 = p__22962;
var d1 = cljs.core.nth.call(null,vec__22966,(0),null);
var d2 = cljs.core.nth.call(null,vec__22966,(1),null);
var domain = vec__22966;
var vec__22967 = p__22963;
var r1 = cljs.core.nth.call(null,vec__22967,(0),null);
var r2 = cljs.core.nth.call(null,vec__22967,(1),null);
var range = vec__22967;
var log_STAR_ = thi.ng.geom.viz.core.log.call(null,base);
var d1l = log_STAR_.call(null,d1);
var dr = (log_STAR_.call(null,d2) - d1l);
return ((function (log_STAR_,d1l,dr,vec__22966,d1,d2,domain,vec__22967,r1,r2,range){
return (function (x){
return thi.ng.math.core.mix.call(null,r1,r2,((log_STAR_.call(null,x) - d1l) / dr));
});
;})(log_STAR_,d1l,dr,vec__22966,d1,d2,domain,vec__22967,r1,r2,range))
});
thi.ng.geom.viz.core.lens_scale = (function thi$ng$geom$viz$core$lens_scale(focus,strength,p__22971,p__22972){
var vec__22975 = p__22971;
var d1 = cljs.core.nth.call(null,vec__22975,(0),null);
var d2 = cljs.core.nth.call(null,vec__22975,(1),null);
var vec__22976 = p__22972;
var r1 = cljs.core.nth.call(null,vec__22976,(0),null);
var r2 = cljs.core.nth.call(null,vec__22976,(1),null);
var dr = (d2 - d1);
var f = ((focus - d1) / dr);
return ((function (dr,f,vec__22975,d1,d2,vec__22976,r1,r2){
return (function (x){
return thi.ng.math.core.mix_lens.call(null,r1,r2,((x - d1) / dr),f,strength);
});
;})(dr,f,vec__22975,d1,d2,vec__22976,r1,r2))
});
thi.ng.geom.viz.core.axis_common_STAR_ = (function thi$ng$geom$viz$core$axis_common_STAR_(p__22977){
var map__22980 = p__22977;
var map__22980__$1 = ((((!((map__22980 == null)))?((((map__22980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22980):map__22980);
var spec = map__22980__$1;
var visible = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805),true);
var major_size = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375),(10));
var minor_size = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109),(5));
var label = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var attribs = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var label_style = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
var label_dist = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"visible","visible",-1024216805),visible,new cljs.core.Keyword(null,"major-size","major-size",-698672375),major_size,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109),minor_size,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__6486__auto__ = label;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return thi.ng.geom.viz.core.default_svg_label.call(null,thi.ng.geom.viz.core.value_formatter.call(null,(2)));
}
})(),new cljs.core.Keyword(null,"attribs","attribs",-137878093),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null),attribs),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Arial, sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle"], null),label_style),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526),(function (){var or__6486__auto__ = label_dist;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return ((10) + major_size);
}
})());
});
thi.ng.geom.viz.core.lin_tick_marks = (function thi$ng$geom$viz$core$lin_tick_marks(p__22983,delta){
var vec__22985 = p__22983;
var d1 = cljs.core.nth.call(null,vec__22985,(0),null);
var d2 = cljs.core.nth.call(null,vec__22985,(1),null);
var dr = (d2 - d1);
var d1_SINGLEQUOTE_ = thi.ng.math.core.roundto.call(null,d1,delta);
return cljs.core.filter.call(null,((function (dr,d1_SINGLEQUOTE_,vec__22985,d1,d2){
return (function (p1__22982_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,d1,d2,p1__22982_SHARP_);
});})(dr,d1_SINGLEQUOTE_,vec__22985,d1,d2))
,cljs.core.range.call(null,d1_SINGLEQUOTE_,(d2 + delta),delta));
});
thi.ng.geom.viz.core.linear_axis = (function thi$ng$geom$viz$core$linear_axis(p__22987){
var map__22990 = p__22987;
var map__22990__$1 = ((((!((map__22990 == null)))?((((map__22990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22990):map__22990);
var spec = map__22990__$1;
var domain = cljs.core.get.call(null,map__22990__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var range = cljs.core.get.call(null,map__22990__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var major = cljs.core.get.call(null,map__22990__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__22990__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var major_SINGLEQUOTE_ = (cljs.core.truth_(major)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,major):null);
var minor_SINGLEQUOTE_ = (cljs.core.truth_(minor)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,minor):null);
var minor_SINGLEQUOTE___$1 = (cljs.core.truth_((function (){var and__6474__auto__ = major_SINGLEQUOTE_;
if(cljs.core.truth_(and__6474__auto__)){
return minor_SINGLEQUOTE_;
} else {
return and__6474__auto__;
}
})())?cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,major_SINGLEQUOTE_)),minor_SINGLEQUOTE_):minor_SINGLEQUOTE_);
return thi.ng.geom.viz.core.axis_common_STAR_.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"scale","scale",-230427353),thi.ng.geom.viz.core.linear_scale.call(null,domain,range),new cljs.core.Keyword(null,"major","major",-27376078),major_SINGLEQUOTE_,new cljs.core.Keyword(null,"minor","minor",-608536071),minor_SINGLEQUOTE___$1));
});
thi.ng.geom.viz.core.log_ticks_domain = (function thi$ng$geom$viz$core$log_ticks_domain(base,d1,d2){
var log_STAR_ = thi.ng.geom.viz.core.log.call(null,base);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.floor.call(null,log_STAR_.call(null,d1)),thi.ng.math.core.ceil.call(null,log_STAR_.call(null,d2))], null);
});
thi.ng.geom.viz.core.log_tick_marks_major = (function thi$ng$geom$viz$core$log_tick_marks_major(base,p__22993){
var vec__23000 = p__22993;
var d1 = cljs.core.nth.call(null,vec__23000,(0),null);
var d2 = cljs.core.nth.call(null,vec__23000,(1),null);
var vec__23001 = thi.ng.geom.viz.core.log_ticks_domain.call(null,base,d1,d2);
var d1l = cljs.core.nth.call(null,vec__23001,(0),null);
var d2l = cljs.core.nth.call(null,vec__23001,(1),null);
return cljs.core.filter.call(null,((function (vec__23001,d1l,d2l,vec__23000,d1,d2){
return (function (p1__22992_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,d1,d2,p1__22992_SHARP_);
});})(vec__23001,d1l,d2l,vec__23000,d1,d2))
,(function (){var iter__7258__auto__ = ((function (vec__23001,d1l,d2l,vec__23000,d1,d2){
return (function thi$ng$geom$viz$core$log_tick_marks_major_$_iter__23004(s__23005){
return (new cljs.core.LazySeq(null,((function (vec__23001,d1l,d2l,vec__23000,d1,d2){
return (function (){
var s__23005__$1 = s__23005;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23005__$1);
if(temp__4657__auto__){
var s__23005__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23005__$2)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,s__23005__$2);
var size__7257__auto__ = cljs.core.count.call(null,c__7256__auto__);
var b__23007 = cljs.core.chunk_buffer.call(null,size__7257__auto__);
if((function (){var i__23006 = (0);
while(true){
if((i__23006 < size__7257__auto__)){
var i = cljs.core._nth.call(null,c__7256__auto__,i__23006);
cljs.core.chunk_append.call(null,b__23007,(((i >= (0)))?(((1) / base) * Math.pow(base,i)):(((1) / base) * (- Math.pow(base,(- i))))));

var G__23032 = (i__23006 + (1));
i__23006 = G__23032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23007),thi$ng$geom$viz$core$log_tick_marks_major_$_iter__23004.call(null,cljs.core.chunk_rest.call(null,s__23005__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23007),null);
}
} else {
var i = cljs.core.first.call(null,s__23005__$2);
return cljs.core.cons.call(null,(((i >= (0)))?(((1) / base) * Math.pow(base,i)):(((1) / base) * (- Math.pow(base,(- i))))),thi$ng$geom$viz$core$log_tick_marks_major_$_iter__23004.call(null,cljs.core.rest.call(null,s__23005__$2)));
}
} else {
return null;
}
break;
}
});})(vec__23001,d1l,d2l,vec__23000,d1,d2))
,null,null));
});})(vec__23001,d1l,d2l,vec__23000,d1,d2))
;
return iter__7258__auto__.call(null,cljs.core.range.call(null,d1l,(d2l + (1))));
})());
});
thi.ng.geom.viz.core.log_tick_marks_minor = (function thi$ng$geom$viz$core$log_tick_marks_minor(base,p__23050){
var vec__23064 = p__23050;
var d1 = cljs.core.nth.call(null,vec__23064,(0),null);
var d2 = cljs.core.nth.call(null,vec__23064,(1),null);
var vec__23065 = thi.ng.geom.viz.core.log_ticks_domain.call(null,base,d1,d2);
var d1l = cljs.core.nth.call(null,vec__23065,(0),null);
var d2l = cljs.core.nth.call(null,vec__23065,(1),null);
var ticks = ((((2) === base))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75], null):cljs.core.range.call(null,(2),base));
return cljs.core.filter.call(null,((function (vec__23065,d1l,d2l,ticks,vec__23064,d1,d2){
return (function (p1__23049_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,d1,d2,p1__23049_SHARP_);
});})(vec__23065,d1l,d2l,ticks,vec__23064,d1,d2))
,(function (){var iter__7258__auto__ = ((function (vec__23065,d1l,d2l,ticks,vec__23064,d1,d2){
return (function thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__23066(s__23067){
return (new cljs.core.LazySeq(null,((function (vec__23065,d1l,d2l,ticks,vec__23064,d1,d2){
return (function (){
var s__23067__$1 = s__23067;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23067__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7254__auto__ = ((function (s__23067__$1,i,xs__5205__auto__,temp__4657__auto__,vec__23065,d1l,d2l,ticks,vec__23064,d1,d2){
return (function thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__23066_$_iter__23068(s__23069){
return (new cljs.core.LazySeq(null,((function (s__23067__$1,i,xs__5205__auto__,temp__4657__auto__,vec__23065,d1l,d2l,ticks,vec__23064,d1,d2){
return (function (){
var s__23069__$1 = s__23069;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__23069__$1);
if(temp__4657__auto____$1){
var s__23069__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23069__$2)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,s__23069__$2);
var size__7257__auto__ = cljs.core.count.call(null,c__7256__auto__);
var b__23071 = cljs.core.chunk_buffer.call(null,size__7257__auto__);
if((function (){var i__23070 = (0);
while(true){
if((i__23070 < size__7257__auto__)){
var j = cljs.core._nth.call(null,c__7256__auto__,i__23070);
cljs.core.chunk_append.call(null,b__23071,(((i >= (0)))?((j / base) * Math.pow(base,i)):((j / base) * (- Math.pow(base,(- i))))));

var G__23094 = (i__23070 + (1));
i__23070 = G__23094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23071),thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__23066_$_iter__23068.call(null,cljs.core.chunk_rest.call(null,s__23069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23071),null);
}
} else {
var j = cljs.core.first.call(null,s__23069__$2);
return cljs.core.cons.call(null,(((i >= (0)))?((j / base) * Math.pow(base,i)):((j / base) * (- Math.pow(base,(- i))))),thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__23066_$_iter__23068.call(null,cljs.core.rest.call(null,s__23069__$2)));
}
} else {
return null;
}
break;
}
});})(s__23067__$1,i,xs__5205__auto__,temp__4657__auto__,vec__23065,d1l,d2l,ticks,vec__23064,d1,d2))
,null,null));
});})(s__23067__$1,i,xs__5205__auto__,temp__4657__auto__,vec__23065,d1l,d2l,ticks,vec__23064,d1,d2))
;
var fs__7255__auto__ = cljs.core.seq.call(null,iterys__7254__auto__.call(null,ticks));
if(fs__7255__auto__){
return cljs.core.concat.call(null,fs__7255__auto__,thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__23066.call(null,cljs.core.rest.call(null,s__23067__$1)));
} else {
var G__23101 = cljs.core.rest.call(null,s__23067__$1);
s__23067__$1 = G__23101;
continue;
}
} else {
return null;
}
break;
}
});})(vec__23065,d1l,d2l,ticks,vec__23064,d1,d2))
,null,null));
});})(vec__23065,d1l,d2l,ticks,vec__23064,d1,d2))
;
return iter__7258__auto__.call(null,cljs.core.range.call(null,d1l,(d2l + (1))));
})());
});
thi.ng.geom.viz.core.log_axis = (function thi$ng$geom$viz$core$log_axis(p__23104){
var map__23110 = p__23104;
var map__23110__$1 = ((((!((map__23110 == null)))?((((map__23110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23110):map__23110);
var spec = map__23110__$1;
var base = cljs.core.get.call(null,map__23110__$1,new cljs.core.Keyword(null,"base","base",185279322),(10));
var domain = cljs.core.get.call(null,map__23110__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var range = cljs.core.get.call(null,map__23110__$1,new cljs.core.Keyword(null,"range","range",1639692286));
return thi.ng.geom.viz.core.axis_common_STAR_.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"scale","scale",-230427353),thi.ng.geom.viz.core.log_scale.call(null,base,domain,range),new cljs.core.Keyword(null,"major","major",-27376078),thi.ng.geom.viz.core.log_tick_marks_major.call(null,base,domain),new cljs.core.Keyword(null,"minor","minor",-608536071),thi.ng.geom.viz.core.log_tick_marks_minor.call(null,base,domain)));
});
thi.ng.geom.viz.core.lens_axis = (function thi$ng$geom$viz$core$lens_axis(p__23116){
var map__23119 = p__23116;
var map__23119__$1 = ((((!((map__23119 == null)))?((((map__23119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23119):map__23119);
var spec = map__23119__$1;
var domain = cljs.core.get.call(null,map__23119__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var range = cljs.core.get.call(null,map__23119__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var focus = cljs.core.get.call(null,map__23119__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var strength = cljs.core.get.call(null,map__23119__$1,new cljs.core.Keyword(null,"strength","strength",-415606478),0.5);
var major = cljs.core.get.call(null,map__23119__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__23119__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var major_SINGLEQUOTE_ = (cljs.core.truth_(major)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,major):null);
var minor_SINGLEQUOTE_ = (cljs.core.truth_(minor)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,minor):null);
var minor_SINGLEQUOTE___$1 = (cljs.core.truth_((function (){var and__6474__auto__ = major_SINGLEQUOTE_;
if(cljs.core.truth_(and__6474__auto__)){
return minor_SINGLEQUOTE_;
} else {
return and__6474__auto__;
}
})())?cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,major_SINGLEQUOTE_)),minor_SINGLEQUOTE_):minor_SINGLEQUOTE_);
var focus__$1 = (function (){var or__6486__auto__ = focus;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return (cljs.core.apply.call(null,cljs.core._PLUS_,domain) / 2.0);
}
})();
return thi.ng.geom.viz.core.axis_common_STAR_.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"scale","scale",-230427353),thi.ng.geom.viz.core.lens_scale.call(null,focus__$1,strength,domain,range),new cljs.core.Keyword(null,"major","major",-27376078),major_SINGLEQUOTE_,new cljs.core.Keyword(null,"minor","minor",-608536071),minor_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"focus","focus",234677911),focus__$1,new cljs.core.Keyword(null,"strength","strength",-415606478),strength));
});
thi.ng.geom.viz.core.svg_triangle_up = (function thi$ng$geom$viz$core$svg_triangle_up(w){
var h = (w * Math.sin(thi.ng.math.core.THIRD_PI));
var w__$1 = (0.5 * w);
return ((function (h,w__$1){
return (function (p__23155){
var vec__23156 = p__23155;
var vec__23157 = cljs.core.nth.call(null,vec__23156,(0),null);
var x = cljs.core.nth.call(null,vec__23157,(0),null);
var y = cljs.core.nth.call(null,vec__23157,(1),null);
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w__$1),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w__$1),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});
;})(h,w__$1))
});
thi.ng.geom.viz.core.svg_triangle_down = (function thi$ng$geom$viz$core$svg_triangle_down(w){
var h = (w * Math.sin(thi.ng.math.core.THIRD_PI));
var w__$1 = (0.5 * w);
return ((function (h,w__$1){
return (function (p__23171){
var vec__23172 = p__23171;
var vec__23173 = cljs.core.nth.call(null,vec__23172,(0),null);
var x = cljs.core.nth.call(null,vec__23173,(0),null);
var y = cljs.core.nth.call(null,vec__23173,(1),null);
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w__$1),(y - h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w__$1),(y - h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});
;})(h,w__$1))
});
thi.ng.geom.viz.core.svg_square = (function thi$ng$geom$viz$core$svg_square(r){
var d = (r * 2.0);
return ((function (d){
return (function (p__23190){
var vec__23191 = p__23190;
var vec__23192 = cljs.core.nth.call(null,vec__23191,(0),null);
var x = cljs.core.nth.call(null,vec__23192,(0),null);
var y = cljs.core.nth.call(null,vec__23192,(1),null);
return thi.ng.geom.svg.core.rect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - r),(y - r)], null),d,d);
});
;})(d))
});
thi.ng.geom.viz.core.labeled_rect_horizontal = (function thi$ng$geom$viz$core$labeled_rect_horizontal(p__23196){
var map__23210 = p__23196;
var map__23210__$1 = ((((!((map__23210 == null)))?((((map__23210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23210):map__23210);
var h = cljs.core.get.call(null,map__23210__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var r = cljs.core.get.call(null,map__23210__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var label = cljs.core.get.call(null,map__23210__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var fill = cljs.core.get.call(null,map__23210__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var min_width = cljs.core.get.call(null,map__23210__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var base_line = cljs.core.get.call(null,map__23210__$1,new cljs.core.Keyword(null,"base-line","base-line",577717338));
var r2 = ((-2) * r);
var h2 = (0.5 * h);
return ((function (r2,h2,map__23210,map__23210__$1,h,r,label,fill,min_width,base_line){
return (function (p__23212){
var vec__23213 = p__23212;
var vec__23214 = cljs.core.nth.call(null,vec__23213,(0),null);
var ax = cljs.core.nth.call(null,vec__23214,(0),null);
var ay = cljs.core.nth.call(null,vec__23214,(1),null);
var a = vec__23214;
var vec__23215 = cljs.core.nth.call(null,vec__23213,(1),null);
var bx = cljs.core.nth.call(null,vec__23215,(0),null);
var b = vec__23215;
var item = cljs.core.nth.call(null,vec__23213,(2),null);
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,thi.ng.geom.svg.core.rect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ax - r),(ay - h2)], null),((bx - ax) - r2),h,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill.call(null,item),new cljs.core.Keyword(null,"rx","rx",1627208482),r,new cljs.core.Keyword(null,"ry","ry",-334598563),r], null)),(((min_width < (bx - ax)))?thi.ng.geom.svg.core.text.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax,(base_line + ay)], null),label.call(null,item)):null));
});
;})(r2,h2,map__23210,map__23210__$1,h,r,label,fill,min_width,base_line))
});
thi.ng.geom.viz.core.circle_cell = (function thi$ng$geom$viz$core$circle_cell(a,b,c,d,col){
return thi.ng.geom.svg.core.circle.call(null,thi.ng.geom.core.utils.centroid.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null)),(0.5 * thi.ng.geom.core.dist.call(null,a,b)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),col], null));
});
thi.ng.geom.viz.core.svg_line_plot = (function thi$ng$geom$viz$core$svg_line_plot(v_spec,d_spec){
return thi.ng.geom.svg.core.line_strip.call(null,cljs.core.map.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,d_spec)),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec));
});
thi.ng.geom.viz.core.svg_area_plot = (function thi$ng$geom$viz$core$svg_area_plot(p__23232,p__23233){
var map__23246 = p__23232;
var map__23246__$1 = ((((!((map__23246 == null)))?((((map__23246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23246):map__23246);
var v_spec = map__23246__$1;
var y_axis = cljs.core.get.call(null,map__23246__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__23246__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__23247 = p__23233;
var map__23247__$1 = ((((!((map__23247 == null)))?((((map__23247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23247):map__23247);
var d_spec = map__23247__$1;
var res = cljs.core.get.call(null,map__23247__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
var ry1 = cljs.core.first.call(null,new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis));
var points = cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,cljs.core.assoc.call(null,v_spec,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.core.vector.vec2),d_spec));
var p = thi.ng.geom.core.vector.vec2.call(null,cljs.core.first.call(null,cljs.core.peek.call(null,points)),ry1);
var q = thi.ng.geom.core.vector.vec2.call(null,cljs.core.ffirst.call(null,points),ry1);
var points__$1 = cljs.core.concat.call(null,points,cljs.core.mapv.call(null,cljs.core.partial.call(null,thi.ng.geom.core.mix,p,q),thi.ng.math.core.norm_range.call(null,(function (){var or__6486__auto__ = res;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return (1);
}
})())));
return thi.ng.geom.svg.core.polygon.call(null,cljs.core.mapv.call(null,project,points__$1),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec));
});
thi.ng.geom.viz.core.svg_radar_plot = (function thi$ng$geom$viz$core$svg_radar_plot(v_spec,p__23255){
var map__23261 = p__23255;
var map__23261__$1 = ((((!((map__23261 == null)))?((((map__23261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23261):map__23261);
var d_spec = map__23261__$1;
var shape = cljs.core.get.call(null,map__23261__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),thi.ng.geom.svg.core.polygon);
return shape.call(null,cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,d_spec)),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec));
});
thi.ng.geom.viz.core.svg_radar_plot_minmax = (function thi$ng$geom$viz$core$svg_radar_plot_minmax(v_spec,p__23272){
var map__23280 = p__23272;
var map__23280__$1 = ((((!((map__23280 == null)))?((((map__23280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23280):map__23280);
var d_spec = map__23280__$1;
var item_pos_min = cljs.core.get.call(null,map__23280__$1,new cljs.core.Keyword(null,"item-pos-min","item-pos-min",-938894508));
var item_pos_max = cljs.core.get.call(null,map__23280__$1,new cljs.core.Keyword(null,"item-pos-max","item-pos-max",1243635616));
var shape = cljs.core.get.call(null,map__23280__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__23280,map__23280__$1,d_spec,item_pos_min,item_pos_max){
return (function (p1__23269_SHARP_,p2__23270_SHARP_,p3__23271_SHARP_){
return thi.ng.geom.svg.core.path.call(null,cljs.core.concat.call(null,p1__23269_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Z","Z",459124588)], null)], null),p2__23270_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Z","Z",459124588)], null)], null)),p3__23271_SHARP_);
});})(map__23280,map__23280__$1,d_spec,item_pos_min,item_pos_max))
);
var min_points = thi.ng.geom.viz.core.points__GT_path_segments.call(null,cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,cljs.core.assoc.call(null,d_spec,new cljs.core.Keyword(null,"item-pos","item-pos",390857330),(function (){var or__6486__auto__ = item_pos_min;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return ((function (or__6486__auto__,map__23280,map__23280__$1,d_spec,item_pos_min,item_pos_max,shape){
return (function (i){
return cljs.core.take.call(null,(2),i);
});
;})(or__6486__auto__,map__23280,map__23280__$1,d_spec,item_pos_min,item_pos_max,shape))
}
})()))));
var max_points = thi.ng.geom.viz.core.points__GT_path_segments.call(null,cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,cljs.core.assoc.call(null,d_spec,new cljs.core.Keyword(null,"item-pos","item-pos",390857330),(function (){var or__6486__auto__ = item_pos_max;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return ((function (or__6486__auto__,min_points,map__23280,map__23280__$1,d_spec,item_pos_min,item_pos_max,shape){
return (function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.nth.call(null,i,(2))], null);
});
;})(or__6486__auto__,min_points,map__23280,map__23280__$1,d_spec,item_pos_min,item_pos_max,shape))
}
})()))));
return shape.call(null,max_points,min_points,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec),new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd"));
});
thi.ng.geom.viz.core.svg_scatter_plot = (function thi$ng$geom$viz$core$svg_scatter_plot(v_spec,p__23300){
var map__23308 = p__23300;
var map__23308__$1 = ((((!((map__23308 == null)))?((((map__23308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23308):map__23308);
var d_spec = map__23308__$1;
var attribs = cljs.core.get.call(null,map__23308__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__23308__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,thi.ng.geom.viz.core.process_points.call(null,v_spec,cljs.core.assoc.call(null,d_spec,new cljs.core.Keyword(null,"shape","shape",1190694006),(function (){var or__6486__auto__ = shape;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return ((function (or__6486__auto__,map__23308,map__23308__$1,d_spec,attribs,shape){
return (function (p__23312){
var vec__23313 = p__23312;
var p = cljs.core.nth.call(null,vec__23313,(0),null);
return thi.ng.geom.svg.core.circle.call(null,p,(3));
});
;})(or__6486__auto__,map__23308,map__23308__$1,d_spec,attribs,shape))
}
})())));
});
thi.ng.geom.viz.core.svg_bar_plot = (function thi$ng$geom$viz$core$svg_bar_plot(p__23318,p__23319){
var map__23327 = p__23318;
var map__23327__$1 = ((((!((map__23327 == null)))?((((map__23327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23327):map__23327);
var x_axis = cljs.core.get.call(null,map__23327__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__23327__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__23327__$1,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.core.vector.vec2);
var map__23328 = p__23319;
var map__23328__$1 = ((((!((map__23328 == null)))?((((map__23328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23328):map__23328);
var values = cljs.core.get.call(null,map__23328__$1,new cljs.core.Keyword(null,"values","values",372645556));
var attribs = cljs.core.get.call(null,map__23328__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__23328__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__23327,map__23327__$1,x_axis,y_axis,project,map__23328,map__23328__$1,values,attribs){
return (function (a,b,_){
return thi.ng.geom.svg.core.line.call(null,a,b);
});})(map__23327,map__23327__$1,x_axis,y_axis,project,map__23328,map__23328__$1,values,attribs))
);
var item_pos = cljs.core.get.call(null,map__23328__$1,new cljs.core.Keyword(null,"item-pos","item-pos",390857330),cljs.core.identity);
var interleave = cljs.core.get.call(null,map__23328__$1,new cljs.core.Keyword(null,"interleave","interleave",-1475043421),(1));
var offset = cljs.core.get.call(null,map__23328__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var bar_width = cljs.core.get.call(null,map__23328__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523),(0));
var domain = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(x_axis);
var base_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis).call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(y_axis)));
var mapper = thi.ng.geom.viz.core.value_mapper.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis));
var offset__$1 = ((-0.5 * (interleave * bar_width)) + ((offset + 0.5) * bar_width));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,item_pos,cljs.core.identity)),cljs.core.filter.call(null,((function (domain,base_y,mapper,offset__$1,map__23327,map__23327__$1,x_axis,y_axis,project,map__23328,map__23328__$1,values,attribs,shape,item_pos,interleave,offset,bar_width){
return (function (p1__23317_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,domain,cljs.core.ffirst.call(null,p1__23317_SHARP_));
});})(domain,base_y,mapper,offset__$1,map__23327,map__23327__$1,x_axis,y_axis,project,map__23328,map__23328__$1,values,attribs,shape,item_pos,interleave,offset,bar_width))
),cljs.core.map.call(null,((function (domain,base_y,mapper,offset__$1,map__23327,map__23327__$1,x_axis,y_axis,project,map__23328,map__23328__$1,values,attribs,shape,item_pos,interleave,offset,bar_width){
return (function (p__23336){
var vec__23337 = p__23336;
var p = cljs.core.nth.call(null,vec__23337,(0),null);
var i = cljs.core.nth.call(null,vec__23337,(1),null);
var vec__23338 = mapper.call(null,p);
var ax = cljs.core.nth.call(null,vec__23338,(0),null);
var ay = cljs.core.nth.call(null,vec__23338,(1),null);
var ax__$1 = (ax + offset__$1);
return shape.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax__$1,ay], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax__$1,base_y], null)),i);
});})(domain,base_y,mapper,offset__$1,map__23327,map__23327__$1,x_axis,y_axis,project,map__23328,map__23328__$1,values,attribs,shape,item_pos,interleave,offset,bar_width))
)),values));
});
thi.ng.geom.viz.core.svg_heatmap = (function thi$ng$geom$viz$core$svg_heatmap(p__23364,p__23365){
var map__23420 = p__23364;
var map__23420__$1 = ((((!((map__23420 == null)))?((((map__23420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23420):map__23420);
var x_axis = cljs.core.get.call(null,map__23420__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__23420__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__23420__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__23421 = p__23365;
var map__23421__$1 = ((((!((map__23421 == null)))?((((map__23421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23421):map__23421);
var d_spec = map__23421__$1;
var matrix = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
var value_domain = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"value-domain","value-domain",1224230851),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0], null));
var clamp = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"clamp","clamp",1803814940));
var palette = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"palette","palette",-456203511));
var palette_scale = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"palette-scale","palette-scale",2003276610),thi.ng.geom.viz.core.linear_scale);
var attribs = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__23420,map__23420__$1,x_axis,y_axis,project,map__23421,map__23421__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs){
return (function (p1__23359_SHARP_,p2__23360_SHARP_,p3__23361_SHARP_,p4__23362_SHARP_,p5__23363_SHARP_){
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23359_SHARP_,p2__23360_SHARP_,p3__23361_SHARP_,p4__23362_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),p5__23363_SHARP_], null));
});})(map__23420,map__23420__$1,x_axis,y_axis,project,map__23421,map__23421__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs))
);
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
var pmax = (cljs.core.count.call(null,palette) - (1));
var scale_v = palette_scale.call(null,value_domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),pmax], null));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,(function (){var iter__7258__auto__ = ((function (scale_x,scale_y,pmax,scale_v,map__23420,map__23420__$1,x_axis,y_axis,project,map__23421,map__23421__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape){
return (function thi$ng$geom$viz$core$svg_heatmap_$_iter__23428(s__23429){
return (new cljs.core.LazySeq(null,((function (scale_x,scale_y,pmax,scale_v,map__23420,map__23420__$1,x_axis,y_axis,project,map__23421,map__23421__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape){
return (function (){
var s__23429__$1 = s__23429;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23429__$1);
if(temp__4657__auto__){
var s__23429__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23429__$2)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,s__23429__$2);
var size__7257__auto__ = cljs.core.count.call(null,c__7256__auto__);
var b__23431 = cljs.core.chunk_buffer.call(null,size__7257__auto__);
if((function (){var i__23430 = (0);
while(true){
if((i__23430 < size__7257__auto__)){
var p = cljs.core._nth.call(null,c__7256__auto__,i__23430);
var vec__23434 = p;
var y = cljs.core.nth.call(null,vec__23434,(0),null);
var x = cljs.core.nth.call(null,vec__23434,(1),null);
var v = thi.ng.ndarray.core.get_at.call(null,matrix,y,x);
if(cljs.core.truth_((function (){var or__6486__auto__ = clamp;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return thi.ng.math.core.in_range_QMARK_.call(null,value_domain,v);
}
})())){
cljs.core.chunk_append.call(null,b__23431,shape.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,(y + (1)))], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,(y + (1)))], null)),palette.call(null,thi.ng.math.core.clamp.call(null,(scale_v.call(null,v) | (0)),(0),pmax))));

var G__23438 = (i__23430 + (1));
i__23430 = G__23438;
continue;
} else {
var G__23441 = (i__23430 + (1));
i__23430 = G__23441;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23431),thi$ng$geom$viz$core$svg_heatmap_$_iter__23428.call(null,cljs.core.chunk_rest.call(null,s__23429__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23431),null);
}
} else {
var p = cljs.core.first.call(null,s__23429__$2);
var vec__23435 = p;
var y = cljs.core.nth.call(null,vec__23435,(0),null);
var x = cljs.core.nth.call(null,vec__23435,(1),null);
var v = thi.ng.ndarray.core.get_at.call(null,matrix,y,x);
if(cljs.core.truth_((function (){var or__6486__auto__ = clamp;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return thi.ng.math.core.in_range_QMARK_.call(null,value_domain,v);
}
})())){
return cljs.core.cons.call(null,shape.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,(y + (1)))], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,(y + (1)))], null)),palette.call(null,thi.ng.math.core.clamp.call(null,(scale_v.call(null,v) | (0)),(0),pmax))),thi$ng$geom$viz$core$svg_heatmap_$_iter__23428.call(null,cljs.core.rest.call(null,s__23429__$2)));
} else {
var G__23443 = cljs.core.rest.call(null,s__23429__$2);
s__23429__$1 = G__23443;
continue;
}
}
} else {
return null;
}
break;
}
});})(scale_x,scale_y,pmax,scale_v,map__23420,map__23420__$1,x_axis,y_axis,project,map__23421,map__23421__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape))
,null,null));
});})(scale_x,scale_y,pmax,scale_v,map__23420,map__23420__$1,x_axis,y_axis,project,map__23421,map__23421__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape))
;
return iter__7258__auto__.call(null,thi.ng.ndarray.core.position_seq.call(null,matrix));
})());
});
thi.ng.geom.viz.core.matrix_2d = (function thi$ng$geom$viz$core$matrix_2d(w,h,values){
return thi.ng.ndarray.core.ndarray.call(null,new cljs.core.Keyword(null,"float32","float32",-2119815775),values,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,w], null));
});
thi.ng.geom.viz.core.contour_matrix = (function thi$ng$geom$viz$core$contour_matrix(w,h,values){
return thi.ng.ndarray.contours.set_border_2d.call(null,thi.ng.geom.viz.core.matrix_2d.call(null,w,h,values),-1.0E9);
});
thi.ng.geom.viz.core.contour__GT_svg = (function thi$ng$geom$viz$core$contour__GT_svg(scale_x,scale_y,project){
return (function (attribs,contour){
var contour__$1 = cljs.core.map.call(null,(function (p__23451){
var vec__23452 = p__23451;
var y = cljs.core.nth.call(null,vec__23452,(0),null);
var x = cljs.core.nth.call(null,vec__23452,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null);
}),contour);
return thi.ng.geom.svg.core.polygon.call(null,cljs.core.map.call(null,project,contour__$1),attribs);
});
});
thi.ng.geom.viz.core.svg_contour_plot = (function thi$ng$geom$viz$core$svg_contour_plot(p__23453,p__23454){
var map__23467 = p__23453;
var map__23467__$1 = ((((!((map__23467 == null)))?((((map__23467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23467):map__23467);
var x_axis = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__23468 = p__23454;
var map__23468__$1 = ((((!((map__23468 == null)))?((((map__23468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23468):map__23468);
var matrix = cljs.core.get.call(null,map__23468__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
var attribs = cljs.core.get.call(null,map__23468__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var levels = cljs.core.get.call(null,map__23468__$1,new cljs.core.Keyword(null,"levels","levels",-950747887));
var palette = cljs.core.get.call(null,map__23468__$1,new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null));
var palette_scale = cljs.core.get.call(null,map__23468__$1,new cljs.core.Keyword(null,"palette-scale","palette-scale",2003276610),thi.ng.geom.viz.core.linear_scale);
var value_domain = cljs.core.get.call(null,map__23468__$1,new cljs.core.Keyword(null,"value-domain","value-domain",1224230851),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0], null));
var contour_attribs = cljs.core.get.call(null,map__23468__$1,new cljs.core.Keyword(null,"contour-attribs","contour-attribs",464584885),cljs.core.constantly.call(null,null));
var pmax = (cljs.core.count.call(null,palette) - (1));
var scale_v = palette_scale.call(null,value_domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),pmax], null));
var contour_fn = thi.ng.geom.viz.core.contour__GT_svg.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis),project);
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,cljs.core.mapv.call(null,((function (pmax,scale_v,contour_fn,map__23467,map__23467__$1,x_axis,y_axis,project,map__23468,map__23468__$1,matrix,attribs,levels,palette,palette_scale,value_domain,contour_attribs){
return (function (iso){
var c_attribs = contour_attribs.call(null,palette.call(null,thi.ng.math.core.clamp.call(null,(scale_v.call(null,iso) | (0)),(0),pmax)));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,cljs.core.partial.call(null,contour_fn,c_attribs),thi.ng.ndarray.contours.find_contours_2d.call(null,matrix,iso)));
});})(pmax,scale_v,contour_fn,map__23467,map__23467__$1,x_axis,y_axis,project,map__23468,map__23468__$1,matrix,attribs,levels,palette,palette_scale,value_domain,contour_attribs))
,cljs.core.sort.call(null,levels)));
});
thi.ng.geom.viz.core.overlap_QMARK_ = (function thi$ng$geom$viz$core$overlap_QMARK_(p__23474,p__23475){
var vec__23478 = p__23474;
var a = cljs.core.nth.call(null,vec__23478,(0),null);
var b = cljs.core.nth.call(null,vec__23478,(1),null);
var vec__23479 = p__23475;
var c = cljs.core.nth.call(null,vec__23479,(0),null);
var d = cljs.core.nth.call(null,vec__23479,(1),null);
return ((a <= d)) && ((b >= c));
});
thi.ng.geom.viz.core.compute_row_stacking = (function thi$ng$geom$viz$core$compute_row_stacking(item_range,coll){
return cljs.core.reduce.call(null,(function (grid,x){
var r = item_range.call(null,x);
var G__23510 = grid;
var vec__23511 = G__23510;
var row = cljs.core.nth.call(null,vec__23511,(0),null);
var more = cljs.core.nthnext.call(null,vec__23511,(1));
var idx = (0);
var G__23510__$1 = G__23510;
var idx__$1 = idx;
while(true){
var vec__23512 = G__23510__$1;
var row__$1 = cljs.core.nth.call(null,vec__23512,(0),null);
var more__$1 = cljs.core.nthnext.call(null,vec__23512,(1));
var idx__$2 = idx__$1;
if(((row__$1 == null)) || (cljs.core.not.call(null,cljs.core.some.call(null,((function (G__23510__$1,idx__$1,vec__23512,row__$1,more__$1,idx__$2,G__23510,vec__23511,row,more,idx,r){
return (function (p1__23480_SHARP_){
return thi.ng.geom.viz.core.overlap_QMARK_.call(null,r,item_range.call(null,p1__23480_SHARP_));
});})(G__23510__$1,idx__$1,vec__23512,row__$1,more__$1,idx__$2,G__23510,vec__23511,row,more,idx,r))
,row__$1)))){
return cljs.core.update_in.call(null,grid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx__$2], null),((function (G__23510__$1,idx__$1,vec__23512,row__$1,more__$1,idx__$2,G__23510,vec__23511,row,more,idx,r){
return (function (p1__23481_SHARP_){
return cljs.core.conj.call(null,(function (){var or__6486__auto__ = p1__23481_SHARP_;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),x);
});})(G__23510__$1,idx__$1,vec__23512,row__$1,more__$1,idx__$2,G__23510,vec__23511,row,more,idx,r))
);
} else {
var G__23517 = more__$1;
var G__23518 = (idx__$2 + (1));
G__23510__$1 = G__23517;
idx__$1 = G__23518;
continue;
}
break;
}
}),cljs.core.PersistentVector.EMPTY,coll);
});
thi.ng.geom.viz.core.process_interval_row = (function thi$ng$geom$viz$core$process_interval_row(item_range,mapper,p__23523){
var vec__23529 = p__23523;
var d1 = cljs.core.nth.call(null,vec__23529,(0),null);
var d2 = cljs.core.nth.call(null,vec__23529,(1),null);
return ((function (vec__23529,d1,d2){
return (function (i,row){
return cljs.core.map.call(null,((function (vec__23529,d1,d2){
return (function (item){
var vec__23530 = item_range.call(null,item);
var a = cljs.core.nth.call(null,vec__23530,(0),null);
var b = cljs.core.nth.call(null,vec__23530,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mapper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__6817__auto__ = d1;
var y__6818__auto__ = a;
return ((x__6817__auto__ > y__6818__auto__) ? x__6817__auto__ : y__6818__auto__);
})(),i], null)),mapper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__6824__auto__ = d2;
var y__6825__auto__ = b;
return ((x__6824__auto__ < y__6825__auto__) ? x__6824__auto__ : y__6825__auto__);
})(),i], null)),item], null);
});})(vec__23529,d1,d2))
,row);
});
;})(vec__23529,d1,d2))
});
thi.ng.geom.viz.core.svg_stacked_interval_plot = (function thi$ng$geom$viz$core$svg_stacked_interval_plot(p__23539,p__23540){
var map__23547 = p__23539;
var map__23547__$1 = ((((!((map__23547 == null)))?((((map__23547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23547):map__23547);
var x_axis = cljs.core.get.call(null,map__23547__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__23547__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var map__23548 = p__23540;
var map__23548__$1 = ((((!((map__23548 == null)))?((((map__23548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23548):map__23548);
var values = cljs.core.get.call(null,map__23548__$1,new cljs.core.Keyword(null,"values","values",372645556));
var attribs = cljs.core.get.call(null,map__23548__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__23548__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__23547,map__23547__$1,x_axis,y_axis,map__23548,map__23548__$1,values,attribs){
return (function (p__23555){
var vec__23556 = p__23555;
var a = cljs.core.nth.call(null,vec__23556,(0),null);
var b = cljs.core.nth.call(null,vec__23556,(1),null);
return thi.ng.geom.svg.core.line.call(null,a,b);
});})(map__23547,map__23547__$1,x_axis,y_axis,map__23548,map__23548__$1,values,attribs))
);
var item_range = cljs.core.get.call(null,map__23548__$1,new cljs.core.Keyword(null,"item-range","item-range",1733769894),cljs.core.identity);
var offset = cljs.core.get.call(null,map__23548__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
var domain = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(x_axis);
var mapper = thi.ng.geom.viz.core.value_mapper.call(null,scale_x,scale_y);
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,cljs.core.mapv.call(null,shape,cljs.core.mapcat.call(null,thi.ng.geom.viz.core.process_interval_row.call(null,item_range,mapper,domain),cljs.core.range.call(null,offset,1000000.0),thi.ng.geom.viz.core.compute_row_stacking.call(null,item_range,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.first,item_range),cljs.core.filter.call(null,((function (scale_x,scale_y,domain,mapper,map__23547,map__23547__$1,x_axis,y_axis,map__23548,map__23548__$1,values,attribs,shape,item_range,offset){
return (function (p1__23538_SHARP_){
return thi.ng.geom.viz.core.overlap_QMARK_.call(null,domain,item_range.call(null,p1__23538_SHARP_));
});})(scale_x,scale_y,domain,mapper,map__23547,map__23547__$1,x_axis,y_axis,map__23548,map__23548__$1,values,attribs,shape,item_range,offset))
,values))))));
});
thi.ng.geom.viz.core.svg_axis_STAR_ = (function thi$ng$geom$viz$core$svg_axis_STAR_(p__23603,axis,tick1_fn,tick2_fn,label_fn){
var map__23609 = p__23603;
var map__23609__$1 = ((((!((map__23609 == null)))?((((map__23609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23609):map__23609);
var major = cljs.core.get.call(null,map__23609__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__23609__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var attribs = cljs.core.get.call(null,map__23609__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var label_style = cljs.core.get.call(null,map__23609__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
return thi.ng.geom.svg.core.group.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000"], null),attribs),cljs.core.map.call(null,tick1_fn,major),cljs.core.map.call(null,tick2_fn,minor),cljs.core.apply.call(null,thi.ng.geom.svg.core.group,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none"], null),label_style),cljs.core.mapv.call(null,label_fn,major)),axis);
});
thi.ng.geom.viz.core.svg_x_axis_cartesian = (function thi$ng$geom$viz$core$svg_x_axis_cartesian(p__23624){
var map__23628 = p__23624;
var map__23628__$1 = ((((!((map__23628 == null)))?((((map__23628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23628):map__23628);
var spec = map__23628__$1;
var vec__23629 = cljs.core.get.call(null,map__23628__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var r1 = cljs.core.nth.call(null,vec__23629,(0),null);
var r2 = cljs.core.nth.call(null,vec__23629,(1),null);
var scale = cljs.core.get.call(null,map__23628__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var major_size = cljs.core.get.call(null,map__23628__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375));
var minor_size = cljs.core.get.call(null,map__23628__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109));
var label_dist = cljs.core.get.call(null,map__23628__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
var pos = cljs.core.get.call(null,map__23628__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = cljs.core.get.call(null,map__23628__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var y_major = (pos + major_size);
var y_minor = (pos + minor_size);
var y_label = (pos + label_dist);
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,spec,thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,pos], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r2,pos], null)),((function (y_major,y_minor,y_label,map__23628,map__23628__$1,spec,vec__23629,r1,r2,scale,major_size,minor_size,label_dist,pos,label){
return (function (p1__23621_SHARP_){
var x = scale.call(null,p1__23621_SHARP_);
return thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,pos], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_major], null));
});})(y_major,y_minor,y_label,map__23628,map__23628__$1,spec,vec__23629,r1,r2,scale,major_size,minor_size,label_dist,pos,label))
,((function (y_major,y_minor,y_label,map__23628,map__23628__$1,spec,vec__23629,r1,r2,scale,major_size,minor_size,label_dist,pos,label){
return (function (p1__23622_SHARP_){
var x = scale.call(null,p1__23622_SHARP_);
return thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,pos], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_minor], null));
});})(y_major,y_minor,y_label,map__23628,map__23628__$1,spec,vec__23629,r1,r2,scale,major_size,minor_size,label_dist,pos,label))
,((function (y_major,y_minor,y_label,map__23628,map__23628__$1,spec,vec__23629,r1,r2,scale,major_size,minor_size,label_dist,pos,label){
return (function (p1__23623_SHARP_){
return label.call(null,thi.ng.geom.core.vector.vec2.call(null,scale.call(null,p1__23623_SHARP_),y_label),p1__23623_SHARP_);
});})(y_major,y_minor,y_label,map__23628,map__23628__$1,spec,vec__23629,r1,r2,scale,major_size,minor_size,label_dist,pos,label))
);
});
thi.ng.geom.viz.core.svg_y_axis_cartesian = (function thi$ng$geom$viz$core$svg_y_axis_cartesian(p__23636){
var map__23640 = p__23636;
var map__23640__$1 = ((((!((map__23640 == null)))?((((map__23640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23640):map__23640);
var spec = map__23640__$1;
var vec__23641 = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var r1 = cljs.core.nth.call(null,vec__23641,(0),null);
var r2 = cljs.core.nth.call(null,vec__23641,(1),null);
var scale = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var major_size = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375));
var minor_size = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109));
var label_dist = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
var label_y = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"label-y","label-y",-1792935845),(0));
var pos = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var x_major = (pos - major_size);
var x_minor = (pos - minor_size);
var x_label = (pos - label_dist);
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,spec,thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,r1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,r2], null)),((function (x_major,x_minor,x_label,map__23640,map__23640__$1,spec,vec__23641,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label){
return (function (p1__23633_SHARP_){
var y = scale.call(null,p1__23633_SHARP_);
return thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_major,y], null));
});})(x_major,x_minor,x_label,map__23640,map__23640__$1,spec,vec__23641,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label))
,((function (x_major,x_minor,x_label,map__23640,map__23640__$1,spec,vec__23641,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label){
return (function (p1__23634_SHARP_){
var y = scale.call(null,p1__23634_SHARP_);
return thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_minor,y], null));
});})(x_major,x_minor,x_label,map__23640,map__23640__$1,spec,vec__23641,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label))
,((function (x_major,x_minor,x_label,map__23640,map__23640__$1,spec,vec__23641,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label){
return (function (p1__23635_SHARP_){
return label.call(null,thi.ng.geom.core.vector.vec2.call(null,x_label,(scale.call(null,p1__23635_SHARP_) + label_y)),p1__23635_SHARP_);
});})(x_major,x_minor,x_label,map__23640,map__23640__$1,spec,vec__23641,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label))
);
});
thi.ng.geom.viz.core.select_ticks = (function thi$ng$geom$viz$core$select_ticks(axis,minor_QMARK_){
if(cljs.core.truth_(minor_QMARK_)){
return cljs.core.concat.call(null,new cljs.core.Keyword(null,"minor","minor",-608536071).cljs$core$IFn$_invoke$arity$1(axis),new cljs.core.Keyword(null,"major","major",-27376078).cljs$core$IFn$_invoke$arity$1(axis));
} else {
return new cljs.core.Keyword(null,"major","major",-27376078).cljs$core$IFn$_invoke$arity$1(axis);
}
});
thi.ng.geom.viz.core.svg_axis_grid2d_cartesian = (function thi$ng$geom$viz$core$svg_axis_grid2d_cartesian(x_axis,y_axis,p__23681){
var map__23686 = p__23681;
var map__23686__$1 = ((((!((map__23686 == null)))?((((map__23686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23686):map__23686);
var attribs = cljs.core.get.call(null,map__23686__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var minor_x = cljs.core.get.call(null,map__23686__$1,new cljs.core.Keyword(null,"minor-x","minor-x",-230860299));
var minor_y = cljs.core.get.call(null,map__23686__$1,new cljs.core.Keyword(null,"minor-y","minor-y",388125550));
var vec__23688 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(x_axis);
var x1 = cljs.core.nth.call(null,vec__23688,(0),null);
var x2 = cljs.core.nth.call(null,vec__23688,(1),null);
var vec__23689 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var y1 = cljs.core.nth.call(null,vec__23689,(0),null);
var y2 = cljs.core.nth.call(null,vec__23689,(1),null);
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
return thi.ng.geom.svg.core.group.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ccc",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1 1"], null),attribs),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?cljs.core.map.call(null,((function (vec__23688,x1,x2,vec__23689,y1,y2,scale_x,scale_y,map__23686,map__23686__$1,attribs,minor_x,minor_y){
return (function (p1__23663_SHARP_){
var x = scale_x.call(null,p1__23663_SHARP_);
return thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y2], null));
});})(vec__23688,x1,x2,vec__23689,y1,y2,scale_x,scale_y,map__23686,map__23686__$1,attribs,minor_x,minor_y))
,thi.ng.geom.viz.core.select_ticks.call(null,x_axis,minor_x)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?cljs.core.map.call(null,((function (vec__23688,x1,x2,vec__23689,y1,y2,scale_x,scale_y,map__23686,map__23686__$1,attribs,minor_x,minor_y){
return (function (p1__23664_SHARP_){
var y = scale_y.call(null,p1__23664_SHARP_);
return thi.ng.geom.svg.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y], null));
});})(vec__23688,x1,x2,vec__23689,y1,y2,scale_x,scale_y,map__23686,map__23686__$1,attribs,minor_x,minor_y))
,thi.ng.geom.viz.core.select_ticks.call(null,y_axis,minor_y)):null));
});
thi.ng.geom.viz.core.svg_plot2d_cartesian = (function thi$ng$geom$viz$core$svg_plot2d_cartesian(p__23700){
var map__23703 = p__23700;
var map__23703__$1 = ((((!((map__23703 == null)))?((((map__23703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23703):map__23703);
var opts = map__23703__$1;
var x_axis = cljs.core.get.call(null,map__23703__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__23703__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var grid = cljs.core.get.call(null,map__23703__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var data = cljs.core.get.call(null,map__23703__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.core.vector.vec2);
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(grid)?thi.ng.geom.viz.core.svg_axis_grid2d_cartesian.call(null,x_axis,y_axis,grid):null),cljs.core.map.call(null,((function (opts__$1,map__23703,map__23703__$1,opts,x_axis,y_axis,grid,data){
return (function (spec){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(spec).call(null,opts__$1,spec);
});})(opts__$1,map__23703,map__23703__$1,opts,x_axis,y_axis,grid,data))
,data),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?thi.ng.geom.viz.core.svg_x_axis_cartesian.call(null,x_axis):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?thi.ng.geom.viz.core.svg_y_axis_cartesian.call(null,y_axis):null));
});
thi.ng.geom.viz.core.svg_x_axis_polar = (function thi$ng$geom$viz$core$svg_x_axis_polar(p__23708){
var map__23714 = p__23708;
var map__23714__$1 = ((((!((map__23714 == null)))?((((map__23714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23714):map__23714);
var x_axis = cljs.core.get.call(null,map__23714__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var project = cljs.core.get.call(null,map__23714__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var circle = cljs.core.get.call(null,map__23714__$1,new cljs.core.Keyword(null,"circle","circle",1903212362));
var origin = cljs.core.get.call(null,map__23714__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var map__23717 = x_axis;
var map__23717__$1 = ((((!((map__23717 == null)))?((((map__23717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23717):map__23717);
var scale = cljs.core.get.call(null,map__23717__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var major_size = cljs.core.get.call(null,map__23717__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375));
var minor_size = cljs.core.get.call(null,map__23717__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109));
var label_dist = cljs.core.get.call(null,map__23717__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
var pos = cljs.core.get.call(null,map__23717__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = (function (){var or__6486__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(x_axis);
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return thi.ng.geom.viz.core.default_svg_label.call(null,thi.ng.geom.viz.core.value_formatter.call(null,(2)));
}
})();
var vec__23718 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(x_axis);
var r1 = cljs.core.nth.call(null,vec__23718,(0),null);
var r2 = cljs.core.nth.call(null,vec__23718,(1),null);
var o = origin;
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,x_axis,(cljs.core.truth_(circle)?thi.ng.geom.svg.core.circle.call(null,o,pos,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)):thi.ng.geom.svg.core.arc.call(null,o,pos,r1,r2,(thi.ng.math.core.abs_diff.call(null,r1,r2) > thi.ng.math.core.PI),true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null))),((function (map__23717,map__23717__$1,scale,major_size,minor_size,label_dist,pos,label,vec__23718,r1,r2,o,map__23714,map__23714__$1,x_axis,project,circle,origin){
return (function (p1__23705_SHARP_){
var x = scale.call(null,p1__23705_SHARP_);
return thi.ng.geom.svg.core.line.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,pos], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(pos + major_size)], null)));
});})(map__23717,map__23717__$1,scale,major_size,minor_size,label_dist,pos,label,vec__23718,r1,r2,o,map__23714,map__23714__$1,x_axis,project,circle,origin))
,((function (map__23717,map__23717__$1,scale,major_size,minor_size,label_dist,pos,label,vec__23718,r1,r2,o,map__23714,map__23714__$1,x_axis,project,circle,origin){
return (function (p1__23706_SHARP_){
var x = scale.call(null,p1__23706_SHARP_);
return thi.ng.geom.svg.core.line.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,pos], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(pos + minor_size)], null)));
});})(map__23717,map__23717__$1,scale,major_size,minor_size,label_dist,pos,label,vec__23718,r1,r2,o,map__23714,map__23714__$1,x_axis,project,circle,origin))
,((function (map__23717,map__23717__$1,scale,major_size,minor_size,label_dist,pos,label,vec__23718,r1,r2,o,map__23714,map__23714__$1,x_axis,project,circle,origin){
return (function (p1__23707_SHARP_){
var x = scale.call(null,p1__23707_SHARP_);
return label.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(pos + label_dist)], null)),p1__23707_SHARP_);
});})(map__23717,map__23717__$1,scale,major_size,minor_size,label_dist,pos,label,vec__23718,r1,r2,o,map__23714,map__23714__$1,x_axis,project,circle,origin))
);
});
thi.ng.geom.viz.core.svg_y_axis_polar = (function thi$ng$geom$viz$core$svg_y_axis_polar(p__23723){
var map__23729 = p__23723;
var map__23729__$1 = ((((!((map__23729 == null)))?((((map__23729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23729):map__23729);
var y_axis = cljs.core.get.call(null,map__23729__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__23729__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__23731 = y_axis;
var map__23731__$1 = ((((!((map__23731 == null)))?((((map__23731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23731):map__23731);
var scale = cljs.core.get.call(null,map__23731__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var label_y = cljs.core.get.call(null,map__23731__$1,new cljs.core.Keyword(null,"label-y","label-y",-1792935845),(0));
var pos = cljs.core.get.call(null,map__23731__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = (function (){var or__6486__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(y_axis);
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return thi.ng.geom.viz.core.default_svg_label.call(null,thi.ng.geom.viz.core.value_formatter.call(null,(2)));
}
})();
var vec__23732 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var r1 = cljs.core.nth.call(null,vec__23732,(0),null);
var r2 = cljs.core.nth.call(null,vec__23732,(1),null);
var a = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,r1], null));
var b = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,r2], null));
var nl = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.normal.call(null,thi.ng.geom.core._.call(null,a,b)),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526).cljs$core$IFn$_invoke$arity$1(y_axis));
var n1 = thi.ng.geom.core.normalize.call(null,nl,new cljs.core.Keyword(null,"major-size","major-size",-698672375).cljs$core$IFn$_invoke$arity$1(y_axis));
var n2 = thi.ng.geom.core.normalize.call(null,nl,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109).cljs$core$IFn$_invoke$arity$1(y_axis));
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,y_axis,thi.ng.geom.svg.core.line.call(null,a,b),((function (map__23731,map__23731__$1,scale,label_y,pos,label,vec__23732,r1,r2,a,b,nl,n1,n2,map__23729,map__23729__$1,y_axis,project){
return (function (p1__23720_SHARP_){
var p = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,scale.call(null,p1__23720_SHARP_)], null));
return thi.ng.geom.svg.core.line.call(null,p,thi.ng.geom.core._PLUS_.call(null,p,n1));
});})(map__23731,map__23731__$1,scale,label_y,pos,label,vec__23732,r1,r2,a,b,nl,n1,n2,map__23729,map__23729__$1,y_axis,project))
,((function (map__23731,map__23731__$1,scale,label_y,pos,label,vec__23732,r1,r2,a,b,nl,n1,n2,map__23729,map__23729__$1,y_axis,project){
return (function (p1__23721_SHARP_){
var p = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,scale.call(null,p1__23721_SHARP_)], null));
return thi.ng.geom.svg.core.line.call(null,p,thi.ng.geom.core._PLUS_.call(null,p,n2));
});})(map__23731,map__23731__$1,scale,label_y,pos,label,vec__23732,r1,r2,a,b,nl,n1,n2,map__23729,map__23729__$1,y_axis,project))
,((function (map__23731,map__23731__$1,scale,label_y,pos,label,vec__23732,r1,r2,a,b,nl,n1,n2,map__23729,map__23729__$1,y_axis,project){
return (function (p1__23722_SHARP_){
var p = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,(scale.call(null,p1__23722_SHARP_) + label_y)], null));
return label.call(null,thi.ng.geom.core._PLUS_.call(null,p,nl),p1__23722_SHARP_);
});})(map__23731,map__23731__$1,scale,label_y,pos,label,vec__23732,r1,r2,a,b,nl,n1,n2,map__23729,map__23729__$1,y_axis,project))
);
});
thi.ng.geom.viz.core.svg_axis_grid2d_polar = (function thi$ng$geom$viz$core$svg_axis_grid2d_polar(p__23737){
var map__23744 = p__23737;
var map__23744__$1 = ((((!((map__23744 == null)))?((((map__23744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23744):map__23744);
var map__23745 = cljs.core.get.call(null,map__23744__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var map__23745__$1 = ((((!((map__23745 == null)))?((((map__23745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23745):map__23745);
var attribs = cljs.core.get.call(null,map__23745__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var minor_x = cljs.core.get.call(null,map__23745__$1,new cljs.core.Keyword(null,"minor-x","minor-x",-230860299));
var minor_y = cljs.core.get.call(null,map__23745__$1,new cljs.core.Keyword(null,"minor-y","minor-y",388125550));
var x_axis = cljs.core.get.call(null,map__23744__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__23744__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var origin = cljs.core.get.call(null,map__23744__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var circle = cljs.core.get.call(null,map__23744__$1,new cljs.core.Keyword(null,"circle","circle",1903212362));
var project = cljs.core.get.call(null,map__23744__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var vec__23748 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(x_axis);
var x1 = cljs.core.nth.call(null,vec__23748,(0),null);
var x2 = cljs.core.nth.call(null,vec__23748,(1),null);
var vec__23749 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var y1 = cljs.core.nth.call(null,vec__23749,(0),null);
var y2 = cljs.core.nth.call(null,vec__23749,(1),null);
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
var great_QMARK_ = (thi.ng.math.core.abs_diff.call(null,x1,x2) > thi.ng.math.core.PI);
return thi.ng.geom.svg.core.group.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ccc",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1 1"], null),attribs),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?cljs.core.map.call(null,((function (vec__23748,x1,x2,vec__23749,y1,y2,scale_x,scale_y,great_QMARK_,map__23744,map__23744__$1,map__23745,map__23745__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project){
return (function (p1__23735_SHARP_){
var x = scale_x.call(null,p1__23735_SHARP_);
return thi.ng.geom.svg.core.line.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y1], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y2], null)));
});})(vec__23748,x1,x2,vec__23749,y1,y2,scale_x,scale_y,great_QMARK_,map__23744,map__23744__$1,map__23745,map__23745__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project))
,thi.ng.geom.viz.core.select_ticks.call(null,x_axis,minor_x)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?cljs.core.map.call(null,((function (vec__23748,x1,x2,vec__23749,y1,y2,scale_x,scale_y,great_QMARK_,map__23744,map__23744__$1,map__23745,map__23745__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project){
return (function (p1__23736_SHARP_){
var y = scale_y.call(null,p1__23736_SHARP_);
if(cljs.core.truth_(circle)){
return thi.ng.geom.svg.core.circle.call(null,origin,y,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null));
} else {
return thi.ng.geom.svg.core.arc.call(null,origin,y,x1,x2,great_QMARK_,true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null));
}
});})(vec__23748,x1,x2,vec__23749,y1,y2,scale_x,scale_y,great_QMARK_,map__23744,map__23744__$1,map__23745,map__23745__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project))
,thi.ng.geom.viz.core.select_ticks.call(null,y_axis,minor_y)):null));
});
thi.ng.geom.viz.core.svg_plot2d_polar = (function thi$ng$geom$viz$core$svg_plot2d_polar(p__23750){
var map__23753 = p__23750;
var map__23753__$1 = ((((!((map__23753 == null)))?((((map__23753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23753):map__23753);
var spec = map__23753__$1;
var x_axis = cljs.core.get.call(null,map__23753__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__23753__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var grid = cljs.core.get.call(null,map__23753__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var data = cljs.core.get.call(null,map__23753__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var origin = cljs.core.get.call(null,map__23753__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var spec__$1 = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.viz.core.polar_projection.call(null,origin));
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(grid)?thi.ng.geom.viz.core.svg_axis_grid2d_polar.call(null,spec__$1):null),cljs.core.map.call(null,((function (spec__$1,map__23753,map__23753__$1,spec,x_axis,y_axis,grid,data,origin){
return (function (spec_SINGLEQUOTE_){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(spec_SINGLEQUOTE_).call(null,spec__$1,spec_SINGLEQUOTE_);
});})(spec__$1,map__23753,map__23753__$1,spec,x_axis,y_axis,grid,data,origin))
,data),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?thi.ng.geom.viz.core.svg_x_axis_polar.call(null,spec__$1):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?thi.ng.geom.viz.core.svg_y_axis_polar.call(null,spec__$1):null));
});

//# sourceMappingURL=core.js.map