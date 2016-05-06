// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.rms_buffer');
goog.require('cljs.core');
goog.require('audio_utils.ring_buffer');

/**
 * Interface for implementations of RMS volume computation buffers.
 * @interface
 */
audio_utils.rms_buffer.IRMSBuffer = function(){};

/**
 * Adds a single sample to the RMS buffer
 */
audio_utils.rms_buffer.rms_push = (function audio_utils$rms_buffer$rms_push(this$,sample){
if((!((this$ == null))) && (!((this$.audio_utils$rms_buffer$IRMSBuffer$rms_push$arity$2 == null)))){
return this$.audio_utils$rms_buffer$IRMSBuffer$rms_push$arity$2(this$,sample);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.rms_buffer.rms_push[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$,sample);
} else {
var m__7142__auto____$1 = (audio_utils.rms_buffer.rms_push["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$,sample);
} else {
throw cljs.core.missing_protocol.call(null,"IRMSBuffer.rms-push",this$);
}
}
}
});

/**
 * Adds many samples to the RMS buffer
 */
audio_utils.rms_buffer.rms_push_many = (function audio_utils$rms_buffer$rms_push_many(this$,samples){
if((!((this$ == null))) && (!((this$.audio_utils$rms_buffer$IRMSBuffer$rms_push_many$arity$2 == null)))){
return this$.audio_utils$rms_buffer$IRMSBuffer$rms_push_many$arity$2(this$,samples);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.rms_buffer.rms_push_many[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$,samples);
} else {
var m__7142__auto____$1 = (audio_utils.rms_buffer.rms_push_many["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$,samples);
} else {
throw cljs.core.missing_protocol.call(null,"IRMSBuffer.rms-push-many",this$);
}
}
}
});

/**
 * Computes the RMS volume level based on
 *                               the samples in the buffer
 */
audio_utils.rms_buffer.rms = (function audio_utils$rms_buffer$rms(this$){
if((!((this$ == null))) && (!((this$.audio_utils$rms_buffer$IRMSBuffer$rms$arity$1 == null)))){
return this$.audio_utils$rms_buffer$IRMSBuffer$rms$arity$1(this$);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.rms_buffer.rms[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$);
} else {
var m__7142__auto____$1 = (audio_utils.rms_buffer.rms["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRMSBuffer.rms",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {audio_utils.rms_buffer.IRMSBuffer}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
audio_utils.rms_buffer.RMSBuffer = (function (size,samples,squared_sum,__meta,__extmap,__hash){
this.size = size;
this.samples = samples;
this.squared_sum = squared_sum;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7100__auto__,k__7101__auto__){
var self__ = this;
var this__7100__auto____$1 = this;
return cljs.core._lookup.call(null,this__7100__auto____$1,k__7101__auto__,null);
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7102__auto__,k11554,else__7103__auto__){
var self__ = this;
var this__7102__auto____$1 = this;
var G__11556 = (((k11554 instanceof cljs.core.Keyword))?k11554.fqn:null);
switch (G__11556) {
case "size":
return self__.size;

break;
case "samples":
return self__.samples;

break;
case "squared-sum":
return self__.squared_sum;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11554,else__7103__auto__);

}
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7114__auto__,writer__7115__auto__,opts__7116__auto__){
var self__ = this;
var this__7114__auto____$1 = this;
var pr_pair__7117__auto__ = ((function (this__7114__auto____$1){
return (function (keyval__7118__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7115__auto__,cljs.core.pr_writer,""," ","",opts__7116__auto__,keyval__7118__auto__);
});})(this__7114__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7115__auto__,pr_pair__7117__auto__,"#audio-utils.rms-buffer.RMSBuffer{",", ","}",opts__7116__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"samples","samples",635504833),self__.samples],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"squared-sum","squared-sum",809966250),self__.squared_sum],null))], null),self__.__extmap));
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$IIterable$ = true;

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11553){
var self__ = this;
var G__11553__$1 = this;
return (new cljs.core.RecordIter((0),G__11553__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"samples","samples",635504833),new cljs.core.Keyword(null,"squared-sum","squared-sum",809966250)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7098__auto__){
var self__ = this;
var this__7098__auto____$1 = this;
return self__.__meta;
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7094__auto__){
var self__ = this;
var this__7094__auto____$1 = this;
return (new audio_utils.rms_buffer.RMSBuffer(self__.size,self__.samples,self__.squared_sum,self__.__meta,self__.__extmap,self__.__hash));
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7104__auto__){
var self__ = this;
var this__7104__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7095__auto__){
var self__ = this;
var this__7095__auto____$1 = this;
var h__6921__auto__ = self__.__hash;
if(!((h__6921__auto__ == null))){
return h__6921__auto__;
} else {
var h__6921__auto____$1 = cljs.core.hash_imap.call(null,this__7095__auto____$1);
self__.__hash = h__6921__auto____$1;

return h__6921__auto____$1;
}
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7096__auto__,other__7097__auto__){
var self__ = this;
var this__7096__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6474__auto__ = other__7097__auto__;
if(cljs.core.truth_(and__6474__auto__)){
var and__6474__auto____$1 = (this__7096__auto____$1.constructor === other__7097__auto__.constructor);
if(and__6474__auto____$1){
return cljs.core.equiv_map.call(null,this__7096__auto____$1,other__7097__auto__);
} else {
return and__6474__auto____$1;
}
} else {
return and__6474__auto__;
}
})())){
return true;
} else {
return false;
}
});

