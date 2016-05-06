// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.ring_buffer');
goog.require('cljs.core');
goog.require('audio_utils.util');

/**
 * @interface
 */
audio_utils.ring_buffer.IBufferSize = function(){};

audio_utils.ring_buffer.buffer_size = (function audio_utils$ring_buffer$buffer_size(this$){
if((!((this$ == null))) && (!((this$.audio_utils$ring_buffer$IBufferSize$buffer_size$arity$1 == null)))){
return this$.audio_utils$ring_buffer$IBufferSize$buffer_size$arity$1(this$);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.ring_buffer.buffer_size[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$);
} else {
var m__7142__auto____$1 = (audio_utils.ring_buffer.buffer_size["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IBufferSize.buffer-size",this$);
}
}
}
});


/**
* @constructor
 * @implements {audio_utils.ring_buffer.IBufferSize}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
*/
audio_utils.ring_buffer.RingBuffer = (function (start,length,samples,meta){
this.start = start;
this.length = length;
this.samples = samples;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 27533326;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
audio_utils.ring_buffer.RingBuffer.prototype.audio_utils$ring_buffer$IBufferSize$ = true;

audio_utils.ring_buffer.RingBuffer.prototype.audio_utils$ring_buffer$IBufferSize$buffer_size$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.samples.length;
});

audio_utils.ring_buffer.RingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return audio_utils.util.aderef.call(null,self__.length);
});

audio_utils.ring_buffer.RingBuffer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return (new audio_utils.ring_buffer.RingBuffer(self__.start,self__.length,self__.samples,m));
});

audio_utils.ring_buffer.RingBuffer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new audio_utils.ring_buffer.RingBuffer(audio_utils.util.aatom.call(null,(0)),audio_utils.util.aatom.call(null,(0)),cljs.core.double_array.call(null,audio_utils.ring_buffer.buffer_size.call(null,this$__$1)),self__.meta));
});

audio_utils.ring_buffer.RingBuffer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (cljs.core.sequential_QMARK_.call(null,other)) && ((!(cljs.core.counted_QMARK_.call(null,other))) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,this$__$1),cljs.core.count.call(null,other)))) && (cljs.core._EQ_.call(null,cljs.core.seq.call(null,this$__$1),cljs.core.seq.call(null,other)));
});

audio_utils.ring_buffer.RingBuffer.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,(0),audio_utils.util.aderef.call(null,self__.length))){
return null;
} else {
return (self__.samples[audio_utils.util.aderef.call(null,self__.start)]);
}
});

audio_utils.ring_buffer.RingBuffer.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,(0),audio_utils.util.aderef.call(null,self__.length))){
} else {
audio_utils.util.aswap_BANG_.call(null,self__.start,((function (this$__$1){
return (function (p1__11538_SHARP_){
return cljs.core.mod.call(null,(p1__11538_SHARP_ + (1)),audio_utils.ring_buffer.buffer_size.call(null,this$__$1));
});})(this$__$1))
);

audio_utils.util.aswap_BANG_.call(null,self__.length,cljs.core.dec);
}

return this$__$1;
});

audio_utils.ring_buffer.RingBuffer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if((audio_utils.util.aderef.call(null,self__.length) >= audio_utils.ring_buffer.buffer_size.call(null,this$__$1))){
(self__.samples[audio_utils.util.aderef.call(null,self__.start)] = x);

audio_utils.util.aswap_BANG_.call(null,self__.start,((function (this$__$1){
return (function (p1__11539_SHARP_){
return cljs.core.rem.call(null,(p1__11539_SHARP_ + (1)),audio_utils.ring_buffer.buffer_size.call(null,this$__$1));
});})(this$__$1))
);
} else {
(self__.samples[cljs.core.rem.call(null,(audio_utils.util.aderef.call(null,self__.start) + audio_utils.util.aderef.call(null,self__.length)),audio_utils.ring_buffer.buffer_size.call(null,this$__$1))] = x);

audio_utils.util.aswap_BANG_.call(null,self__.length,cljs.core.inc);
}

return this$__$1;
});

audio_utils.ring_buffer.RingBuffer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__7258__auto__ = ((function (this$__$1){
return (function audio_utils$ring_buffer$iter__11543(s__11544){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__11544__$1 = s__11544;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11544__$1);
if(temp__4657__auto__){
var s__11544__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11544__$2)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,s__11544__$2);
var size__7257__auto__ = cljs.core.count.call(null,c__7256__auto__);
var b__11546 = cljs.core.chunk_buffer.call(null,size__7257__auto__);
if((function (){var i__11545 = (0);
while(true){
if((i__11545 < size__7257__auto__)){
var i = cljs.core._nth.call(null,c__7256__auto__,i__11545);
cljs.core.chunk_append.call(null,b__11546,(self__.samples[cljs.core.rem.call(null,(audio_utils.util.aderef.call(null,self__.start) + i),audio_utils.ring_buffer.buffer_size.call(null,this$__$1))]));

var G__11550 = (i__11545 + (1));
i__11545 = G__11550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11546),audio_utils$ring_buffer$iter__11543.call(null,cljs.core.chunk_rest.call(null,s__11544__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11546),null);
}
} else {
var i = cljs.core.first.call(null,s__11544__$2);
return cljs.core.cons.call(null,(self__.samples[cljs.core.rem.call(null,(audio_utils.util.aderef.call(null,self__.start) + i),audio_utils.ring_buffer.buffer_size.call(null,this$__$1))]),audio_utils$ring_buffer$iter__11543.call(null,cljs.core.rest.call(null,s__11544__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7258__auto__.call(null,cljs.core.range.call(null,audio_utils.util.aderef.call(null,self__.length)));
})());
});

audio_utils.ring_buffer.RingBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"length","length",-2065447907,null),new cljs.core.Symbol(null,"samples","samples",-2018930936,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
});

audio_utils.ring_buffer.RingBuffer.cljs$lang$type = true;

audio_utils.ring_buffer.RingBuffer.cljs$lang$ctorStr = "audio-utils.ring-buffer/RingBuffer";

audio_utils.ring_buffer.RingBuffer.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"audio-utils.ring-buffer/RingBuffer");
});

audio_utils.ring_buffer.__GT_RingBuffer = (function audio_utils$ring_buffer$__GT_RingBuffer(start,length,samples,meta){
return (new audio_utils.ring_buffer.RingBuffer(start,length,samples,meta));
});

audio_utils.ring_buffer.ring_buffer = (function audio_utils$ring_buffer$ring_buffer(size){
if((size > (1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),(1))))].join('')));
}

return (new audio_utils.ring_buffer.RingBuffer(audio_utils.util.aatom.call(null,(0)),audio_utils.util.aatom.call(null,(0)),cljs.core.double_array.call(null,size,0.0),null));
});
