import{c as i,B as a}from"./p-53b5a7f5.js";const n="ionViewWillEnter",e="ionViewDidEnter",o="ionViewWillLeave",s="ionViewDidLeave",t="ionViewWillUnload",r=a=>new Promise(((n,e)=>{i((()=>{c(a),d(a).then((i=>{i.animation&&i.animation.destroy(),l(a),n(i)}),(i=>{l(a),e(i)}))}))})),c=i=>{const a=i.enteringEl,n=i.leavingEl;E(a,n,i.direction),i.showGoBack?a.classList.add("can-go-back"):a.classList.remove("can-go-back"),h(a,!1),n&&h(n,!1)},d=async i=>{const n=await w(i);return n&&a.isBrowser?p(n,i):m(i)},l=i=>{const a=i.leavingEl;i.enteringEl.classList.remove("ion-page-invisible"),void 0!==a&&a.classList.remove("ion-page-invisible")},w=async i=>{if(i.leavingEl&&i.animated&&0!==i.duration)return i.animationBuilder?i.animationBuilder:"ios"===i.mode?(await __sc_import_ionic("./p-a2505afd.js")).iosTransitionAnimation:(await __sc_import_ionic("./p-37d17784.js")).mdTransitionAnimation},p=async(i,a)=>{await u(a,!0);const n=i(a.baseEl,a);g(a.enteringEl,a.leavingEl);const e=await b(n,a);return a.progressCallback&&a.progressCallback(void 0),e&&V(a.enteringEl,a.leavingEl),{hasCompleted:e,animation:n}},m=async i=>{const a=i.enteringEl,n=i.leavingEl;return await u(i,!1),g(a,n),V(a,n),{hasCompleted:!0}},u=async(i,a)=>{const n=(void 0!==i.deepWait?i.deepWait:a)?[_(i.enteringEl),_(i.leavingEl)]:[y(i.enteringEl),y(i.leavingEl)];await Promise.all(n),await v(i.viewIsReady,i.enteringEl)},v=async(i,a)=>{i&&await i(a)},b=(i,a)=>{const n=a.progressCallback,e=new Promise((a=>{i.onFinish((i=>a(1===i)))}));return n?(i.progressStart(!0),n(i)):i.play(),e},g=(i,a)=>{f(a,"ionViewWillLeave"),f(i,"ionViewWillEnter")},V=(i,a)=>{f(i,"ionViewDidEnter"),f(a,"ionViewDidLeave")},f=(i,a)=>{if(i){const n=new CustomEvent(a,{bubbles:!1,cancelable:!1});i.dispatchEvent(n)}},y=i=>i&&i.componentOnReady?i.componentOnReady():Promise.resolve(),_=async i=>{const a=i;if(a){if(null!=a.componentOnReady&&null!=await a.componentOnReady())return;await Promise.all(Array.from(a.children).map(_))}},h=(i,a)=>{a?(i.setAttribute("aria-hidden","true"),i.classList.add("ion-page-hidden")):(i.hidden=!1,i.removeAttribute("aria-hidden"),i.classList.remove("ion-page-hidden"))},E=(i,a,n)=>{void 0!==i&&(i.style.zIndex="back"===n?"99":"101"),void 0!==a&&(a.style.zIndex="100")},L=i=>{if(i.classList.contains("ion-page"))return i;return i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||i};export{n as L,e as a,o as b,s as c,t as d,_ as e,L as g,f as l,h as s,r as t}