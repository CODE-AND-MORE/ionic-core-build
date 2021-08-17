import{__awaiter,__generator}from"tslib";import{c as writeTask,B as Build}from"./index-7a8b7a1c.js";import{c as componentOnReady}from"./helpers-dd7e4b7b.js";var LIFECYCLE_WILL_ENTER="ionViewWillEnter";var LIFECYCLE_DID_ENTER="ionViewDidEnter";var LIFECYCLE_WILL_LEAVE="ionViewWillLeave";var LIFECYCLE_DID_LEAVE="ionViewDidLeave";var LIFECYCLE_WILL_UNLOAD="ionViewWillUnload";var iosTransitionAnimation=function(){return import("./ios.transition-12db6216.js")};var mdTransitionAnimation=function(){return import("./md.transition-eecd3a67.js")};var transition=function(e){return new Promise((function(n,i){writeTask((function(){beforeTransition(e);runTransition(e).then((function(i){if(i.animation){i.animation.destroy()}afterTransition(e);n(i)}),(function(n){afterTransition(e);i(n)}))}))}))};var beforeTransition=function(e){var n=e.enteringEl;var i=e.leavingEl;setZIndex(n,i,e.direction);if(e.showGoBack){n.classList.add("can-go-back")}else{n.classList.remove("can-go-back")}setPageHidden(n,false);n.style.setProperty("pointer-events","none");if(i){setPageHidden(i,false);i.style.setProperty("pointer-events","none")}};var runTransition=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,i;return __generator(this,(function(r){switch(r.label){case 0:return[4,getAnimationBuilder(e)];case 1:n=r.sent();i=n&&Build.isBrowser?animation(n,e):noAnimation(e);return[2,i]}}))}))};var afterTransition=function(e){var n=e.enteringEl;var i=e.leavingEl;n.classList.remove("ion-page-invisible");n.style.removeProperty("pointer-events");if(i!==undefined){i.classList.remove("ion-page-invisible");i.style.removeProperty("pointer-events")}};var getAnimationBuilder=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,i;return __generator(this,(function(r){switch(r.label){case 0:if(!e.leavingEl||!e.animated||e.duration===0){return[2,undefined]}if(e.animationBuilder){return[2,e.animationBuilder]}if(!(e.mode==="ios"))return[3,2];return[4,iosTransitionAnimation()];case 1:i=r.sent().iosTransitionAnimation;return[3,4];case 2:return[4,mdTransitionAnimation()];case 3:i=r.sent().mdTransitionAnimation;r.label=4;case 4:n=i;return[2,n]}}))}))};var animation=function(e,n){return __awaiter(void 0,void 0,void 0,(function(){var i,r;return __generator(this,(function(t){switch(t.label){case 0:return[4,waitForReady(n,true)];case 1:t.sent();i=e(n.baseEl,n);fireWillEvents(n.enteringEl,n.leavingEl);return[4,playTransition(i,n)];case 2:r=t.sent();if(n.progressCallback){n.progressCallback(undefined)}if(r){fireDidEvents(n.enteringEl,n.leavingEl)}return[2,{hasCompleted:r,animation:i}]}}))}))};var noAnimation=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,i;return __generator(this,(function(r){switch(r.label){case 0:n=e.enteringEl;i=e.leavingEl;return[4,waitForReady(e,false)];case 1:r.sent();fireWillEvents(n,i);fireDidEvents(n,i);return[2,{hasCompleted:true}]}}))}))};var waitForReady=function(e,n){return __awaiter(void 0,void 0,void 0,(function(){var i,r;return __generator(this,(function(t){switch(t.label){case 0:i=e.deepWait!==undefined?e.deepWait:n;r=i?[deepReady(e.enteringEl),deepReady(e.leavingEl)]:[shallowReady(e.enteringEl),shallowReady(e.leavingEl)];return[4,Promise.all(r)];case 1:t.sent();return[4,notifyViewReady(e.viewIsReady,e.enteringEl)];case 2:t.sent();return[2]}}))}))};var notifyViewReady=function(e,n){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(i){switch(i.label){case 0:if(!e)return[3,2];return[4,e(n)];case 1:i.sent();i.label=2;case 2:return[2]}}))}))};var playTransition=function(e,n){var i=n.progressCallback;var r=new Promise((function(n){e.onFinish((function(e){return n(e===1)}))}));if(i){e.progressStart(true);i(e)}else{e.play()}return r};var fireWillEvents=function(e,n){lifecycle(n,LIFECYCLE_WILL_LEAVE);lifecycle(e,LIFECYCLE_WILL_ENTER)};var fireDidEvents=function(e,n){lifecycle(e,LIFECYCLE_DID_ENTER);lifecycle(n,LIFECYCLE_DID_LEAVE)};var lifecycle=function(e,n){if(e){var i=new CustomEvent(n,{bubbles:false,cancelable:false});e.dispatchEvent(i)}};var shallowReady=function(e){if(e){return new Promise((function(n){return componentOnReady(e,n)}))}return Promise.resolve()};var deepReady=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,i;return __generator(this,(function(r){switch(r.label){case 0:n=e;if(!n)return[3,4];if(!(n.componentOnReady!=null))return[3,2];return[4,n.componentOnReady()];case 1:i=r.sent();if(i!=null){return[2]}r.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(deepReady))];case 3:r.sent();r.label=4;case 4:return[2]}}))}))};var setPageHidden=function(e,n){if(n){e.setAttribute("aria-hidden","true");e.classList.add("ion-page-hidden")}else{e.hidden=false;e.removeAttribute("aria-hidden");e.classList.remove("ion-page-hidden")}};var setZIndex=function(e,n,i){if(e!==undefined){e.style.zIndex=i==="back"?"99":"101"}if(n!==undefined){n.style.zIndex="100"}};var getIonPageElement=function(e){if(e.classList.contains("ion-page")){return e}var n=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");if(n){return n}return e};export{LIFECYCLE_WILL_ENTER as L,LIFECYCLE_DID_ENTER as a,LIFECYCLE_WILL_LEAVE as b,LIFECYCLE_DID_LEAVE as c,LIFECYCLE_WILL_UNLOAD as d,deepReady as e,getIonPageElement as g,lifecycle as l,setPageHidden as s,transition as t};