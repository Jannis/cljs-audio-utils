// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.worker');
goog.require('cljs.core');

/**
 * @interface
 */
audio_utils.worker.IWorkerAudioNode = function(){};

audio_utils.worker.connect = (function audio_utils$worker$connect(this$,destination){
if((!((this$ == null))) && (!((this$.audio_utils$worker$IWorkerAudioNode$connect$arity$2 == null)))){
return this$.audio_utils$worker$IWorkerAudioNode$connect$arity$2(this$,destination);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.worker.connect[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$,destination);
} else {
var m__7142__auto____$1 = (audio_utils.worker.connect["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$,destination);
} else {
throw cljs.core.missing_protocol.call(null,"IWorkerAudioNode.connect",this$);
}
}
}
});

audio_utils.worker.disconnect = (function audio_utils$worker$disconnect(this$){
if((!((this$ == null))) && (!((this$.audio_utils$worker$IWorkerAudioNode$disconnect$arity$1 == null)))){
return this$.audio_utils$worker$IWorkerAudioNode$disconnect$arity$1(this$);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.worker.disconnect[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$);
} else {
var m__7142__auto____$1 = (audio_utils.worker.disconnect["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorkerAudioNode.disconnect",this$);
}
}
}
});

audio_utils.worker.process_audio = (function audio_utils$worker$process_audio(this$,data){
if((!((this$ == null))) && (!((this$.audio_utils$worker$IWorkerAudioNode$process_audio$arity$2 == null)))){
return this$.audio_utils$worker$IWorkerAudioNode$process_audio$arity$2(this$,data);
} else {
var x__7141__auto__ = (((this$ == null))?null:this$);
var m__7142__auto__ = (audio_utils.worker.process_audio[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,this$,data);
} else {
var m__7142__auto____$1 = (audio_utils.worker.process_audio["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,this$,data);
} else {
throw cljs.core.missing_protocol.call(null,"IWorkerAudioNode.process-audio",this$);
}
}
}
});

/**
 * Creates a ScriptProcessorNode in the main UI thread that
 * forwards audio to a worker by posting a :worker-process-audio
 * message to it whenever there is new audio to be processed.
 */
audio_utils.worker.main_entry_node = (function audio_utils$worker$main_entry_node(worker,ctx,p__11513){
var map__11517 = p__11513;
var map__11517__$1 = ((((!((map__11517 == null)))?((((map__11517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11517):map__11517);
var buffer_size = cljs.core.get.call(null,map__11517__$1,new cljs.core.Keyword(null,"buffer-size","buffer-size",1047120420),(4096));
var input_channels = cljs.core.get.call(null,map__11517__$1,new cljs.core.Keyword(null,"input-channels","input-channels",-1514165896),(1));
var output_channels = cljs.core.get.call(null,map__11517__$1,new cljs.core.Keyword(null,"output-channels","output-channels",488402049),(1));
var G__11519 = ctx.createScriptProcessor(buffer_size,input_channels,output_channels);
(G__11519["onaudioprocess"] = ((function (G__11519,map__11517,map__11517__$1,buffer_size,input_channels,output_channels){
return (function (event){
var input_buffer = event.inputBuffer;
var output_buffer = event.outputBuffer;
var n_channels = input_buffer.numberOfChannels;
var worker_data = cljs.core.into_array.call(null,cljs.core.repeat.call(null,n_channels,[]));
var n__7389__auto___11523 = n_channels;
var channel_11524 = (0);
while(true){
if((channel_11524 < n__7389__auto___11523)){
var input_data_11525 = input_buffer.getChannelData(channel_11524);
var output_data_11526 = output_buffer.getChannelData(channel_11524);
var n__7389__auto___11527__$1 = input_data_11525.length;
var n_11528 = (0);
while(true){
if((n_11528 < n__7389__auto___11527__$1)){
var sample_11529 = (input_data_11525[n_11528]);
(output_data_11526[n_11528] = sample_11529);

(worker_data[channel_11524]).push(sample_11529);

var G__11530 = (n_11528 + (1));
n_11528 = G__11530;
continue;
} else {
}
break;
}

var G__11531 = (channel_11524 + (1));
channel_11524 = G__11531;
continue;
} else {
}
break;
}

return worker.postMessage(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"worker-process-audio","worker-process-audio",-784865488),new cljs.core.Keyword(null,"data","data",-232669377),worker_data], null)));
});})(G__11519,map__11517,map__11517__$1,buffer_size,input_channels,output_channels))
);

return G__11519;
});
/**
 * Creates an IWorkerAudioNode in a worker that receives its audio
 * data from the main UI thread via a :worker-process-audio message.
 * It then forwards the audio to the next IWorkerAudioNode if
 * there is one.
 */
audio_utils.worker.worker_entry_node = (function audio_utils$worker$worker_entry_node(){
var next = cljs.core.atom.call(null,null);
var node = (function (){
if(typeof audio_utils.worker.t_audio_utils$worker11537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {audio_utils.worker.IWorkerAudioNode}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
audio_utils.worker.t_audio_utils$worker11537 = (function (worker_entry_node,next,meta11538){
this.worker_entry_node = worker_entry_node;
this.next = next;
this.meta11538 = meta11538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
audio_utils.worker.t_audio_utils$worker11537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (next){
return (function (_11539,meta11538__$1){
var self__ = this;
var _11539__$1 = this;
return (new audio_utils.worker.t_audio_utils$worker11537(self__.worker_entry_node,self__.next,meta11538__$1));
});})(next))
;

audio_utils.worker.t_audio_utils$worker11537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (next){
return (function (_11539){
var self__ = this;
var _11539__$1 = this;
return self__.meta11538;
});})(next))
;

audio_utils.worker.t_audio_utils$worker11537.prototype.audio_utils$worker$IWorkerAudioNode$ = true;

audio_utils.worker.t_audio_utils$worker11537.prototype.audio_utils$worker$IWorkerAudioNode$connect$arity$2 = ((function (next){
return (function (this$,destination){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,self__.next,destination);
});})(next))
;

audio_utils.worker.t_audio_utils$worker11537.prototype.audio_utils$worker$IWorkerAudioNode$disconnect$arity$1 = ((function (next){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,self__.next,null);
});})(next))
;

audio_utils.worker.t_audio_utils$worker11537.prototype.audio_utils$worker$IWorkerAudioNode$process_audio$arity$2 = ((function (next){
return (function (this$,data){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.next))){
return audio_utils.worker.process_audio.call(null,cljs.core.deref.call(null,self__.next),data);
} else {
return null;
}
});})(next))
;

