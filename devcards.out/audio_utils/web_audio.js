// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.web_audio');
goog.require('cljs.core');
audio_utils.web_audio.audio_context = (function audio_utils$web_audio$audio_context(){
var constructor$ = (function (){var or__6486__auto__ = window.AudioContext;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return window.webkitAudioContext;
}
})();
return (new constructor$());
});
audio_utils.web_audio.create_buffer = (function audio_utils$web_audio$create_buffer(ctx,n_channels,size,sample_rate){
return ctx.createBuffer(n_channels,size,sample_rate);
});
audio_utils.web_audio.create_buffer_source = (function audio_utils$web_audio$create_buffer_source(var_args){
var args23473 = [];
var len__7544__auto___23513 = arguments.length;
var i__7545__auto___23514 = (0);
while(true){
if((i__7545__auto___23514 < len__7544__auto___23513)){
args23473.push((arguments[i__7545__auto___23514]));

var G__23515 = (i__7545__auto___23514 + (1));
i__7545__auto___23514 = G__23515;
continue;
} else {
}
break;
}

var G__23485 = args23473.length;
switch (G__23485) {
case 1:
return audio_utils.web_audio.create_buffer_source.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return audio_utils.web_audio.create_buffer_source.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23473.length)].join('')));

}
});

audio_utils.web_audio.create_buffer_source.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return ctx.createBufferSource();
});

audio_utils.web_audio.create_buffer_source.cljs$core$IFn$_invoke$arity$4 = (function (ctx,n_channels,sample_rate,data){
var buf = audio_utils.web_audio.create_buffer.call(null,ctx,n_channels,cljs.core.count.call(null,(function (){var G__23486 = data;
if((n_channels > (1))){
return cljs.core.first.call(null,G__23486);
} else {
return G__23486;
}
})()),sample_rate);
var src = audio_utils.web_audio.create_buffer_source.call(null,ctx);
var seq__23487_23519 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),n_channels));
var chunk__23489_23520 = null;
var count__23490_23521 = (0);
var i__23491_23522 = (0);
while(true){
if((i__23491_23522 < count__23490_23521)){
var channel_23526 = cljs.core._nth.call(null,chunk__23489_23520,i__23491_23522);
var channel_data_23527 = buf.getChannelData(channel_23526);
var input_data_23528 = (function (){var G__23493 = data;
if((n_channels > (1))){
return cljs.core.get.call(null,G__23493,channel_23526);
} else {
return G__23493;
}
})();
var seq__23494_23531 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,input_data_23528));
var chunk__23495_23532 = null;
var count__23496_23533 = (0);
var i__23497_23534 = (0);
while(true){
if((i__23497_23534 < count__23496_23533)){
var vec__23498_23535 = cljs.core._nth.call(null,chunk__23495_23532,i__23497_23534);
var i_23536 = cljs.core.nth.call(null,vec__23498_23535,(0),null);
var x_23537 = cljs.core.nth.call(null,vec__23498_23535,(1),null);
(channel_data_23527[i_23536] = x_23537);

var G__23551 = seq__23494_23531;
var G__23552 = chunk__23495_23532;
var G__23553 = count__23496_23533;
var G__23554 = (i__23497_23534 + (1));
seq__23494_23531 = G__23551;
chunk__23495_23532 = G__23552;
count__23496_23533 = G__23553;
i__23497_23534 = G__23554;
continue;
} else {
var temp__4657__auto___23557 = cljs.core.seq.call(null,seq__23494_23531);
if(temp__4657__auto___23557){
var seq__23494_23558__$1 = temp__4657__auto___23557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23494_23558__$1)){
var c__7289__auto___23559 = cljs.core.chunk_first.call(null,seq__23494_23558__$1);
var G__23560 = cljs.core.chunk_rest.call(null,seq__23494_23558__$1);
var G__23561 = c__7289__auto___23559;
var G__23562 = cljs.core.count.call(null,c__7289__auto___23559);
var G__23563 = (0);
seq__23494_23531 = G__23560;
chunk__23495_23532 = G__23561;
count__23496_23533 = G__23562;
i__23497_23534 = G__23563;
continue;
} else {
var vec__23499_23564 = cljs.core.first.call(null,seq__23494_23558__$1);
var i_23565 = cljs.core.nth.call(null,vec__23499_23564,(0),null);
var x_23566 = cljs.core.nth.call(null,vec__23499_23564,(1),null);
(channel_data_23527[i_23565] = x_23566);

var G__23567 = cljs.core.next.call(null,seq__23494_23558__$1);
var G__23568 = null;
var G__23569 = (0);
var G__23570 = (0);
seq__23494_23531 = G__23567;
chunk__23495_23532 = G__23568;
count__23496_23533 = G__23569;
i__23497_23534 = G__23570;
continue;
}
} else {
}
}
break;
}

