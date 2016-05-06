// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.gate');
goog.require('cljs.core');
goog.require('audio_utils.ring_buffer');
goog.require('audio_utils.rms_buffer');
goog.require('audio_utils.util');
goog.require('audio_utils.worker');

/**
 * @interface
 */
audio_utils.gate.IGate = function(){};

audio_utils.gate.generate_output_sample = (function audio_utils$gate$generate_output_sample(this$,channel,input_sample){
if((!((this$ == null))) && (!((this$.audio_utils$gate$IGate$generate_output_sample$arity$3 == null)))){
return this$.audio_utils$gate$IGate$generate_output_sample$arity$3(this$,channel,input_sample);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.gate.generate_output_sample[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$,channel,input_sample);
} else {
var m__7142__auto____$1 = (audio_utils.gate.generate_output_sample["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$,channel,input_sample);
} else {
throw cljs.core.missing_protocol.call(null,"IGate.generate-output-sample",this$);
}
}
}
});

audio_utils.gate.add_to_rms = (function audio_utils$gate$add_to_rms(this$,channel,sample){
if((!((this$ == null))) && (!((this$.audio_utils$gate$IGate$add_to_rms$arity$3 == null)))){
return this$.audio_utils$gate$IGate$add_to_rms$arity$3(this$,channel,sample);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.gate.add_to_rms[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$,channel,sample);
} else {
var m__7142__auto____$1 = (audio_utils.gate.add_to_rms["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$,channel,sample);
} else {
throw cljs.core.missing_protocol.call(null,"IGate.add-to-rms",this$);
}
}
}
});

audio_utils.gate.calculate_rms = (function audio_utils$gate$calculate_rms(this$,channel){
if((!((this$ == null))) && (!((this$.audio_utils$gate$IGate$calculate_rms$arity$2 == null)))){
return this$.audio_utils$gate$IGate$calculate_rms$arity$2(this$,channel);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.gate.calculate_rms[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$,channel);
} else {
var m__7142__auto____$1 = (audio_utils.gate.calculate_rms["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$,channel);
} else {
throw cljs.core.missing_protocol.call(null,"IGate.calculate-rms",this$);
}
}
}
});

audio_utils.gate.queue_in_buffer = (function audio_utils$gate$queue_in_buffer(this$,channel,sample){
if((!((this$ == null))) && (!((this$.audio_utils$gate$IGate$queue_in_buffer$arity$3 == null)))){
return this$.audio_utils$gate$IGate$queue_in_buffer$arity$3(this$,channel,sample);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.gate.queue_in_buffer[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$,channel,sample);
} else {
var m__7142__auto____$1 = (audio_utils.gate.queue_in_buffer["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$,channel,sample);
} else {
throw cljs.core.missing_protocol.call(null,"IGate.queue-in-buffer",this$);
}
}
}
});

