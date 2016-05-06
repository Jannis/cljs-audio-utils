// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.core');
goog.require('cljs.core');
thi.ng.geom.core._STAR_resolution_STAR_ = (20);

/**
 * @interface
 */
thi.ng.geom.core.PMathOps = function(){};

thi.ng.geom.core._PLUS_ = (function thi$ng$geom$core$_PLUS_(var_args){
var args7625 = [];
var len__7544__auto___7747 = arguments.length;
var i__7545__auto___7748 = (0);
while(true){
if((i__7545__auto___7748 < len__7544__auto___7747)){
args7625.push((arguments[i__7545__auto___7748]));

var G__7749 = (i__7545__auto___7748 + (1));
i__7545__auto___7748 = G__7749;
continue;
} else {
}
break;
}

var G__7660 = args7625.length;
switch (G__7660) {
case 1:
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7625.length)].join('')));

}
});

thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 == null)))){
return _.thi$ng$geom$core$PMathOps$_PLUS_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._PLUS_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._PLUS_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.+",_);
}
}
}
});

thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 == null)))){
return _.thi$ng$geom$core$PMathOps$_PLUS_$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._PLUS_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._PLUS_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.+",_);
}
}
}
});

thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 == null)))){
return _.thi$ng$geom$core$PMathOps$_PLUS_$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._PLUS_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._PLUS_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.+",_);
}
}
}
});

thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 == null)))){
return _.thi$ng$geom$core$PMathOps$_PLUS_$arity$4(_,a,b,c);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._PLUS_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b,c);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._PLUS_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.+",_);
}
}
}
});

thi.ng.geom.core._PLUS_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.core._ = (function thi$ng$geom$core$_(var_args){
var args7670 = [];
var len__7544__auto___7783 = arguments.length;
var i__7545__auto___7784 = (0);
while(true){
if((i__7545__auto___7784 < len__7544__auto___7783)){
args7670.push((arguments[i__7545__auto___7784]));

var G__7790 = (i__7545__auto___7784 + (1));
i__7545__auto___7784 = G__7790;
continue;
} else {
}
break;
}

var G__7674 = args7670.length;
switch (G__7674) {
case 1:
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7670.length)].join('')));

}
});

thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$_$arity$1 == null)))){
return _.thi$ng$geom$core$PMathOps$_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.-",_);
}
}
}
});

thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$_$arity$2 == null)))){
return _.thi$ng$geom$core$PMathOps$_$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.-",_);
}
}
}
});

thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$_$arity$3 == null)))){
return _.thi$ng$geom$core$PMathOps$_$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.-",_);
}
}
}
});

thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$_$arity$4 == null)))){
return _.thi$ng$geom$core$PMathOps$_$arity$4(_,a,b,c);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b,c);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.-",_);
}
}
}
});

thi.ng.geom.core._.cljs$lang$maxFixedArity = 4;

thi.ng.geom.core._STAR_ = (function thi$ng$geom$core$_STAR_(var_args){
var args7695 = [];
var len__7544__auto___7820 = arguments.length;
var i__7545__auto___7821 = (0);
while(true){
if((i__7545__auto___7821 < len__7544__auto___7820)){
args7695.push((arguments[i__7545__auto___7821]));

var G__7825 = (i__7545__auto___7821 + (1));
i__7545__auto___7821 = G__7825;
continue;
} else {
}
break;
}

var G__7702 = args7695.length;
switch (G__7702) {
case 1:
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7695.length)].join('')));

}
});

thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$_STAR_$arity$1 == null)))){
return _.thi$ng$geom$core$PMathOps$_STAR_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.*",_);
}
}
}
});

thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$_STAR_$arity$2 == null)))){
return _.thi$ng$geom$core$PMathOps$_STAR_$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.*",_);
}
}
}
});

thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$_STAR_$arity$3 == null)))){
return _.thi$ng$geom$core$PMathOps$_STAR_$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.*",_);
}
}
}
});

thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$_STAR_$arity$4 == null)))){
return _.thi$ng$geom$core$PMathOps$_STAR_$arity$4(_,a,b,c);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b,c);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.*",_);
}
}
}
});

thi.ng.geom.core._STAR_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.core.div = (function thi$ng$geom$core$div(var_args){
var args7709 = [];
var len__7544__auto___7845 = arguments.length;
var i__7545__auto___7846 = (0);
while(true){
if((i__7545__auto___7846 < len__7544__auto___7845)){
args7709.push((arguments[i__7545__auto___7846]));

var G__7847 = (i__7545__auto___7846 + (1));
i__7545__auto___7846 = G__7847;
continue;
} else {
}
break;
}

var G__7712 = args7709.length;
switch (G__7712) {
case 1:
return thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7709.length)].join('')));

}
});

thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$div$arity$1 == null)))){
return _.thi$ng$geom$core$PMathOps$div$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.div[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.div["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.div",_);
}
}
}
});

thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$div$arity$2 == null)))){
return _.thi$ng$geom$core$PMathOps$div$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.div[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.div["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.div",_);
}
}
}
});

thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$div$arity$3 == null)))){
return _.thi$ng$geom$core$PMathOps$div$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.div[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.div["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.div",_);
}
}
}
});

thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$div$arity$4 == null)))){
return _.thi$ng$geom$core$PMathOps$div$arity$4(_,a,b,c);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.div[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b,c);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.div["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.div",_);
}
}
}
});

thi.ng.geom.core.div.cljs$lang$maxFixedArity = 4;

thi.ng.geom.core.madd = (function thi$ng$geom$core$madd(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$madd$arity$3 == null)))){
return _.thi$ng$geom$core$PMathOps$madd$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.madd[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.madd["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.madd",_);
}
}
}
});

thi.ng.geom.core.addm = (function thi$ng$geom$core$addm(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$addm$arity$3 == null)))){
return _.thi$ng$geom$core$PMathOps$addm$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.addm[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.addm["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.addm",_);
}
}
}
});

thi.ng.geom.core.msub = (function thi$ng$geom$core$msub(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$msub$arity$3 == null)))){
return _.thi$ng$geom$core$PMathOps$msub$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.msub[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.msub["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.msub",_);
}
}
}
});

thi.ng.geom.core.subm = (function thi$ng$geom$core$subm(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$subm$arity$3 == null)))){
return _.thi$ng$geom$core$PMathOps$subm$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.subm[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.subm["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.subm",_);
}
}
}
});

thi.ng.geom.core.abs = (function thi$ng$geom$core$abs(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMathOps$abs$arity$1 == null)))){
return _.thi$ng$geom$core$PMathOps$abs$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.abs[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.abs["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMathOps.abs",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PMutableMathOps = function(){};

thi.ng.geom.core._PLUS__BANG_ = (function thi$ng$geom$core$_PLUS__BANG_(var_args){
var args7880 = [];
var len__7544__auto___8000 = arguments.length;
var i__7545__auto___8001 = (0);
while(true){
if((i__7545__auto___8001 < len__7544__auto___8000)){
args7880.push((arguments[i__7545__auto___8001]));

var G__8002 = (i__7545__auto___8001 + (1));
i__7545__auto___8001 = G__8002;
continue;
} else {
}
break;
}

var G__7887 = args7880.length;
switch (G__7887) {
case 1:
return thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7880.length)].join('')));

}
});

thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._PLUS__BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._PLUS__BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.+!",_);
}
}
}
});

thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._PLUS__BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._PLUS__BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.+!",_);
}
}
}
});

thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._PLUS__BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._PLUS__BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.+!",_);
}
}
}
});

thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$4 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$4(_,a,b,c);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._PLUS__BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b,c);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._PLUS__BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.+!",_);
}
}
}
});

thi.ng.geom.core._PLUS__BANG_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.core.__BANG_ = (function thi$ng$geom$core$__BANG_(var_args){
var args7900 = [];
var len__7544__auto___8021 = arguments.length;
var i__7545__auto___8022 = (0);
while(true){
if((i__7545__auto___8022 < len__7544__auto___8021)){
args7900.push((arguments[i__7545__auto___8022]));

var G__8026 = (i__7545__auto___8022 + (1));
i__7545__auto___8022 = G__8026;
continue;
} else {
}
break;
}

var G__7904 = args7900.length;
switch (G__7904) {
case 1:
return thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7900.length)].join('')));

}
});

thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.__BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.__BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.-!",_);
}
}
}
});

thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.__BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.__BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.-!",_);
}
}
}
});

thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.__BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.__BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.-!",_);
}
}
}
});

thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$4 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$4(_,a,b,c);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.__BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b,c);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.__BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.-!",_);
}
}
}
});

