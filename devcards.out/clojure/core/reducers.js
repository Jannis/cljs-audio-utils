// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core');
clojure.core.reducers.fjtask = (function clojure$core$reducers$fjtask(f){
return f;
});
clojure.core.reducers.fjinvoke = (function clojure$core$reducers$fjinvoke(f){
return f.call(null);
});
clojure.core.reducers.fjfork = (function clojure$core$reducers$fjfork(task){
return task;
});
clojure.core.reducers.fjjoin = (function clojure$core$reducers$fjjoin(task){
return task.call(null);
});
/**
 * Like core/reduce except:
 *   When init is not provided, (f) is used.
 *   Maps are reduced with reduce-kv
 */
clojure.core.reducers.reduce = (function clojure$core$reducers$reduce(var_args){
var args7635 = [];
var len__7544__auto___7667 = arguments.length;
var i__7545__auto___7668 = (0);
while(true){
if((i__7545__auto___7668 < len__7544__auto___7667)){
args7635.push((arguments[i__7545__auto___7668]));

var G__7672 = (i__7545__auto___7668 + (1));
i__7545__auto___7668 = G__7672;
continue;
} else {
}
break;
}

var G__7659 = args7635.length;
switch (G__7659) {
case 2:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7635.length)].join('')));

}
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.reduce.call(null,f,f.call(null),coll);
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core._kv_reduce.call(null,coll,f,init);
} else {
if((coll == null)){
return init;
} else {
if(cljs.core.array_QMARK_.call(null,coll)){
return cljs.core.array_reduce.call(null,coll,f,init);
} else {
return cljs.core._reduce.call(null,coll,f,init);

}
}
}
});

clojure.core.reducers.reduce.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
clojure.core.reducers.CollFold = function(){};

clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((!((coll == null))) && (!((coll.clojure$core$reducers$CollFold$coll_fold$arity$4 == null)))){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
var x__7141__auto__ = (((coll == null))?null:coll);
var m__7142__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,coll,n,combinef,reducef);
} else {
var m__7142__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,coll,n,combinef,reducef);
} else {
throw cljs.core.missing_protocol.call(null,"CollFold.coll-fold",coll);
}
}
}
});

/**
 * Reduces a collection using a (potentially parallel) reduce-combine
 *   strategy. The collection is partitioned into groups of approximately
 *   n (default 512), each of which is reduced with reducef (with a seed
 *   value obtained by calling (combinef) with no arguments). The results
 *   of these reductions are then reduced with combinef (default
 *   reducef). combinef must be associative, and, when called with no
 *   arguments, (combinef) must produce its identity element. These
 *   operations may be performed in parallel, but the results will
 *   preserve order.
 * 
 *   Note: Performing operations in parallel is currently not implemented.
 */
