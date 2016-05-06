// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.util');
goog.require('cljs.core');
audio_utils.util.aatom = (function audio_utils$util$aatom(x){
return cljs.core.to_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
audio_utils.util.areset_BANG_ = (function audio_utils$util$areset_BANG_(x,v){
return (x[(0)] = v);
});
audio_utils.util.aswap_BANG_ = (function audio_utils$util$aswap_BANG_(var_args){
var args__7551__auto__ = [];
var len__7544__auto___11510 = arguments.length;
var i__7545__auto___11511 = (0);
while(true){
if((i__7545__auto___11511 < len__7544__auto___11510)){
args__7551__auto__.push((arguments[i__7545__auto___11511]));

var G__11512 = (i__7545__auto___11511 + (1));
i__7545__auto___11511 = G__11512;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((2) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((2)),(0))):null);
return audio_utils.util.aswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7552__auto__);
});

audio_utils.util.aswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (x,f,args){
var v = (x[(0)]);
return (x[(0)] = cljs.core.apply.call(null,f,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),args)));
});

audio_utils.util.aswap_BANG_.cljs$lang$maxFixedArity = (2);

audio_utils.util.aswap_BANG_.cljs$lang$applyTo = (function (seq11507){
var G__11508 = cljs.core.first.call(null,seq11507);
var seq11507__$1 = cljs.core.next.call(null,seq11507);
var G__11509 = cljs.core.first.call(null,seq11507__$1);
var seq11507__$2 = cljs.core.next.call(null,seq11507__$1);
return audio_utils.util.aswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11508,G__11509,seq11507__$2);
});
audio_utils.util.aderef = (function audio_utils$util$aderef(x){
return (x[(0)]);
});
audio_utils.util._LT__LT_ = audio_utils.util.aderef;
audio_utils.util._GT__GT_ = audio_utils.util.areset_BANG_;
/**
 * Convert a dB value such as -6.0 to an amplitude value between 0.0
 * and 1.0, such as 0.5011872336272722.
 */
audio_utils.util.db__GT_amplitude = (function audio_utils$util$db__GT_amplitude(x){
return Math.pow((10),(x / (20)));
});
/**
 * Convert an amplitude value between -1.0 and 1.0, such as
 * 0.5011872336272722, to a dB value like -6.0.
 */
audio_utils.util.amplitude__GT_db = (function audio_utils$util$amplitude__GT_db(x){
return ((20) * Math.log10(x));
});
/**
 * Converts a time in milliseconds to the corresponding number of
 * samples given a sample rate.
 */
audio_utils.util.time__GT_samples = (function audio_utils$util$time__GT_samples(x,sample_rate){
return cljs.core.long$.call(null,((x / (1000)) * sample_rate));
});
/**
 * Amplifies or attentuates a sample by a given amount of dB.
 */
audio_utils.util.amplify_sample = (function audio_utils$util$amplify_sample(sample,db){
return (sample * audio_utils.util.db__GT_amplitude.call(null,db));
});
/**
 * Amplifies all samples in the input collection by a given amount
 * of dB.
 */
audio_utils.util.amplify = (function audio_utils$util$amplify(coll,db){
return cljs.core.map.call(null,(function (p1__11520_SHARP_){
return audio_utils.util.amplify_sample.call(null,p1__11520_SHARP_,db);
}),coll);
});