thi.ng.geom.core.__BANG_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.core._STAR__BANG_ = (function thi$ng$geom$core$_STAR__BANG_(var_args){
var args7921 = [];
var len__7544__auto___8046 = arguments.length;
var i__7545__auto___8047 = (0);
while(true){
if((i__7545__auto___8047 < len__7544__auto___8046)){
args7921.push((arguments[i__7545__auto___8047]));

var G__8055 = (i__7545__auto___8047 + (1));
i__7545__auto___8047 = G__8055;
continue;
} else {
}
break;
}

var G__7927 = args7921.length;
switch (G__7927) {
case 1:
return thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7921.length)].join('')));

}
});

thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._STAR__BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._STAR__BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.*!",_);
}
}
}
});

thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._STAR__BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._STAR__BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.*!",_);
}
}
}
});

thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._STAR__BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._STAR__BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.*!",_);
}
}
}
});

thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$4 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$4(_,a,b,c);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core._STAR__BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b,c);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core._STAR__BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.*!",_);
}
}
}
});

thi.ng.geom.core._STAR__BANG_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.core.div_BANG_ = (function thi$ng$geom$core$div_BANG_(var_args){
var args7948 = [];
var len__7544__auto___8077 = arguments.length;
var i__7545__auto___8078 = (0);
while(true){
if((i__7545__auto___8078 < len__7544__auto___8077)){
args7948.push((arguments[i__7545__auto___8078]));

var G__8079 = (i__7545__auto___8078 + (1));
i__7545__auto___8078 = G__8079;
continue;
} else {
}
break;
}

var G__7953 = args7948.length;
switch (G__7953) {
case 1:
return thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7948.length)].join('')));

}
});

thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.div_BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.div_BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.div!",_);
}
}
}
});

thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.div_BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.div_BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.div!",_);
}
}
}
});

thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.div_BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.div_BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.div!",_);
}
}
}
});

thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$4 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$4(_,a,b,c);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.div_BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b,c);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.div_BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.div!",_);
}
}
}
});

thi.ng.geom.core.div_BANG_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.core.madd_BANG_ = (function thi$ng$geom$core$madd_BANG_(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.madd_BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.madd_BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.madd!",_);
}
}
}
});

thi.ng.geom.core.addm_BANG_ = (function thi$ng$geom$core$addm_BANG_(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.addm_BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.addm_BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.addm!",_);
}
}
}
});

thi.ng.geom.core.msub_BANG_ = (function thi$ng$geom$core$msub_BANG_(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.msub_BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.msub_BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.msub!",_);
}
}
}
});

thi.ng.geom.core.subm_BANG_ = (function thi$ng$geom$core$subm_BANG_(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.subm_BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.subm_BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.subm!",_);
}
}
}
});

thi.ng.geom.core.abs_BANG_ = (function thi$ng$geom$core$abs_BANG_(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 == null)))){
return _.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.abs_BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.abs_BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableMathOps.abs!",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PConjugate = function(){};

thi.ng.geom.core.conjugate = (function thi$ng$geom$core$conjugate(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PConjugate$conjugate$arity$1 == null)))){
return _.thi$ng$geom$core$PConjugate$conjugate$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.conjugate[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.conjugate["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PConjugate.conjugate",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PCrossProduct = function(){};

thi.ng.geom.core.cross = (function thi$ng$geom$core$cross(_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PCrossProduct$cross$arity$2 == null)))){
return _.thi$ng$geom$core$PCrossProduct$cross$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.cross[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.cross["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PCrossProduct.cross",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PDeterminant = function(){};

thi.ng.geom.core.determinant = (function thi$ng$geom$core$determinant(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PDeterminant$determinant$arity$1 == null)))){
return _.thi$ng$geom$core$PDeterminant$determinant$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.determinant[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.determinant["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PDeterminant.determinant",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PDistance = function(){};

thi.ng.geom.core.dist = (function thi$ng$geom$core$dist(_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PDistance$dist$arity$2 == null)))){
return _.thi$ng$geom$core$PDistance$dist$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.dist[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.dist["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PDistance.dist",_);
}
}
}
});

thi.ng.geom.core.dist_squared = (function thi$ng$geom$core$dist_squared(_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PDistance$dist_squared$arity$2 == null)))){
return _.thi$ng$geom$core$PDistance$dist_squared$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.dist_squared[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.dist_squared["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PDistance.dist-squared",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PDotProduct = function(){};

thi.ng.geom.core.dot = (function thi$ng$geom$core$dot(_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PDotProduct$dot$arity$2 == null)))){
return _.thi$ng$geom$core$PDotProduct$dot$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.dot[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.dot["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PDotProduct.dot",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PHeading = function(){};

thi.ng.geom.core.heading = (function thi$ng$geom$core$heading(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PHeading$heading$arity$1 == null)))){
return _.thi$ng$geom$core$PHeading$heading$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.heading[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.heading["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PHeading.heading",_);
}
}
}
});

thi.ng.geom.core.heading_xy = (function thi$ng$geom$core$heading_xy(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PHeading$heading_xy$arity$1 == null)))){
return _.thi$ng$geom$core$PHeading$heading_xy$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.heading_xy[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.heading_xy["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PHeading.heading-xy",_);
}
}
}
});

thi.ng.geom.core.heading_xz = (function thi$ng$geom$core$heading_xz(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PHeading$heading_xz$arity$1 == null)))){
return _.thi$ng$geom$core$PHeading$heading_xz$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.heading_xz[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.heading_xz["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PHeading.heading-xz",_);
}
}
}
});

thi.ng.geom.core.heading_yz = (function thi$ng$geom$core$heading_yz(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PHeading$heading_yz$arity$1 == null)))){
return _.thi$ng$geom$core$PHeading$heading_yz$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.heading_yz[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.heading_yz["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PHeading.heading-yz",_);
}
}
}
});

thi.ng.geom.core.angle_between = (function thi$ng$geom$core$angle_between(_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PHeading$angle_between$arity$2 == null)))){
return _.thi$ng$geom$core$PHeading$angle_between$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.angle_between[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.angle_between["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PHeading.angle-between",_);
}
}
}
});

thi.ng.geom.core.slope_xy = (function thi$ng$geom$core$slope_xy(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PHeading$slope_xy$arity$1 == null)))){
return _.thi$ng$geom$core$PHeading$slope_xy$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.slope_xy[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.slope_xy["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PHeading.slope-xy",_);
}
}
}
});

thi.ng.geom.core.slope_xz = (function thi$ng$geom$core$slope_xz(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PHeading$slope_xz$arity$1 == null)))){
return _.thi$ng$geom$core$PHeading$slope_xz$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.slope_xz[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.slope_xz["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PHeading.slope-xz",_);
}
}
}
});

thi.ng.geom.core.slope_yz = (function thi$ng$geom$core$slope_yz(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PHeading$slope_yz$arity$1 == null)))){
return _.thi$ng$geom$core$PHeading$slope_yz$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.slope_yz[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.slope_yz["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PHeading.slope-yz",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PInterpolate = function(){};

thi.ng.geom.core.mix = (function thi$ng$geom$core$mix(var_args){
var args8167 = [];
var len__7544__auto___8180 = arguments.length;
var i__7545__auto___8181 = (0);
while(true){
if((i__7545__auto___8181 < len__7544__auto___8180)){
args8167.push((arguments[i__7545__auto___8181]));

var G__8184 = (i__7545__auto___8181 + (1));
i__7545__auto___8181 = G__8184;
continue;
} else {
}
break;
}

var G__8169 = args8167.length;
switch (G__8169) {
case 2:
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8167.length)].join('')));

}
});

thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PInterpolate$mix$arity$2 == null)))){
return _.thi$ng$geom$core$PInterpolate$mix$arity$2(_,x);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.mix[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,x);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.mix["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"PInterpolate.mix",_);
}
}
}
});

thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3 = (function (_,x,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PInterpolate$mix$arity$3 == null)))){
return _.thi$ng$geom$core$PInterpolate$mix$arity$3(_,x,t);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.mix[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,x,t);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.mix["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,x,t);
} else {
throw cljs.core.missing_protocol.call(null,"PInterpolate.mix",_);
}
}
}
});

thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6 = (function (_,a,b,c,u,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PInterpolate$mix$arity$6 == null)))){
return _.thi$ng$geom$core$PInterpolate$mix$arity$6(_,a,b,c,u,v);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.mix[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b,c,u,v);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.mix["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b,c,u,v);
} else {
throw cljs.core.missing_protocol.call(null,"PInterpolate.mix",_);
}
}
}
});

thi.ng.geom.core.mix.cljs$lang$maxFixedArity = 6;


/**
 * @interface
 */
thi.ng.geom.core.PInvert = function(){};