clojure.core.reducers.fold = (function clojure$core$reducers$fold(var_args){
var args7711 = [];
var len__7544__auto___7722 = arguments.length;
var i__7545__auto___7723 = (0);
while(true){
if((i__7545__auto___7723 < len__7544__auto___7722)){
args7711.push((arguments[i__7545__auto___7723]));

var G__7724 = (i__7545__auto___7723 + (1));
i__7545__auto___7723 = G__7724;
continue;
} else {
}
break;
}

var G__7719 = args7711.length;
switch (G__7719) {
case 2:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7711.length)].join('')));

}
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2 = (function (reducef,coll){
return clojure.core.reducers.fold.call(null,reducef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3 = (function (combinef,reducef,coll){
return clojure.core.reducers.fold.call(null,(512),combinef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4 = (function (n,combinef,reducef,coll){
return clojure.core.reducers.coll_fold.call(null,coll,n,combinef,reducef);
});

clojure.core.reducers.fold.cljs$lang$maxFixedArity = 4;
/**
 * Given a reducible collection, and a transformation function xf,
 *   returns a reducible collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.reducer = (function clojure$core$reducers$reducer(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers7787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers7787 = (function (reducer,coll,xf,meta7788){
this.reducer = reducer;
this.coll = coll;
this.xf = xf;
this.meta7788 = meta7788;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers7787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7789,meta7788__$1){
var self__ = this;
var _7789__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers7787(self__.reducer,self__.coll,self__.xf,meta7788__$1));
});

clojure.core.reducers.t_clojure$core$reducers7787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7789){
var self__ = this;
var _7789__$1 = this;
return self__.meta7788;
});

clojure.core.reducers.t_clojure$core$reducers7787.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers7787.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers7787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"reducer","reducer",-948842876,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a reducible collection, and a transformation function xf,\n  returns a reducible collection, where any supplied reducing\n  fn will be transformed by xf. xf is a function of reducing fn to\n  reducing fn."], null)),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta7788","meta7788",-1519516427,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers7787.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers7787.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers7787";

clojure.core.reducers.t_clojure$core$reducers7787.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"clojure.core.reducers/t_clojure$core$reducers7787");
});

clojure.core.reducers.__GT_t_clojure$core$reducers7787 = (function clojure$core$reducers$reducer_$___GT_t_clojure$core$reducers7787(reducer__$1,coll__$1,xf__$1,meta7788){
return (new clojure.core.reducers.t_clojure$core$reducers7787(reducer__$1,coll__$1,xf__$1,meta7788));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers7787(clojure$core$reducers$reducer,coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 *   returns a foldable collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers7834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers7834 = (function (folder,coll,xf,meta7835){
this.folder = folder;
this.coll = coll;
this.xf = xf;
this.meta7835 = meta7835;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers7834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7836,meta7835__$1){
var self__ = this;
var _7836__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers7834(self__.folder,self__.coll,self__.xf,meta7835__$1));
});

clojure.core.reducers.t_clojure$core$reducers7834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7836){
var self__ = this;
var _7836__$1 = this;
return self__.meta7835;
});

clojure.core.reducers.t_clojure$core$reducers7834.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers7834.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers7834.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.t_clojure$core$reducers7834.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold.call(null,self__.coll,n,combinef,self__.xf.call(null,reducef));
});

clojure.core.reducers.t_clojure$core$reducers7834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"folder","folder",-1138554033,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a foldable collection, and a transformation function xf,\n  returns a foldable collection, where any supplied reducing\n  fn will be transformed by xf. xf is a function of reducing fn to\n  reducing fn."], null)),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta7835","meta7835",-1643744435,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers7834.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers7834.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers7834";

clojure.core.reducers.t_clojure$core$reducers7834.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"clojure.core.reducers/t_clojure$core$reducers7834");
});

clojure.core.reducers.__GT_t_clojure$core$reducers7834 = (function clojure$core$reducers$folder_$___GT_t_clojure$core$reducers7834(folder__$1,coll__$1,xf__$1,meta7835){
return (new clojure.core.reducers.t_clojure$core$reducers7834(folder__$1,coll__$1,xf__$1,meta7835));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers7834(clojure$core$reducers$folder,coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function clojure$core$reducers$map(var_args){
var args7849 = [];
var len__7544__auto___7855 = arguments.length;
var i__7545__auto___7856 = (0);
while(true){
if((i__7545__auto___7856 < len__7544__auto___7855)){
args7849.push((arguments[i__7545__auto___7856]));

var G__7857 = (i__7545__auto___7856 + (1));
i__7545__auto___7856 = G__7857;
continue;
} else {
}
break;
}

var G__7853 = args7849.length;
switch (G__7853) {
case 1:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7849.length)].join('')));

}
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__6927__auto__){
return clojure.core.reducers.map.call(null,f,x__6927__auto__);
});
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__7859 = null;
var G__7859__0 = (function (){
return f1.call(null);
});
var G__7859__2 = (function (ret,v){
return f1.call(null,ret,f.call(null,v));
});
var G__7859__3 = (function (ret,k,v){
return f1.call(null,ret,f.call(null,k,v));
});
G__7859 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__7859__0.call(this);
case 2:
return G__7859__2.call(this,ret,k);
case 3:
return G__7859__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7859.cljs$core$IFn$_invoke$arity$0 = G__7859__0;
G__7859.cljs$core$IFn$_invoke$arity$2 = G__7859__2;
G__7859.cljs$core$IFn$_invoke$arity$3 = G__7859__3;
return G__7859;
})()
}));
});

clojure.core.reducers.map.cljs$lang$maxFixedArity = 2;
/**
 * Applies f to every value in the reduction of coll, concatenating the result
 *   colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(var_args){
var args7864 = [];
var len__7544__auto___7867 = arguments.length;
var i__7545__auto___7868 = (0);
while(true){
if((i__7545__auto___7868 < len__7544__auto___7867)){
args7864.push((arguments[i__7545__auto___7868]));

var G__7873 = (i__7545__auto___7868 + (1));
i__7545__auto___7868 = G__7873;
continue;
} else {
}
break;
}

var G__7866 = args7864.length;
switch (G__7866) {
case 1:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7864.length)].join('')));

}
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__6927__auto__){
return clojure.core.reducers.mapcat.call(null,f,x__6927__auto__);
});
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__7875 = null;
var G__7875__0 = (function (){
return f1.call(null);
});
var G__7875__2 = (function (ret,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,v));
});
var G__7875__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,k,v));
});
G__7875 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__7875__0.call(this);
case 2:
return G__7875__2.call(this,ret,k);
case 3:
return G__7875__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7875.cljs$core$IFn$_invoke$arity$0 = G__7875__0;
G__7875.cljs$core$IFn$_invoke$arity$2 = G__7875__2;
G__7875.cljs$core$IFn$_invoke$arity$3 = G__7875__3;
return G__7875;
})()
}));
});

clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = 2;
/**
 * Retains values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function clojure$core$reducers$filter(var_args){
var args7877 = [];
var len__7544__auto___7883 = arguments.length;
var i__7545__auto___7884 = (0);
while(true){
if((i__7545__auto___7884 < len__7544__auto___7883)){
args7877.push((arguments[i__7545__auto___7884]));

var G__7885 = (i__7545__auto___7884 + (1));
i__7545__auto___7884 = G__7885;
continue;
} else {
}
break;
}

var G__7881 = args7877.length;
switch (G__7881) {
case 1:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7877.length)].join('')));

}
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__6927__auto__){
return clojure.core.reducers.filter.call(null,pred,x__6927__auto__);
});
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__7888 = null;
var G__7888__0 = (function (){
return f1.call(null);
});
var G__7888__2 = (function (ret,v){
if(pred.call(null,v)){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__7888__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__7888 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__7888__0.call(this);
case 2:
return G__7888__2.call(this,ret,k);
case 3:
return G__7888__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7888.cljs$core$IFn$_invoke$arity$0 = G__7888__0;
G__7888.cljs$core$IFn$_invoke$arity$2 = G__7888__2;
G__7888.cljs$core$IFn$_invoke$arity$3 = G__7888__3;
return G__7888;
})()
}));
});

clojure.core.reducers.filter.cljs$lang$maxFixedArity = 2;
/**
 * Takes any nested combination of sequential things (lists, vectors,
 *   etc.) and returns their contents as a single, flat foldable
 *   collection.
 */
clojure.core.reducers.flatten = (function clojure$core$reducers$flatten(var_args){
var args7889 = [];
var len__7544__auto___7903 = arguments.length;
var i__7545__auto___7907 = (0);
while(true){
if((i__7545__auto___7907 < len__7544__auto___7903)){
args7889.push((arguments[i__7545__auto___7907]));

var G__7908 = (i__7545__auto___7907 + (1));
i__7545__auto___7907 = G__7908;
continue;
} else {
}
break;
}

var G__7896 = args7889.length;
switch (G__7896) {
case 0:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7889.length)].join('')));

}
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (x__6927__auto__){
return clojure.core.reducers.flatten.call(null,x__6927__auto__);
});
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__7912 = null;
var G__7912__0 = (function (){
return f1.call(null);
});
var G__7912__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core._reduce.call(null,clojure.core.reducers.flatten.call(null,v),f1,ret);
} else {
return f1.call(null,ret,v);
}
});
G__7912 = function(ret,v){
switch(arguments.length){
case 0:
return G__7912__0.call(this);
case 2:
return G__7912__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7912.cljs$core$IFn$_invoke$arity$0 = G__7912__0;
G__7912.cljs$core$IFn$_invoke$arity$2 = G__7912__2;
return G__7912;
})()
}));
});

