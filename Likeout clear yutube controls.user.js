// ==UserScript==
// @name         Likeout clear yutube controls
// @namespace    http://github.com/DaMachk
// @version      0.1
// @description  Removes the block that prevents you from accessing the video controls on the bottom right side
// @author       DaMachk
// @match        http://likeout.net/*
// @grant        none
// ==/UserScript==

var parent = document.getElementById("youtube-video");
var blocker = document.getElementById("bottom-video-blocker");
parent.removeChild(blocker);

