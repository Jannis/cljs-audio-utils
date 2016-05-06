// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22787_22809 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22788_22810 = null;
var count__22789_22811 = (0);
var i__22790_22812 = (0);
while(true){
if((i__22790_22812 < count__22789_22811)){
var f_22813 = cljs.core._nth.call(null,chunk__22788_22810,i__22790_22812);
cljs.core.println.call(null,"  ",f_22813);

var G__22814 = seq__22787_22809;
var G__22815 = chunk__22788_22810;
var G__22816 = count__22789_22811;
var G__22817 = (i__22790_22812 + (1));
seq__22787_22809 = G__22814;
chunk__22788_22810 = G__22815;
count__22789_22811 = G__22816;
i__22790_22812 = G__22817;
continue;
} else {
var temp__4657__auto___22826 = cljs.core.seq.call(null,seq__22787_22809);
if(temp__4657__auto___22826){
var seq__22787_22827__$1 = temp__4657__auto___22826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22787_22827__$1)){
var c__7289__auto___22828 = cljs.core.chunk_first.call(null,seq__22787_22827__$1);
var G__22829 = cljs.core.chunk_rest.call(null,seq__22787_22827__$1);
var G__22830 = c__7289__auto___22828;
var G__22831 = cljs.core.count.call(null,c__7289__auto___22828);
var G__22832 = (0);
seq__22787_22809 = G__22829;
chunk__22788_22810 = G__22830;
count__22789_22811 = G__22831;
i__22790_22812 = G__22832;
continue;
} else {
var f_22833 = cljs.core.first.call(null,seq__22787_22827__$1);
cljs.core.println.call(null,"  ",f_22833);

var G__22834 = cljs.core.next.call(null,seq__22787_22827__$1);
var G__22835 = null;
var G__22836 = (0);
var G__22837 = (0);
seq__22787_22809 = G__22834;
chunk__22788_22810 = G__22835;
count__22789_22811 = G__22836;
i__22790_22812 = G__22837;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22838 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6486__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22838);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22838)))?cljs.core.second.call(null,arglists_22838):arglists_22838));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22794 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22795 = null;
var count__22796 = (0);
var i__22797 = (0);
while(true){
if((i__22797 < count__22796)){
var vec__22798 = cljs.core._nth.call(null,chunk__22795,i__22797);
var name = cljs.core.nth.call(null,vec__22798,(0),null);
var map__22799 = cljs.core.nth.call(null,vec__22798,(1),null);
var map__22799__$1 = ((((!((map__22799 == null)))?((((map__22799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22799):map__22799);
var doc = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22843 = seq__22794;
var G__22844 = chunk__22795;
var G__22845 = count__22796;
var G__22846 = (i__22797 + (1));
seq__22794 = G__22843;
chunk__22795 = G__22844;
count__22796 = G__22845;
i__22797 = G__22846;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22794);
if(temp__4657__auto__){
var seq__22794__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22794__$1)){
var c__7289__auto__ = cljs.core.chunk_first.call(null,seq__22794__$1);
var G__22851 = cljs.core.chunk_rest.call(null,seq__22794__$1);
var G__22852 = c__7289__auto__;
var G__22853 = cljs.core.count.call(null,c__7289__auto__);
var G__22854 = (0);
seq__22794 = G__22851;
chunk__22795 = G__22852;
count__22796 = G__22853;
i__22797 = G__22854;
continue;
} else {
var vec__22801 = cljs.core.first.call(null,seq__22794__$1);
var name = cljs.core.nth.call(null,vec__22801,(0),null);
var map__22802 = cljs.core.nth.call(null,vec__22801,(1),null);
var map__22802__$1 = ((((!((map__22802 == null)))?((((map__22802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22802):map__22802);
var doc = cljs.core.get.call(null,map__22802__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22802__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22872 = cljs.core.next.call(null,seq__22794__$1);
var G__22873 = null;
var G__22874 = (0);
var G__22875 = (0);
seq__22794 = G__22872;
chunk__22795 = G__22873;
count__22796 = G__22874;
i__22797 = G__22875;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map