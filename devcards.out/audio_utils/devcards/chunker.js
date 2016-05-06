// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.devcards.chunker');
goog.require('cljs.core');
goog.require('audio_utils.worker');
goog.require('audio_utils.chunker');
goog.require('goog.string');
goog.require('devcards.core');
goog.require('audio_utils.web_audio');
goog.require('audio_utils.viz');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.string.format');
audio_utils.devcards.chunker.run_test = (function audio_utils$devcards$chunker$run_test(state){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"processing?","processing?",1968866327),true);

var ctx = audio_utils.web_audio.audio_context.call(null);
var sample_rate = ctx.sampleRate;
var input_data = new cljs.core.Keyword(null,"data-fn","data-fn",777152661).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)).call(null,sample_rate);
var source = audio_utils.web_audio.create_buffer_source.call(null,ctx,(1),sample_rate,input_data);
var worker = (new Worker(new cljs.core.Keyword(null,"worker","worker",938239996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
var entry_node = audio_utils.worker.main_entry_node.call(null,worker,ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffer-size","buffer-size",1047120420),(2048),new cljs.core.Keyword(null,"input-channels","input-channels",-1514165896),(1),new cljs.core.Keyword(null,"output-channels","output-channels",488402049),(1)], null));
var chunks = [];
var exit_node = audio_utils.worker.main_exit_node.call(null,worker,((function (ctx,sample_rate,input_data,source,worker,entry_node,chunks){
return (function (channel_chunks){
var chunk = channel_chunks.call(null,(0));
return chunks.push(chunk);
});})(ctx,sample_rate,input_data,source,worker,entry_node,chunks))
);
var dest = ctx.createMediaStreamDestination();
source.connect(entry_node);

entry_node.connect(dest);

source.onended = ((function (ctx,sample_rate,input_data,source,worker,entry_node,chunks,exit_node,dest){
return (function (e){
source.disconnect();

dest.disconnect();

var c__14945__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto__,ctx,sample_rate,input_data,source,worker,entry_node,chunks,exit_node,dest){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto__,ctx,sample_rate,input_data,source,worker,entry_node,chunks,exit_node,dest){
return (function (state_24090){
var state_val_24091 = (state_24090[(1)]);
if((state_val_24091 === (1))){
var inst_24082 = cljs.core.async.timeout.call(null,(1000));
var state_24090__$1 = state_24090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24090__$1,(2),inst_24082);
} else {
if((state_val_24091 === (2))){
var inst_24084 = (state_24090[(2)]);
var inst_24085 = entry_node.disconnect();
var inst_24086 = worker.terminate();
var inst_24087 = ctx.close();
var inst_24088 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"processing?","processing?",1968866327),false,new cljs.core.Keyword(null,"finished?","finished?",2067288119),true,new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554),sample_rate,new cljs.core.Keyword(null,"input-data","input-data",2052925403),input_data,new cljs.core.Keyword(null,"chunks","chunks",83720431),chunks);
var state_24090__$1 = (function (){var statearr_24103 = state_24090;
(statearr_24103[(7)] = inst_24084);

(statearr_24103[(8)] = inst_24086);

(statearr_24103[(9)] = inst_24085);

(statearr_24103[(10)] = inst_24087);

return statearr_24103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24090__$1,inst_24088);
} else {
return null;
}
}
});})(c__14945__auto__,ctx,sample_rate,input_data,source,worker,entry_node,chunks,exit_node,dest))
;
return ((function (switch__14723__auto__,c__14945__auto__,ctx,sample_rate,input_data,source,worker,entry_node,chunks,exit_node,dest){
return (function() {
var audio_utils$devcards$chunker$run_test_$_state_machine__14724__auto__ = null;
var audio_utils$devcards$chunker$run_test_$_state_machine__14724__auto____0 = (function (){
var statearr_24107 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24107[(0)] = audio_utils$devcards$chunker$run_test_$_state_machine__14724__auto__);

(statearr_24107[(1)] = (1));

return statearr_24107;
});
var audio_utils$devcards$chunker$run_test_$_state_machine__14724__auto____1 = (function (state_24090){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_24090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e24108){if((e24108 instanceof Object)){
var ex__14727__auto__ = e24108;
var statearr_24109_24128 = state_24090;
(statearr_24109_24128[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24136 = state_24090;
state_24090 = G__24136;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
audio_utils$devcards$chunker$run_test_$_state_machine__14724__auto__ = function(state_24090){
switch(arguments.length){
case 0:
return audio_utils$devcards$chunker$run_test_$_state_machine__14724__auto____0.call(this);
case 1:
return audio_utils$devcards$chunker$run_test_$_state_machine__14724__auto____1.call(this,state_24090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
audio_utils$devcards$chunker$run_test_$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = audio_utils$devcards$chunker$run_test_$_state_machine__14724__auto____0;
audio_utils$devcards$chunker$run_test_$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = audio_utils$devcards$chunker$run_test_$_state_machine__14724__auto____1;
return audio_utils$devcards$chunker$run_test_$_state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto__,ctx,sample_rate,input_data,source,worker,entry_node,chunks,exit_node,dest))
})();
var state__14947__auto__ = (function (){var statearr_24110 = f__14946__auto__.call(null);
(statearr_24110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto__);

return statearr_24110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto__,ctx,sample_rate,input_data,source,worker,entry_node,chunks,exit_node,dest))
);

return c__14945__auto__;
});})(ctx,sample_rate,input_data,source,worker,entry_node,chunks,exit_node,dest))
;

return source.start();
});
audio_utils.devcards.chunker.chunker_test = (function audio_utils$devcards$chunker$chunker_test(state){
var map__24180 = cljs.core.deref.call(null,state);
var map__24180__$1 = ((((!((map__24180 == null)))?((((map__24180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24180):map__24180);
var processing_QMARK_ = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"processing?","processing?",1968866327));
var finished_QMARK_ = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"finished?","finished?",2067288119));
var sample_rate = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554));
var input_data = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"input-data","input-data",2052925403));
var chunks = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"chunks","chunks",83720431));
var combined_chunks = cljs.core.apply.call(null,cljs.core.concat,chunks);
if(cljs.core.truth_(finished_QMARK_)){
return audio_utils.viz.plot_buffers.call(null,cljs.core.count.call(null,input_data),(2000),goog.string.format("Input Data (%d samples)",cljs.core.count.call(null,input_data)),input_data,goog.string.format("%d Chunks (%d samples)",cljs.core.count.call(null,chunks),cljs.core.count.call(null,combined_chunks)),combined_chunks);
} else {
if(cljs.core.truth_(processing_QMARK_)){
return React.createElement("p",null,"Processing...");
} else {
return React.createElement("button",{"onClick": ((function (map__24180,map__24180__$1,processing_QMARK_,finished_QMARK_,sample_rate,input_data,chunks,combined_chunks){
return (function (){
return audio_utils.devcards.chunker.run_test.call(null,state);
});})(map__24180,map__24180__$1,processing_QMARK_,finished_QMARK_,sample_rate,input_data,chunks,combined_chunks))
},"Run test");

}
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.chunker","audio_utils.devcards.chunker",1867407431),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"An audio chunker with a chunk size of 4410 samples, fed with a\n   stream of 32768 samples linearly distributed from -1.0 to 1.0. The\n   resulting plot shows the original stream and the result of\n   concatenating all chunks and collecting the first 32768 samples from\n   them, which, if the audio chunker works correctly, should be exactly\n   the same as the input data.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return audio_utils.devcards.chunker.chunker_test.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker","worker",938239996),"chunker-1.js",new cljs.core.Keyword(null,"data-fn","data-fn",777152661),(function (sample_rate){
return audio_utils.viz.linear_distribution.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.0,1.0], null),(32768));
})], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.chunker","audio_utils.devcards.chunker",1867407431),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"An audio chunker with a chunk size of 4410 samples, fed with a\n   stream of 441000 samples of a 10Hz sine wave with amplitude 1.0.\n   The resulting plot shows the original stream and the result of\n   concatenating all chunks and collecting the first 441000 samples\n   from them, which, if the audio chunker works correctly, should\n   be exactly the same as the input data.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return audio_utils.devcards.chunker.chunker_test.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker","worker",938239996),"chunker-2.js",new cljs.core.Keyword(null,"data-fn","data-fn",777152661),(function (sample_rate){
return audio_utils.viz.sine_wave.call(null,(2),(44100),(441000));
})], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));

//# sourceMappingURL=chunker.js.map