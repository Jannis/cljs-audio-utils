// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.viz');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('thi.ng.geom.viz.core');
goog.require('thi.ng.geom.svg.core');
audio_utils.viz.linear_distribution = (function audio_utils$viz$linear_distribution(domain,n){
return cljs.core.mapv.call(null,(function (p1__23774_SHARP_){
return thi.ng.geom.viz.core.linear_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),n], null),domain).call(null,p1__23774_SHARP_);
}),cljs.core.range.call(null,(0),n));
});
audio_utils.viz.sine_wave = (function audio_utils$viz$sine_wave(freq,sample_rate,n){
return cljs.core.mapv.call(null,(function (p1__23778_SHARP_){
return Math.sin((((p1__23778_SHARP_ * freq) * (2)) * (Math.PI / sample_rate)));
}),cljs.core.range.call(null,(0),n));
});
audio_utils.viz.plot_data = (function audio_utils$viz$plot_data(n,x_grid_step,buffer,width,height){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),n], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(width - (10))], null),new cljs.core.Keyword(null,"major","major",-27376078),(function (){var or__6486__auto__ = x_grid_step;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return Math.ceil((n * 0.2));
}
})(),new cljs.core.Keyword(null,"minor","minor",-608536071),(function (){var or__6486__auto__ = (x_grid_step / (5));
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return Math.ceil((n * 0.1));
}
})(),new cljs.core.Keyword(null,"pos","pos",-864607220),(height - (50))], null)),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.0,1.0], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(height - (50)),(10)], null),new cljs.core.Keyword(null,"major","major",-27376078),0.25,new cljs.core.Keyword(null,"pos","pos",-864607220),(50)], null)),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ddd"], null),new cljs.core.Keyword(null,"minor-x","minor-x",-230860299),true,new cljs.core.Keyword(null,"minor-y","minor-y",388125550),false], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.map_indexed.call(null,(function (p1__23783_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23783_SHARP_,(0)], null);
}),cljs.core.repeat.call(null,n,(0))),new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ccc"], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),thi.ng.geom.viz.core.svg_line_plot], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.map_indexed.call(null,(function (p1__23784_SHARP_,p2__23785_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23784_SHARP_,p2__23785_SHARP_], null);
}),cljs.core.take.call(null,n,buffer)),new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0af"], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),thi.ng.geom.viz.core.svg_line_plot], null)], null)], null);
});
audio_utils.viz.plot_n = (function audio_utils$viz$plot_n(n,x_grid_step,buffer,width,height){
return thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),thi.ng.geom.viz.core.svg_plot2d_cartesian.call(null,audio_utils.viz.plot_data.call(null,n,x_grid_step,buffer,width,height)));
});
audio_utils.viz.plot_buffers = (function audio_utils$viz$plot_buffers(var_args){
var args__7551__auto__ = [];
var len__7544__auto___23804 = arguments.length;
var i__7545__auto___23805 = (0);
while(true){
if((i__7545__auto___23805 < len__7544__auto___23804)){
args__7551__auto__.push((arguments[i__7545__auto___23805]));

var G__23806 = (i__7545__auto___23805 + (1));
i__7545__auto___23805 = G__23806;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((2) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((2)),(0))):null);
return audio_utils.viz.plot_buffers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7552__auto__);
});

audio_utils.viz.plot_buffers.cljs$core$IFn$_invoke$arity$variadic = (function (n,x_grid_step,buffers){
var width = (875);
var height = (400);
return React.createElement("table",null,React.createElement("tbody",null,(function (){var attrs23793 = cljs.core.doall.call(null,(function (){var iter__7258__auto__ = ((function (width,height){
return (function audio_utils$viz$iter__23794(s__23795){
return (new cljs.core.LazySeq(null,((function (width,height){
return (function (){
var s__23795__$1 = s__23795;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23795__$1);
if(temp__4657__auto__){
var s__23795__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23795__$2)){
var c__7256__auto__ = cljs.core.chunk_first.call(null,s__23795__$2);
var size__7257__auto__ = cljs.core.count.call(null,c__7256__auto__);
var b__23797 = cljs.core.chunk_buffer.call(null,size__7257__auto__);
if((function (){var i__23796 = (0);
while(true){
if((i__23796 < size__7257__auto__)){
var vec__23800 = cljs.core._nth.call(null,c__7256__auto__,i__23796);
var label = cljs.core.nth.call(null,vec__23800,(0),null);
var buffer = cljs.core.nth.call(null,vec__23800,(1),null);
cljs.core.chunk_append.call(null,b__23797,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),audio_utils.viz.plot_n.call(null,n,x_grid_step,buffer,(width / (cljs.core.count.call(null,buffers) / (2))),height),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),label], null)], null));

var G__23821 = (i__23796 + (1));
i__23796 = G__23821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23797),audio_utils$viz$iter__23794.call(null,cljs.core.chunk_rest.call(null,s__23795__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23797),null);
}
} else {
var vec__23801 = cljs.core.first.call(null,s__23795__$2);
var label = cljs.core.nth.call(null,vec__23801,(0),null);
var buffer = cljs.core.nth.call(null,vec__23801,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),audio_utils.viz.plot_n.call(null,n,x_grid_step,buffer,(width / (cljs.core.count.call(null,buffers) / (2))),height),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),label], null)], null),audio_utils$viz$iter__23794.call(null,cljs.core.rest.call(null,s__23795__$2)));
}
} else {
return null;
}
break;
}
});})(width,height))
,null,null));
});})(width,height))
;
return iter__7258__auto__.call(null,cljs.core.partition.call(null,(2),(2),buffers));
})());
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs23793))?sablono.interpreter.attributes.call(null,attrs23793):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23793))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23793)], null))));
})()));
});

audio_utils.viz.plot_buffers.cljs$lang$maxFixedArity = (2);

audio_utils.viz.plot_buffers.cljs$lang$applyTo = (function (seq23790){
var G__23791 = cljs.core.first.call(null,seq23790);
var seq23790__$1 = cljs.core.next.call(null,seq23790);
var G__23792 = cljs.core.first.call(null,seq23790__$1);
var seq23790__$2 = cljs.core.next.call(null,seq23790__$1);
return audio_utils.viz.plot_buffers.cljs$core$IFn$_invoke$arity$variadic(G__23791,G__23792,seq23790__$2);
});

//# sourceMappingURL=viz.js.map