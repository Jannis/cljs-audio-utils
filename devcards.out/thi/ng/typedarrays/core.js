// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.typedarrays.core');
goog.require('cljs.core');
/**
 * Creates a native Int8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int8 = (function thi$ng$typedarrays$core$int8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int8Array(len));
var i_8130 = (0);
var coll_8131 = size_or_coll;
while(true){
if((i_8130 < len)){
(buf[i_8130] = cljs.core.first.call(null,coll_8131));

var G__8132 = (i_8130 + (1));
var G__8133 = cljs.core.next.call(null,coll_8131);
i_8130 = G__8132;
coll_8131 = G__8133;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8 = (function thi$ng$typedarrays$core$uint8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8Array(len));
var i_8135 = (0);
var coll_8136 = size_or_coll;
while(true){
if((i_8135 < len)){
(buf[i_8135] = cljs.core.first.call(null,coll_8136));

var G__8137 = (i_8135 + (1));
var G__8138 = cljs.core.next.call(null,coll_8136);
i_8135 = G__8137;
coll_8136 = G__8138;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint8ClampedArray of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8_clamped = (function thi$ng$typedarrays$core$uint8_clamped(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8ClampedArray(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_8139 = (0);
var coll_8140 = size_or_coll;
while(true){
if((i_8139 < len)){
(buf[i_8139] = cljs.core.first.call(null,coll_8140));

var G__8141 = (i_8139 + (1));
var G__8142 = cljs.core.next.call(null,coll_8140);
i_8139 = G__8141;
coll_8140 = G__8142;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Int16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int16 = (function thi$ng$typedarrays$core$int16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int16Array(len));
var i_8143 = (0);
var coll_8144 = size_or_coll;
while(true){
if((i_8143 < len)){
(buf[i_8143] = cljs.core.first.call(null,coll_8144));

var G__8145 = (i_8143 + (1));
var G__8146 = cljs.core.next.call(null,coll_8144);
i_8143 = G__8145;
coll_8144 = G__8146;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint16 = (function thi$ng$typedarrays$core$uint16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint16Array(len));
var i_8147 = (0);
var coll_8148 = size_or_coll;
while(true){
if((i_8147 < len)){
(buf[i_8147] = cljs.core.first.call(null,coll_8148));

var G__8149 = (i_8147 + (1));
var G__8150 = cljs.core.next.call(null,coll_8148);
i_8147 = G__8149;
coll_8148 = G__8150;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Int32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int32 = (function thi$ng$typedarrays$core$int32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int32Array(len));
var i_8151 = (0);
var coll_8152 = size_or_coll;
while(true){
if((i_8151 < len)){
(buf[i_8151] = cljs.core.first.call(null,coll_8152));

var G__8154 = (i_8151 + (1));
var G__8155 = cljs.core.next.call(null,coll_8152);
i_8151 = G__8154;
coll_8152 = G__8155;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint32 = (function thi$ng$typedarrays$core$uint32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint32Array(len));
var i_8158 = (0);
var coll_8159 = size_or_coll;
while(true){
if((i_8158 < len)){
(buf[i_8158] = cljs.core.first.call(null,coll_8159));

var G__8163 = (i_8158 + (1));
var G__8164 = cljs.core.next.call(null,coll_8159);
i_8158 = G__8163;
coll_8159 = G__8164;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Float32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float32 = (function thi$ng$typedarrays$core$float32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float32Array(len));
var i_8170 = (0);
var coll_8171 = size_or_coll;
while(true){
if((i_8170 < len)){
(buf[i_8170] = cljs.core.first.call(null,coll_8171));

var G__8173 = (i_8170 + (1));
var G__8174 = cljs.core.next.call(null,coll_8171);
i_8170 = G__8173;
coll_8171 = G__8174;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Float64Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float64 = (function thi$ng$typedarrays$core$float64(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float64Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float64Array(len));
var i_8182 = (0);
var coll_8183 = size_or_coll;
while(true){
if((i_8182 < len)){
(buf[i_8182] = cljs.core.first.call(null,coll_8183));

var G__8185 = (i_8182 + (1));
var G__8186 = cljs.core.next.call(null,coll_8183);
i_8182 = G__8185;
coll_8183 = G__8186;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return !(((window["ArrayBuffer"]) == null));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["[object Float64Array]","[object Int8Array]","[object Int16Array]","[object Uint8Array]","[object Uint16Array]","[object Uint8ClampedArray]","[object Uint32Array]","[object Float32Array]","[object Int32Array]"],[new cljs.core.Keyword(null,"float64","float64",1881838306),new cljs.core.Keyword(null,"int8","int8",-1834023920),new cljs.core.Keyword(null,"int16","int16",-188764863),new cljs.core.Keyword(null,"uint8","uint8",956521151),new cljs.core.Keyword(null,"uint16","uint16",-588869202),new cljs.core.Keyword(null,"uint8-clamped","uint8-clamped",1439331936),new cljs.core.Keyword(null,"uint32","uint32",-418789486),new cljs.core.Keyword(null,"float32","float32",-2119815775),new cljs.core.Keyword(null,"int32","int32",1718804896)]);
thi.ng.typedarrays.core.array_type = (function thi$ng$typedarrays$core$array_type(x){
if(cljs.core.array_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
return thi.ng.typedarrays.core.array_types.call(null,[cljs.core.str(x)].join(''));
}
});
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return false;
} else {
if(typeof x === 'number'){
return false;
} else {
return thi.ng.typedarrays.core.array_types.call(null,[cljs.core.str(x)].join(''));

}
}
});

//# sourceMappingURL=core.js.map