audio_utils.rms_buffer.RMSBuffer.prototype.audio_utils$rms_buffer$IRMSBuffer$ = true;

audio_utils.rms_buffer.RMSBuffer.prototype.audio_utils$rms_buffer$IRMSBuffer$rms_push$arity$2 = (function (this$,sample){
var self__ = this;
var this$__$1 = this;
var n_samples = cljs.core.count.call(null,self__.samples);
var oldest = (((n_samples >= self__.size))?cljs.core.peek.call(null,self__.samples):(0));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"samples","samples",635504833),cljs.core.conj.call(null,(function (){var G__11557 = self__.samples;
if((n_samples >= self__.size)){
return cljs.core.pop.call(null,G__11557);
} else {
return G__11557;
}
})(),sample)),new cljs.core.Keyword(null,"squared-sum","squared-sum",809966250),((self__.squared_sum - (oldest * oldest)) + (sample * sample)));
});

audio_utils.rms_buffer.RMSBuffer.prototype.audio_utils$rms_buffer$IRMSBuffer$rms_push_many$arity$2 = (function (this$,samples__$1){
var self__ = this;
var this$__$1 = this;
var buf = this$__$1;
var xs = samples__$1;
while(true){
if(cljs.core.empty_QMARK_.call(null,xs)){
return buf;
} else {
var G__11562 = audio_utils.rms_buffer.rms_push.call(null,buf,cljs.core.first.call(null,xs));
var G__11563 = cljs.core.rest.call(null,xs);
buf = G__11562;
xs = G__11563;
continue;
}
break;
}
});