thi.ng.geom.core.invert = (function thi$ng$geom$core$invert(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PInvert$invert$arity$1 == null)))){
return _.thi$ng$geom$core$PInvert$invert$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.invert[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.invert["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PInvert.invert",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PLimit = function(){};

thi.ng.geom.core.limit = (function thi$ng$geom$core$limit(_,x){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PLimit$limit$arity$2 == null)))){
return _.thi$ng$geom$core$PLimit$limit$arity$2(_,x);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.limit[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,x);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.limit["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"PLimit.limit",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PMagnitude = function(){};

thi.ng.geom.core.mag = (function thi$ng$geom$core$mag(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMagnitude$mag$arity$1 == null)))){
return _.thi$ng$geom$core$PMagnitude$mag$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.mag[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.mag["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMagnitude.mag",_);
}
}
}
});

thi.ng.geom.core.mag_squared = (function thi$ng$geom$core$mag_squared(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 == null)))){
return _.thi$ng$geom$core$PMagnitude$mag_squared$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.mag_squared[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.mag_squared["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMagnitude.mag-squared",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PMatrixConvert = function(){};

thi.ng.geom.core.as_matrix = (function thi$ng$geom$core$as_matrix(var_args){
var args8201 = [];
var len__7544__auto___8206 = arguments.length;
var i__7545__auto___8207 = (0);
while(true){
if((i__7545__auto___8207 < len__7544__auto___8206)){
args8201.push((arguments[i__7545__auto___8207]));

var G__8208 = (i__7545__auto___8207 + (1));
i__7545__auto___8207 = G__8208;
continue;
} else {
}
break;
}

var G__8204 = args8201.length;
switch (G__8204) {
case 1:
return thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8201.length)].join('')));

}
});

thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$1 == null)))){
return _.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.as_matrix[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.as_matrix["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixConvert.as-matrix",_);
}
}
}
});

thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$2 == null)))){
return _.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$2(_,opts);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.as_matrix[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,opts);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.as_matrix["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PMatrixConvert.as-matrix",_);
}
}
}
});

thi.ng.geom.core.as_matrix.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
thi.ng.geom.core.PMinMax = function(){};

thi.ng.geom.core.min = (function thi$ng$geom$core$min(var_args){
var args8210 = [];
var len__7544__auto___8225 = arguments.length;
var i__7545__auto___8226 = (0);
while(true){
if((i__7545__auto___8226 < len__7544__auto___8225)){
args8210.push((arguments[i__7545__auto___8226]));

var G__8227 = (i__7545__auto___8226 + (1));
i__7545__auto___8226 = G__8227;
continue;
} else {
}
break;
}

var G__8213 = args8210.length;
switch (G__8213) {
case 2:
return thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8210.length)].join('')));

}
});

thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMinMax$min$arity$2 == null)))){
return _.thi$ng$geom$core$PMinMax$min$arity$2(_,x);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.min[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,x);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.min["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"PMinMax.min",_);
}
}
}
});

thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMinMax$min$arity$3 == null)))){
return _.thi$ng$geom$core$PMinMax$min$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.min[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.min["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMinMax.min",_);
}
}
}
});

thi.ng.geom.core.min.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.max = (function thi$ng$geom$core$max(var_args){
var args8216 = [];
var len__7544__auto___8231 = arguments.length;
var i__7545__auto___8232 = (0);
while(true){
if((i__7545__auto___8232 < len__7544__auto___8231)){
args8216.push((arguments[i__7545__auto___8232]));

var G__8233 = (i__7545__auto___8232 + (1));
i__7545__auto___8232 = G__8233;
continue;
} else {
}
break;
}

var G__8218 = args8216.length;
switch (G__8218) {
case 2:
return thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8216.length)].join('')));

}
});

thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$2 = (function (_,y){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMinMax$max$arity$2 == null)))){
return _.thi$ng$geom$core$PMinMax$max$arity$2(_,y);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.max[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,y);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.max["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,y);
} else {
throw cljs.core.missing_protocol.call(null,"PMinMax.max",_);
}
}
}
});

thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMinMax$max$arity$3 == null)))){
return _.thi$ng$geom$core$PMinMax$max$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.max[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.max["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PMinMax.max",_);
}
}
}
});

thi.ng.geom.core.max.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
thi.ng.geom.core.PNormal = function(){};

thi.ng.geom.core.normal = (function thi$ng$geom$core$normal(var_args){
var args8239 = [];
var len__7544__auto___8246 = arguments.length;
var i__7545__auto___8247 = (0);
while(true){
if((i__7545__auto___8247 < len__7544__auto___8246)){
args8239.push((arguments[i__7545__auto___8247]));

var G__8249 = (i__7545__auto___8247 + (1));
i__7545__auto___8247 = G__8249;
continue;
} else {
}
break;
}

var G__8244 = args8239.length;
switch (G__8244) {
case 1:
return thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8239.length)].join('')));

}
});

thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PNormal$normal$arity$1 == null)))){
return _.thi$ng$geom$core$PNormal$normal$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.normal[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.normal["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PNormal.normal",_);
}
}
}
});

thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PNormal$normal$arity$2 == null)))){
return _.thi$ng$geom$core$PNormal$normal$arity$2(_,a);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.normal[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.normal["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"PNormal.normal",_);
}
}
}
});

thi.ng.geom.core.normal.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
thi.ng.geom.core.PNormalize = function(){};

thi.ng.geom.core.normalize = (function thi$ng$geom$core$normalize(var_args){
var args8263 = [];
var len__7544__auto___8282 = arguments.length;
var i__7545__auto___8283 = (0);
while(true){
if((i__7545__auto___8283 < len__7544__auto___8282)){
args8263.push((arguments[i__7545__auto___8283]));

var G__8284 = (i__7545__auto___8283 + (1));
i__7545__auto___8283 = G__8284;
continue;
} else {
}
break;
}

var G__8271 = args8263.length;
switch (G__8271) {
case 1:
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8263.length)].join('')));

}
});

thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PNormalize$normalize$arity$1 == null)))){
return _.thi$ng$geom$core$PNormalize$normalize$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.normalize[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.normalize["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PNormalize.normalize",_);
}
}
}
});

thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2 = (function (_,len){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PNormalize$normalize$arity$2 == null)))){
return _.thi$ng$geom$core$PNormalize$normalize$arity$2(_,len);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.normalize[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,len);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.normalize["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,len);
} else {
throw cljs.core.missing_protocol.call(null,"PNormalize.normalize",_);
}
}
}
});

thi.ng.geom.core.normalize.cljs$lang$maxFixedArity = 2;

thi.ng.geom.core.normalized_QMARK_ = (function thi$ng$geom$core$normalized_QMARK_(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 == null)))){
return _.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.normalized_QMARK_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.normalized_QMARK_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PNormalize.normalized?",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PSetOps = function(){};

thi.ng.geom.core.union = (function thi$ng$geom$core$union(_,x){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSetOps$union$arity$2 == null)))){
return _.thi$ng$geom$core$PSetOps$union$arity$2(_,x);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.union[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,x);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.union["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"PSetOps.union",_);
}
}
}
});

thi.ng.geom.core.intersection = (function thi$ng$geom$core$intersection(_,y){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSetOps$intersection$arity$2 == null)))){
return _.thi$ng$geom$core$PSetOps$intersection$arity$2(_,y);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.intersection[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,y);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.intersection["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,y);
} else {
throw cljs.core.missing_protocol.call(null,"PSetOps.intersection",_);
}
}
}
});

thi.ng.geom.core.difference = (function thi$ng$geom$core$difference(_,x){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSetOps$difference$arity$2 == null)))){
return _.thi$ng$geom$core$PSetOps$difference$arity$2(_,x);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.difference[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,x);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.difference["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"PSetOps.difference",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PTranspose = function(){};

thi.ng.geom.core.transpose = (function thi$ng$geom$core$transpose(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PTranspose$transpose$arity$1 == null)))){
return _.thi$ng$geom$core$PTranspose$transpose$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.transpose[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.transpose["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PTranspose.transpose",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PPolar = function(){};

thi.ng.geom.core.as_polar = (function thi$ng$geom$core$as_polar(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PPolar$as_polar$arity$1 == null)))){
return _.thi$ng$geom$core$PPolar$as_polar$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.as_polar[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.as_polar["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PPolar.as-polar",_);
}
}
}
});

thi.ng.geom.core.as_cartesian = (function thi$ng$geom$core$as_cartesian(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PPolar$as_cartesian$arity$1 == null)))){
return _.thi$ng$geom$core$PPolar$as_cartesian$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.as_cartesian[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.as_cartesian["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PPolar.as-cartesian",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PReflect = function(){};

thi.ng.geom.core.reflect = (function thi$ng$geom$core$reflect(_,r){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PReflect$reflect$arity$2 == null)))){
return _.thi$ng$geom$core$PReflect$reflect$arity$2(_,r);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.reflect[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,r);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.reflect["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,r);
} else {
throw cljs.core.missing_protocol.call(null,"PReflect.reflect",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PRotate = function(){};

thi.ng.geom.core.rotate = (function thi$ng$geom$core$rotate(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PRotate$rotate$arity$2 == null)))){
return _.thi$ng$geom$core$PRotate$rotate$arity$2(_,t);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.rotate[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,t);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.rotate["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"PRotate.rotate",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PRotate3D = function(){};

thi.ng.geom.core.rotate_x = (function thi$ng$geom$core$rotate_x(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 == null)))){
return _.thi$ng$geom$core$PRotate3D$rotate_x$arity$2(_,t);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.rotate_x[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,t);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.rotate_x["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"PRotate3D.rotate-x",_);
}
}
}
});