clojure.core.reducers.flatten.cljs$lang$maxFixedArity = 1;
/**
 * Removes values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function clojure$core$reducers$remove(var_args){
var args7914 = [];
var len__7544__auto___7918 = arguments.length;
var i__7545__auto___7919 = (0);
while(true){
if((i__7545__auto___7919 < len__7544__auto___7918)){
args7914.push((arguments[i__7545__auto___7919]));

var G__7920 = (i__7545__auto___7919 + (1));
i__7545__auto___7919 = G__7920;
continue;
} else {
}
break;
}

var G__7917 = args7914.length;
switch (G__7917) {
case 1:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7914.length)].join('')));

}
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__6927__auto__){
return clojure.core.reducers.remove.call(null,pred,x__6927__auto__);
});
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.filter.call(null,cljs.core.complement.call(null,pred),coll);
});

clojure.core.reducers.remove.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll when (pred val) returns logical false.
 */
clojure.core.reducers.take_while = (function clojure$core$reducers$take_while(var_args){
var args7926 = [];
var len__7544__auto___7932 = arguments.length;
var i__7545__auto___7933 = (0);
while(true){
if((i__7545__auto___7933 < len__7544__auto___7932)){
args7926.push((arguments[i__7545__auto___7933]));

var G__7934 = (i__7545__auto___7933 + (1));
i__7545__auto___7933 = G__7934;
continue;
} else {
}
break;
}

var G__7931 = args7926.length;
switch (G__7931) {
case 1:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7926.length)].join('')));

}
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__6927__auto__){
return clojure.core.reducers.take_while.call(null,pred,x__6927__auto__);
});
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
return (function() {
var G__7938 = null;
var G__7938__0 = (function (){
return f1.call(null);
});
var G__7938__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
var G__7938__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
G__7938 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__7938__0.call(this);
case 2:
return G__7938__2.call(this,ret,k);
case 3:
return G__7938__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7938.cljs$core$IFn$_invoke$arity$0 = G__7938__0;
G__7938.cljs$core$IFn$_invoke$arity$2 = G__7938__2;
G__7938.cljs$core$IFn$_invoke$arity$3 = G__7938__3;
return G__7938;
})()
}));
});

