// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.core.utils');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('clojure.core.reducers');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
thi.ng.geom.core.utils.closest_point_coeff = (function thi$ng$geom$core$utils$closest_point_coeff(p,a,b){
var d = thi.ng.geom.core._.call(null,b,a);
return (thi.ng.geom.core.dot.call(null,thi.ng.geom.core._.call(null,p,a),d) / thi.ng.geom.core.mag_squared.call(null,d));
});
thi.ng.geom.core.utils.closest_point_on_line = (function thi$ng$geom$core$utils$closest_point_on_line(p,a,b){
return thi.ng.geom.core.mix.call(null,a,b,thi.ng.geom.core.utils.closest_point_coeff.call(null,p,a,b));
});
thi.ng.geom.core.utils.closest_point_on_segment = (function thi$ng$geom$core$utils$closest_point_on_segment(p,a,b){
var t = thi.ng.geom.core.utils.closest_point_coeff.call(null,p,a,b);
if((t <= 0.0)){
return a;
} else {
if((t >= 1.0)){
return b;
} else {
return thi.ng.geom.core.mix.call(null,a,b,t);
}
}
});
thi.ng.geom.core.utils.closest_point_on_segments = (function thi$ng$geom$core$utils$closest_point_on_segments(p,segments){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__12023_SHARP_){
return cljs.core.apply.call(null,thi.ng.geom.core.utils.closest_point_on_segment,p,p1__12023_SHARP_);
})),cljs.core.completing.call(null,(function (a,q){
var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared.call(null,p,q);
if((d_SINGLEQUOTE_ < a.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d_SINGLEQUOTE_], null);
} else {
return a;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),segments);
});
thi.ng.geom.core.utils.closest_line_between = (function thi$ng$geom$core$utils$closest_line_between(a1,b1,a2,b2){
var p43 = thi.ng.geom.core._.call(null,b2,a2);
if(cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.core.vector.V3,p43,thi.ng.math.core._STAR_eps_STAR_))){
var p21 = thi.ng.geom.core._.call(null,b1,a1);
if(cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.core.vector.V3,p21,thi.ng.math.core._STAR_eps_STAR_))){
var p13 = thi.ng.geom.core._.call(null,a1,a2);
var d1343 = thi.ng.geom.core.dot.call(null,p13,p43);
var d4321 = thi.ng.geom.core.dot.call(null,p43,p21);
var d1321 = thi.ng.geom.core.dot.call(null,p13,p21);
var d4343 = thi.ng.geom.core.dot.call(null,p43,p43);
var d2121 = thi.ng.geom.core.dot.call(null,p21,p21);
var d = ((d2121 * d4343) - (d4321 * d4321));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,d,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
} else {
var n = ((d1343 * d4321) - (d1321 * d4343));
var ua = (n / d);
var ub = (((d4321 * ua) + d1343) / d4343);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"a","a",-2123407586),thi.ng.geom.core.madd.call(null,p21,ua,a1),new cljs.core.Keyword(null,"b","b",1482224470),thi.ng.geom.core.madd.call(null,p43,ub,a2),new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.dist_STAR_ = (function thi$ng$geom$core$utils$dist_STAR_(rf){
return (function (c,points){
return Math.sqrt(cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__12034_SHARP_){
return thi.ng.geom.core.dist_squared.call(null,c,p1__12034_SHARP_);
})),rf,(0),points));
});
});
thi.ng.geom.core.utils.min_dist = thi.ng.geom.core.utils.dist_STAR_.call(null,cljs.core.min);
thi.ng.geom.core.utils.max_dist = thi.ng.geom.core.utils.dist_STAR_.call(null,cljs.core.max);
thi.ng.geom.core.utils.arc_length_index = (function thi$ng$geom$core$utils$arc_length_index(points){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__12035_SHARP_){
return thi.ng.geom.core.dist.call(null,p1__12035_SHARP_.call(null,(0)),p1__12035_SHARP_.call(null,(1)));
})),cljs.core.completing.call(null,(function (a,d){
return cljs.core.conj.call(null,a,(cljs.core.peek.call(null,a) + d));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),thi.ng.dstruct.core.successive_nth.call(null,(2),points));
});
thi.ng.geom.core.utils.arc_length = (function thi$ng$geom$core$utils$arc_length(points){
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.core.utils.centroid = (function thi$ng$geom$core$utils$centroid(p__12036){
var vec__12039 = p__12036;
var x = cljs.core.nth.call(null,vec__12039,(0),null);
var xs = cljs.core.nthnext.call(null,vec__12039,(1));
var coll = vec__12039;
var G__12040 = cljs.core.count.call(null,coll);
switch (G__12040) {
case (0):
return null;

break;
case (1):
return x;

break;
case (2):
return thi.ng.geom.core.mix.call(null,x,cljs.core.first.call(null,xs));

break;
default:
var s = (1.0 / cljs.core.count.call(null,coll));
var f = ((function (s,G__12040,vec__12039,x,xs,coll){
return (function (x__$1,_){
return (x__$1 * s);
});})(s,G__12040,vec__12039,x,xs,coll))
;
return thi.ng.geom.core.reduce_vector.call(null,x,cljs.core._PLUS_,f,xs);

}
});
thi.ng.geom.core.utils.center = (function thi$ng$geom$core$utils$center(var_args){
var args12043 = [];
var len__7544__auto___12046 = arguments.length;
var i__7545__auto___12047 = (0);
while(true){
if((i__7545__auto___12047 < len__7544__auto___12046)){
args12043.push((arguments[i__7545__auto___12047]));

var G__12048 = (i__7545__auto___12047 + (1));
i__7545__auto___12047 = G__12048;
continue;
} else {
}
break;
}

var G__12045 = args12043.length;
switch (G__12045) {
case 2:
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12043.length)].join('')));

}
});

thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2 = (function (c_SINGLEQUOTE_,coll){
return thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.utils.centroid.call(null,coll),c_SINGLEQUOTE_,coll);
});

thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3 = (function (c,c_SINGLEQUOTE_,coll){
var d = thi.ng.geom.core._.call(null,c_SINGLEQUOTE_,c);
return cljs.core.mapv.call(null,((function (d){
return (function (p1__12042_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__12042_SHARP_,d);
});})(d))
,coll);
});

thi.ng.geom.core.utils.center.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.scale_size = (function thi$ng$geom$core$utils$scale_size(var_args){
var args12051 = [];
var len__7544__auto___12054 = arguments.length;
var i__7545__auto___12055 = (0);
while(true){
if((i__7545__auto___12055 < len__7544__auto___12054)){
args12051.push((arguments[i__7545__auto___12055]));

var G__12056 = (i__7545__auto___12055 + (1));
i__7545__auto___12055 = G__12056;
continue;
} else {
}
break;
}

var G__12053 = args12051.length;
switch (G__12053) {
case 2:
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12051.length)].join('')));

}
});

thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2 = (function (s,coll){
return thi.ng.geom.core.utils.scale_size.call(null,thi.ng.geom.core.utils.centroid.call(null,coll),s,coll);
});

thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3 = (function (c,s,coll){
return cljs.core.mapv.call(null,(function (p1__12050_SHARP_){
return thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,p1__12050_SHARP_,c),s,c);
}),coll);
});

