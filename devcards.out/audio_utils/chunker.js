// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.chunker');
goog.require('cljs.core');
goog.require('audio_utils.worker');

/**
 * @interface
 */
audio_utils.chunker.IChunker = function(){};

audio_utils.chunker.process_samples = (function audio_utils$chunker$process_samples(this$,samples){
if((!((this$ == null))) && (!((this$.audio_utils$chunker$IChunker$process_samples$arity$2 == null)))){
return this$.audio_utils$chunker$IChunker$process_samples$arity$2(this$,samples);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.chunker.process_samples[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$,samples);
} else {
var m__7142__auto____$1 = (audio_utils.chunker.process_samples["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$,samples);
} else {
throw cljs.core.missing_protocol.call(null,"IChunker.process-samples",this$);
}
}
}
});

audio_utils.chunker.deliver_chunks = (function audio_utils$chunker$deliver_chunks(this$){
if((!((this$ == null))) && (!((this$.audio_utils$chunker$IChunker$deliver_chunks$arity$1 == null)))){
return this$.audio_utils$chunker$IChunker$deliver_chunks$arity$1(this$);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.chunker.deliver_chunks[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$);
} else {
var m__7142__auto____$1 = (audio_utils.chunker.deliver_chunks["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChunker.deliver-chunks",this$);
}
}
}
});

audio_utils.chunker.reset_chunks = (function audio_utils$chunker$reset_chunks(this$,n_channels){
if((!((this$ == null))) && (!((this$.audio_utils$chunker$IChunker$reset_chunks$arity$2 == null)))){
return this$.audio_utils$chunker$IChunker$reset_chunks$arity$2(this$,n_channels);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.chunker.reset_chunks[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$,n_channels);
} else {
var m__7142__auto____$1 = (audio_utils.chunker.reset_chunks["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$,n_channels);
} else {
throw cljs.core.missing_protocol.call(null,"IChunker.reset-chunks",this$);
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
 * @implements {audio_utils.worker.IWorkerAudioNode}
 * @implements {audio_utils.chunker.IChunker}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
audio_utils.chunker.Chunker = (function (samples_per_chunk,next,chunks,__meta,__extmap,__hash){
this.samples_per_chunk = samples_per_chunk;
this.next = next;
this.chunks = chunks;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
audio_utils.chunker.Chunker.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7100__auto__,k__7101__auto__){
var self__ = this;
var this__7100__auto____$1 = this;
return cljs.core._lookup.call(null,this__7100__auto____$1,k__7101__auto__,null);
});

audio_utils.chunker.Chunker.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7102__auto__,k7898,else__7103__auto__){
var self__ = this;
var this__7102__auto____$1 = this;
var G__7913 = (((k7898 instanceof cljs.core.Keyword))?k7898.fqn:null);
switch (G__7913) {
case "samples-per-chunk":
return self__.samples_per_chunk;

break;
case "next":
return self__.next;

break;
case "chunks":
return self__.chunks;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7898,else__7103__auto__);

}
});

audio_utils.chunker.Chunker.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7114__auto__,writer__7115__auto__,opts__7116__auto__){
var self__ = this;
var this__7114__auto____$1 = this;
var pr_pair__7117__auto__ = ((function (this__7114__auto____$1){
return (function (keyval__7118__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7115__auto__,cljs.core.pr_writer,""," ","",opts__7116__auto__,keyval__7118__auto__);
});})(this__7114__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7115__auto__,pr_pair__7117__auto__,"#audio-utils.chunker.Chunker{",", ","}",opts__7116__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"samples-per-chunk","samples-per-chunk",-184645826),self__.samples_per_chunk],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next","next",-117701485),self__.next],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chunks","chunks",83720431),self__.chunks],null))], null),self__.__extmap));
});

audio_utils.chunker.Chunker.prototype.cljs$core$IIterable$ = true;

audio_utils.chunker.Chunker.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7897){
var self__ = this;
var G__7897__$1 = this;
return (new cljs.core.RecordIter((0),G__7897__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples-per-chunk","samples-per-chunk",-184645826),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"chunks","chunks",83720431)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

audio_utils.chunker.Chunker.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7098__auto__){
var self__ = this;
var this__7098__auto____$1 = this;
return self__.__meta;
});

audio_utils.chunker.Chunker.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7094__auto__){
var self__ = this;
var this__7094__auto____$1 = this;
return (new audio_utils.chunker.Chunker(self__.samples_per_chunk,self__.next,self__.chunks,self__.__meta,self__.__extmap,self__.__hash));
});