audio_utils.gate.dequeue_from_buffer = (function audio_utils$gate$dequeue_from_buffer(this$,channel){
if((!((this$ == null))) && (!((this$.audio_utils$gate$IGate$dequeue_from_buffer$arity$2 == null)))){
return this$.audio_utils$gate$IGate$dequeue_from_buffer$arity$2(this$,channel);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.gate.dequeue_from_buffer[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$,channel);
} else {
var m__7142__auto____$1 = (audio_utils.gate.dequeue_from_buffer["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$,channel);
} else {
throw cljs.core.missing_protocol.call(null,"IGate.dequeue-from-buffer",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {audio_utils.gate.IGate}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {audio_utils.worker.IWorkerAudioNode}
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
audio_utils.gate.Gate = (function (config,next,buffers,rms_buffers,samples_held,__meta,__extmap,__hash){
this.config = config;
this.next = next;
this.buffers = buffers;
this.rms_buffers = rms_buffers;
this.samples_held = samples_held;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
audio_utils.gate.Gate.prototype.audio_utils$gate$IGate$ = true;

audio_utils.gate.Gate.prototype.audio_utils$gate$IGate$generate_output_sample$arity$3 = (function (this$,channel,input_sample){
var self__ = this;
var this$__$1 = this;
audio_utils.gate.queue_in_buffer.call(null,this$__$1,channel,input_sample);

audio_utils.gate.add_to_rms.call(null,this$__$1,channel,input_sample);

var threshold = audio_utils.util.db__GT_amplitude.call(null,new cljs.core.Keyword(null,"threshold","threshold",204221583).cljs$core$IFn$_invoke$arity$1(self__.config));
var hold = audio_utils.util.time__GT_samples.call(null,new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(self__.config),new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554).cljs$core$IFn$_invoke$arity$1(self__.config));
if((audio_utils.gate.calculate_rms.call(null,this$__$1,channel) >= threshold)){
audio_utils.util._GT__GT_.call(null,self__.samples_held,(0));

return audio_utils.gate.dequeue_from_buffer.call(null,this$__$1,channel);
} else {
if((audio_utils.util._LT__LT_.call(null,self__.samples_held) <= hold)){
audio_utils.util.aswap_BANG_.call(null,self__.samples_held,cljs.core.inc);

return input_sample;
} else {
return 0.0;
}
}
});

audio_utils.gate.Gate.prototype.audio_utils$gate$IGate$add_to_rms$arity$3 = (function (this$,channel,sample){
var self__ = this;
var this$__$1 = this;
return audio_utils.util.aswap_BANG_.call(null,self__.rms_buffers,cljs.core.update,channel,((function (this$__$1){
return (function (buffer){
var window = (function (){var x__6817__auto__ = (2);
var y__6818__auto__ = audio_utils.util.time__GT_samples.call(null,new cljs.core.Keyword(null,"rms-window","rms-window",-1227165349).cljs$core$IFn$_invoke$arity$1(self__.config),new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554).cljs$core$IFn$_invoke$arity$1(self__.config));
return ((x__6817__auto__ > y__6818__auto__) ? x__6817__auto__ : y__6818__auto__);
})();
var buffer__$1 = (function (){var or__6486__auto__ = buffer;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return audio_utils.rms_buffer.rms_buffer.call(null,window);
}
})();
return audio_utils.rms_buffer.rms_push.call(null,buffer__$1,sample);
});})(this$__$1))
);
});

audio_utils.gate.Gate.prototype.audio_utils$gate$IGate$calculate_rms$arity$2 = (function (this$,channel){
var self__ = this;
var this$__$1 = this;
return audio_utils.rms_buffer.rms.call(null,audio_utils.util._LT__LT_.call(null,self__.rms_buffers).call(null,channel));
});

audio_utils.gate.Gate.prototype.audio_utils$gate$IGate$queue_in_buffer$arity$3 = (function (this$,channel,sample){
var self__ = this;
var this$__$1 = this;
return audio_utils.util.aswap_BANG_.call(null,self__.buffers,cljs.core.update,channel,((function (this$__$1){
return (function (buffer){
var size = (function (){var x__6817__auto__ = (2);
var y__6818__auto__ = audio_utils.util.time__GT_samples.call(null,new cljs.core.Keyword(null,"look-ahead","look-ahead",344278596).cljs$core$IFn$_invoke$arity$1(self__.config),new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554).cljs$core$IFn$_invoke$arity$1(self__.config));
return ((x__6817__auto__ > y__6818__auto__) ? x__6817__auto__ : y__6818__auto__);
})();
var buffer__$1 = (function (){var or__6486__auto__ = buffer;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return audio_utils.ring_buffer.ring_buffer.call(null,size);
}
})();
return cljs.core.conj.call(null,buffer__$1,sample);
});})(this$__$1))
);
});

audio_utils.gate.Gate.prototype.audio_utils$gate$IGate$dequeue_from_buffer$arity$2 = (function (this$,channel){
var self__ = this;
var this$__$1 = this;
var buffer = audio_utils.util._LT__LT_.call(null,self__.buffers).call(null,channel);
var sample = cljs.core.peek.call(null,buffer);
cljs.core.pop.call(null,buffer);

return sample;
});

audio_utils.gate.Gate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7100__auto__,k__7101__auto__){
var self__ = this;
var this__7100__auto____$1 = this;
return cljs.core._lookup.call(null,this__7100__auto____$1,k__7101__auto__,null);
});

audio_utils.gate.Gate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7102__auto__,k23847,else__7103__auto__){
var self__ = this;
var this__7102__auto____$1 = this;
var G__23849 = (((k23847 instanceof cljs.core.Keyword))?k23847.fqn:null);
switch (G__23849) {
case "config":
return self__.config;

break;
case "next":
return self__.next;

break;
case "buffers":
return self__.buffers;

break;
case "rms-buffers":
return self__.rms_buffers;

break;
case "samples-held":
return self__.samples_held;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23847,else__7103__auto__);

}
});