thi.ng.geom.core.rotate_y = (function thi$ng$geom$core$rotate_y(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 == null)))){
return _.thi$ng$geom$core$PRotate3D$rotate_y$arity$2(_,t);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.rotate_y[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,t);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.rotate_y["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"PRotate3D.rotate-y",_);
}
}
}
});

thi.ng.geom.core.rotate_z = (function thi$ng$geom$core$rotate_z(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 == null)))){
return _.thi$ng$geom$core$PRotate3D$rotate_z$arity$2(_,t);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.rotate_z[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,t);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.rotate_z["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"PRotate3D.rotate-z",_);
}
}
}
});

thi.ng.geom.core.rotate_around_axis = (function thi$ng$geom$core$rotate_around_axis(_,a,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 == null)))){
return _.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3(_,a,t);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.rotate_around_axis[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,t);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.rotate_around_axis["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,t);
} else {
throw cljs.core.missing_protocol.call(null,"PRotate3D.rotate-around-axis",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PScale = function(){};

thi.ng.geom.core.scale = (function thi$ng$geom$core$scale(var_args){
var args8430 = [];
var len__7544__auto___8447 = arguments.length;
var i__7545__auto___8448 = (0);
while(true){
if((i__7545__auto___8448 < len__7544__auto___8447)){
args8430.push((arguments[i__7545__auto___8448]));

var G__8449 = (i__7545__auto___8448 + (1));
i__7545__auto___8448 = G__8449;
continue;
} else {
}
break;
}

var G__8434 = args8430.length;
switch (G__8434) {
case 2:
return thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8430.length)].join('')));

}
});

thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$2 = (function (_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PScale$scale$arity$2 == null)))){
return _.thi$ng$geom$core$PScale$scale$arity$2(_,s);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.scale[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,s);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.scale["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"PScale.scale",_);
}
}
}
});

thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PScale$scale$arity$3 == null)))){
return _.thi$ng$geom$core$PScale$scale$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.scale[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.scale["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PScale.scale",_);
}
}
}
});

thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PScale$scale$arity$4 == null)))){
return _.thi$ng$geom$core$PScale$scale$arity$4(_,a,b,c);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.scale[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b,c);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.scale["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"PScale.scale",_);
}
}
}
});

thi.ng.geom.core.scale.cljs$lang$maxFixedArity = 4;

thi.ng.geom.core.scale_size = (function thi$ng$geom$core$scale_size(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PScale$scale_size$arity$2 == null)))){
return _.thi$ng$geom$core$PScale$scale_size$arity$2(_,s);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.scale_size[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,s);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.scale_size["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"PScale.scale-size",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PShear = function(){};

thi.ng.geom.core.shear = (function thi$ng$geom$core$shear(var_args){
var args8458 = [];
var len__7544__auto___8470 = arguments.length;
var i__7545__auto___8471 = (0);
while(true){
if((i__7545__auto___8471 < len__7544__auto___8470)){
args8458.push((arguments[i__7545__auto___8471]));

var G__8472 = (i__7545__auto___8471 + (1));
i__7545__auto___8471 = G__8472;
continue;
} else {
}
break;
}

var G__8460 = args8458.length;
switch (G__8460) {
case 2:
return thi.ng.geom.core.shear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.shear.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.shear.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8458.length)].join('')));

}
});

thi.ng.geom.core.shear.cljs$core$IFn$_invoke$arity$2 = (function (_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PShear$shear$arity$2 == null)))){
return _.thi$ng$geom$core$PShear$shear$arity$2(_,s);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.shear[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,s);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.shear["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"PShear.shear",_);
}
}
}
});

thi.ng.geom.core.shear.cljs$core$IFn$_invoke$arity$3 = (function (_,sx,sy){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PShear$shear$arity$3 == null)))){
return _.thi$ng$geom$core$PShear$shear$arity$3(_,sx,sy);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.shear[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,sx,sy);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.shear["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,sx,sy);
} else {
throw cljs.core.missing_protocol.call(null,"PShear.shear",_);
}
}
}
});

thi.ng.geom.core.shear.cljs$core$IFn$_invoke$arity$4 = (function (_,sx,sy,sz){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PShear$shear$arity$4 == null)))){
return _.thi$ng$geom$core$PShear$shear$arity$4(_,sx,sy,sz);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.shear[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,sx,sy,sz);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.shear["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,sx,sy,sz);
} else {
throw cljs.core.missing_protocol.call(null,"PShear.shear",_);
}
}
}
});

thi.ng.geom.core.shear.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
thi.ng.geom.core.PTransform = function(){};

thi.ng.geom.core.transform = (function thi$ng$geom$core$transform(_,matrix){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PTransform$transform$arity$2 == null)))){
return _.thi$ng$geom$core$PTransform$transform$arity$2(_,matrix);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.transform[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,matrix);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.transform["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,matrix);
} else {
throw cljs.core.missing_protocol.call(null,"PTransform.transform",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PTranslate = function(){};

thi.ng.geom.core.translate = (function thi$ng$geom$core$translate(var_args){
var args8480 = [];
var len__7544__auto___8484 = arguments.length;
var i__7545__auto___8485 = (0);
while(true){
if((i__7545__auto___8485 < len__7544__auto___8484)){
args8480.push((arguments[i__7545__auto___8485]));

var G__8486 = (i__7545__auto___8485 + (1));
i__7545__auto___8485 = G__8486;
continue;
} else {
}
break;
}

var G__8482 = args8480.length;
switch (G__8482) {
case 2:
return thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8480.length)].join('')));

}
});

thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$2 = (function (_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PTranslate$translate$arity$2 == null)))){
return _.thi$ng$geom$core$PTranslate$translate$arity$2(_,t);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.translate[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,t);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.translate["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"PTranslate.translate",_);
}
}
}
});

thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$3 = (function (_,x,y){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PTranslate$translate$arity$3 == null)))){
return _.thi$ng$geom$core$PTranslate$translate$arity$3(_,x,y);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.translate[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,x,y);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.translate["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"PTranslate.translate",_);
}
}
}
});

thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$4 = (function (_,x,y,z){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PTranslate$translate$arity$4 == null)))){
return _.thi$ng$geom$core$PTranslate$translate$arity$4(_,x,y,z);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.translate[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,x,y,z);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.translate["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,x,y,z);
} else {
throw cljs.core.missing_protocol.call(null,"PTranslate.translate",_);
}
}
}
});

thi.ng.geom.core.translate.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
thi.ng.geom.core.PVectorTransform = function(){};

thi.ng.geom.core.transform_vector = (function thi$ng$geom$core$transform_vector(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PVectorTransform$transform_vector$arity$2 == null)))){
return _.thi$ng$geom$core$PVectorTransform$transform_vector$arity$2(_,v);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.transform_vector[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,v);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.transform_vector["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorTransform.transform-vector",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PGraph = function(){};

thi.ng.geom.core.connected_components = (function thi$ng$geom$core$connected_components(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PGraph$connected_components$arity$1 == null)))){
return _.thi$ng$geom$core$PGraph$connected_components$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.connected_components[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.connected_components["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PGraph.connected-components",_);
}
}
}
});

thi.ng.geom.core.cyclic_QMARK_ = (function thi$ng$geom$core$cyclic_QMARK_(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PGraph$cyclic_QMARK_$arity$1 == null)))){
return _.thi$ng$geom$core$PGraph$cyclic_QMARK_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.cyclic_QMARK_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.cyclic_QMARK_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PGraph.cyclic?",_);
}
}
}
});

thi.ng.geom.core.vertex_valence = (function thi$ng$geom$core$vertex_valence(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PGraph$vertex_valence$arity$2 == null)))){
return _.thi$ng$geom$core$PGraph$vertex_valence$arity$2(_,v);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.vertex_valence[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,v);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.vertex_valence["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"PGraph.vertex-valence",_);
}
}
}
});

thi.ng.geom.core.vertex_neighbors = (function thi$ng$geom$core$vertex_neighbors(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 == null)))){
return _.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2(_,v);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.vertex_neighbors[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,v);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.vertex_neighbors["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"PGraph.vertex-neighbors",_);
}
}
}
});