audio_utils.rms_buffer.RMSBuffer.prototype.audio_utils$rms_buffer$IRMSBuffer$rms$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.empty_QMARK_.call(null,self__.samples)){
return (0);
} else {
var sum_by_n = (self__.squared_sum / cljs.core.count.call(null,self__.samples));
return Math.sqrt(sum_by_n);
}
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7109__auto__,k__7110__auto__){
var self__ = this;
var this__7109__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"samples","samples",635504833),null,new cljs.core.Keyword(null,"squared-sum","squared-sum",809966250),null,new cljs.core.Keyword(null,"size","size",1098693007),null], null), null),k__7110__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7109__auto____$1),self__.__meta),k__7110__auto__);
} else {
return (new audio_utils.rms_buffer.RMSBuffer(self__.size,self__.samples,self__.squared_sum,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7110__auto__)),null));
}
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7107__auto__,k__7108__auto__,G__11553){
var self__ = this;
var this__7107__auto____$1 = this;
var pred__11558 = cljs.core.keyword_identical_QMARK_;
var expr__11559 = k__7108__auto__;
if(cljs.core.truth_(pred__11558.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__11559))){
return (new audio_utils.rms_buffer.RMSBuffer(G__11553,self__.samples,self__.squared_sum,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11558.call(null,new cljs.core.Keyword(null,"samples","samples",635504833),expr__11559))){
return (new audio_utils.rms_buffer.RMSBuffer(self__.size,G__11553,self__.squared_sum,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11558.call(null,new cljs.core.Keyword(null,"squared-sum","squared-sum",809966250),expr__11559))){
return (new audio_utils.rms_buffer.RMSBuffer(self__.size,self__.samples,G__11553,self__.__meta,self__.__extmap,null));
} else {
return (new audio_utils.rms_buffer.RMSBuffer(self__.size,self__.samples,self__.squared_sum,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7108__auto__,G__11553),null));
}
}
}
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7112__auto__){
var self__ = this;
var this__7112__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"samples","samples",635504833),self__.samples],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"squared-sum","squared-sum",809966250),self__.squared_sum],null))], null),self__.__extmap));
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7099__auto__,G__11553){
var self__ = this;
var this__7099__auto____$1 = this;
return (new audio_utils.rms_buffer.RMSBuffer(self__.size,self__.samples,self__.squared_sum,G__11553,self__.__extmap,self__.__hash));
});

audio_utils.rms_buffer.RMSBuffer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7105__auto__,entry__7106__auto__){
var self__ = this;
var this__7105__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7106__auto__)){
return cljs.core._assoc.call(null,this__7105__auto____$1,cljs.core._nth.call(null,entry__7106__auto__,(0)),cljs.core._nth.call(null,entry__7106__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7105__auto____$1,entry__7106__auto__);
}
});

audio_utils.rms_buffer.RMSBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"samples","samples",-2018930936,null),new cljs.core.Symbol(null,"squared-sum","squared-sum",-1844469519,null)], null);
});

audio_utils.rms_buffer.RMSBuffer.cljs$lang$type = true;

audio_utils.rms_buffer.RMSBuffer.cljs$lang$ctorPrSeq = (function (this__7134__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"audio-utils.rms-buffer/RMSBuffer");
});

audio_utils.rms_buffer.RMSBuffer.cljs$lang$ctorPrWriter = (function (this__7134__auto__,writer__7135__auto__){
return cljs.core._write.call(null,writer__7135__auto__,"audio-utils.rms-buffer/RMSBuffer");
});

audio_utils.rms_buffer.__GT_RMSBuffer = (function audio_utils$rms_buffer$__GT_RMSBuffer(size,samples,squared_sum){
return (new audio_utils.rms_buffer.RMSBuffer(size,samples,squared_sum,null,null,null));
});

audio_utils.rms_buffer.map__GT_RMSBuffer = (function audio_utils$rms_buffer$map__GT_RMSBuffer(G__11555){
return (new audio_utils.rms_buffer.RMSBuffer(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__11555),new cljs.core.Keyword(null,"samples","samples",635504833).cljs$core$IFn$_invoke$arity$1(G__11555),new cljs.core.Keyword(null,"squared-sum","squared-sum",809966250).cljs$core$IFn$_invoke$arity$1(G__11555),null,cljs.core.dissoc.call(null,G__11555,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"samples","samples",635504833),new cljs.core.Keyword(null,"squared-sum","squared-sum",809966250)),null));
});

/**
 * Allocates a new buffer for RMS computations
 */
audio_utils.rms_buffer.rms_buffer = (function audio_utils$rms_buffer$rms_buffer(size){
return audio_utils.rms_buffer.map__GT_RMSBuffer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"samples","samples",635504833),audio_utils.ring_buffer.ring_buffer.call(null,size),new cljs.core.Keyword(null,"squared-sum","squared-sum",809966250),(0)], null));
});
