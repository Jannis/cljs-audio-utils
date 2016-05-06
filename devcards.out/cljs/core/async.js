// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14998 = [];
var len__7544__auto___15012 = arguments.length;
var i__7545__auto___15013 = (0);
while(true){
if((i__7545__auto___15013 < len__7544__auto___15012)){
args14998.push((arguments[i__7545__auto___15013]));

var G__15017 = (i__7545__auto___15013 + (1));
i__7545__auto___15013 = G__15017;
continue;
} else {
}
break;
}

var G__15005 = args14998.length;
switch (G__15005) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14998.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15006 = (function (f,blockable,meta15007){
this.f = f;
this.blockable = blockable;
this.meta15007 = meta15007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15008,meta15007__$1){
var self__ = this;
var _15008__$1 = this;
return (new cljs.core.async.t_cljs$core$async15006(self__.f,self__.blockable,meta15007__$1));
});

cljs.core.async.t_cljs$core$async15006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15008){
var self__ = this;
var _15008__$1 = this;
return self__.meta15007;
});

cljs.core.async.t_cljs$core$async15006.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15006.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15007","meta15007",1091253033,null)], null);
});

cljs.core.async.t_cljs$core$async15006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15006";

cljs.core.async.t_cljs$core$async15006.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cljs.core.async/t_cljs$core$async15006");
});

cljs.core.async.__GT_t_cljs$core$async15006 = (function cljs$core$async$__GT_t_cljs$core$async15006(f__$1,blockable__$1,meta15007){
return (new cljs.core.async.t_cljs$core$async15006(f__$1,blockable__$1,meta15007));
});

}

return (new cljs.core.async.t_cljs$core$async15006(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args15055 = [];
var len__7544__auto___15059 = arguments.length;
var i__7545__auto___15060 = (0);
while(true){
if((i__7545__auto___15060 < len__7544__auto___15059)){
args15055.push((arguments[i__7545__auto___15060]));

var G__15062 = (i__7545__auto___15060 + (1));
i__7545__auto___15060 = G__15062;
continue;
} else {
}
break;
}

var G__15058 = args15055.length;
switch (G__15058) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15055.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args15068 = [];
var len__7544__auto___15072 = arguments.length;
var i__7545__auto___15073 = (0);
while(true){
if((i__7545__auto___15073 < len__7544__auto___15072)){
args15068.push((arguments[i__7545__auto___15073]));

var G__15074 = (i__7545__auto___15073 + (1));
i__7545__auto___15073 = G__15074;
continue;
} else {
}
break;
}

var G__15071 = args15068.length;
switch (G__15071) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15068.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args15083 = [];
var len__7544__auto___15090 = arguments.length;
var i__7545__auto___15091 = (0);
while(true){
if((i__7545__auto___15091 < len__7544__auto___15090)){
args15083.push((arguments[i__7545__auto___15091]));

var G__15092 = (i__7545__auto___15091 + (1));
i__7545__auto___15091 = G__15092;
continue;
} else {
}
break;
}

var G__15089 = args15083.length;
switch (G__15089) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15083.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15102 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15102);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15102,ret){
return (function (){
return fn1.call(null,val_15102);
});})(val_15102,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args15105 = [];
var len__7544__auto___15110 = arguments.length;
var i__7545__auto___15111 = (0);
while(true){
if((i__7545__auto___15111 < len__7544__auto___15110)){
args15105.push((arguments[i__7545__auto___15111]));

var G__15112 = (i__7545__auto___15111 + (1));
i__7545__auto___15111 = G__15112;
continue;
} else {
}
break;
}

var G__15107 = args15105.length;
switch (G__15107) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15105.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7389__auto___15135 = n;
var x_15136 = (0);
while(true){
if((x_15136 < n__7389__auto___15135)){
(a[x_15136] = (0));

var G__15137 = (x_15136 + (1));
x_15136 = G__15137;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__15140 = (i + (1));
i = G__15140;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async15152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15152 = (function (alt_flag,flag,meta15153){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15153 = meta15153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15154,meta15153__$1){
var self__ = this;
var _15154__$1 = this;
return (new cljs.core.async.t_cljs$core$async15152(self__.alt_flag,self__.flag,meta15153__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15154){
var self__ = this;
var _15154__$1 = this;
return self__.meta15153;
});})(flag))
;

cljs.core.async.t_cljs$core$async15152.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15152.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15152.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15152.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15152.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15153","meta15153",-177075512,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15152";

cljs.core.async.t_cljs$core$async15152.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cljs.core.async/t_cljs$core$async15152");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15152 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15152(alt_flag__$1,flag__$1,meta15153){
return (new cljs.core.async.t_cljs$core$async15152(alt_flag__$1,flag__$1,meta15153));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15152(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15173 = (function (alt_handler,flag,cb,meta15174){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15174 = meta15174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15175,meta15174__$1){
var self__ = this;
var _15175__$1 = this;
return (new cljs.core.async.t_cljs$core$async15173(self__.alt_handler,self__.flag,self__.cb,meta15174__$1));
});

cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15175){
var self__ = this;
var _15175__$1 = this;
return self__.meta15174;
});

cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15174","meta15174",-441927234,null)], null);
});

cljs.core.async.t_cljs$core$async15173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15173";

cljs.core.async.t_cljs$core$async15173.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cljs.core.async/t_cljs$core$async15173");
});

cljs.core.async.__GT_t_cljs$core$async15173 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15173(alt_handler__$1,flag__$1,cb__$1,meta15174){
return (new cljs.core.async.t_cljs$core$async15173(alt_handler__$1,flag__$1,cb__$1,meta15174));
});

}