thi.ng.geom.core.remove_vertex = (function thi$ng$geom$core$remove_vertex(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PGraph$remove_vertex$arity$2 == null)))){
return _.thi$ng$geom$core$PGraph$remove_vertex$arity$2(_,v);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.remove_vertex[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,v);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.remove_vertex["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"PGraph.remove-vertex",_);
}
}
}
});

thi.ng.geom.core.replace_vertex = (function thi$ng$geom$core$replace_vertex(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PGraph$replace_vertex$arity$3 == null)))){
return _.thi$ng$geom$core$PGraph$replace_vertex$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.replace_vertex[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.replace_vertex["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PGraph.replace-vertex",_);
}
}
}
});

thi.ng.geom.core.merge_vertices = (function thi$ng$geom$core$merge_vertices(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PGraph$merge_vertices$arity$3 == null)))){
return _.thi$ng$geom$core$PGraph$merge_vertices$arity$3(_,a,b);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.merge_vertices[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.merge_vertices["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"PGraph.merge-vertices",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PDirectedGraph = function(){};

thi.ng.geom.core.in_vertices = (function thi$ng$geom$core$in_vertices(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PDirectedGraph$in_vertices$arity$2 == null)))){
return _.thi$ng$geom$core$PDirectedGraph$in_vertices$arity$2(_,v);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.in_vertices[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,v);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.in_vertices["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"PDirectedGraph.in-vertices",_);
}
}
}
});

thi.ng.geom.core.out_vertices = (function thi$ng$geom$core$out_vertices(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PDirectedGraph$out_vertices$arity$2 == null)))){
return _.thi$ng$geom$core$PDirectedGraph$out_vertices$arity$2(_,v);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.out_vertices[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,v);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.out_vertices["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"PDirectedGraph.out-vertices",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PGraphConvert = function(){};

thi.ng.geom.core.as_graph = (function thi$ng$geom$core$as_graph(var_args){
var args8508 = [];
var len__7544__auto___8511 = arguments.length;
var i__7545__auto___8512 = (0);
while(true){
if((i__7545__auto___8512 < len__7544__auto___8511)){
args8508.push((arguments[i__7545__auto___8512]));

var G__8513 = (i__7545__auto___8512 + (1));
i__7545__auto___8512 = G__8513;
continue;
} else {
}
break;
}

var G__8510 = args8508.length;
switch (G__8510) {
case 1:
return thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8508.length)].join('')));

}
});

thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PGraphConvert$as_graph$arity$1 == null)))){
return _.thi$ng$geom$core$PGraphConvert$as_graph$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.as_graph[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.as_graph["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PGraphConvert.as-graph",_);
}
}
}
});

thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PGraphConvert$as_graph$arity$2 == null)))){
return _.thi$ng$geom$core$PGraphConvert$as_graph$arity$2(_,opts);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.as_graph[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,opts);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.as_graph["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PGraphConvert.as-graph",_);
}
}
}
});

thi.ng.geom.core.as_graph.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
thi.ng.geom.core.PVertexAccess = function(){};

thi.ng.geom.core.vertices = (function thi$ng$geom$core$vertices(var_args){
var args8515 = [];
var len__7544__auto___8522 = arguments.length;
var i__7545__auto___8523 = (0);
while(true){
if((i__7545__auto___8523 < len__7544__auto___8522)){
args8515.push((arguments[i__7545__auto___8523]));

var G__8524 = (i__7545__auto___8523 + (1));
i__7545__auto___8523 = G__8524;
continue;
} else {
}
break;
}

var G__8520 = args8515.length;
switch (G__8520) {
case 1:
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8515.length)].join('')));

}
});

thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PVertexAccess$vertices$arity$1 == null)))){
return _.thi$ng$geom$core$PVertexAccess$vertices$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.vertices[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.vertices["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PVertexAccess.vertices",_);
}
}
}
});

thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PVertexAccess$vertices$arity$2 == null)))){
return _.thi$ng$geom$core$PVertexAccess$vertices$arity$2(_,opts);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.vertices[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,opts);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.vertices["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PVertexAccess.vertices",_);
}
}
}
});

thi.ng.geom.core.vertices.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
thi.ng.geom.core.PEdgeAccess = function(){};

thi.ng.geom.core.edges = (function thi$ng$geom$core$edges(var_args){
var args8526 = [];
var len__7544__auto___8529 = arguments.length;
var i__7545__auto___8530 = (0);
while(true){
if((i__7545__auto___8530 < len__7544__auto___8529)){
args8526.push((arguments[i__7545__auto___8530]));

var G__8531 = (i__7545__auto___8530 + (1));
i__7545__auto___8530 = G__8531;
continue;
} else {
}
break;
}

var G__8528 = args8526.length;
switch (G__8528) {
case 1:
return thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8526.length)].join('')));

}
});

thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PEdgeAccess$edges$arity$1 == null)))){
return _.thi$ng$geom$core$PEdgeAccess$edges$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.edges[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.edges["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PEdgeAccess.edges",_);
}
}
}
});

thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PEdgeAccess$edges$arity$2 == null)))){
return _.thi$ng$geom$core$PEdgeAccess$edges$arity$2(_,opts);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.edges[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,opts);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.edges["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PEdgeAccess.edges",_);
}
}
}
});

thi.ng.geom.core.edges.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
thi.ng.geom.core.PFaceAccess = function(){};

thi.ng.geom.core.add_face = (function thi$ng$geom$core$add_face(_,f){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PFaceAccess$add_face$arity$2 == null)))){
return _.thi$ng$geom$core$PFaceAccess$add_face$arity$2(_,f);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.add_face[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,f);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.add_face["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"PFaceAccess.add-face",_);
}
}
}
});

thi.ng.geom.core.faces = (function thi$ng$geom$core$faces(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PFaceAccess$faces$arity$1 == null)))){
return _.thi$ng$geom$core$PFaceAccess$faces$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.faces[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.faces["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PFaceAccess.faces",_);
}
}
}
});

thi.ng.geom.core.remove_face = (function thi$ng$geom$core$remove_face(_,f){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PFaceAccess$remove_face$arity$2 == null)))){
return _.thi$ng$geom$core$PFaceAccess$remove_face$arity$2(_,f);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.remove_face[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,f);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.remove_face["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"PFaceAccess.remove-face",_);
}
}
}
});

thi.ng.geom.core.vertex_faces = (function thi$ng$geom$core$vertex_faces(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PFaceAccess$vertex_faces$arity$2 == null)))){
return _.thi$ng$geom$core$PFaceAccess$vertex_faces$arity$2(_,v);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.vertex_faces[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,v);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.vertex_faces["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"PFaceAccess.vertex-faces",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PNormalAccess = function(){};

thi.ng.geom.core.compute_face_normals = (function thi$ng$geom$core$compute_face_normals(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PNormalAccess$compute_face_normals$arity$1 == null)))){
return _.thi$ng$geom$core$PNormalAccess$compute_face_normals$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.compute_face_normals[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.compute_face_normals["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PNormalAccess.compute-face-normals",_);
}
}
}
});

thi.ng.geom.core.compute_vertex_normals = (function thi$ng$geom$core$compute_vertex_normals(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PNormalAccess$compute_vertex_normals$arity$1 == null)))){
return _.thi$ng$geom$core$PNormalAccess$compute_vertex_normals$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.compute_vertex_normals[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.compute_vertex_normals["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PNormalAccess.compute-vertex-normals",_);
}
}
}
});

thi.ng.geom.core.face_normals = (function thi$ng$geom$core$face_normals(_,force_QMARK_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PNormalAccess$face_normals$arity$2 == null)))){
return _.thi$ng$geom$core$PNormalAccess$face_normals$arity$2(_,force_QMARK_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.face_normals[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,force_QMARK_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.face_normals["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,force_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"PNormalAccess.face-normals",_);
}
}
}
});

thi.ng.geom.core.face_normal = (function thi$ng$geom$core$face_normal(_,f){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PNormalAccess$face_normal$arity$2 == null)))){
return _.thi$ng$geom$core$PNormalAccess$face_normal$arity$2(_,f);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.face_normal[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,f);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.face_normal["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"PNormalAccess.face-normal",_);
}
}
}
});

thi.ng.geom.core.vertex_normals = (function thi$ng$geom$core$vertex_normals(_,force_QMARK_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PNormalAccess$vertex_normals$arity$2 == null)))){
return _.thi$ng$geom$core$PNormalAccess$vertex_normals$arity$2(_,force_QMARK_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.vertex_normals[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,force_QMARK_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.vertex_normals["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,force_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"PNormalAccess.vertex-normals",_);
}
}
}
});