clojure.core.reducers.take_while.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function clojure$core$reducers$take(var_args){
var args7943 = [];
var len__7544__auto___7958 = arguments.length;
var i__7545__auto___7959 = (0);
while(true){
if((i__7545__auto___7959 < len__7544__auto___7958)){
args7943.push((arguments[i__7545__auto___7959]));

var G__7962 = (i__7545__auto___7959 + (1));
i__7545__auto___7959 = G__7962;
continue;
} else {
}
break;
}

var G__7952 = args7943.length;
switch (G__7952) {
case 1:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7943.length)].join('')));

}
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__6927__auto__){
return clojure.core.reducers.take.call(null,n,x__6927__auto__);
});
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__7968 = null;
var G__7968__0 = (function (){
return f1.call(null);
});
var G__7968__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,v);
}
});
var G__7968__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,k,v);
}
});
G__7968 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__7968__0.call(this);
case 2:
return G__7968__2.call(this,ret,k);
case 3:
return G__7968__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7968.cljs$core$IFn$_invoke$arity$0 = G__7968__0;
G__7968.cljs$core$IFn$_invoke$arity$2 = G__7968__2;
G__7968.cljs$core$IFn$_invoke$arity$3 = G__7968__3;
return G__7968;
})()
;})(cnt))
}));
});

clojure.core.reducers.take.cljs$lang$maxFixedArity = 2;
/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function clojure$core$reducers$drop(var_args){
var args7975 = [];
var len__7544__auto___7986 = arguments.length;
var i__7545__auto___7987 = (0);
while(true){
if((i__7545__auto___7987 < len__7544__auto___7986)){
args7975.push((arguments[i__7545__auto___7987]));

var G__7990 = (i__7545__auto___7987 + (1));
i__7545__auto___7987 = G__7990;
continue;
} else {
}
break;
}

var G__7982 = args7975.length;
switch (G__7982) {
case 1:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7975.length)].join('')));

}
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__6927__auto__){
return clojure.core.reducers.drop.call(null,n,x__6927__auto__);
});
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__7993 = null;
var G__7993__0 = (function (){
return f1.call(null);
});
var G__7993__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__7993__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__7993 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__7993__0.call(this);
case 2:
return G__7993__2.call(this,ret,k);
case 3:
return G__7993__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7993.cljs$core$IFn$_invoke$arity$0 = G__7993__0;
G__7993.cljs$core$IFn$_invoke$arity$2 = G__7993__2;
G__7993.cljs$core$IFn$_invoke$arity$3 = G__7993__3;
return G__7993;
})()
;})(cnt))
}));
});

clojure.core.reducers.drop.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,cljs.core.seq.call(null,self__.left),cljs.core.seq.call(null,self__.right));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.right,f1,cljs.core._reduce.call(null,self__.left,f1,init));
});

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,reducef);
});

clojure.core.reducers.Cat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
});

clojure.core.reducers.Cat.cljs$lang$type = true;

clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"clojure.core.reducers/Cat");
});

clojure.core.reducers.__GT_Cat = (function clojure$core$reducers$__GT_Cat(cnt,left,right){
return (new clojure.core.reducers.Cat(cnt,left,right));
});

/**
 * A high-performance combining fn that yields the catenation of the
 *   reduced values. The result is reducible, foldable, seqable and
 *   counted, providing the identity collections are reducible, seqable
 *   and counted. The single argument version will build a combining fn
 *   with the supplied identity constructor. Tests for identity
 *   with (zero? (count x)). See also foldcat.
 */
