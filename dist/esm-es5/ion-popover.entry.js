import{__awaiter,__generator}from"tslib";import{r as registerInstance,e as createEvent,h,H as Host,i as getElement}from"./index-7a8b7a1c.js";import{b as getIonMode}from"./ionic-global-63a97a32.js";import{a as attachComponent,d as detachComponent}from"./framework-delegate-4392cd63.js";import{B as BACKDROP,e as prepareOverlay,d as present,f as dismiss,g as eventMethod}from"./overlays-e9ccff30.js";import{g as getClassMap}from"./theme-ff3fc52f.js";import{e as deepReady}from"./index-931440b1.js";import{c as createAnimation}from"./animation-096c6391.js";import"./helpers-dd7e4b7b.js";import"./hardware-back-button-4a6b37fb.js";var iosEnterAnimation=function(e,o){var t="top";var r="left";var i=e.querySelector(".popover-content");var a=i.getBoundingClientRect();var n=a.width;var s=a.height;var p=e.ownerDocument.defaultView.innerWidth;var l=e.ownerDocument.defaultView.innerHeight;var d=o&&o.target&&o.target.getBoundingClientRect();var c=d!=null&&"top"in d?d.top:l/2-s/2;var v=d!=null&&"left"in d?d.left:p/2;var m=d&&d.width||0;var h=d&&d.height||0;var f=e.querySelector(".popover-arrow");var u=f.getBoundingClientRect();var b=u.width;var g=u.height;if(d==null){f.style.display="none"}var x={top:c+h,left:v+m/2-b/2};var w={top:c+h+(g-1),left:v+m/2-n/2};var y=false;var k=false;if(w.left<POPOVER_IOS_BODY_PADDING+25){y=true;w.left=POPOVER_IOS_BODY_PADDING}else if(n+POPOVER_IOS_BODY_PADDING+w.left+25>p){k=true;w.left=p-n-POPOVER_IOS_BODY_PADDING;r="right"}if(c+h+s>l&&c-s>0){x.top=c-(g+1);w.top=c-s-(g-1);e.className=e.className+" popover-bottom";t="bottom"}else if(c+h+s>l){i.style.bottom=POPOVER_IOS_BODY_PADDING+"%"}f.style.top=x.top+"px";f.style.left=x.left+"px";i.style.top=w.top+"px";i.style.left=w.left+"px";if(y){i.style.left="calc("+w.left+"px + var(--ion-safe-area-left, 0px))"}if(k){i.style.left="calc("+w.left+"px - var(--ion-safe-area-right, 0px))"}i.style.transformOrigin=t+" "+r;var D=createAnimation();var P=createAnimation();var E=createAnimation();P.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);return D.addElement(e).easing("ease").duration(100).addAnimation([P,E])};var POPOVER_IOS_BODY_PADDING=5;var iosLeaveAnimation=function(e){var o=createAnimation();var t=createAnimation();var r=createAnimation();t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return o.addElement(e).easing("ease").duration(500).addAnimation([t,r])};var mdEnterAnimation=function(e,o){var t=12;var r=e.ownerDocument;var i=r.dir==="rtl";var a="top";var n=i?"right":"left";var s=e.querySelector(".popover-content");var p=s.getBoundingClientRect();var l=p.width;var d=p.height;var c=r.defaultView.innerWidth;var v=r.defaultView.innerHeight;var m=o&&o.target&&o.target.getBoundingClientRect();var h=m!=null&&"bottom"in m?m.bottom:v/2-d/2;var f=m!=null&&"left"in m?i?m.left-l+m.width:m.left:c/2-l/2;var u=m&&m.height||0;var b={top:h,left:f};if(b.left<t){b.left=t;n="left"}else if(l+t+b.left>c){b.left=c-l-t;n="right"}if(h+u+d>v&&h-d>0){b.top=h-d-u;e.className=e.className+" popover-bottom";a="bottom"}else if(h+u+d>v){s.style.bottom=t+"px"}var g=createAnimation();var x=createAnimation();var w=createAnimation();var y=createAnimation();var k=createAnimation();x.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);w.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);y.addElement(s).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":a+" "+n}).fromTo("transform","scale(0.001)","scale(1)");k.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1);return g.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([x,w,y,k])};var mdLeaveAnimation=function(e){var o=createAnimation();var t=createAnimation();var r=createAnimation();t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return o.addElement(e).easing("ease").duration(500).addAnimation([t,r])};var popoverIosCss='.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}';var popoverMdCss=".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}";var Popover=function(){function e(e){var o=this;registerInstance(this,e);this.didPresent=createEvent(this,"ionPopoverDidPresent",7);this.willPresent=createEvent(this,"ionPopoverWillPresent",7);this.willDismiss=createEvent(this,"ionPopoverWillDismiss",7);this.didDismiss=createEvent(this,"ionPopoverDidDismiss",7);this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.translucent=false;this.animated=true;this.onDismiss=function(e){e.stopPropagation();e.preventDefault();o.dismiss()};this.onBackdropTap=function(){o.dismiss(undefined,BACKDROP)};this.onLifecycle=function(e){var t=o.usersElement;var r=LIFECYCLE_MAP[e.type];if(t&&r){var i=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(i)}}}e.prototype.connectedCallback=function(){prepareOverlay(this.el)};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,o,t;return __generator(this,(function(r){switch(r.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".popover-content");if(!e){throw new Error("container is undefined")}o=Object.assign(Object.assign({},this.componentProps),{popover:this.el});t=this;return[4,attachComponent(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],o)];case 1:t.usersElement=r.sent();return[4,deepReady(this.usersElement)];case 2:r.sent();return[2,present(this,"popoverEnter",iosEnterAnimation,mdEnterAnimation,this.event)]}}))}))};e.prototype.dismiss=function(e,o){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(r){switch(r.label){case 0:return[4,dismiss(this,e,o,"popoverLeave",iosLeaveAnimation,mdLeaveAnimation,this.event)];case 1:t=r.sent();if(!t)return[3,3];return[4,detachComponent(this.delegate,this.usersElement)];case 2:r.sent();r.label=3;case 3:return[2,t]}}))}))};e.prototype.onDidDismiss=function(){return eventMethod(this.el,"ionPopoverDidDismiss")};e.prototype.onWillDismiss=function(){return eventMethod(this.el,"ionPopoverWillDismiss")};e.prototype.render=function(){var e;var o=getIonMode(this);var t=this.onLifecycle;return h(Host,{"aria-modal":"true","no-router":true,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},getClassMap(this.cssClass)),(e={},e[o]=true,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},h("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),h("div",{tabindex:"0"}),h("div",{class:"popover-wrapper ion-overlay-wrapper"},h("div",{class:"popover-arrow"}),h("div",{class:"popover-content"})),h("div",{tabindex:"0"}))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();var LIFECYCLE_MAP={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};Popover.style={ios:popoverIosCss,md:popoverMdCss};export{Popover as ion_popover};