thi.ng.geom.core.utils.scale_size.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.bounds_STAR_ = (function thi$ng$geom$core$utils$bounds_STAR_(zero,p__12064){
var vec__12070 = p__12064;
var x = cljs.core.nth.call(null,vec__12070,(0),null);
var xs = cljs.core.nthnext.call(null,vec__12070,(1));
var coll = vec__12070;
var c = cljs.core.count.call(null,coll);
if((c > (1))){
var p = thi.ng.geom.core.reduce_vector.call(null,x,cljs.core.min,xs);
var q = thi.ng.geom.core.reduce_vector.call(null,x,cljs.core.max,xs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.geom.core._.call(null,q,p)], null);
} else {
if(cljs.core._EQ_.call(null,c,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,zero], null);
} else {
return null;

}
}
});
thi.ng.geom.core.utils.bounding_rect = (function thi$ng$geom$core$utils$bounding_rect(points){
return thi.ng.geom.core.utils.bounds_STAR_.call(null,thi.ng.geom.core.vector.V2,points);
});
thi.ng.geom.core.utils.bounding_box = (function thi$ng$geom$core$utils$bounding_box(points){
return thi.ng.geom.core.utils.bounds_STAR_.call(null,thi.ng.geom.core.vector.V3,points);
});
thi.ng.geom.core.utils.radial_bounds = (function thi$ng$geom$core$utils$radial_bounds(ctor,c,r_or_points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctor.call(null,c),((cljs.core.coll_QMARK_.call(null,r_or_points))?thi.ng.geom.core.utils.max_dist.call(null,c,r_or_points):r_or_points)], null);
});
thi.ng.geom.core.utils.axis_bounds = (function thi$ng$geom$core$utils$axis_bounds(axis,coll){
var xs = cljs.core.mapv.call(null,(function (p1__12071_SHARP_){
return cljs.core.nth.call(null,p1__12071_SHARP_,axis);
}),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.min,xs),cljs.core.reduce.call(null,cljs.core.max,xs)], null);
});
thi.ng.geom.core.utils.axis_range = (function thi$ng$geom$core$utils$axis_range(axis,coll){
return (- cljs.core.apply.call(null,cljs.core._,thi.ng.geom.core.utils.axis_bounds.call(null,axis,coll)));
});
thi.ng.geom.core.utils.delta_contains = (function thi$ng$geom$core$utils$delta_contains(points,p,eps){
return cljs.core.some.call(null,(function (p1__12072_SHARP_){
return thi.ng.math.core.delta_EQ_.call(null,p,p1__12072_SHARP_,eps);
}),points);
});
thi.ng.geom.core.utils.from_barycentric = (function thi$ng$geom$core$utils$from_barycentric(points,weights){
return cljs.core.reduce.call(null,thi.ng.geom.core._PLUS_,cljs.core.map.call(null,thi.ng.geom.core._STAR_,points,weights));
});
thi.ng.geom.core.utils.point_at_STAR_ = (function thi$ng$geom$core$utils$point_at_STAR_(points,idx,total,t,i){
var ct = (t * total);
var i__$1 = ((function (){var i__$1 = i;
while(true){
if((ct >= idx.call(null,i__$1))){
var G__12073 = (i__$1 + (1));
i__$1 = G__12073;
continue;
} else {
return i__$1;
}
break;
}
})() | (0));
var i1 = (i__$1 - (1));
var pi = idx.call(null,i1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.call(null,cljs.core.nth.call(null,points,i1),cljs.core.nth.call(null,points,i__$1),((ct - pi) / (idx.call(null,i__$1) - pi))),i__$1], null);
});
thi.ng.geom.core.utils.point_at = (function thi$ng$geom$core$utils$point_at(var_args){
var args12074 = [];
var len__7544__auto___12077 = arguments.length;
var i__7545__auto___12078 = (0);
while(true){
if((i__7545__auto___12078 < len__7544__auto___12077)){
args12074.push((arguments[i__7545__auto___12078]));

var G__12079 = (i__7545__auto___12078 + (1));
i__7545__auto___12078 = G__12079;
continue;
} else {
}
break;
}

var G__12076 = args12074.length;
switch (G__12076) {
case 2:
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12074.length)].join('')));

}
});

thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2 = (function (t,points){
return thi.ng.geom.core.utils.point_at.call(null,t,points,null);
});

thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3 = (function (t,points,idx){
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,t))){
var n = cljs.core.count.call(null,points);
var t__$1 = t;
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return cljs.core.first.call(null,points);
} else {
if((1.0 === t__$1)){
return cljs.core.last.call(null,points);
} else {
var idx__$1 = (function (){var or__6486__auto__ = idx;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return thi.ng.geom.core.utils.arc_length_index.call(null,points);
}
})();
return cljs.core.first.call(null,thi.ng.geom.core.utils.point_at_STAR_.call(null,points,idx__$1,cljs.core.peek.call(null,idx__$1),t__$1,(1)));

}
}
}
} else {
return null;
}
});

