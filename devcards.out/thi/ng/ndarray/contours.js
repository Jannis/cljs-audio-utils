// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.ndarray.contours');
goog.require('cljs.core');
goog.require('thi.ng.ndarray.core');
goog.require('thi.ng.typedarrays.core');
thi.ng.ndarray.contours.level_crossing = (function thi$ng$ndarray$contours$level_crossing(offset,a,b,level){
var da = (a - level);
var db = (b - level);
if(!(cljs.core._EQ_.call(null,(da >= 0.0),(db >= 0.0)))){
return (offset + (0.5 + (0.5 * ((da + db) / (da - db)))));
} else {
return null;
}
});
thi.ng.ndarray.contours.level_crossings1d = (function thi$ng$ndarray$contours$level_crossings1d(mat,shape,level){
var iter__7258__auto__ = (function thi$ng$ndarray$contours$level_crossings1d_$_iter__22386(s__22387){
return (new cljs.core.LazySeq(null,(function (){
var s__22387__$1 = s__22387;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22387__$1);
if(temp__4657__auto__){
var s__22387__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22387__$2)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,s__22387__$2);
var size__7257__auto__ = cljs.core.count.call(null,c__7256__auto__);
var b__22389 = cljs.core.chunk_buffer.call(null,size__7257__auto__);
if((function (){var i__22388 = (0);
while(true){
if((i__22388 < size__7257__auto__)){
var x = cljs.core._nth.call(null,c__7256__auto__,i__22388);
var x_SINGLEQUOTE_ = thi.ng.ndarray.contours.level_crossing.call(null,x,thi.ng.ndarray.core.get_at.call(null,mat,x),thi.ng.ndarray.core.get_at.call(null,mat,(x + (1))),level);
if(cljs.core.truth_(x_SINGLEQUOTE_)){
cljs.core.chunk_append.call(null,b__22389,x_SINGLEQUOTE_);

var G__22400 = (i__22388 + (1));
i__22388 = G__22400;
continue;
} else {
var G__22401 = (i__22388 + (1));
i__22388 = G__22401;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22389),thi$ng$ndarray$contours$level_crossings1d_$_iter__22386.call(null,cljs.core.chunk_rest.call(null,s__22387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22389),null);
}
} else {
var x = cljs.core.first.call(null,s__22387__$2);
var x_SINGLEQUOTE_ = thi.ng.ndarray.contours.level_crossing.call(null,x,thi.ng.ndarray.core.get_at.call(null,mat,x),thi.ng.ndarray.core.get_at.call(null,mat,(x + (1))),level);
if(cljs.core.truth_(x_SINGLEQUOTE_)){
return cljs.core.cons.call(null,x_SINGLEQUOTE_,thi$ng$ndarray$contours$level_crossings1d_$_iter__22386.call(null,cljs.core.rest.call(null,s__22387__$2)));
} else {
var G__22402 = cljs.core.rest.call(null,s__22387__$2);
s__22387__$1 = G__22402;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7258__auto__.call(null,cljs.core.range.call(null,(((typeof shape === 'number')?shape:cljs.core.first.call(null,shape)) - (1))));
});
thi.ng.ndarray.contours.level_crossings2d_x = (function thi$ng$ndarray$contours$level_crossings2d_x(var_args){
var args22415 = [];
var len__7544__auto___22439 = arguments.length;
var i__7545__auto___22440 = (0);
while(true){
if((i__7545__auto___22440 < len__7544__auto___22439)){
args22415.push((arguments[i__7545__auto___22440]));

var G__22441 = (i__7545__auto___22440 + (1));
i__7545__auto___22440 = G__22441;
continue;
} else {
}
break;
}

var G__22427 = args22415.length;
switch (G__22427) {
case 2:
return thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22415.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings2d_x.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__22430,level){
var vec__22431 = p__22430;
var sy = cljs.core.nth.call(null,vec__22431,(0),null);
var sx = cljs.core.nth.call(null,vec__22431,(1),null);
return cljs.core.mapcat.call(null,((function (vec__22431,sy,sx){
return (function (y){
return cljs.core.map.call(null,((function (vec__22431,sy,sx){
return (function (p1__22414_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[y,p1__22414_SHARP_],null));
});})(vec__22431,sy,sx))
,thi.ng.ndarray.contours.level_crossings1d.call(null,thi.ng.ndarray.core.pick.call(null,mat,y,null),sx,level));
});})(vec__22431,sy,sx))
,cljs.core.range.call(null,sy));
});

thi.ng.ndarray.contours.level_crossings2d_x.cljs$lang$maxFixedArity = 3;
thi.ng.ndarray.contours.level_crossings2d_y = (function thi$ng$ndarray$contours$level_crossings2d_y(var_args){
var args22462 = [];
var len__7544__auto___22480 = arguments.length;
var i__7545__auto___22481 = (0);
while(true){
if((i__7545__auto___22481 < len__7544__auto___22480)){
args22462.push((arguments[i__7545__auto___22481]));

var G__22482 = (i__7545__auto___22481 + (1));
i__7545__auto___22481 = G__22482;
continue;
} else {
}
break;
}

var G__22469 = args22462.length;
switch (G__22469) {
case 2:
return thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22462.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings2d_y.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__22473,level){
var vec__22474 = p__22473;
var sy = cljs.core.nth.call(null,vec__22474,(0),null);
var sx = cljs.core.nth.call(null,vec__22474,(1),null);
return cljs.core.mapcat.call(null,((function (vec__22474,sy,sx){
return (function (x){
return cljs.core.map.call(null,((function (vec__22474,sy,sx){
return (function (p1__22461_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__22461_SHARP_,x],null));
});})(vec__22474,sy,sx))
,thi.ng.ndarray.contours.level_crossings1d.call(null,thi.ng.ndarray.core.pick.call(null,mat,null,x),sy,level));
});})(vec__22474,sy,sx))
,cljs.core.range.call(null,sx));
});

thi.ng.ndarray.contours.level_crossings2d_y.cljs$lang$maxFixedArity = 3;
thi.ng.ndarray.contours.level_crossings2d = (function thi$ng$ndarray$contours$level_crossings2d(var_args){
var args22515 = [];
var len__7544__auto___22521 = arguments.length;
var i__7545__auto___22522 = (0);
while(true){
if((i__7545__auto___22522 < len__7544__auto___22521)){
args22515.push((arguments[i__7545__auto___22522]));

var G__22523 = (i__7545__auto___22522 + (1));
i__7545__auto___22522 = G__22523;
continue;
} else {
}
break;
}

var G__22519 = args22515.length;
switch (G__22519) {
case 2:
return thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22515.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings2d.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$3 = (function (mat,shape,level){
return cljs.core.concat.call(null,thi.ng.ndarray.contours.level_crossings2d_x.call(null,mat,shape,level),thi.ng.ndarray.contours.level_crossings2d_y.call(null,mat,shape,level));
});

thi.ng.ndarray.contours.level_crossings2d.cljs$lang$maxFixedArity = 3;
thi.ng.ndarray.contours.level_crossings3d_x = (function thi$ng$ndarray$contours$level_crossings3d_x(var_args){
var args22554 = [];
var len__7544__auto___22570 = arguments.length;
var i__7545__auto___22571 = (0);
while(true){
if((i__7545__auto___22571 < len__7544__auto___22570)){
args22554.push((arguments[i__7545__auto___22571]));

var G__22572 = (i__7545__auto___22571 + (1));
i__7545__auto___22571 = G__22572;
continue;
} else {
}
break;
}

var G__22567 = args22554.length;
switch (G__22567) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22554.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d_x.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__22568,level){
var vec__22569 = p__22568;
var sz = cljs.core.nth.call(null,vec__22569,(0),null);
var sy = cljs.core.nth.call(null,vec__22569,(1),null);
var sx = cljs.core.nth.call(null,vec__22569,(2),null);
return cljs.core.mapcat.call(null,((function (vec__22569,sz,sy,sx){
return (function (z){
return cljs.core.map.call(null,((function (vec__22569,sz,sy,sx){
return (function (p1__22553_SHARP_){
return cljs.core.cons.call(null,z,p1__22553_SHARP_);
});})(vec__22569,sz,sy,sx))
,thi.ng.ndarray.contours.level_crossings2d_x.call(null,thi.ng.ndarray.core.pick.call(null,mat,z,null,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sy,sx], null),level));
});})(vec__22569,sz,sy,sx))
,cljs.core.range.call(null,sz));
});

thi.ng.ndarray.contours.level_crossings3d_x.cljs$lang$maxFixedArity = 3;
thi.ng.ndarray.contours.level_crossings3d_y = (function thi$ng$ndarray$contours$level_crossings3d_y(var_args){
var args22586 = [];
var len__7544__auto___22597 = arguments.length;
var i__7545__auto___22598 = (0);
while(true){
if((i__7545__auto___22598 < len__7544__auto___22597)){
args22586.push((arguments[i__7545__auto___22598]));

var G__22599 = (i__7545__auto___22598 + (1));
i__7545__auto___22598 = G__22599;
continue;
} else {
}
break;
}

var G__22594 = args22586.length;
switch (G__22594) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22586.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d_y.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__22595,level){
var vec__22596 = p__22595;
var sz = cljs.core.nth.call(null,vec__22596,(0),null);
var sy = cljs.core.nth.call(null,vec__22596,(1),null);
var sx = cljs.core.nth.call(null,vec__22596,(2),null);
return cljs.core.mapcat.call(null,((function (vec__22596,sz,sy,sx){
return (function (z){
return cljs.core.map.call(null,((function (vec__22596,sz,sy,sx){
return (function (p1__22585_SHARP_){
return cljs.core.cons.call(null,z,p1__22585_SHARP_);
});})(vec__22596,sz,sy,sx))
,thi.ng.ndarray.contours.level_crossings2d_y.call(null,thi.ng.ndarray.core.pick.call(null,mat,z,null,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sy,sx], null),level));
});})(vec__22596,sz,sy,sx))
,cljs.core.range.call(null,sz));
});

thi.ng.ndarray.contours.level_crossings3d_y.cljs$lang$maxFixedArity = 3;
thi.ng.ndarray.contours.level_crossings3d_z = (function thi$ng$ndarray$contours$level_crossings3d_z(var_args){
var args22602 = [];
var len__7544__auto___22635 = arguments.length;
var i__7545__auto___22636 = (0);
while(true){
if((i__7545__auto___22636 < len__7544__auto___22635)){
args22602.push((arguments[i__7545__auto___22636]));

var G__22637 = (i__7545__auto___22636 + (1));
i__7545__auto___22636 = G__22637;
continue;
} else {
}
break;
}

var G__22609 = args22602.length;
switch (G__22609) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22602.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d_z.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__22610,level){
var vec__22611 = p__22610;
var sz = cljs.core.nth.call(null,vec__22611,(0),null);
var sy = cljs.core.nth.call(null,vec__22611,(1),null);
var sx = cljs.core.nth.call(null,vec__22611,(2),null);
return cljs.core.mapcat.call(null,((function (vec__22611,sz,sy,sx){
return (function (x){
return cljs.core.map.call(null,((function (vec__22611,sz,sy,sx){
return (function (p1__22601_SHARP_){
return cljs.core.conj.call(null,p1__22601_SHARP_,x);
});})(vec__22611,sz,sy,sx))
,thi.ng.ndarray.contours.level_crossings2d_y.call(null,thi.ng.ndarray.core.pick.call(null,mat,null,null,x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sz,sy], null),level));
});})(vec__22611,sz,sy,sx))
,cljs.core.range.call(null,sx));
});

thi.ng.ndarray.contours.level_crossings3d_z.cljs$lang$maxFixedArity = 3;
thi.ng.ndarray.contours.level_crossings3d = (function thi$ng$ndarray$contours$level_crossings3d(var_args){
var args22656 = [];
var len__7544__auto___22660 = arguments.length;
var i__7545__auto___22661 = (0);
while(true){
if((i__7545__auto___22661 < len__7544__auto___22660)){
args22656.push((arguments[i__7545__auto___22661]));

var G__22662 = (i__7545__auto___22661 + (1));
i__7545__auto___22661 = G__22662;
continue;
} else {
}
break;
}

var G__22658 = args22656.length;
switch (G__22658) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22656.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$3 = (function (mat,shape,level){
return cljs.core.concat.call(null,thi.ng.ndarray.contours.level_crossings3d_x.call(null,mat,shape,level),thi.ng.ndarray.contours.level_crossings3d_y.call(null,mat,shape,level),thi.ng.ndarray.contours.level_crossings3d_z.call(null,mat,shape,level));
});

thi.ng.ndarray.contours.level_crossings3d.cljs$lang$maxFixedArity = 3;
thi.ng.ndarray.contours.edge_index_2d = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),null], null);
thi.ng.ndarray.contours.next_edges_2d = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null);
thi.ng.ndarray.contours.set_border_2d = (function thi$ng$ndarray$contours$set_border_2d(mat,x){
var vec__22672 = thi.ng.ndarray.core.shape.call(null,mat);
var h = cljs.core.nth.call(null,vec__22672,(0),null);
var w = cljs.core.nth.call(null,vec__22672,(1),null);
var h_SINGLEQUOTE_ = (h - (1));
var w_SINGLEQUOTE_ = (w - (1));
var l = thi.ng.ndarray.core.pick.call(null,mat,null,(0));
var r = thi.ng.ndarray.core.pick.call(null,mat,null,w_SINGLEQUOTE_);
var t = thi.ng.ndarray.core.pick.call(null,mat,(0),null);
var b = thi.ng.ndarray.core.pick.call(null,mat,h_SINGLEQUOTE_,null);
var i_22676 = w_SINGLEQUOTE_;
while(true){
if((i_22676 >= (0))){
thi.ng.ndarray.core.set_at.call(null,t,i_22676,x);

thi.ng.ndarray.core.set_at.call(null,b,i_22676,x);

var G__22677 = (i_22676 - (1));
i_22676 = G__22677;
continue;
} else {
}
break;
}

var i_22678 = h_SINGLEQUOTE_;
while(true){
if((i_22678 >= (0))){
thi.ng.ndarray.core.set_at.call(null,l,i_22678,x);

thi.ng.ndarray.core.set_at.call(null,r,i_22678,x);

var G__22679 = (i_22678 - (1));
i_22678 = G__22679;
continue;
} else {
}
break;
}

return mat;
});
thi.ng.ndarray.contours.encode_crossings_2d = (function thi$ng$ndarray$contours$encode_crossings_2d(src,isoval){
var out = thi.ng.ndarray.core.ndarray.call(null,new cljs.core.Keyword(null,"int8","int8",-1834023920),thi.ng.typedarrays.core.int8.call(null,thi.ng.ndarray.core.size.call(null,src)),thi.ng.ndarray.core.shape.call(null,src));
var iso_QMARK_ = ((function (out){
return (function (y,x,m){
if((thi.ng.ndarray.core.get_at.call(null,src,y,x) < isoval)){
return m;
} else {
return (0);
}
});})(out))
;
var pos = thi.ng.ndarray.core.position_seq.call(null,thi.ng.ndarray.core.truncate_h.call(null,src,(-1),(-1)));
while(true){
if(cljs.core.truth_(pos)){
var vec__22681 = cljs.core.first.call(null,pos);
var y = cljs.core.nth.call(null,vec__22681,(0),null);
var x = cljs.core.nth.call(null,vec__22681,(1),null);
var x_SINGLEQUOTE_ = (x + (1));
var y_SINGLEQUOTE_ = (y + (1));
thi.ng.ndarray.core.set_at.call(null,out,y,x,(((iso_QMARK_.call(null,y,x,(8)) | iso_QMARK_.call(null,y,x_SINGLEQUOTE_,(4))) | iso_QMARK_.call(null,y_SINGLEQUOTE_,x_SINGLEQUOTE_,(2))) | iso_QMARK_.call(null,y_SINGLEQUOTE_,x,(1))));

var G__22716 = cljs.core.next.call(null,pos);
pos = G__22716;
continue;
} else {
return out;
}
break;
}
});
thi.ng.ndarray.contours.mean_cell_value_2d = (function thi$ng$ndarray$contours$mean_cell_value_2d(src,y,x){
return (((thi.ng.ndarray.core.get_at.call(null,src,y,x) + thi.ng.ndarray.core.get_at.call(null,src,y,(x + (1)))) + (thi.ng.ndarray.core.get_at.call(null,src,(y + (1)),x) + thi.ng.ndarray.core.get_at.call(null,src,(y + (1)),(x + (1))))) * 0.25);
});
thi.ng.ndarray.contours.process_saddle5 = (function thi$ng$ndarray$contours$process_saddle5(src,y,x,iso,from){
if((thi.ng.ndarray.contours.mean_cell_value_2d.call(null,src,y,x) > iso)){
if(((3) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
}
} else {
if(((3) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(13)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(7)], null);
}
}
});
thi.ng.ndarray.contours.process_saddle10 = (function thi$ng$ndarray$contours$process_saddle10(src,y,x,iso,from){
if((thi.ng.ndarray.contours.mean_cell_value_2d.call(null,src,y,x) > iso)){
if(((0) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(8)], null);
}
} else {
if(((2) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(11)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(14)], null);
}
}
});
thi.ng.ndarray.contours.mix2d = (function thi$ng$ndarray$contours$mix2d(src,y1,x1,y2,x2,iso){
var a = thi.ng.ndarray.core.get_at.call(null,src,y1,x1);
var b = thi.ng.ndarray.core.get_at.call(null,src,y2,x2);
if((a === b)){
return (0);
} else {
return ((a - iso) / (a - b));
}
});
thi.ng.ndarray.contours.contour_vertex_2d = (function thi$ng$ndarray$contours$contour_vertex_2d(src,y,x,to,iso){
var x_SINGLEQUOTE_ = (x + (1));
var y_SINGLEQUOTE_ = (y + (1));
var G__22754 = (to | (0));
switch (G__22754) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(x + thi.ng.ndarray.contours.mix2d.call(null,src,y,x,y,x_SINGLEQUOTE_,iso))], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + thi.ng.ndarray.contours.mix2d.call(null,src,y,x_SINGLEQUOTE_,y_SINGLEQUOTE_,x_SINGLEQUOTE_,iso)),x_SINGLEQUOTE_], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_SINGLEQUOTE_,(x + thi.ng.ndarray.contours.mix2d.call(null,src,y_SINGLEQUOTE_,x,y_SINGLEQUOTE_,x_SINGLEQUOTE_,iso))], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + thi.ng.ndarray.contours.mix2d.call(null,src,y,x,y_SINGLEQUOTE_,x,iso)),x], null);

