import{j as clamp}from"./helpers-dd7e4b7b.js";import{createGesture}from"./index-34cb2743.js";import"./gesture-controller-31cb6bb9.js";var createSwipeBackGesture=function(r,e,t,a,n){var o=r.ownerDocument.defaultView;var i=function(r){return r.startX<=50&&e()};var c=function(r){var e=r.deltaX;var t=e/o.innerWidth;a(t)};var v=function(r){var e=r.deltaX;var t=o.innerWidth;var a=e/t;var i=r.velocityX;var c=t/2;var v=i>=0&&(i>.2||r.deltaX>c);var s=v?1-a:a;var u=s*t;var l=0;if(u>5){var d=u/Math.abs(i);l=Math.min(d,540)}n(v,a<=0?.01:clamp(0,a,.9999),l)};return createGesture({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:i,onStart:t,onMove:c,onEnd:v})};export{createSwipeBackGesture};