return (new cljs.core.async.t_cljs$core$async15173(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15203_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15203_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15204_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15204_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6486__auto__ = wport;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15215 = (i + (1));
i = G__15215;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6486__auto__ = ret;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6474__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6474__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6474__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7551__auto__ = [];
var len__7544__auto___15232 = arguments.length;
var i__7545__auto___15233 = (0);
while(true){
if((i__7545__auto___15233 < len__7544__auto___15232)){
args__7551__auto__.push((arguments[i__7545__auto___15233]));

var G__15234 = (i__7545__auto___15233 + (1));
i__7545__auto___15233 = G__15234;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15226){
var map__15227 = p__15226;
var map__15227__$1 = ((((!((map__15227 == null)))?((((map__15227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15227):map__15227);
var opts = map__15227__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15220){
var G__15221 = cljs.core.first.call(null,seq15220);
var seq15220__$1 = cljs.core.next.call(null,seq15220);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15221,seq15220__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args15245 = [];
var len__7544__auto___15357 = arguments.length;
var i__7545__auto___15358 = (0);
while(true){
if((i__7545__auto___15358 < len__7544__auto___15357)){
args15245.push((arguments[i__7545__auto___15358]));

var G__15359 = (i__7545__auto___15358 + (1));
i__7545__auto___15358 = G__15359;
continue;
} else {
}
break;
}

var G__15247 = args15245.length;
switch (G__15247) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15245.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14945__auto___15364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___15364){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___15364){
return (function (state_15317){
var state_val_15321 = (state_15317[(1)]);
if((state_val_15321 === (7))){
var inst_15296 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
var statearr_15325_15366 = state_15317__$1;
(statearr_15325_15366[(2)] = inst_15296);

(statearr_15325_15366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (1))){
var state_15317__$1 = state_15317;
var statearr_15326_15367 = state_15317__$1;
(statearr_15326_15367[(2)] = null);

(statearr_15326_15367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (4))){
var inst_15269 = (state_15317[(7)]);
var inst_15269__$1 = (state_15317[(2)]);
var inst_15270 = (inst_15269__$1 == null);
var state_15317__$1 = (function (){var statearr_15327 = state_15317;
(statearr_15327[(7)] = inst_15269__$1);

return statearr_15327;
})();
if(cljs.core.truth_(inst_15270)){
var statearr_15328_15368 = state_15317__$1;
(statearr_15328_15368[(1)] = (5));

} else {
var statearr_15329_15369 = state_15317__$1;
(statearr_15329_15369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (13))){
var state_15317__$1 = state_15317;
var statearr_15330_15370 = state_15317__$1;
(statearr_15330_15370[(2)] = null);

(statearr_15330_15370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (6))){
var inst_15269 = (state_15317[(7)]);
var state_15317__$1 = state_15317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15317__$1,(11),to,inst_15269);
} else {
if((state_val_15321 === (3))){
var inst_15311 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15317__$1,inst_15311);
} else {
if((state_val_15321 === (12))){
var state_15317__$1 = state_15317;
var statearr_15331_15372 = state_15317__$1;
(statearr_15331_15372[(2)] = null);

(statearr_15331_15372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (2))){
var state_15317__$1 = state_15317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15317__$1,(4),from);
} else {
if((state_val_15321 === (11))){
var inst_15289 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
if(cljs.core.truth_(inst_15289)){
var statearr_15332_15373 = state_15317__$1;
(statearr_15332_15373[(1)] = (12));

} else {
var statearr_15333_15374 = state_15317__$1;
(statearr_15333_15374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (9))){
var state_15317__$1 = state_15317;
var statearr_15334_15375 = state_15317__$1;
(statearr_15334_15375[(2)] = null);

(statearr_15334_15375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (5))){
var state_15317__$1 = state_15317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15335_15376 = state_15317__$1;
(statearr_15335_15376[(1)] = (8));

} else {
var statearr_15336_15377 = state_15317__$1;
(statearr_15336_15377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (14))){
var inst_15294 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
var statearr_15338_15378 = state_15317__$1;
(statearr_15338_15378[(2)] = inst_15294);

(statearr_15338_15378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (10))){
var inst_15286 = (state_15317[(2)]);
var state_15317__$1 = state_15317;
var statearr_15342_15379 = state_15317__$1;
(statearr_15342_15379[(2)] = inst_15286);

(statearr_15342_15379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (8))){
var inst_15275 = cljs.core.async.close_BANG_.call(null,to);
var state_15317__$1 = state_15317;
var statearr_15343_15380 = state_15317__$1;
(statearr_15343_15380[(2)] = inst_15275);

(statearr_15343_15380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___15364))
;
return ((function (switch__14723__auto__,c__14945__auto___15364){
return (function() {
var cljs$core$async$state_machine__14724__auto__ = null;
var cljs$core$async$state_machine__14724__auto____0 = (function (){
var statearr_15350 = [null,null,null,null,null,null,null,null];
(statearr_15350[(0)] = cljs$core$async$state_machine__14724__auto__);

(statearr_15350[(1)] = (1));

return statearr_15350;
});
var cljs$core$async$state_machine__14724__auto____1 = (function (state_15317){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_15317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e15351){if((e15351 instanceof Object)){
var ex__14727__auto__ = e15351;
var statearr_15352_15385 = state_15317;
(statearr_15352_15385[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15386 = state_15317;
state_15317 = G__15386;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$state_machine__14724__auto__ = function(state_15317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14724__auto____1.call(this,state_15317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14724__auto____0;
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14724__auto____1;
return cljs$core$async$state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___15364))
})();
var state__14947__auto__ = (function (){var statearr_15356 = f__14946__auto__.call(null);
(statearr_15356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___15364);

return statearr_15356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___15364))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__15654){
var vec__15655 = p__15654;
var v = cljs.core.nth.call(null,vec__15655,(0),null);
var p = cljs.core.nth.call(null,vec__15655,(1),null);
var job = vec__15655;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14945__auto___15860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___15860,res,vec__15655,v,p,job,jobs,results){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___15860,res,vec__15655,v,p,job,jobs,results){
return (function (state_15660){
var state_val_15661 = (state_15660[(1)]);
if((state_val_15661 === (1))){
var state_15660__$1 = state_15660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15660__$1,(2),res,v);
} else {
if((state_val_15661 === (2))){
var inst_15657 = (state_15660[(2)]);
var inst_15658 = cljs.core.async.close_BANG_.call(null,res);
var state_15660__$1 = (function (){var statearr_15662 = state_15660;
(statearr_15662[(7)] = inst_15657);

return statearr_15662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15660__$1,inst_15658);
} else {
return null;
}
}
});})(c__14945__auto___15860,res,vec__15655,v,p,job,jobs,results))
;
return ((function (switch__14723__auto__,c__14945__auto___15860,res,vec__15655,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0 = (function (){
var statearr_15666 = [null,null,null,null,null,null,null,null];
(statearr_15666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__);

(statearr_15666[(1)] = (1));

return statearr_15666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1 = (function (state_15660){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_15660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e15667){if((e15667 instanceof Object)){
var ex__14727__auto__ = e15667;
var statearr_15668_15869 = state_15660;
(statearr_15668_15869[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15870 = state_15660;
state_15660 = G__15870;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__ = function(state_15660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1.call(this,state_15660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___15860,res,vec__15655,v,p,job,jobs,results))
})();
var state__14947__auto__ = (function (){var statearr_15669 = f__14946__auto__.call(null);
(statearr_15669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___15860);

return statearr_15669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___15860,res,vec__15655,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15671){
var vec__15672 = p__15671;
var v = cljs.core.nth.call(null,vec__15672,(0),null);
var p = cljs.core.nth.call(null,vec__15672,(1),null);
var job = vec__15672;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7389__auto___15875 = n;
var __15876 = (0);
while(true){
if((__15876 < n__7389__auto___15875)){
var G__15673_15877 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15673_15877) {
case "compute":
var c__14945__auto___15879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15876,c__14945__auto___15879,G__15673_15877,n__7389__auto___15875,jobs,results,process,async){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (__15876,c__14945__auto___15879,G__15673_15877,n__7389__auto___15875,jobs,results,process,async){
return (function (state_15687){
var state_val_15688 = (state_15687[(1)]);
if((state_val_15688 === (1))){
var state_15687__$1 = state_15687;
var statearr_15689_15885 = state_15687__$1;
(statearr_15689_15885[(2)] = null);

(statearr_15689_15885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15688 === (2))){
var state_15687__$1 = state_15687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15687__$1,(4),jobs);
} else {
if((state_val_15688 === (3))){
var inst_15685 = (state_15687[(2)]);
var state_15687__$1 = state_15687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15687__$1,inst_15685);
} else {
if((state_val_15688 === (4))){
var inst_15677 = (state_15687[(2)]);
var inst_15678 = process.call(null,inst_15677);
var state_15687__$1 = state_15687;
if(cljs.core.truth_(inst_15678)){
var statearr_15690_15890 = state_15687__$1;
(statearr_15690_15890[(1)] = (5));

} else {
var statearr_15691_15891 = state_15687__$1;
(statearr_15691_15891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15688 === (5))){
var state_15687__$1 = state_15687;
var statearr_15692_15892 = state_15687__$1;
(statearr_15692_15892[(2)] = null);

(statearr_15692_15892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15688 === (6))){
var state_15687__$1 = state_15687;
var statearr_15693_15893 = state_15687__$1;
(statearr_15693_15893[(2)] = null);

(statearr_15693_15893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15688 === (7))){
var inst_15683 = (state_15687[(2)]);
var state_15687__$1 = state_15687;
var statearr_15694_15894 = state_15687__$1;
(statearr_15694_15894[(2)] = inst_15683);

(statearr_15694_15894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15876,c__14945__auto___15879,G__15673_15877,n__7389__auto___15875,jobs,results,process,async))
;
return ((function (__15876,switch__14723__auto__,c__14945__auto___15879,G__15673_15877,n__7389__auto___15875,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0 = (function (){
var statearr_15698 = [null,null,null,null,null,null,null];
(statearr_15698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__);

(statearr_15698[(1)] = (1));

return statearr_15698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1 = (function (state_15687){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_15687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e15699){if((e15699 instanceof Object)){
var ex__14727__auto__ = e15699;
var statearr_15700_15895 = state_15687;
(statearr_15700_15895[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15896 = state_15687;
state_15687 = G__15896;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__ = function(state_15687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1.call(this,state_15687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__;
})()
;})(__15876,switch__14723__auto__,c__14945__auto___15879,G__15673_15877,n__7389__auto___15875,jobs,results,process,async))
})();
var state__14947__auto__ = (function (){var statearr_15701 = f__14946__auto__.call(null);
(statearr_15701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___15879);

return statearr_15701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(__15876,c__14945__auto___15879,G__15673_15877,n__7389__auto___15875,jobs,results,process,async))
);


break;
case "async":
var c__14945__auto___15897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15876,c__14945__auto___15897,G__15673_15877,n__7389__auto___15875,jobs,results,process,async){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (__15876,c__14945__auto___15897,G__15673_15877,n__7389__auto___15875,jobs,results,process,async){
return (function (state_15714){
var state_val_15718 = (state_15714[(1)]);
if((state_val_15718 === (1))){
var state_15714__$1 = state_15714;
var statearr_15719_15898 = state_15714__$1;
(statearr_15719_15898[(2)] = null);

(statearr_15719_15898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15718 === (2))){
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15714__$1,(4),jobs);
} else {
if((state_val_15718 === (3))){
var inst_15712 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15714__$1,inst_15712);
} else {
if((state_val_15718 === (4))){
var inst_15704 = (state_15714[(2)]);
var inst_15705 = async.call(null,inst_15704);
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15705)){
var statearr_15720_15899 = state_15714__$1;
(statearr_15720_15899[(1)] = (5));

} else {
var statearr_15721_15900 = state_15714__$1;
(statearr_15721_15900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15718 === (5))){
var state_15714__$1 = state_15714;
var statearr_15722_15901 = state_15714__$1;
(statearr_15722_15901[(2)] = null);

(statearr_15722_15901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15718 === (6))){
var state_15714__$1 = state_15714;
var statearr_15723_15902 = state_15714__$1;
(statearr_15723_15902[(2)] = null);

(statearr_15723_15902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15718 === (7))){
var inst_15710 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15724_15903 = state_15714__$1;
(statearr_15724_15903[(2)] = inst_15710);

(statearr_15724_15903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15876,c__14945__auto___15897,G__15673_15877,n__7389__auto___15875,jobs,results,process,async))
;
return ((function (__15876,switch__14723__auto__,c__14945__auto___15897,G__15673_15877,n__7389__auto___15875,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0 = (function (){
var statearr_15728 = [null,null,null,null,null,null,null];
(statearr_15728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__);

(statearr_15728[(1)] = (1));

return statearr_15728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1 = (function (state_15714){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_15714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e15729){if((e15729 instanceof Object)){
var ex__14727__auto__ = e15729;
var statearr_15730_15905 = state_15714;
(statearr_15730_15905[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15906 = state_15714;
state_15714 = G__15906;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__ = function(state_15714){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1.call(this,state_15714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__;
})()
;})(__15876,switch__14723__auto__,c__14945__auto___15897,G__15673_15877,n__7389__auto___15875,jobs,results,process,async))
})();
var state__14947__auto__ = (function (){var statearr_15732 = f__14946__auto__.call(null);
(statearr_15732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___15897);

return statearr_15732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(__15876,c__14945__auto___15897,G__15673_15877,n__7389__auto___15875,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15907 = (__15876 + (1));
__15876 = G__15907;
continue;
} else {
}
break;
}

var c__14945__auto___15908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___15908,jobs,results,process,async){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___15908,jobs,results,process,async){
return (function (state_15754){
var state_val_15755 = (state_15754[(1)]);
if((state_val_15755 === (1))){
var state_15754__$1 = state_15754;
var statearr_15756_15909 = state_15754__$1;
(statearr_15756_15909[(2)] = null);

(statearr_15756_15909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15755 === (2))){
var state_15754__$1 = state_15754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15754__$1,(4),from);
} else {
if((state_val_15755 === (3))){
var inst_15752 = (state_15754[(2)]);
var state_15754__$1 = state_15754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15754__$1,inst_15752);
} else {
if((state_val_15755 === (4))){
var inst_15735 = (state_15754[(7)]);
var inst_15735__$1 = (state_15754[(2)]);
var inst_15736 = (inst_15735__$1 == null);
var state_15754__$1 = (function (){var statearr_15757 = state_15754;
(statearr_15757[(7)] = inst_15735__$1);

return statearr_15757;
})();
if(cljs.core.truth_(inst_15736)){
var statearr_15758_15910 = state_15754__$1;
(statearr_15758_15910[(1)] = (5));

} else {
var statearr_15759_15911 = state_15754__$1;
(statearr_15759_15911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15755 === (5))){
var inst_15738 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15754__$1 = state_15754;
var statearr_15762_15912 = state_15754__$1;
(statearr_15762_15912[(2)] = inst_15738);

(statearr_15762_15912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15755 === (6))){
var inst_15735 = (state_15754[(7)]);
var inst_15740 = (state_15754[(8)]);
var inst_15740__$1 = cljs.core.async.chan.call(null,(1));
var inst_15741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15742 = [inst_15735,inst_15740__$1];
var inst_15743 = (new cljs.core.PersistentVector(null,2,(5),inst_15741,inst_15742,null));
var state_15754__$1 = (function (){var statearr_15764 = state_15754;
(statearr_15764[(8)] = inst_15740__$1);

return statearr_15764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15754__$1,(8),jobs,inst_15743);
} else {
if((state_val_15755 === (7))){
var inst_15750 = (state_15754[(2)]);
var state_15754__$1 = state_15754;
var statearr_15765_15913 = state_15754__$1;
(statearr_15765_15913[(2)] = inst_15750);

(statearr_15765_15913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15755 === (8))){
var inst_15740 = (state_15754[(8)]);
var inst_15745 = (state_15754[(2)]);
var state_15754__$1 = (function (){var statearr_15766 = state_15754;
(statearr_15766[(9)] = inst_15745);

return statearr_15766;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15754__$1,(9),results,inst_15740);
} else {
if((state_val_15755 === (9))){
var inst_15747 = (state_15754[(2)]);
var state_15754__$1 = (function (){var statearr_15767 = state_15754;
(statearr_15767[(10)] = inst_15747);

return statearr_15767;
})();
var statearr_15768_15914 = state_15754__$1;
(statearr_15768_15914[(2)] = null);

(statearr_15768_15914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___15908,jobs,results,process,async))
;
return ((function (switch__14723__auto__,c__14945__auto___15908,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0 = (function (){
var statearr_15774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__);

(statearr_15774[(1)] = (1));

return statearr_15774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1 = (function (state_15754){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_15754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e15775){if((e15775 instanceof Object)){
var ex__14727__auto__ = e15775;
var statearr_15776_15919 = state_15754;
(statearr_15776_15919[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15921 = state_15754;
state_15754 = G__15921;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__ = function(state_15754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1.call(this,state_15754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___15908,jobs,results,process,async))
})();
var state__14947__auto__ = (function (){var statearr_15779 = f__14946__auto__.call(null);
(statearr_15779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___15908);

return statearr_15779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___15908,jobs,results,process,async))
);


var c__14945__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto__,jobs,results,process,async){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto__,jobs,results,process,async){
return (function (state_15817){
var state_val_15818 = (state_15817[(1)]);
if((state_val_15818 === (7))){
var inst_15813 = (state_15817[(2)]);
var state_15817__$1 = state_15817;
var statearr_15819_15924 = state_15817__$1;
(statearr_15819_15924[(2)] = inst_15813);

(statearr_15819_15924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (20))){
var state_15817__$1 = state_15817;
var statearr_15820_15926 = state_15817__$1;
(statearr_15820_15926[(2)] = null);

(statearr_15820_15926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (1))){
var state_15817__$1 = state_15817;
var statearr_15821_15927 = state_15817__$1;
(statearr_15821_15927[(2)] = null);

(statearr_15821_15927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (4))){
var inst_15782 = (state_15817[(7)]);
var inst_15782__$1 = (state_15817[(2)]);
var inst_15783 = (inst_15782__$1 == null);
var state_15817__$1 = (function (){var statearr_15822 = state_15817;
(statearr_15822[(7)] = inst_15782__$1);

return statearr_15822;
})();
if(cljs.core.truth_(inst_15783)){
var statearr_15823_15930 = state_15817__$1;
(statearr_15823_15930[(1)] = (5));

} else {
var statearr_15824_15931 = state_15817__$1;
(statearr_15824_15931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (15))){
var inst_15795 = (state_15817[(8)]);
var state_15817__$1 = state_15817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15817__$1,(18),to,inst_15795);
} else {
if((state_val_15818 === (21))){
var inst_15808 = (state_15817[(2)]);
var state_15817__$1 = state_15817;
var statearr_15825_15934 = state_15817__$1;
(statearr_15825_15934[(2)] = inst_15808);

(statearr_15825_15934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (13))){
var inst_15810 = (state_15817[(2)]);
var state_15817__$1 = (function (){var statearr_15826 = state_15817;
(statearr_15826[(9)] = inst_15810);

return statearr_15826;
})();
var statearr_15827_15937 = state_15817__$1;
(statearr_15827_15937[(2)] = null);

(statearr_15827_15937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (6))){
var inst_15782 = (state_15817[(7)]);
var state_15817__$1 = state_15817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15817__$1,(11),inst_15782);
} else {
if((state_val_15818 === (17))){
var inst_15803 = (state_15817[(2)]);
var state_15817__$1 = state_15817;
if(cljs.core.truth_(inst_15803)){
var statearr_15828_15938 = state_15817__$1;
(statearr_15828_15938[(1)] = (19));

} else {
var statearr_15829_15939 = state_15817__$1;
(statearr_15829_15939[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (3))){
var inst_15815 = (state_15817[(2)]);
var state_15817__$1 = state_15817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15817__$1,inst_15815);
} else {
if((state_val_15818 === (12))){
var inst_15792 = (state_15817[(10)]);
var state_15817__$1 = state_15817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15817__$1,(14),inst_15792);
} else {
if((state_val_15818 === (2))){
var state_15817__$1 = state_15817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15817__$1,(4),results);
} else {
if((state_val_15818 === (19))){
var state_15817__$1 = state_15817;
var statearr_15830_15942 = state_15817__$1;
(statearr_15830_15942[(2)] = null);

(statearr_15830_15942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (11))){
var inst_15792 = (state_15817[(2)]);
var state_15817__$1 = (function (){var statearr_15831 = state_15817;
(statearr_15831[(10)] = inst_15792);

return statearr_15831;
})();
var statearr_15832_15943 = state_15817__$1;
(statearr_15832_15943[(2)] = null);

(statearr_15832_15943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (9))){
var state_15817__$1 = state_15817;
var statearr_15833_15944 = state_15817__$1;
(statearr_15833_15944[(2)] = null);

(statearr_15833_15944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (5))){
var state_15817__$1 = state_15817;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15834_15945 = state_15817__$1;
(statearr_15834_15945[(1)] = (8));

} else {
var statearr_15835_15946 = state_15817__$1;
(statearr_15835_15946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (14))){
var inst_15795 = (state_15817[(8)]);
var inst_15797 = (state_15817[(11)]);
var inst_15795__$1 = (state_15817[(2)]);
var inst_15796 = (inst_15795__$1 == null);
var inst_15797__$1 = cljs.core.not.call(null,inst_15796);
var state_15817__$1 = (function (){var statearr_15836 = state_15817;
(statearr_15836[(8)] = inst_15795__$1);

(statearr_15836[(11)] = inst_15797__$1);

return statearr_15836;
})();
if(inst_15797__$1){
var statearr_15837_15947 = state_15817__$1;
(statearr_15837_15947[(1)] = (15));

} else {
var statearr_15838_15948 = state_15817__$1;
(statearr_15838_15948[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (16))){
var inst_15797 = (state_15817[(11)]);
var state_15817__$1 = state_15817;
var statearr_15839_15949 = state_15817__$1;
(statearr_15839_15949[(2)] = inst_15797);

(statearr_15839_15949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (10))){
var inst_15789 = (state_15817[(2)]);
var state_15817__$1 = state_15817;
var statearr_15840_15950 = state_15817__$1;
(statearr_15840_15950[(2)] = inst_15789);

(statearr_15840_15950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (18))){
var inst_15800 = (state_15817[(2)]);
var state_15817__$1 = state_15817;
var statearr_15841_15951 = state_15817__$1;
(statearr_15841_15951[(2)] = inst_15800);

(statearr_15841_15951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15818 === (8))){
var inst_15786 = cljs.core.async.close_BANG_.call(null,to);
var state_15817__$1 = state_15817;
var statearr_15842_15952 = state_15817__$1;
(statearr_15842_15952[(2)] = inst_15786);

(statearr_15842_15952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto__,jobs,results,process,async))
;
return ((function (switch__14723__auto__,c__14945__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0 = (function (){
var statearr_15847 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15847[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__);

(statearr_15847[(1)] = (1));

return statearr_15847;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1 = (function (state_15817){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_15817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e15848){if((e15848 instanceof Object)){
var ex__14727__auto__ = e15848;
var statearr_15849_15954 = state_15817;
(statearr_15849_15954[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15956 = state_15817;
state_15817 = G__15956;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__ = function(state_15817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1.call(this,state_15817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto__,jobs,results,process,async))
})();
var state__14947__auto__ = (function (){var statearr_15850 = f__14946__auto__.call(null);
(statearr_15850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto__);

return statearr_15850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto__,jobs,results,process,async))
);

return c__14945__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args15974 = [];
var len__7544__auto___15981 = arguments.length;
var i__7545__auto___15982 = (0);
while(true){
if((i__7545__auto___15982 < len__7544__auto___15981)){
args15974.push((arguments[i__7545__auto___15982]));

var G__15983 = (i__7545__auto___15982 + (1));
i__7545__auto___15982 = G__15983;
continue;
} else {
}
break;
}

var G__15978 = args15974.length;
switch (G__15978) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15974.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args15997 = [];
var len__7544__auto___16013 = arguments.length;
var i__7545__auto___16014 = (0);
while(true){
if((i__7545__auto___16014 < len__7544__auto___16013)){
args15997.push((arguments[i__7545__auto___16014]));

var G__16016 = (i__7545__auto___16014 + (1));
i__7545__auto___16014 = G__16016;
continue;
} else {
}
break;
}

var G__16005 = args15997.length;
switch (G__16005) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15997.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args16019 = [];
var len__7544__auto___16082 = arguments.length;
var i__7545__auto___16083 = (0);
while(true){
if((i__7545__auto___16083 < len__7544__auto___16082)){
args16019.push((arguments[i__7545__auto___16083]));

var G__16084 = (i__7545__auto___16083 + (1));
i__7545__auto___16083 = G__16084;
continue;
} else {
}
break;
}

var G__16021 = args16019.length;
switch (G__16021) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16019.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__14945__auto___16088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___16088,tc,fc){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___16088,tc,fc){
return (function (state_16055){
var state_val_16056 = (state_16055[(1)]);
if((state_val_16056 === (7))){
var inst_16051 = (state_16055[(2)]);
var state_16055__$1 = state_16055;
var statearr_16057_16089 = state_16055__$1;
(statearr_16057_16089[(2)] = inst_16051);

(statearr_16057_16089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16056 === (1))){
var state_16055__$1 = state_16055;
var statearr_16058_16090 = state_16055__$1;
(statearr_16058_16090[(2)] = null);

(statearr_16058_16090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16056 === (4))){
var inst_16032 = (state_16055[(7)]);
var inst_16032__$1 = (state_16055[(2)]);
var inst_16033 = (inst_16032__$1 == null);
var state_16055__$1 = (function (){var statearr_16059 = state_16055;
(statearr_16059[(7)] = inst_16032__$1);

return statearr_16059;
})();
if(cljs.core.truth_(inst_16033)){
var statearr_16060_16091 = state_16055__$1;
(statearr_16060_16091[(1)] = (5));

} else {
var statearr_16061_16092 = state_16055__$1;
(statearr_16061_16092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16056 === (13))){
var state_16055__$1 = state_16055;
var statearr_16063_16093 = state_16055__$1;
(statearr_16063_16093[(2)] = null);

(statearr_16063_16093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16056 === (6))){
var inst_16032 = (state_16055[(7)]);
var inst_16038 = p.call(null,inst_16032);
var state_16055__$1 = state_16055;
if(cljs.core.truth_(inst_16038)){
var statearr_16064_16094 = state_16055__$1;
(statearr_16064_16094[(1)] = (9));

} else {
var statearr_16065_16095 = state_16055__$1;
(statearr_16065_16095[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16056 === (3))){
var inst_16053 = (state_16055[(2)]);
var state_16055__$1 = state_16055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16055__$1,inst_16053);
} else {
if((state_val_16056 === (12))){
var state_16055__$1 = state_16055;
var statearr_16066_16096 = state_16055__$1;
(statearr_16066_16096[(2)] = null);

(statearr_16066_16096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16056 === (2))){
var state_16055__$1 = state_16055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16055__$1,(4),ch);
} else {
if((state_val_16056 === (11))){
var inst_16032 = (state_16055[(7)]);
var inst_16042 = (state_16055[(2)]);
var state_16055__$1 = state_16055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16055__$1,(8),inst_16042,inst_16032);
} else {
if((state_val_16056 === (9))){
var state_16055__$1 = state_16055;
var statearr_16067_16097 = state_16055__$1;
(statearr_16067_16097[(2)] = tc);

(statearr_16067_16097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16056 === (5))){
var inst_16035 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16036 = cljs.core.async.close_BANG_.call(null,fc);
var state_16055__$1 = (function (){var statearr_16068 = state_16055;
(statearr_16068[(8)] = inst_16035);

return statearr_16068;
})();
var statearr_16069_16098 = state_16055__$1;
(statearr_16069_16098[(2)] = inst_16036);

(statearr_16069_16098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16056 === (14))){
var inst_16049 = (state_16055[(2)]);
var state_16055__$1 = state_16055;
var statearr_16070_16099 = state_16055__$1;
(statearr_16070_16099[(2)] = inst_16049);

(statearr_16070_16099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16056 === (10))){
var state_16055__$1 = state_16055;
var statearr_16071_16101 = state_16055__$1;
(statearr_16071_16101[(2)] = fc);

(statearr_16071_16101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16056 === (8))){
var inst_16044 = (state_16055[(2)]);
var state_16055__$1 = state_16055;
if(cljs.core.truth_(inst_16044)){
var statearr_16072_16102 = state_16055__$1;
(statearr_16072_16102[(1)] = (12));

} else {
var statearr_16073_16103 = state_16055__$1;
(statearr_16073_16103[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___16088,tc,fc))
;
return ((function (switch__14723__auto__,c__14945__auto___16088,tc,fc){
return (function() {
var cljs$core$async$state_machine__14724__auto__ = null;
var cljs$core$async$state_machine__14724__auto____0 = (function (){
var statearr_16077 = [null,null,null,null,null,null,null,null,null];
(statearr_16077[(0)] = cljs$core$async$state_machine__14724__auto__);

(statearr_16077[(1)] = (1));

return statearr_16077;
});
var cljs$core$async$state_machine__14724__auto____1 = (function (state_16055){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_16055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e16078){if((e16078 instanceof Object)){
var ex__14727__auto__ = e16078;
var statearr_16079_16109 = state_16055;
(statearr_16079_16109[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16110 = state_16055;
state_16055 = G__16110;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$state_machine__14724__auto__ = function(state_16055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14724__auto____1.call(this,state_16055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14724__auto____0;
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14724__auto____1;
return cljs$core$async$state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___16088,tc,fc))
})();
var state__14947__auto__ = (function (){var statearr_16080 = f__14946__auto__.call(null);
(statearr_16080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___16088);

return statearr_16080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___16088,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14945__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto__){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto__){
return (function (state_16182){
var state_val_16183 = (state_16182[(1)]);
if((state_val_16183 === (7))){
var inst_16178 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16184_16213 = state_16182__$1;
(statearr_16184_16213[(2)] = inst_16178);

(statearr_16184_16213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (1))){
var inst_16162 = init;
var state_16182__$1 = (function (){var statearr_16186 = state_16182;
(statearr_16186[(7)] = inst_16162);

return statearr_16186;
})();
var statearr_16187_16218 = state_16182__$1;
(statearr_16187_16218[(2)] = null);

(statearr_16187_16218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (4))){
var inst_16165 = (state_16182[(8)]);
var inst_16165__$1 = (state_16182[(2)]);
var inst_16166 = (inst_16165__$1 == null);
var state_16182__$1 = (function (){var statearr_16188 = state_16182;
(statearr_16188[(8)] = inst_16165__$1);

return statearr_16188;
})();
if(cljs.core.truth_(inst_16166)){
var statearr_16189_16219 = state_16182__$1;
(statearr_16189_16219[(1)] = (5));

} else {
var statearr_16190_16224 = state_16182__$1;
(statearr_16190_16224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (6))){
var inst_16162 = (state_16182[(7)]);
var inst_16169 = (state_16182[(9)]);
var inst_16165 = (state_16182[(8)]);
var inst_16169__$1 = f.call(null,inst_16162,inst_16165);
var inst_16170 = cljs.core.reduced_QMARK_.call(null,inst_16169__$1);
var state_16182__$1 = (function (){var statearr_16192 = state_16182;
(statearr_16192[(9)] = inst_16169__$1);

return statearr_16192;
})();
if(inst_16170){
var statearr_16193_16225 = state_16182__$1;
(statearr_16193_16225[(1)] = (8));

} else {
var statearr_16194_16226 = state_16182__$1;
(statearr_16194_16226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (3))){
var inst_16180 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16182__$1,inst_16180);
} else {
if((state_val_16183 === (2))){
var state_16182__$1 = state_16182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16182__$1,(4),ch);
} else {
if((state_val_16183 === (9))){
var inst_16169 = (state_16182[(9)]);
var inst_16162 = inst_16169;
var state_16182__$1 = (function (){var statearr_16197 = state_16182;
(statearr_16197[(7)] = inst_16162);

return statearr_16197;
})();
var statearr_16198_16227 = state_16182__$1;
(statearr_16198_16227[(2)] = null);

(statearr_16198_16227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (5))){
var inst_16162 = (state_16182[(7)]);
var state_16182__$1 = state_16182;
var statearr_16202_16228 = state_16182__$1;
(statearr_16202_16228[(2)] = inst_16162);

(statearr_16202_16228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (10))){
var inst_16176 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16203_16240 = state_16182__$1;
(statearr_16203_16240[(2)] = inst_16176);

(statearr_16203_16240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16183 === (8))){
var inst_16169 = (state_16182[(9)]);
var inst_16172 = cljs.core.deref.call(null,inst_16169);
var state_16182__$1 = state_16182;
var statearr_16205_16241 = state_16182__$1;
(statearr_16205_16241[(2)] = inst_16172);

(statearr_16205_16241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto__))
;
return ((function (switch__14723__auto__,c__14945__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14724__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14724__auto____0 = (function (){
var statearr_16209 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16209[(0)] = cljs$core$async$reduce_$_state_machine__14724__auto__);

(statearr_16209[(1)] = (1));

return statearr_16209;
});
var cljs$core$async$reduce_$_state_machine__14724__auto____1 = (function (state_16182){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_16182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e16210){if((e16210 instanceof Object)){
var ex__14727__auto__ = e16210;
var statearr_16211_16252 = state_16182;
(statearr_16211_16252[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16253 = state_16182;
state_16182 = G__16253;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14724__auto__ = function(state_16182){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14724__auto____1.call(this,state_16182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14724__auto____0;
cljs$core$async$reduce_$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14724__auto____1;
return cljs$core$async$reduce_$_state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto__))
})();
var state__14947__auto__ = (function (){var statearr_16212 = f__14946__auto__.call(null);
(statearr_16212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto__);

return statearr_16212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto__))
);

return c__14945__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args16254 = [];
var len__7544__auto___16307 = arguments.length;
var i__7545__auto___16308 = (0);
while(true){
if((i__7545__auto___16308 < len__7544__auto___16307)){
args16254.push((arguments[i__7545__auto___16308]));

var G__16309 = (i__7545__auto___16308 + (1));
i__7545__auto___16308 = G__16309;
continue;
} else {
}
break;
}

var G__16256 = args16254.length;
switch (G__16256) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16254.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14945__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto__){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto__){
return (function (state_16281){
var state_val_16282 = (state_16281[(1)]);
if((state_val_16282 === (7))){
var inst_16263 = (state_16281[(2)]);
var state_16281__$1 = state_16281;
var statearr_16283_16311 = state_16281__$1;
(statearr_16283_16311[(2)] = inst_16263);

(statearr_16283_16311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (1))){
var inst_16257 = cljs.core.seq.call(null,coll);
var inst_16258 = inst_16257;
var state_16281__$1 = (function (){var statearr_16284 = state_16281;
(statearr_16284[(7)] = inst_16258);

return statearr_16284;
})();
var statearr_16285_16314 = state_16281__$1;
(statearr_16285_16314[(2)] = null);

(statearr_16285_16314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (4))){
var inst_16258 = (state_16281[(7)]);
var inst_16261 = cljs.core.first.call(null,inst_16258);
var state_16281__$1 = state_16281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16281__$1,(7),ch,inst_16261);
} else {
if((state_val_16282 === (13))){
var inst_16275 = (state_16281[(2)]);
var state_16281__$1 = state_16281;
var statearr_16286_16316 = state_16281__$1;
(statearr_16286_16316[(2)] = inst_16275);

(statearr_16286_16316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (6))){
var inst_16266 = (state_16281[(2)]);
var state_16281__$1 = state_16281;
if(cljs.core.truth_(inst_16266)){
var statearr_16287_16317 = state_16281__$1;
(statearr_16287_16317[(1)] = (8));

} else {
var statearr_16288_16318 = state_16281__$1;
(statearr_16288_16318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (3))){
var inst_16279 = (state_16281[(2)]);
var state_16281__$1 = state_16281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16281__$1,inst_16279);
} else {
if((state_val_16282 === (12))){
var state_16281__$1 = state_16281;
var statearr_16289_16326 = state_16281__$1;
(statearr_16289_16326[(2)] = null);

(statearr_16289_16326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (2))){
var inst_16258 = (state_16281[(7)]);
var state_16281__$1 = state_16281;
if(cljs.core.truth_(inst_16258)){
var statearr_16290_16327 = state_16281__$1;
(statearr_16290_16327[(1)] = (4));

} else {
var statearr_16291_16328 = state_16281__$1;
(statearr_16291_16328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (11))){
var inst_16272 = cljs.core.async.close_BANG_.call(null,ch);
var state_16281__$1 = state_16281;
var statearr_16292_16329 = state_16281__$1;
(statearr_16292_16329[(2)] = inst_16272);

(statearr_16292_16329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (9))){
var state_16281__$1 = state_16281;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16293_16332 = state_16281__$1;
(statearr_16293_16332[(1)] = (11));

} else {
var statearr_16294_16333 = state_16281__$1;
(statearr_16294_16333[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (5))){
var inst_16258 = (state_16281[(7)]);
var state_16281__$1 = state_16281;
var statearr_16295_16334 = state_16281__$1;
(statearr_16295_16334[(2)] = inst_16258);

(statearr_16295_16334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (10))){
var inst_16277 = (state_16281[(2)]);
var state_16281__$1 = state_16281;
var statearr_16296_16338 = state_16281__$1;
(statearr_16296_16338[(2)] = inst_16277);

(statearr_16296_16338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (8))){
var inst_16258 = (state_16281[(7)]);
var inst_16268 = cljs.core.next.call(null,inst_16258);
var inst_16258__$1 = inst_16268;
var state_16281__$1 = (function (){var statearr_16297 = state_16281;
(statearr_16297[(7)] = inst_16258__$1);

return statearr_16297;
})();
var statearr_16298_16339 = state_16281__$1;
(statearr_16298_16339[(2)] = null);

(statearr_16298_16339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto__))
;
return ((function (switch__14723__auto__,c__14945__auto__){
return (function() {
var cljs$core$async$state_machine__14724__auto__ = null;
var cljs$core$async$state_machine__14724__auto____0 = (function (){
var statearr_16302 = [null,null,null,null,null,null,null,null];
(statearr_16302[(0)] = cljs$core$async$state_machine__14724__auto__);

(statearr_16302[(1)] = (1));

return statearr_16302;
});
var cljs$core$async$state_machine__14724__auto____1 = (function (state_16281){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_16281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e16303){if((e16303 instanceof Object)){
var ex__14727__auto__ = e16303;
var statearr_16304_16345 = state_16281;
(statearr_16304_16345[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16348 = state_16281;
state_16281 = G__16348;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$state_machine__14724__auto__ = function(state_16281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14724__auto____1.call(this,state_16281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14724__auto____0;
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14724__auto____1;
return cljs$core$async$state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto__))
})();
var state__14947__auto__ = (function (){var statearr_16306 = f__14946__auto__.call(null);
(statearr_16306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto__);

return statearr_16306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto__))
);

return c__14945__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7141__auto__ = (((_ == null))?null:_);
var m__7142__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,_);
} else {
var m__7142__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7141__auto__ = (((m == null))?null:m);
var m__7142__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7142__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7141__auto__ = (((m == null))?null:m);
var m__7142__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,m,ch);
} else {
var m__7142__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7141__auto__ = (((m == null))?null:m);
var m__7142__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,m);
} else {
var m__7142__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16638 = (function (mult,ch,cs,meta16639){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16639 = meta16639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16640,meta16639__$1){
var self__ = this;
var _16640__$1 = this;
return (new cljs.core.async.t_cljs$core$async16638(self__.mult,self__.ch,self__.cs,meta16639__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16640){
var self__ = this;
var _16640__$1 = this;
return self__.meta16639;
});})(cs))
;

cljs.core.async.t_cljs$core$async16638.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16638.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16638.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async16638.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16638.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16638.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16638.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16639","meta16639",-1913486291,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16638";

cljs.core.async.t_cljs$core$async16638.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cljs.core.async/t_cljs$core$async16638");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16638 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16638(mult__$1,ch__$1,cs__$1,meta16639){
return (new cljs.core.async.t_cljs$core$async16638(mult__$1,ch__$1,cs__$1,meta16639));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16638(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14945__auto___16918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___16918,cs,m,dchan,dctr,done){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___16918,cs,m,dchan,dctr,done){
return (function (state_16776){
var state_val_16777 = (state_16776[(1)]);
if((state_val_16777 === (7))){
var inst_16771 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16781_16919 = state_16776__$1;
(statearr_16781_16919[(2)] = inst_16771);

(statearr_16781_16919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (20))){
var inst_16676 = (state_16776[(7)]);
var inst_16686 = cljs.core.first.call(null,inst_16676);
var inst_16687 = cljs.core.nth.call(null,inst_16686,(0),null);
var inst_16688 = cljs.core.nth.call(null,inst_16686,(1),null);
var state_16776__$1 = (function (){var statearr_16782 = state_16776;
(statearr_16782[(8)] = inst_16687);

return statearr_16782;
})();
if(cljs.core.truth_(inst_16688)){
var statearr_16783_16920 = state_16776__$1;
(statearr_16783_16920[(1)] = (22));

} else {
var statearr_16784_16921 = state_16776__$1;
(statearr_16784_16921[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (27))){
var inst_16716 = (state_16776[(9)]);
var inst_16647 = (state_16776[(10)]);
var inst_16723 = (state_16776[(11)]);
var inst_16718 = (state_16776[(12)]);
var inst_16723__$1 = cljs.core._nth.call(null,inst_16716,inst_16718);
var inst_16724 = cljs.core.async.put_BANG_.call(null,inst_16723__$1,inst_16647,done);
var state_16776__$1 = (function (){var statearr_16785 = state_16776;
(statearr_16785[(11)] = inst_16723__$1);

return statearr_16785;
})();
if(cljs.core.truth_(inst_16724)){
var statearr_16786_16927 = state_16776__$1;
(statearr_16786_16927[(1)] = (30));

} else {
var statearr_16787_16928 = state_16776__$1;
(statearr_16787_16928[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (1))){
var state_16776__$1 = state_16776;
var statearr_16788_16932 = state_16776__$1;
(statearr_16788_16932[(2)] = null);

(statearr_16788_16932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (24))){
var inst_16676 = (state_16776[(7)]);
var inst_16693 = (state_16776[(2)]);
var inst_16694 = cljs.core.next.call(null,inst_16676);
var inst_16656 = inst_16694;
var inst_16657 = null;
var inst_16658 = (0);
var inst_16659 = (0);
var state_16776__$1 = (function (){var statearr_16789 = state_16776;
(statearr_16789[(13)] = inst_16658);

(statearr_16789[(14)] = inst_16659);

(statearr_16789[(15)] = inst_16656);

(statearr_16789[(16)] = inst_16657);

(statearr_16789[(17)] = inst_16693);

return statearr_16789;
})();
var statearr_16791_16933 = state_16776__$1;
(statearr_16791_16933[(2)] = null);

(statearr_16791_16933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (39))){
var state_16776__$1 = state_16776;
var statearr_16795_16937 = state_16776__$1;
(statearr_16795_16937[(2)] = null);

(statearr_16795_16937[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (4))){
var inst_16647 = (state_16776[(10)]);
var inst_16647__$1 = (state_16776[(2)]);
var inst_16648 = (inst_16647__$1 == null);
var state_16776__$1 = (function (){var statearr_16796 = state_16776;
(statearr_16796[(10)] = inst_16647__$1);

return statearr_16796;
})();
if(cljs.core.truth_(inst_16648)){
var statearr_16797_16938 = state_16776__$1;
(statearr_16797_16938[(1)] = (5));

} else {
var statearr_16798_16939 = state_16776__$1;
(statearr_16798_16939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (15))){
var inst_16658 = (state_16776[(13)]);
var inst_16659 = (state_16776[(14)]);
var inst_16656 = (state_16776[(15)]);
var inst_16657 = (state_16776[(16)]);
var inst_16672 = (state_16776[(2)]);
var inst_16673 = (inst_16659 + (1));
var tmp16792 = inst_16658;
var tmp16793 = inst_16656;
var tmp16794 = inst_16657;
var inst_16656__$1 = tmp16793;
var inst_16657__$1 = tmp16794;
var inst_16658__$1 = tmp16792;
var inst_16659__$1 = inst_16673;
var state_16776__$1 = (function (){var statearr_16799 = state_16776;
(statearr_16799[(13)] = inst_16658__$1);

(statearr_16799[(14)] = inst_16659__$1);

(statearr_16799[(15)] = inst_16656__$1);

(statearr_16799[(16)] = inst_16657__$1);

(statearr_16799[(18)] = inst_16672);

return statearr_16799;
})();
var statearr_16800_16940 = state_16776__$1;
(statearr_16800_16940[(2)] = null);

(statearr_16800_16940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (21))){
var inst_16697 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16804_16941 = state_16776__$1;
(statearr_16804_16941[(2)] = inst_16697);

(statearr_16804_16941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (31))){
var inst_16723 = (state_16776[(11)]);
var inst_16727 = done.call(null,null);
var inst_16728 = cljs.core.async.untap_STAR_.call(null,m,inst_16723);
var state_16776__$1 = (function (){var statearr_16809 = state_16776;
(statearr_16809[(19)] = inst_16727);

return statearr_16809;
})();
var statearr_16810_16942 = state_16776__$1;
(statearr_16810_16942[(2)] = inst_16728);

(statearr_16810_16942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (32))){
var inst_16716 = (state_16776[(9)]);
var inst_16717 = (state_16776[(20)]);
var inst_16715 = (state_16776[(21)]);
var inst_16718 = (state_16776[(12)]);
var inst_16730 = (state_16776[(2)]);
var inst_16731 = (inst_16718 + (1));
var tmp16801 = inst_16716;
var tmp16802 = inst_16717;
var tmp16803 = inst_16715;
var inst_16715__$1 = tmp16803;
var inst_16716__$1 = tmp16801;
var inst_16717__$1 = tmp16802;
var inst_16718__$1 = inst_16731;
var state_16776__$1 = (function (){var statearr_16811 = state_16776;
(statearr_16811[(9)] = inst_16716__$1);

(statearr_16811[(20)] = inst_16717__$1);

(statearr_16811[(21)] = inst_16715__$1);

(statearr_16811[(22)] = inst_16730);

(statearr_16811[(12)] = inst_16718__$1);

return statearr_16811;
})();
var statearr_16812_16944 = state_16776__$1;
(statearr_16812_16944[(2)] = null);

(statearr_16812_16944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (40))){
var inst_16743 = (state_16776[(23)]);
var inst_16747 = done.call(null,null);
var inst_16748 = cljs.core.async.untap_STAR_.call(null,m,inst_16743);
var state_16776__$1 = (function (){var statearr_16814 = state_16776;
(statearr_16814[(24)] = inst_16747);

return statearr_16814;
})();
var statearr_16815_16945 = state_16776__$1;
(statearr_16815_16945[(2)] = inst_16748);

(statearr_16815_16945[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (33))){
var inst_16734 = (state_16776[(25)]);
var inst_16736 = cljs.core.chunked_seq_QMARK_.call(null,inst_16734);
var state_16776__$1 = state_16776;
if(inst_16736){
var statearr_16816_16970 = state_16776__$1;
(statearr_16816_16970[(1)] = (36));

} else {
var statearr_16819_16971 = state_16776__$1;
(statearr_16819_16971[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (13))){
var inst_16666 = (state_16776[(26)]);
var inst_16669 = cljs.core.async.close_BANG_.call(null,inst_16666);
var state_16776__$1 = state_16776;
var statearr_16820_16972 = state_16776__$1;
(statearr_16820_16972[(2)] = inst_16669);

(statearr_16820_16972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (22))){
var inst_16687 = (state_16776[(8)]);
var inst_16690 = cljs.core.async.close_BANG_.call(null,inst_16687);
var state_16776__$1 = state_16776;
var statearr_16822_16978 = state_16776__$1;
(statearr_16822_16978[(2)] = inst_16690);

(statearr_16822_16978[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (36))){
var inst_16734 = (state_16776[(25)]);
var inst_16738 = cljs.core.chunk_first.call(null,inst_16734);
var inst_16739 = cljs.core.chunk_rest.call(null,inst_16734);
var inst_16740 = cljs.core.count.call(null,inst_16738);
var inst_16715 = inst_16739;
var inst_16716 = inst_16738;
var inst_16717 = inst_16740;
var inst_16718 = (0);
var state_16776__$1 = (function (){var statearr_16830 = state_16776;
(statearr_16830[(9)] = inst_16716);

(statearr_16830[(20)] = inst_16717);

(statearr_16830[(21)] = inst_16715);

(statearr_16830[(12)] = inst_16718);

return statearr_16830;
})();
var statearr_16834_16983 = state_16776__$1;
(statearr_16834_16983[(2)] = null);

(statearr_16834_16983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (41))){
var inst_16734 = (state_16776[(25)]);
var inst_16750 = (state_16776[(2)]);
var inst_16751 = cljs.core.next.call(null,inst_16734);
var inst_16715 = inst_16751;
var inst_16716 = null;
var inst_16717 = (0);
var inst_16718 = (0);
var state_16776__$1 = (function (){var statearr_16839 = state_16776;
(statearr_16839[(27)] = inst_16750);

(statearr_16839[(9)] = inst_16716);

(statearr_16839[(20)] = inst_16717);

(statearr_16839[(21)] = inst_16715);

(statearr_16839[(12)] = inst_16718);

return statearr_16839;
})();
var statearr_16840_16984 = state_16776__$1;
(statearr_16840_16984[(2)] = null);

(statearr_16840_16984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (43))){
var state_16776__$1 = state_16776;
var statearr_16843_16985 = state_16776__$1;
(statearr_16843_16985[(2)] = null);

(statearr_16843_16985[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (29))){
var inst_16759 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16844_16986 = state_16776__$1;
(statearr_16844_16986[(2)] = inst_16759);

(statearr_16844_16986[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (44))){
var inst_16768 = (state_16776[(2)]);
var state_16776__$1 = (function (){var statearr_16845 = state_16776;
(statearr_16845[(28)] = inst_16768);

return statearr_16845;
})();
var statearr_16846_16987 = state_16776__$1;
(statearr_16846_16987[(2)] = null);

(statearr_16846_16987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (6))){
var inst_16707 = (state_16776[(29)]);
var inst_16706 = cljs.core.deref.call(null,cs);
var inst_16707__$1 = cljs.core.keys.call(null,inst_16706);
var inst_16708 = cljs.core.count.call(null,inst_16707__$1);
var inst_16709 = cljs.core.reset_BANG_.call(null,dctr,inst_16708);
var inst_16714 = cljs.core.seq.call(null,inst_16707__$1);
var inst_16715 = inst_16714;
var inst_16716 = null;
var inst_16717 = (0);
var inst_16718 = (0);
var state_16776__$1 = (function (){var statearr_16847 = state_16776;
(statearr_16847[(30)] = inst_16709);

(statearr_16847[(9)] = inst_16716);

(statearr_16847[(29)] = inst_16707__$1);

(statearr_16847[(20)] = inst_16717);

(statearr_16847[(21)] = inst_16715);

(statearr_16847[(12)] = inst_16718);

return statearr_16847;
})();
var statearr_16848_16991 = state_16776__$1;
(statearr_16848_16991[(2)] = null);

(statearr_16848_16991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (28))){
var inst_16734 = (state_16776[(25)]);
var inst_16715 = (state_16776[(21)]);
var inst_16734__$1 = cljs.core.seq.call(null,inst_16715);
var state_16776__$1 = (function (){var statearr_16849 = state_16776;
(statearr_16849[(25)] = inst_16734__$1);

return statearr_16849;
})();
if(inst_16734__$1){
var statearr_16850_16992 = state_16776__$1;
(statearr_16850_16992[(1)] = (33));

} else {
var statearr_16851_16993 = state_16776__$1;
(statearr_16851_16993[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (25))){
var inst_16717 = (state_16776[(20)]);
var inst_16718 = (state_16776[(12)]);
var inst_16720 = (inst_16718 < inst_16717);
var inst_16721 = inst_16720;
var state_16776__$1 = state_16776;
if(cljs.core.truth_(inst_16721)){
var statearr_16856_16994 = state_16776__$1;
(statearr_16856_16994[(1)] = (27));

} else {
var statearr_16857_16995 = state_16776__$1;
(statearr_16857_16995[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (34))){
var state_16776__$1 = state_16776;
var statearr_16858_16996 = state_16776__$1;
(statearr_16858_16996[(2)] = null);

(statearr_16858_16996[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (17))){
var state_16776__$1 = state_16776;
var statearr_16859_16997 = state_16776__$1;
(statearr_16859_16997[(2)] = null);

(statearr_16859_16997[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (3))){
var inst_16773 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16776__$1,inst_16773);
} else {
if((state_val_16777 === (12))){
var inst_16702 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16860_16998 = state_16776__$1;
(statearr_16860_16998[(2)] = inst_16702);

(statearr_16860_16998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (2))){
var state_16776__$1 = state_16776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16776__$1,(4),ch);
} else {
if((state_val_16777 === (23))){
var state_16776__$1 = state_16776;
var statearr_16861_16999 = state_16776__$1;
(statearr_16861_16999[(2)] = null);

(statearr_16861_16999[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (35))){
var inst_16757 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16862_17000 = state_16776__$1;
(statearr_16862_17000[(2)] = inst_16757);

(statearr_16862_17000[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (19))){
var inst_16676 = (state_16776[(7)]);
var inst_16680 = cljs.core.chunk_first.call(null,inst_16676);
var inst_16681 = cljs.core.chunk_rest.call(null,inst_16676);
var inst_16682 = cljs.core.count.call(null,inst_16680);
var inst_16656 = inst_16681;
var inst_16657 = inst_16680;
var inst_16658 = inst_16682;
var inst_16659 = (0);
var state_16776__$1 = (function (){var statearr_16863 = state_16776;
(statearr_16863[(13)] = inst_16658);

(statearr_16863[(14)] = inst_16659);

(statearr_16863[(15)] = inst_16656);

(statearr_16863[(16)] = inst_16657);

return statearr_16863;
})();
var statearr_16864_17001 = state_16776__$1;
(statearr_16864_17001[(2)] = null);

(statearr_16864_17001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (11))){
var inst_16676 = (state_16776[(7)]);
var inst_16656 = (state_16776[(15)]);
var inst_16676__$1 = cljs.core.seq.call(null,inst_16656);
var state_16776__$1 = (function (){var statearr_16865 = state_16776;
(statearr_16865[(7)] = inst_16676__$1);

return statearr_16865;
})();
if(inst_16676__$1){
var statearr_16866_17002 = state_16776__$1;
(statearr_16866_17002[(1)] = (16));

} else {
var statearr_16867_17003 = state_16776__$1;
(statearr_16867_17003[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (9))){
var inst_16704 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16868_17005 = state_16776__$1;
(statearr_16868_17005[(2)] = inst_16704);

(statearr_16868_17005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (5))){
var inst_16654 = cljs.core.deref.call(null,cs);
var inst_16655 = cljs.core.seq.call(null,inst_16654);
var inst_16656 = inst_16655;
var inst_16657 = null;
var inst_16658 = (0);
var inst_16659 = (0);
var state_16776__$1 = (function (){var statearr_16869 = state_16776;
(statearr_16869[(13)] = inst_16658);

(statearr_16869[(14)] = inst_16659);

(statearr_16869[(15)] = inst_16656);

(statearr_16869[(16)] = inst_16657);

return statearr_16869;
})();
var statearr_16870_17006 = state_16776__$1;
(statearr_16870_17006[(2)] = null);

(statearr_16870_17006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (14))){
var state_16776__$1 = state_16776;
var statearr_16871_17007 = state_16776__$1;
(statearr_16871_17007[(2)] = null);

(statearr_16871_17007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (45))){
var inst_16765 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16873_17008 = state_16776__$1;
(statearr_16873_17008[(2)] = inst_16765);

(statearr_16873_17008[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (26))){
var inst_16707 = (state_16776[(29)]);
var inst_16761 = (state_16776[(2)]);
var inst_16762 = cljs.core.seq.call(null,inst_16707);
var state_16776__$1 = (function (){var statearr_16874 = state_16776;
(statearr_16874[(31)] = inst_16761);

return statearr_16874;
})();
if(inst_16762){
var statearr_16875_17009 = state_16776__$1;
(statearr_16875_17009[(1)] = (42));

} else {
var statearr_16876_17010 = state_16776__$1;
(statearr_16876_17010[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (16))){
var inst_16676 = (state_16776[(7)]);
var inst_16678 = cljs.core.chunked_seq_QMARK_.call(null,inst_16676);
var state_16776__$1 = state_16776;
if(inst_16678){
var statearr_16877_17011 = state_16776__$1;
(statearr_16877_17011[(1)] = (19));

} else {
var statearr_16878_17012 = state_16776__$1;
(statearr_16878_17012[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (38))){
var inst_16754 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16879_17013 = state_16776__$1;
(statearr_16879_17013[(2)] = inst_16754);

(statearr_16879_17013[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (30))){
var state_16776__$1 = state_16776;
var statearr_16880_17015 = state_16776__$1;
(statearr_16880_17015[(2)] = null);

(statearr_16880_17015[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (10))){
var inst_16659 = (state_16776[(14)]);
var inst_16657 = (state_16776[(16)]);
var inst_16665 = cljs.core._nth.call(null,inst_16657,inst_16659);
var inst_16666 = cljs.core.nth.call(null,inst_16665,(0),null);
var inst_16667 = cljs.core.nth.call(null,inst_16665,(1),null);
var state_16776__$1 = (function (){var statearr_16881 = state_16776;
(statearr_16881[(26)] = inst_16666);

return statearr_16881;
})();
if(cljs.core.truth_(inst_16667)){
var statearr_16882_17016 = state_16776__$1;
(statearr_16882_17016[(1)] = (13));

} else {
var statearr_16884_17017 = state_16776__$1;
(statearr_16884_17017[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (18))){
var inst_16700 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16885_17018 = state_16776__$1;
(statearr_16885_17018[(2)] = inst_16700);

(statearr_16885_17018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (42))){
var state_16776__$1 = state_16776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16776__$1,(45),dchan);
} else {
if((state_val_16777 === (37))){
var inst_16647 = (state_16776[(10)]);
var inst_16743 = (state_16776[(23)]);
var inst_16734 = (state_16776[(25)]);
var inst_16743__$1 = cljs.core.first.call(null,inst_16734);
var inst_16744 = cljs.core.async.put_BANG_.call(null,inst_16743__$1,inst_16647,done);
var state_16776__$1 = (function (){var statearr_16886 = state_16776;
(statearr_16886[(23)] = inst_16743__$1);

return statearr_16886;
})();
if(cljs.core.truth_(inst_16744)){
var statearr_16887_17022 = state_16776__$1;
(statearr_16887_17022[(1)] = (39));

} else {
var statearr_16888_17023 = state_16776__$1;
(statearr_16888_17023[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (8))){
var inst_16658 = (state_16776[(13)]);
var inst_16659 = (state_16776[(14)]);
var inst_16661 = (inst_16659 < inst_16658);
var inst_16662 = inst_16661;
var state_16776__$1 = state_16776;
if(cljs.core.truth_(inst_16662)){
var statearr_16889_17024 = state_16776__$1;
(statearr_16889_17024[(1)] = (10));

} else {
var statearr_16891_17025 = state_16776__$1;
(statearr_16891_17025[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___16918,cs,m,dchan,dctr,done))
;
return ((function (switch__14723__auto__,c__14945__auto___16918,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14724__auto__ = null;
var cljs$core$async$mult_$_state_machine__14724__auto____0 = (function (){
var statearr_16897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16897[(0)] = cljs$core$async$mult_$_state_machine__14724__auto__);

(statearr_16897[(1)] = (1));

return statearr_16897;
});
var cljs$core$async$mult_$_state_machine__14724__auto____1 = (function (state_16776){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_16776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e16898){if((e16898 instanceof Object)){
var ex__14727__auto__ = e16898;
var statearr_16899_17032 = state_16776;
(statearr_16899_17032[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17034 = state_16776;
state_16776 = G__17034;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14724__auto__ = function(state_16776){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14724__auto____1.call(this,state_16776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14724__auto____0;
cljs$core$async$mult_$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14724__auto____1;
return cljs$core$async$mult_$_state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___16918,cs,m,dchan,dctr,done))
})();
var state__14947__auto__ = (function (){var statearr_16901 = f__14946__auto__.call(null);
(statearr_16901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___16918);

return statearr_16901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___16918,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args17035 = [];
var len__7544__auto___17068 = arguments.length;
var i__7545__auto___17069 = (0);
while(true){
if((i__7545__auto___17069 < len__7544__auto___17068)){
args17035.push((arguments[i__7545__auto___17069]));

var G__17070 = (i__7545__auto___17069 + (1));
i__7545__auto___17069 = G__17070;
continue;
} else {
}
break;
}

var G__17064 = args17035.length;
switch (G__17064) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17035.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7141__auto__ = (((m == null))?null:m);
var m__7142__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,m,ch);
} else {
var m__7142__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7141__auto__ = (((m == null))?null:m);
var m__7142__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,m,ch);
} else {
var m__7142__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7141__auto__ = (((m == null))?null:m);
var m__7142__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,m);
} else {
var m__7142__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7141__auto__ = (((m == null))?null:m);
var m__7142__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,m,state_map);
} else {
var m__7142__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7141__auto__ = (((m == null))?null:m);
var m__7142__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,m,mode);
} else {
var m__7142__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7551__auto__ = [];
var len__7544__auto___17120 = arguments.length;
var i__7545__auto___17121 = (0);
while(true){
if((i__7545__auto___17121 < len__7544__auto___17120)){
args__7551__auto__.push((arguments[i__7545__auto___17121]));

var G__17122 = (i__7545__auto___17121 + (1));
i__7545__auto___17121 = G__17122;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((3) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7552__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17102){
var map__17103 = p__17102;
var map__17103__$1 = ((((!((map__17103 == null)))?((((map__17103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17103):map__17103);
var opts = map__17103__$1;
var statearr_17107_17126 = state;
(statearr_17107_17126[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__17103,map__17103__$1,opts){
return (function (val){
var statearr_17111_17127 = state;
(statearr_17111_17127[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17103,map__17103__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17117_17128 = state;
(statearr_17117_17128[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17094){
var G__17095 = cljs.core.first.call(null,seq17094);
var seq17094__$1 = cljs.core.next.call(null,seq17094);
var G__17096 = cljs.core.first.call(null,seq17094__$1);
var seq17094__$2 = cljs.core.next.call(null,seq17094__$1);
var G__17097 = cljs.core.first.call(null,seq17094__$2);
var seq17094__$3 = cljs.core.next.call(null,seq17094__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17095,G__17096,G__17097,seq17094__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17370 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17371){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17371 = meta17371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17372,meta17371__$1){
var self__ = this;
var _17372__$1 = this;
return (new cljs.core.async.t_cljs$core$async17370(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17371__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17372){
var self__ = this;
var _17372__$1 = this;
return self__.meta17371;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17370.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17371","meta17371",-1938820986,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17370";

cljs.core.async.t_cljs$core$async17370.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cljs.core.async/t_cljs$core$async17370");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17370 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17370(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17371){
return (new cljs.core.async.t_cljs$core$async17370(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17371));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17370(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14945__auto___17621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___17621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___17621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17484){
var state_val_17485 = (state_17484[(1)]);
if((state_val_17485 === (7))){
var inst_17392 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
var statearr_17490_17630 = state_17484__$1;
(statearr_17490_17630[(2)] = inst_17392);

(statearr_17490_17630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (20))){
var inst_17405 = (state_17484[(7)]);
var state_17484__$1 = state_17484;
var statearr_17491_17633 = state_17484__$1;
(statearr_17491_17633[(2)] = inst_17405);

(statearr_17491_17633[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (27))){
var state_17484__$1 = state_17484;
var statearr_17495_17634 = state_17484__$1;
(statearr_17495_17634[(2)] = null);

(statearr_17495_17634[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (1))){
var inst_17380 = (state_17484[(8)]);
var inst_17380__$1 = calc_state.call(null);
var inst_17382 = (inst_17380__$1 == null);
var inst_17383 = cljs.core.not.call(null,inst_17382);
var state_17484__$1 = (function (){var statearr_17496 = state_17484;
(statearr_17496[(8)] = inst_17380__$1);

return statearr_17496;
})();
if(inst_17383){
var statearr_17497_17648 = state_17484__$1;
(statearr_17497_17648[(1)] = (2));

} else {
var statearr_17498_17649 = state_17484__$1;
(statearr_17498_17649[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (24))){
var inst_17429 = (state_17484[(9)]);
var inst_17452 = (state_17484[(10)]);
var inst_17436 = (state_17484[(11)]);
var inst_17452__$1 = inst_17429.call(null,inst_17436);
var state_17484__$1 = (function (){var statearr_17499 = state_17484;
(statearr_17499[(10)] = inst_17452__$1);

return statearr_17499;
})();
if(cljs.core.truth_(inst_17452__$1)){
var statearr_17500_17651 = state_17484__$1;
(statearr_17500_17651[(1)] = (29));

} else {
var statearr_17501_17652 = state_17484__$1;
(statearr_17501_17652[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (4))){
var inst_17395 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
if(cljs.core.truth_(inst_17395)){
var statearr_17504_17653 = state_17484__$1;
(statearr_17504_17653[(1)] = (8));

} else {
var statearr_17505_17654 = state_17484__$1;
(statearr_17505_17654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (15))){
var inst_17423 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
if(cljs.core.truth_(inst_17423)){
var statearr_17506_17655 = state_17484__$1;
(statearr_17506_17655[(1)] = (19));

} else {
var statearr_17507_17656 = state_17484__$1;
(statearr_17507_17656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (21))){
var inst_17428 = (state_17484[(12)]);
var inst_17428__$1 = (state_17484[(2)]);
var inst_17429 = cljs.core.get.call(null,inst_17428__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17430 = cljs.core.get.call(null,inst_17428__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17431 = cljs.core.get.call(null,inst_17428__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17484__$1 = (function (){var statearr_17508 = state_17484;
(statearr_17508[(12)] = inst_17428__$1);

(statearr_17508[(9)] = inst_17429);

(statearr_17508[(13)] = inst_17430);

return statearr_17508;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17484__$1,(22),inst_17431);
} else {
if((state_val_17485 === (31))){
var inst_17461 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
if(cljs.core.truth_(inst_17461)){
var statearr_17513_17657 = state_17484__$1;
(statearr_17513_17657[(1)] = (32));

} else {
var statearr_17514_17658 = state_17484__$1;
(statearr_17514_17658[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (32))){
var inst_17435 = (state_17484[(14)]);
var state_17484__$1 = state_17484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17484__$1,(35),out,inst_17435);
} else {
if((state_val_17485 === (33))){
var inst_17428 = (state_17484[(12)]);
var inst_17405 = inst_17428;
var state_17484__$1 = (function (){var statearr_17515 = state_17484;
(statearr_17515[(7)] = inst_17405);

return statearr_17515;
})();
var statearr_17516_17659 = state_17484__$1;
(statearr_17516_17659[(2)] = null);

(statearr_17516_17659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (13))){
var inst_17405 = (state_17484[(7)]);
var inst_17412 = inst_17405.cljs$lang$protocol_mask$partition0$;
var inst_17413 = (inst_17412 & (64));
var inst_17414 = inst_17405.cljs$core$ISeq$;
var inst_17415 = (inst_17413) || (inst_17414);
var state_17484__$1 = state_17484;
if(cljs.core.truth_(inst_17415)){
var statearr_17517_17660 = state_17484__$1;
(statearr_17517_17660[(1)] = (16));

} else {
var statearr_17518_17661 = state_17484__$1;
(statearr_17518_17661[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (22))){
var inst_17435 = (state_17484[(14)]);
var inst_17436 = (state_17484[(11)]);
var inst_17434 = (state_17484[(2)]);
var inst_17435__$1 = cljs.core.nth.call(null,inst_17434,(0),null);
var inst_17436__$1 = cljs.core.nth.call(null,inst_17434,(1),null);
var inst_17437 = (inst_17435__$1 == null);
var inst_17438 = cljs.core._EQ_.call(null,inst_17436__$1,change);
var inst_17439 = (inst_17437) || (inst_17438);
var state_17484__$1 = (function (){var statearr_17519 = state_17484;
(statearr_17519[(14)] = inst_17435__$1);

(statearr_17519[(11)] = inst_17436__$1);

return statearr_17519;
})();
if(cljs.core.truth_(inst_17439)){
var statearr_17520_17662 = state_17484__$1;
(statearr_17520_17662[(1)] = (23));

} else {
var statearr_17525_17663 = state_17484__$1;
(statearr_17525_17663[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (36))){
var inst_17428 = (state_17484[(12)]);
var inst_17405 = inst_17428;
var state_17484__$1 = (function (){var statearr_17526 = state_17484;
(statearr_17526[(7)] = inst_17405);

return statearr_17526;
})();
var statearr_17527_17664 = state_17484__$1;
(statearr_17527_17664[(2)] = null);

(statearr_17527_17664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (29))){
var inst_17452 = (state_17484[(10)]);
var state_17484__$1 = state_17484;
var statearr_17532_17665 = state_17484__$1;
(statearr_17532_17665[(2)] = inst_17452);

(statearr_17532_17665[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (6))){
var state_17484__$1 = state_17484;
var statearr_17533_17666 = state_17484__$1;
(statearr_17533_17666[(2)] = false);

(statearr_17533_17666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (28))){
var inst_17446 = (state_17484[(2)]);
var inst_17447 = calc_state.call(null);
var inst_17405 = inst_17447;
var state_17484__$1 = (function (){var statearr_17534 = state_17484;
(statearr_17534[(15)] = inst_17446);

(statearr_17534[(7)] = inst_17405);

return statearr_17534;
})();
var statearr_17535_17667 = state_17484__$1;
(statearr_17535_17667[(2)] = null);

(statearr_17535_17667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (25))){
var inst_17479 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
var statearr_17536_17668 = state_17484__$1;
(statearr_17536_17668[(2)] = inst_17479);

(statearr_17536_17668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (34))){
var inst_17477 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
var statearr_17538_17669 = state_17484__$1;
(statearr_17538_17669[(2)] = inst_17477);

(statearr_17538_17669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (17))){
var state_17484__$1 = state_17484;
var statearr_17540_17671 = state_17484__$1;
(statearr_17540_17671[(2)] = false);

(statearr_17540_17671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (3))){
var state_17484__$1 = state_17484;
var statearr_17541_17672 = state_17484__$1;
(statearr_17541_17672[(2)] = false);

(statearr_17541_17672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (12))){
var inst_17481 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17484__$1,inst_17481);
} else {
if((state_val_17485 === (2))){
var inst_17380 = (state_17484[(8)]);
var inst_17385 = inst_17380.cljs$lang$protocol_mask$partition0$;
var inst_17386 = (inst_17385 & (64));
var inst_17387 = inst_17380.cljs$core$ISeq$;
var inst_17388 = (inst_17386) || (inst_17387);
var state_17484__$1 = state_17484;
if(cljs.core.truth_(inst_17388)){
var statearr_17543_17673 = state_17484__$1;
(statearr_17543_17673[(1)] = (5));

} else {
var statearr_17544_17674 = state_17484__$1;
(statearr_17544_17674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (23))){
var inst_17435 = (state_17484[(14)]);
var inst_17441 = (inst_17435 == null);
var state_17484__$1 = state_17484;
if(cljs.core.truth_(inst_17441)){
var statearr_17545_17675 = state_17484__$1;
(statearr_17545_17675[(1)] = (26));

} else {
var statearr_17548_17676 = state_17484__$1;
(statearr_17548_17676[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (35))){
var inst_17464 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
if(cljs.core.truth_(inst_17464)){
var statearr_17549_17677 = state_17484__$1;
(statearr_17549_17677[(1)] = (36));

} else {
var statearr_17550_17678 = state_17484__$1;
(statearr_17550_17678[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (19))){
var inst_17405 = (state_17484[(7)]);
var inst_17425 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17405);
var state_17484__$1 = state_17484;
var statearr_17561_17679 = state_17484__$1;
(statearr_17561_17679[(2)] = inst_17425);

(statearr_17561_17679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (11))){
var inst_17405 = (state_17484[(7)]);
var inst_17409 = (inst_17405 == null);
var inst_17410 = cljs.core.not.call(null,inst_17409);
var state_17484__$1 = state_17484;
if(inst_17410){
var statearr_17564_17680 = state_17484__$1;
(statearr_17564_17680[(1)] = (13));

} else {
var statearr_17565_17681 = state_17484__$1;
(statearr_17565_17681[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (9))){
var inst_17380 = (state_17484[(8)]);
var state_17484__$1 = state_17484;
var statearr_17566_17682 = state_17484__$1;
(statearr_17566_17682[(2)] = inst_17380);

(statearr_17566_17682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (5))){
var state_17484__$1 = state_17484;
var statearr_17567_17683 = state_17484__$1;
(statearr_17567_17683[(2)] = true);

(statearr_17567_17683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (14))){
var state_17484__$1 = state_17484;
var statearr_17568_17684 = state_17484__$1;
(statearr_17568_17684[(2)] = false);

(statearr_17568_17684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (26))){
var inst_17436 = (state_17484[(11)]);
var inst_17443 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17436);
var state_17484__$1 = state_17484;
var statearr_17569_17685 = state_17484__$1;
(statearr_17569_17685[(2)] = inst_17443);

(statearr_17569_17685[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (16))){
var state_17484__$1 = state_17484;
var statearr_17575_17686 = state_17484__$1;
(statearr_17575_17686[(2)] = true);

(statearr_17575_17686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (38))){
var inst_17473 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
var statearr_17576_17687 = state_17484__$1;
(statearr_17576_17687[(2)] = inst_17473);

(statearr_17576_17687[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (30))){
var inst_17429 = (state_17484[(9)]);
var inst_17430 = (state_17484[(13)]);
var inst_17436 = (state_17484[(11)]);
var inst_17456 = cljs.core.empty_QMARK_.call(null,inst_17429);
var inst_17457 = inst_17430.call(null,inst_17436);
var inst_17458 = cljs.core.not.call(null,inst_17457);
var inst_17459 = (inst_17456) && (inst_17458);
var state_17484__$1 = state_17484;
var statearr_17577_17688 = state_17484__$1;
(statearr_17577_17688[(2)] = inst_17459);

(statearr_17577_17688[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (10))){
var inst_17380 = (state_17484[(8)]);
var inst_17400 = (state_17484[(2)]);
var inst_17402 = cljs.core.get.call(null,inst_17400,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17403 = cljs.core.get.call(null,inst_17400,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17404 = cljs.core.get.call(null,inst_17400,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17405 = inst_17380;
var state_17484__$1 = (function (){var statearr_17578 = state_17484;
(statearr_17578[(16)] = inst_17404);

(statearr_17578[(17)] = inst_17402);

(statearr_17578[(18)] = inst_17403);

(statearr_17578[(7)] = inst_17405);

return statearr_17578;
})();
var statearr_17579_17689 = state_17484__$1;
(statearr_17579_17689[(2)] = null);

(statearr_17579_17689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (18))){
var inst_17419 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
var statearr_17580_17690 = state_17484__$1;
(statearr_17580_17690[(2)] = inst_17419);

(statearr_17580_17690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (37))){
var state_17484__$1 = state_17484;
var statearr_17581_17691 = state_17484__$1;
(statearr_17581_17691[(2)] = null);

(statearr_17581_17691[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (8))){
var inst_17380 = (state_17484[(8)]);
var inst_17397 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17380);
var state_17484__$1 = state_17484;
var statearr_17582_17692 = state_17484__$1;
(statearr_17582_17692[(2)] = inst_17397);

(statearr_17582_17692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___17621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14723__auto__,c__14945__auto___17621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14724__auto__ = null;
var cljs$core$async$mix_$_state_machine__14724__auto____0 = (function (){
var statearr_17596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17596[(0)] = cljs$core$async$mix_$_state_machine__14724__auto__);

(statearr_17596[(1)] = (1));

return statearr_17596;
});
var cljs$core$async$mix_$_state_machine__14724__auto____1 = (function (state_17484){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_17484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e17597){if((e17597 instanceof Object)){
var ex__14727__auto__ = e17597;
var statearr_17598_17693 = state_17484;
(statearr_17598_17693[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17694 = state_17484;
state_17484 = G__17694;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14724__auto__ = function(state_17484){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14724__auto____1.call(this,state_17484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14724__auto____0;
cljs$core$async$mix_$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14724__auto____1;
return cljs$core$async$mix_$_state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___17621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14947__auto__ = (function (){var statearr_17599 = f__14946__auto__.call(null);
(statearr_17599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___17621);

return statearr_17599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___17621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7141__auto__ = (((p == null))?null:p);
var m__7142__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7142__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7141__auto__ = (((p == null))?null:p);
var m__7142__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,p,v,ch);
} else {
var m__7142__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17702 = [];
var len__7544__auto___17705 = arguments.length;
var i__7545__auto___17706 = (0);
while(true){
if((i__7545__auto___17706 < len__7544__auto___17705)){
args17702.push((arguments[i__7545__auto___17706]));

var G__17707 = (i__7545__auto___17706 + (1));
i__7545__auto___17706 = G__17707;
continue;
} else {
}
break;
}

var G__17704 = args17702.length;
switch (G__17704) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17702.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7141__auto__ = (((p == null))?null:p);
var m__7142__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,p);
} else {
var m__7142__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7141__auto__ = (((p == null))?null:p);
var m__7142__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7141__auto__)]);
if(!((m__7142__auto__ == null))){
return m__7142__auto__.call(null,p,v);
} else {
var m__7142__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7142__auto____$1 == null))){
return m__7142__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args17713 = [];
var len__7544__auto___17872 = arguments.length;
var i__7545__auto___17873 = (0);
while(true){
if((i__7545__auto___17873 < len__7544__auto___17872)){
args17713.push((arguments[i__7545__auto___17873]));

var G__17874 = (i__7545__auto___17873 + (1));
i__7545__auto___17873 = G__17874;
continue;
} else {
}
break;
}

var G__17715 = args17713.length;
switch (G__17715) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17713.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6486__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6486__auto__,mults){
return (function (p1__17712_SHARP_){
if(cljs.core.truth_(p1__17712_SHARP_.call(null,topic))){
return p1__17712_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17712_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6486__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17721 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17722){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17722 = meta17722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17723,meta17722__$1){
var self__ = this;
var _17723__$1 = this;
return (new cljs.core.async.t_cljs$core$async17721(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17722__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17723){
var self__ = this;
var _17723__$1 = this;
return self__.meta17722;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17721.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17721.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17722","meta17722",-384376810,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17721";

cljs.core.async.t_cljs$core$async17721.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cljs.core.async/t_cljs$core$async17721");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17721 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17721(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17722){
return (new cljs.core.async.t_cljs$core$async17721(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17722));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17721(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14945__auto___17876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___17876,mults,ensure_mult,p){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___17876,mults,ensure_mult,p){
return (function (state_17820){
var state_val_17821 = (state_17820[(1)]);
if((state_val_17821 === (7))){
var inst_17816 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17822_17878 = state_17820__$1;
(statearr_17822_17878[(2)] = inst_17816);

(statearr_17822_17878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (20))){
var state_17820__$1 = state_17820;
var statearr_17823_17879 = state_17820__$1;
(statearr_17823_17879[(2)] = null);

(statearr_17823_17879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (1))){
var state_17820__$1 = state_17820;
var statearr_17824_17880 = state_17820__$1;
(statearr_17824_17880[(2)] = null);

(statearr_17824_17880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (24))){
var inst_17794 = (state_17820[(7)]);
var inst_17808 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17794);
var state_17820__$1 = state_17820;
var statearr_17825_17881 = state_17820__$1;
(statearr_17825_17881[(2)] = inst_17808);

(statearr_17825_17881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (4))){
var inst_17741 = (state_17820[(8)]);
var inst_17741__$1 = (state_17820[(2)]);
var inst_17742 = (inst_17741__$1 == null);
var state_17820__$1 = (function (){var statearr_17826 = state_17820;
(statearr_17826[(8)] = inst_17741__$1);

return statearr_17826;
})();
if(cljs.core.truth_(inst_17742)){
var statearr_17827_17882 = state_17820__$1;
(statearr_17827_17882[(1)] = (5));

} else {
var statearr_17828_17883 = state_17820__$1;
(statearr_17828_17883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (15))){
var inst_17788 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17829_17884 = state_17820__$1;
(statearr_17829_17884[(2)] = inst_17788);

(statearr_17829_17884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (21))){
var inst_17813 = (state_17820[(2)]);
var state_17820__$1 = (function (){var statearr_17830 = state_17820;
(statearr_17830[(9)] = inst_17813);

return statearr_17830;
})();
var statearr_17831_17885 = state_17820__$1;
(statearr_17831_17885[(2)] = null);

(statearr_17831_17885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (13))){
var inst_17770 = (state_17820[(10)]);
var inst_17772 = cljs.core.chunked_seq_QMARK_.call(null,inst_17770);
var state_17820__$1 = state_17820;
if(inst_17772){
var statearr_17832_17886 = state_17820__$1;
(statearr_17832_17886[(1)] = (16));

} else {
var statearr_17833_17887 = state_17820__$1;
(statearr_17833_17887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (22))){
var inst_17805 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
if(cljs.core.truth_(inst_17805)){
var statearr_17834_17888 = state_17820__$1;
(statearr_17834_17888[(1)] = (23));

} else {
var statearr_17835_17889 = state_17820__$1;
(statearr_17835_17889[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (6))){
var inst_17794 = (state_17820[(7)]);
var inst_17741 = (state_17820[(8)]);
var inst_17801 = (state_17820[(11)]);
var inst_17794__$1 = topic_fn.call(null,inst_17741);
var inst_17800 = cljs.core.deref.call(null,mults);
var inst_17801__$1 = cljs.core.get.call(null,inst_17800,inst_17794__$1);
var state_17820__$1 = (function (){var statearr_17836 = state_17820;
(statearr_17836[(7)] = inst_17794__$1);

(statearr_17836[(11)] = inst_17801__$1);

return statearr_17836;
})();
if(cljs.core.truth_(inst_17801__$1)){
var statearr_17837_17891 = state_17820__$1;
(statearr_17837_17891[(1)] = (19));

} else {
var statearr_17838_17892 = state_17820__$1;
(statearr_17838_17892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (25))){
var inst_17810 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17840_17893 = state_17820__$1;
(statearr_17840_17893[(2)] = inst_17810);

(statearr_17840_17893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (17))){
var inst_17770 = (state_17820[(10)]);
var inst_17779 = cljs.core.first.call(null,inst_17770);
var inst_17780 = cljs.core.async.muxch_STAR_.call(null,inst_17779);
var inst_17781 = cljs.core.async.close_BANG_.call(null,inst_17780);
var inst_17782 = cljs.core.next.call(null,inst_17770);
var inst_17751 = inst_17782;
var inst_17752 = null;
var inst_17753 = (0);
var inst_17754 = (0);
var state_17820__$1 = (function (){var statearr_17842 = state_17820;
(statearr_17842[(12)] = inst_17752);

(statearr_17842[(13)] = inst_17781);

(statearr_17842[(14)] = inst_17754);

(statearr_17842[(15)] = inst_17751);

(statearr_17842[(16)] = inst_17753);

return statearr_17842;
})();
var statearr_17843_17895 = state_17820__$1;
(statearr_17843_17895[(2)] = null);

(statearr_17843_17895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (3))){
var inst_17818 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17820__$1,inst_17818);
} else {
if((state_val_17821 === (12))){
var inst_17790 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17844_17897 = state_17820__$1;
(statearr_17844_17897[(2)] = inst_17790);

(statearr_17844_17897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (2))){
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17820__$1,(4),ch);
} else {
if((state_val_17821 === (23))){
var state_17820__$1 = state_17820;
var statearr_17845_17902 = state_17820__$1;
(statearr_17845_17902[(2)] = null);

(statearr_17845_17902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (19))){
var inst_17741 = (state_17820[(8)]);
var inst_17801 = (state_17820[(11)]);
var inst_17803 = cljs.core.async.muxch_STAR_.call(null,inst_17801);
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17820__$1,(22),inst_17803,inst_17741);
} else {
if((state_val_17821 === (11))){
var inst_17770 = (state_17820[(10)]);
var inst_17751 = (state_17820[(15)]);
var inst_17770__$1 = cljs.core.seq.call(null,inst_17751);
var state_17820__$1 = (function (){var statearr_17847 = state_17820;
(statearr_17847[(10)] = inst_17770__$1);

return statearr_17847;
})();
if(inst_17770__$1){
var statearr_17848_17903 = state_17820__$1;
(statearr_17848_17903[(1)] = (13));

} else {
var statearr_17849_17904 = state_17820__$1;
(statearr_17849_17904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (9))){
var inst_17792 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17850_17905 = state_17820__$1;
(statearr_17850_17905[(2)] = inst_17792);

(statearr_17850_17905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (5))){
var inst_17748 = cljs.core.deref.call(null,mults);
var inst_17749 = cljs.core.vals.call(null,inst_17748);
var inst_17750 = cljs.core.seq.call(null,inst_17749);
var inst_17751 = inst_17750;
var inst_17752 = null;
var inst_17753 = (0);
var inst_17754 = (0);
var state_17820__$1 = (function (){var statearr_17851 = state_17820;
(statearr_17851[(12)] = inst_17752);

(statearr_17851[(14)] = inst_17754);

(statearr_17851[(15)] = inst_17751);

(statearr_17851[(16)] = inst_17753);

return statearr_17851;
})();
var statearr_17852_17906 = state_17820__$1;
(statearr_17852_17906[(2)] = null);

(statearr_17852_17906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (14))){
var state_17820__$1 = state_17820;
var statearr_17856_17907 = state_17820__$1;
(statearr_17856_17907[(2)] = null);

(statearr_17856_17907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (16))){
var inst_17770 = (state_17820[(10)]);
var inst_17774 = cljs.core.chunk_first.call(null,inst_17770);
var inst_17775 = cljs.core.chunk_rest.call(null,inst_17770);
var inst_17776 = cljs.core.count.call(null,inst_17774);
var inst_17751 = inst_17775;
var inst_17752 = inst_17774;
var inst_17753 = inst_17776;
var inst_17754 = (0);
var state_17820__$1 = (function (){var statearr_17857 = state_17820;
(statearr_17857[(12)] = inst_17752);

(statearr_17857[(14)] = inst_17754);

(statearr_17857[(15)] = inst_17751);

(statearr_17857[(16)] = inst_17753);

return statearr_17857;
})();
var statearr_17858_17908 = state_17820__$1;
(statearr_17858_17908[(2)] = null);

(statearr_17858_17908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (10))){
var inst_17752 = (state_17820[(12)]);
var inst_17754 = (state_17820[(14)]);
var inst_17751 = (state_17820[(15)]);
var inst_17753 = (state_17820[(16)]);
var inst_17764 = cljs.core._nth.call(null,inst_17752,inst_17754);
var inst_17765 = cljs.core.async.muxch_STAR_.call(null,inst_17764);
var inst_17766 = cljs.core.async.close_BANG_.call(null,inst_17765);
var inst_17767 = (inst_17754 + (1));
var tmp17853 = inst_17752;
var tmp17854 = inst_17751;
var tmp17855 = inst_17753;
var inst_17751__$1 = tmp17854;
var inst_17752__$1 = tmp17853;
var inst_17753__$1 = tmp17855;
var inst_17754__$1 = inst_17767;
var state_17820__$1 = (function (){var statearr_17859 = state_17820;
(statearr_17859[(12)] = inst_17752__$1);

(statearr_17859[(17)] = inst_17766);

(statearr_17859[(14)] = inst_17754__$1);

(statearr_17859[(15)] = inst_17751__$1);

(statearr_17859[(16)] = inst_17753__$1);

return statearr_17859;
})();
var statearr_17860_17909 = state_17820__$1;
(statearr_17860_17909[(2)] = null);

(statearr_17860_17909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (18))){
var inst_17785 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17861_17910 = state_17820__$1;
(statearr_17861_17910[(2)] = inst_17785);

(statearr_17861_17910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (8))){
var inst_17754 = (state_17820[(14)]);
var inst_17753 = (state_17820[(16)]);
var inst_17761 = (inst_17754 < inst_17753);
var inst_17762 = inst_17761;
var state_17820__$1 = state_17820;
if(cljs.core.truth_(inst_17762)){
var statearr_17862_17911 = state_17820__$1;
(statearr_17862_17911[(1)] = (10));

} else {
var statearr_17863_17912 = state_17820__$1;
(statearr_17863_17912[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___17876,mults,ensure_mult,p))
;
return ((function (switch__14723__auto__,c__14945__auto___17876,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14724__auto__ = null;
var cljs$core$async$state_machine__14724__auto____0 = (function (){
var statearr_17868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17868[(0)] = cljs$core$async$state_machine__14724__auto__);

(statearr_17868[(1)] = (1));

return statearr_17868;
});
var cljs$core$async$state_machine__14724__auto____1 = (function (state_17820){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_17820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e17869){if((e17869 instanceof Object)){
var ex__14727__auto__ = e17869;
var statearr_17870_17913 = state_17820;
(statearr_17870_17913[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17915 = state_17820;
state_17820 = G__17915;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$state_machine__14724__auto__ = function(state_17820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14724__auto____1.call(this,state_17820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14724__auto____0;
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14724__auto____1;
return cljs$core$async$state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___17876,mults,ensure_mult,p))
})();
var state__14947__auto__ = (function (){var statearr_17871 = f__14946__auto__.call(null);
(statearr_17871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___17876);

return statearr_17871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___17876,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args17916 = [];
var len__7544__auto___17926 = arguments.length;
var i__7545__auto___17927 = (0);
while(true){
if((i__7545__auto___17927 < len__7544__auto___17926)){
args17916.push((arguments[i__7545__auto___17927]));

var G__17928 = (i__7545__auto___17927 + (1));
i__7545__auto___17927 = G__17928;
continue;
} else {
}
break;
}

var G__17918 = args17916.length;
switch (G__17918) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17916.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args17930 = [];
var len__7544__auto___17948 = arguments.length;
var i__7545__auto___17949 = (0);
while(true){
if((i__7545__auto___17949 < len__7544__auto___17948)){
args17930.push((arguments[i__7545__auto___17949]));

var G__17950 = (i__7545__auto___17949 + (1));
i__7545__auto___17949 = G__17950;
continue;
} else {
}
break;
}

var G__17947 = args17930.length;
switch (G__17947) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17930.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args17962 = [];
var len__7544__auto___18037 = arguments.length;
var i__7545__auto___18038 = (0);
while(true){
if((i__7545__auto___18038 < len__7544__auto___18037)){
args17962.push((arguments[i__7545__auto___18038]));

var G__18039 = (i__7545__auto___18038 + (1));
i__7545__auto___18038 = G__18039;
continue;
} else {
}
break;
}

var G__17964 = args17962.length;
switch (G__17964) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17962.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__14945__auto___18041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___18041,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___18041,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18006){
var state_val_18007 = (state_18006[(1)]);
if((state_val_18007 === (7))){
var state_18006__$1 = state_18006;
var statearr_18008_18042 = state_18006__$1;
(statearr_18008_18042[(2)] = null);

(statearr_18008_18042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (1))){
var state_18006__$1 = state_18006;
var statearr_18009_18043 = state_18006__$1;
(statearr_18009_18043[(2)] = null);

(statearr_18009_18043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (4))){
var inst_17968 = (state_18006[(7)]);
var inst_17970 = (inst_17968 < cnt);
var state_18006__$1 = state_18006;
if(cljs.core.truth_(inst_17970)){
var statearr_18010_18047 = state_18006__$1;
(statearr_18010_18047[(1)] = (6));

} else {
var statearr_18011_18048 = state_18006__$1;
(statearr_18011_18048[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (15))){
var inst_18002 = (state_18006[(2)]);
var state_18006__$1 = state_18006;
var statearr_18012_18051 = state_18006__$1;
(statearr_18012_18051[(2)] = inst_18002);

(statearr_18012_18051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (13))){
var inst_17995 = cljs.core.async.close_BANG_.call(null,out);
var state_18006__$1 = state_18006;
var statearr_18013_18058 = state_18006__$1;
(statearr_18013_18058[(2)] = inst_17995);

(statearr_18013_18058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (6))){
var state_18006__$1 = state_18006;
var statearr_18014_18060 = state_18006__$1;
(statearr_18014_18060[(2)] = null);

(statearr_18014_18060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (3))){
var inst_18004 = (state_18006[(2)]);
var state_18006__$1 = state_18006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18006__$1,inst_18004);
} else {
if((state_val_18007 === (12))){
var inst_17992 = (state_18006[(8)]);
var inst_17992__$1 = (state_18006[(2)]);
var inst_17993 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17992__$1);
var state_18006__$1 = (function (){var statearr_18015 = state_18006;
(statearr_18015[(8)] = inst_17992__$1);

return statearr_18015;
})();
if(cljs.core.truth_(inst_17993)){
var statearr_18016_18062 = state_18006__$1;
(statearr_18016_18062[(1)] = (13));

} else {
var statearr_18017_18063 = state_18006__$1;
(statearr_18017_18063[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (2))){
var inst_17967 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17968 = (0);
var state_18006__$1 = (function (){var statearr_18018 = state_18006;
(statearr_18018[(7)] = inst_17968);

(statearr_18018[(9)] = inst_17967);

return statearr_18018;
})();
var statearr_18019_18072 = state_18006__$1;
(statearr_18019_18072[(2)] = null);

(statearr_18019_18072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (11))){
var inst_17968 = (state_18006[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18006,(10),Object,null,(9));
var inst_17979 = chs__$1.call(null,inst_17968);
var inst_17980 = done.call(null,inst_17968);
var inst_17981 = cljs.core.async.take_BANG_.call(null,inst_17979,inst_17980);
var state_18006__$1 = state_18006;
var statearr_18020_18078 = state_18006__$1;
(statearr_18020_18078[(2)] = inst_17981);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18006__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (9))){
var inst_17968 = (state_18006[(7)]);
var inst_17983 = (state_18006[(2)]);
var inst_17984 = (inst_17968 + (1));
var inst_17968__$1 = inst_17984;
var state_18006__$1 = (function (){var statearr_18021 = state_18006;
(statearr_18021[(7)] = inst_17968__$1);

(statearr_18021[(10)] = inst_17983);

return statearr_18021;
})();
var statearr_18022_18080 = state_18006__$1;
(statearr_18022_18080[(2)] = null);

(statearr_18022_18080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (5))){
var inst_17990 = (state_18006[(2)]);
var state_18006__$1 = (function (){var statearr_18023 = state_18006;
(statearr_18023[(11)] = inst_17990);

return statearr_18023;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18006__$1,(12),dchan);
} else {
if((state_val_18007 === (14))){
var inst_17992 = (state_18006[(8)]);
var inst_17997 = cljs.core.apply.call(null,f,inst_17992);
var state_18006__$1 = state_18006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18006__$1,(16),out,inst_17997);
} else {
if((state_val_18007 === (16))){
var inst_17999 = (state_18006[(2)]);
var state_18006__$1 = (function (){var statearr_18024 = state_18006;
(statearr_18024[(12)] = inst_17999);

return statearr_18024;
})();
var statearr_18025_18089 = state_18006__$1;
(statearr_18025_18089[(2)] = null);

(statearr_18025_18089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (10))){
var inst_17972 = (state_18006[(2)]);
var inst_17973 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18006__$1 = (function (){var statearr_18026 = state_18006;
(statearr_18026[(13)] = inst_17972);

return statearr_18026;
})();
var statearr_18027_18094 = state_18006__$1;
(statearr_18027_18094[(2)] = inst_17973);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18006__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (8))){
var inst_17988 = (state_18006[(2)]);
var state_18006__$1 = state_18006;
var statearr_18028_18095 = state_18006__$1;
(statearr_18028_18095[(2)] = inst_17988);

(statearr_18028_18095[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___18041,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14723__auto__,c__14945__auto___18041,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14724__auto__ = null;
var cljs$core$async$state_machine__14724__auto____0 = (function (){
var statearr_18033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18033[(0)] = cljs$core$async$state_machine__14724__auto__);

(statearr_18033[(1)] = (1));

return statearr_18033;
});
var cljs$core$async$state_machine__14724__auto____1 = (function (state_18006){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_18006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e18034){if((e18034 instanceof Object)){
var ex__14727__auto__ = e18034;
var statearr_18035_18098 = state_18006;
(statearr_18035_18098[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18099 = state_18006;
state_18006 = G__18099;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$state_machine__14724__auto__ = function(state_18006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14724__auto____1.call(this,state_18006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14724__auto____0;
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14724__auto____1;
return cljs$core$async$state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___18041,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14947__auto__ = (function (){var statearr_18036 = f__14946__auto__.call(null);
(statearr_18036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___18041);

return statearr_18036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___18041,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args18107 = [];
var len__7544__auto___18191 = arguments.length;
var i__7545__auto___18192 = (0);
while(true){
if((i__7545__auto___18192 < len__7544__auto___18191)){
args18107.push((arguments[i__7545__auto___18192]));

var G__18193 = (i__7545__auto___18192 + (1));
i__7545__auto___18192 = G__18193;
continue;
} else {
}
break;
}

var G__18113 = args18107.length;
switch (G__18113) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18107.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14945__auto___18196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___18196,out){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___18196,out){
return (function (state_18152){
var state_val_18153 = (state_18152[(1)]);
if((state_val_18153 === (7))){
var inst_18128 = (state_18152[(7)]);
var inst_18129 = (state_18152[(8)]);
var inst_18128__$1 = (state_18152[(2)]);
var inst_18129__$1 = cljs.core.nth.call(null,inst_18128__$1,(0),null);
var inst_18130 = cljs.core.nth.call(null,inst_18128__$1,(1),null);
var inst_18131 = (inst_18129__$1 == null);
var state_18152__$1 = (function (){var statearr_18154 = state_18152;
(statearr_18154[(7)] = inst_18128__$1);

(statearr_18154[(9)] = inst_18130);

(statearr_18154[(8)] = inst_18129__$1);

return statearr_18154;
})();
if(cljs.core.truth_(inst_18131)){
var statearr_18155_18200 = state_18152__$1;
(statearr_18155_18200[(1)] = (8));

} else {
var statearr_18156_18204 = state_18152__$1;
(statearr_18156_18204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (1))){
var inst_18120 = cljs.core.vec.call(null,chs);
var inst_18121 = inst_18120;
var state_18152__$1 = (function (){var statearr_18157 = state_18152;
(statearr_18157[(10)] = inst_18121);

return statearr_18157;
})();
var statearr_18158_18205 = state_18152__$1;
(statearr_18158_18205[(2)] = null);

(statearr_18158_18205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (4))){
var inst_18121 = (state_18152[(10)]);
var state_18152__$1 = state_18152;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18152__$1,(7),inst_18121);
} else {
if((state_val_18153 === (6))){
var inst_18148 = (state_18152[(2)]);
var state_18152__$1 = state_18152;
var statearr_18159_18206 = state_18152__$1;
(statearr_18159_18206[(2)] = inst_18148);

(statearr_18159_18206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (3))){
var inst_18150 = (state_18152[(2)]);
var state_18152__$1 = state_18152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18152__$1,inst_18150);
} else {
if((state_val_18153 === (2))){
var inst_18121 = (state_18152[(10)]);
var inst_18123 = cljs.core.count.call(null,inst_18121);
var inst_18124 = (inst_18123 > (0));
var state_18152__$1 = state_18152;
if(cljs.core.truth_(inst_18124)){
var statearr_18172_18208 = state_18152__$1;
(statearr_18172_18208[(1)] = (4));

} else {
var statearr_18173_18209 = state_18152__$1;
(statearr_18173_18209[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (11))){
var inst_18121 = (state_18152[(10)]);
var inst_18141 = (state_18152[(2)]);
var tmp18171 = inst_18121;
var inst_18121__$1 = tmp18171;
var state_18152__$1 = (function (){var statearr_18174 = state_18152;
(statearr_18174[(11)] = inst_18141);

(statearr_18174[(10)] = inst_18121__$1);

return statearr_18174;
})();
var statearr_18177_18211 = state_18152__$1;
(statearr_18177_18211[(2)] = null);

(statearr_18177_18211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (9))){
var inst_18129 = (state_18152[(8)]);
var state_18152__$1 = state_18152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18152__$1,(11),out,inst_18129);
} else {
if((state_val_18153 === (5))){
var inst_18146 = cljs.core.async.close_BANG_.call(null,out);
var state_18152__$1 = state_18152;
var statearr_18178_18212 = state_18152__$1;
(statearr_18178_18212[(2)] = inst_18146);

(statearr_18178_18212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (10))){
var inst_18144 = (state_18152[(2)]);
var state_18152__$1 = state_18152;
var statearr_18179_18213 = state_18152__$1;
(statearr_18179_18213[(2)] = inst_18144);

(statearr_18179_18213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (8))){
var inst_18128 = (state_18152[(7)]);
var inst_18130 = (state_18152[(9)]);
var inst_18129 = (state_18152[(8)]);
var inst_18121 = (state_18152[(10)]);
var inst_18135 = (function (){var cs = inst_18121;
var vec__18126 = inst_18128;
var v = inst_18129;
var c = inst_18130;
return ((function (cs,vec__18126,v,c,inst_18128,inst_18130,inst_18129,inst_18121,state_val_18153,c__14945__auto___18196,out){
return (function (p1__18106_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18106_SHARP_);
});
;})(cs,vec__18126,v,c,inst_18128,inst_18130,inst_18129,inst_18121,state_val_18153,c__14945__auto___18196,out))
})();
var inst_18137 = cljs.core.filterv.call(null,inst_18135,inst_18121);
var inst_18121__$1 = inst_18137;
var state_18152__$1 = (function (){var statearr_18180 = state_18152;
(statearr_18180[(10)] = inst_18121__$1);

return statearr_18180;
})();
var statearr_18181_18229 = state_18152__$1;
(statearr_18181_18229[(2)] = null);

(statearr_18181_18229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___18196,out))
;
return ((function (switch__14723__auto__,c__14945__auto___18196,out){
return (function() {
var cljs$core$async$state_machine__14724__auto__ = null;
var cljs$core$async$state_machine__14724__auto____0 = (function (){
var statearr_18186 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18186[(0)] = cljs$core$async$state_machine__14724__auto__);

(statearr_18186[(1)] = (1));

return statearr_18186;
});
var cljs$core$async$state_machine__14724__auto____1 = (function (state_18152){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_18152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e18187){if((e18187 instanceof Object)){
var ex__14727__auto__ = e18187;
var statearr_18188_18231 = state_18152;
(statearr_18188_18231[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18232 = state_18152;
state_18152 = G__18232;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$state_machine__14724__auto__ = function(state_18152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14724__auto____1.call(this,state_18152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14724__auto____0;
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14724__auto____1;
return cljs$core$async$state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___18196,out))
})();
var state__14947__auto__ = (function (){var statearr_18190 = f__14946__auto__.call(null);
(statearr_18190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___18196);

return statearr_18190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___18196,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args18249 = [];
var len__7544__auto___18299 = arguments.length;
var i__7545__auto___18300 = (0);
while(true){
if((i__7545__auto___18300 < len__7544__auto___18299)){
args18249.push((arguments[i__7545__auto___18300]));

var G__18302 = (i__7545__auto___18300 + (1));
i__7545__auto___18300 = G__18302;
continue;
} else {
}
break;
}

var G__18251 = args18249.length;
switch (G__18251) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18249.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14945__auto___18305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___18305,out){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___18305,out){
return (function (state_18275){
var state_val_18276 = (state_18275[(1)]);
if((state_val_18276 === (7))){
var inst_18257 = (state_18275[(7)]);
var inst_18257__$1 = (state_18275[(2)]);
var inst_18258 = (inst_18257__$1 == null);
var inst_18259 = cljs.core.not.call(null,inst_18258);
var state_18275__$1 = (function (){var statearr_18277 = state_18275;
(statearr_18277[(7)] = inst_18257__$1);

return statearr_18277;
})();
if(inst_18259){
var statearr_18278_18306 = state_18275__$1;
(statearr_18278_18306[(1)] = (8));

} else {
var statearr_18279_18307 = state_18275__$1;
(statearr_18279_18307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18276 === (1))){
var inst_18252 = (0);
var state_18275__$1 = (function (){var statearr_18280 = state_18275;
(statearr_18280[(8)] = inst_18252);

return statearr_18280;
})();
var statearr_18281_18308 = state_18275__$1;
(statearr_18281_18308[(2)] = null);

(statearr_18281_18308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18276 === (4))){
var state_18275__$1 = state_18275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18275__$1,(7),ch);
} else {
if((state_val_18276 === (6))){
var inst_18270 = (state_18275[(2)]);
var state_18275__$1 = state_18275;
var statearr_18282_18309 = state_18275__$1;
(statearr_18282_18309[(2)] = inst_18270);

(statearr_18282_18309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18276 === (3))){
var inst_18272 = (state_18275[(2)]);
var inst_18273 = cljs.core.async.close_BANG_.call(null,out);
var state_18275__$1 = (function (){var statearr_18283 = state_18275;
(statearr_18283[(9)] = inst_18272);

return statearr_18283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18275__$1,inst_18273);
} else {
if((state_val_18276 === (2))){
var inst_18252 = (state_18275[(8)]);
var inst_18254 = (inst_18252 < n);
var state_18275__$1 = state_18275;
if(cljs.core.truth_(inst_18254)){
var statearr_18284_18312 = state_18275__$1;
(statearr_18284_18312[(1)] = (4));

} else {
var statearr_18285_18313 = state_18275__$1;
(statearr_18285_18313[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18276 === (11))){
var inst_18252 = (state_18275[(8)]);
var inst_18262 = (state_18275[(2)]);
var inst_18263 = (inst_18252 + (1));
var inst_18252__$1 = inst_18263;
var state_18275__$1 = (function (){var statearr_18286 = state_18275;
(statearr_18286[(8)] = inst_18252__$1);

(statearr_18286[(10)] = inst_18262);

return statearr_18286;
})();
var statearr_18287_18314 = state_18275__$1;
(statearr_18287_18314[(2)] = null);

(statearr_18287_18314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18276 === (9))){
var state_18275__$1 = state_18275;
var statearr_18288_18315 = state_18275__$1;
(statearr_18288_18315[(2)] = null);

(statearr_18288_18315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18276 === (5))){
var state_18275__$1 = state_18275;
var statearr_18289_18316 = state_18275__$1;
(statearr_18289_18316[(2)] = null);

(statearr_18289_18316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18276 === (10))){
var inst_18267 = (state_18275[(2)]);
var state_18275__$1 = state_18275;
var statearr_18290_18317 = state_18275__$1;
(statearr_18290_18317[(2)] = inst_18267);

(statearr_18290_18317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18276 === (8))){
var inst_18257 = (state_18275[(7)]);
var state_18275__$1 = state_18275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18275__$1,(11),out,inst_18257);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___18305,out))
;
return ((function (switch__14723__auto__,c__14945__auto___18305,out){
return (function() {
var cljs$core$async$state_machine__14724__auto__ = null;
var cljs$core$async$state_machine__14724__auto____0 = (function (){
var statearr_18295 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18295[(0)] = cljs$core$async$state_machine__14724__auto__);

(statearr_18295[(1)] = (1));

return statearr_18295;
});
var cljs$core$async$state_machine__14724__auto____1 = (function (state_18275){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_18275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e18296){if((e18296 instanceof Object)){
var ex__14727__auto__ = e18296;
var statearr_18297_18320 = state_18275;
(statearr_18297_18320[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18321 = state_18275;
state_18275 = G__18321;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$state_machine__14724__auto__ = function(state_18275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14724__auto____1.call(this,state_18275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14724__auto____0;
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14724__auto____1;
return cljs$core$async$state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___18305,out))
})();
var state__14947__auto__ = (function (){var statearr_18298 = f__14946__auto__.call(null);
(statearr_18298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___18305);

return statearr_18298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___18305,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18334 = (function (map_LT_,f,ch,meta18335){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18335 = meta18335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18336,meta18335__$1){
var self__ = this;
var _18336__$1 = this;
return (new cljs.core.async.t_cljs$core$async18334(self__.map_LT_,self__.f,self__.ch,meta18335__$1));
});

cljs.core.async.t_cljs$core$async18334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18336){
var self__ = this;
var _18336__$1 = this;
return self__.meta18335;
});

cljs.core.async.t_cljs$core$async18334.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18334.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18334.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18338 = (function (map_LT_,f,ch,meta18335,_,fn1,meta18339){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18335 = meta18335;
this._ = _;
this.fn1 = fn1;
this.meta18339 = meta18339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18340,meta18339__$1){
var self__ = this;
var _18340__$1 = this;
return (new cljs.core.async.t_cljs$core$async18338(self__.map_LT_,self__.f,self__.ch,self__.meta18335,self__._,self__.fn1,meta18339__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18340){
var self__ = this;
var _18340__$1 = this;
return self__.meta18339;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18338.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18338.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18324_SHARP_){
return f1.call(null,(((p1__18324_SHARP_ == null))?null:self__.f.call(null,p1__18324_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18338.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18335","meta18335",-1005457128,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18334","cljs.core.async/t_cljs$core$async18334",-1715045719,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18339","meta18339",1029318645,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18338";

cljs.core.async.t_cljs$core$async18338.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cljs.core.async/t_cljs$core$async18338");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18338 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18338(map_LT___$1,f__$1,ch__$1,meta18335__$1,___$2,fn1__$1,meta18339){
return (new cljs.core.async.t_cljs$core$async18338(map_LT___$1,f__$1,ch__$1,meta18335__$1,___$2,fn1__$1,meta18339));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18338(self__.map_LT_,self__.f,self__.ch,self__.meta18335,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6474__auto__ = ret;
if(cljs.core.truth_(and__6474__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6474__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18334.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18335","meta18335",-1005457128,null)], null);
});

cljs.core.async.t_cljs$core$async18334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18334";

cljs.core.async.t_cljs$core$async18334.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cljs.core.async/t_cljs$core$async18334");
});

cljs.core.async.__GT_t_cljs$core$async18334 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18334(map_LT___$1,f__$1,ch__$1,meta18335){
return (new cljs.core.async.t_cljs$core$async18334(map_LT___$1,f__$1,ch__$1,meta18335));
});

}

return (new cljs.core.async.t_cljs$core$async18334(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18355 = (function (map_GT_,f,ch,meta18356){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18356 = meta18356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18357,meta18356__$1){
var self__ = this;
var _18357__$1 = this;
return (new cljs.core.async.t_cljs$core$async18355(self__.map_GT_,self__.f,self__.ch,meta18356__$1));
});

cljs.core.async.t_cljs$core$async18355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18357){
var self__ = this;
var _18357__$1 = this;
return self__.meta18356;
});

cljs.core.async.t_cljs$core$async18355.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18355.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18355.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async18355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18356","meta18356",-948708718,null)], null);
});

cljs.core.async.t_cljs$core$async18355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18355";

cljs.core.async.t_cljs$core$async18355.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cljs.core.async/t_cljs$core$async18355");
});

cljs.core.async.__GT_t_cljs$core$async18355 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18355(map_GT___$1,f__$1,ch__$1,meta18356){
return (new cljs.core.async.t_cljs$core$async18355(map_GT___$1,f__$1,ch__$1,meta18356));
});

}

return (new cljs.core.async.t_cljs$core$async18355(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18389 = (function (filter_GT_,p,ch,meta18390){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18390 = meta18390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18391,meta18390__$1){
var self__ = this;
var _18391__$1 = this;
return (new cljs.core.async.t_cljs$core$async18389(self__.filter_GT_,self__.p,self__.ch,meta18390__$1));
});

cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18391){
var self__ = this;
var _18391__$1 = this;
return self__.meta18390;
});

cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18390","meta18390",214656560,null)], null);
});

cljs.core.async.t_cljs$core$async18389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18389";

cljs.core.async.t_cljs$core$async18389.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write.call(null,writer__7085__auto__,"cljs.core.async/t_cljs$core$async18389");
});

cljs.core.async.__GT_t_cljs$core$async18389 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18389(filter_GT___$1,p__$1,ch__$1,meta18390){
return (new cljs.core.async.t_cljs$core$async18389(filter_GT___$1,p__$1,ch__$1,meta18390));
});

}

return (new cljs.core.async.t_cljs$core$async18389(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args18418 = [];
var len__7544__auto___18465 = arguments.length;
var i__7545__auto___18466 = (0);
while(true){
if((i__7545__auto___18466 < len__7544__auto___18465)){
args18418.push((arguments[i__7545__auto___18466]));

var G__18467 = (i__7545__auto___18466 + (1));
i__7545__auto___18466 = G__18467;
continue;
} else {
}
break;
}

var G__18420 = args18418.length;
switch (G__18420) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18418.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14945__auto___18469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___18469,out){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___18469,out){
return (function (state_18441){
var state_val_18442 = (state_18441[(1)]);
if((state_val_18442 === (7))){
var inst_18437 = (state_18441[(2)]);
var state_18441__$1 = state_18441;
var statearr_18443_18470 = state_18441__$1;
(statearr_18443_18470[(2)] = inst_18437);

(statearr_18443_18470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (1))){
var state_18441__$1 = state_18441;
var statearr_18444_18471 = state_18441__$1;
(statearr_18444_18471[(2)] = null);

(statearr_18444_18471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (4))){
var inst_18423 = (state_18441[(7)]);
var inst_18423__$1 = (state_18441[(2)]);
var inst_18424 = (inst_18423__$1 == null);
var state_18441__$1 = (function (){var statearr_18445 = state_18441;
(statearr_18445[(7)] = inst_18423__$1);

return statearr_18445;
})();
if(cljs.core.truth_(inst_18424)){
var statearr_18446_18472 = state_18441__$1;
(statearr_18446_18472[(1)] = (5));

} else {
var statearr_18447_18473 = state_18441__$1;
(statearr_18447_18473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (6))){
var inst_18423 = (state_18441[(7)]);
var inst_18428 = p.call(null,inst_18423);
var state_18441__$1 = state_18441;
if(cljs.core.truth_(inst_18428)){
var statearr_18448_18474 = state_18441__$1;
(statearr_18448_18474[(1)] = (8));

} else {
var statearr_18449_18475 = state_18441__$1;
(statearr_18449_18475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (3))){
var inst_18439 = (state_18441[(2)]);
var state_18441__$1 = state_18441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18441__$1,inst_18439);
} else {
if((state_val_18442 === (2))){
var state_18441__$1 = state_18441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18441__$1,(4),ch);
} else {
if((state_val_18442 === (11))){
var inst_18431 = (state_18441[(2)]);
var state_18441__$1 = state_18441;
var statearr_18451_18476 = state_18441__$1;
(statearr_18451_18476[(2)] = inst_18431);

(statearr_18451_18476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (9))){
var state_18441__$1 = state_18441;
var statearr_18453_18477 = state_18441__$1;
(statearr_18453_18477[(2)] = null);

(statearr_18453_18477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (5))){
var inst_18426 = cljs.core.async.close_BANG_.call(null,out);
var state_18441__$1 = state_18441;
var statearr_18454_18478 = state_18441__$1;
(statearr_18454_18478[(2)] = inst_18426);

(statearr_18454_18478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (10))){
var inst_18434 = (state_18441[(2)]);
var state_18441__$1 = (function (){var statearr_18455 = state_18441;
(statearr_18455[(8)] = inst_18434);

return statearr_18455;
})();
var statearr_18456_18479 = state_18441__$1;
(statearr_18456_18479[(2)] = null);

(statearr_18456_18479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (8))){
var inst_18423 = (state_18441[(7)]);
var state_18441__$1 = state_18441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18441__$1,(11),out,inst_18423);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___18469,out))
;
return ((function (switch__14723__auto__,c__14945__auto___18469,out){
return (function() {
var cljs$core$async$state_machine__14724__auto__ = null;
var cljs$core$async$state_machine__14724__auto____0 = (function (){
var statearr_18461 = [null,null,null,null,null,null,null,null,null];
(statearr_18461[(0)] = cljs$core$async$state_machine__14724__auto__);

(statearr_18461[(1)] = (1));

return statearr_18461;
});
var cljs$core$async$state_machine__14724__auto____1 = (function (state_18441){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_18441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e18462){if((e18462 instanceof Object)){
var ex__14727__auto__ = e18462;
var statearr_18463_18481 = state_18441;
(statearr_18463_18481[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18482 = state_18441;
state_18441 = G__18482;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$state_machine__14724__auto__ = function(state_18441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14724__auto____1.call(this,state_18441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14724__auto____0;
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14724__auto____1;
return cljs$core$async$state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___18469,out))
})();
var state__14947__auto__ = (function (){var statearr_18464 = f__14946__auto__.call(null);
(statearr_18464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___18469);

return statearr_18464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___18469,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18483 = [];
var len__7544__auto___18492 = arguments.length;
var i__7545__auto___18493 = (0);
while(true){
if((i__7545__auto___18493 < len__7544__auto___18492)){
args18483.push((arguments[i__7545__auto___18493]));

var G__18494 = (i__7545__auto___18493 + (1));
i__7545__auto___18493 = G__18494;
continue;
} else {
}
break;
}

var G__18488 = args18483.length;
switch (G__18488) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18483.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14945__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto__){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto__){
return (function (state_18712){
var state_val_18713 = (state_18712[(1)]);
if((state_val_18713 === (7))){
var inst_18708 = (state_18712[(2)]);
var state_18712__$1 = state_18712;
var statearr_18714_18770 = state_18712__$1;
(statearr_18714_18770[(2)] = inst_18708);

(statearr_18714_18770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (20))){
var inst_18678 = (state_18712[(7)]);
var inst_18689 = (state_18712[(2)]);
var inst_18690 = cljs.core.next.call(null,inst_18678);
var inst_18662 = inst_18690;
var inst_18663 = null;
var inst_18664 = (0);
var inst_18665 = (0);
var state_18712__$1 = (function (){var statearr_18715 = state_18712;
(statearr_18715[(8)] = inst_18662);

(statearr_18715[(9)] = inst_18664);

(statearr_18715[(10)] = inst_18689);

(statearr_18715[(11)] = inst_18663);

(statearr_18715[(12)] = inst_18665);

return statearr_18715;
})();
var statearr_18716_18775 = state_18712__$1;
(statearr_18716_18775[(2)] = null);

(statearr_18716_18775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (1))){
var state_18712__$1 = state_18712;
var statearr_18717_18776 = state_18712__$1;
(statearr_18717_18776[(2)] = null);

(statearr_18717_18776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (4))){
var inst_18651 = (state_18712[(13)]);
var inst_18651__$1 = (state_18712[(2)]);
var inst_18652 = (inst_18651__$1 == null);
var state_18712__$1 = (function (){var statearr_18722 = state_18712;
(statearr_18722[(13)] = inst_18651__$1);

return statearr_18722;
})();
if(cljs.core.truth_(inst_18652)){
var statearr_18723_18777 = state_18712__$1;
(statearr_18723_18777[(1)] = (5));

} else {
var statearr_18724_18778 = state_18712__$1;
(statearr_18724_18778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (15))){
var state_18712__$1 = state_18712;
var statearr_18728_18779 = state_18712__$1;
(statearr_18728_18779[(2)] = null);

(statearr_18728_18779[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (21))){
var state_18712__$1 = state_18712;
var statearr_18729_18784 = state_18712__$1;
(statearr_18729_18784[(2)] = null);

(statearr_18729_18784[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (13))){
var inst_18662 = (state_18712[(8)]);
var inst_18664 = (state_18712[(9)]);
var inst_18663 = (state_18712[(11)]);
var inst_18665 = (state_18712[(12)]);
var inst_18673 = (state_18712[(2)]);
var inst_18674 = (inst_18665 + (1));
var tmp18725 = inst_18662;
var tmp18726 = inst_18664;
var tmp18727 = inst_18663;
var inst_18662__$1 = tmp18725;
var inst_18663__$1 = tmp18727;
var inst_18664__$1 = tmp18726;
var inst_18665__$1 = inst_18674;
var state_18712__$1 = (function (){var statearr_18730 = state_18712;
(statearr_18730[(8)] = inst_18662__$1);

(statearr_18730[(9)] = inst_18664__$1);

(statearr_18730[(14)] = inst_18673);

(statearr_18730[(11)] = inst_18663__$1);

(statearr_18730[(12)] = inst_18665__$1);

return statearr_18730;
})();
var statearr_18731_18790 = state_18712__$1;
(statearr_18731_18790[(2)] = null);

(statearr_18731_18790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (22))){
var state_18712__$1 = state_18712;
var statearr_18734_18791 = state_18712__$1;
(statearr_18734_18791[(2)] = null);

(statearr_18734_18791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (6))){
var inst_18651 = (state_18712[(13)]);
var inst_18660 = f.call(null,inst_18651);
var inst_18661 = cljs.core.seq.call(null,inst_18660);
var inst_18662 = inst_18661;
var inst_18663 = null;
var inst_18664 = (0);
var inst_18665 = (0);
var state_18712__$1 = (function (){var statearr_18735 = state_18712;
(statearr_18735[(8)] = inst_18662);

(statearr_18735[(9)] = inst_18664);

(statearr_18735[(11)] = inst_18663);

(statearr_18735[(12)] = inst_18665);

return statearr_18735;
})();
var statearr_18736_18792 = state_18712__$1;
(statearr_18736_18792[(2)] = null);

(statearr_18736_18792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (17))){
var inst_18678 = (state_18712[(7)]);
var inst_18682 = cljs.core.chunk_first.call(null,inst_18678);
var inst_18683 = cljs.core.chunk_rest.call(null,inst_18678);
var inst_18684 = cljs.core.count.call(null,inst_18682);
var inst_18662 = inst_18683;
var inst_18663 = inst_18682;
var inst_18664 = inst_18684;
var inst_18665 = (0);
var state_18712__$1 = (function (){var statearr_18737 = state_18712;
(statearr_18737[(8)] = inst_18662);

(statearr_18737[(9)] = inst_18664);

(statearr_18737[(11)] = inst_18663);

(statearr_18737[(12)] = inst_18665);

return statearr_18737;
})();
var statearr_18738_18793 = state_18712__$1;
(statearr_18738_18793[(2)] = null);

(statearr_18738_18793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (3))){
var inst_18710 = (state_18712[(2)]);
var state_18712__$1 = state_18712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18712__$1,inst_18710);
} else {
if((state_val_18713 === (12))){
var inst_18698 = (state_18712[(2)]);
var state_18712__$1 = state_18712;
var statearr_18739_18795 = state_18712__$1;
(statearr_18739_18795[(2)] = inst_18698);

(statearr_18739_18795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (2))){
var state_18712__$1 = state_18712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18712__$1,(4),in$);
} else {
if((state_val_18713 === (23))){
var inst_18706 = (state_18712[(2)]);
var state_18712__$1 = state_18712;
var statearr_18740_18796 = state_18712__$1;
(statearr_18740_18796[(2)] = inst_18706);

(statearr_18740_18796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (19))){
var inst_18693 = (state_18712[(2)]);
var state_18712__$1 = state_18712;
var statearr_18743_18797 = state_18712__$1;
(statearr_18743_18797[(2)] = inst_18693);

(statearr_18743_18797[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (11))){
var inst_18678 = (state_18712[(7)]);
var inst_18662 = (state_18712[(8)]);
var inst_18678__$1 = cljs.core.seq.call(null,inst_18662);
var state_18712__$1 = (function (){var statearr_18744 = state_18712;
(statearr_18744[(7)] = inst_18678__$1);

return statearr_18744;
})();
if(inst_18678__$1){
var statearr_18745_18798 = state_18712__$1;
(statearr_18745_18798[(1)] = (14));

} else {
var statearr_18746_18799 = state_18712__$1;
(statearr_18746_18799[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (9))){
var inst_18700 = (state_18712[(2)]);
var inst_18701 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18712__$1 = (function (){var statearr_18747 = state_18712;
(statearr_18747[(15)] = inst_18700);

return statearr_18747;
})();
if(cljs.core.truth_(inst_18701)){
var statearr_18748_18804 = state_18712__$1;
(statearr_18748_18804[(1)] = (21));

} else {
var statearr_18749_18805 = state_18712__$1;
(statearr_18749_18805[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (5))){
var inst_18654 = cljs.core.async.close_BANG_.call(null,out);
var state_18712__$1 = state_18712;
var statearr_18750_18806 = state_18712__$1;
(statearr_18750_18806[(2)] = inst_18654);

(statearr_18750_18806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (14))){
var inst_18678 = (state_18712[(7)]);
var inst_18680 = cljs.core.chunked_seq_QMARK_.call(null,inst_18678);
var state_18712__$1 = state_18712;
if(inst_18680){
var statearr_18751_18807 = state_18712__$1;
(statearr_18751_18807[(1)] = (17));

} else {
var statearr_18752_18808 = state_18712__$1;
(statearr_18752_18808[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (16))){
var inst_18696 = (state_18712[(2)]);
var state_18712__$1 = state_18712;
var statearr_18753_18809 = state_18712__$1;
(statearr_18753_18809[(2)] = inst_18696);

(statearr_18753_18809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18713 === (10))){
var inst_18663 = (state_18712[(11)]);
var inst_18665 = (state_18712[(12)]);
var inst_18671 = cljs.core._nth.call(null,inst_18663,inst_18665);
var state_18712__$1 = state_18712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18712__$1,(13),out,inst_18671);
} else {
if((state_val_18713 === (18))){
var inst_18678 = (state_18712[(7)]);
var inst_18687 = cljs.core.first.call(null,inst_18678);
var state_18712__$1 = state_18712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18712__$1,(20),out,inst_18687);
} else {
if((state_val_18713 === (8))){
var inst_18664 = (state_18712[(9)]);
var inst_18665 = (state_18712[(12)]);
var inst_18668 = (inst_18665 < inst_18664);
var inst_18669 = inst_18668;
var state_18712__$1 = state_18712;
if(cljs.core.truth_(inst_18669)){
var statearr_18759_18824 = state_18712__$1;
(statearr_18759_18824[(1)] = (10));

} else {
var statearr_18760_18825 = state_18712__$1;
(statearr_18760_18825[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto__))
;
return ((function (switch__14723__auto__,c__14945__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14724__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14724__auto____0 = (function (){
var statearr_18764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18764[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14724__auto__);

(statearr_18764[(1)] = (1));

return statearr_18764;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14724__auto____1 = (function (state_18712){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_18712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e18765){if((e18765 instanceof Object)){
var ex__14727__auto__ = e18765;
var statearr_18766_18827 = state_18712;
(statearr_18766_18827[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18828 = state_18712;
state_18712 = G__18828;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14724__auto__ = function(state_18712){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14724__auto____1.call(this,state_18712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14724__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14724__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto__))
})();
var state__14947__auto__ = (function (){var statearr_18767 = f__14946__auto__.call(null);
(statearr_18767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto__);

return statearr_18767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto__))
);

return c__14945__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18829 = [];
var len__7544__auto___18833 = arguments.length;
var i__7545__auto___18834 = (0);
while(true){
if((i__7545__auto___18834 < len__7544__auto___18833)){
args18829.push((arguments[i__7545__auto___18834]));

var G__18835 = (i__7545__auto___18834 + (1));
i__7545__auto___18834 = G__18835;
continue;
} else {
}
break;
}

var G__18832 = args18829.length;
switch (G__18832) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18829.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args18837 = [];
var len__7544__auto___18840 = arguments.length;
var i__7545__auto___18841 = (0);
while(true){
if((i__7545__auto___18841 < len__7544__auto___18840)){
args18837.push((arguments[i__7545__auto___18841]));

var G__18842 = (i__7545__auto___18841 + (1));
i__7545__auto___18841 = G__18842;
continue;
} else {
}
break;
}

var G__18839 = args18837.length;
switch (G__18839) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18837.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args18848 = [];
var len__7544__auto___18924 = arguments.length;
var i__7545__auto___18926 = (0);
while(true){
if((i__7545__auto___18926 < len__7544__auto___18924)){
args18848.push((arguments[i__7545__auto___18926]));

var G__18927 = (i__7545__auto___18926 + (1));
i__7545__auto___18926 = G__18927;
continue;
} else {
}
break;
}

var G__18850 = args18848.length;
switch (G__18850) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18848.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14945__auto___18935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___18935,out){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___18935,out){
return (function (state_18876){
var state_val_18877 = (state_18876[(1)]);
if((state_val_18877 === (7))){
var inst_18871 = (state_18876[(2)]);
var state_18876__$1 = state_18876;
var statearr_18878_18941 = state_18876__$1;
(statearr_18878_18941[(2)] = inst_18871);

(statearr_18878_18941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (1))){
var inst_18853 = null;
var state_18876__$1 = (function (){var statearr_18883 = state_18876;
(statearr_18883[(7)] = inst_18853);

return statearr_18883;
})();
var statearr_18885_18944 = state_18876__$1;
(statearr_18885_18944[(2)] = null);

(statearr_18885_18944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (4))){
var inst_18856 = (state_18876[(8)]);
var inst_18856__$1 = (state_18876[(2)]);
var inst_18857 = (inst_18856__$1 == null);
var inst_18858 = cljs.core.not.call(null,inst_18857);
var state_18876__$1 = (function (){var statearr_18886 = state_18876;
(statearr_18886[(8)] = inst_18856__$1);

return statearr_18886;
})();
if(inst_18858){
var statearr_18887_18949 = state_18876__$1;
(statearr_18887_18949[(1)] = (5));

} else {
var statearr_18888_18950 = state_18876__$1;
(statearr_18888_18950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (6))){
var state_18876__$1 = state_18876;
var statearr_18889_18952 = state_18876__$1;
(statearr_18889_18952[(2)] = null);

(statearr_18889_18952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (3))){
var inst_18873 = (state_18876[(2)]);
var inst_18874 = cljs.core.async.close_BANG_.call(null,out);
var state_18876__$1 = (function (){var statearr_18890 = state_18876;
(statearr_18890[(9)] = inst_18873);

return statearr_18890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18876__$1,inst_18874);
} else {
if((state_val_18877 === (2))){
var state_18876__$1 = state_18876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18876__$1,(4),ch);
} else {
if((state_val_18877 === (11))){
var inst_18856 = (state_18876[(8)]);
var inst_18865 = (state_18876[(2)]);
var inst_18853 = inst_18856;
var state_18876__$1 = (function (){var statearr_18891 = state_18876;
(statearr_18891[(7)] = inst_18853);

(statearr_18891[(10)] = inst_18865);

return statearr_18891;
})();
var statearr_18892_18955 = state_18876__$1;
(statearr_18892_18955[(2)] = null);

(statearr_18892_18955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (9))){
var inst_18856 = (state_18876[(8)]);
var state_18876__$1 = state_18876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18876__$1,(11),out,inst_18856);
} else {
if((state_val_18877 === (5))){
var inst_18853 = (state_18876[(7)]);
var inst_18856 = (state_18876[(8)]);
var inst_18860 = cljs.core._EQ_.call(null,inst_18856,inst_18853);
var state_18876__$1 = state_18876;
if(inst_18860){
var statearr_18896_18957 = state_18876__$1;
(statearr_18896_18957[(1)] = (8));

} else {
var statearr_18897_18960 = state_18876__$1;
(statearr_18897_18960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (10))){
var inst_18868 = (state_18876[(2)]);
var state_18876__$1 = state_18876;
var statearr_18898_18962 = state_18876__$1;
(statearr_18898_18962[(2)] = inst_18868);

(statearr_18898_18962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (8))){
var inst_18853 = (state_18876[(7)]);
var tmp18895 = inst_18853;
var inst_18853__$1 = tmp18895;
var state_18876__$1 = (function (){var statearr_18899 = state_18876;
(statearr_18899[(7)] = inst_18853__$1);

return statearr_18899;
})();
var statearr_18900_18973 = state_18876__$1;
(statearr_18900_18973[(2)] = null);

(statearr_18900_18973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___18935,out))
;
return ((function (switch__14723__auto__,c__14945__auto___18935,out){
return (function() {
var cljs$core$async$state_machine__14724__auto__ = null;
var cljs$core$async$state_machine__14724__auto____0 = (function (){
var statearr_18908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18908[(0)] = cljs$core$async$state_machine__14724__auto__);

(statearr_18908[(1)] = (1));

return statearr_18908;
});
var cljs$core$async$state_machine__14724__auto____1 = (function (state_18876){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_18876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e18914){if((e18914 instanceof Object)){
var ex__14727__auto__ = e18914;
var statearr_18915_18978 = state_18876;
(statearr_18915_18978[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18979 = state_18876;
state_18876 = G__18979;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$state_machine__14724__auto__ = function(state_18876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14724__auto____1.call(this,state_18876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14724__auto____0;
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14724__auto____1;
return cljs$core$async$state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___18935,out))
})();
var state__14947__auto__ = (function (){var statearr_18923 = f__14946__auto__.call(null);
(statearr_18923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___18935);

return statearr_18923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___18935,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18986 = [];
var len__7544__auto___19093 = arguments.length;
var i__7545__auto___19094 = (0);
while(true){
if((i__7545__auto___19094 < len__7544__auto___19093)){
args18986.push((arguments[i__7545__auto___19094]));

var G__19095 = (i__7545__auto___19094 + (1));
i__7545__auto___19094 = G__19095;
continue;
} else {
}
break;
}

var G__18991 = args18986.length;
switch (G__18991) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18986.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14945__auto___19098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___19098,out){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___19098,out){
return (function (state_19038){
var state_val_19039 = (state_19038[(1)]);
if((state_val_19039 === (7))){
var inst_19034 = (state_19038[(2)]);
var state_19038__$1 = state_19038;
var statearr_19042_19099 = state_19038__$1;
(statearr_19042_19099[(2)] = inst_19034);

(statearr_19042_19099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (1))){
var inst_18996 = (new Array(n));
var inst_18997 = inst_18996;
var inst_18998 = (0);
var state_19038__$1 = (function (){var statearr_19048 = state_19038;
(statearr_19048[(7)] = inst_18997);

(statearr_19048[(8)] = inst_18998);

return statearr_19048;
})();
var statearr_19049_19100 = state_19038__$1;
(statearr_19049_19100[(2)] = null);

(statearr_19049_19100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (4))){
var inst_19001 = (state_19038[(9)]);
var inst_19001__$1 = (state_19038[(2)]);
var inst_19002 = (inst_19001__$1 == null);
var inst_19003 = cljs.core.not.call(null,inst_19002);
var state_19038__$1 = (function (){var statearr_19055 = state_19038;
(statearr_19055[(9)] = inst_19001__$1);

return statearr_19055;
})();
if(inst_19003){
var statearr_19056_19101 = state_19038__$1;
(statearr_19056_19101[(1)] = (5));

} else {
var statearr_19057_19102 = state_19038__$1;
(statearr_19057_19102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (15))){
var inst_19028 = (state_19038[(2)]);
var state_19038__$1 = state_19038;
var statearr_19058_19104 = state_19038__$1;
(statearr_19058_19104[(2)] = inst_19028);

(statearr_19058_19104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (13))){
var state_19038__$1 = state_19038;
var statearr_19059_19112 = state_19038__$1;
(statearr_19059_19112[(2)] = null);

(statearr_19059_19112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (6))){
var inst_18998 = (state_19038[(8)]);
var inst_19019 = (inst_18998 > (0));
var state_19038__$1 = state_19038;
if(cljs.core.truth_(inst_19019)){
var statearr_19060_19116 = state_19038__$1;
(statearr_19060_19116[(1)] = (12));

} else {
var statearr_19061_19117 = state_19038__$1;
(statearr_19061_19117[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (3))){
var inst_19036 = (state_19038[(2)]);
var state_19038__$1 = state_19038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19038__$1,inst_19036);
} else {
if((state_val_19039 === (12))){
var inst_18997 = (state_19038[(7)]);
var inst_19026 = cljs.core.vec.call(null,inst_18997);
var state_19038__$1 = state_19038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19038__$1,(15),out,inst_19026);
} else {
if((state_val_19039 === (2))){
var state_19038__$1 = state_19038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19038__$1,(4),ch);
} else {
if((state_val_19039 === (11))){
var inst_19013 = (state_19038[(2)]);
var inst_19014 = (new Array(n));
var inst_18997 = inst_19014;
var inst_18998 = (0);
var state_19038__$1 = (function (){var statearr_19062 = state_19038;
(statearr_19062[(7)] = inst_18997);

(statearr_19062[(10)] = inst_19013);

(statearr_19062[(8)] = inst_18998);

return statearr_19062;
})();
var statearr_19063_19129 = state_19038__$1;
(statearr_19063_19129[(2)] = null);

(statearr_19063_19129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (9))){
var inst_18997 = (state_19038[(7)]);
var inst_19011 = cljs.core.vec.call(null,inst_18997);
var state_19038__$1 = state_19038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19038__$1,(11),out,inst_19011);
} else {
if((state_val_19039 === (5))){
var inst_19001 = (state_19038[(9)]);
var inst_18997 = (state_19038[(7)]);
var inst_19006 = (state_19038[(11)]);
var inst_18998 = (state_19038[(8)]);
var inst_19005 = (inst_18997[inst_18998] = inst_19001);
var inst_19006__$1 = (inst_18998 + (1));
var inst_19007 = (inst_19006__$1 < n);
var state_19038__$1 = (function (){var statearr_19064 = state_19038;
(statearr_19064[(12)] = inst_19005);

(statearr_19064[(11)] = inst_19006__$1);

return statearr_19064;
})();
if(cljs.core.truth_(inst_19007)){
var statearr_19065_19139 = state_19038__$1;
(statearr_19065_19139[(1)] = (8));

} else {
var statearr_19066_19140 = state_19038__$1;
(statearr_19066_19140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (14))){
var inst_19031 = (state_19038[(2)]);
var inst_19032 = cljs.core.async.close_BANG_.call(null,out);
var state_19038__$1 = (function (){var statearr_19070 = state_19038;
(statearr_19070[(13)] = inst_19031);

return statearr_19070;
})();
var statearr_19071_19147 = state_19038__$1;
(statearr_19071_19147[(2)] = inst_19032);

(statearr_19071_19147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (10))){
var inst_19017 = (state_19038[(2)]);
var state_19038__$1 = state_19038;
var statearr_19072_19148 = state_19038__$1;
(statearr_19072_19148[(2)] = inst_19017);

(statearr_19072_19148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (8))){
var inst_18997 = (state_19038[(7)]);
var inst_19006 = (state_19038[(11)]);
var tmp19067 = inst_18997;
var inst_18997__$1 = tmp19067;
var inst_18998 = inst_19006;
var state_19038__$1 = (function (){var statearr_19076 = state_19038;
(statearr_19076[(7)] = inst_18997__$1);

(statearr_19076[(8)] = inst_18998);

return statearr_19076;
})();
var statearr_19078_19150 = state_19038__$1;
(statearr_19078_19150[(2)] = null);

(statearr_19078_19150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___19098,out))
;
return ((function (switch__14723__auto__,c__14945__auto___19098,out){
return (function() {
var cljs$core$async$state_machine__14724__auto__ = null;
var cljs$core$async$state_machine__14724__auto____0 = (function (){
var statearr_19082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19082[(0)] = cljs$core$async$state_machine__14724__auto__);

(statearr_19082[(1)] = (1));

return statearr_19082;
});
var cljs$core$async$state_machine__14724__auto____1 = (function (state_19038){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_19038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e19083){if((e19083 instanceof Object)){
var ex__14727__auto__ = e19083;
var statearr_19088_19151 = state_19038;
(statearr_19088_19151[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19152 = state_19038;
state_19038 = G__19152;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$state_machine__14724__auto__ = function(state_19038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14724__auto____1.call(this,state_19038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14724__auto____0;
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14724__auto____1;
return cljs$core$async$state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___19098,out))
})();
var state__14947__auto__ = (function (){var statearr_19091 = f__14946__auto__.call(null);
(statearr_19091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___19098);

return statearr_19091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___19098,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args19163 = [];
var len__7544__auto___19261 = arguments.length;
var i__7545__auto___19262 = (0);
while(true){
if((i__7545__auto___19262 < len__7544__auto___19261)){
args19163.push((arguments[i__7545__auto___19262]));

var G__19263 = (i__7545__auto___19262 + (1));
i__7545__auto___19262 = G__19263;
continue;
} else {
}
break;
}

var G__19165 = args19163.length;
switch (G__19165) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19163.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14945__auto___19265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14945__auto___19265,out){
return (function (){
var f__14946__auto__ = (function (){var switch__14723__auto__ = ((function (c__14945__auto___19265,out){
return (function (state_19211){
var state_val_19212 = (state_19211[(1)]);
if((state_val_19212 === (7))){
var inst_19207 = (state_19211[(2)]);
var state_19211__$1 = state_19211;
var statearr_19218_19266 = state_19211__$1;
(statearr_19218_19266[(2)] = inst_19207);

(statearr_19218_19266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19212 === (1))){
var inst_19170 = [];
var inst_19171 = inst_19170;
var inst_19172 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19211__$1 = (function (){var statearr_19219 = state_19211;
(statearr_19219[(7)] = inst_19172);

(statearr_19219[(8)] = inst_19171);

return statearr_19219;
})();
var statearr_19220_19271 = state_19211__$1;
(statearr_19220_19271[(2)] = null);

(statearr_19220_19271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19212 === (4))){
var inst_19175 = (state_19211[(9)]);
var inst_19175__$1 = (state_19211[(2)]);
var inst_19176 = (inst_19175__$1 == null);
var inst_19177 = cljs.core.not.call(null,inst_19176);
var state_19211__$1 = (function (){var statearr_19221 = state_19211;
(statearr_19221[(9)] = inst_19175__$1);

return statearr_19221;
})();
if(inst_19177){
var statearr_19222_19273 = state_19211__$1;
(statearr_19222_19273[(1)] = (5));

} else {
var statearr_19223_19281 = state_19211__$1;
(statearr_19223_19281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19212 === (15))){
var inst_19201 = (state_19211[(2)]);
var state_19211__$1 = state_19211;
var statearr_19225_19282 = state_19211__$1;
(statearr_19225_19282[(2)] = inst_19201);

(statearr_19225_19282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19212 === (13))){
var state_19211__$1 = state_19211;
var statearr_19226_19283 = state_19211__$1;
(statearr_19226_19283[(2)] = null);

(statearr_19226_19283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19212 === (6))){
var inst_19171 = (state_19211[(8)]);
var inst_19196 = inst_19171.length;
var inst_19197 = (inst_19196 > (0));
var state_19211__$1 = state_19211;
if(cljs.core.truth_(inst_19197)){
var statearr_19229_19293 = state_19211__$1;
(statearr_19229_19293[(1)] = (12));

} else {
var statearr_19230_19294 = state_19211__$1;
(statearr_19230_19294[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19212 === (3))){
var inst_19209 = (state_19211[(2)]);
var state_19211__$1 = state_19211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19211__$1,inst_19209);
} else {
if((state_val_19212 === (12))){
var inst_19171 = (state_19211[(8)]);
var inst_19199 = cljs.core.vec.call(null,inst_19171);
var state_19211__$1 = state_19211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19211__$1,(15),out,inst_19199);
} else {
if((state_val_19212 === (2))){
var state_19211__$1 = state_19211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19211__$1,(4),ch);
} else {
if((state_val_19212 === (11))){
var inst_19175 = (state_19211[(9)]);
var inst_19179 = (state_19211[(10)]);
var inst_19189 = (state_19211[(2)]);
var inst_19190 = [];
var inst_19191 = inst_19190.push(inst_19175);
var inst_19171 = inst_19190;
var inst_19172 = inst_19179;
var state_19211__$1 = (function (){var statearr_19235 = state_19211;
(statearr_19235[(11)] = inst_19191);

(statearr_19235[(12)] = inst_19189);

(statearr_19235[(7)] = inst_19172);

(statearr_19235[(8)] = inst_19171);

return statearr_19235;
})();
var statearr_19236_19307 = state_19211__$1;
(statearr_19236_19307[(2)] = null);

(statearr_19236_19307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19212 === (9))){
var inst_19171 = (state_19211[(8)]);
var inst_19187 = cljs.core.vec.call(null,inst_19171);
var state_19211__$1 = state_19211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19211__$1,(11),out,inst_19187);
} else {
if((state_val_19212 === (5))){
var inst_19175 = (state_19211[(9)]);
var inst_19179 = (state_19211[(10)]);
var inst_19172 = (state_19211[(7)]);
var inst_19179__$1 = f.call(null,inst_19175);
var inst_19180 = cljs.core._EQ_.call(null,inst_19179__$1,inst_19172);
var inst_19181 = cljs.core.keyword_identical_QMARK_.call(null,inst_19172,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19182 = (inst_19180) || (inst_19181);
var state_19211__$1 = (function (){var statearr_19237 = state_19211;
(statearr_19237[(10)] = inst_19179__$1);

return statearr_19237;
})();
if(cljs.core.truth_(inst_19182)){
var statearr_19238_19324 = state_19211__$1;
(statearr_19238_19324[(1)] = (8));

} else {
var statearr_19239_19327 = state_19211__$1;
(statearr_19239_19327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19212 === (14))){
var inst_19204 = (state_19211[(2)]);
var inst_19205 = cljs.core.async.close_BANG_.call(null,out);
var state_19211__$1 = (function (){var statearr_19241 = state_19211;
(statearr_19241[(13)] = inst_19204);

return statearr_19241;
})();
var statearr_19242_19332 = state_19211__$1;
(statearr_19242_19332[(2)] = inst_19205);

(statearr_19242_19332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19212 === (10))){
var inst_19194 = (state_19211[(2)]);
var state_19211__$1 = state_19211;
var statearr_19243_19342 = state_19211__$1;
(statearr_19243_19342[(2)] = inst_19194);

(statearr_19243_19342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19212 === (8))){
var inst_19175 = (state_19211[(9)]);
var inst_19179 = (state_19211[(10)]);
var inst_19171 = (state_19211[(8)]);
var inst_19184 = inst_19171.push(inst_19175);
var tmp19240 = inst_19171;
var inst_19171__$1 = tmp19240;
var inst_19172 = inst_19179;
var state_19211__$1 = (function (){var statearr_19244 = state_19211;
(statearr_19244[(14)] = inst_19184);

(statearr_19244[(7)] = inst_19172);

(statearr_19244[(8)] = inst_19171__$1);

return statearr_19244;
})();
var statearr_19247_19350 = state_19211__$1;
(statearr_19247_19350[(2)] = null);

(statearr_19247_19350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14945__auto___19265,out))
;
return ((function (switch__14723__auto__,c__14945__auto___19265,out){
return (function() {
var cljs$core$async$state_machine__14724__auto__ = null;
var cljs$core$async$state_machine__14724__auto____0 = (function (){
var statearr_19257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19257[(0)] = cljs$core$async$state_machine__14724__auto__);

(statearr_19257[(1)] = (1));

return statearr_19257;
});
var cljs$core$async$state_machine__14724__auto____1 = (function (state_19211){
while(true){
var ret_value__14725__auto__ = (function (){try{while(true){
var result__14726__auto__ = switch__14723__auto__.call(null,state_19211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14726__auto__;
}
break;
}
}catch (e19258){if((e19258 instanceof Object)){
var ex__14727__auto__ = e19258;
var statearr_19259_19368 = state_19211;
(statearr_19259_19368[(5)] = ex__14727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19369 = state_19211;
state_19211 = G__19369;
continue;
} else {
return ret_value__14725__auto__;
}
break;
}
});
cljs$core$async$state_machine__14724__auto__ = function(state_19211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14724__auto____1.call(this,state_19211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14724__auto____0;
cljs$core$async$state_machine__14724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14724__auto____1;
return cljs$core$async$state_machine__14724__auto__;
})()
;})(switch__14723__auto__,c__14945__auto___19265,out))
})();
var state__14947__auto__ = (function (){var statearr_19260 = f__14946__auto__.call(null);
(statearr_19260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14945__auto___19265);

return statearr_19260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14947__auto__);
});})(c__14945__auto___19265,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map