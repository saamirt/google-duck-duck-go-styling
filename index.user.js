// ==UserScript==
// @name         google logo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    //https://duckduckgo.com/assets/logo_header.v108.svg
    let searchLogo = $('#logo img[alt="Google"]');
    let newSrc = "https://duckduckgo.com/assets/logo_header.v108.svg";
    searchLogo.attr("src",newSrc);
    searchLogo.attr("srcset",newSrc);
    searchLogo.css("width", "auto");
    searchLogo.css("padding-left", "85px");

    // Your code here...
    let logo = $('#hplogo');
    logo.attr("src","https://svgshare.com/i/GJe.svg")
    logo.attr("srcset","https://svgshare.com/i/GJe.svg")
    logo.css("height", "172px");
    logo.css("padding-top", "30px");


    $('head').append('<link rel="shortcut icon" type="image/jpg" href="https://duckduckgo.com/assets/icons/meta/DDG-icon_256x256.png"/>');
})();