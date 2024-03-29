import { Component, Element, Event, Listen, Method, Prop } from '@stencil/core';
import { debounce } from '../../utils/helpers';
import { ROUTER_INTENT_BACK, ROUTER_INTENT_FORWARD, ROUTER_INTENT_NONE } from './utils/constants';
import { printRedirects, printRoutes } from './utils/debug';
import { readNavState, waitUntilNavNode, writeNavState } from './utils/dom';
import { findRouteRedirect, routerIDsToChain, routerPathToChain } from './utils/matching';
import { readRedirects, readRoutes } from './utils/parser';
import { chainToPath, generatePath, parsePath, readPath, writePath } from './utils/path';
export class Router {
  constructor() {
    this.previousPath = null;
    this.busy = false;
    this.state = 0;
    this.lastState = 0;
    /**
     * By default `ion-router` will match the routes at the root path ("/").
     * That can be changed when
     *
     */
    this.root = '/';
    /**
     * The router can work in two "modes":
     * - With hash: `/index.html#/path/to/page`
     * - Without hash: `/path/to/page`
     *
     * Using one or another might depend in the requirements of your app and/or where it's deployed.
     *
     * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
     * requires additional server-side configuration in order to properly work.
     *
     * On the other side hash-navigation is much easier to deploy, it even works over the file protocol.
     *
     * By default, this property is `true`, change to `false` to allow hash-less URLs.
     */
    this.useHash = true;
  }
  async componentWillLoad() {
    await waitUntilNavNode();
    const canProceed = await this.runGuards(this.getPath());
    if (canProceed !== true) {
      if (typeof canProceed === 'object') {
        const { redirect } = canProceed;
        const path = parsePath(redirect);
        this.setPath(path.segments, ROUTER_INTENT_NONE, path.queryString);
        await this.writeNavStateRoot(path.segments, ROUTER_INTENT_NONE);
      }
    }
    else {
      await this.onRoutesChanged();
    }
  }
  componentDidLoad() {
    window.addEventListener('ionRouteRedirectChanged', debounce(this.onRedirectChanged.bind(this), 10));
    window.addEventListener('ionRouteDataChanged', debounce(this.onRoutesChanged.bind(this), 100));
  }
  async onPopState() {
    const direction = this.historyDirection();
    let segments = this.getPath();
    const canProceed = await this.runGuards(segments);
    if (canProceed !== true) {
      if (typeof canProceed === 'object') {
        segments = parsePath(canProceed.redirect).segments;
      }
      else {
        return false;
      }
    }
    return this.writeNavStateRoot(segments, direction);
  }
  onBackButton(ev) {
    ev.detail.register(0, processNextHandler => {
      this.back();
      processNextHandler();
    });
  }
  /** @internal */
  async canTransition() {
    const canProceed = await this.runGuards();
    if (canProceed !== true) {
      if (typeof canProceed === 'object') {
        return canProceed.redirect;
      }
      else {
        return false;
      }
    }
    return true;
  }
  /**
   * Navigate to the specified URL.
   *
   * @param url The url to navigate to.
   * @param direction The direction of the animation. Defaults to `"forward"`.
   */
  async push(url, direction = 'forward', animation) {
    if (url.startsWith('.')) {
      url = (new URL(url, window.location.href)).pathname;
    }
    let parsedPath = parsePath(url);
    const canProceed = await this.runGuards(parsedPath.segments);
    if (canProceed !== true) {
      if (typeof canProceed === 'object') {
        parsedPath = parsePath(canProceed.redirect);
      }
      else {
        return false;
      }
    }
    this.setPath(parsedPath.segments, direction, parsedPath.queryString);
    return this.writeNavStateRoot(parsedPath.segments, direction, animation);
  }
  /**
   * Go back to previous page in the window.history.
   */
  back() {
    window.history.back();
    return Promise.resolve(this.waitPromise);
  }
  /** @internal */
  async printDebug() {
    printRoutes(readRoutes(this.el));
    printRedirects(readRedirects(this.el));
  }
  /** @internal */
  async navChanged(direction) {
    if (this.busy) {
      console.warn('[ion-router] router is busy, navChanged was cancelled');
      return false;
    }
    const { ids, outlet } = await readNavState(window.document.body);
    const routes = readRoutes(this.el);
    const chain = routerIDsToChain(ids, routes);
    if (!chain) {
      console.warn('[ion-router] no matching URL for ', ids.map(i => i.id));
      return false;
    }
    const path = chainToPath(chain);
    if (!path) {
      console.warn('[ion-router] router could not match path because some required param is missing');
      return false;
    }
    this.setPath(path, direction);
    await this.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, path, null, ids.length);
    return true;
  }
  // This handler gets called when a `ion-route-redirect` component is added to the DOM or if the from or to property of such node changes.
  onRedirectChanged() {
    const path = this.getPath();
    if (path && findRouteRedirect(path, readRedirects(this.el))) {
      this.writeNavStateRoot(path, ROUTER_INTENT_NONE);
    }
  }
  // This handler gets called when a `ion-route` component is added to the DOM or if the from or to property of such node changes.
  onRoutesChanged() {
    return this.writeNavStateRoot(this.getPath(), ROUTER_INTENT_NONE);
  }
  historyDirection() {
    var _a;
    const win = window;
    if (win.history.state === null) {
      this.state++;
      win.history.replaceState(this.state, win.document.title, (_a = win.document.location) === null || _a === void 0 ? void 0 : _a.href);
    }
    const state = win.history.state;
    const lastState = this.lastState;
    this.lastState = state;
    if (state > lastState || (state >= lastState && lastState > 0)) {
      return ROUTER_INTENT_FORWARD;
    }
    if (state < lastState) {
      return ROUTER_INTENT_BACK;
    }
    return ROUTER_INTENT_NONE;
  }
  async writeNavStateRoot(path, direction, animation) {
    if (!path) {
      console.error('[ion-router] URL is not part of the routing set');
      return false;
    }
    // lookup redirect rule
    const redirects = readRedirects(this.el);
    const redirect = findRouteRedirect(path, redirects);
    let redirectFrom = null;
    if (redirect) {
      const { segments, queryString } = redirect.to;
      this.setPath(segments, direction, queryString);
      redirectFrom = redirect.from;
      path = segments;
    }
    // lookup route chain
    const routes = readRoutes(this.el);
    const chain = routerPathToChain(path, routes);
    if (!chain) {
      console.error('[ion-router] the path does not match any route');
      return false;
    }
    // write DOM give
    return this.safeWriteNavState(document.body, chain, direction, path, redirectFrom, 0, animation);
  }
  async safeWriteNavState(node, chain, direction, path, redirectFrom, index = 0, animation) {
    const unlock = await this.lock();
    let changed = false;
    try {
      changed = await this.writeNavState(node, chain, direction, path, redirectFrom, index, animation);
    }
    catch (e) {
      console.error(e);
    }
    unlock();
    return changed;
  }
  async lock() {
    const p = this.waitPromise;
    let resolve;
    this.waitPromise = new Promise(r => resolve = r);
    if (p !== undefined) {
      await p;
    }
    return resolve;
  }
  // Executes the beforeLeave hook of the source route and the beforeEnter hook of the target route if they exist.
  //
  // When the beforeLeave hook does not return true (to allow navigating) then that value is returned early and the beforeEnter is executed.
  // Otherwise the beforeEnterHook hook of the target route is executed.
  async runGuards(to = this.getPath(), from) {
    if (from === undefined) {
      from = parsePath(this.previousPath).segments;
    }
    if (!to || !from) {
      return true;
    }
    const routes = readRoutes(this.el);
    const fromChain = routerPathToChain(from, routes);
    const beforeLeaveHook = fromChain && fromChain[fromChain.length - 1].beforeLeave;
    const canLeave = beforeLeaveHook ? await beforeLeaveHook() : true;
    if (canLeave === false || typeof canLeave === 'object') {
      return canLeave;
    }
    const toChain = routerPathToChain(to, routes);
    const beforeEnterHook = toChain && toChain[toChain.length - 1].beforeEnter;
    return beforeEnterHook ? beforeEnterHook() : true;
  }
  async writeNavState(node, chain, direction, path, redirectFrom, index = 0, animation) {
    if (this.busy) {
      console.warn('[ion-router] router is busy, transition was cancelled');
      return false;
    }
    this.busy = true;
    // generate route event and emit will change
    const routeEvent = this.routeChangeEvent(path, redirectFrom);
    if (routeEvent) {
      this.ionRouteWillChange.emit(routeEvent);
    }
    const changed = await writeNavState(node, chain, direction, index, false, animation);
    this.busy = false;
    // emit did change
    if (routeEvent) {
      this.ionRouteDidChange.emit(routeEvent);
    }
    return changed;
  }
  setPath(path, direction, queryString) {
    this.state++;
    writePath(window.history, this.root, this.useHash, path, direction, this.state, queryString);
  }
  getPath() {
    return readPath(window.location, this.root, this.useHash);
  }
  routeChangeEvent(path, redirectFromPath) {
    const from = this.previousPath;
    const to = generatePath(path);
    this.previousPath = to;
    if (to === from) {
      return null;
    }
    const redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
    return {
      from,
      redirectedFrom,
      to,
    };
  }
  static get is() { return "ion-router"; }
  static get properties() { return {
    "root": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "By default `ion-router` will match the routes at the root path (\"/\").\nThat can be changed when"
      },
      "attribute": "root",
      "reflect": false,
      "defaultValue": "'/'"
    },
    "useHash": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The router can work in two \"modes\":\n- With hash: `/index.html#/path/to/page`\n- Without hash: `/path/to/page`\n\nUsing one or another might depend in the requirements of your app and/or where it's deployed.\n\nUsually \"hash-less\" navigation works better for SEO and it's more user friendly too, but it might\nrequires additional server-side configuration in order to properly work.\n\nOn the other side hash-navigation is much easier to deploy, it even works over the file protocol.\n\nBy default, this property is `true`, change to `false` to allow hash-less URLs."
      },
      "attribute": "use-hash",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get events() { return [{
      "method": "ionRouteWillChange",
      "name": "ionRouteWillChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the route is about to change"
      },
      "complexType": {
        "original": "RouterEventDetail",
        "resolved": "RouterEventDetail",
        "references": {
          "RouterEventDetail": {
            "location": "import",
            "path": "../../interface"
          }
        }
      }
    }, {
      "method": "ionRouteDidChange",
      "name": "ionRouteDidChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the route had changed"
      },
      "complexType": {
        "original": "RouterEventDetail",
        "resolved": "RouterEventDetail",
        "references": {
          "RouterEventDetail": {
            "location": "import",
            "path": "../../interface"
          }
        }
      }
    }]; }
  static get methods() { return {
    "canTransition": {
      "complexType": {
        "signature": "() => Promise<string | boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<string | boolean>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "internal",
            "text": undefined
          }]
      }
    },
    "push": {
      "complexType": {
        "signature": "(url: string, direction?: RouterDirection, animation?: AnimationBuilder | undefined) => Promise<boolean>",
        "parameters": [{
            "tags": [{
                "text": "url The url to navigate to.",
                "name": "param"
              }],
            "text": "The url to navigate to."
          }, {
            "tags": [{
                "text": "direction The direction of the animation. Defaults to `\"forward\"`.",
                "name": "param"
              }],
            "text": "The direction of the animation. Defaults to `\"forward\"`."
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "RouterDirection": {
            "location": "import",
            "path": "../../interface"
          },
          "AnimationBuilder": {
            "location": "import",
            "path": "../../interface"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "Navigate to the specified URL.",
        "tags": [{
            "name": "param",
            "text": "url The url to navigate to."
          }, {
            "name": "param",
            "text": "direction The direction of the animation. Defaults to `\"forward\"`."
          }]
      }
    },
    "back": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Go back to previous page in the window.history.",
        "tags": []
      }
    },
    "printDebug": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "internal",
            "text": undefined
          }]
      }
    },
    "navChanged": {
      "complexType": {
        "signature": "(direction: RouterDirection) => Promise<boolean>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "RouterDirection": {
            "location": "import",
            "path": "../../interface"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "internal",
            "text": undefined
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "popstate",
      "method": "onPopState",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "ionBackButton",
      "method": "onBackButton",
      "target": "document",
      "capture": false,
      "passive": false
    }]; }
}