var G__23571 = seq__23487_23519;
var G__23572 = chunk__23489_23520;
var G__23573 = count__23490_23521;
var G__23574 = (i__23491_23522 + (1));
seq__23487_23519 = G__23571;
chunk__23489_23520 = G__23572;
count__23490_23521 = G__23573;
i__23491_23522 = G__23574;
continue;
} else {
var temp__4657__auto___23575 = cljs.core.seq.call(null,seq__23487_23519);
if(temp__4657__auto___23575){
var seq__23487_23576__$1 = temp__4657__auto___23575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23487_23576__$1)){
var c__7289__auto___23577 = cljs.core.chunk_first.call(null,seq__23487_23576__$1);
var G__23578 = cljs.core.chunk_rest.call(null,seq__23487_23576__$1);
var G__23579 = c__7289__auto___23577;
var G__23580 = cljs.core.count.call(null,c__7289__auto___23577);
var G__23581 = (0);
seq__23487_23519 = G__23578;
chunk__23489_23520 = G__23579;
count__23490_23521 = G__23580;
i__23491_23522 = G__23581;
continue;
} else {
var channel_23582 = cljs.core.first.call(null,seq__23487_23576__$1);
var channel_data_23583 = buf.getChannelData(channel_23582);
var input_data_23584 = (function (){var G__23500 = data;
if((n_channels > (1))){
return cljs.core.get.call(null,G__23500,channel_23582);
} else {
return G__23500;
}
})();
var seq__23503_23585 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,input_data_23584));
var chunk__23504_23586 = null;
var count__23505_23587 = (0);
var i__23506_23588 = (0);
while(true){
if((i__23506_23588 < count__23505_23587)){
var vec__23507_23589 = cljs.core._nth.call(null,chunk__23504_23586,i__23506_23588);
var i_23590 = cljs.core.nth.call(null,vec__23507_23589,(0),null);
var x_23591 = cljs.core.nth.call(null,vec__23507_23589,(1),null);
(channel_data_23583[i_23590] = x_23591);

var G__23592 = seq__23503_23585;
var G__23593 = chunk__23504_23586;
var G__23594 = count__23505_23587;
var G__23595 = (i__23506_23588 + (1));
seq__23503_23585 = G__23592;
chunk__23504_23586 = G__23593;
count__23505_23587 = G__23594;
i__23506_23588 = G__23595;
continue;
} else {
var temp__4657__auto___23596__$1 = cljs.core.seq.call(null,seq__23503_23585);
if(temp__4657__auto___23596__$1){
var seq__23503_23597__$1 = temp__4657__auto___23596__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23503_23597__$1)){
var c__7289__auto___23598 = cljs.core.chunk_first.call(null,seq__23503_23597__$1);
var G__23599 = cljs.core.chunk_rest.call(null,seq__23503_23597__$1);
var G__23600 = c__7289__auto___23598;
var G__23601 = cljs.core.count.call(null,c__7289__auto___23598);
var G__23602 = (0);
seq__23503_23585 = G__23599;
chunk__23504_23586 = G__23600;
count__23505_23587 = G__23601;
i__23506_23588 = G__23602;
continue;
} else {
var vec__23508_23606 = cljs.core.first.call(null,seq__23503_23597__$1);
var i_23607 = cljs.core.nth.call(null,vec__23508_23606,(0),null);
var x_23608 = cljs.core.nth.call(null,vec__23508_23606,(1),null);
(channel_data_23583[i_23607] = x_23608);

var G__23611 = cljs.core.next.call(null,seq__23503_23597__$1);
var G__23612 = null;
var G__23613 = (0);
var G__23614 = (0);
seq__23503_23585 = G__23611;
chunk__23504_23586 = G__23612;
count__23505_23587 = G__23613;
i__23506_23588 = G__23614;
continue;
}
} else {
}
}
break;
}

var G__23615 = cljs.core.next.call(null,seq__23487_23576__$1);
var G__23616 = null;
var G__23617 = (0);
var G__23618 = (0);
seq__23487_23519 = G__23615;
chunk__23489_23520 = G__23616;
count__23490_23521 = G__23617;
i__23491_23522 = G__23618;
continue;
}
} else {
}
}
break;
}

src.buffer = buf;

return src;
});

audio_utils.web_audio.create_buffer_source.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=web_audio.js.map