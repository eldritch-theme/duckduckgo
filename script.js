// ==UserScript==
// @name        Eldritch DuckDuckGo Theme
// @namespace   Violentmonkey Scripts
// @match       https://duckduckgo.com/*
// @grant       none
// @version     1.0
// @author      Eldritch Theme
// @description Eldritch theme for DuckDuckGo
// ==/UserScript==
(function() {
  const theme = [
    {"kae":"t","k5":"2","ku":"-1","kk21":"323449","ky":"323449","kkj":"323449","kkx":"04d1f9","kk7":"212337","kk8":"ebfafa","kk9":"37f499","kkaa":"a48cf2","kks":"t","kkw":"s","kkt":"g","kka":"g","kk1":"-1","kkav":"1","kkc":"1","kav":"1","kn":"1","k1":"-1","kak":"-1","kax":"-1","kaq":"-1","kap":"-1","kao":"-1","kau":"-1","ks":"n","kw":"w","ko":"1","ksn":"5","k7":"212337","k8":"ebfafa","k9":"37f499","km":"l","kj":"282a36","kaa":"a48cf2","kx":"04d1f9","kai":"1","kf":"1","k21":"323449","kaf":"b","kac":"1","kt":"e","ka":"e","k18":"1"}
  ];

  for (const item of theme) {
    document.cookie = `${item}; max-age=126144000; samesite=lax; secure`;
  }
})();