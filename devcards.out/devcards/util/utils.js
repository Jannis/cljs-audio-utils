// Compiled by ClojureScript 1.7.228 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__7460__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_18068_18070 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_18069_18071 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_18068_18070,_STAR_print_fn_STAR_18069_18071,sb__7460__auto__){
return (function (x__7461__auto__){
return sb__7460__auto__.append(x__7461__auto__);
});})(_STAR_print_newline_STAR_18068_18070,_STAR_print_fn_STAR_18069_18071,sb__7460__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18069_18071;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18068_18070;
}
return [cljs.core.str(sb__7460__auto__)].join('');
}catch (e18066){if((e18066 instanceof Error)){
var e1 = e18066;
try{return obj.toString();
}catch (e18067){if((e18067 instanceof Error)){
var e2 = e18067;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e18067;

}
}} else {
throw e18066;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_18079 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_18079;
}});

//# sourceMappingURL=utils.js.map