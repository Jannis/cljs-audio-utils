// Compiled by ClojureScript 1.7.228 {}
goog.provide('audio_utils.devcards.core');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('devtools.core');
goog.require('audio_utils.devcards.ring_buffer');
goog.require('audio_utils.devcards.rms_buffer');
goog.require('audio_utils.devcards.gate');
goog.require('audio_utils.devcards.chunker');
goog.require('audio_utils.devcards.audio_encoder');
cljs.core.enable_console_print_BANG_.call(null);
devtools.core.enable_feature_BANG_.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858),new cljs.core.Keyword(null,"dirac","dirac",1785994033));
devtools.core.install_BANG_.call(null);
audio_utils.devcards.core.init = (function audio_utils$devcards$core$init(){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null);
});
audio_utils.devcards.core.reload = (function audio_utils$devcards$core$reload(){
return null;
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio_utils.devcards.core","audio_utils.devcards.core",779693158),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# ClojureScript Audio Utils\n\n   Audio utilities for ClojureScript web applications.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));

//# sourceMappingURL=core.js.map