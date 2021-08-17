import{__spreadArray}from"tslib";import{r as raf}from"./helpers-dd7e4b7b.js";var animationPrefix;var processKeyframes=function(e){e.forEach((function(e){for(var n in e){if(e.hasOwnProperty(n)){var r=e[n];if(n==="easing"){var t="animation-timing-function";e[t]=r;delete e[n]}else{var t=convertCamelCaseToHypen(n);if(t!==n){e[t]=r;delete e[n]}}}}}));return e};var convertCamelCaseToHypen=function(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()};var getAnimationPrefix=function(e){if(animationPrefix===undefined){var n=e.style.animationName!==undefined;var r=e.style.webkitAnimationName!==undefined;animationPrefix=!n&&r?"-webkit-":""}return animationPrefix};var setStyleProperty=function(e,n,r){var t=n.startsWith("animation")?getAnimationPrefix(e):"";e.style.setProperty(t+n,r)};var removeStyleProperty=function(e,n){var r=n.startsWith("animation")?getAnimationPrefix(e):"";e.style.removeProperty(r+n)};var animationEnd=function(e,n){var r;var t={passive:true};var a=function(){if(r){r()}};var i=function(r){if(e===r.target){a();n(r)}};if(e){e.addEventListener("webkitAnimationEnd",i,t);e.addEventListener("animationend",i,t);r=function(){e.removeEventListener("webkitAnimationEnd",i,t);e.removeEventListener("animationend",i,t)}}return a};var generateKeyframeRules=function(e){if(e===void 0){e=[]}return e.map((function(e){var n=e.offset;var r=[];for(var t in e){if(e.hasOwnProperty(t)&&t!=="offset"){r.push(t+": "+e[t]+";")}}return n*100+"% { "+r.join(" ")+" }"})).join(" ")};var keyframeIds=[];var generateKeyframeName=function(e){var n=keyframeIds.indexOf(e);if(n<0){n=keyframeIds.push(e)-1}return"ion-animation-"+n};var getStyleContainer=function(e){var n=e.getRootNode();return n.head||n};var createKeyframeStylesheet=function(e,n,r){var t=getStyleContainer(r);var a=getAnimationPrefix(r);var i=t.querySelector("#"+e);if(i){return i}var o=(r.ownerDocument||document).createElement("style");o.id=e;o.textContent="@"+a+"keyframes "+e+" { "+n+" } @"+a+"keyframes "+e+"-alt { "+n+" }";t.appendChild(o);return o};var addClassToArray=function(e,n){if(e===void 0){e=[]}if(n!==undefined){var r=Array.isArray(n)?n:[n];return __spreadArray(__spreadArray([],e),r)}return e};var createAnimation=function(e){var n;var r;var t;var a;var i;var o;var f=[];var u=[];var s=[];var v=false;var l;var c={};var d=[];var y=[];var m={};var p=0;var h=false;var g=false;var E;var P;var S;var A;var C=true;var b=false;var T=true;var k;var w;var x=e;var _=[];var K=[];var I=[];var D=[];var L=[];var N=[];var R=[];var F=[];var O=[];var W=[];var j=typeof AnimationEffect==="function"||typeof window.AnimationEffect==="function";var H=typeof Element==="function"&&typeof Element.prototype.animate==="function"&&j;var M=100;var $=function(){return W};var q=function(e){D.forEach((function(n){n.destroy(e)}));z(e);I.length=0;D.length=0;f.length=0;G();v=false;T=true;return w};var z=function(e){J();if(e){Q()}};var Z=function(){h=false;g=false;T=true;P=undefined;S=undefined;A=undefined;p=0;b=false;C=true};var B=function(e,n){var r=n&&n.oneTimeCallback?K:_;r.push({c:e,o:n});return w};var G=function(){_.length=0;K.length=0;return w};var J=function(){if(H){W.forEach((function(e){e.cancel()}));W.length=0}else{var e=I.slice();raf((function(){e.forEach((function(e){removeStyleProperty(e,"animation-name");removeStyleProperty(e,"animation-duration");removeStyleProperty(e,"animation-timing-function");removeStyleProperty(e,"animation-iteration-count");removeStyleProperty(e,"animation-delay");removeStyleProperty(e,"animation-play-state");removeStyleProperty(e,"animation-fill-mode");removeStyleProperty(e,"animation-direction")}))}))}};var Q=function(){L.forEach((function(e){if(e&&e.parentNode){e.parentNode.removeChild(e)}}));L.length=0};var U=function(e){N.push(e);return w};var V=function(e){R.push(e);return w};var X=function(e){F.push(e);return w};var Y=function(e){O.push(e);return w};var ee=function(e){u=addClassToArray(u,e);return w};var ne=function(e){s=addClassToArray(s,e);return w};var re=function(e){if(e===void 0){e={}}c=e;return w};var te=function(e){if(e===void 0){e=[]}for(var n=0,r=e;n<r.length;n++){var t=r[n];c[t]=""}return w};var ae=function(e){d=addClassToArray(d,e);return w};var ie=function(e){y=addClassToArray(y,e);return w};var oe=function(e){if(e===void 0){e={}}m=e;return w};var fe=function(e){if(e===void 0){e=[]}for(var n=0,r=e;n<r.length;n++){var t=r[n];m[t]=""}return w};var ue=function(){if(i!==undefined){return i}if(l){return l.getFill()}return"both"};var se=function(){if(P!==undefined){return P}if(o!==undefined){return o}if(l){return l.getDirection()}return"normal"};var ve=function(){if(h){return"linear"}if(t!==undefined){return t}if(l){return l.getEasing()}return"linear"};var le=function(){if(g){return 0}if(S!==undefined){return S}if(r!==undefined){return r}if(l){return l.getDuration()}return 0};var ce=function(){if(a!==undefined){return a}if(l){return l.getIterations()}return 1};var de=function(){if(A!==undefined){return A}if(n!==undefined){return n}if(l){return l.getDelay()}return 0};var ye=function(){return f};var me=function(e){o=e;Ne(true);return w};var pe=function(e){i=e;Ne(true);return w};var he=function(e){n=e;Ne(true);return w};var ge=function(e){t=e;Ne(true);return w};var Ee=function(e){if(!H&&e===0){e=1}r=e;Ne(true);return w};var Pe=function(e){a=e;Ne(true);return w};var Se=function(e){l=e;return w};var Ae=function(e){if(e!=null){if(e.nodeType===1){I.push(e)}else if(e.length>=0){for(var n=0;n<e.length;n++){I.push(e[n])}}else{console.error("Invalid addElement value")}}return w};var Ce=function(e){if(e!=null){if(Array.isArray(e)){for(var n=0,r=e;n<r.length;n++){var t=r[n];t.parent(w);D.push(t)}}else{e.parent(w);D.push(e)}}return w};var be=function(e){f=e;return w};var Te=function(){N.forEach((function(e){return e()}));R.forEach((function(e){return e()}));var e=u;var n=s;var r=c;I.forEach((function(t){var a=t.classList;e.forEach((function(e){return a.add(e)}));n.forEach((function(e){return a.remove(e)}));for(var i in r){if(r.hasOwnProperty(i)){setStyleProperty(t,i,r[i])}}}))};var ke=function(){Me();F.forEach((function(e){return e()}));O.forEach((function(e){return e()}));var e=C?1:0;var n=d;var r=y;var t=m;I.forEach((function(e){var a=e.classList;n.forEach((function(e){return a.add(e)}));r.forEach((function(e){return a.remove(e)}));for(var i in t){if(t.hasOwnProperty(i)){setStyleProperty(e,i,t[i])}}}));_.forEach((function(n){return n.c(e,w)}));K.forEach((function(n){return n.c(e,w)}));K.length=0;T=true;if(C){b=true}C=true};var we=function(){if(p===0){return}p--;if(p===0){ke();if(l){l.animationFinish()}}};var xe=function(n){if(n===void 0){n=true}Q();var r=processKeyframes(f);I.forEach((function(t){if(r.length>0){var a=generateKeyframeRules(r);k=e!==undefined?e:generateKeyframeName(a);var i=createKeyframeStylesheet(k,a,t);L.push(i);setStyleProperty(t,"animation-duration",le()+"ms");setStyleProperty(t,"animation-timing-function",ve());setStyleProperty(t,"animation-delay",de()+"ms");setStyleProperty(t,"animation-fill-mode",ue());setStyleProperty(t,"animation-direction",se());var o=ce()===Infinity?"infinite":ce().toString();setStyleProperty(t,"animation-iteration-count",o);setStyleProperty(t,"animation-play-state","paused");if(n){setStyleProperty(t,"animation-name",i.id+"-alt")}raf((function(){setStyleProperty(t,"animation-name",i.id||null)}))}}))};var _e=function(){I.forEach((function(e){var n=e.animate(f,{id:x,delay:de(),duration:le(),easing:ve(),iterations:ce(),fill:ue(),direction:se()});n.pause();W.push(n)}));if(W.length>0){W[0].onfinish=function(){we()}}};var Ke=function(e){if(e===void 0){e=true}Te();if(f.length>0){if(H){_e()}else{xe(e)}}v=true};var Ie=function(e){e=Math.min(Math.max(e,0),.9999);if(H){W.forEach((function(n){n.currentTime=n.effect.getComputedTiming().delay+le()*e;n.pause()}))}else{var n="-"+le()*e+"ms";I.forEach((function(e){if(f.length>0){setStyleProperty(e,"animation-delay",n);setStyleProperty(e,"animation-play-state","paused")}}))}};var De=function(e){W.forEach((function(e){e.effect.updateTiming({delay:de(),duration:le(),easing:ve(),iterations:ce(),fill:ue(),direction:se()})}));if(e!==undefined){Ie(e)}};var Le=function(e,n){if(e===void 0){e=true}raf((function(){I.forEach((function(r){setStyleProperty(r,"animation-name",k||null);setStyleProperty(r,"animation-duration",le()+"ms");setStyleProperty(r,"animation-timing-function",ve());setStyleProperty(r,"animation-delay",n!==undefined?"-"+n*le()+"ms":de()+"ms");setStyleProperty(r,"animation-fill-mode",ue()||null);setStyleProperty(r,"animation-direction",se()||null);var t=ce()===Infinity?"infinite":ce().toString();setStyleProperty(r,"animation-iteration-count",t);if(e){setStyleProperty(r,"animation-name",k+"-alt")}raf((function(){setStyleProperty(r,"animation-name",k||null)}))}))}))};var Ne=function(e,n,r){if(e===void 0){e=false}if(n===void 0){n=true}if(e){D.forEach((function(t){t.update(e,n,r)}))}if(H){De(r)}else{Le(n,r)}return w};var Re=function(e,n){if(e===void 0){e=false}D.forEach((function(r){r.progressStart(e,n)}));We();h=e;if(!v){Ke()}else{Ne(false,true,n)}return w};var Fe=function(e){D.forEach((function(n){n.progressStep(e)}));Ie(e);return w};var Oe=function(e,n,r){h=false;D.forEach((function(t){t.progressEnd(e,n,r)}));if(r!==undefined){S=r}b=false;C=true;if(e===0){P=se()==="reverse"?"normal":"reverse";if(P==="reverse"){C=false}if(H){Ne();Ie(1-n)}else{A=(1-n)*le()*-1;Ne(false,false)}}else if(e===1){if(H){Ne();Ie(n)}else{A=n*le()*-1;Ne(false,false)}}if(e!==undefined){B((function(){S=undefined;P=undefined;A=undefined}),{oneTimeCallback:true});if(!l){Be()}}return w};var We=function(){if(v){if(H){W.forEach((function(e){e.pause()}))}else{I.forEach((function(e){setStyleProperty(e,"animation-play-state","paused")}))}}};var je=function(){D.forEach((function(e){e.pause()}));We();return w};var He=function(){E=undefined;we()};var Me=function(){if(E){clearTimeout(E)}};var $e=function(){Me();raf((function(){I.forEach((function(e){if(f.length>0){setStyleProperty(e,"animation-play-state","running")}}))}));if(f.length===0||I.length===0){we()}else{var e=de()||0;var n=le()||0;var r=ce()||1;if(isFinite(r)){E=setTimeout(He,e+n*r+M)}animationEnd(I[0],(function(){Me();raf((function(){qe();raf(we)}))}))}};var qe=function(){I.forEach((function(e){removeStyleProperty(e,"animation-duration");removeStyleProperty(e,"animation-delay");removeStyleProperty(e,"animation-play-state")}))};var ze=function(){W.forEach((function(e){e.play()}));if(f.length===0||I.length===0){we()}};var Ze=function(){if(H){Ie(0);De()}else{Le()}};var Be=function(e){return new Promise((function(n){if(e&&e.sync){g=true;B((function(){return g=false}),{oneTimeCallback:true})}if(!v){Ke()}if(b){Ze();b=false}if(T){p=D.length+1;T=false}B((function(){return n()}),{oneTimeCallback:true});D.forEach((function(e){e.play()}));if(H){ze()}else{$e()}}))};var Ge=function(){D.forEach((function(e){e.stop()}));if(v){J();v=false}Z()};var Je=function(e,n){var r;var t=f[0];if(t!==undefined&&(t.offset===undefined||t.offset===0)){t[e]=n}else{f=__spreadArray([(r={offset:0},r[e]=n,r)],f)}return w};var Qe=function(e,n){var r;var t=f[f.length-1];if(t!==undefined&&(t.offset===undefined||t.offset===1)){t[e]=n}else{f=__spreadArray(__spreadArray([],f),[(r={offset:1},r[e]=n,r)])}return w};var Ue=function(e,n,r){return Je(e,n).to(e,r)};return w={parentAnimation:l,elements:I,childAnimations:D,id:x,animationFinish:we,from:Je,to:Qe,fromTo:Ue,parent:Se,play:Be,pause:je,stop:Ge,destroy:q,keyframes:be,addAnimation:Ce,addElement:Ae,update:Ne,fill:pe,direction:me,iterations:Pe,duration:Ee,easing:ge,delay:he,getWebAnimations:$,getKeyframes:ye,getFill:ue,getDirection:se,getDelay:de,getIterations:ce,getEasing:ve,getDuration:le,afterAddRead:X,afterAddWrite:Y,afterClearStyles:fe,afterStyles:oe,afterRemoveClass:ie,afterAddClass:ae,beforeAddRead:U,beforeAddWrite:V,beforeClearStyles:te,beforeStyles:re,beforeRemoveClass:ne,beforeAddClass:ee,onFinish:B,progressStart:Re,progressStep:Fe,progressEnd:Oe}};export{createAnimation as c};