clojure.core.reducers.cat = (function clojure$core$reducers$cat(var_args){
var args8025 = [];
var len__7544__auto___8034 = arguments.length;
var i__7545__auto___8035 = (0);
while(true){
if((i__7545__auto___8035 < len__7544__auto___8034)){
args8025.push((arguments[i__7545__auto___8035]));

var G__8037 = (i__7545__auto___8035 + (1));
i__7545__auto___8035 = G__8037;
continue;
} else {
}
break;
}

var G__8032 = args8025.length;
switch (G__8032) {
case 0:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8025.length)].join('')));

}
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1 = (function (ctor){
return (function() {
var G__8040 = null;
var G__8040__0 = (function (){
return ctor.call(null);
});
var G__8040__2 = (function (left,right){
return clojure.core.reducers.cat.call(null,left,right);
});
G__8040 = function(left,right){
switch(arguments.length){
case 0:
return G__8040__0.call(this);
case 2:
return G__8040__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8040.cljs$core$IFn$_invoke$arity$0 = G__8040__0;
G__8040.cljs$core$IFn$_invoke$arity$2 = G__8040__2;
return G__8040;
})()
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if((cljs.core.count.call(null,left) === (0))){
return right;
} else {
if((cljs.core.count.call(null,right) === (0))){
return left;
} else {
return (new clojure.core.reducers.Cat((cljs.core.count.call(null,left) + cljs.core.count.call(null,right)),left,right));

}
}
});

clojure.core.reducers.cat.cljs$lang$maxFixedArity = 2;
/**
 * .adds x to acc and returns acc
 */
clojure.core.reducers.append_BANG_ = (function clojure$core$reducers$append_BANG_(acc,x){
var G__8057 = acc;
G__8057.push(x);

return G__8057;
});
/**
 * Equivalent to (fold cat append! coll)
 */
clojure.core.reducers.foldcat = (function clojure$core$reducers$foldcat(coll){
return clojure.core.reducers.fold.call(null,clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
 * Builds a combining fn out of the supplied operator and identity
 *   constructor. op must be associative and ctor called with no args
 *   must return an identity value for it.
 */
clojure.core.reducers.monoid = (function clojure$core$reducers$monoid(op,ctor){
return (function() {
var clojure$core$reducers$monoid_$_m = null;
var clojure$core$reducers$monoid_$_m__0 = (function (){
return ctor.call(null);
});
var clojure$core$reducers$monoid_$_m__2 = (function (a,b){
return op.call(null,a,b);
});
clojure$core$reducers$monoid_$_m = function(a,b){
switch(arguments.length){
case 0:
return clojure$core$reducers$monoid_$_m__0.call(this);
case 2:
return clojure$core$reducers$monoid_$_m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$monoid_$_m__0;
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$monoid_$_m__2;
return clojure$core$reducers$monoid_$_m;
})()
});
clojure.core.reducers.foldvec = (function clojure$core$reducers$foldvec(v,n,combinef,reducef){
if(cljs.core.empty_QMARK_.call(null,v)){
return combinef.call(null);
} else {
if((cljs.core.count.call(null,v) <= n)){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),v);
} else {
var split = cljs.core.quot.call(null,cljs.core.count.call(null,v),(2));
var v1 = cljs.core.subvec.call(null,v,(0),split);
var v2 = cljs.core.subvec.call(null,v,split,cljs.core.count.call(null,v));
var fc = ((function (split,v1,v2){
return (function (child){
return ((function (split,v1,v2){
return (function (){
return clojure$core$reducers$foldvec.call(null,child,n,combinef,reducef);
});
;})(split,v1,v2))
});})(split,v1,v2))
;
return clojure.core.reducers.fjinvoke.call(null,((function (split,v1,v2,fc){
return (function (){
var f1 = fc.call(null,v1);
var t2 = clojure.core.reducers.fjtask.call(null,fc.call(null,v2));
clojure.core.reducers.fjfork.call(null,t2);

return combinef.call(null,f1.call(null),clojure.core.reducers.fjjoin.call(null,t2));
});})(split,v1,v2,fc))
);

}
}
});
(clojure.core.reducers.CollFold["null"] = true);

(clojure.core.reducers.coll_fold["null"] = (function (coll,n,combinef,reducef){
return combinef.call(null);
}));

(clojure.core.reducers.CollFold["object"] = true);

(clojure.core.reducers.coll_fold["object"] = (function (coll,n,combinef,reducef){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),coll);
}));

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = true;

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){
var v__$1 = this;
return clojure.core.reducers.foldvec.call(null,v__$1,n,combinef,reducef);
});

//# sourceMappingURL=reducers.js.map