audio_utils.worker.t_audio_utils$worker11537.getBasis = ((function (next){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"worker-entry-node","worker-entry-node",430315289,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates an IWorkerAudioNode in a worker that receives its audio\n   data from the main UI thread via a :worker-process-audio message.\n   It then forwards the audio to the next IWorkerAudioNode if\n   there is one."], null)),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"meta11538","meta11538",744130448,null)], null);
});})(next))
;

audio_utils.worker.t_audio_utils$worker11537.cljs$lang$type = true;

audio_utils.worker.t_audio_utils$worker11537.cljs$lang$ctorStr = "audio-utils.worker/t_audio_utils$worker11537";

audio_utils.worker.t_audio_utils$worker11537.cljs$lang$ctorPrWriter = ((function (next){
return (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"audio-utils.worker/t_audio_utils$worker11537");
});})(next))
;

audio_utils.worker.__GT_t_audio_utils$worker11537 = ((function (next){
return (function audio_utils$worker$worker_entry_node_$___GT_t_audio_utils$worker11537(worker_entry_node__$1,next__$1,meta11538){
return (new audio_utils.worker.t_audio_utils$worker11537(worker_entry_node__$1,next__$1,meta11538));
});})(next))
;

}

return (new audio_utils.worker.t_audio_utils$worker11537(audio_utils$worker$worker_entry_node,next,cljs.core.PersistentArrayMap.EMPTY));
})()
;
self.onmessage = ((function (next,node){
return (function (msg){
var clj_msg = cljs.core.js__GT_clj.call(null,msg.data);
var name = cljs.core.keyword.call(null,clj_msg.call(null,"name"));
var data = clj_msg.call(null,"data");
if(cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"worker-process-audio","worker-process-audio",-784865488))){
return audio_utils.worker.process_audio.call(null,node,data);
} else {
return null;
}
});})(next,node))
;

