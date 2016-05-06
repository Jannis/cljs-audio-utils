// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.devcards.workers.chunker_1');
goog.require('cljs.core');
goog.require('audio_utils.chunker');
goog.require('audio_utils.worker');
audio_utils.devcards.workers.chunker_1.init = (function audio_utils$devcards$workers$chunker_1$init(){
var entry_node = audio_utils.worker.worker_entry_node.call(null);
var chunker = audio_utils.chunker.chunker.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"samples-per-chunk","samples-per-chunk",-184645826),(4410)], null));
var exit_node = audio_utils.worker.worker_exit_node.call(null);
audio_utils.worker.connect.call(null,entry_node,chunker);

return audio_utils.worker.connect.call(null,chunker,exit_node);
});