thi.ng.geom.core.utils.point_at.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.sample_uniform_STAR_ = (function thi$ng$geom$core$utils$sample_uniform_STAR_(udist,include_last_QMARK_,points){
var idx = thi.ng.geom.core.utils.arc_length_index.call(null,points);
var total = cljs.core.peek.call(null,idx);
var delta = (udist / total);
var samples = (function (){var t = 0.0;
var i = (1);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((t < 1.0)){
var vec__12082 = thi.ng.geom.core.utils.point_at_STAR_.call(null,points,idx,total,t,i);
var p = cljs.core.nth.call(null,vec__12082,(0),null);
var i__$1 = cljs.core.nth.call(null,vec__12082,(1),null);
var G__12083 = (t + delta);
var G__12084 = (i__$1 | (0));
var G__12085 = cljs.core.conj.call(null,acc,p);
t = G__12083;
i = G__12084;
acc = G__12085;
continue;
} else {
return acc;
}
break;
}
})();
if(cljs.core.truth_(include_last_QMARK_)){
return cljs.core.conj.call(null,samples,cljs.core.last.call(null,points));
} else {
return samples;
}
});
thi.ng.geom.core.utils.sample_uniform = (function thi$ng$geom$core$utils$sample_uniform(udist,include_last_QMARK_,points){
var n = cljs.core.count.call(null,points);
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null);
} else {
return thi.ng.geom.core.utils.sample_uniform_STAR_.call(null,udist,include_last_QMARK_,points);

}
}
});
thi.ng.geom.core.utils.sample_segment_with_res = (function thi$ng$geom$core$utils$sample_segment_with_res(a,b,res,include_b_QMARK_){
var ls = (function (){var iter__7258__auto__ = (function thi$ng$geom$core$utils$sample_segment_with_res_$_iter__12090(s__12091){
return (new cljs.core.LazySeq(null,(function (){
var s__12091__$1 = s__12091;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12091__$1);
if(temp__4657__auto__){
var s__12091__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12091__$2)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,s__12091__$2);
var size__7257__auto__ = cljs.core.count.call(null,c__7256__auto__);
var b__12093 = cljs.core.chunk_buffer.call(null,size__7257__auto__);
if((function (){var i__12092 = (0);
while(true){
if((i__12092 < size__7257__auto__)){
var t = cljs.core._nth.call(null,c__7256__auto__,i__12092);
cljs.core.chunk_append.call(null,b__12093,thi.ng.geom.core.mix.call(null,a,b,t));

var G__12094 = (i__12092 + (1));
i__12092 = G__12094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12093),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__12090.call(null,cljs.core.chunk_rest.call(null,s__12091__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12093),null);
}
} else {
var t = cljs.core.first.call(null,s__12091__$2);
return cljs.core.cons.call(null,thi.ng.geom.core.mix.call(null,a,b,t),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__12090.call(null,cljs.core.rest.call(null,s__12091__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7258__auto__.call(null,thi.ng.math.core.norm_range.call(null,res));
})();
if(cljs.core.truth_(include_b_QMARK_)){
return ls;
} else {
return cljs.core.butlast.call(null,ls);
}
});
/**
 * Takes a seq of 4 points in ccw order and 2D vector of normalized UV
 *   coordinates. Applies bilinear interpolation to compute point within
 *   the rect: U is coord along AB/DC edge, V along BC/AD
 */
thi.ng.geom.core.utils.map_bilinear = (function thi$ng$geom$core$utils$map_bilinear(p__12099,p__12100){
var vec__12103 = p__12099;
var a = cljs.core.nth.call(null,vec__12103,(0),null);
var b = cljs.core.nth.call(null,vec__12103,(1),null);
var c = cljs.core.nth.call(null,vec__12103,(2),null);
var d = cljs.core.nth.call(null,vec__12103,(3),null);
var vec__12104 = p__12100;
var u = cljs.core.nth.call(null,vec__12104,(0),null);
var v = cljs.core.nth.call(null,vec__12104,(1),null);
return thi.ng.geom.core.mix.call(null,a,b,d,c,u,v);
});
/**
 * Takes a seq of 8 points defining a cuboid and vector of normalized
 *   UVW coordinates. Applies trilinear interpolation to compute point
 *   within the cuboid: U is coord along AD/BC edge, V along AE/BF, W
 *   along AB/DC (see above diagram)
 */
thi.ng.geom.core.utils.map_trilinear = (function thi$ng$geom$core$utils$map_trilinear(p__12105,p__12106){
var vec__12109 = p__12105;
var a = cljs.core.nth.call(null,vec__12109,(0),null);
var b = cljs.core.nth.call(null,vec__12109,(1),null);
var c = cljs.core.nth.call(null,vec__12109,(2),null);
var d = cljs.core.nth.call(null,vec__12109,(3),null);
var e = cljs.core.nth.call(null,vec__12109,(4),null);
var f = cljs.core.nth.call(null,vec__12109,(5),null);
var g = cljs.core.nth.call(null,vec__12109,(6),null);
var h = cljs.core.nth.call(null,vec__12109,(7),null);
var vec__12110 = p__12106;
var u = cljs.core.nth.call(null,vec__12110,(0),null);
var v = cljs.core.nth.call(null,vec__12110,(1),null);
var w = cljs.core.nth.call(null,vec__12110,(2),null);
return thi.ng.geom.core.mix.call(null,thi.ng.geom.core.mix.call(null,a,d,e,h,u,v),thi.ng.geom.core.mix.call(null,b,c,f,g,u,v),w);
});
thi.ng.geom.core.utils.tessellate_with_point = (function thi$ng$geom$core$utils$tessellate_with_point(var_args){
var args12116 = [];
var len__7544__auto___12123 = arguments.length;
var i__7545__auto___12124 = (0);
while(true){
if((i__7545__auto___12124 < len__7544__auto___12123)){
args12116.push((arguments[i__7545__auto___12124]));

var G__12125 = (i__7545__auto___12124 + (1));
i__7545__auto___12124 = G__12125;
continue;
} else {
}
break;
}

var G__12122 = args12116.length;
switch (G__12122) {
case 1:
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12116.length)].join('')));

}
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.core.utils.tessellate_with_point.call(null,thi.ng.geom.core.utils.centroid.call(null,points),points);
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2 = (function (c,points){
return cljs.core.mapv.call(null,(function (p1__12115_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c,p1__12115_SHARP_.call(null,(0)),p1__12115_SHARP_.call(null,(1))],null));
}),thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.concat.call(null,points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null))));
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$lang$maxFixedArity = 2;
thi.ng.geom.core.utils.tessellate_with_first = (function thi$ng$geom$core$utils$tessellate_with_first(points){
if((cljs.core.count.call(null,points) > (3))){
var vec__12140 = points;
var v0 = cljs.core.nth.call(null,vec__12140,(0),null);
var more = cljs.core.nthnext.call(null,vec__12140,(1));
return cljs.core.mapv.call(null,((function (vec__12140,v0,more){
return (function (p__12141){
var vec__12142 = p__12141;
var a = cljs.core.nth.call(null,vec__12142,(0),null);
var b = cljs.core.nth.call(null,vec__12142,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
});})(vec__12140,v0,more))
,thi.ng.dstruct.core.successive_nth.call(null,(2),more));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.core.utils.tessellate_tri_with_midpoints = (function thi$ng$geom$core$utils$tessellate_tri_with_midpoints(p__12143){
var vec__12145 = p__12143;
var a = cljs.core.nth.call(null,vec__12145,(0),null);
var b = cljs.core.nth.call(null,vec__12145,(1),null);
var c = cljs.core.nth.call(null,vec__12145,(2),null);
var ab = thi.ng.geom.core.mix.call(null,a,b);
var bc = thi.ng.geom.core.mix.call(null,b,c);
var ca = thi.ng.geom.core.mix.call(null,c,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.core.utils.tessellate_3 = (function thi$ng$geom$core$utils$tessellate_3(points){
var pred__12150 = cljs.core._EQ_;
var expr__12151 = cljs.core.count.call(null,points);
if(cljs.core.truth_(pred__12150.call(null,(3),expr__12151))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
if(cljs.core.truth_(pred__12150.call(null,(4),expr__12151))){
var vec__12153 = points;
var a = cljs.core.nth.call(null,vec__12153,(0),null);
var b = cljs.core.nth.call(null,vec__12153,(1),null);
var c = cljs.core.nth.call(null,vec__12153,(2),null);
var d = cljs.core.nth.call(null,vec__12153,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)], null);
} else {
return thi.ng.geom.core.utils.tessellate_with_point.call(null,points);
}
}
});
thi.ng.geom.core.utils.tessellate_max4 = (function thi$ng$geom$core$utils$tessellate_max4(points){
if((cljs.core.count.call(null,points) <= (4))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
return thi.ng.geom.core.utils.tessellate_with_point.call(null,points);
}
});
thi.ng.geom.core.utils.ortho_normal = (function thi$ng$geom$core$utils$ortho_normal(var_args){
var args12154 = [];
var len__7544__auto___12159 = arguments.length;
var i__7545__auto___12160 = (0);
while(true){
if((i__7545__auto___12160 < len__7544__auto___12159)){
args12154.push((arguments[i__7545__auto___12160]));

var G__12161 = (i__7545__auto___12160 + (1));
i__7545__auto___12160 = G__12161;
continue;
} else {
}
break;
}

var G__12156 = args12154.length;
switch (G__12156) {
case 1:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12154.length)].join('')));

}
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1 = (function (p__12157){
var vec__12158 = p__12157;
var a = cljs.core.nth.call(null,vec__12158,(0),null);
var b = cljs.core.nth.call(null,vec__12158,(1),null);
var c = cljs.core.nth.call(null,vec__12158,(2),null);
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)));
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,a,b));
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)));
});