return node;
});
/**
 * Creates an IWorkerAudioNode that takes audio data from a previous
 * IWorkerAudioNode and forwards it to the main UI thread via a
 * :main-process-audio message.
 */
audio_utils.worker.worker_exit_node = (function audio_utils$worker$worker_exit_node(){
if(typeof audio_utils.worker.t_audio_utils$worker11543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {audio_utils.worker.IWorkerAudioNode}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
audio_utils.worker.t_audio_utils$worker11543 = (function (worker_exit_node,meta11544){
this.worker_exit_node = worker_exit_node;
this.meta11544 = meta11544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
audio_utils.worker.t_audio_utils$worker11543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11545,meta11544__$1){
var self__ = this;
var _11545__$1 = this;
return (new audio_utils.worker.t_audio_utils$worker11543(self__.worker_exit_node,meta11544__$1));
});

audio_utils.worker.t_audio_utils$worker11543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11545){
var self__ = this;
var _11545__$1 = this;
return self__.meta11544;
});

audio_utils.worker.t_audio_utils$worker11543.prototype.audio_utils$worker$IWorkerAudioNode$ = true;

audio_utils.worker.t_audio_utils$worker11543.prototype.audio_utils$worker$IWorkerAudioNode$connect$arity$2 = (function (this$,destination){
var self__ = this;
var this$__$1 = this;
return null;
});

audio_utils.worker.t_audio_utils$worker11543.prototype.audio_utils$worker$IWorkerAudioNode$disconnect$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

audio_utils.worker.t_audio_utils$worker11543.prototype.audio_utils$worker$IWorkerAudioNode$process_audio$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
return self.postMessage(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"main-process-audio","main-process-audio",-488052711),new cljs.core.Keyword(null,"data","data",-232669377),data], null)));
});

audio_utils.worker.t_audio_utils$worker11543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"worker-exit-node","worker-exit-node",-1756103158,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates an IWorkerAudioNode that takes audio data from a previous\n   IWorkerAudioNode and forwards it to the main UI thread via a\n   :main-process-audio message."], null)),new cljs.core.Symbol(null,"meta11544","meta11544",653153859,null)], null);
});

audio_utils.worker.t_audio_utils$worker11543.cljs$lang$type = true;

audio_utils.worker.t_audio_utils$worker11543.cljs$lang$ctorStr = "audio-utils.worker/t_audio_utils$worker11543";

audio_utils.worker.t_audio_utils$worker11543.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"audio-utils.worker/t_audio_utils$worker11543");
});

audio_utils.worker.__GT_t_audio_utils$worker11543 = (function audio_utils$worker$worker_exit_node_$___GT_t_audio_utils$worker11543(worker_exit_node__$1,meta11544){
return (new audio_utils.worker.t_audio_utils$worker11543(worker_exit_node__$1,meta11544));
});

}

return (new audio_utils.worker.t_audio_utils$worker11543(audio_utils$worker$worker_exit_node,cljs.core.PersistentArrayMap.EMPTY));
});
audio_utils.worker.main_exit_node = (function audio_utils$worker$main_exit_node(worker,data_fn){
return worker.onmessage = (function (msg){
var clj_msg = cljs.core.js__GT_clj.call(null,msg.data);
var name = cljs.core.keyword.call(null,clj_msg.call(null,"name"));
var data = clj_msg.call(null,"data");
if(cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"main-process-audio","main-process-audio",-488052711))){
if(cljs.core.truth_(data_fn)){
return data_fn.call(null,data);
} else {
return null;
}
} else {
return null;
}
});
});
