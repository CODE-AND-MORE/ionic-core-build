import{r as t,h as o,H as i,i as n,e as r,f as e,j as a,c as s}from"./p-3df3e749.js";import{b as l,c as d,a as c}from"./p-125156f2.js";import{c as p,h as b}from"./p-11181cdf.js";import{j as g}from"./p-f4d641a6.js";import{g as h}from"./p-bac8255f.js";import{a as m,d as u}from"./p-8a0d5290.js";import{t as f}from"./p-8bfdda6e.js";const x=class{constructor(o){t(this,o)}componentDidLoad(){k((async()=>{const t=c(window,"hybrid");d.getBoolean("_testing")||__sc_import_ionic("./p-d624cf76.js").then((t=>t.startTapClick(d))),d.getBoolean("statusTap",t)&&__sc_import_ionic("./p-77cf1aa4.js").then((t=>t.startStatusTap())),d.getBoolean("inputShims",v())&&__sc_import_ionic("./p-c4ec548d.js").then((t=>t.startInputShims(d)));const o=await __sc_import_ionic("./p-94c70170.js");d.getBoolean("hardwareBackButton",t)?o.startHardwareBackButton():o.blockHardwareBackButton(),"undefined"!=typeof window&&__sc_import_ionic("./p-f428a208.js").then((t=>t.startKeyboardAssist(window))),__sc_import_ionic("./p-379187ad.js").then((t=>t.startFocusVisible()))}))}render(){const t=l(this);return o(i,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":d.getBoolean("_forceStatusbarPadding")}})}get el(){return n(this)}},v=()=>c(window,"ios")&&c(window,"mobile"),k=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};x.style="html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";const w=class{constructor(o){t(this,o),this.collapse=!1}render(){const t=l(this);return o(i,{class:{[t]:!0,"buttons-collapse":this.collapse}})}};w.style={ios:".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:0.3em;font-size:24px;line-height:0.67}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:0.4em;font-size:24px;line-height:0.67}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:unset;-webkit-margin-start:0.4em;margin-inline-start:0.4em}}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:28px;line-height:0.67}",md:".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:0.3em;font-size:1.4em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-icon[slot=start]{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:0.4em;font-size:1.4em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:unset;-webkit-margin-start:0.4em;margin-inline-start:0.4em}}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"};const A=class{constructor(o){t(this,o),this.ionScrollStart=r(this,"ionScrollStart",7),this.ionScroll=r(this,"ionScroll",7),this.ionScrollEnd=r(this,"ionScrollEnd",7),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.isMainContent=!0,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}connectedCallback(){this.isMainContent=null===this.el.closest("ion-menu, ion-popover, ion-modal")}disconnectedCallback(){this.onScrollEnd()}onAppLoad(){this.resize()}onClick(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}shouldForceOverscroll(){const{forceOverscroll:t}=this,o=l(this);return void 0===t?"ios"===o&&c("ios"):t}resize(){this.fullscreen?e((()=>this.readDimensions())):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,a(this))}readDimensions(){const t=y(this.el),o=Math.max(this.el.offsetTop,0),i=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||i!==this.cBottom)&&(this.cTop=o,this.cBottom=i,a(this))}onScroll(t){const o=Date.now(),i=!this.isScrolling;this.lastScroll=o,i&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,e((o=>{this.queued=!1,this.detail.event=t,z(this.detail,this.scrollEl,o,i),this.ionScroll.emit(this.detail)})))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,o,i){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,i)}async scrollToPoint(t,o,i=0){const n=this.scrollEl;if(i<32)return null!=o&&(n.scrollTop=o),void(null!=t&&(n.scrollLeft=t));let r,e=0;const a=new Promise((t=>r=t)),s=n.scrollTop,l=n.scrollLeft,d=null!=o?o-s:0,c=null!=t?t-l:0,p=t=>{const o=Math.min(1,(t-e)/i)-1,a=Math.pow(o,3)+1;0!==d&&(n.scrollTop=Math.floor(a*d+s)),0!==c&&(n.scrollLeft=Math.floor(a*c+l)),a<1?requestAnimationFrame(p):r()};return requestAnimationFrame((t=>{e=t,p(t)})),a}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval((()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()}),100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}render(){const{isMainContent:t,scrollX:n,scrollY:r}=this,e=l(this),a=this.shouldForceOverscroll(),s=t?"main":"div",c="ios"===e&&d.getBoolean("experimentalTransitionShadow",!0);return this.resize(),o(i,{class:p(this.color,{[e]:!0,"content-sizing":b("ion-popover",this.el),overscroll:a}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}},o("div",{id:"background-content",part:"background"}),o(s,{class:{"inner-scroll":!0,"scroll-x":n,"scroll-y":r,overscroll:(n||r)&&a},ref:t=>this.scrollEl=t,onScroll:this.scrollEvents?t=>this.onScroll(t):void 0,part:"scroll"},o("slot",null)),c?o("div",{class:"transition-effect"},o("div",{class:"transition-cover"}),o("div",{class:"transition-shadow"})):null,o("slot",{name:"fixed"}))}get el(){return n(this)}},y=t=>{const o=t.closest("ion-tabs");if(o)return o;return t.closest("ion-app,ion-page,.ion-page,page-inner")||(t=>t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null)(t)},z=(t,o,i,n)=>{const r=t.currentX,e=t.currentY,a=o.scrollLeft,s=o.scrollTop,l=i-t.currentTime;if(n&&(t.startTime=i,t.startX=a,t.startY=s,t.velocityX=t.velocityY=0),t.currentTime=i,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=s,t.deltaX=a-t.startX,t.deltaY=s-t.startY,l>0&&l<100){const o=(s-e)/l;t.velocityX=(a-r)/l*.7+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}};A.style=':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow);overscroll-behavior-x:contain}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{display:none;position:absolute;left:-100%;width:100%;height:100vh;opacity:0;pointer-events:none}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}::slotted([slot=fixed]){position:absolute}';const j=class{constructor(o){t(this,o),this.translucent=!1}render(){const t=l(this),n=this.translucent;return o(i,{role:"contentinfo",class:{[t]:!0,[`footer-${t}`]:!0,"footer-translucent":n,[`footer-translucent-${t}`]:n}},"ios"===t&&n&&o("div",{class:"footer-background"}),o("slot",null))}};j.style={ios:"ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}",md:'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md::before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}[dir=rtl] .footer-md::before,:host-context([dir=rtl]) .footer-md::before{left:unset;right:unset;right:0}[dir=rtl] .footer-md::before,:host-context([dir=rtl]) .footer-md::before{background-position:right 0 top 0}.footer-md.ion-no-border::before{display:none}'};const M=t=>{const o=document.querySelector(`${t}.ion-cloned-element`);if(null!==o)return o;const i=document.createElement(t);return i.classList.add("ion-cloned-element"),i.style.setProperty("display","none"),document.body.appendChild(i),i},C=t=>{if(!t)return;const o=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(o).map((t=>{const o=t.querySelector("ion-title");return{el:t,background:t.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:o,innerTitleEl:o?o.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(t.querySelectorAll("ion-buttons"))||[]}}))||[]}},Z=(t,o)=>{void 0===o?t.background.style.removeProperty("--opacity"):t.background.style.setProperty("--opacity",o.toString())},S=(t,o=!0)=>{o?t.el.classList.remove("header-collapse-condense-inactive"):t.el.classList.add("header-collapse-condense-inactive")},B=class{constructor(o){t(this,o),this.collapsibleHeaderInitialized=!1,this.translucent=!1}async componentDidLoad(){await this.checkCollapsibleHeader()}async componentDidUpdate(){await this.checkCollapsibleHeader()}disconnectedCallback(){this.destroyCollapsibleHeader()}async checkCollapsibleHeader(){const t="condense"===this.collapse,o=!(!t||"ios"!==l(this))&&t;if(!o&&this.collapsibleHeaderInitialized)this.destroyCollapsibleHeader();else if(o&&!this.collapsibleHeaderInitialized){const t=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),o=t?t.querySelector("ion-content"):null;s((()=>{M("ion-title").size="large",M("ion-back-button")})),await this.setupCollapsibleHeader(o,t)}}destroyCollapsibleHeader(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0),this.collapsibleMainHeader&&(this.collapsibleMainHeader.classList.remove("header-collapse-main"),this.collapsibleMainHeader=void 0)}async setupCollapsibleHeader(t,o){if(!t||!o)return void console.error("ion-header requires a content to collapse, make sure there is an ion-content.");if("undefined"==typeof IntersectionObserver)return;this.scrollEl=await t.getScrollElement();const i=o.querySelectorAll("ion-header");if(this.collapsibleMainHeader=Array.from(i).find((t=>"condense"!==t.collapse)),!this.collapsibleMainHeader)return;const n=C(this.collapsibleMainHeader),r=C(this.el);n&&r&&(S(n,!1),n.toolbars.forEach((t=>{Z(t,0)})),this.intersectionObserver=new IntersectionObserver((t=>{((t,o,i,n)=>{s((()=>{const r=n.scrollTop;((t,o,i)=>{if(!t[0].isIntersecting)return;const n=t[0].intersectionRatio>.9||i<=0?0:100*(1-t[0].intersectionRatio)/75;o.toolbars.forEach((t=>{Z(t,1===n?void 0:n)}))})(t,o,r);const e=t[0],a=e.intersectionRect,s=a.width*a.height,l=0===s&&0==e.rootBounds.width*e.rootBounds.height,d=Math.abs(a.left-e.boundingClientRect.left),c=Math.abs(a.right-e.boundingClientRect.right);l||s>0&&(d>=5||c>=5)||(e.isIntersecting?(S(o,!1),S(i)):(0===a.x&&0===a.y||0!==a.width&&0!==a.height)&&r>0&&(S(o),S(i,!1),Z(o.toolbars[0])))}))})(t,n,r,this.scrollEl)}),{root:t,threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1]}),this.intersectionObserver.observe(r.toolbars[r.toolbars.length-1].el),this.contentScrollCallback=()=>{((t,o,i)=>{e((()=>{const n=g(1,1+-t.scrollTop/500,1.1);null===i.querySelector("ion-refresher.refresher-native")&&s((()=>{((t=[],o=1,i=!1)=>{t.forEach((t=>{const n=t.ionTitleEl,r=t.innerTitleEl;n&&"large"===n.size&&(r.style.transition=i?"all 0.2s ease-in-out":"",r.style.transform=`scale3d(${o}, ${o}, 1)`)}))})(o.toolbars,n)}))}))})(this.scrollEl,r,t)},this.scrollEl.addEventListener("scroll",this.contentScrollCallback),s((()=>{void 0!==this.collapsibleMainHeader&&this.collapsibleMainHeader.classList.add("header-collapse-main")})),this.collapsibleHeaderInitialized=!0)}render(){const{translucent:t}=this,n=l(this);return o(i,{role:"banner",class:{[n]:!0,[`header-${n}`]:!0,"header-translucent":this.translucent,[`header-collapse-${this.collapse||"none"}`]:!0,[`header-translucent-${n}`]:this.translucent}},"ios"===n&&t&&o("div",{class:"header-background"}),o("slot",null))}get el(){return n(this)}};B.style={ios:"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}",md:'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}'};const I=class{constructor(o){t(this,o),this.ionNavWillLoad=r(this,"ionNavWillLoad",7),this.ionNavWillChange=r(this,"ionNavWillChange",3),this.ionNavDidChange=r(this,"ionNavDidChange",3),this.gestureOrAnimationInProgress=!1,this.mode=l(this),this.animated=!0}swipeHandlerChanged(){this.gesture&&this.gesture.enable(void 0!==this.swipeHandler)}async connectedCallback(){const t=()=>{this.gestureOrAnimationInProgress=!0,this.swipeHandler&&this.swipeHandler.onStart()};this.gesture=(await __sc_import_ionic("./p-e746df0a.js")).createSwipeBackGesture(this.el,(()=>!this.gestureOrAnimationInProgress&&!!this.swipeHandler&&this.swipeHandler.canStart()),(()=>t()),(t=>this.ani&&this.ani.progressStep(t)),((t,o,i)=>{if(this.ani){this.ani.onFinish((()=>{this.gestureOrAnimationInProgress=!1,this.swipeHandler&&this.swipeHandler.onEnd(t)}),{oneTimeCallback:!0});let n=t?-.001:.001;t?n+=h([0,0],[.32,.72],[0,1],[1,1],o)[0]:(this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),n+=h([0,0],[1,0],[.68,.28],[1,1],o)[0]),this.ani.progressEnd(t?1:0,n,i)}else this.gestureOrAnimationInProgress=!1})),this.swipeHandlerChanged()}componentWillLoad(){this.ionNavWillLoad.emit()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(t,o,i){const n=await this.lock();let r=!1;try{r=await this.transition(t,o,i)}catch(e){console.error(e)}return n(),r}async setRouteId(t,o,i,n){return{changed:await this.setRoot(t,o,{duration:"root"===i?0:void 0,direction:"back"===i?"back":"forward",animationBuilder:n}),element:this.activeEl}}async getRouteId(){const t=this.activeEl;return t?{id:t.tagName,element:t}:void 0}async setRoot(t,o,i){if(this.activeComponent===t)return!1;const n=this.activeEl,r=await m(this.delegate,this.el,t,["ion-page","ion-page-invisible"],o);return this.activeComponent=t,this.activeEl=r,await this.commit(r,n,i),await u(this.delegate,n),!0}async transition(t,o,i={}){if(o===t)return!1;this.ionNavWillChange.emit();const{el:n,mode:r}=this,e=this.animated&&d.getBoolean("animated",!0),a=this.animation||i.animationBuilder||d.get("navAnimation");return await f(Object.assign(Object.assign({mode:r,animated:e,enteringEl:t,leavingEl:o,baseEl:n,progressCallback:i.progressAnimation?t=>{void 0===t||this.gestureOrAnimationInProgress?this.ani=t:(this.gestureOrAnimationInProgress=!0,t.onFinish((()=>{this.gestureOrAnimationInProgress=!1,this.swipeHandler&&this.swipeHandler.onEnd(!1)}),{oneTimeCallback:!0}),t.progressEnd(0,0,0))}:void 0},i),{animationBuilder:a})),this.ionNavDidChange.emit(),!0}async lock(){const t=this.waitPromise;let o;return this.waitPromise=new Promise((t=>o=t)),void 0!==t&&await t,o}render(){return o("slot",null)}get el(){return n(this)}static get watchers(){return{swipeHandler:["swipeHandlerChanged"]}}};I.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";const D=class{constructor(o){t(this,o),this.ionStyle=r(this,"ionStyle",7)}sizeChanged(){this.emitStyle()}connectedCallback(){this.emitStyle()}emitStyle(){const t=this.getSize();this.ionStyle.emit({[`title-${t}`]:!0})}getSize(){return void 0!==this.size?this.size:"default"}render(){const t=l(this),n=this.getSize();return o(i,{class:p(this.color,{[t]:!0,[`title-${n}`]:!0,"title-rtl":"rtl"===document.dir})},o("div",{class:"toolbar-title"},o("slot",null)))}get el(){return n(this)}static get watchers(){return{size:["sizeChanged"]}}};D.style={ios:":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{left:0;top:0;padding-left:90px;padding-right:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;-webkit-transform-origin:left center;transform-origin:left center;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}",md:":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}"};const E=class{constructor(o){t(this,o),this.childrenStyles=new Map}componentWillLoad(){const t=Array.from(this.el.querySelectorAll("ion-buttons")),o=t.find((t=>"start"===t.slot));o&&o.classList.add("buttons-first-slot");const i=t.reverse(),n=i.find((t=>"end"===t.slot))||i.find((t=>"primary"===t.slot))||i.find((t=>"secondary"===t.slot));n&&n.classList.add("buttons-last-slot")}childrenStyle(t){t.stopPropagation();const o=t.target.tagName,i=t.detail,n={},r=this.childrenStyles.get(o)||{};let e=!1;Object.keys(i).forEach((t=>{const o=`toolbar-${t}`,a=i[t];a!==r[o]&&(e=!0),a&&(n[o]=!0)})),e&&(this.childrenStyles.set(o,n),a(this))}render(){const t=l(this),n={};return this.childrenStyles.forEach((t=>{Object.assign(n,t)})),o(i,{class:Object.assign(Object.assign({},n),p(this.color,{[t]:!0,"in-toolbar":b("ion-toolbar",this.el)}))},o("div",{class:"toolbar-background"}),o("div",{class:"toolbar-container"},o("slot",{name:"start"}),o("slot",{name:"secondary"}),o("div",{class:"toolbar-content"},o("slot",null)),o("slot",{name:"primary"}),o("slot",{name:"end"})))}get el(){return n(this)}};E.style={ios:":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}",md:":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"};export{x as ion_app,w as ion_buttons,A as ion_content,j as ion_footer,B as ion_header,I as ion_router_outlet,D as ion_title,E as ion_toolbar}