thi.ng.geom.core.vertex_normal = (function thi$ng$geom$core$vertex_normal(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PNormalAccess$vertex_normal$arity$2 == null)))){
return _.thi$ng$geom$core$PNormalAccess$vertex_normal$arity$2(_,v);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.vertex_normal[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,v);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.vertex_normal["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"PNormalAccess.vertex-normal",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PAlign = function(){};

/**
 * Returns updated entity aligned with `x` in the specified manner
 */
thi.ng.geom.core.align_with = (function thi$ng$geom$core$align_with(_,x,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PAlign$align_with$arity$3 == null)))){
return _.thi$ng$geom$core$PAlign$align_with$arity$3(_,x,opts);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.align_with[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,x,opts);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.align_with["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,x,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PAlign.align-with",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PArea = function(){};

/**
 * Returns an entity's total surface area
 */
thi.ng.geom.core.area = (function thi$ng$geom$core$area(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PArea$area$arity$1 == null)))){
return _.thi$ng$geom$core$PArea$area$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.area[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.area["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PArea.area",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PBoundary = function(){};

thi.ng.geom.core.contains_entity_QMARK_ = (function thi$ng$geom$core$contains_entity_QMARK_(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PBoundary$contains_entity_QMARK_$arity$2 == null)))){
return _.thi$ng$geom$core$PBoundary$contains_entity_QMARK_$arity$2(_,s);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.contains_entity_QMARK_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,s);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.contains_entity_QMARK_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"PBoundary.contains-entity?",_);
}
}
}
});

thi.ng.geom.core.contains_point_QMARK_ = (function thi$ng$geom$core$contains_point_QMARK_(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 == null)))){
return _.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2(_,p);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.contains_point_QMARK_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,p);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.contains_point_QMARK_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"PBoundary.contains-point?",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PBoundingCircle = function(){};

thi.ng.geom.core.bounding_circle = (function thi$ng$geom$core$bounding_circle(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 == null)))){
return _.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.bounding_circle[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.bounding_circle["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PBoundingCircle.bounding-circle",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PBoundingSphere = function(){};

thi.ng.geom.core.bounding_sphere = (function thi$ng$geom$core$bounding_sphere(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 == null)))){
return _.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.bounding_sphere[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.bounding_sphere["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PBoundingSphere.bounding-sphere",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PBounds = function(){};

/**
 * Returns bounding rect for 2d entities or box for 3d
 */
thi.ng.geom.core.bounds = (function thi$ng$geom$core$bounds(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PBounds$bounds$arity$1 == null)))){
return _.thi$ng$geom$core$PBounds$bounds$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.bounds[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.bounds["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PBounds.bounds",_);
}
}
}
});

/**
 * Returns entity's extent along Z (zero for 2d)
 */
thi.ng.geom.core.depth = (function thi$ng$geom$core$depth(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PBounds$depth$arity$1 == null)))){
return _.thi$ng$geom$core$PBounds$depth$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.depth[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.depth["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PBounds.depth",_);
}
}
}
});

/**
 * Returns entity's extent along Y axis
 */
thi.ng.geom.core.height = (function thi$ng$geom$core$height(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PBounds$height$arity$1 == null)))){
return _.thi$ng$geom$core$PBounds$height$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.height[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.height["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PBounds.height",_);
}
}
}
});

/**
 * Returns entity's extent along X axis
 */
thi.ng.geom.core.width = (function thi$ng$geom$core$width(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PBounds$width$arity$1 == null)))){
return _.thi$ng$geom$core$PBounds$width$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.width[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.width["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PBounds.width",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PCenter = function(){};

/**
 * Returns updated entity centered around world origin or given point
 */
thi.ng.geom.core.center = (function thi$ng$geom$core$center(var_args){
var args8578 = [];
var len__7544__auto___8582 = arguments.length;
var i__7545__auto___8583 = (0);
while(true){
if((i__7545__auto___8583 < len__7544__auto___8582)){
args8578.push((arguments[i__7545__auto___8583]));

var G__8586 = (i__7545__auto___8583 + (1));
i__7545__auto___8583 = G__8586;
continue;
} else {
}
break;
}

var G__8581 = args8578.length;
switch (G__8581) {
case 1:
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8578.length)].join('')));

}
});

thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PCenter$center$arity$1 == null)))){
return _.thi$ng$geom$core$PCenter$center$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.center[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.center["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PCenter.center",_);
}
}
}
});

thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2 = (function (_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PCenter$center$arity$2 == null)))){
return _.thi$ng$geom$core$PCenter$center$arity$2(_,p);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.center[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,p);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.center["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"PCenter.center",_);
}
}
}
});

thi.ng.geom.core.center.cljs$lang$maxFixedArity = 2;

/**
 * Returns centroid of entity
 */
thi.ng.geom.core.centroid = (function thi$ng$geom$core$centroid(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PCenter$centroid$arity$1 == null)))){
return _.thi$ng$geom$core$PCenter$centroid$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.centroid[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.centroid["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PCenter.centroid",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PCircumference = function(){};

/**
 * Returns an entity's circumference
 */
thi.ng.geom.core.circumference = (function thi$ng$geom$core$circumference(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PCircumference$circumference$arity$1 == null)))){
return _.thi$ng$geom$core$PCircumference$circumference$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.circumference[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.circumference["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PCircumference.circumference",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PClassify = function(){};

thi.ng.geom.core.classify_point = (function thi$ng$geom$core$classify_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PClassify$classify_point$arity$2 == null)))){
return _.thi$ng$geom$core$PClassify$classify_point$arity$2(_,p);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.classify_point[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,p);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.classify_point["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"PClassify.classify-point",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PClear = function(){};

thi.ng.geom.core.clear_STAR_ = (function thi$ng$geom$core$clear_STAR_(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PClear$clear_STAR_$arity$1 == null)))){
return _.thi$ng$geom$core$PClear$clear_STAR_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.clear_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.clear_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PClear.clear*",_);
}
}
}
});

thi.ng.geom.core.clear_BANG_ = (function thi$ng$geom$core$clear_BANG_(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PClear$clear_BANG_$arity$1 == null)))){
return _.thi$ng$geom$core$PClear$clear_BANG_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.clear_BANG_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.clear_BANG_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PClear.clear!",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PClip = function(){};

thi.ng.geom.core.clip_with = (function thi$ng$geom$core$clip_with(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PClip$clip_with$arity$2 == null)))){
return _.thi$ng$geom$core$PClip$clip_with$arity$2(_,s);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.clip_with[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,s);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.clip_with["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"PClip.clip-with",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PConvexHull = function(){};

thi.ng.geom.core.convex_hull = (function thi$ng$geom$core$convex_hull(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PConvexHull$convex_hull$arity$1 == null)))){
return _.thi$ng$geom$core$PConvexHull$convex_hull$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.convex_hull[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.convex_hull["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PConvexHull.convex-hull",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PExtrude = function(){};

thi.ng.geom.core.extrude = (function thi$ng$geom$core$extrude(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PExtrude$extrude$arity$2 == null)))){
return _.thi$ng$geom$core$PExtrude$extrude$arity$2(_,opts);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.extrude[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,opts);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.extrude["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PExtrude.extrude",_);
}
}
}
});

thi.ng.geom.core.extrude_shell = (function thi$ng$geom$core$extrude_shell(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PExtrude$extrude_shell$arity$2 == null)))){
return _.thi$ng$geom$core$PExtrude$extrude_shell$arity$2(_,opts);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.extrude_shell[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,opts);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.extrude_shell["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PExtrude.extrude-shell",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PFlip = function(){};

thi.ng.geom.core.flip = (function thi$ng$geom$core$flip(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PFlip$flip$arity$1 == null)))){
return _.thi$ng$geom$core$PFlip$flip$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.flip[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.flip["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PFlip.flip",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PGeomContainer = function(){};

thi.ng.geom.core.into = (function thi$ng$geom$core$into(_,m){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PGeomContainer$into$arity$2 == null)))){
return _.thi$ng$geom$core$PGeomContainer$into$arity$2(_,m);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.into[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,m);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.into["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"PGeomContainer.into",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PInset = function(){};

thi.ng.geom.core.inset = (function thi$ng$geom$core$inset(_,inset__$1){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PInset$inset$arity$2 == null)))){
return _.thi$ng$geom$core$PInset$inset$arity$2(_,inset__$1);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.inset[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,inset__$1);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.inset["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,inset__$1);
} else {
throw cljs.core.missing_protocol.call(null,"PInset.inset",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PIntersect = function(){};

thi.ng.geom.core.intersect_line = (function thi$ng$geom$core$intersect_line(var_args){
var args8612 = [];
var len__7544__auto___8642 = arguments.length;
var i__7545__auto___8643 = (0);
while(true){
if((i__7545__auto___8643 < len__7544__auto___8642)){
args8612.push((arguments[i__7545__auto___8643]));

var G__8648 = (i__7545__auto___8643 + (1));
i__7545__auto___8643 = G__8648;
continue;
} else {
}
break;
}

var G__8614 = args8612.length;
switch (G__8614) {
case 2:
return thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8612.length)].join('')));

}
});

thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$2 = (function (_,l){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PIntersect$intersect_line$arity$2 == null)))){
return _.thi$ng$geom$core$PIntersect$intersect_line$arity$2(_,l);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.intersect_line[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,l);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.intersect_line["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,l);
} else {
throw cljs.core.missing_protocol.call(null,"PIntersect.intersect-line",_);
}
}
}
});

thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$3 = (function (_,p,q){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PIntersect$intersect_line$arity$3 == null)))){
return _.thi$ng$geom$core$PIntersect$intersect_line$arity$3(_,p,q);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.intersect_line[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,p,q);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.intersect_line["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,p,q);
} else {
throw cljs.core.missing_protocol.call(null,"PIntersect.intersect-line",_);
}
}
}
});

thi.ng.geom.core.intersect_line.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.intersect_ray = (function thi$ng$geom$core$intersect_ray(var_args){
var args8619 = [];
var len__7544__auto___8651 = arguments.length;
var i__7545__auto___8652 = (0);
while(true){
if((i__7545__auto___8652 < len__7544__auto___8651)){
args8619.push((arguments[i__7545__auto___8652]));

var G__8653 = (i__7545__auto___8652 + (1));
i__7545__auto___8652 = G__8653;
continue;
} else {
}
break;
}

var G__8641 = args8619.length;
switch (G__8641) {
case 2:
return thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8619.length)].join('')));

}
});

thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$2 = (function (_,r){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 == null)))){
return _.thi$ng$geom$core$PIntersect$intersect_ray$arity$2(_,r);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.intersect_ray[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,r);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.intersect_ray["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,r);
} else {
throw cljs.core.missing_protocol.call(null,"PIntersect.intersect-ray",_);
}
}
}
});

thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$3 = (function (_,p,dir){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PIntersect$intersect_ray$arity$3 == null)))){
return _.thi$ng$geom$core$PIntersect$intersect_ray$arity$3(_,p,dir);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.intersect_ray[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,p,dir);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.intersect_ray["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,p,dir);
} else {
throw cljs.core.missing_protocol.call(null,"PIntersect.intersect-ray",_);
}
}
}
});

thi.ng.geom.core.intersect_ray.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.intersect_shape = (function thi$ng$geom$core$intersect_shape(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 == null)))){
return _.thi$ng$geom$core$PIntersect$intersect_shape$arity$2(_,s);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.intersect_shape[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,s);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.intersect_shape["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"PIntersect.intersect-shape",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PMeshConvert = function(){};

/**
 * Transforms the current enitity into a mesh instance
 */
thi.ng.geom.core.as_mesh = (function thi$ng$geom$core$as_mesh(var_args){
var args8655 = [];
var len__7544__auto___8665 = arguments.length;
var i__7545__auto___8666 = (0);
while(true){
if((i__7545__auto___8666 < len__7544__auto___8665)){
args8655.push((arguments[i__7545__auto___8666]));

var G__8667 = (i__7545__auto___8666 + (1));
i__7545__auto___8666 = G__8667;
continue;
} else {
}
break;
}

var G__8659 = args8655.length;
switch (G__8659) {
case 1:
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8655.length)].join('')));

}
});

thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 == null)))){
return _.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.as_mesh[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.as_mesh["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PMeshConvert.as-mesh",_);
}
}
}
});

thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 == null)))){
return _.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2(_,opts);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.as_mesh[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,opts);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.as_mesh["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PMeshConvert.as-mesh",_);
}
}
}
});

thi.ng.geom.core.as_mesh.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
thi.ng.geom.core.PPointMap = function(){};

thi.ng.geom.core.map_point = (function thi$ng$geom$core$map_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PPointMap$map_point$arity$2 == null)))){
return _.thi$ng$geom$core$PPointMap$map_point$arity$2(_,p);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.map_point[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,p);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.map_point["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"PPointMap.map-point",_);
}
}
}
});

thi.ng.geom.core.unmap_point = (function thi$ng$geom$core$unmap_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PPointMap$unmap_point$arity$2 == null)))){
return _.thi$ng$geom$core$PPointMap$unmap_point$arity$2(_,p);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.unmap_point[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,p);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.unmap_point["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"PPointMap.unmap-point",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PPolygonConvert = function(){};

/**
 * Transforms current entity into a Polygon2 instance
 */
thi.ng.geom.core.as_polygon = (function thi$ng$geom$core$as_polygon(var_args){
var args8694 = [];
var len__7544__auto___8698 = arguments.length;
var i__7545__auto___8699 = (0);
while(true){
if((i__7545__auto___8699 < len__7544__auto___8698)){
args8694.push((arguments[i__7545__auto___8699]));

var G__8700 = (i__7545__auto___8699 + (1));
i__7545__auto___8699 = G__8700;
continue;
} else {
}
break;
}

var G__8696 = args8694.length;
switch (G__8696) {
case 1:
return thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8694.length)].join('')));

}
});

thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$1 == null)))){
return _.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.as_polygon[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.as_polygon["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PPolygonConvert.as-polygon",_);
}
}
}
});

thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$2 = (function (_,res){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$2 == null)))){
return _.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$2(_,res);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.as_polygon[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,res);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.as_polygon["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,res);
} else {
throw cljs.core.missing_protocol.call(null,"PPolygonConvert.as-polygon",_);
}
}
}
});

thi.ng.geom.core.as_polygon.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
thi.ng.geom.core.PProximity = function(){};

thi.ng.geom.core.closest_point = (function thi$ng$geom$core$closest_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PProximity$closest_point$arity$2 == null)))){
return _.thi$ng$geom$core$PProximity$closest_point$arity$2(_,p);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.closest_point[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,p);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.closest_point["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"PProximity.closest-point",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PSample = function(){};

thi.ng.geom.core.point_at = (function thi$ng$geom$core$point_at(var_args){
var args8709 = [];
var len__7544__auto___8737 = arguments.length;
var i__7545__auto___8738 = (0);
while(true){
if((i__7545__auto___8738 < len__7544__auto___8737)){
args8709.push((arguments[i__7545__auto___8738]));

var G__8739 = (i__7545__auto___8738 + (1));
i__7545__auto___8738 = G__8739;
continue;
} else {
}
break;
}

var G__8711 = args8709.length;
switch (G__8711) {
case 2:
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8709.length)].join('')));

}
});

thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2 = (function (_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSample$point_at$arity$2 == null)))){
return _.thi$ng$geom$core$PSample$point_at$arity$2(_,t);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.point_at[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,t);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.point_at["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"PSample.point-at",_);
}
}
}
});

thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$3 = (function (_,u,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSample$point_at$arity$3 == null)))){
return _.thi$ng$geom$core$PSample$point_at$arity$3(_,u,v);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.point_at[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,u,v);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.point_at["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,u,v);
} else {
throw cljs.core.missing_protocol.call(null,"PSample.point-at",_);
}
}
}
});

thi.ng.geom.core.point_at.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.random_point = (function thi$ng$geom$core$random_point(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSample$random_point$arity$1 == null)))){
return _.thi$ng$geom$core$PSample$random_point$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.random_point[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.random_point["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PSample.random-point",_);
}
}
}
});

thi.ng.geom.core.random_point_inside = (function thi$ng$geom$core$random_point_inside(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSample$random_point_inside$arity$1 == null)))){
return _.thi$ng$geom$core$PSample$random_point_inside$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.random_point_inside[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.random_point_inside["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PSample.random-point-inside",_);
}
}
}
});

thi.ng.geom.core.sample_uniform = (function thi$ng$geom$core$sample_uniform(_,dist,include_last_QMARK_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSample$sample_uniform$arity$3 == null)))){
return _.thi$ng$geom$core$PSample$sample_uniform$arity$3(_,dist,include_last_QMARK_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.sample_uniform[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,dist,include_last_QMARK_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.sample_uniform["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,dist,include_last_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"PSample.sample-uniform",_);
}
}
}
});

thi.ng.geom.core.sample_with_resolution = (function thi$ng$geom$core$sample_with_resolution(_,res){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSample$sample_with_resolution$arity$2 == null)))){
return _.thi$ng$geom$core$PSample$sample_with_resolution$arity$2(_,res);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.sample_with_resolution[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,res);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.sample_with_resolution["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,res);
} else {
throw cljs.core.missing_protocol.call(null,"PSample.sample-with-resolution",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PSlice = function(){};

thi.ng.geom.core.slice_with = (function thi$ng$geom$core$slice_with(var_args){
var args8748 = [];
var len__7544__auto___8767 = arguments.length;
var i__7545__auto___8768 = (0);
while(true){
if((i__7545__auto___8768 < len__7544__auto___8767)){
args8748.push((arguments[i__7545__auto___8768]));

var G__8769 = (i__7545__auto___8768 + (1));
i__7545__auto___8768 = G__8769;
continue;
} else {
}
break;
}

var G__8750 = args8748.length;
switch (G__8750) {
case 2:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8748.length)].join('')));

}
});

thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$2 = (function (_,e){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSlice$slice_with$arity$2 == null)))){
return _.thi$ng$geom$core$PSlice$slice_with$arity$2(_,e);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,e);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.slice_with["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,e);
} else {
throw cljs.core.missing_protocol.call(null,"PSlice.slice-with",_);
}
}
}
});

thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$3 = (function (_,e,classifier){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSlice$slice_with$arity$3 == null)))){
return _.thi$ng$geom$core$PSlice$slice_with$arity$3(_,e,classifier);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,e,classifier);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.slice_with["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,e,classifier);
} else {
throw cljs.core.missing_protocol.call(null,"PSlice.slice-with",_);
}
}
}
});

thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$4 = (function (_,e,classifier,parts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSlice$slice_with$arity$4 == null)))){
return _.thi$ng$geom$core$PSlice$slice_with$arity$4(_,e,classifier,parts);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,e,classifier,parts);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.slice_with["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,e,classifier,parts);
} else {
throw cljs.core.missing_protocol.call(null,"PSlice.slice-with",_);
}
}
}
});

thi.ng.geom.core.slice_with.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
thi.ng.geom.core.PSubdivide = function(){};

thi.ng.geom.core.subdivide = (function thi$ng$geom$core$subdivide(var_args){
var args8775 = [];
var len__7544__auto___8784 = arguments.length;
var i__7545__auto___8785 = (0);
while(true){
if((i__7545__auto___8785 < len__7544__auto___8784)){
args8775.push((arguments[i__7545__auto___8785]));

var G__8787 = (i__7545__auto___8785 + (1));
i__7545__auto___8785 = G__8787;
continue;
} else {
}
break;
}

var G__8781 = args8775.length;
switch (G__8781) {
case 1:
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8775.length)].join('')));

}
});

thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSubdivide$subdivide$arity$1 == null)))){
return _.thi$ng$geom$core$PSubdivide$subdivide$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.subdivide[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.subdivide["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PSubdivide.subdivide",_);
}
}
}
});

thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSubdivide$subdivide$arity$2 == null)))){
return _.thi$ng$geom$core$PSubdivide$subdivide$arity$2(_,opts);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.subdivide[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,opts);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.subdivide["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PSubdivide.subdivide",_);
}
}
}
});

thi.ng.geom.core.subdivide.cljs$lang$maxFixedArity = 2;

thi.ng.geom.core.subdivide_edge = (function thi$ng$geom$core$subdivide_edge(_,a,b,splits){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSubdivide$subdivide_edge$arity$4 == null)))){
return _.thi$ng$geom$core$PSubdivide$subdivide_edge$arity$4(_,a,b,splits);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.subdivide_edge[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,a,b,splits);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.subdivide_edge["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,a,b,splits);
} else {
throw cljs.core.missing_protocol.call(null,"PSubdivide.subdivide-edge",_);
}
}
}
});

thi.ng.geom.core.subdivide_face = (function thi$ng$geom$core$subdivide_face(_,f,p,displace,splits){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSubdivide$subdivide_face$arity$5 == null)))){
return _.thi$ng$geom$core$PSubdivide$subdivide_face$arity$5(_,f,p,displace,splits);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.subdivide_face[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,f,p,displace,splits);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.subdivide_face["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,f,p,displace,splits);
} else {
throw cljs.core.missing_protocol.call(null,"PSubdivide.subdivide-face",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PTessellate = function(){};

thi.ng.geom.core.tessellate = (function thi$ng$geom$core$tessellate(var_args){
var args8794 = [];
var len__7544__auto___8816 = arguments.length;
var i__7545__auto___8817 = (0);
while(true){
if((i__7545__auto___8817 < len__7544__auto___8816)){
args8794.push((arguments[i__7545__auto___8817]));

var G__8818 = (i__7545__auto___8817 + (1));
i__7545__auto___8817 = G__8818;
continue;
} else {
}
break;
}

var G__8801 = args8794.length;
switch (G__8801) {
case 1:
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8794.length)].join('')));

}
});

thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PTessellate$tessellate$arity$1 == null)))){
return _.thi$ng$geom$core$PTessellate$tessellate$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.tessellate[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.tessellate["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PTessellate.tessellate",_);
}
}
}
});

thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PTessellate$tessellate$arity$2 == null)))){
return _.thi$ng$geom$core$PTessellate$tessellate$arity$2(_,opts);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.tessellate[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,opts);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.tessellate["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PTessellate.tessellate",_);
}
}
}
});

thi.ng.geom.core.tessellate.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
thi.ng.geom.core.PVolume = function(){};

/**
 * Returns an entity's inner volume.
 */
thi.ng.geom.core.volume = (function thi$ng$geom$core$volume(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PVolume$volume$arity$1 == null)))){
return _.thi$ng$geom$core$PVolume$volume$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.volume[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.volume["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PVolume.volume",_);
}
}
}
});

thi.ng.geom.core.signed_volume = (function thi$ng$geom$core$signed_volume(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PVolume$signed_volume$arity$1 == null)))){
return _.thi$ng$geom$core$PVolume$signed_volume$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.signed_volume[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.signed_volume["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PVolume.signed-volume",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PVectorReduce = function(){};

thi.ng.geom.core.reduce_vector = (function thi$ng$geom$core$reduce_vector(var_args){
var args8827 = [];
var len__7544__auto___8835 = arguments.length;
var i__7545__auto___8836 = (0);
while(true){
if((i__7545__auto___8836 < len__7544__auto___8835)){
args8827.push((arguments[i__7545__auto___8836]));

var G__8841 = (i__7545__auto___8836 + (1));
i__7545__auto___8836 = G__8841;
continue;
} else {
}
break;
}

var G__8829 = args8827.length;
switch (G__8829) {
case 3:
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8827.length)].join('')));

}
});

thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3 = (function (_,f,xs){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 == null)))){
return _.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3(_,f,xs);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.reduce_vector[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,f,xs);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.reduce_vector["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,f,xs);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorReduce.reduce-vector",_);
}
}
}
});

thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4 = (function (_,f,f2,xs){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 == null)))){
return _.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4(_,f,f2,xs);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.reduce_vector[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,f,f2,xs);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.reduce_vector["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,f,f2,xs);
} else {
throw cljs.core.missing_protocol.call(null,"PVectorReduce.reduce-vector",_);
}
}
}
});

thi.ng.geom.core.reduce_vector.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
thi.ng.geom.core.PSpatialTree = function(){};

thi.ng.geom.core.add_point = (function thi$ng$geom$core$add_point(_,p,d){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSpatialTree$add_point$arity$3 == null)))){
return _.thi$ng$geom$core$PSpatialTree$add_point$arity$3(_,p,d);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.add_point[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,p,d);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.add_point["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,p,d);
} else {
throw cljs.core.missing_protocol.call(null,"PSpatialTree.add-point",_);
}
}
}
});

thi.ng.geom.core.delete_point = (function thi$ng$geom$core$delete_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSpatialTree$delete_point$arity$2 == null)))){
return _.thi$ng$geom$core$PSpatialTree$delete_point$arity$2(_,p);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.delete_point[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,p);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.delete_point["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"PSpatialTree.delete-point",_);
}
}
}
});

thi.ng.geom.core.get_point = (function thi$ng$geom$core$get_point(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSpatialTree$get_point$arity$1 == null)))){
return _.thi$ng$geom$core$PSpatialTree$get_point$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.get_point[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.get_point["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PSpatialTree.get-point",_);
}
}
}
});

thi.ng.geom.core.get_point_data = (function thi$ng$geom$core$get_point_data(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PSpatialTree$get_point_data$arity$1 == null)))){
return _.thi$ng$geom$core$PSpatialTree$get_point_data$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.get_point_data[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.get_point_data["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PSpatialTree.get-point-data",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.PBuffered = function(){};

thi.ng.geom.core.get_buffer = (function thi$ng$geom$core$get_buffer(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PBuffered$get_buffer$arity$1 == null)))){
return _.thi$ng$geom$core$PBuffered$get_buffer$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.get_buffer[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.get_buffer["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PBuffered.get-buffer",_);
}
}
}
});

thi.ng.geom.core.copy_to_buffer = (function thi$ng$geom$core$copy_to_buffer(_,dest,stride,idx){
if((!((_ == null))) && (!((_.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 == null)))){
return _.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4(_,dest,stride,idx);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (thi.ng.geom.core.copy_to_buffer[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_,dest,stride,idx);
} else {
var m__7142__auto____$1 = (thi.ng.geom.core.copy_to_buffer["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_,dest,stride,idx);
} else {
throw cljs.core.missing_protocol.call(null,"PBuffered.copy-to-buffer",_);
}
}
}
});


//# sourceMappingURL=core.js.map