audio_utils.gate.Gate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7114__auto__,writer__7115__auto__,opts__7116__auto__){
var self__ = this;
var this__7114__auto____$1 = this;
var pr_pair__7117__auto__ = ((function (this__7114__auto____$1){
return (function (keyval__7118__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7115__auto__,cljs.core.pr_writer,""," ","",opts__7116__auto__,keyval__7118__auto__);
});})(this__7114__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7115__auto__,pr_pair__7117__auto__,"#audio-utils.gate.Gate{",", ","}",opts__7116__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next","next",-117701485),self__.next],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffers","buffers",471409492),self__.buffers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rms-buffers","rms-buffers",-1681500464),self__.rms_buffers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"samples-held","samples-held",-1945118922),self__.samples_held],null))], null),self__.__extmap));
});

audio_utils.gate.Gate.prototype.cljs$core$IIterable$ = true;

audio_utils.gate.Gate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23846){
var self__ = this;
var G__23846__$1 = this;
return (new cljs.core.RecordIter((0),G__23846__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"buffers","buffers",471409492),new cljs.core.Keyword(null,"rms-buffers","rms-buffers",-1681500464),new cljs.core.Keyword(null,"samples-held","samples-held",-1945118922)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

audio_utils.gate.Gate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7098__auto__){
var self__ = this;
var this__7098__auto____$1 = this;
return self__.__meta;
});

audio_utils.gate.Gate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7094__auto__){
var self__ = this;
var this__7094__auto____$1 = this;
return (new audio_utils.gate.Gate(self__.config,self__.next,self__.buffers,self__.rms_buffers,self__.samples_held,self__.__meta,self__.__extmap,self__.__hash));
});

audio_utils.gate.Gate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7104__auto__){
var self__ = this;
var this__7104__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

audio_utils.gate.Gate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7095__auto__){
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

audio_utils.gate.Gate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7096__auto__,other__7097__auto__){
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

audio_utils.gate.Gate.prototype.audio_utils$worker$IWorkerAudioNode$ = true;

audio_utils.gate.Gate.prototype.audio_utils$worker$IWorkerAudioNode$connect$arity$2 = (function (this$,destination){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,self__.next,destination);
});

audio_utils.gate.Gate.prototype.audio_utils$worker$IWorkerAudioNode$disconnect$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,self__.next,null);
});

audio_utils.gate.Gate.prototype.audio_utils$worker$IWorkerAudioNode$process_audio$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
var n_samples = cljs.core.count.call(null,cljs.core.first.call(null,data));
var n_channels = cljs.core.count.call(null,data);
var output = cljs.core.volatile_BANG_.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,n_channels,cljs.core.PersistentVector.EMPTY)));
var n__7389__auto___23879 = n_samples;
var n_23880 = (0);
while(true){
if((n_23880 < n__7389__auto___23879)){
var n__7389__auto___23881__$1 = n_channels;
var channel_23882 = (0);
while(true){
if((channel_23882 < n__7389__auto___23881__$1)){
var input_sample_23883 = data.call(null,channel_23882).call(null,n_23880);
var output_sample_23884 = audio_utils.gate.generate_output_sample.call(null,this$__$1,channel_23882,input_sample_23883);
cljs.core._vreset_BANG_.call(null,output,cljs.core.update.call(null,cljs.core._deref.call(null,output),channel_23882,cljs.core.conj,output_sample_23884));

var G__23887 = (channel_23882 + (1));
channel_23882 = G__23887;
continue;
} else {
}
break;
}

var G__23888 = (n_23880 + (1));
n_23880 = G__23888;
continue;
} else {
}
break;
}

