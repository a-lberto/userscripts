// ==UserScript==
// @name         Amazon URL Prettifier
// @author       Alberto Scomparin (@a-lberto)
// @homepage     https://github.com/a-lberto/userscripts/blob/main/pretty-amazon-url.js
// @description  Extracts the product ID from the Amazon URL and rewrites it with only the product ID
// @include      https://www.amazon.*/*
// @version      0.0.1
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  var url = window.location.href;

  var domain = /^(?:https?:\/\/)?(?:[^@\/\n]+@)??([^:\/?\n]+)/.exec(url)[1];
  var match = /\/dp\/([\d\w]{10})/.exec(url);

  if (match){
    var productID = match[1];
    var urlPath = 'https://' + domain +'/dp/' + productID + '/';

    // Update only when URL is not pretty
    if (window.location.href != urlPath) {
      history.pushState({}, null, urlPath);
    }
    else{return;}
  }
})();