audio_utils.chunker.Chunker.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7104__auto__){
var self__ = this;
var this__7104__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

audio_utils.chunker.Chunker.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7095__auto__){
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

audio_utils.chunker.Chunker.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7096__auto__,other__7097__auto__){
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

audio_utils.chunker.Chunker.prototype.audio_utils$worker$IWorkerAudioNode$ = true;

audio_utils.chunker.Chunker.prototype.audio_utils$worker$IWorkerAudioNode$connect$arity$2 = (function (this$,destination){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,self__.next,destination);
});

audio_utils.chunker.Chunker.prototype.audio_utils$worker$IWorkerAudioNode$disconnect$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,self__.next,null);
});

audio_utils.chunker.Chunker.prototype.audio_utils$worker$IWorkerAudioNode$process_audio$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
var n_samples = cljs.core.count.call(null,cljs.core.first.call(null,data));
var n_channels = cljs.core.count.call(null,data);
var n__7389__auto__ = n_samples;
var n = (0);
while(true){
if((n < n__7389__auto__)){
var samples_7999 = cljs.core.mapv.call(null,((function (n,n__7389__auto__,n_samples,n_channels,this$__$1){
return (function (p1__7890_SHARP_){
return data.call(null,p1__7890_SHARP_).call(null,n);
});})(n,n__7389__auto__,n_samples,n_channels,this$__$1))
,cljs.core.range.call(null,(0),n_channels));
audio_utils.chunker.process_samples.call(null,this$__$1,samples_7999);

var G__8004 = (n + (1));
n = G__8004;
continue;
} else {
return null;
}
break;
}
});

audio_utils.chunker.Chunker.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7109__auto__,k__7110__auto__){
var self__ = this;
var this__7109__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chunks","chunks",83720431),null,new cljs.core.Keyword(null,"next","next",-117701485),null,new cljs.core.Keyword(null,"samples-per-chunk","samples-per-chunk",-184645826),null], null), null),k__7110__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7109__auto____$1),self__.__meta),k__7110__auto__);
} else {
return (new audio_utils.chunker.Chunker(self__.samples_per_chunk,self__.next,self__.chunks,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7110__auto__)),null));
}
});

audio_utils.chunker.Chunker.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7107__auto__,k__7108__auto__,G__7897){
var self__ = this;
var this__7107__auto____$1 = this;
var pred__7944 = cljs.core.keyword_identical_QMARK_;
var expr__7945 = k__7108__auto__;
if(cljs.core.truth_(pred__7944.call(null,new cljs.core.Keyword(null,"samples-per-chunk","samples-per-chunk",-184645826),expr__7945))){
return (new audio_utils.chunker.Chunker(G__7897,self__.next,self__.chunks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7944.call(null,new cljs.core.Keyword(null,"next","next",-117701485),expr__7945))){
return (new audio_utils.chunker.Chunker(self__.samples_per_chunk,G__7897,self__.chunks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7944.call(null,new cljs.core.Keyword(null,"chunks","chunks",83720431),expr__7945))){
return (new audio_utils.chunker.Chunker(self__.samples_per_chunk,self__.next,G__7897,self__.__meta,self__.__extmap,null));
} else {
return (new audio_utils.chunker.Chunker(self__.samples_per_chunk,self__.next,self__.chunks,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7108__auto__,G__7897),null));
}
}
}
});

audio_utils.chunker.Chunker.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7112__auto__){
var self__ = this;
var this__7112__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"samples-per-chunk","samples-per-chunk",-184645826),self__.samples_per_chunk],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next","next",-117701485),self__.next],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chunks","chunks",83720431),self__.chunks],null))], null),self__.__extmap));
});

audio_utils.chunker.Chunker.prototype.audio_utils$chunker$IChunker$ = true;