var G__23856 = cljs.core.deref.call(null,self__.next);
if((G__23856 == null)){
return null;
} else {
return audio_utils.worker.process_audio.call(null,G__23856,cljs.core.deref.call(null,output));
}
});

audio_utils.gate.Gate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7109__auto__,k__7110__auto__){
var self__ = this;
var this__7109__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"rms-buffers","rms-buffers",-1681500464),null,new cljs.core.Keyword(null,"next","next",-117701485),null,new cljs.core.Keyword(null,"buffers","buffers",471409492),null,new cljs.core.Keyword(null,"samples-held","samples-held",-1945118922),null], null), null),k__7110__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7109__auto____$1),self__.__meta),k__7110__auto__);
} else {
return (new audio_utils.gate.Gate(self__.config,self__.next,self__.buffers,self__.rms_buffers,self__.samples_held,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7110__auto__)),null));
}
});

audio_utils.gate.Gate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7107__auto__,k__7108__auto__,G__23846){
var self__ = this;
var this__7107__auto____$1 = this;
var pred__23857 = cljs.core.keyword_identical_QMARK_;
var expr__23858 = k__7108__auto__;
if(cljs.core.truth_(pred__23857.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__23858))){
return (new audio_utils.gate.Gate(G__23846,self__.next,self__.buffers,self__.rms_buffers,self__.samples_held,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23857.call(null,new cljs.core.Keyword(null,"next","next",-117701485),expr__23858))){
return (new audio_utils.gate.Gate(self__.config,G__23846,self__.buffers,self__.rms_buffers,self__.samples_held,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23857.call(null,new cljs.core.Keyword(null,"buffers","buffers",471409492),expr__23858))){
return (new audio_utils.gate.Gate(self__.config,self__.next,G__23846,self__.rms_buffers,self__.samples_held,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23857.call(null,new cljs.core.Keyword(null,"rms-buffers","rms-buffers",-1681500464),expr__23858))){
return (new audio_utils.gate.Gate(self__.config,self__.next,self__.buffers,G__23846,self__.samples_held,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23857.call(null,new cljs.core.Keyword(null,"samples-held","samples-held",-1945118922),expr__23858))){
return (new audio_utils.gate.Gate(self__.config,self__.next,self__.buffers,self__.rms_buffers,G__23846,self__.__meta,self__.__extmap,null));
} else {
return (new audio_utils.gate.Gate(self__.config,self__.next,self__.buffers,self__.rms_buffers,self__.samples_held,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7108__auto__,G__23846),null));
}
}
}
}
}
});

audio_utils.gate.Gate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7112__auto__){
var self__ = this;
var this__7112__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next","next",-117701485),self__.next],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffers","buffers",471409492),self__.buffers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rms-buffers","rms-buffers",-1681500464),self__.rms_buffers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"samples-held","samples-held",-1945118922),self__.samples_held],null))], null),self__.__extmap));
});

audio_utils.gate.Gate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7099__auto__,G__23846){
var self__ = this;
var this__7099__auto____$1 = this;
return (new audio_utils.gate.Gate(self__.config,self__.next,self__.buffers,self__.rms_buffers,self__.samples_held,G__23846,self__.__extmap,self__.__hash));
});

audio_utils.gate.Gate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7105__auto__,entry__7106__auto__){
var self__ = this;
var this__7105__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7106__auto__)){
return cljs.core._assoc.call(null,this__7105__auto____$1,cljs.core._nth.call(null,entry__7106__auto__,(0)),cljs.core._nth.call(null,entry__7106__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7105__auto____$1,entry__7106__auto__);
}
});