break;
default:
return null;

}
});
thi.ng.ndarray.contours.find_contours_2d = (function thi$ng$ndarray$contours$find_contours_2d(src,isoval){
var vec__22784 = thi.ng.ndarray.core.shape.call(null,src);
var h_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22784,(0),null);
var w_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22784,(1),null);
var h_SINGLEQUOTE___$1 = (h_SINGLEQUOTE_ - (1));
var w_SINGLEQUOTE___$1 = (w_SINGLEQUOTE_ - (1));
var coded = thi.ng.ndarray.contours.encode_crossings_2d.call(null,src,isoval);
var contours = cljs.core.volatile_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY));
var pos = thi.ng.ndarray.core.position_seq.call(null,coded);
var curr = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var to = null;
var p = null;
while(true){
if(cljs.core.truth_(pos)){
var from = to;
var vec__22785 = (cljs.core.truth_(p)?p:cljs.core.first.call(null,pos));
var y = cljs.core.nth.call(null,vec__22785,(0),null);
var x = cljs.core.nth.call(null,vec__22785,(1),null);
if(((x >= w_SINGLEQUOTE___$1)) || ((y >= h_SINGLEQUOTE___$1))){
var G__22804 = cljs.core.next.call(null,pos);
var G__22805 = curr;
var G__22806 = to;
var G__22807 = null;
pos = G__22804;
curr = G__22805;
to = G__22806;
p = G__22807;
continue;
} else {
var id = thi.ng.ndarray.core.get_at.call(null,coded,y,x);
var vec__22791 = (function (){var G__22792 = (id | (0));
switch (G__22792) {
case (5):
return thi.ng.ndarray.contours.process_saddle5.call(null,src,y,x,isoval,from);

break;
case (10):
return thi.ng.ndarray.contours.process_saddle10.call(null,src,y,x,isoval,from);

break;
default:
return thi.ng.ndarray.contours.edge_index_2d.call(null,(id | (0)));

}
})();
var to__$1 = cljs.core.nth.call(null,vec__22791,(0),null);
var clear = cljs.core.nth.call(null,vec__22791,(1),null);
var curr__$1 = (cljs.core.truth_((function (){var and__6474__auto__ = (from == null);
if(and__6474__auto__){
var and__6474__auto____$1 = to__$1;
if(cljs.core.truth_(and__6474__auto____$1)){
return (cljs.core.count.call(null,curr) > (0));
} else {
return and__6474__auto____$1;
}
} else {
return and__6474__auto__;
}
})())?(function (){
cljs.core._vreset_BANG_.call(null,contours,cljs.core.conj_BANG_.call(null,cljs.core._deref.call(null,contours),cljs.core.persistent_BANG_.call(null,curr)));

return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
})()
:curr);
if(cljs.core.truth_(clear)){
thi.ng.ndarray.core.set_at.call(null,coded,y,x,clear);
} else {
}

if(cljs.core.truth_((function (){var and__6474__auto__ = to__$1;
if(cljs.core.truth_(and__6474__auto__)){
return (to__$1 >= (0));
} else {
return and__6474__auto__;
}
})())){
var vertex = thi.ng.ndarray.contours.contour_vertex_2d.call(null,src,y,x,to__$1,isoval);
var vec__22793 = thi.ng.ndarray.contours.next_edges_2d.call(null,to__$1);
var oy = cljs.core.nth.call(null,vec__22793,(0),null);
var ox = cljs.core.nth.call(null,vec__22793,(1),null);
var G__22818 = cljs.core.next.call(null,pos);
var G__22819 = cljs.core.conj_BANG_.call(null,curr__$1,vertex);
var G__22820 = to__$1;
var G__22821 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + oy),(x + ox)], null);
pos = G__22818;
curr = G__22819;
to = G__22820;
p = G__22821;
continue;
} else {
var G__22822 = cljs.core.next.call(null,pos);
var G__22823 = curr__$1;
var G__22824 = to__$1;
var G__22825 = null;
pos = G__22822;
curr = G__22823;
to = G__22824;
p = G__22825;
continue;
}
}
} else {
return cljs.core.persistent_BANG_.call(null,cljs.core.conj_BANG_.call(null,cljs.core.deref.call(null,contours),cljs.core.persistent_BANG_.call(null,curr)));
}
break;
}
});

//# sourceMappingURL=contours.js.map