audio_utils.chunker.Chunker.prototype.audio_utils$chunker$IChunker$process_samples$arity$2 = (function (this$,samples){
var self__ = this;
var this$__$1 = this;
var n__7389__auto___8023 = cljs.core.count.call(null,samples);
var channel_8024 = (0);
while(true){
if((channel_8024 < n__7389__auto___8023)){
var sample_8029 = samples.call(null,channel_8024);
cljs.core.swap_BANG_.call(null,self__.chunks,cljs.core.update,channel_8024,cljs.core.conj,sample_8029);

var G__8031 = (channel_8024 + (1));
channel_8024 = G__8031;
continue;
} else {
}
break;
}

if((cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,self__.chunks))) >= self__.samples_per_chunk)){
audio_utils.chunker.deliver_chunks.call(null,this$__$1);

return audio_utils.chunker.reset_chunks.call(null,this$__$1,cljs.core.count.call(null,samples));
} else {
return null;
}
});

audio_utils.chunker.Chunker.prototype.audio_utils$chunker$IChunker$deliver_chunks$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__7956 = cljs.core.deref.call(null,self__.next);
if((G__7956 == null)){
return null;
} else {
return audio_utils.worker.process_audio.call(null,G__7956,cljs.core.deref.call(null,self__.chunks));
}
});

audio_utils.chunker.Chunker.prototype.audio_utils$chunker$IChunker$reset_chunks$arity$2 = (function (this$,n_channels){
var self__ = this;
var this$__$1 = this;
var empty_chunks = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,n_channels,cljs.core.PersistentVector.EMPTY));
return cljs.core.reset_BANG_.call(null,self__.chunks,empty_chunks);
});

audio_utils.chunker.Chunker.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7099__auto__,G__7897){
var self__ = this;
var this__7099__auto____$1 = this;
return (new audio_utils.chunker.Chunker(self__.samples_per_chunk,self__.next,self__.chunks,G__7897,self__.__extmap,self__.__hash));
});

audio_utils.chunker.Chunker.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7105__auto__,entry__7106__auto__){
var self__ = this;
var this__7105__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7106__auto__)){
return cljs.core._assoc.call(null,this__7105__auto____$1,cljs.core._nth.call(null,entry__7106__auto__,(0)),cljs.core._nth.call(null,entry__7106__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7105__auto____$1,entry__7106__auto__);
}
});

audio_utils.chunker.Chunker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"samples-per-chunk","samples-per-chunk",1455885701,null),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"chunks","chunks",1724251958,null)], null);
});

audio_utils.chunker.Chunker.cljs$lang$type = true;

audio_utils.chunker.Chunker.cljs$lang$ctorPrSeq = (function (this__7134__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"audio-utils.chunker/Chunker");
});

audio_utils.chunker.Chunker.cljs$lang$ctorPrWriter = (function (this__7134__auto__,writer__7135__auto__){
return cljs.core._write.call(null,writer__7135__auto__,"audio-utils.chunker/Chunker");
});

audio_utils.chunker.__GT_Chunker = (function audio_utils$chunker$__GT_Chunker(samples_per_chunk,next,chunks){
return (new audio_utils.chunker.Chunker(samples_per_chunk,next,chunks,null,null,null));
});

audio_utils.chunker.map__GT_Chunker = (function audio_utils$chunker$map__GT_Chunker(G__7902){
return (new audio_utils.chunker.Chunker(new cljs.core.Keyword(null,"samples-per-chunk","samples-per-chunk",-184645826).cljs$core$IFn$_invoke$arity$1(G__7902),new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(G__7902),new cljs.core.Keyword(null,"chunks","chunks",83720431).cljs$core$IFn$_invoke$arity$1(G__7902),null,cljs.core.dissoc.call(null,G__7902,new cljs.core.Keyword(null,"samples-per-chunk","samples-per-chunk",-184645826),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"chunks","chunks",83720431)),null));
});

audio_utils.chunker.chunker = (function audio_utils$chunker$chunker(p__8060){
var map__8069 = p__8060;
var map__8069__$1 = ((((!((map__8069 == null)))?((((map__8069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8069):map__8069);
var samples_per_chunk = cljs.core.get.call(null,map__8069__$1,new cljs.core.Keyword(null,"samples-per-chunk","samples-per-chunk",-184645826),(4410));
return audio_utils.chunker.map__GT_Chunker.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"samples-per-chunk","samples-per-chunk",-184645826),samples_per_chunk,new cljs.core.Keyword(null,"next","next",-117701485),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"chunks","chunks",83720431),cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null))], null));
});

//# sourceMappingURL=chunker.js.map