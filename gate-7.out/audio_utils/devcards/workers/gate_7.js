// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.devcards.workers.gate_7');
goog.require('cljs.core');
goog.require('audio_utils.gate');
goog.require('audio_utils.worker');
audio_utils.devcards.workers.gate_7.init = (function audio_utils$devcards$workers$gate_7$init(){
var entry_node = audio_utils.worker.worker_entry_node.call(null);
var gate = audio_utils.gate.gate.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"threshold","threshold",204221583),(-16),new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554),(44100),new cljs.core.Keyword(null,"buffer-size","buffer-size",1047120420),(4096),new cljs.core.Keyword(null,"look-ahead","look-ahead",344278596),(0),new cljs.core.Keyword(null,"hold","hold",-1621118005),(100),new cljs.core.Keyword(null,"rms-window","rms-window",-1227165349),(100)], null));
var exit_node = audio_utils.worker.worker_exit_node.call(null);
audio_utils.worker.connect.call(null,entry_node,gate);

return audio_utils.worker.connect.call(null,gate,exit_node);
});
