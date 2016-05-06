// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.devcards.gate');
goog.require('cljs.core');
goog.require('audio_utils.worker');
goog.require('goog.string');
goog.require('devcards.core');
goog.require('audio_utils.web_audio');
goog.require('audio_utils.viz');
goog.require('audio_utils.util');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.string.format');
goog.require('audio_utils.gate');
audio_utils.devcards.gate.run_test = (function audio_utils$devcards$gate$run_test(state){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"processing?","processing?",1968866327),true);

var ctx = audio_utils.web_audio.audio_context.call(null);
var sample_rate = ctx.sampleRate;
var input_data = new cljs.core.Keyword(null,"data-fn","data-fn",777152661).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)).call(null,sample_rate);
var source = audio_utils.web_audio.create_buffer_source.call(null,ctx,(1),sample_rate,input_data);
var worker = (new Worker(new cljs.core.Keyword(null,"worker","worker",938239996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
var entry_node = audio_utils.worker.main_entry_node.call(null,worker,ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffer-size","buffer-size",1047120420),(2048),new cljs.core.Keyword(null,"input-channels","input-channels",-1514165896),(1),new cljs.core.Keyword(null,"output-channels","output-channels",488402049),(1)], null));
var output_data = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var exit_node = audio_utils.worker.main_exit_node.call(null,worker,((function (ctx,sample_rate,input_data,source,worker,entry_node,output_data){
return (function (channel_data){
return cljs.core._vreset_BANG_.call(null,output_data,cljs.core.concat.call(null,cljs.core._deref.call(null,output_data),cljs.core.first.call(null,channel_data)));
});})(ctx,sample_rate,input_data,source,worker,entry_node,output_data))
);
var dest = ctx.createMediaStreamDestination();
source.connect(entry_node);

entry_node.connect(dest);

source.onended = ((function (ctx,sample_rate,input_data,source,worker,entry_node,output_data,exit_node,dest){
return (function (e){
source.disconnect();

dest.disconnect();

var c__14945__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto__,ctx,sample_rate,input_data,source,worker,entry_node,output_data,exit_node,dest){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto__,ctx,sample_rate,input_data,source,worker,entry_node,output_data,exit_node,dest){
return (function (state_24101){
var state_val_24102 = (state_24101[(1)]);
if((state_val_24102 === (1))){
var inst_24092 = cljs.core.async.timeout.call(null,(5000));
var state_24101__$1 = state_24101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24101__$1,(2),inst_24092);
} else {
if((state_val_24102 === (2))){
var inst_24094 = (state_24101[(2)]);
var inst_24095 = entry_node.disconnect();
var inst_24096 = worker.terminate();
var inst_24097 = ctx.close();
var inst_24098 = cljs.core.deref.call(null,output_data);
var inst_24099 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"processing?","processing?",1968866327),false,new cljs.core.Keyword(null,"finished?","finished?",2067288119),true,new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554),sample_rate,new cljs.core.Keyword(null,"input-data","input-data",2052925403),input_data,new cljs.core.Keyword(null,"output-data","output-data",-1341513319),inst_24098);
var state_24101__$1 = (function (){var statearr_24111 = state_24101;
(statearr_24111[(7)] = inst_24095);

(statearr_24111[(8)] = inst_24094);

(statearr_24111[(9)] = inst_24096);

(statearr_24111[(10)] = inst_24097);

return statearr_24111;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24101__$1,inst_24099);
} else {
return null;
}
}
});})(c__14945__auto__,ctx,sample_rate,input_data,source,worker,entry_node,output_data,exit_node,dest))
;
return ((function (switch__14723__auto__,c__14945__auto__,ctx,sample_rate,input_data,source,worker,entry_node,output_data,exit_node,dest){
return (function() {
var audio_utils$devcards$gate$run_test_$_state_machine__14724__auto__ = null;
var audio_utils$devcards$gate$run_test_$_state_machine__14724__auto____0 = (function (){
var statearr_24115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24115[(0)] = audio_utils$devcards$gate$run_test_$_state_machine__14724__auto__);

(statearr_24115[(1)] = (1));

return statearr_24115;
});
var audio_utils$devcards$gate$run_test_$_state_machine__14724__auto____1 = (function (state_24101){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_24101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e24116){if((e24116 instanceof Object)){
var ex__14727__auto__ = e24116;
var statearr_24117_24130 = state_24101;
(statearr_24117_24130[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24131 = state_24101;
state_24101 = G__24131;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
audio_utils$devcards$gate$run_test_$_state_machine__14724__auto__ = function(state_24101){
switch(arguments.length){
case 0:
return audio_utils$devcards$gate$run_test_$_state_machine__14724__auto____0.call(this);
case 1:
return audio_utils$devcards$gate$run_test_$_state_machine__14724__auto____1.call(this,state_24101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
audio_utils$devcards$gate$run_test_$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = audio_utils$devcards$gate$run_test_$_state_machine__14724__auto____0;
audio_utils$devcards$gate$run_test_$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = audio_utils$devcards$gate$run_test_$_state_machine__14724__auto____1;
return audio_utils$devcards$gate$run_test_$_state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto__,ctx,sample_rate,input_data,source,worker,entry_node,output_data,exit_node,dest))
})();
var state__14947__auto__ = (function (){var statearr_24118 = f__14946__auto__.call(null);
(statearr_24118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto__);

return statearr_24118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto__,ctx,sample_rate,input_data,source,worker,entry_node,output_data,exit_node,dest))
);

return c__14945__auto__;
});})(ctx,sample_rate,input_data,source,worker,entry_node,output_data,exit_node,dest))
;

return source.start();
});
audio_utils.devcards.gate.gate_test = (function audio_utils$devcards$gate$gate_test(state){
var map__24184 = cljs.core.deref.call(null,state);
var map__24184__$1 = ((((!((map__24184 == null)))?((((map__24184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24184):map__24184);
var processing_QMARK_ = cljs.core.get.call(null,map__24184__$1,new cljs.core.Keyword(null,"processing?","processing?",1968866327));
var finished_QMARK_ = cljs.core.get.call(null,map__24184__$1,new cljs.core.Keyword(null,"finished?","finished?",2067288119));
var sample_rate = cljs.core.get.call(null,map__24184__$1,new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554));
var input_data = cljs.core.get.call(null,map__24184__$1,new cljs.core.Keyword(null,"input-data","input-data",2052925403));
var output_data = cljs.core.get.call(null,map__24184__$1,new cljs.core.Keyword(null,"output-data","output-data",-1341513319));
if(cljs.core.truth_(finished_QMARK_)){
return audio_utils.viz.plot_buffers.call(null,cljs.core.count.call(null,input_data),(5000),goog.string.format("Input (%d samples)",cljs.core.count.call(null,input_data)),input_data,goog.string.format("Output (%d samples)",cljs.core.count.call(null,output_data)),output_data);
} else {
if(cljs.core.truth_(processing_QMARK_)){
return React.createElement("p",null,"Processing...");
} else {
return React.createElement("button",{"onClick": ((function (map__24184,map__24184__$1,processing_QMARK_,finished_QMARK_,sample_rate,input_data,output_data){
return (function (){
return audio_utils.devcards.gate.run_test.call(null,state);
});})(map__24184,map__24184__$1,processing_QMARK_,finished_QMARK_,sample_rate,input_data,output_data))
},"Run test");

}
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Peak level detection (no RMS)"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A look-ahead gate, fed with a stream of 11025 samples at -20dB,\n   1000 samples at -10dB, and 21050 samples at -11dB. The gate\n   parameters are: threshold -16dB, look-ahead 0ms (disabled),\n   hold 0ms (disabled), RMS window 0ms (disabled).\n\n   With the RMS window being set to 0ms, the gate effectively uses\n   peak level detection. The output plot demonstrates that the gate\n   opens immediately as the input amplitude passes the threshold.\n   While this is fine for artificial input signals like the one\n   used in this example, it adds significant distortion to real-world\n   signals, as demonstrated by the next example.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return audio_utils.devcards.gate.gate_test.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker","worker",938239996),"gate-1.js",new cljs.core.Keyword(null,"data-fn","data-fn",777152661),(function (sample_rate){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.repeat.call(null,((11025) / (2)),audio_utils.util.db__GT_amplitude.call(null,(-20))),cljs.core.repeat.call(null,(1000),audio_utils.util.db__GT_amplitude.call(null,(-10))),cljs.core.repeat.call(null,((21050) / (2)),audio_utils.util.db__GT_amplitude.call(null,(-11)))));
})], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A look-ahead gate, fed with a stream of 11025 samples of a -20dB\n   sine wave, 1000 samples of a sine wave at -10dB and 21050 samples\n   of a sine wave at -11dB. The gate parameters are: threshold -16dB,\n   look-ahead 0ms (disabled), hold 0ms (disabled), RMS window 0ms\n   (disabled).\n\n   This example illustrates how the input signal is significantly\n   distorted with the gate responding to individual sample amplitudes\n   due to peak level detection.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return audio_utils.devcards.gate.gate_test.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker","worker",938239996),"gate-1.js",new cljs.core.Keyword(null,"data-fn","data-fn",777152661),(function (sample_rate){
var sines = audio_utils.viz.sine_wave.call(null,(20),sample_rate,(33075));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,audio_utils.util.amplify.call(null,cljs.core.take.call(null,(11025),sines),(-20)),audio_utils.util.amplify.call(null,cljs.core.take.call(null,(1000),cljs.core.drop.call(null,(11025),sines)),(-10)),audio_utils.util.amplify.call(null,cljs.core.drop.call(null,(12025),sines),(-11))));
})], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## RMS level detection"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A look-ahead gate, fed with a stream of 11025 samples of -20dB\n   sine wave, 1000 samples of a sine wave at -10dB and 21050 samples\n   of a sine wave at -11dB. The gate parameters are: threshold -16dB,\n   look-ahead 0ms (disabled), hold 0ms (disabled), RMS window 100ms.\n\n   Due to the RMS based level detection, the gate now opens with a\n   delay. As long as the RMS level is below the threshold, samples are\n   dropped, even if they are above the threshold. This can be seen by\n   the beginning of the -10dB period being cut off. With artificial\n   signals like this one, this appears worse. However, the next example\n   demonstrates how RMS based level detection prevents distortion.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return audio_utils.devcards.gate.gate_test.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker","worker",938239996),"gate-2.js",new cljs.core.Keyword(null,"data-fn","data-fn",777152661),(function (sample_rate){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.repeat.call(null,((11025) / (2)),audio_utils.util.db__GT_amplitude.call(null,(-20))),cljs.core.repeat.call(null,(1000),audio_utils.util.db__GT_amplitude.call(null,(-10))),cljs.core.repeat.call(null,((21050) / (2)),audio_utils.util.db__GT_amplitude.call(null,(-11)))));
})], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A look-ahead gate, fed with a stream of 11025 samples of -20dB\n   sine wave, 1000 samples of a sine wave at -10dB and 21050 samples\n   of a sine wave at -11dB. The gate parameters are: threshold -16dB,\n   look-ahead 0ms (disabled), hold 0ms (disabled), RMS window 100ms.\n\n   Due to the RMS based level detection, the gate now opens with a\n   delay. As long as the RMS level is below the threshold, samples are\n   dropped, even if they are above the threshold. However, unlike with\n   peak level detection, the input signal is no longer distorted when\n   processed by the gate.\n\n   What is missing to avoid cutting off the beginning of the -10dB\n   and -11dB periods is the look-ahead feature.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return audio_utils.devcards.gate.gate_test.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker","worker",938239996),"gate-2.js",new cljs.core.Keyword(null,"data-fn","data-fn",777152661),(function (sample_rate){
var sines = audio_utils.viz.sine_wave.call(null,(20),sample_rate,(33075));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,audio_utils.util.amplify.call(null,cljs.core.take.call(null,(11025),sines),(-20)),audio_utils.util.amplify.call(null,cljs.core.take.call(null,(1000),cljs.core.drop.call(null,(11025),sines)),(-10)),audio_utils.util.amplify.call(null,cljs.core.drop.call(null,(12025),sines),(-11))));
})], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## RMS with look-ahead"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A look-ahead gate, fed with a stream of 11025 samples at -20dB,\n   1000 samples at -10dB, and 21050 samples at -11dB. The gate\n   parameters are: threshold -16dB, look-ahead 0ms (disabled),\n   hold 0ms (disabled), RMS window 0ms (disabled).\n\n   Compared to the example without look-ahead, this configuration\n   clearly shows how the rise in volume is captured instead of being\n   cut off. A minor trade-off that becomes apparent at the same time\n   is that a small window of samples below the threshold also make it\n   through the gate.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return audio_utils.devcards.gate.gate_test.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker","worker",938239996),"gate-3.js",new cljs.core.Keyword(null,"data-fn","data-fn",777152661),(function (sample_rate){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.repeat.call(null,((11025) / (2)),audio_utils.util.db__GT_amplitude.call(null,(-20))),cljs.core.repeat.call(null,(1000),audio_utils.util.db__GT_amplitude.call(null,(-10))),cljs.core.repeat.call(null,((21050) / (2)),audio_utils.util.db__GT_amplitude.call(null,(-11)))));
})], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A look-ahead gate, fed with a stream of 11025 samples of a -20dB\n   sine wave, 1000 samples of a -10dB sine wave and 21050 samples\n   of a -11dB sine wave. The gate parameters are: threshold -16dB,\n   look-ahead 100ms, hold 0ms (disabled), RMS window 100ms.\n\n   Compared to the example without look-ahead, this configuration\n   clearly shows how the rise in volume is captured instead of being\n   cut off. A minor trade-off that becomes apparent at the same time\n   is that a small window of samples below the threshold also make it\n   through the gate.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return audio_utils.devcards.gate.gate_test.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker","worker",938239996),"gate-3.js",new cljs.core.Keyword(null,"data-fn","data-fn",777152661),(function (sample_rate){
var sines = audio_utils.viz.sine_wave.call(null,(20),sample_rate,(33075));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,audio_utils.util.amplify.call(null,cljs.core.take.call(null,(11025),sines),(-20)),audio_utils.util.amplify.call(null,cljs.core.take.call(null,(1000),cljs.core.drop.call(null,(11025),sines)),(-10)),audio_utils.util.amplify.call(null,cljs.core.drop.call(null,(12025),sines),(-11))));
})], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## No hold time"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A look-ahead gate, fed with a stream of 11025 samples at -20dB,\n   1000 samples at -10dB, and 21050 samples at -11dB. The gate\n   parameters are: threshold -16dB, look-ahead 0ms (disabled),\n   hold 0ms (disabled), RMS window 0ms (disabled).\n\n   With this configuration, the gate closes as soon as the level\n   drops below the threshold of -16dB.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return audio_utils.devcards.gate.gate_test.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker","worker",938239996),"gate-4.js",new cljs.core.Keyword(null,"data-fn","data-fn",777152661),(function (sample_rate){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.repeat.call(null,((11025) / (2)),audio_utils.util.db__GT_amplitude.call(null,(-10))),cljs.core.repeat.call(null,((22050) / (2)),audio_utils.util.db__GT_amplitude.call(null,(-20)))));
})], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A look-ahead gate, fed with a stream of 11025 samples of a -20dB\n   sine wave, 1000 samples of a -10dB sine wave and 21050 samples\n   of a -11dB sine wave. The gate parameters are: threshold -16dB,\n   look-ahead 0ms (disabled), hold 0ms (disabled), RMS window 100ms.\n\n   With this configuration, the gate closes as soon as the sine\n   wave's RMS level drops below the threshold.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return audio_utils.devcards.gate.gate_test.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker","worker",938239996),"gate-5.js",new cljs.core.Keyword(null,"data-fn","data-fn",777152661),(function (sample_rate){
var sines = audio_utils.viz.sine_wave.call(null,(20),sample_rate,(33075));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,audio_utils.util.amplify.call(null,cljs.core.take.call(null,(11025),sines),(-10)),audio_utils.util.amplify.call(null,cljs.core.drop.call(null,(22025),sines),(-20))));
})], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Hold time"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A look-ahead gate, fed with a stream of 11025 samples at -20dB,\n   1000 samples at -10dB, and 21050 samples at -11dB. The gate\n   parameters are: threshold -16dB, look-ahead 0ms (disabled),\n   hold 100ms, RMS window 0ms (disabled).\n\n   Compared to the previous examples with the hold time disabled,\n   this configuration demonstrates how the gate remains open for\n   100ms (4410 samples) after the input level has dropped below the\n   threshold.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return audio_utils.devcards.gate.gate_test.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker","worker",938239996),"gate-6.js",new cljs.core.Keyword(null,"data-fn","data-fn",777152661),(function (sample_rate){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.repeat.call(null,((11025) / (2)),audio_utils.util.db__GT_amplitude.call(null,(-10))),cljs.core.repeat.call(null,((22050) / (2)),audio_utils.util.db__GT_amplitude.call(null,(-20)))));
})], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.gate","audio_utils.devcards.gate",1649105678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A look-ahead gate, fed with a stream of 11025 samples of a -20dB\n   sine wave, 1000 samples of a -10dB sine wave and 21050 samples\n   of a -11dB sine wave. The gate parameters are: threshold -16dB,\n   look-ahead 0ms (disabled), hold 100ms, RMS window 100ms.\n\n   Compared to the previous examples with the hold time disabled,\n   this configuration demonstrates how the gate remains open for\n   100ms (4410 samples) after the RMS level of the sine wave has\n   dropped below the threshold.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return audio_utils.devcards.gate.gate_test.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker","worker",938239996),"gate-7.js",new cljs.core.Keyword(null,"data-fn","data-fn",777152661),(function (sample_rate){
var sines = audio_utils.viz.sine_wave.call(null,(20),sample_rate,(33075));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,audio_utils.util.amplify.call(null,cljs.core.take.call(null,(11025),sines),(-10)),audio_utils.util.amplify.call(null,cljs.core.drop.call(null,(22025),sines),(-20))));
})], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));

//# sourceMappingURL=gate.js.map