thi.ng.geom.core.utils.ortho_normal.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.norm_sign2 = (function thi$ng$geom$core$utils$norm_sign2(p__12163,p__12164,p__12165){
var vec__12169 = p__12163;
var ax = cljs.core.nth.call(null,vec__12169,(0),null);
var ay = cljs.core.nth.call(null,vec__12169,(1),null);
var vec__12170 = p__12164;
var bx = cljs.core.nth.call(null,vec__12170,(0),null);
var by = cljs.core.nth.call(null,vec__12170,(1),null);
var vec__12171 = p__12165;
var cx = cljs.core.nth.call(null,vec__12171,(0),null);
var cy = cljs.core.nth.call(null,vec__12171,(1),null);
return (((bx - ax) * (cy - ay)) - ((cx - ax) * (by - ay)));
});
thi.ng.geom.core.utils.norm_sign3 = (function thi$ng$geom$core$utils$norm_sign3(a,b,c){
return thi.ng.geom.core.mag.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)));
});
thi.ng.geom.core.utils.tri_area2 = (function thi$ng$geom$core$utils$tri_area2(a,b,c){
return (0.5 * thi.ng.geom.core.utils.norm_sign2.call(null,a,b,c));
});
thi.ng.geom.core.utils.tri_area3 = (function thi$ng$geom$core$utils$tri_area3(a,b,c){
return (0.5 * thi.ng.geom.core.utils.norm_sign3.call(null,a,b,c));
});
thi.ng.geom.core.utils.clockwise2_QMARK_ = (function thi$ng$geom$core$utils$clockwise2_QMARK_(a,b,c){
return (thi.ng.geom.core.utils.norm_sign2.call(null,a,b,c) < (0));
});
thi.ng.geom.core.utils.clockwise3_QMARK_ = (function thi$ng$geom$core$utils$clockwise3_QMARK_(a,b,c,n){
return (thi.ng.geom.core.dot.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)),n) > (0));
});
thi.ng.geom.core.utils.triangle_barycentric_coords = (function thi$ng$geom$core$utils$triangle_barycentric_coords(var_args){
var args12172 = [];
var len__7544__auto___12177 = arguments.length;
var i__7545__auto___12178 = (0);
while(true){
if((i__7545__auto___12178 < len__7544__auto___12177)){
args12172.push((arguments[i__7545__auto___12178]));

var G__12179 = (i__7545__auto___12178 + (1));
i__7545__auto___12178 = G__12179;
continue;
} else {
}
break;
}

var G__12174 = args12172.length;
switch (G__12174) {
case 2:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12172.length)].join('')));

}
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = (function (p__12175,p){
var vec__12176 = p__12175;
var a = cljs.core.nth.call(null,vec__12176,(0),null);
var b = cljs.core.nth.call(null,vec__12176,(1),null);
var c = cljs.core.nth.call(null,vec__12176,(2),null);
return thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,p,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a));
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,p){
return thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,p,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a));
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,p,u,v){
var w = thi.ng.geom.core._.call(null,p,a);
var uu = thi.ng.geom.core.mag_squared.call(null,u);
var vv = thi.ng.geom.core.mag_squared.call(null,v);
var uv = thi.ng.geom.core.dot.call(null,u,v);
var wu = thi.ng.geom.core.dot.call(null,w,u);
var wv = thi.ng.geom.core.dot.call(null,w,v);
var denom = (1.0 / ((uv * uv) - (uu * vv)));
var s = (denom * ((uv * wv) - (vv * wu)));
var t = (denom * ((uv * wu) - (uu * wv)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.0 - (s + t)),s,t], null);
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$lang$maxFixedArity = 6;
thi.ng.geom.core.utils.point_in_triangle2_QMARK_ = (function thi$ng$geom$core$utils$point_in_triangle2_QMARK_(p,a,b,c){
if(cljs.core.truth_(thi.ng.geom.core.utils.clockwise2_QMARK_.call(null,a,b,c))){
return ((thi.ng.geom.core.utils.norm_sign2.call(null,a,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,b,a,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,c,b,p) >= 0.0));
} else {
return ((thi.ng.geom.core.utils.norm_sign2.call(null,b,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,a,b,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,c,a,p) >= 0.0));
}
});
thi.ng.geom.core.utils.point_in_triangle3_QMARK_ = (function thi$ng$geom$core$utils$point_in_triangle3_QMARK_(p,a,b,c){
var u = thi.ng.geom.core._.call(null,b,a);
var v = thi.ng.geom.core._.call(null,c,a);
var n = thi.ng.geom.core.utils.ortho_normal.call(null,u,v);
var cl = (thi.ng.geom.core.dot.call(null,n,p) - thi.ng.geom.core.dot.call(null,n,a));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,cl))){
var vec__12198 = thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,p,u,v);
var u__$1 = cljs.core.nth.call(null,vec__12198,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__12198,(1),null);
var w = cljs.core.nth.call(null,vec__12198,(2),null);
var and__6474__auto__ = (u__$1 >= 0.0);
if(and__6474__auto__){
var and__6474__auto____$1 = (w >= 0.0);
if(and__6474__auto____$1){
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,v__$1);
} else {
return and__6474__auto____$1;
}
} else {
return and__6474__auto__;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.tessellating_transducer = (function thi$ng$geom$core$utils$tessellating_transducer(f){
return cljs.core.comp.call(null,cljs.core.mapcat.call(null,thi.ng.geom.core.utils.tessellate_with_first),cljs.core.map.call(null,f));
});
thi.ng.geom.core.utils.area_xf = thi.ng.geom.core.utils.tessellating_transducer.call(null,(function (p1__12209_SHARP_){
return thi.ng.math.core.abs.call(null,cljs.core.apply.call(null,thi.ng.geom.core.utils.tri_area3,p1__12209_SHARP_));
}));
thi.ng.geom.core.utils.volume_xf = thi.ng.geom.core.utils.tessellating_transducer.call(null,(function (p1__12210_SHARP_){
return thi.ng.geom.core.dot.call(null,p1__12210_SHARP_.call(null,(0)),thi.ng.geom.core.cross.call(null,p1__12210_SHARP_.call(null,(1)),p1__12210_SHARP_.call(null,(2))));
}));
thi.ng.geom.core.utils.total_area_3d = (function thi$ng$geom$core$utils$total_area_3d(faces){
return cljs.core.transduce.call(null,thi.ng.geom.core.utils.area_xf,cljs.core._PLUS_,faces);
});
thi.ng.geom.core.utils.total_volume = (function thi$ng$geom$core$utils$total_volume(faces){
return (cljs.core.transduce.call(null,thi.ng.geom.core.utils.volume_xf,cljs.core._PLUS_,faces) / 6.0);
});

//# sourceMappingURL=utils.js.map