audio_utils.gate.Gate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"buffers","buffers",2111941019,null),new cljs.core.Symbol(null,"rms-buffers","rms-buffers",-40968937,null),new cljs.core.Symbol(null,"samples-held","samples-held",-304587395,null)], null);
});

audio_utils.gate.Gate.cljs$lang$type = true;

audio_utils.gate.Gate.cljs$lang$ctorPrSeq = (function (this__7134__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"audio-utils.gate/Gate");
});

audio_utils.gate.Gate.cljs$lang$ctorPrWriter = (function (this__7134__auto__,writer__7135__auto__){
return cljs.core._write.call(null,writer__7135__auto__,"audio-utils.gate/Gate");
});

audio_utils.gate.__GT_Gate = (function audio_utils$gate$__GT_Gate(config,next,buffers,rms_buffers,samples_held){
return (new audio_utils.gate.Gate(config,next,buffers,rms_buffers,samples_held,null,null,null));
});

audio_utils.gate.map__GT_Gate = (function audio_utils$gate$map__GT_Gate(G__23848){
return (new audio_utils.gate.Gate(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__23848),new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(G__23848),new cljs.core.Keyword(null,"buffers","buffers",471409492).cljs$core$IFn$_invoke$arity$1(G__23848),new cljs.core.Keyword(null,"rms-buffers","rms-buffers",-1681500464).cljs$core$IFn$_invoke$arity$1(G__23848),new cljs.core.Keyword(null,"samples-held","samples-held",-1945118922).cljs$core$IFn$_invoke$arity$1(G__23848),null,cljs.core.dissoc.call(null,G__23848,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"buffers","buffers",471409492),new cljs.core.Keyword(null,"rms-buffers","rms-buffers",-1681500464),new cljs.core.Keyword(null,"samples-held","samples-held",-1945118922)),null));
});

audio_utils.gate.default_trigger = (function audio_utils$gate$default_trigger(gate,state){
return null;
});
audio_utils.gate.gate = (function audio_utils$gate$gate(p__23914){
var map__23917 = p__23914;
var map__23917__$1 = ((((!((map__23917 == null)))?((((map__23917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23917):map__23917);
var sample_rate = cljs.core.get.call(null,map__23917__$1,new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554));
var buffer_size = cljs.core.get.call(null,map__23917__$1,new cljs.core.Keyword(null,"buffer-size","buffer-size",1047120420),(4096));
var threshold = cljs.core.get.call(null,map__23917__$1,new cljs.core.Keyword(null,"threshold","threshold",204221583),-32.0);
var look_ahead = cljs.core.get.call(null,map__23917__$1,new cljs.core.Keyword(null,"look-ahead","look-ahead",344278596),(500));
var hold = cljs.core.get.call(null,map__23917__$1,new cljs.core.Keyword(null,"hold","hold",-1621118005),(100));
var rms_window = cljs.core.get.call(null,map__23917__$1,new cljs.core.Keyword(null,"rms-window","rms-window",-1227165349),(100));
var trigger = cljs.core.get.call(null,map__23917__$1,new cljs.core.Keyword(null,"trigger","trigger",103466139),audio_utils.gate.default_trigger);
var config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554),sample_rate,new cljs.core.Keyword(null,"threshold","threshold",204221583),threshold,new cljs.core.Keyword(null,"look-ahead","look-ahead",344278596),look_ahead,new cljs.core.Keyword(null,"hold","hold",-1621118005),hold,new cljs.core.Keyword(null,"rms-window","rms-window",-1227165349),rms_window,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null);
return audio_utils.gate.map__GT_Gate.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"next","next",-117701485),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"buffers","buffers",471409492),audio_utils.util.aatom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"rms-buffers","rms-buffers",-1681500464),audio_utils.util.aatom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"samples-held","samples-held",-1945118922),audio_utils.util.aatom.call(null,(0))], null));
});

//# sourceMappingURL=gate.js.map