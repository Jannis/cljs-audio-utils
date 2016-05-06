// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.core.vector');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.xerror.core');









/**
* @constructor
 * @implements {thi.ng.geom.core.PScale}
 * @implements {thi.ng.geom.core.PHeading}
 * @implements {thi.ng.geom.core.PMagnitude}
 * @implements {cljs.core.IIndexed}
 * @implements {thi.ng.geom.core.PDistance}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.geom.core.vector.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.geom.core.PMathOps}
 * @implements {cljs.core.IFn}
 * @implements {thi.ng.geom.core.PNormal}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.geom.core.PTranslate}
 * @implements {thi.ng.geom.core.PMinMax}
 * @implements {thi.ng.geom.core.PLimit}
 * @implements {thi.ng.geom.core.PVectorReduce}
 * @implements {thi.ng.geom.core.PPolar}
 * @implements {thi.ng.geom.core.PInterpolate}
 * @implements {thi.ng.geom.core.PTransform}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.core.PClear}
 * @implements {thi.ng.geom.core.PDotProduct}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.geom.core.PNormalize}
 * @implements {thi.ng.geom.core.PBuffered}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {thi.ng.geom.core.PRotate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.geom.core.PCrossProduct}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.geom.core.PReflect}
 * @implements {thi.ng.geom.core.PMutableMathOps}
 * @implements {thi.ng.math.core.PDeltaEquals}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.PInvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.core.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__9701 = self__.buf;
var G__9702 = (G__9701[(0)]);
var G__9703 = (G__9701[(1)]);
(b[(0)] = ((G__9702 * c) - (G__9703 * s)));

(b[(1)] = ((G__9702 * s) + (G__9703 * c)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str("]")].join('');
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,___$1);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9704 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9705 = v.buf;
return (((G__9704[(0)]) * (G__9705[(0)])) + ((G__9704[(1)]) * (G__9705[(1)])));
} else {
return (((G__9704[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__9704[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__9706 = self__.buf;
var G__9707 = (G__9706[(0)]);
var G__9708 = (G__9706[(1)]);
var l = Math.sqrt(((G__9707 * G__9707) + (G__9708 * G__9708)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__9707 / l));

(b[(1)] = (G__9708 / l));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__9709 = self__.buf;
var G__9710 = (G__9709[(0)]);
var G__9711 = (G__9709[(1)]);
var l = Math.sqrt(((G__9710 * G__9710) + (G__9711 * G__9711)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__9710 * l__$1));

(b[(1)] = (G__9711 * l__$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__9713 = self__.buf;
var G__9715 = (G__9713[(0)]);
var G__9716 = (G__9713[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9714 = v.buf;
var G__9717 = (G__9714[(0)]);
var G__9718 = (G__9714[(1)]);
var d = (((G__9715 * G__9717) + (G__9716 * G__9718)) + (2));
(b[(0)] = ((G__9717 * d) - G__9715));

(b[(1)] = ((G__9718 * d) - G__9716));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
var G__9717 = cljs.core.nth.call(null,v,(0),0.0);
var G__9718 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__9715 * G__9717) + (G__9716 * G__9718)) + (2));
(b[(0)] = ((G__9717 * d) - G__9715));

(b[(1)] = ((G__9718 * d) - G__9716));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9721 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9722 = v.buf;
return (((G__9721[(0)]) * (G__9722[(1)])) - ((G__9721[(1)]) * (G__9722[(0)])));
} else {
return (((G__9721[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__9721[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9745_10152 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9746_10153 = v.buf;
(self__.buf[(0)] = ((G__9745_10152[(0)]) - (G__9746_10153[(0)])));

(self__.buf[(1)] = ((G__9745_10152[(1)]) - (G__9746_10153[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__9745_10152[(0)]) - v));

(self__.buf[(1)] = ((G__9745_10152[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__9745_10152[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__9745_10152[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9754_10154 = typeof v1 === 'number';
var G__9755_10155 = typeof v2 === 'number';
if(((G__9754_10154)?G__9755_10155:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__9756_10162 = ((!(G__9754_10154))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9757_10163 = ((!(G__9755_10155))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9748_10164 = (cljs.core.truth_(G__9756_10162)?v1.buf:null);
var G__9749_10165 = (cljs.core.truth_(G__9757_10163)?v2.buf:null);
var G__9750_10166 = (cljs.core.truth_(G__9756_10162)?(G__9748_10164[(0)]):((G__9754_10154)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9751_10167 = (cljs.core.truth_(G__9756_10162)?(G__9748_10164[(1)]):((G__9754_10154)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9752_10168 = (cljs.core.truth_(G__9757_10163)?(G__9749_10165[(0)]):((G__9755_10155)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9753_10169 = (cljs.core.truth_(G__9757_10163)?(G__9749_10165[(1)]):((G__9755_10155)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__9750_10166) - G__9752_10168));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__9751_10167) - G__9753_10169));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9758_10170 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9759_10171 = v.buf;
(self__.buf[(0)] = ((G__9758_10170[(0)]) * (G__9759_10171[(0)])));

(self__.buf[(1)] = ((G__9758_10170[(1)]) * (G__9759_10171[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__9758_10170[(0)]) * v));

(self__.buf[(1)] = ((G__9758_10170[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__9758_10170[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__9758_10170[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9767_10172 = typeof v1 === 'number';
var G__9768_10173 = typeof v2 === 'number';
if(((G__9767_10172)?G__9768_10173:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__9769_10174 = ((!(G__9767_10172))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9770_10175 = ((!(G__9768_10173))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9761_10176 = (cljs.core.truth_(G__9769_10174)?v1.buf:null);
var G__9762_10177 = (cljs.core.truth_(G__9770_10175)?v2.buf:null);
var G__9763_10178 = (cljs.core.truth_(G__9769_10174)?(G__9761_10176[(0)]):((G__9767_10172)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9764_10179 = (cljs.core.truth_(G__9769_10174)?(G__9761_10176[(1)]):((G__9767_10172)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9765_10180 = (cljs.core.truth_(G__9770_10175)?(G__9762_10177[(0)]):((G__9768_10173)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9766_10181 = (cljs.core.truth_(G__9770_10175)?(G__9762_10177[(1)]):((G__9768_10173)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__9763_10178) * G__9765_10180));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__9764_10179) * G__9766_10181));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__9780_10184 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9781_10185 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9782_10186 = ((!(G__9780_10184))?typeof a === 'number':null);
var G__9783_10187 = ((!(G__9781_10185))?typeof b === 'number':null);
var G__9771_10188 = self__.buf;
var G__9772_10189 = ((G__9780_10184)?a.buf:null);
var G__9773_10190 = ((G__9781_10185)?b.buf:null);
var G__9774_10191 = (G__9771_10188[(0)]);
var G__9775_10192 = (G__9771_10188[(1)]);
var G__9776_10193 = ((G__9780_10184)?(G__9772_10189[(0)]):(cljs.core.truth_(G__9782_10186)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__9777_10194 = ((G__9780_10184)?(G__9772_10189[(1)]):(cljs.core.truth_(G__9782_10186)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__9778_10195 = ((G__9781_10185)?(G__9773_10190[(0)]):(cljs.core.truth_(G__9783_10187)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__9779_10196 = ((G__9781_10185)?(G__9773_10190[(1)]):(cljs.core.truth_(G__9783_10187)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__9774_10191 - G__9776_10193) * G__9778_10195));

(self__.buf[(1)] = ((G__9775_10192 - G__9777_10194) * G__9779_10196));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__9799_10197 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9800_10198 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9801_10199 = ((!(G__9799_10197))?typeof a === 'number':null);
var G__9802_10200 = ((!(G__9800_10198))?typeof b === 'number':null);
var G__9790_10201 = self__.buf;
var G__9791_10202 = ((G__9799_10197)?a.buf:null);
var G__9792_10203 = ((G__9800_10198)?b.buf:null);
var G__9793_10204 = (G__9790_10201[(0)]);
var G__9794_10205 = (G__9790_10201[(1)]);
var G__9795_10206 = ((G__9799_10197)?(G__9791_10202[(0)]):(cljs.core.truth_(G__9801_10199)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__9796_10207 = ((G__9799_10197)?(G__9791_10202[(1)]):(cljs.core.truth_(G__9801_10199)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__9797_10208 = ((G__9800_10198)?(G__9792_10203[(0)]):(cljs.core.truth_(G__9802_10200)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__9798_10209 = ((G__9800_10198)?(G__9792_10203[(1)]):(cljs.core.truth_(G__9802_10200)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__9793_10204 * G__9795_10206) - G__9797_10208));

(self__.buf[(1)] = ((G__9794_10205 * G__9796_10207) - G__9798_10209));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs.call(null,(self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__9812_10214 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9813_10215 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9814_10216 = ((!(G__9812_10214))?typeof a === 'number':null);
var G__9815_10217 = ((!(G__9813_10215))?typeof b === 'number':null);
var G__9803_10218 = self__.buf;
var G__9804_10219 = ((G__9812_10214)?a.buf:null);
var G__9805_10220 = ((G__9813_10215)?b.buf:null);
var G__9806_10221 = (G__9803_10218[(0)]);
var G__9807_10222 = (G__9803_10218[(1)]);
var G__9808_10223 = ((G__9812_10214)?(G__9804_10219[(0)]):(cljs.core.truth_(G__9814_10216)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__9809_10224 = ((G__9812_10214)?(G__9804_10219[(1)]):(cljs.core.truth_(G__9814_10216)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__9810_10225 = ((G__9813_10215)?(G__9805_10220[(0)]):(cljs.core.truth_(G__9815_10217)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__9811_10226 = ((G__9813_10215)?(G__9805_10220[(1)]):(cljs.core.truth_(G__9815_10217)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__9806_10221 * G__9808_10223) + G__9810_10225));

(self__.buf[(1)] = ((G__9807_10222 * G__9809_10224) + G__9811_10226));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9816_10233 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9817_10234 = v.buf;
(self__.buf[(0)] = ((G__9816_10233[(0)]) / (G__9817_10234[(0)])));

(self__.buf[(1)] = ((G__9816_10233[(1)]) / (G__9817_10234[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__9816_10233[(0)]) / v));

(self__.buf[(1)] = ((G__9816_10233[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__9816_10233[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__9816_10233[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9825_10235 = typeof v1 === 'number';
var G__9826_10236 = typeof v2 === 'number';
if(((G__9825_10235)?G__9826_10236:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__9827_10237 = ((!(G__9825_10235))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9828_10238 = ((!(G__9826_10236))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9819_10239 = (cljs.core.truth_(G__9827_10237)?v1.buf:null);
var G__9820_10240 = (cljs.core.truth_(G__9828_10238)?v2.buf:null);
var G__9821_10241 = (cljs.core.truth_(G__9827_10237)?(G__9819_10239[(0)]):((G__9825_10235)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9822_10242 = (cljs.core.truth_(G__9827_10237)?(G__9819_10239[(1)]):((G__9825_10235)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9823_10243 = (cljs.core.truth_(G__9828_10238)?(G__9820_10240[(0)]):((G__9826_10236)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9824_10244 = (cljs.core.truth_(G__9828_10238)?(G__9820_10240[(1)]):((G__9826_10236)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__9821_10241) / G__9823_10243));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__9822_10242) / G__9824_10244));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9829_10246 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9830_10247 = v.buf;
(self__.buf[(0)] = ((G__9829_10246[(0)]) + (G__9830_10247[(0)])));

(self__.buf[(1)] = ((G__9829_10246[(1)]) + (G__9830_10247[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__9829_10246[(0)]) + v));

(self__.buf[(1)] = ((G__9829_10246[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__9829_10246[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__9829_10246[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9840_10252 = typeof v1 === 'number';
var G__9841_10253 = typeof v2 === 'number';
if(((G__9840_10252)?G__9841_10253:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__9842_10265 = ((!(G__9840_10252))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9843_10266 = ((!(G__9841_10253))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9834_10267 = (cljs.core.truth_(G__9842_10265)?v1.buf:null);
var G__9835_10268 = (cljs.core.truth_(G__9843_10266)?v2.buf:null);
var G__9836_10269 = (cljs.core.truth_(G__9842_10265)?(G__9834_10267[(0)]):((G__9840_10252)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9837_10270 = (cljs.core.truth_(G__9842_10265)?(G__9834_10267[(1)]):((G__9840_10252)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9838_10271 = (cljs.core.truth_(G__9843_10266)?(G__9835_10268[(0)]):((G__9841_10253)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9839_10272 = (cljs.core.truth_(G__9843_10266)?(G__9835_10268[(1)]):((G__9841_10253)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__9836_10269) + G__9838_10271));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__9837_10270) + G__9839_10272));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__9853_10273 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9854_10274 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9855_10275 = ((!(G__9853_10273))?typeof a === 'number':null);
var G__9856_10276 = ((!(G__9854_10274))?typeof b === 'number':null);
var G__9844_10277 = self__.buf;
var G__9845_10278 = ((G__9853_10273)?a.buf:null);
var G__9846_10279 = ((G__9854_10274)?b.buf:null);
var G__9847_10280 = (G__9844_10277[(0)]);
var G__9848_10281 = (G__9844_10277[(1)]);
var G__9849_10282 = ((G__9853_10273)?(G__9845_10278[(0)]):(cljs.core.truth_(G__9855_10275)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__9850_10283 = ((G__9853_10273)?(G__9845_10278[(1)]):(cljs.core.truth_(G__9855_10275)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__9851_10284 = ((G__9854_10274)?(G__9846_10279[(0)]):(cljs.core.truth_(G__9856_10276)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__9852_10285 = ((G__9854_10274)?(G__9846_10279[(1)]):(cljs.core.truth_(G__9856_10276)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__9847_10280 + G__9849_10282) * G__9851_10284));

(self__.buf[(1)] = ((G__9848_10281 + G__9850_10283) * G__9852_10285));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.swizzle2_fns.call(null,new cljs.core.Keyword(null,"yx","yx",1696579752)).call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__6486__auto__ = self__._hash;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(2));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((2) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1))));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading.call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading.call(null,a) - thi.ng.geom.core.heading.call(null,___$1));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9861 = self__.buf;
var G__9863 = (G__9861[(0)]);
var G__9864 = (G__9861[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9862 = v.buf;
var G__9865 = (G__9862[(0)]);
var G__9866 = (G__9862[(1)]);
var dx = (G__9863 - G__9865);
var dy = (G__9864 - G__9866);
return ((dx * dx) + (dy * dy));
} else {
var G__9865 = cljs.core.nth.call(null,v,(0),0.0);
var G__9866 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__9863 - G__9865);
var dy = (G__9864 - G__9866);
return ((dx * dx) + (dy * dy));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
return acc;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9494__auto__ = (new Float32Array((2)));
var G__9876_10294 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9877_10295 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9878_10296 = ((!(G__9876_10294))?typeof a === 'number':null);
var G__9879_10297 = ((!(G__9877_10295))?typeof b === 'number':null);
var G__9867_10298 = self__.buf;
var G__9868_10299 = ((G__9876_10294)?a.buf:null);
var G__9869_10300 = ((G__9877_10295)?b.buf:null);
var G__9870_10301 = (G__9867_10298[(0)]);
var G__9871_10302 = (G__9867_10298[(1)]);
var G__9872_10303 = ((G__9876_10294)?(G__9868_10299[(0)]):(cljs.core.truth_(G__9878_10296)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__9873_10304 = ((G__9876_10294)?(G__9868_10299[(1)]):(cljs.core.truth_(G__9878_10296)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__9874_10305 = ((G__9877_10295)?(G__9869_10300[(0)]):(cljs.core.truth_(G__9879_10297)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__9875_10306 = ((G__9877_10295)?(G__9869_10300[(1)]):(cljs.core.truth_(G__9879_10297)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__9494__auto__[(0)] = ((G__9870_10301 * G__9872_10303) - G__9874_10305));

(dest__9494__auto__[(1)] = ((G__9871_10302 * G__9873_10304) - G__9875_10306));

return (new thi.ng.geom.core.vector.Vec2(dest__9494__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9477__auto__ = (new Float32Array((2)));
var G__9886_10307 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9887_10308 = v.buf;
(dest__9477__auto__[(0)] = ((G__9886_10307[(0)]) * (G__9887_10308[(0)])));

(dest__9477__auto__[(1)] = ((G__9886_10307[(1)]) * (G__9887_10308[(1)])));
} else {
if(typeof v === 'number'){
(dest__9477__auto__[(0)] = ((G__9886_10307[(0)]) * v));

(dest__9477__auto__[(1)] = ((G__9886_10307[(1)]) * v));
} else {
(dest__9477__auto__[(0)] = ((G__9886_10307[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9477__auto__[(1)] = ((G__9886_10307[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9477__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9888 = self__.buf;
var G__9891 = (new Float32Array((2)));
var G__9892 = (G__9888[(0)]);
var G__9893 = (G__9888[(1)]);
var G__9898 = typeof v1 === 'number';
var G__9899 = typeof v2 === 'number';
if(((G__9898)?G__9899:false)){
(G__9891[(0)] = (G__9892 * v1));

(G__9891[(1)] = (G__9893 * v2));
} else {
var G__9900_10317 = ((!(G__9898))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9901_10318 = ((!(G__9899))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9889_10319 = (cljs.core.truth_(G__9900_10317)?v1.buf:null);
var G__9890_10320 = (cljs.core.truth_(G__9901_10318)?v2.buf:null);
var G__9894_10321 = (cljs.core.truth_(G__9900_10317)?(G__9889_10319[(0)]):((G__9898)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__9895_10322 = (cljs.core.truth_(G__9900_10317)?(G__9889_10319[(1)]):((G__9898)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__9896_10323 = (cljs.core.truth_(G__9901_10318)?(G__9890_10320[(0)]):((G__9899)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__9897_10324 = (cljs.core.truth_(G__9901_10318)?(G__9890_10320[(1)]):((G__9899)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__9891[(0)] = ((G__9892 * G__9894_10321) * G__9896_10323));

(G__9891[(1)] = ((G__9893 * G__9895_10322) * G__9897_10324));
}

return (new thi.ng.geom.core.vector.Vec2(G__9891,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9429__auto__ = (new Float32Array((2)));
var G__9902_10325 = self__.buf;
(dest__9429__auto__[(0)] = (- (G__9902_10325[(0)])));

(dest__9429__auto__[(1)] = (- (G__9902_10325[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__9429__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9477__auto__ = (new Float32Array((2)));
var G__9903_10326 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9904_10327 = v.buf;
(dest__9477__auto__[(0)] = ((G__9903_10326[(0)]) - (G__9904_10327[(0)])));

(dest__9477__auto__[(1)] = ((G__9903_10326[(1)]) - (G__9904_10327[(1)])));
} else {
if(typeof v === 'number'){
(dest__9477__auto__[(0)] = ((G__9903_10326[(0)]) - v));

(dest__9477__auto__[(1)] = ((G__9903_10326[(1)]) - v));
} else {
(dest__9477__auto__[(0)] = ((G__9903_10326[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__9477__auto__[(1)] = ((G__9903_10326[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9477__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9905 = self__.buf;
var G__9908 = (new Float32Array((2)));
var G__9909 = (G__9905[(0)]);
var G__9910 = (G__9905[(1)]);
var G__9915 = typeof v1 === 'number';
var G__9916 = typeof v2 === 'number';
if(((G__9915)?G__9916:false)){
(G__9908[(0)] = (G__9909 - v1));

(G__9908[(1)] = (G__9910 - v2));
} else {
var G__9917_10328 = ((!(G__9915))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9918_10329 = ((!(G__9916))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9906_10330 = (cljs.core.truth_(G__9917_10328)?v1.buf:null);
var G__9907_10331 = (cljs.core.truth_(G__9918_10329)?v2.buf:null);
var G__9911_10332 = (cljs.core.truth_(G__9917_10328)?(G__9906_10330[(0)]):((G__9915)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9912_10333 = (cljs.core.truth_(G__9917_10328)?(G__9906_10330[(1)]):((G__9915)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9913_10334 = (cljs.core.truth_(G__9918_10329)?(G__9907_10331[(0)]):((G__9916)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9914_10335 = (cljs.core.truth_(G__9918_10329)?(G__9907_10331[(1)]):((G__9916)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__9908[(0)] = ((G__9909 - G__9911_10332) - G__9913_10334));

(G__9908[(1)] = ((G__9910 - G__9912_10333) - G__9914_10335));
}

return (new thi.ng.geom.core.vector.Vec2(G__9908,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9494__auto__ = (new Float32Array((2)));
var G__9929_10336 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9930_10337 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9931_10338 = ((!(G__9929_10336))?typeof a === 'number':null);
var G__9932_10339 = ((!(G__9930_10337))?typeof b === 'number':null);
var G__9920_10340 = self__.buf;
var G__9921_10341 = ((G__9929_10336)?a.buf:null);
var G__9922_10342 = ((G__9930_10337)?b.buf:null);
var G__9923_10343 = (G__9920_10340[(0)]);
var G__9924_10344 = (G__9920_10340[(1)]);
var G__9925_10345 = ((G__9929_10336)?(G__9921_10341[(0)]):(cljs.core.truth_(G__9931_10338)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__9926_10346 = ((G__9929_10336)?(G__9921_10341[(1)]):(cljs.core.truth_(G__9931_10338)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__9927_10347 = ((G__9930_10337)?(G__9922_10342[(0)]):(cljs.core.truth_(G__9932_10339)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__9928_10348 = ((G__9930_10337)?(G__9922_10342[(1)]):(cljs.core.truth_(G__9932_10339)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__9494__auto__[(0)] = ((G__9923_10343 * G__9925_10345) + G__9927_10347));

(dest__9494__auto__[(1)] = ((G__9924_10344 * G__9926_10346) + G__9928_10348));

return (new thi.ng.geom.core.vector.Vec2(dest__9494__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9494__auto__ = (new Float32Array((2)));
var G__9957_10352 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__9958_10353 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__9959_10354 = ((!(G__9957_10352))?typeof a === 'number':null);
var G__9960_10355 = ((!(G__9958_10353))?typeof b === 'number':null);
var G__9948_10356 = self__.buf;
var G__9949_10357 = ((G__9957_10352)?a.buf:null);
var G__9950_10358 = ((G__9958_10353)?b.buf:null);
var G__9951_10359 = (G__9948_10356[(0)]);
var G__9952_10360 = (G__9948_10356[(1)]);
var G__9953_10361 = ((G__9957_10352)?(G__9949_10357[(0)]):(cljs.core.truth_(G__9959_10354)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__9954_10362 = ((G__9957_10352)?(G__9949_10357[(1)]):(cljs.core.truth_(G__9959_10354)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__9955_10363 = ((G__9958_10353)?(G__9950_10358[(0)]):(cljs.core.truth_(G__9960_10355)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__9956_10364 = ((G__9958_10353)?(G__9950_10358[(1)]):(cljs.core.truth_(G__9960_10355)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__9494__auto__[(0)] = ((G__9951_10359 + G__9953_10361) * G__9955_10363));

(dest__9494__auto__[(1)] = ((G__9952_10360 + G__9954_10362) * G__9956_10364));

return (new thi.ng.geom.core.vector.Vec2(dest__9494__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9429__auto__ = (new Float32Array((2)));
var G__9967_10368 = self__.buf;
(dest__9429__auto__[(0)] = ((1) / (G__9967_10368[(0)])));

(dest__9429__auto__[(1)] = ((1) / (G__9967_10368[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__9429__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9477__auto__ = (new Float32Array((2)));
var G__9968_10369 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9969_10370 = v.buf;
(dest__9477__auto__[(0)] = ((G__9968_10369[(0)]) / (G__9969_10370[(0)])));

(dest__9477__auto__[(1)] = ((G__9968_10369[(1)]) / (G__9969_10370[(1)])));
} else {
if(typeof v === 'number'){
(dest__9477__auto__[(0)] = ((G__9968_10369[(0)]) / v));

(dest__9477__auto__[(1)] = ((G__9968_10369[(1)]) / v));
} else {
(dest__9477__auto__[(0)] = ((G__9968_10369[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__9477__auto__[(1)] = ((G__9968_10369[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9477__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9970 = self__.buf;
var G__9973 = (new Float32Array((2)));
var G__9974 = (G__9970[(0)]);
var G__9975 = (G__9970[(1)]);
var G__9980 = typeof v1 === 'number';
var G__9981 = typeof v2 === 'number';
if(((G__9980)?G__9981:false)){
(G__9973[(0)] = (G__9974 / v1));

(G__9973[(1)] = (G__9975 / v2));
} else {
var G__9982_10374 = ((!(G__9980))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9983_10375 = ((!(G__9981))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9971_10376 = (cljs.core.truth_(G__9982_10374)?v1.buf:null);
var G__9972_10377 = (cljs.core.truth_(G__9983_10375)?v2.buf:null);
var G__9976_10378 = (cljs.core.truth_(G__9982_10374)?(G__9971_10376[(0)]):((G__9980)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9977_10379 = (cljs.core.truth_(G__9982_10374)?(G__9971_10376[(1)]):((G__9980)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9978_10380 = (cljs.core.truth_(G__9983_10375)?(G__9972_10377[(0)]):((G__9981)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9979_10381 = (cljs.core.truth_(G__9983_10375)?(G__9972_10377[(1)]):((G__9981)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__9973[(0)] = ((G__9974 / G__9976_10378) / G__9978_10380));

(G__9973[(1)] = ((G__9975 / G__9977_10379) / G__9979_10381));
}

return (new thi.ng.geom.core.vector.Vec2(G__9973,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9477__auto__ = (new Float32Array((2)));
var G__9984_10382 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__9985_10383 = v.buf;
(dest__9477__auto__[(0)] = ((G__9984_10382[(0)]) + (G__9985_10383[(0)])));

(dest__9477__auto__[(1)] = ((G__9984_10382[(1)]) + (G__9985_10383[(1)])));
} else {
if(typeof v === 'number'){
(dest__9477__auto__[(0)] = ((G__9984_10382[(0)]) + v));

(dest__9477__auto__[(1)] = ((G__9984_10382[(1)]) + v));
} else {
(dest__9477__auto__[(0)] = ((G__9984_10382[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9477__auto__[(1)] = ((G__9984_10382[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9477__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9986 = self__.buf;
var G__9989 = (new Float32Array((2)));
var G__9990 = (G__9986[(0)]);
var G__9991 = (G__9986[(1)]);
var G__9996 = typeof v1 === 'number';
var G__9997 = typeof v2 === 'number';
if(((G__9996)?G__9997:false)){
(G__9989[(0)] = (G__9990 + v1));

(G__9989[(1)] = (G__9991 + v2));
} else {
var G__9998_10392 = ((!(G__9996))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9999_10393 = ((!(G__9997))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__9987_10394 = (cljs.core.truth_(G__9998_10392)?v1.buf:null);
var G__9988_10395 = (cljs.core.truth_(G__9999_10393)?v2.buf:null);
var G__9992_10396 = (cljs.core.truth_(G__9998_10392)?(G__9987_10394[(0)]):((G__9996)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9993_10397 = (cljs.core.truth_(G__9998_10392)?(G__9987_10394[(1)]):((G__9996)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9994_10398 = (cljs.core.truth_(G__9999_10393)?(G__9988_10395[(0)]):((G__9997)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9995_10399 = (cljs.core.truth_(G__9999_10393)?(G__9988_10395[(1)]):((G__9997)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__9989[(0)] = ((G__9990 + G__9992_10396) + G__9994_10398));

(G__9989[(1)] = ((G__9991 + G__9993_10397) + G__9995_10399));
}

return (new thi.ng.geom.core.vector.Vec2(G__9989,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9429__auto__ = (new Float32Array((2)));
var G__10000_10400 = self__.buf;
(dest__9429__auto__[(0)] = thi.ng.math.core.abs.call(null,(G__10000_10400[(0)])));

(dest__9429__auto__[(1)] = thi.ng.math.core.abs.call(null,(G__10000_10400[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__9429__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9494__auto__ = (new Float32Array((2)));
var G__10010_10401 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__10011_10402 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__10012_10403 = ((!(G__10010_10401))?typeof a === 'number':null);
var G__10013_10404 = ((!(G__10011_10402))?typeof b === 'number':null);
var G__10001_10405 = self__.buf;
var G__10002_10406 = ((G__10010_10401)?a.buf:null);
var G__10003_10407 = ((G__10011_10402)?b.buf:null);
var G__10004_10408 = (G__10001_10405[(0)]);
var G__10005_10409 = (G__10001_10405[(1)]);
var G__10006_10410 = ((G__10010_10401)?(G__10002_10406[(0)]):(cljs.core.truth_(G__10012_10403)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10007_10411 = ((G__10010_10401)?(G__10002_10406[(1)]):(cljs.core.truth_(G__10012_10403)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10008_10412 = ((G__10011_10402)?(G__10003_10407[(0)]):(cljs.core.truth_(G__10013_10404)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10009_10413 = ((G__10011_10402)?(G__10003_10407[(1)]):(cljs.core.truth_(G__10013_10404)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__9494__auto__[(0)] = ((G__10004_10408 - G__10006_10410) * G__10008_10412));

(dest__9494__auto__[(1)] = ((G__10005_10409 - G__10007_10411) * G__10009_10413));

return (new thi.ng.geom.core.vector.Vec2(dest__9494__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9477__auto__ = (new Float32Array((2)));
var G__10020_10414 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__10021_10415 = v.buf;
(dest__9477__auto__[(0)] = ((G__10020_10414[(0)]) + (G__10021_10415[(0)])));

(dest__9477__auto__[(1)] = ((G__10020_10414[(1)]) + (G__10021_10415[(1)])));
} else {
if(typeof v === 'number'){
(dest__9477__auto__[(0)] = ((G__10020_10414[(0)]) + v));

(dest__9477__auto__[(1)] = ((G__10020_10414[(1)]) + v));
} else {
(dest__9477__auto__[(0)] = ((G__10020_10414[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9477__auto__[(1)] = ((G__10020_10414[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9477__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10022 = self__.buf;
var G__10025 = (new Float32Array((2)));
var G__10026 = (G__10022[(0)]);
var G__10027 = (G__10022[(1)]);
var G__10032 = typeof v1 === 'number';
var G__10033 = typeof v2 === 'number';
if(((G__10032)?G__10033:false)){
(G__10025[(0)] = (G__10026 + v1));

(G__10025[(1)] = (G__10027 + v2));
} else {
var G__10034_10416 = ((!(G__10032))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__10035_10417 = ((!(G__10033))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__10023_10418 = (cljs.core.truth_(G__10034_10416)?v1.buf:null);
var G__10024_10419 = (cljs.core.truth_(G__10035_10417)?v2.buf:null);
var G__10028_10420 = (cljs.core.truth_(G__10034_10416)?(G__10023_10418[(0)]):((G__10032)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10029_10421 = (cljs.core.truth_(G__10034_10416)?(G__10023_10418[(1)]):((G__10032)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10030_10422 = (cljs.core.truth_(G__10035_10417)?(G__10024_10419[(0)]):((G__10033)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10031_10423 = (cljs.core.truth_(G__10035_10417)?(G__10024_10419[(1)]):((G__10033)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__10025[(0)] = ((G__10026 + G__10028_10420) + G__10030_10422));

(G__10025[(1)] = ((G__10027 + G__10029_10421) + G__10031_10423));
}

return (new thi.ng.geom.core.vector.Vec2(G__10025,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k < (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.core.vector.swizzle2_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k === (0))) || ((k === (1)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9477__auto__ = (new Float32Array((2)));
var G__10036_10440 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__10037_10441 = v.buf;
(dest__9477__auto__[(0)] = ((G__10036_10440[(0)]) * (G__10037_10441[(0)])));

(dest__9477__auto__[(1)] = ((G__10036_10440[(1)]) * (G__10037_10441[(1)])));
} else {
if(typeof v === 'number'){
(dest__9477__auto__[(0)] = ((G__10036_10440[(0)]) * v));

(dest__9477__auto__[(1)] = ((G__10036_10440[(1)]) * v));
} else {
(dest__9477__auto__[(0)] = ((G__10036_10440[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9477__auto__[(1)] = ((G__10036_10440[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9477__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10038 = self__.buf;
var G__10041 = (new Float32Array((2)));
var G__10042 = (G__10038[(0)]);
var G__10043 = (G__10038[(1)]);
var G__10048 = typeof v1 === 'number';
var G__10049 = typeof v2 === 'number';
if(((G__10048)?G__10049:false)){
(G__10041[(0)] = (G__10042 * v1));

(G__10041[(1)] = (G__10043 * v2));
} else {
var G__10050_10450 = ((!(G__10048))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__10051_10451 = ((!(G__10049))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__10039_10452 = (cljs.core.truth_(G__10050_10450)?v1.buf:null);
var G__10040_10453 = (cljs.core.truth_(G__10051_10451)?v2.buf:null);
var G__10044_10454 = (cljs.core.truth_(G__10050_10450)?(G__10039_10452[(0)]):((G__10048)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__10045_10455 = (cljs.core.truth_(G__10050_10450)?(G__10039_10452[(1)]):((G__10048)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__10046_10456 = (cljs.core.truth_(G__10051_10451)?(G__10040_10453[(0)]):((G__10049)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__10047_10457 = (cljs.core.truth_(G__10051_10451)?(G__10040_10453[(1)]):((G__10049)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__10041[(0)] = ((G__10042 * G__10044_10454) * G__10046_10456));

(G__10041[(1)] = ((G__10043 * G__10045_10455) * G__10047_10457));
}

return (new thi.ng.geom.core.vector.Vec2(G__10041,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,thi.ng.geom.core.vector.vec3.call(null,(self__.buf[(0)]),(self__.buf[(1)]),x),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.call = (function() {
var G__10458 = null;
var G__10458__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__10458__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__10458 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__10458__2.call(this,self__,k);
case 3:
return G__10458__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10458.cljs$core$IFn$_invoke$arity$2 = G__10458__2;
G__10458.cljs$core$IFn$_invoke$arity$3 = G__10458__3;
return G__10458;
})()
;

thi.ng.geom.core.vector.Vec2.prototype.apply = (function (self__,args9700){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9700)));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9477__auto__ = (new Float32Array((2)));
var G__10054_10459 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__10055_10460 = v.buf;
(dest__9477__auto__[(0)] = (function (){var a__7813__auto__ = (G__10054_10459[(0)]);
var b__7814__auto__ = (G__10055_10460[(0)]);
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

(dest__9477__auto__[(1)] = (function (){var a__7813__auto__ = (G__10054_10459[(1)]);
var b__7814__auto__ = (G__10055_10460[(1)]);
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9477__auto__[(0)] = (function (){var a__7813__auto__ = (G__10054_10459[(0)]);
var b__7814__auto__ = v;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

(dest__9477__auto__[(1)] = (function (){var a__7813__auto__ = (G__10054_10459[(1)]);
var b__7814__auto__ = v;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());
} else {
(dest__9477__auto__[(0)] = (function (){var a__7813__auto__ = (G__10054_10459[(0)]);
var b__7814__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

(dest__9477__auto__[(1)] = (function (){var a__7813__auto__ = (G__10054_10459[(1)]);
var b__7814__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9477__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9494__auto__ = (new Float32Array((2)));
var G__10067_10461 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__10068_10462 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__10069_10463 = ((!(G__10067_10461))?typeof v === 'number':null);
var G__10070_10464 = ((!(G__10068_10462))?typeof v2 === 'number':null);
var G__10058_10465 = self__.buf;
var G__10059_10466 = ((G__10067_10461)?v.buf:null);
var G__10060_10467 = ((G__10068_10462)?v2.buf:null);
var G__10061_10468 = (G__10058_10465[(0)]);
var G__10062_10469 = (G__10058_10465[(1)]);
var G__10063_10470 = ((G__10067_10461)?(G__10059_10466[(0)]):(cljs.core.truth_(G__10069_10463)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10064_10471 = ((G__10067_10461)?(G__10059_10466[(1)]):(cljs.core.truth_(G__10069_10463)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10065_10472 = ((G__10068_10462)?(G__10060_10467[(0)]):(cljs.core.truth_(G__10070_10464)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10066_10473 = ((G__10068_10462)?(G__10060_10467[(1)]):(cljs.core.truth_(G__10070_10464)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__9494__auto__[(0)] = (function (){var a__7813__auto__ = (function (){var a__7813__auto__ = G__10061_10468;
var b__7814__auto__ = G__10063_10470;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})();
var b__7814__auto__ = G__10065_10472;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

(dest__9494__auto__[(1)] = (function (){var a__7813__auto__ = (function (){var a__7813__auto__ = G__10062_10469;
var b__7814__auto__ = G__10064_10471;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})();
var b__7814__auto__ = G__10066_10473;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__9494__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9477__auto__ = (new Float32Array((2)));
var G__10071_10474 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__10072_10475 = v.buf;
(dest__9477__auto__[(0)] = (function (){var a__7826__auto__ = (G__10071_10474[(0)]);
var b__7827__auto__ = (G__10072_10475[(0)]);
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

(dest__9477__auto__[(1)] = (function (){var a__7826__auto__ = (G__10071_10474[(1)]);
var b__7827__auto__ = (G__10072_10475[(1)]);
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9477__auto__[(0)] = (function (){var a__7826__auto__ = (G__10071_10474[(0)]);
var b__7827__auto__ = v;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

(dest__9477__auto__[(1)] = (function (){var a__7826__auto__ = (G__10071_10474[(1)]);
var b__7827__auto__ = v;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());
} else {
(dest__9477__auto__[(0)] = (function (){var a__7826__auto__ = (G__10071_10474[(0)]);
var b__7827__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

(dest__9477__auto__[(1)] = (function (){var a__7826__auto__ = (G__10071_10474[(1)]);
var b__7827__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__9477__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9494__auto__ = (new Float32Array((2)));
var G__10084_10476 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__10085_10477 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__10086_10478 = ((!(G__10084_10476))?typeof v === 'number':null);
var G__10087_10479 = ((!(G__10085_10477))?typeof v2 === 'number':null);
var G__10075_10480 = self__.buf;
var G__10076_10481 = ((G__10084_10476)?v.buf:null);
var G__10077_10482 = ((G__10085_10477)?v2.buf:null);
var G__10078_10483 = (G__10075_10480[(0)]);
var G__10079_10484 = (G__10075_10480[(1)]);
var G__10080_10485 = ((G__10084_10476)?(G__10076_10481[(0)]):(cljs.core.truth_(G__10086_10478)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10081_10486 = ((G__10084_10476)?(G__10076_10481[(1)]):(cljs.core.truth_(G__10086_10478)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10082_10487 = ((G__10085_10477)?(G__10077_10482[(0)]):(cljs.core.truth_(G__10087_10479)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10083_10488 = ((G__10085_10477)?(G__10077_10482[(1)]):(cljs.core.truth_(G__10087_10479)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__9494__auto__[(0)] = (function (){var a__7826__auto__ = (function (){var a__7826__auto__ = G__10078_10483;
var b__7827__auto__ = G__10080_10485;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})();
var b__7827__auto__ = G__10082_10487;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

(dest__9494__auto__[(1)] = (function (){var a__7826__auto__ = (function (){var a__7826__auto__ = G__10079_10484;
var b__7827__auto__ = G__10081_10486;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})();
var b__7827__auto__ = G__10083_10488;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__9494__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((2) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((2) - c);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

return (new thi.ng.geom.core.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((2) === cljs.core.count.call(null,v))){
var G__10094 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__10095 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10094[(0)]),(G__10095[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__10094[(1)]),(G__10095[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10094[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__10094[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10096 = self__.buf;
var G__10097 = (G__10096[(0)]);
var G__10098 = (G__10096[(1)]);
return Math.sqrt(((G__10097 * G__10097) + (G__10098 * G__10098)));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10099 = self__.buf;
var G__10100 = (G__10099[(0)]);
var G__10101 = (G__10099[(1)]);
return ((G__10100 * G__10100) + (G__10101 * G__10101));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__10102_10497 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__10103_10498 = v.buf;
(b[(0)] = (((G__10102_10497[(0)]) + (G__10103_10498[(0)])) * 0.5));

(b[(1)] = (((G__10102_10497[(1)]) + (G__10103_10498[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__10102_10497[(0)]) + v) * 0.5));

(b[(1)] = (((G__10102_10497[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__10102_10497[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__10102_10497[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__10113_10499 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__10114_10500 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__10115_10501 = ((!(G__10113_10499))?typeof v === 'number':null);
var G__10116_10502 = ((!(G__10114_10500))?typeof v2 === 'number':null);
var G__10104_10503 = self__.buf;
var G__10105_10504 = ((G__10113_10499)?v.buf:null);
var G__10106_10505 = ((G__10114_10500)?v2.buf:null);
var G__10107_10506 = (G__10104_10503[(0)]);
var G__10108_10507 = (G__10104_10503[(1)]);
var G__10109_10508 = ((G__10113_10499)?(G__10105_10504[(0)]):(cljs.core.truth_(G__10115_10501)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10110_10509 = ((G__10113_10499)?(G__10105_10504[(1)]):(cljs.core.truth_(G__10115_10501)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10111_10510 = ((G__10114_10500)?(G__10106_10505[(0)]):(cljs.core.truth_(G__10116_10502)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10112_10511 = ((G__10114_10500)?(G__10106_10505[(1)]):(cljs.core.truth_(G__10116_10502)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(b[(0)] = (((G__10109_10508 - G__10107_10506) * G__10111_10510) + G__10107_10506));

(b[(1)] = (((G__10110_10509 - G__10108_10507) * G__10112_10511) + G__10108_10507));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var G__10126_10512 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__10127_10513 = (c instanceof thi.ng.geom.core.vector.Vec2);
var G__10128_10514 = ((!(G__10126_10512))?typeof b === 'number':null);
var G__10129_10515 = ((!(G__10127_10513))?typeof c === 'number':null);
var G__10117_10516 = self__.buf;
var G__10118_10517 = ((G__10126_10512)?b.buf:null);
var G__10119_10518 = ((G__10127_10513)?c.buf:null);
var G__10120_10519 = (G__10117_10516[(0)]);
var G__10121_10520 = (G__10117_10516[(1)]);
var G__10122_10521 = ((G__10126_10512)?(G__10118_10517[(0)]):(cljs.core.truth_(G__10128_10514)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10123_10522 = ((G__10126_10512)?(G__10118_10517[(1)]):(cljs.core.truth_(G__10128_10514)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10124_10523 = ((G__10127_10513)?(G__10119_10518[(0)]):(cljs.core.truth_(G__10129_10515)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__10125_10524 = ((G__10127_10513)?(G__10119_10518[(1)]):(cljs.core.truth_(G__10129_10515)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_10525 = (((G__10122_10521 - G__10120_10519) * u) + G__10120_10519);
var y1_10526 = (((G__10123_10522 - G__10121_10520) * u) + G__10121_10520);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__10124_10523) * u) + G__10124_10523) - x1_10525) * v) + x1_10525));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__10125_10524) * u) + G__10125_10524) - y1_10526) * v) + y1_10526));

return (new thi.ng.geom.core.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.geom.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.geom.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = thi.ng.geom.core.mag.call(null,___$1));

(b[(1)] = thi.ng.geom.core.heading.call(null,___$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__9742 = self__.buf;
var G__9743 = (G__9742[(0)]);
var G__9744 = (G__9742[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__9743 * Math.cos(G__9744)));

(b[(1)] = (G__9743 * Math.sin(G__9744)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec2";

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"thi.ng.geom.core.vector/Vec2");
});

thi.ng.geom.core.vector.__GT_Vec2 = (function thi$ng$geom$core$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.PScale}
 * @implements {thi.ng.geom.core.PHeading}
 * @implements {thi.ng.geom.core.PMagnitude}
 * @implements {cljs.core.IIndexed}
 * @implements {thi.ng.geom.core.PDistance}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.geom.core.vector.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.geom.core.PMathOps}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.geom.core.PTranslate}
 * @implements {thi.ng.geom.core.PMinMax}
 * @implements {thi.ng.geom.core.PLimit}
 * @implements {thi.ng.geom.core.PVectorReduce}
 * @implements {thi.ng.geom.core.PPolar}
 * @implements {thi.ng.geom.core.PInterpolate}
 * @implements {thi.ng.geom.core.PTransform}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.core.PRotate3D}
 * @implements {thi.ng.geom.core.PClear}
 * @implements {thi.ng.geom.core.PDotProduct}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.geom.core.PNormalize}
 * @implements {thi.ng.geom.core.PBuffered}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {thi.ng.geom.core.PRotate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.geom.core.PCrossProduct}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.geom.core.PReflect}
 * @implements {thi.ng.geom.core.PMutableMathOps}
 * @implements {thi.ng.math.core.PDeltaEquals}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.PInvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.core.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.core.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str(" "),cljs.core.str((self__.buf[(2)])),cljs.core.str("]")].join('');
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10569 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10570 = v.buf;
return ((((G__10569[(0)]) * (G__10570[(0)])) + ((G__10569[(1)]) * (G__10570[(1)]))) + ((G__10569[(2)]) * (G__10570[(2)])));
} else {
return ((((G__10569[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__10569[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__10569[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10571 = self__.buf;
var G__10572 = (G__10571[(0)]);
var G__10573 = (G__10571[(1)]);
var G__10574 = (G__10571[(2)]);
var l = Math.sqrt((((G__10572 * G__10572) + (G__10573 * G__10573)) + (G__10574 * G__10574)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__10572 / l));

(b[(1)] = (G__10573 / l));

(b[(2)] = (G__10574 / l));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__10575 = self__.buf;
var G__10576 = (G__10575[(0)]);
var G__10577 = (G__10575[(1)]);
var G__10578 = (G__10575[(2)]);
var l = Math.sqrt((((G__10576 * G__10576) + (G__10577 * G__10577)) + (G__10578 * G__10578)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__10576 * l__$1));

(b[(1)] = (G__10577 * l__$1));

(b[(2)] = (G__10578 * l__$1));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__10579 = self__.buf;
var G__10580 = (G__10579[(0)]);
var G__10581 = (G__10579[(1)]);
var G__10582 = (G__10579[(2)]);
(b[(0)] = G__10580);

(b[(1)] = ((G__10581 * c) - (G__10582 * s)));

(b[(2)] = ((G__10581 * s) + (G__10582 * c)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__10583 = self__.buf;
var G__10584 = (G__10583[(0)]);
var G__10585 = (G__10583[(1)]);
var G__10586 = (G__10583[(2)]);
(b[(0)] = ((G__10584 * c) + (G__10586 * s)));

(b[(1)] = G__10585);

(b[(2)] = ((G__10586 * c) - (G__10584 * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__10587 = self__.buf;
var G__10588 = (G__10587[(0)]);
var G__10589 = (G__10587[(1)]);
var G__10590 = (G__10587[(2)]);
(b[(0)] = ((G__10588 * c) - (G__10589 * s)));

(b[(1)] = ((G__10588 * s) + (G__10589 * c)));

(b[(2)] = G__10590);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__10591 = self__.buf;
var G__10593 = (G__10591[(0)]);
var G__10594 = (G__10591[(1)]);
var G__10595 = (G__10591[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10592 = v.buf;
var G__10596 = (G__10592[(0)]);
var G__10597 = (G__10592[(1)]);
var G__10598 = (G__10592[(2)]);
var ux_SINGLEQUOTE_ = (G__10596 * G__10593);
var uy_SINGLEQUOTE_ = (G__10596 * G__10594);
var uz_SINGLEQUOTE_ = (G__10596 * G__10595);
var vx_SINGLEQUOTE_ = (G__10597 * G__10593);
var vy_SINGLEQUOTE_ = (G__10597 * G__10594);
var vz_SINGLEQUOTE_ = (G__10597 * G__10595);
var wx_SINGLEQUOTE_ = (G__10598 * G__10593);
var wy_SINGLEQUOTE_ = (G__10598 * G__10594);
var wz_SINGLEQUOTE_ = (G__10598 * G__10595);
var vx2 = (G__10596 * G__10596);
var vy2 = (G__10597 * G__10597);
var vz2 = (G__10598 * G__10598);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__10596) + ((((vy2 + vz2) * G__10593) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__10596)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__10597) + ((((vx2 + vz2) * G__10594) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__10597)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__10598) + ((((vx2 + vy2) * G__10595) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__10598)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__10596 = cljs.core.nth.call(null,v,(0),0.0);
var G__10597 = cljs.core.nth.call(null,v,(1),0.0);
var G__10598 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__10596 * G__10593);
var uy_SINGLEQUOTE_ = (G__10596 * G__10594);
var uz_SINGLEQUOTE_ = (G__10596 * G__10595);
var vx_SINGLEQUOTE_ = (G__10597 * G__10593);
var vy_SINGLEQUOTE_ = (G__10597 * G__10594);
var vz_SINGLEQUOTE_ = (G__10597 * G__10595);
var wx_SINGLEQUOTE_ = (G__10598 * G__10593);
var wy_SINGLEQUOTE_ = (G__10598 * G__10594);
var wz_SINGLEQUOTE_ = (G__10598 * G__10595);
var vx2 = (G__10596 * G__10596);
var vy2 = (G__10597 * G__10597);
var vz2 = (G__10598 * G__10598);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__10596) + ((((vy2 + vz2) * G__10593) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__10596)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__10597) + ((((vx2 + vz2) * G__10594) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__10597)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__10598) + ((((vx2 + vy2) * G__10595) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__10598)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10599 = self__.buf;
var G__10601 = (G__10599[(0)]);
var G__10602 = (G__10599[(1)]);
var G__10603 = (G__10599[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10600 = v.buf;
var G__10604 = (G__10600[(0)]);
var G__10605 = (G__10600[(1)]);
var G__10606 = (G__10600[(2)]);
var d = ((((G__10601 * G__10604) + (G__10602 * G__10605)) + (G__10603 * G__10606)) * 2.0);
(b[(0)] = ((G__10604 * d) - G__10601));

(b[(1)] = ((G__10605 * d) - G__10602));

(b[(2)] = ((G__10606 * d) - G__10603));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__10604 = cljs.core.nth.call(null,v,(0),0.0);
var G__10605 = cljs.core.nth.call(null,v,(1),0.0);
var G__10606 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__10601 * G__10604) + (G__10602 * G__10605)) + (G__10603 * G__10606)) * 2.0);
(b[(0)] = ((G__10604 * d) - G__10601));

(b[(1)] = ((G__10605 * d) - G__10602));

(b[(2)] = ((G__10606 * d) - G__10603));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10607_11110 = self__.buf;
var G__10609_11111 = (G__10607_11110[(0)]);
var G__10610_11112 = (G__10607_11110[(1)]);
var G__10611_11113 = (G__10607_11110[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10608_11114 = v.buf;
var G__10612_11115 = (G__10608_11114[(0)]);
var G__10613_11116 = (G__10608_11114[(1)]);
var G__10614_11117 = (G__10608_11114[(2)]);
(b[(0)] = ((G__10610_11112 * G__10614_11117) - (G__10613_11116 * G__10611_11113)));

(b[(1)] = ((G__10611_11113 * G__10612_11115) - (G__10614_11117 * G__10609_11111)));

(b[(2)] = ((G__10609_11111 * G__10613_11116) - (G__10612_11115 * G__10610_11112)));
} else {
var G__10612_11118 = cljs.core.nth.call(null,v,(0),0.0);
var G__10613_11119 = cljs.core.nth.call(null,v,(1),0.0);
var G__10614_11120 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__10610_11112 * G__10614_11120) - (G__10613_11119 * G__10611_11113)));

(b[(1)] = ((G__10611_11113 * G__10612_11118) - (G__10614_11120 * G__10609_11111)));

(b[(2)] = ((G__10609_11111 * G__10613_11119) - (G__10612_11118 * G__10610_11112)));
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10623_11129 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10624_11130 = v.buf;
(self__.buf[(0)] = ((G__10623_11129[(0)]) - (G__10624_11130[(0)])));

(self__.buf[(1)] = ((G__10623_11129[(1)]) - (G__10624_11130[(1)])));

(self__.buf[(2)] = ((G__10623_11129[(2)]) - (G__10624_11130[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10623_11129[(0)]) - v));

(self__.buf[(1)] = ((G__10623_11129[(1)]) - v));

(self__.buf[(2)] = ((G__10623_11129[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10623_11129[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10623_11129[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10623_11129[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10637_11131 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10638_11132 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10639_11133 = ((!(G__10637_11131))?typeof v1 === 'number':null);
var G__10640_11134 = ((!(G__10638_11132))?typeof v2 === 'number':null);
var G__10625_11135 = self__.buf;
var G__10626_11136 = ((G__10637_11131)?v1.buf:null);
var G__10627_11137 = ((G__10638_11132)?v2.buf:null);
var G__10628_11138 = (G__10625_11135[(0)]);
var G__10629_11139 = (G__10625_11135[(1)]);
var G__10630_11140 = (G__10625_11135[(2)]);
var G__10631_11141 = ((G__10637_11131)?(G__10626_11136[(0)]):(cljs.core.truth_(G__10639_11133)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10632_11142 = ((G__10637_11131)?(G__10626_11136[(1)]):(cljs.core.truth_(G__10639_11133)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10633_11143 = ((G__10637_11131)?(G__10626_11136[(2)]):(cljs.core.truth_(G__10639_11133)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10634_11144 = ((G__10638_11132)?(G__10627_11137[(0)]):(cljs.core.truth_(G__10640_11134)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10635_11145 = ((G__10638_11132)?(G__10627_11137[(1)]):(cljs.core.truth_(G__10640_11134)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10636_11146 = ((G__10638_11132)?(G__10627_11137[(2)]):(cljs.core.truth_(G__10640_11134)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10628_11138 - G__10631_11141) - G__10634_11144));

(self__.buf[(1)] = ((G__10629_11139 - G__10632_11142) - G__10635_11145));

(self__.buf[(2)] = ((G__10630_11140 - G__10633_11143) - G__10636_11146));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10641_11147 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10642_11148 = v.buf;
(self__.buf[(0)] = ((G__10641_11147[(0)]) * (G__10642_11148[(0)])));

(self__.buf[(1)] = ((G__10641_11147[(1)]) * (G__10642_11148[(1)])));

(self__.buf[(2)] = ((G__10641_11147[(2)]) * (G__10642_11148[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10641_11147[(0)]) * v));

(self__.buf[(1)] = ((G__10641_11147[(1)]) * v));

(self__.buf[(2)] = ((G__10641_11147[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10641_11147[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10641_11147[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10641_11147[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10655_11149 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10656_11150 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10657_11151 = ((!(G__10655_11149))?typeof v1 === 'number':null);
var G__10658_11152 = ((!(G__10656_11150))?typeof v2 === 'number':null);
var G__10643_11153 = self__.buf;
var G__10644_11154 = ((G__10655_11149)?v1.buf:null);
var G__10645_11155 = ((G__10656_11150)?v2.buf:null);
var G__10646_11156 = (G__10643_11153[(0)]);
var G__10647_11157 = (G__10643_11153[(1)]);
var G__10648_11158 = (G__10643_11153[(2)]);
var G__10649_11159 = ((G__10655_11149)?(G__10644_11154[(0)]):(cljs.core.truth_(G__10657_11151)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10650_11160 = ((G__10655_11149)?(G__10644_11154[(1)]):(cljs.core.truth_(G__10657_11151)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10651_11161 = ((G__10655_11149)?(G__10644_11154[(2)]):(cljs.core.truth_(G__10657_11151)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10652_11162 = ((G__10656_11150)?(G__10645_11155[(0)]):(cljs.core.truth_(G__10658_11152)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10653_11163 = ((G__10656_11150)?(G__10645_11155[(1)]):(cljs.core.truth_(G__10658_11152)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10654_11164 = ((G__10656_11150)?(G__10645_11155[(2)]):(cljs.core.truth_(G__10658_11152)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10646_11156 * G__10649_11159) * G__10652_11162));

(self__.buf[(1)] = ((G__10647_11157 * G__10650_11160) * G__10653_11163));

(self__.buf[(2)] = ((G__10648_11158 * G__10651_11161) * G__10654_11164));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10671_11173 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10672_11174 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10673_11175 = ((!(G__10671_11173))?typeof a === 'number':null);
var G__10674_11176 = ((!(G__10672_11174))?typeof b === 'number':null);
var G__10659_11177 = self__.buf;
var G__10660_11178 = ((G__10671_11173)?a.buf:null);
var G__10661_11179 = ((G__10672_11174)?b.buf:null);
var G__10662_11180 = (G__10659_11177[(0)]);
var G__10663_11181 = (G__10659_11177[(1)]);
var G__10664_11182 = (G__10659_11177[(2)]);
var G__10665_11183 = ((G__10671_11173)?(G__10660_11178[(0)]):(cljs.core.truth_(G__10673_11175)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10666_11184 = ((G__10671_11173)?(G__10660_11178[(1)]):(cljs.core.truth_(G__10673_11175)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10667_11185 = ((G__10671_11173)?(G__10660_11178[(2)]):(cljs.core.truth_(G__10673_11175)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10668_11186 = ((G__10672_11174)?(G__10661_11179[(0)]):(cljs.core.truth_(G__10674_11176)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10669_11187 = ((G__10672_11174)?(G__10661_11179[(1)]):(cljs.core.truth_(G__10674_11176)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10670_11188 = ((G__10672_11174)?(G__10661_11179[(2)]):(cljs.core.truth_(G__10674_11176)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__10662_11180 - G__10665_11183) * G__10668_11186));

(self__.buf[(1)] = ((G__10663_11181 - G__10666_11184) * G__10669_11187));

(self__.buf[(2)] = ((G__10664_11182 - G__10667_11185) * G__10670_11188));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10687_11189 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10688_11190 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10689_11191 = ((!(G__10687_11189))?typeof a === 'number':null);
var G__10690_11192 = ((!(G__10688_11190))?typeof b === 'number':null);
var G__10675_11193 = self__.buf;
var G__10676_11194 = ((G__10687_11189)?a.buf:null);
var G__10677_11195 = ((G__10688_11190)?b.buf:null);
var G__10678_11196 = (G__10675_11193[(0)]);
var G__10679_11197 = (G__10675_11193[(1)]);
var G__10680_11198 = (G__10675_11193[(2)]);
var G__10681_11199 = ((G__10687_11189)?(G__10676_11194[(0)]):(cljs.core.truth_(G__10689_11191)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10682_11200 = ((G__10687_11189)?(G__10676_11194[(1)]):(cljs.core.truth_(G__10689_11191)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10683_11201 = ((G__10687_11189)?(G__10676_11194[(2)]):(cljs.core.truth_(G__10689_11191)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10684_11202 = ((G__10688_11190)?(G__10677_11195[(0)]):(cljs.core.truth_(G__10690_11192)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10685_11203 = ((G__10688_11190)?(G__10677_11195[(1)]):(cljs.core.truth_(G__10690_11192)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10686_11204 = ((G__10688_11190)?(G__10677_11195[(2)]):(cljs.core.truth_(G__10690_11192)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__10678_11196 * G__10681_11199) - G__10684_11202));

(self__.buf[(1)] = ((G__10679_11197 * G__10682_11200) - G__10685_11203));

(self__.buf[(2)] = ((G__10680_11198 * G__10683_11201) - G__10686_11204));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs.call(null,(self__.buf[(1)])));

(self__.buf[(2)] = thi.ng.math.core.abs.call(null,(self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10703_11205 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10704_11206 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10705_11207 = ((!(G__10703_11205))?typeof a === 'number':null);
var G__10706_11208 = ((!(G__10704_11206))?typeof b === 'number':null);
var G__10691_11209 = self__.buf;
var G__10692_11210 = ((G__10703_11205)?a.buf:null);
var G__10693_11211 = ((G__10704_11206)?b.buf:null);
var G__10694_11212 = (G__10691_11209[(0)]);
var G__10695_11213 = (G__10691_11209[(1)]);
var G__10696_11214 = (G__10691_11209[(2)]);
var G__10697_11215 = ((G__10703_11205)?(G__10692_11210[(0)]):(cljs.core.truth_(G__10705_11207)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10698_11216 = ((G__10703_11205)?(G__10692_11210[(1)]):(cljs.core.truth_(G__10705_11207)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10699_11217 = ((G__10703_11205)?(G__10692_11210[(2)]):(cljs.core.truth_(G__10705_11207)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10700_11218 = ((G__10704_11206)?(G__10693_11211[(0)]):(cljs.core.truth_(G__10706_11208)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10701_11219 = ((G__10704_11206)?(G__10693_11211[(1)]):(cljs.core.truth_(G__10706_11208)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10702_11220 = ((G__10704_11206)?(G__10693_11211[(2)]):(cljs.core.truth_(G__10706_11208)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__10694_11212 * G__10697_11215) + G__10700_11218));

(self__.buf[(1)] = ((G__10695_11213 * G__10698_11216) + G__10701_11219));

(self__.buf[(2)] = ((G__10696_11214 * G__10699_11217) + G__10702_11220));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10707_11224 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10708_11225 = v.buf;
(self__.buf[(0)] = ((G__10707_11224[(0)]) / (G__10708_11225[(0)])));

(self__.buf[(1)] = ((G__10707_11224[(1)]) / (G__10708_11225[(1)])));

(self__.buf[(2)] = ((G__10707_11224[(2)]) / (G__10708_11225[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10707_11224[(0)]) / v));

(self__.buf[(1)] = ((G__10707_11224[(1)]) / v));

(self__.buf[(2)] = ((G__10707_11224[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10707_11224[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10707_11224[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10707_11224[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10721_11226 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10722_11227 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10723_11228 = ((!(G__10721_11226))?typeof v1 === 'number':null);
var G__10724_11229 = ((!(G__10722_11227))?typeof v2 === 'number':null);
var G__10709_11230 = self__.buf;
var G__10710_11231 = ((G__10721_11226)?v1.buf:null);
var G__10711_11232 = ((G__10722_11227)?v2.buf:null);
var G__10712_11233 = (G__10709_11230[(0)]);
var G__10713_11234 = (G__10709_11230[(1)]);
var G__10714_11235 = (G__10709_11230[(2)]);
var G__10715_11236 = ((G__10721_11226)?(G__10710_11231[(0)]):(cljs.core.truth_(G__10723_11228)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10716_11237 = ((G__10721_11226)?(G__10710_11231[(1)]):(cljs.core.truth_(G__10723_11228)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10717_11238 = ((G__10721_11226)?(G__10710_11231[(2)]):(cljs.core.truth_(G__10723_11228)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10718_11239 = ((G__10722_11227)?(G__10711_11232[(0)]):(cljs.core.truth_(G__10724_11229)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10719_11240 = ((G__10722_11227)?(G__10711_11232[(1)]):(cljs.core.truth_(G__10724_11229)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10720_11241 = ((G__10722_11227)?(G__10711_11232[(2)]):(cljs.core.truth_(G__10724_11229)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10712_11233 / G__10715_11236) / G__10718_11239));

(self__.buf[(1)] = ((G__10713_11234 / G__10716_11237) / G__10719_11240));

(self__.buf[(2)] = ((G__10714_11235 / G__10717_11238) / G__10720_11241));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10728_11248 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10729_11257 = v.buf;
(self__.buf[(0)] = ((G__10728_11248[(0)]) + (G__10729_11257[(0)])));

(self__.buf[(1)] = ((G__10728_11248[(1)]) + (G__10729_11257[(1)])));

(self__.buf[(2)] = ((G__10728_11248[(2)]) + (G__10729_11257[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10728_11248[(0)]) + v));

(self__.buf[(1)] = ((G__10728_11248[(1)]) + v));

(self__.buf[(2)] = ((G__10728_11248[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10728_11248[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10728_11248[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10728_11248[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10742_11258 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10743_11259 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10744_11260 = ((!(G__10742_11258))?typeof v1 === 'number':null);
var G__10745_11261 = ((!(G__10743_11259))?typeof v2 === 'number':null);
var G__10730_11262 = self__.buf;
var G__10731_11263 = ((G__10742_11258)?v1.buf:null);
var G__10732_11264 = ((G__10743_11259)?v2.buf:null);
var G__10733_11265 = (G__10730_11262[(0)]);
var G__10734_11266 = (G__10730_11262[(1)]);
var G__10735_11267 = (G__10730_11262[(2)]);
var G__10736_11268 = ((G__10742_11258)?(G__10731_11263[(0)]):(cljs.core.truth_(G__10744_11260)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10737_11269 = ((G__10742_11258)?(G__10731_11263[(1)]):(cljs.core.truth_(G__10744_11260)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10738_11270 = ((G__10742_11258)?(G__10731_11263[(2)]):(cljs.core.truth_(G__10744_11260)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10739_11271 = ((G__10743_11259)?(G__10732_11264[(0)]):(cljs.core.truth_(G__10745_11261)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10740_11272 = ((G__10743_11259)?(G__10732_11264[(1)]):(cljs.core.truth_(G__10745_11261)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10741_11273 = ((G__10743_11259)?(G__10732_11264[(2)]):(cljs.core.truth_(G__10745_11261)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10733_11265 + G__10736_11268) + G__10739_11271));

(self__.buf[(1)] = ((G__10734_11266 + G__10737_11269) + G__10740_11272));

(self__.buf[(2)] = ((G__10735_11267 + G__10738_11270) + G__10741_11273));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10758_11274 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10759_11275 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10760_11276 = ((!(G__10758_11274))?typeof a === 'number':null);
var G__10761_11277 = ((!(G__10759_11275))?typeof b === 'number':null);
var G__10746_11278 = self__.buf;
var G__10747_11279 = ((G__10758_11274)?a.buf:null);
var G__10748_11280 = ((G__10759_11275)?b.buf:null);
var G__10749_11281 = (G__10746_11278[(0)]);
var G__10750_11282 = (G__10746_11278[(1)]);
var G__10751_11283 = (G__10746_11278[(2)]);
var G__10752_11284 = ((G__10758_11274)?(G__10747_11279[(0)]):(cljs.core.truth_(G__10760_11276)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10753_11285 = ((G__10758_11274)?(G__10747_11279[(1)]):(cljs.core.truth_(G__10760_11276)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10754_11286 = ((G__10758_11274)?(G__10747_11279[(2)]):(cljs.core.truth_(G__10760_11276)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10755_11287 = ((G__10759_11275)?(G__10748_11280[(0)]):(cljs.core.truth_(G__10761_11277)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10756_11288 = ((G__10759_11275)?(G__10748_11280[(1)]):(cljs.core.truth_(G__10761_11277)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10757_11289 = ((G__10759_11275)?(G__10748_11280[(2)]):(cljs.core.truth_(G__10761_11277)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__10749_11281 + G__10752_11284) * G__10755_11287));

(self__.buf[(1)] = ((G__10750_11282 + G__10753_11285) * G__10756_11288));

(self__.buf[(2)] = ((G__10751_11283 + G__10754_11286) * G__10757_11289));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.swizzle3_fns.call(null,new cljs.core.Keyword(null,"zyx","zyx",1752527951)).call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__6486__auto__ = self__._hash;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(2)]))) | (0)),(3));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((3) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1)))) && (cljs.core._EQ_.call(null,(self__.buf[(2)]),cljs.core.nth.call(null,o,(2))));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading_xy.call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(1)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.core.vector.Vec3))?v:thi.ng.geom.core.vector.vec3.call(null,v));
return Math.acos(thi.ng.geom.core.dot.call(null,thi.ng.geom.core.normalize.call(null,___$1),thi.ng.geom.core.normalize.call(null,v__$1)));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10768 = self__.buf;
var G__10770 = (G__10768[(0)]);
var G__10771 = (G__10768[(1)]);
var G__10772 = (G__10768[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10769 = v.buf;
var G__10773 = (G__10769[(0)]);
var G__10774 = (G__10769[(1)]);
var G__10775 = (G__10769[(2)]);
var dx = (G__10770 - G__10773);
var dy = (G__10771 - G__10774);
var dz = (G__10772 - G__10775);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__10773 = cljs.core.nth.call(null,v,(0),0.0);
var G__10774 = cljs.core.nth.call(null,v,(1),0.0);
var G__10775 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__10770 - G__10773);
var dy = (G__10771 - G__10774);
var dz = (G__10772 - G__10775);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
var acc__$2 = f.call(null,acc__$1,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$2)){
return cljs.core.deref.call(null,acc__$2);
} else {
return acc__$2;
}
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9641__auto__ = (new Float32Array((3)));
var G__10796_11314 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10797_11315 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10798_11316 = ((!(G__10796_11314))?typeof a === 'number':null);
var G__10799_11317 = ((!(G__10797_11315))?typeof b === 'number':null);
var G__10784_11318 = self__.buf;
var G__10785_11319 = ((G__10796_11314)?a.buf:null);
var G__10786_11320 = ((G__10797_11315)?b.buf:null);
var G__10787_11321 = (G__10784_11318[(0)]);
var G__10788_11322 = (G__10784_11318[(1)]);
var G__10789_11323 = (G__10784_11318[(2)]);
var G__10790_11324 = ((G__10796_11314)?(G__10785_11319[(0)]):(cljs.core.truth_(G__10798_11316)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10791_11325 = ((G__10796_11314)?(G__10785_11319[(1)]):(cljs.core.truth_(G__10798_11316)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10792_11326 = ((G__10796_11314)?(G__10785_11319[(2)]):(cljs.core.truth_(G__10798_11316)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10793_11327 = ((G__10797_11315)?(G__10786_11320[(0)]):(cljs.core.truth_(G__10799_11317)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10794_11328 = ((G__10797_11315)?(G__10786_11320[(1)]):(cljs.core.truth_(G__10799_11317)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10795_11329 = ((G__10797_11315)?(G__10786_11320[(2)]):(cljs.core.truth_(G__10799_11317)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__9641__auto__[(0)] = ((G__10787_11321 * G__10790_11324) - G__10793_11327));

(dest__9641__auto__[(1)] = ((G__10788_11322 * G__10791_11325) - G__10794_11328));

(dest__9641__auto__[(2)] = ((G__10789_11323 * G__10792_11326) - G__10795_11329));

return (new thi.ng.geom.core.vector.Vec3(dest__9641__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9624__auto__ = (new Float32Array((3)));
var G__10800_11338 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10801_11339 = v.buf;
(dest__9624__auto__[(0)] = ((G__10800_11338[(0)]) * (G__10801_11339[(0)])));

(dest__9624__auto__[(1)] = ((G__10800_11338[(1)]) * (G__10801_11339[(1)])));

(dest__9624__auto__[(2)] = ((G__10800_11338[(2)]) * (G__10801_11339[(2)])));
} else {
if(typeof v === 'number'){
(dest__9624__auto__[(0)] = ((G__10800_11338[(0)]) * v));

(dest__9624__auto__[(1)] = ((G__10800_11338[(1)]) * v));

(dest__9624__auto__[(2)] = ((G__10800_11338[(2)]) * v));
} else {
(dest__9624__auto__[(0)] = ((G__10800_11338[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9624__auto__[(1)] = ((G__10800_11338[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__9624__auto__[(2)] = ((G__10800_11338[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9624__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9641__auto__ = (new Float32Array((3)));
var G__10814_11340 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10815_11341 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10816_11342 = ((!(G__10814_11340))?typeof v1 === 'number':null);
var G__10817_11343 = ((!(G__10815_11341))?typeof v2 === 'number':null);
var G__10802_11344 = self__.buf;
var G__10803_11345 = ((G__10814_11340)?v1.buf:null);
var G__10804_11346 = ((G__10815_11341)?v2.buf:null);
var G__10805_11347 = (G__10802_11344[(0)]);
var G__10806_11348 = (G__10802_11344[(1)]);
var G__10807_11349 = (G__10802_11344[(2)]);
var G__10808_11350 = ((G__10814_11340)?(G__10803_11345[(0)]):(cljs.core.truth_(G__10816_11342)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10809_11351 = ((G__10814_11340)?(G__10803_11345[(1)]):(cljs.core.truth_(G__10816_11342)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10810_11352 = ((G__10814_11340)?(G__10803_11345[(2)]):(cljs.core.truth_(G__10816_11342)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10811_11353 = ((G__10815_11341)?(G__10804_11346[(0)]):(cljs.core.truth_(G__10817_11343)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10812_11354 = ((G__10815_11341)?(G__10804_11346[(1)]):(cljs.core.truth_(G__10817_11343)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10813_11355 = ((G__10815_11341)?(G__10804_11346[(2)]):(cljs.core.truth_(G__10817_11343)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9641__auto__[(0)] = ((G__10805_11347 * G__10808_11350) * G__10811_11353));

(dest__9641__auto__[(1)] = ((G__10806_11348 * G__10809_11351) * G__10812_11354));

(dest__9641__auto__[(2)] = ((G__10807_11349 * G__10810_11352) * G__10813_11355));

return (new thi.ng.geom.core.vector.Vec3(dest__9641__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10818 = self__.buf;
var dest__9609__auto__ = (new Float32Array((3)));
(dest__9609__auto__[(0)] = ((G__10818[(0)]) * x));

(dest__9609__auto__[(1)] = ((G__10818[(1)]) * y));

(dest__9609__auto__[(2)] = ((G__10818[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__9609__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9603__auto__ = (new Float32Array((3)));
var G__10819_11356 = self__.buf;
(dest__9603__auto__[(0)] = (- (G__10819_11356[(0)])));

(dest__9603__auto__[(1)] = (- (G__10819_11356[(1)])));

(dest__9603__auto__[(2)] = (- (G__10819_11356[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__9603__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9624__auto__ = (new Float32Array((3)));
var G__10820_11357 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10821_11358 = v.buf;
(dest__9624__auto__[(0)] = ((G__10820_11357[(0)]) - (G__10821_11358[(0)])));

(dest__9624__auto__[(1)] = ((G__10820_11357[(1)]) - (G__10821_11358[(1)])));

(dest__9624__auto__[(2)] = ((G__10820_11357[(2)]) - (G__10821_11358[(2)])));
} else {
if(typeof v === 'number'){
(dest__9624__auto__[(0)] = ((G__10820_11357[(0)]) - v));

(dest__9624__auto__[(1)] = ((G__10820_11357[(1)]) - v));

(dest__9624__auto__[(2)] = ((G__10820_11357[(2)]) - v));
} else {
(dest__9624__auto__[(0)] = ((G__10820_11357[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__9624__auto__[(1)] = ((G__10820_11357[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__9624__auto__[(2)] = ((G__10820_11357[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9624__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9641__auto__ = (new Float32Array((3)));
var G__10834_11359 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10835_11360 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10836_11361 = ((!(G__10834_11359))?typeof v1 === 'number':null);
var G__10837_11362 = ((!(G__10835_11360))?typeof v2 === 'number':null);
var G__10822_11363 = self__.buf;
var G__10823_11364 = ((G__10834_11359)?v1.buf:null);
var G__10824_11365 = ((G__10835_11360)?v2.buf:null);
var G__10825_11366 = (G__10822_11363[(0)]);
var G__10826_11367 = (G__10822_11363[(1)]);
var G__10827_11368 = (G__10822_11363[(2)]);
var G__10828_11369 = ((G__10834_11359)?(G__10823_11364[(0)]):(cljs.core.truth_(G__10836_11361)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10829_11370 = ((G__10834_11359)?(G__10823_11364[(1)]):(cljs.core.truth_(G__10836_11361)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10830_11371 = ((G__10834_11359)?(G__10823_11364[(2)]):(cljs.core.truth_(G__10836_11361)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10831_11372 = ((G__10835_11360)?(G__10824_11365[(0)]):(cljs.core.truth_(G__10837_11362)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10832_11373 = ((G__10835_11360)?(G__10824_11365[(1)]):(cljs.core.truth_(G__10837_11362)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10833_11374 = ((G__10835_11360)?(G__10824_11365[(2)]):(cljs.core.truth_(G__10837_11362)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9641__auto__[(0)] = ((G__10825_11366 - G__10828_11369) - G__10831_11372));

(dest__9641__auto__[(1)] = ((G__10826_11367 - G__10829_11370) - G__10832_11373));

(dest__9641__auto__[(2)] = ((G__10827_11368 - G__10830_11371) - G__10833_11374));

return (new thi.ng.geom.core.vector.Vec3(dest__9641__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10838 = self__.buf;
var dest__9609__auto__ = (new Float32Array((3)));
(dest__9609__auto__[(0)] = ((G__10838[(0)]) - x));

(dest__9609__auto__[(1)] = ((G__10838[(1)]) - y));

(dest__9609__auto__[(2)] = ((G__10838[(2)]) - z));

return (new thi.ng.geom.core.vector.Vec3(dest__9609__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9641__auto__ = (new Float32Array((3)));
var G__10851_11378 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10852_11379 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10853_11380 = ((!(G__10851_11378))?typeof a === 'number':null);
var G__10854_11381 = ((!(G__10852_11379))?typeof b === 'number':null);
var G__10839_11382 = self__.buf;
var G__10840_11383 = ((G__10851_11378)?a.buf:null);
var G__10841_11384 = ((G__10852_11379)?b.buf:null);
var G__10842_11385 = (G__10839_11382[(0)]);
var G__10843_11386 = (G__10839_11382[(1)]);
var G__10844_11387 = (G__10839_11382[(2)]);
var G__10845_11388 = ((G__10851_11378)?(G__10840_11383[(0)]):(cljs.core.truth_(G__10853_11380)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10846_11389 = ((G__10851_11378)?(G__10840_11383[(1)]):(cljs.core.truth_(G__10853_11380)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10847_11390 = ((G__10851_11378)?(G__10840_11383[(2)]):(cljs.core.truth_(G__10853_11380)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10848_11391 = ((G__10852_11379)?(G__10841_11384[(0)]):(cljs.core.truth_(G__10854_11381)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10849_11392 = ((G__10852_11379)?(G__10841_11384[(1)]):(cljs.core.truth_(G__10854_11381)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10850_11393 = ((G__10852_11379)?(G__10841_11384[(2)]):(cljs.core.truth_(G__10854_11381)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__9641__auto__[(0)] = ((G__10842_11385 * G__10845_11388) + G__10848_11391));

(dest__9641__auto__[(1)] = ((G__10843_11386 * G__10846_11389) + G__10849_11392));

(dest__9641__auto__[(2)] = ((G__10844_11387 * G__10847_11390) + G__10850_11393));

return (new thi.ng.geom.core.vector.Vec3(dest__9641__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9641__auto__ = (new Float32Array((3)));
var G__10872_11394 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10873_11395 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10874_11396 = ((!(G__10872_11394))?typeof a === 'number':null);
var G__10875_11397 = ((!(G__10873_11395))?typeof b === 'number':null);
var G__10860_11398 = self__.buf;
var G__10861_11399 = ((G__10872_11394)?a.buf:null);
var G__10862_11400 = ((G__10873_11395)?b.buf:null);
var G__10863_11401 = (G__10860_11398[(0)]);
var G__10864_11402 = (G__10860_11398[(1)]);
var G__10865_11403 = (G__10860_11398[(2)]);
var G__10866_11404 = ((G__10872_11394)?(G__10861_11399[(0)]):(cljs.core.truth_(G__10874_11396)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10867_11405 = ((G__10872_11394)?(G__10861_11399[(1)]):(cljs.core.truth_(G__10874_11396)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10868_11406 = ((G__10872_11394)?(G__10861_11399[(2)]):(cljs.core.truth_(G__10874_11396)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10869_11407 = ((G__10873_11395)?(G__10862_11400[(0)]):(cljs.core.truth_(G__10875_11397)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10870_11408 = ((G__10873_11395)?(G__10862_11400[(1)]):(cljs.core.truth_(G__10875_11397)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10871_11409 = ((G__10873_11395)?(G__10862_11400[(2)]):(cljs.core.truth_(G__10875_11397)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__9641__auto__[(0)] = ((G__10863_11401 + G__10866_11404) * G__10869_11407));

(dest__9641__auto__[(1)] = ((G__10864_11402 + G__10867_11405) * G__10870_11408));

(dest__9641__auto__[(2)] = ((G__10865_11403 + G__10868_11406) * G__10871_11409));

return (new thi.ng.geom.core.vector.Vec3(dest__9641__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9603__auto__ = (new Float32Array((3)));
var G__10878_11410 = self__.buf;
(dest__9603__auto__[(0)] = ((1) / (G__10878_11410[(0)])));

(dest__9603__auto__[(1)] = ((1) / (G__10878_11410[(1)])));

(dest__9603__auto__[(2)] = ((1) / (G__10878_11410[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__9603__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9624__auto__ = (new Float32Array((3)));
var G__10886_11414 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10887_11415 = v.buf;
(dest__9624__auto__[(0)] = ((G__10886_11414[(0)]) / (G__10887_11415[(0)])));

(dest__9624__auto__[(1)] = ((G__10886_11414[(1)]) / (G__10887_11415[(1)])));

(dest__9624__auto__[(2)] = ((G__10886_11414[(2)]) / (G__10887_11415[(2)])));
} else {
if(typeof v === 'number'){
(dest__9624__auto__[(0)] = ((G__10886_11414[(0)]) / v));

(dest__9624__auto__[(1)] = ((G__10886_11414[(1)]) / v));

(dest__9624__auto__[(2)] = ((G__10886_11414[(2)]) / v));
} else {
(dest__9624__auto__[(0)] = ((G__10886_11414[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__9624__auto__[(1)] = ((G__10886_11414[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__9624__auto__[(2)] = ((G__10886_11414[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9624__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9641__auto__ = (new Float32Array((3)));
var G__10910_11419 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10911_11420 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10912_11421 = ((!(G__10910_11419))?typeof v1 === 'number':null);
var G__10913_11422 = ((!(G__10911_11420))?typeof v2 === 'number':null);
var G__10898_11423 = self__.buf;
var G__10899_11424 = ((G__10910_11419)?v1.buf:null);
var G__10900_11425 = ((G__10911_11420)?v2.buf:null);
var G__10901_11426 = (G__10898_11423[(0)]);
var G__10902_11427 = (G__10898_11423[(1)]);
var G__10903_11428 = (G__10898_11423[(2)]);
var G__10904_11429 = ((G__10910_11419)?(G__10899_11424[(0)]):(cljs.core.truth_(G__10912_11421)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10905_11430 = ((G__10910_11419)?(G__10899_11424[(1)]):(cljs.core.truth_(G__10912_11421)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10906_11431 = ((G__10910_11419)?(G__10899_11424[(2)]):(cljs.core.truth_(G__10912_11421)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10907_11432 = ((G__10911_11420)?(G__10900_11425[(0)]):(cljs.core.truth_(G__10913_11422)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10908_11433 = ((G__10911_11420)?(G__10900_11425[(1)]):(cljs.core.truth_(G__10913_11422)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10909_11434 = ((G__10911_11420)?(G__10900_11425[(2)]):(cljs.core.truth_(G__10913_11422)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9641__auto__[(0)] = ((G__10901_11426 / G__10904_11429) / G__10907_11432));

(dest__9641__auto__[(1)] = ((G__10902_11427 / G__10905_11430) / G__10908_11433));

(dest__9641__auto__[(2)] = ((G__10903_11428 / G__10906_11431) / G__10909_11434));

return (new thi.ng.geom.core.vector.Vec3(dest__9641__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10914 = self__.buf;
var dest__9609__auto__ = (new Float32Array((3)));
(dest__9609__auto__[(0)] = ((G__10914[(0)]) / x));

(dest__9609__auto__[(1)] = ((G__10914[(1)]) / y));

(dest__9609__auto__[(2)] = ((G__10914[(2)]) / z));

return (new thi.ng.geom.core.vector.Vec3(dest__9609__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9624__auto__ = (new Float32Array((3)));
var G__10915_11443 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10916_11444 = v.buf;
(dest__9624__auto__[(0)] = ((G__10915_11443[(0)]) + (G__10916_11444[(0)])));

(dest__9624__auto__[(1)] = ((G__10915_11443[(1)]) + (G__10916_11444[(1)])));

(dest__9624__auto__[(2)] = ((G__10915_11443[(2)]) + (G__10916_11444[(2)])));
} else {
if(typeof v === 'number'){
(dest__9624__auto__[(0)] = ((G__10915_11443[(0)]) + v));

(dest__9624__auto__[(1)] = ((G__10915_11443[(1)]) + v));

(dest__9624__auto__[(2)] = ((G__10915_11443[(2)]) + v));
} else {
(dest__9624__auto__[(0)] = ((G__10915_11443[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9624__auto__[(1)] = ((G__10915_11443[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__9624__auto__[(2)] = ((G__10915_11443[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9624__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9641__auto__ = (new Float32Array((3)));
var G__10929_11445 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10930_11446 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10931_11447 = ((!(G__10929_11445))?typeof v1 === 'number':null);
var G__10932_11448 = ((!(G__10930_11446))?typeof v2 === 'number':null);
var G__10917_11449 = self__.buf;
var G__10918_11450 = ((G__10929_11445)?v1.buf:null);
var G__10919_11451 = ((G__10930_11446)?v2.buf:null);
var G__10920_11452 = (G__10917_11449[(0)]);
var G__10921_11453 = (G__10917_11449[(1)]);
var G__10922_11454 = (G__10917_11449[(2)]);
var G__10923_11455 = ((G__10929_11445)?(G__10918_11450[(0)]):(cljs.core.truth_(G__10931_11447)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10924_11456 = ((G__10929_11445)?(G__10918_11450[(1)]):(cljs.core.truth_(G__10931_11447)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10925_11457 = ((G__10929_11445)?(G__10918_11450[(2)]):(cljs.core.truth_(G__10931_11447)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10926_11458 = ((G__10930_11446)?(G__10919_11451[(0)]):(cljs.core.truth_(G__10932_11448)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10927_11459 = ((G__10930_11446)?(G__10919_11451[(1)]):(cljs.core.truth_(G__10932_11448)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10928_11460 = ((G__10930_11446)?(G__10919_11451[(2)]):(cljs.core.truth_(G__10932_11448)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9641__auto__[(0)] = ((G__10920_11452 + G__10923_11455) + G__10926_11458));

(dest__9641__auto__[(1)] = ((G__10921_11453 + G__10924_11456) + G__10927_11459));

(dest__9641__auto__[(2)] = ((G__10922_11454 + G__10925_11457) + G__10928_11460));

return (new thi.ng.geom.core.vector.Vec3(dest__9641__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10933 = self__.buf;
var dest__9609__auto__ = (new Float32Array((3)));
(dest__9609__auto__[(0)] = ((G__10933[(0)]) + x));

(dest__9609__auto__[(1)] = ((G__10933[(1)]) + y));

(dest__9609__auto__[(2)] = ((G__10933[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__9609__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9603__auto__ = (new Float32Array((3)));
var G__10934_11461 = self__.buf;
(dest__9603__auto__[(0)] = thi.ng.math.core.abs.call(null,(G__10934_11461[(0)])));

(dest__9603__auto__[(1)] = thi.ng.math.core.abs.call(null,(G__10934_11461[(1)])));

(dest__9603__auto__[(2)] = thi.ng.math.core.abs.call(null,(G__10934_11461[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__9603__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9641__auto__ = (new Float32Array((3)));
var G__10947_11462 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__10948_11463 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__10949_11464 = ((!(G__10947_11462))?typeof a === 'number':null);
var G__10950_11465 = ((!(G__10948_11463))?typeof b === 'number':null);
var G__10935_11466 = self__.buf;
var G__10936_11467 = ((G__10947_11462)?a.buf:null);
var G__10937_11468 = ((G__10948_11463)?b.buf:null);
var G__10938_11469 = (G__10935_11466[(0)]);
var G__10939_11470 = (G__10935_11466[(1)]);
var G__10940_11471 = (G__10935_11466[(2)]);
var G__10941_11472 = ((G__10947_11462)?(G__10936_11467[(0)]):(cljs.core.truth_(G__10949_11464)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10942_11473 = ((G__10947_11462)?(G__10936_11467[(1)]):(cljs.core.truth_(G__10949_11464)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10943_11474 = ((G__10947_11462)?(G__10936_11467[(2)]):(cljs.core.truth_(G__10949_11464)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10944_11475 = ((G__10948_11463)?(G__10937_11468[(0)]):(cljs.core.truth_(G__10950_11465)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10945_11476 = ((G__10948_11463)?(G__10937_11468[(1)]):(cljs.core.truth_(G__10950_11465)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10946_11477 = ((G__10948_11463)?(G__10937_11468[(2)]):(cljs.core.truth_(G__10950_11465)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__9641__auto__[(0)] = ((G__10938_11469 - G__10941_11472) * G__10944_11475));

(dest__9641__auto__[(1)] = ((G__10939_11470 - G__10942_11473) * G__10945_11476));

(dest__9641__auto__[(2)] = ((G__10940_11471 - G__10943_11474) * G__10946_11477));

return (new thi.ng.geom.core.vector.Vec3(dest__9641__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9624__auto__ = (new Float32Array((3)));
var G__10951_11485 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10952_11486 = v.buf;
(dest__9624__auto__[(0)] = ((G__10951_11485[(0)]) + (G__10952_11486[(0)])));

(dest__9624__auto__[(1)] = ((G__10951_11485[(1)]) + (G__10952_11486[(1)])));

(dest__9624__auto__[(2)] = ((G__10951_11485[(2)]) + (G__10952_11486[(2)])));
} else {
if(typeof v === 'number'){
(dest__9624__auto__[(0)] = ((G__10951_11485[(0)]) + v));

(dest__9624__auto__[(1)] = ((G__10951_11485[(1)]) + v));

(dest__9624__auto__[(2)] = ((G__10951_11485[(2)]) + v));
} else {
(dest__9624__auto__[(0)] = ((G__10951_11485[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9624__auto__[(1)] = ((G__10951_11485[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__9624__auto__[(2)] = ((G__10951_11485[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9624__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9641__auto__ = (new Float32Array((3)));
var G__10965_11504 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10966_11505 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10967_11506 = ((!(G__10965_11504))?typeof v1 === 'number':null);
var G__10968_11507 = ((!(G__10966_11505))?typeof v2 === 'number':null);
var G__10953_11508 = self__.buf;
var G__10954_11509 = ((G__10965_11504)?v1.buf:null);
var G__10955_11510 = ((G__10966_11505)?v2.buf:null);
var G__10956_11511 = (G__10953_11508[(0)]);
var G__10957_11512 = (G__10953_11508[(1)]);
var G__10958_11513 = (G__10953_11508[(2)]);
var G__10959_11514 = ((G__10965_11504)?(G__10954_11509[(0)]):(cljs.core.truth_(G__10967_11506)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10960_11515 = ((G__10965_11504)?(G__10954_11509[(1)]):(cljs.core.truth_(G__10967_11506)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10961_11516 = ((G__10965_11504)?(G__10954_11509[(2)]):(cljs.core.truth_(G__10967_11506)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10962_11517 = ((G__10966_11505)?(G__10955_11510[(0)]):(cljs.core.truth_(G__10968_11507)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10963_11518 = ((G__10966_11505)?(G__10955_11510[(1)]):(cljs.core.truth_(G__10968_11507)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10964_11519 = ((G__10966_11505)?(G__10955_11510[(2)]):(cljs.core.truth_(G__10968_11507)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9641__auto__[(0)] = ((G__10956_11511 + G__10959_11514) + G__10962_11517));

(dest__9641__auto__[(1)] = ((G__10957_11512 + G__10960_11515) + G__10963_11518));

(dest__9641__auto__[(2)] = ((G__10958_11513 + G__10961_11516) + G__10964_11519));

return (new thi.ng.geom.core.vector.Vec3(dest__9641__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10969 = self__.buf;
var dest__9609__auto__ = (new Float32Array((3)));
(dest__9609__auto__[(0)] = ((G__10969[(0)]) + x));

(dest__9609__auto__[(1)] = ((G__10969[(1)]) + y));

(dest__9609__auto__[(2)] = ((G__10969[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__9609__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k <= (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.core.vector.swizzle3_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k >= (0))) && ((k <= (2)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9624__auto__ = (new Float32Array((3)));
var G__10970_11520 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10971_11521 = v.buf;
(dest__9624__auto__[(0)] = ((G__10970_11520[(0)]) * (G__10971_11521[(0)])));

(dest__9624__auto__[(1)] = ((G__10970_11520[(1)]) * (G__10971_11521[(1)])));

(dest__9624__auto__[(2)] = ((G__10970_11520[(2)]) * (G__10971_11521[(2)])));
} else {
if(typeof v === 'number'){
(dest__9624__auto__[(0)] = ((G__10970_11520[(0)]) * v));

(dest__9624__auto__[(1)] = ((G__10970_11520[(1)]) * v));

(dest__9624__auto__[(2)] = ((G__10970_11520[(2)]) * v));
} else {
(dest__9624__auto__[(0)] = ((G__10970_11520[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9624__auto__[(1)] = ((G__10970_11520[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__9624__auto__[(2)] = ((G__10970_11520[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9624__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9641__auto__ = (new Float32Array((3)));
var G__10984_11522 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__10985_11523 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__10986_11524 = ((!(G__10984_11522))?typeof v1 === 'number':null);
var G__10987_11525 = ((!(G__10985_11523))?typeof v2 === 'number':null);
var G__10972_11526 = self__.buf;
var G__10973_11527 = ((G__10984_11522)?v1.buf:null);
var G__10974_11528 = ((G__10985_11523)?v2.buf:null);
var G__10975_11529 = (G__10972_11526[(0)]);
var G__10976_11530 = (G__10972_11526[(1)]);
var G__10977_11531 = (G__10972_11526[(2)]);
var G__10978_11532 = ((G__10984_11522)?(G__10973_11527[(0)]):(cljs.core.truth_(G__10986_11524)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__10979_11533 = ((G__10984_11522)?(G__10973_11527[(1)]):(cljs.core.truth_(G__10986_11524)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__10980_11534 = ((G__10984_11522)?(G__10973_11527[(2)]):(cljs.core.truth_(G__10986_11524)?v1:cljs.core.nth.call(null,v1,(2),1.0)));
var G__10981_11535 = ((G__10985_11523)?(G__10974_11528[(0)]):(cljs.core.truth_(G__10987_11525)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__10982_11536 = ((G__10985_11523)?(G__10974_11528[(1)]):(cljs.core.truth_(G__10987_11525)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
var G__10983_11537 = ((G__10985_11523)?(G__10974_11528[(2)]):(cljs.core.truth_(G__10987_11525)?v2:cljs.core.nth.call(null,v2,(2),1.0)));
(dest__9641__auto__[(0)] = ((G__10975_11529 * G__10978_11532) * G__10981_11535));

(dest__9641__auto__[(1)] = ((G__10976_11530 * G__10979_11533) * G__10982_11536));

(dest__9641__auto__[(2)] = ((G__10977_11531 * G__10980_11534) * G__10983_11537));

return (new thi.ng.geom.core.vector.Vec3(dest__9641__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10988 = self__.buf;
var dest__9609__auto__ = (new Float32Array((3)));
(dest__9609__auto__[(0)] = ((G__10988[(0)]) * x));

(dest__9609__auto__[(1)] = ((G__10988[(1)]) * y));

(dest__9609__auto__[(2)] = ((G__10988[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__9609__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
});

thi.ng.geom.core.vector.Vec3.prototype.call = (function() {
var G__11542 = null;
var G__11542__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__11542__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__11542 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__11542__2.call(this,self__,k);
case 3:
return G__11542__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11542.cljs$core$IFn$_invoke$arity$2 = G__11542__2;
G__11542.cljs$core$IFn$_invoke$arity$3 = G__11542__3;
return G__11542;
})()
;

thi.ng.geom.core.vector.Vec3.prototype.apply = (function (self__,args10568){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10568)));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9624__auto__ = (new Float32Array((3)));
var G__10989_11547 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__10990_11548 = v.buf;
(dest__9624__auto__[(0)] = (function (){var a__7813__auto__ = (G__10989_11547[(0)]);
var b__7814__auto__ = (G__10990_11548[(0)]);
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

(dest__9624__auto__[(1)] = (function (){var a__7813__auto__ = (G__10989_11547[(1)]);
var b__7814__auto__ = (G__10990_11548[(1)]);
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

(dest__9624__auto__[(2)] = (function (){var a__7813__auto__ = (G__10989_11547[(2)]);
var b__7814__auto__ = (G__10990_11548[(2)]);
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9624__auto__[(0)] = (function (){var a__7813__auto__ = (G__10989_11547[(0)]);
var b__7814__auto__ = v;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

(dest__9624__auto__[(1)] = (function (){var a__7813__auto__ = (G__10989_11547[(1)]);
var b__7814__auto__ = v;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

(dest__9624__auto__[(2)] = (function (){var a__7813__auto__ = (G__10989_11547[(2)]);
var b__7814__auto__ = v;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());
} else {
(dest__9624__auto__[(0)] = (function (){var a__7813__auto__ = (G__10989_11547[(0)]);
var b__7814__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

(dest__9624__auto__[(1)] = (function (){var a__7813__auto__ = (G__10989_11547[(1)]);
var b__7814__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

(dest__9624__auto__[(2)] = (function (){var a__7813__auto__ = (G__10989_11547[(2)]);
var b__7814__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9624__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9641__auto__ = (new Float32Array((3)));
var G__11003_11549 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__11004_11550 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__11005_11551 = ((!(G__11003_11549))?typeof v === 'number':null);
var G__11006_11552 = ((!(G__11004_11550))?typeof v2 === 'number':null);
var G__10991_11553 = self__.buf;
var G__10992_11554 = ((G__11003_11549)?v.buf:null);
var G__10993_11555 = ((G__11004_11550)?v2.buf:null);
var G__10994_11556 = (G__10991_11553[(0)]);
var G__10995_11557 = (G__10991_11553[(1)]);
var G__10996_11558 = (G__10991_11553[(2)]);
var G__10997_11559 = ((G__11003_11549)?(G__10992_11554[(0)]):(cljs.core.truth_(G__11005_11551)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10998_11560 = ((G__11003_11549)?(G__10992_11554[(1)]):(cljs.core.truth_(G__11005_11551)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10999_11561 = ((G__11003_11549)?(G__10992_11554[(2)]):(cljs.core.truth_(G__11005_11551)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__11000_11562 = ((G__11004_11550)?(G__10993_11555[(0)]):(cljs.core.truth_(G__11006_11552)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__11001_11563 = ((G__11004_11550)?(G__10993_11555[(1)]):(cljs.core.truth_(G__11006_11552)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__11002_11564 = ((G__11004_11550)?(G__10993_11555[(2)]):(cljs.core.truth_(G__11006_11552)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9641__auto__[(0)] = (function (){var a__7813__auto__ = (function (){var a__7813__auto__ = G__10994_11556;
var b__7814__auto__ = G__10997_11559;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})();
var b__7814__auto__ = G__11000_11562;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

(dest__9641__auto__[(1)] = (function (){var a__7813__auto__ = (function (){var a__7813__auto__ = G__10995_11557;
var b__7814__auto__ = G__10998_11560;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})();
var b__7814__auto__ = G__11001_11563;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

(dest__9641__auto__[(2)] = (function (){var a__7813__auto__ = (function (){var a__7813__auto__ = G__10996_11558;
var b__7814__auto__ = G__10999_11561;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})();
var b__7814__auto__ = G__11002_11564;
if((a__7813__auto__ <= b__7814__auto__)){
return a__7813__auto__;
} else {
return b__7814__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__9641__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9624__auto__ = (new Float32Array((3)));
var G__11007_11565 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__11008_11566 = v.buf;
(dest__9624__auto__[(0)] = (function (){var a__7826__auto__ = (G__11007_11565[(0)]);
var b__7827__auto__ = (G__11008_11566[(0)]);
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

(dest__9624__auto__[(1)] = (function (){var a__7826__auto__ = (G__11007_11565[(1)]);
var b__7827__auto__ = (G__11008_11566[(1)]);
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

(dest__9624__auto__[(2)] = (function (){var a__7826__auto__ = (G__11007_11565[(2)]);
var b__7827__auto__ = (G__11008_11566[(2)]);
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9624__auto__[(0)] = (function (){var a__7826__auto__ = (G__11007_11565[(0)]);
var b__7827__auto__ = v;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

(dest__9624__auto__[(1)] = (function (){var a__7826__auto__ = (G__11007_11565[(1)]);
var b__7827__auto__ = v;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

(dest__9624__auto__[(2)] = (function (){var a__7826__auto__ = (G__11007_11565[(2)]);
var b__7827__auto__ = v;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());
} else {
(dest__9624__auto__[(0)] = (function (){var a__7826__auto__ = (G__11007_11565[(0)]);
var b__7827__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

(dest__9624__auto__[(1)] = (function (){var a__7826__auto__ = (G__11007_11565[(1)]);
var b__7827__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

(dest__9624__auto__[(2)] = (function (){var a__7826__auto__ = (G__11007_11565[(2)]);
var b__7827__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__9624__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9641__auto__ = (new Float32Array((3)));
var G__11029_11567 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__11030_11568 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__11031_11569 = ((!(G__11029_11567))?typeof v === 'number':null);
var G__11032_11570 = ((!(G__11030_11568))?typeof v2 === 'number':null);
var G__11017_11571 = self__.buf;
var G__11018_11572 = ((G__11029_11567)?v.buf:null);
var G__11019_11573 = ((G__11030_11568)?v2.buf:null);
var G__11020_11574 = (G__11017_11571[(0)]);
var G__11021_11575 = (G__11017_11571[(1)]);
var G__11022_11576 = (G__11017_11571[(2)]);
var G__11023_11577 = ((G__11029_11567)?(G__11018_11572[(0)]):(cljs.core.truth_(G__11031_11569)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__11024_11578 = ((G__11029_11567)?(G__11018_11572[(1)]):(cljs.core.truth_(G__11031_11569)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__11025_11579 = ((G__11029_11567)?(G__11018_11572[(2)]):(cljs.core.truth_(G__11031_11569)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__11026_11580 = ((G__11030_11568)?(G__11019_11573[(0)]):(cljs.core.truth_(G__11032_11570)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__11027_11581 = ((G__11030_11568)?(G__11019_11573[(1)]):(cljs.core.truth_(G__11032_11570)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__11028_11582 = ((G__11030_11568)?(G__11019_11573[(2)]):(cljs.core.truth_(G__11032_11570)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9641__auto__[(0)] = (function (){var a__7826__auto__ = (function (){var a__7826__auto__ = G__11020_11574;
var b__7827__auto__ = G__11023_11577;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})();
var b__7827__auto__ = G__11026_11580;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

(dest__9641__auto__[(1)] = (function (){var a__7826__auto__ = (function (){var a__7826__auto__ = G__11021_11575;
var b__7827__auto__ = G__11024_11578;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})();
var b__7827__auto__ = G__11027_11581;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

(dest__9641__auto__[(2)] = (function (){var a__7826__auto__ = (function (){var a__7826__auto__ = G__11022_11576;
var b__7827__auto__ = G__11025_11579;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})();
var b__7827__auto__ = G__11028_11582;
if((a__7826__auto__ >= b__7827__auto__)){
return a__7826__auto__;
} else {
return b__7827__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__9641__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare.call(null,(self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((3) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((3) - c);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

(buf_SINGLEQUOTE_[(2)] = f2.call(null,(buf_SINGLEQUOTE_[(2)]),(2)));

return (new thi.ng.geom.core.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((3) === cljs.core.count.call(null,v))){
var G__11033 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__11034 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__11033[(0)]),(G__11034[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__11033[(1)]),(G__11034[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__11033[(2)]),(G__11034[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__11033[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__11033[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__11033[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__11035 = self__.buf;
var G__11036 = (G__11035[(0)]);
var G__11037 = (G__11035[(1)]);
var G__11038 = (G__11035[(2)]);
return Math.sqrt((((G__11036 * G__11036) + (G__11037 * G__11037)) + (G__11038 * G__11038)));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__11039 = self__.buf;
var G__11040 = (G__11039[(0)]);
var G__11041 = (G__11039[(1)]);
var G__11042 = (G__11039[(2)]);
return (((G__11040 * G__11040) + (G__11041 * G__11041)) + (G__11042 * G__11042));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__11043_11600 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__11044_11601 = v.buf;
(b[(0)] = (((G__11043_11600[(0)]) + (G__11044_11601[(0)])) * 0.5));

(b[(1)] = (((G__11043_11600[(1)]) + (G__11044_11601[(1)])) * 0.5));

(b[(2)] = (((G__11043_11600[(2)]) + (G__11044_11601[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__11043_11600[(0)]) + v) * 0.5));

(b[(1)] = (((G__11043_11600[(1)]) + v) * 0.5));

(b[(2)] = (((G__11043_11600[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__11043_11600[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__11043_11600[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__11043_11600[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__11057_11602 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__11058_11603 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__11059_11604 = ((!(G__11057_11602))?typeof v === 'number':null);
var G__11060_11605 = ((!(G__11058_11603))?typeof v2 === 'number':null);
var G__11045_11606 = self__.buf;
var G__11046_11607 = ((G__11057_11602)?v.buf:null);
var G__11047_11608 = ((G__11058_11603)?v2.buf:null);
var G__11048_11609 = (G__11045_11606[(0)]);
var G__11049_11610 = (G__11045_11606[(1)]);
var G__11050_11611 = (G__11045_11606[(2)]);
var G__11051_11612 = ((G__11057_11602)?(G__11046_11607[(0)]):(cljs.core.truth_(G__11059_11604)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__11052_11613 = ((G__11057_11602)?(G__11046_11607[(1)]):(cljs.core.truth_(G__11059_11604)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__11053_11614 = ((G__11057_11602)?(G__11046_11607[(2)]):(cljs.core.truth_(G__11059_11604)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__11054_11615 = ((G__11058_11603)?(G__11047_11608[(0)]):(cljs.core.truth_(G__11060_11605)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__11055_11616 = ((G__11058_11603)?(G__11047_11608[(1)]):(cljs.core.truth_(G__11060_11605)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__11056_11617 = ((G__11058_11603)?(G__11047_11608[(2)]):(cljs.core.truth_(G__11060_11605)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(b[(0)] = (((G__11051_11612 - G__11048_11609) * G__11054_11615) + G__11048_11609));

(b[(1)] = (((G__11052_11613 - G__11049_11610) * G__11055_11616) + G__11049_11610));

(b[(2)] = (((G__11053_11614 - G__11050_11611) * G__11056_11617) + G__11050_11611));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(2),0.0)));
var G__11073_11618 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__11074_11619 = (c instanceof thi.ng.geom.core.vector.Vec3);
var G__11075_11620 = ((!(G__11073_11618))?typeof b === 'number':null);
var G__11076_11621 = ((!(G__11074_11619))?typeof c === 'number':null);
var G__11061_11622 = self__.buf;
var G__11062_11623 = ((G__11073_11618)?b.buf:null);
var G__11063_11624 = ((G__11074_11619)?c.buf:null);
var G__11064_11625 = (G__11061_11622[(0)]);
var G__11065_11626 = (G__11061_11622[(1)]);
var G__11066_11627 = (G__11061_11622[(2)]);
var G__11067_11628 = ((G__11073_11618)?(G__11062_11623[(0)]):(cljs.core.truth_(G__11075_11620)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__11068_11629 = ((G__11073_11618)?(G__11062_11623[(1)]):(cljs.core.truth_(G__11075_11620)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__11069_11630 = ((G__11073_11618)?(G__11062_11623[(2)]):(cljs.core.truth_(G__11075_11620)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__11070_11631 = ((G__11074_11619)?(G__11063_11624[(0)]):(cljs.core.truth_(G__11076_11621)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__11071_11632 = ((G__11074_11619)?(G__11063_11624[(1)]):(cljs.core.truth_(G__11076_11621)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__11072_11633 = ((G__11074_11619)?(G__11063_11624[(2)]):(cljs.core.truth_(G__11076_11621)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_11634 = (((G__11067_11628 - G__11064_11625) * u) + G__11064_11625);
var y1_11635 = (((G__11068_11629 - G__11065_11626) * u) + G__11065_11626);
var z1_11636 = (((G__11069_11630 - G__11066_11627) * u) + G__11066_11627);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__11070_11631) * u) + G__11070_11631) - x1_11634) * v) + x1_11634));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__11071_11632) * u) + G__11071_11632) - y1_11635) * v) + y1_11635));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__11072_11633) * u) + G__11072_11633) - z1_11636) * v) + z1_11636));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.geom.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.geom.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = thi.ng.geom.core.mag.call(null,___$1);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = Math.asin(((self__.buf[(2)]) / r)));

(b[(2)] = Math.atan2((self__.buf[(1)]),(self__.buf[(0)])));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec3";

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"thi.ng.geom.core.vector/Vec3");
});

thi.ng.geom.core.vector.__GT_Vec3 = (function thi$ng$geom$core$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.core.vector.x = (function thi$ng$geom$core$vector$x(G__11639){
var G__11637 = (((G__11639 instanceof thi.ng.geom.core.vector.Vec2))?G__11639.buf:G__11639.buf);
return (G__11637[(0)]);
});
thi.ng.geom.core.vector.xx = (function thi$ng$geom$core$vector$xx(G__11666){
var G__11664 = (((G__11666 instanceof thi.ng.geom.core.vector.Vec2))?G__11666.buf:G__11666.buf);
var G__11665 = (new Float32Array(2));
(G__11665[(0)] = (G__11664[(0)]));

(G__11665[(1)] = (G__11664[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__11665,null,cljs.core.meta.call(null,G__11666)));
});
thi.ng.geom.core.vector.xxx = (function thi$ng$geom$core$vector$xxx(G__11669){
var G__11667 = (((G__11669 instanceof thi.ng.geom.core.vector.Vec2))?G__11669.buf:G__11669.buf);
var G__11668 = (new Float32Array(3));
(G__11668[(0)] = (G__11667[(0)]));

(G__11668[(1)] = (G__11667[(0)]));

(G__11668[(2)] = (G__11667[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__11668,null,cljs.core.meta.call(null,G__11669)));
});
thi.ng.geom.core.vector.xxy = (function thi$ng$geom$core$vector$xxy(G__11672){
var G__11670 = (((G__11672 instanceof thi.ng.geom.core.vector.Vec2))?G__11672.buf:G__11672.buf);
var G__11671 = (new Float32Array(3));
(G__11671[(0)] = (G__11670[(0)]));

(G__11671[(1)] = (G__11670[(0)]));

(G__11671[(2)] = (G__11670[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__11671,null,cljs.core.meta.call(null,G__11672)));
});
thi.ng.geom.core.vector.xxz = (function thi$ng$geom$core$vector$xxz(G__11675){
if((G__11675 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11675","G__11675",-617417356,null))))].join('')));
}

var G__11673 = (((G__11675 instanceof thi.ng.geom.core.vector.Vec2))?G__11675.buf:G__11675.buf);
var G__11674 = (new Float32Array(3));
(G__11674[(0)] = (G__11673[(0)]));

(G__11674[(1)] = (G__11673[(0)]));

(G__11674[(2)] = (G__11673[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__11674,null,cljs.core.meta.call(null,G__11675)));
});
thi.ng.geom.core.vector.xy = (function thi$ng$geom$core$vector$xy(G__11678){
var G__11676 = (((G__11678 instanceof thi.ng.geom.core.vector.Vec2))?G__11678.buf:G__11678.buf);
var G__11677 = (new Float32Array(2));
(G__11677[(0)] = (G__11676[(0)]));

(G__11677[(1)] = (G__11676[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__11677,null,cljs.core.meta.call(null,G__11678)));
});
thi.ng.geom.core.vector.xyx = (function thi$ng$geom$core$vector$xyx(G__11681){
var G__11679 = (((G__11681 instanceof thi.ng.geom.core.vector.Vec2))?G__11681.buf:G__11681.buf);
var G__11680 = (new Float32Array(3));
(G__11680[(0)] = (G__11679[(0)]));

(G__11680[(1)] = (G__11679[(1)]));

(G__11680[(2)] = (G__11679[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__11680,null,cljs.core.meta.call(null,G__11681)));
});
thi.ng.geom.core.vector.xyy = (function thi$ng$geom$core$vector$xyy(G__11684){
var G__11682 = (((G__11684 instanceof thi.ng.geom.core.vector.Vec2))?G__11684.buf:G__11684.buf);
var G__11683 = (new Float32Array(3));
(G__11683[(0)] = (G__11682[(0)]));

(G__11683[(1)] = (G__11682[(1)]));

(G__11683[(2)] = (G__11682[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__11683,null,cljs.core.meta.call(null,G__11684)));
});
thi.ng.geom.core.vector.xyz = (function thi$ng$geom$core$vector$xyz(G__11687){
if((G__11687 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11687","G__11687",-880690122,null))))].join('')));
}

var G__11685 = (((G__11687 instanceof thi.ng.geom.core.vector.Vec2))?G__11687.buf:G__11687.buf);
var G__11686 = (new Float32Array(3));
(G__11686[(0)] = (G__11685[(0)]));

(G__11686[(1)] = (G__11685[(1)]));

(G__11686[(2)] = (G__11685[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__11686,null,cljs.core.meta.call(null,G__11687)));
});
thi.ng.geom.core.vector.xz = (function thi$ng$geom$core$vector$xz(G__11698){
if((G__11698 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11698","G__11698",1097690363,null))))].join('')));
}

var G__11696 = (((G__11698 instanceof thi.ng.geom.core.vector.Vec2))?G__11698.buf:G__11698.buf);
var G__11697 = (new Float32Array(2));
(G__11697[(0)] = (G__11696[(0)]));

(G__11697[(1)] = (G__11696[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__11697,null,cljs.core.meta.call(null,G__11698)));
});
thi.ng.geom.core.vector.xzx = (function thi$ng$geom$core$vector$xzx(G__11701){
if((G__11701 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11701","G__11701",-563851484,null))))].join('')));
}

var G__11699 = (((G__11701 instanceof thi.ng.geom.core.vector.Vec2))?G__11701.buf:G__11701.buf);
var G__11700 = (new Float32Array(3));
(G__11700[(0)] = (G__11699[(0)]));

(G__11700[(1)] = (G__11699[(2)]));

(G__11700[(2)] = (G__11699[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__11700,null,cljs.core.meta.call(null,G__11701)));
});
thi.ng.geom.core.vector.xzy = (function thi$ng$geom$core$vector$xzy(G__11704){
if((G__11704 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11704","G__11704",-1753184123,null))))].join('')));
}

var G__11702 = (((G__11704 instanceof thi.ng.geom.core.vector.Vec2))?G__11704.buf:G__11704.buf);
var G__11703 = (new Float32Array(3));
(G__11703[(0)] = (G__11702[(0)]));

(G__11703[(1)] = (G__11702[(2)]));

(G__11703[(2)] = (G__11702[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__11703,null,cljs.core.meta.call(null,G__11704)));
});
thi.ng.geom.core.vector.xzz = (function thi$ng$geom$core$vector$xzz(G__11710){
if((G__11710 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11710","G__11710",203438968,null))))].join('')));
}

var G__11708 = (((G__11710 instanceof thi.ng.geom.core.vector.Vec2))?G__11710.buf:G__11710.buf);
var G__11709 = (new Float32Array(3));
(G__11709[(0)] = (G__11708[(0)]));

(G__11709[(1)] = (G__11708[(2)]));

(G__11709[(2)] = (G__11708[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__11709,null,cljs.core.meta.call(null,G__11710)));
});
thi.ng.geom.core.vector.y = (function thi$ng$geom$core$vector$y(G__11713){
var G__11711 = (((G__11713 instanceof thi.ng.geom.core.vector.Vec2))?G__11713.buf:G__11713.buf);
return (G__11711[(1)]);
});
thi.ng.geom.core.vector.yx = (function thi$ng$geom$core$vector$yx(G__11716){
var G__11714 = (((G__11716 instanceof thi.ng.geom.core.vector.Vec2))?G__11716.buf:G__11716.buf);
var G__11715 = (new Float32Array(2));
(G__11715[(0)] = (G__11714[(1)]));

(G__11715[(1)] = (G__11714[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__11715,null,cljs.core.meta.call(null,G__11716)));
});
thi.ng.geom.core.vector.yxx = (function thi$ng$geom$core$vector$yxx(G__11719){
var G__11717 = (((G__11719 instanceof thi.ng.geom.core.vector.Vec2))?G__11719.buf:G__11719.buf);
var G__11718 = (new Float32Array(3));
(G__11718[(0)] = (G__11717[(1)]));

(G__11718[(1)] = (G__11717[(0)]));

(G__11718[(2)] = (G__11717[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__11718,null,cljs.core.meta.call(null,G__11719)));
});
thi.ng.geom.core.vector.yxy = (function thi$ng$geom$core$vector$yxy(G__11728){
var G__11726 = (((G__11728 instanceof thi.ng.geom.core.vector.Vec2))?G__11728.buf:G__11728.buf);
var G__11727 = (new Float32Array(3));
(G__11727[(0)] = (G__11726[(1)]));

(G__11727[(1)] = (G__11726[(0)]));

(G__11727[(2)] = (G__11726[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__11727,null,cljs.core.meta.call(null,G__11728)));
});
thi.ng.geom.core.vector.yxz = (function thi$ng$geom$core$vector$yxz(G__11731){
if((G__11731 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11731","G__11731",1089368213,null))))].join('')));
}

var G__11729 = (((G__11731 instanceof thi.ng.geom.core.vector.Vec2))?G__11731.buf:G__11731.buf);
var G__11730 = (new Float32Array(3));
(G__11730[(0)] = (G__11729[(1)]));

(G__11730[(1)] = (G__11729[(0)]));

(G__11730[(2)] = (G__11729[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__11730,null,cljs.core.meta.call(null,G__11731)));
});
thi.ng.geom.core.vector.yy = (function thi$ng$geom$core$vector$yy(G__11742){
var G__11740 = (((G__11742 instanceof thi.ng.geom.core.vector.Vec2))?G__11742.buf:G__11742.buf);
var G__11741 = (new Float32Array(2));
(G__11741[(0)] = (G__11740[(1)]));

(G__11741[(1)] = (G__11740[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__11741,null,cljs.core.meta.call(null,G__11742)));
});
thi.ng.geom.core.vector.yyx = (function thi$ng$geom$core$vector$yyx(G__11745){
var G__11743 = (((G__11745 instanceof thi.ng.geom.core.vector.Vec2))?G__11745.buf:G__11745.buf);
var G__11744 = (new Float32Array(3));
(G__11744[(0)] = (G__11743[(1)]));

(G__11744[(1)] = (G__11743[(1)]));

(G__11744[(2)] = (G__11743[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__11744,null,cljs.core.meta.call(null,G__11745)));
});
thi.ng.geom.core.vector.yyy = (function thi$ng$geom$core$vector$yyy(G__11748){
var G__11746 = (((G__11748 instanceof thi.ng.geom.core.vector.Vec2))?G__11748.buf:G__11748.buf);
var G__11747 = (new Float32Array(3));
(G__11747[(0)] = (G__11746[(1)]));

(G__11747[(1)] = (G__11746[(1)]));

(G__11747[(2)] = (G__11746[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__11747,null,cljs.core.meta.call(null,G__11748)));
});
thi.ng.geom.core.vector.yyz = (function thi$ng$geom$core$vector$yyz(G__11751){
if((G__11751 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11751","G__11751",1686544550,null))))].join('')));
}

var G__11749 = (((G__11751 instanceof thi.ng.geom.core.vector.Vec2))?G__11751.buf:G__11751.buf);
var G__11750 = (new Float32Array(3));
(G__11750[(0)] = (G__11749[(1)]));

(G__11750[(1)] = (G__11749[(1)]));

(G__11750[(2)] = (G__11749[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__11750,null,cljs.core.meta.call(null,G__11751)));
});
thi.ng.geom.core.vector.yz = (function thi$ng$geom$core$vector$yz(G__11754){
if((G__11754 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11754","G__11754",612103230,null))))].join('')));
}

var G__11752 = (((G__11754 instanceof thi.ng.geom.core.vector.Vec2))?G__11754.buf:G__11754.buf);
var G__11753 = (new Float32Array(2));
(G__11753[(0)] = (G__11752[(1)]));

(G__11753[(1)] = (G__11752[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__11753,null,cljs.core.meta.call(null,G__11754)));
});
thi.ng.geom.core.vector.yzx = (function thi$ng$geom$core$vector$yzx(G__11758){
if((G__11758 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11758","G__11758",1066318719,null))))].join('')));
}

var G__11756 = (((G__11758 instanceof thi.ng.geom.core.vector.Vec2))?G__11758.buf:G__11758.buf);
var G__11757 = (new Float32Array(3));
(G__11757[(0)] = (G__11756[(1)]));

(G__11757[(1)] = (G__11756[(2)]));

(G__11757[(2)] = (G__11756[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__11757,null,cljs.core.meta.call(null,G__11758)));
});
thi.ng.geom.core.vector.yzy = (function thi$ng$geom$core$vector$yzy(G__11784){
if((G__11784 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11784","G__11784",320036417,null))))].join('')));
}

var G__11782 = (((G__11784 instanceof thi.ng.geom.core.vector.Vec2))?G__11784.buf:G__11784.buf);
var G__11783 = (new Float32Array(3));
(G__11783[(0)] = (G__11782[(1)]));

(G__11783[(1)] = (G__11782[(2)]));

(G__11783[(2)] = (G__11782[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__11783,null,cljs.core.meta.call(null,G__11784)));
});
thi.ng.geom.core.vector.yzz = (function thi$ng$geom$core$vector$yzz(G__11787){
if((G__11787 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11787","G__11787",-1340188924,null))))].join('')));
}

var G__11785 = (((G__11787 instanceof thi.ng.geom.core.vector.Vec2))?G__11787.buf:G__11787.buf);
var G__11786 = (new Float32Array(3));
(G__11786[(0)] = (G__11785[(1)]));

(G__11786[(1)] = (G__11785[(2)]));

(G__11786[(2)] = (G__11785[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__11786,null,cljs.core.meta.call(null,G__11787)));
});
thi.ng.geom.core.vector.z = (function thi$ng$geom$core$vector$z(G__11790){
if((G__11790 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11790","G__11790",1589697734,null))))].join('')));
}

var G__11788 = (((G__11790 instanceof thi.ng.geom.core.vector.Vec2))?G__11790.buf:G__11790.buf);
return (G__11788[(2)]);
});
thi.ng.geom.core.vector.zx = (function thi$ng$geom$core$vector$zx(G__11793){
if((G__11793 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11793","G__11793",94694956,null))))].join('')));
}

var G__11791 = (((G__11793 instanceof thi.ng.geom.core.vector.Vec2))?G__11793.buf:G__11793.buf);
var G__11792 = (new Float32Array(2));
(G__11792[(0)] = (G__11791[(2)]));

(G__11792[(1)] = (G__11791[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__11792,null,cljs.core.meta.call(null,G__11793)));
});
thi.ng.geom.core.vector.zxx = (function thi$ng$geom$core$vector$zxx(G__11796){
if((G__11796 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11796","G__11796",1137273726,null))))].join('')));
}

var G__11794 = (((G__11796 instanceof thi.ng.geom.core.vector.Vec2))?G__11796.buf:G__11796.buf);
var G__11795 = (new Float32Array(3));
(G__11795[(0)] = (G__11794[(2)]));

(G__11795[(1)] = (G__11794[(0)]));

(G__11795[(2)] = (G__11794[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__11795,null,cljs.core.meta.call(null,G__11796)));
});
thi.ng.geom.core.vector.zxy = (function thi$ng$geom$core$vector$zxy(G__11799){
if((G__11799 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11799","G__11799",1745291686,null))))].join('')));
}

var G__11797 = (((G__11799 instanceof thi.ng.geom.core.vector.Vec2))?G__11799.buf:G__11799.buf);
var G__11798 = (new Float32Array(3));
(G__11798[(0)] = (G__11797[(2)]));

(G__11798[(1)] = (G__11797[(0)]));

(G__11798[(2)] = (G__11797[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__11798,null,cljs.core.meta.call(null,G__11799)));
});
thi.ng.geom.core.vector.zxz = (function thi$ng$geom$core$vector$zxz(G__11802){
if((G__11802 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11802","G__11802",599822431,null))))].join('')));
}

var G__11800 = (((G__11802 instanceof thi.ng.geom.core.vector.Vec2))?G__11802.buf:G__11802.buf);
var G__11801 = (new Float32Array(3));
(G__11801[(0)] = (G__11800[(2)]));

(G__11801[(1)] = (G__11800[(0)]));

(G__11801[(2)] = (G__11800[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__11801,null,cljs.core.meta.call(null,G__11802)));
});
thi.ng.geom.core.vector.zy = (function thi$ng$geom$core$vector$zy(G__11813){
if((G__11813 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11813","G__11813",-1047516665,null))))].join('')));
}

var G__11811 = (((G__11813 instanceof thi.ng.geom.core.vector.Vec2))?G__11813.buf:G__11813.buf);
var G__11812 = (new Float32Array(2));
(G__11812[(0)] = (G__11811[(2)]));

(G__11812[(1)] = (G__11811[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__11812,null,cljs.core.meta.call(null,G__11813)));
});
thi.ng.geom.core.vector.zyx = (function thi$ng$geom$core$vector$zyx(G__11816){
if((G__11816 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11816","G__11816",-443327583,null))))].join('')));
}

var G__11814 = (((G__11816 instanceof thi.ng.geom.core.vector.Vec2))?G__11816.buf:G__11816.buf);
var G__11815 = (new Float32Array(3));
(G__11815[(0)] = (G__11814[(2)]));

(G__11815[(1)] = (G__11814[(1)]));

(G__11815[(2)] = (G__11814[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__11815,null,cljs.core.meta.call(null,G__11816)));
});
thi.ng.geom.core.vector.zyy = (function thi$ng$geom$core$vector$zyy(G__11819){
if((G__11819 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11819","G__11819",-1551374239,null))))].join('')));
}

var G__11817 = (((G__11819 instanceof thi.ng.geom.core.vector.Vec2))?G__11819.buf:G__11819.buf);
var G__11818 = (new Float32Array(3));
(G__11818[(0)] = (G__11817[(2)]));

(G__11818[(1)] = (G__11817[(1)]));

(G__11818[(2)] = (G__11817[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__11818,null,cljs.core.meta.call(null,G__11819)));
});
thi.ng.geom.core.vector.zyz = (function thi$ng$geom$core$vector$zyz(G__11822){
if((G__11822 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11822","G__11822",2076915002,null))))].join('')));
}

var G__11820 = (((G__11822 instanceof thi.ng.geom.core.vector.Vec2))?G__11822.buf:G__11822.buf);
var G__11821 = (new Float32Array(3));
(G__11821[(0)] = (G__11820[(2)]));

(G__11821[(1)] = (G__11820[(1)]));

(G__11821[(2)] = (G__11820[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__11821,null,cljs.core.meta.call(null,G__11822)));
});
thi.ng.geom.core.vector.zz = (function thi$ng$geom$core$vector$zz(G__11828){
if((G__11828 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11828","G__11828",122456811,null))))].join('')));
}

var G__11826 = (((G__11828 instanceof thi.ng.geom.core.vector.Vec2))?G__11828.buf:G__11828.buf);
var G__11827 = (new Float32Array(2));
(G__11827[(0)] = (G__11826[(2)]));

(G__11827[(1)] = (G__11826[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__11827,null,cljs.core.meta.call(null,G__11828)));
});
thi.ng.geom.core.vector.zzx = (function thi$ng$geom$core$vector$zzx(G__11831){
if((G__11831 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11831","G__11831",1208250627,null))))].join('')));
}

var G__11829 = (((G__11831 instanceof thi.ng.geom.core.vector.Vec2))?G__11831.buf:G__11831.buf);
var G__11830 = (new Float32Array(3));
(G__11830[(0)] = (G__11829[(2)]));

(G__11830[(1)] = (G__11829[(2)]));

(G__11830[(2)] = (G__11829[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__11830,null,cljs.core.meta.call(null,G__11831)));
});
thi.ng.geom.core.vector.zzy = (function thi$ng$geom$core$vector$zzy(G__11834){
if((G__11834 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11834","G__11834",29147860,null))))].join('')));
}

var G__11832 = (((G__11834 instanceof thi.ng.geom.core.vector.Vec2))?G__11834.buf:G__11834.buf);
var G__11833 = (new Float32Array(3));
(G__11833[(0)] = (G__11832[(2)]));

(G__11833[(1)] = (G__11832[(2)]));

(G__11833[(2)] = (G__11832[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__11833,null,cljs.core.meta.call(null,G__11834)));
});
thi.ng.geom.core.vector.zzz = (function thi$ng$geom$core$vector$zzz(G__11843){
if((G__11843 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__11843","G__11843",-1690822826,null))))].join('')));
}

var G__11841 = (((G__11843 instanceof thi.ng.geom.core.vector.Vec2))?G__11843.buf:G__11843.buf);
var G__11842 = (new Float32Array(3));
(G__11842[(0)] = (G__11841[(2)]));

(G__11842[(1)] = (G__11841[(2)]));

(G__11842[(2)] = (G__11841[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__11842,null,cljs.core.meta.call(null,G__11843)));
});
thi.ng.geom.core.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.core.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.core.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.core.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.core.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.core.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.core.vector.yy], null);
thi.ng.geom.core.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.core.vector.y,thi.ng.geom.core.vector.xzx,thi.ng.geom.core.vector.xyz,thi.ng.geom.core.vector.zzy,thi.ng.geom.core.vector.yx,thi.ng.geom.core.vector.xy,thi.ng.geom.core.vector.yyz,thi.ng.geom.core.vector.zxy,thi.ng.geom.core.vector.xzy,thi.ng.geom.core.vector.zxz,thi.ng.geom.core.vector.zx,thi.ng.geom.core.vector.xx,thi.ng.geom.core.vector.xxx,thi.ng.geom.core.vector.zy,thi.ng.geom.core.vector.zzx,thi.ng.geom.core.vector.zyx,thi.ng.geom.core.vector.yzx,thi.ng.geom.core.vector.z,thi.ng.geom.core.vector.yyx,thi.ng.geom.core.vector.xz,thi.ng.geom.core.vector.zyz,thi.ng.geom.core.vector.yy,thi.ng.geom.core.vector.xxz,thi.ng.geom.core.vector.yzy,thi.ng.geom.core.vector.yz,thi.ng.geom.core.vector.yxx,thi.ng.geom.core.vector.xyy,thi.ng.geom.core.vector.xxy,thi.ng.geom.core.vector.zz,thi.ng.geom.core.vector.zzz,thi.ng.geom.core.vector.x,thi.ng.geom.core.vector.xzz,thi.ng.geom.core.vector.yxz,thi.ng.geom.core.vector.zxx,thi.ng.geom.core.vector.yzz,thi.ng.geom.core.vector.xyx,thi.ng.geom.core.vector.yxy,thi.ng.geom.core.vector.yyy,thi.ng.geom.core.vector.zyy]);
thi.ng.geom.core.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$core$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
var temp__4655__auto__ = (function (){var and__6474__auto__ = ((1) === c);
if(and__6474__auto__){
return keymap.call(null,cljs.core.first.call(null,n));
} else {
return and__6474__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var idx = temp__4655__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if(((c <= cljs.core.count.call(null,keymap))) && (((c === cljs.core.count.call(null,v))) && ((cljs.core.count.call(null,v) === cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,n)))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__4655__auto____$1 = keymap.call(null,cljs.core.first.call(null,n__$1));
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
(dest[(idx | (0))] = v.call(null,i));

var G__11853 = (i + (1));
var G__11854 = cljs.core.next.call(null,n__$1);
i = G__11853;
n__$1 = G__11854;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
thi.ng.geom.core.vector.vec2_reduce_STAR_ = (function thi$ng$geom$core$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__11859 = null;
var G__11859__1 = (function (a){
return a;
});
var G__11859__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__11859 = function(a,b){
switch(arguments.length){
case 1:
return G__11859__1.call(this,a);
case 2:
return G__11859__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11859.cljs$core$IFn$_invoke$arity$1 = G__11859__1;
G__11859.cljs$core$IFn$_invoke$arity$2 = G__11859__2;
return G__11859;
})()
,acc,xs);
});
thi.ng.geom.core.vector.vec3_reduce_STAR_ = (function thi$ng$geom$core$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__11871 = null;
var G__11871__1 = (function (a){
return a;
});
var G__11871__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__11871 = function(a,b){
switch(arguments.length){
case 1:
return G__11871__1.call(this,a);
case 2:
return G__11871__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11871.cljs$core$IFn$_invoke$arity$1 = G__11871__1;
G__11871.cljs$core$IFn$_invoke$arity$2 = G__11871__2;
return G__11871;
})()
,acc,xs);
});
thi.ng.geom.core.vector.V2 = (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.core.vector.V3 = (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.core.vector.vec2 = (function thi$ng$geom$core$vector$vec2(var_args){
var args11872 = [];
var len__7544__auto___11883 = arguments.length;
var i__7545__auto___11884 = (0);
while(true){
if((i__7545__auto___11884 < len__7544__auto___11883)){
args11872.push((arguments[i__7545__auto___11884]));

var G__11885 = (i__7545__auto___11884 + (1));
i__7545__auto___11884 = G__11885;
continue;
} else {
}
break;
}

var G__11874 = args11872.length;
switch (G__11874) {
case 0:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11872.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V2;
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2.call(null,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,null));
});

thi.ng.geom.core.vector.vec2.cljs$lang$maxFixedArity = 2;
thi.ng.geom.core.vector.vec3 = (function thi$ng$geom$core$vector$vec3(var_args){
var args11887 = [];
var len__7544__auto___11890 = arguments.length;
var i__7545__auto___11891 = (0);
while(true){
if((i__7545__auto___11891 < len__7544__auto___11890)){
args11887.push((arguments[i__7545__auto___11891]));

var G__11892 = (i__7545__auto___11891 + (1));
i__7545__auto___11891 = G__11892;
continue;
} else {
}
break;
}

var G__11889 = args11887.length;
switch (G__11889) {
case 0:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11887.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V3;
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.call(null,v,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.call(null,v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,null));
});

thi.ng.geom.core.vector.vec3.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.vector.vec2_with_meta = (function thi$ng$geom$core$vector$vec2_with_meta(var_args){
var args11902 = [];
var len__7544__auto___11905 = arguments.length;
var i__7545__auto___11906 = (0);
while(true){
if((i__7545__auto___11906 < len__7544__auto___11905)){
args11902.push((arguments[i__7545__auto___11906]));

var G__11907 = (i__7545__auto___11906 + (1));
i__7545__auto___11906 = G__11907;
continue;
} else {
}
break;
}

var G__11904 = args11902.length;
switch (G__11904) {
case 2:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11902.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,meta));
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.vector.vec3_with_meta = (function thi$ng$geom$core$vector$vec3_with_meta(var_args){
var args11909 = [];
var len__7544__auto___11915 = arguments.length;
var i__7545__auto___11916 = (0);
while(true){
if((i__7545__auto___11916 < len__7544__auto___11915)){
args11909.push((arguments[i__7545__auto___11916]));

var G__11917 = (i__7545__auto___11916 + (1));
i__7545__auto___11916 = G__11917;
continue;
} else {
}
break;
}

var G__11911 = args11909.length;
switch (G__11911) {
case 2:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11909.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,meta));
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.vector.vec2_QMARK_ = (function thi$ng$geom$core$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec2);
});
thi.ng.geom.core.vector.vec3_QMARK_ = (function thi$ng$geom$core$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec3);
});
thi.ng.geom.core.vector.V2X = thi.ng.geom.core.vector.vec2.call(null,(1),(0));
thi.ng.geom.core.vector.V2Y = thi.ng.geom.core.vector.vec2.call(null,(0),(1));
thi.ng.geom.core.vector.V3X = thi.ng.geom.core.vector.vec3.call(null,(1),(0),(0));
thi.ng.geom.core.vector.V3Y = thi.ng.geom.core.vector.vec3.call(null,(0),(1),(0));
thi.ng.geom.core.vector.V3Z = thi.ng.geom.core.vector.vec3.call(null,(0),(0),(1));
thi.ng.geom.core.vector.V2INF_ = thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.INF_);
thi.ng.geom.core.vector.V2INF_PLUS_ = thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.core.vector.V3INF_ = thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.INF_);
thi.ng.geom.core.vector.V3INF_PLUS_ = thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.core.vector.randvec2 = (function thi$ng$geom$core$vector$randvec2(var_args){
var args11922 = [];
var len__7544__auto___11928 = arguments.length;
var i__7545__auto___11929 = (0);
while(true){
if((i__7545__auto___11929 < len__7544__auto___11928)){
args11922.push((arguments[i__7545__auto___11929]));

var G__11930 = (i__7545__auto___11929 + (1));
i__7545__auto___11929 = G__11930;
continue;
} else {
}
break;
}

var G__11927 = args11922.length;
switch (G__11927) {
case 0:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11922.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.core.vector.randvec2.cljs$lang$maxFixedArity = 1;
thi.ng.geom.core.vector.randvec3 = (function thi$ng$geom$core$vector$randvec3(var_args){
var args11932 = [];
var len__7544__auto___11935 = arguments.length;
var i__7545__auto___11936 = (0);
while(true){
if((i__7545__auto___11936 < len__7544__auto___11935)){
args11932.push((arguments[i__7545__auto___11936]));

var G__11937 = (i__7545__auto___11936 + (1));
i__7545__auto___11936 = G__11937;
continue;
} else {
}
break;
}

var G__11934 = args11932.length;
switch (G__11934) {
case 0:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11932.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.core.vector.randvec3.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=vector.js.map