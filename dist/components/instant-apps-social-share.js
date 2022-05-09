import { getAssetPath, HTMLElement, h as h$n, Host, proxyCustomElement } from '@stencil/core/internal/client';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r$s(n){return null!=n}function t$q(n){return null==n}function e$z(n){return n}function l$n(n){return r$s(n)&&n.destroy(),null}function a$r(n){return r$s(n)&&n.remove(),null}function y$l(n){return null}function q$8(n){return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function l$m(t,r,e){if(t$q(t)&&t$q(r))return !0;if(t$q(t)||t$q(r)||t.length!==r.length)return !1;if(e){for(let n=0;n<t.length;n++)if(!e(t[n],r[n]))return !1}else for(let n=0;n<t.length;n++)if(t[n]!==r[n])return !1;return !0}class w$c{constructor(){this.last=0;}}const y$k=new w$c;function b$b(n,t,r,e){e=e||y$k;const o=Math.max(0,e.last-10);for(let u=o;u<r;++u)if(n[u]===t)return e.last=u,u;const f=Math.min(o,r);for(let u=0;u<f;++u)if(n[u]===t)return e.last=u,u;return -1}function v$d(n,t,r,e){const o=null==r?n.length:r,f=b$b(n,t,o,e);if(-1!==f)return n[f]=n[o-1],null==r&&n.pop(),t}const A$a=new Set;function O$8(n,t,r=n.length,e=t.length,o,f){if(0===e||0===r)return r;A$a.clear();for(let i=0;i<e;++i)A$a.add(t[i]);o=o||y$k;const u=Math.max(0,o.last-10);for(let i=u;i<r;++i)if(A$a.has(n[i])&&(f&&f.push(n[i]),A$a.delete(n[i]),n[i]=n[r-1],--r,--i,0===A$a.size||0===r))return A$a.clear(),r;for(let i=0;i<u;++i)if(A$a.has(n[i])&&(f&&f.push(n[i]),A$a.delete(n[i]),n[i]=n[r-1],--r,--i,0===A$a.size||0===r))return A$a.clear(),r;return A$a.clear(),r}function C$6(n,t){const r=n.indexOf(t);return -1!==r?(n.splice(r,1),t):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var e$y,a$q;let o$x;var d$j,i$w;null!=(e$y=globalThis.dojoConfig)&&e$y.has||null!=(a$q=globalThis.esriConfig)&&a$q.has?o$x={...null==(d$j=globalThis.dojoConfig)?void 0:d$j.has,...null==(i$w=globalThis.esriConfig)?void 0:i$w.has}:o$x={};function r$r(e){return "function"==typeof o$x[e]?o$x[e]=o$x[e](globalThis):o$x[e]}r$r.add=(e,a,d,i)=>((i||void 0===o$x[e])&&(o$x[e]=a),d&&r$r(e)),r$r.cache=o$x,r$r.add("esri-deprecation-warnings",!0),(()=>{var e;r$r.add("host-webworker",void 0!==globalThis.WorkerGlobalScope&&self instanceof globalThis.WorkerGlobalScope);const a="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document;if(r$r.add("host-browser",a),r$r.add("host-node","object"==typeof globalThis.process&&(null==(e=globalThis.process.versions)?void 0:e.node)&&globalThis.process.versions.v8),r$r.add("dom",a),r$r("host-browser")){const e=navigator,a=e.userAgent,o=e.appVersion,d=parseFloat(o);if(r$r.add("wp",parseFloat(a.split("Windows Phone")[1])||void 0),r$r.add("msapp",parseFloat(a.split("MSAppHost/")[1])||void 0),r$r.add("khtml",o.includes("Konqueror")?d:void 0),r$r.add("edge",parseFloat(a.split("Edge/")[1])||void 0),r$r.add("opr",parseFloat(a.split("OPR/")[1])||void 0),r$r.add("webkit",!r$r("wp")&&!r$r("edge")&&parseFloat(a.split("WebKit/")[1])||void 0),r$r.add("chrome",!r$r("edge")&&!r$r("opr")&&parseFloat(a.split("Chrome/")[1])||void 0),r$r.add("android",!r$r("wp")&&parseFloat(a.split("Android ")[1])||void 0),r$r.add("safari",!o.includes("Safari")||r$r("wp")||r$r("chrome")||r$r("android")||r$r("edge")||r$r("opr")?void 0:parseFloat(o.split("Version/")[1])),r$r.add("mac",o.includes("Macintosh")),!r$r("wp")&&a.match(/(iPhone|iPod|iPad)/)){const e=RegExp.$1.replace(/P/,"p"),o=a.match(/OS ([\d_]+)/)?RegExp.$1:"1",d=parseFloat(o.replace(/_/,".").replace(/_/g,""));r$r.add(e,d),r$r.add("ios",d);}r$r.add("trident",parseFloat(o.split("Trident/")[1])||void 0),r$r("webkit")||(!a.includes("Gecko")||r$r("wp")||r$r("khtml")||r$r("trident")||r$r("edge")||r$r.add("mozilla",d),r$r("mozilla")&&r$r.add("ff",parseFloat(a.split("Firefox/")[1]||a.split("Minefield/")[1])||void 0));}})(),(()=>{if(globalThis.navigator){const e=navigator.userAgent,a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(e),o=/iPhone/i.test(e);a&&r$r.add("esri-mobile",a),o&&r$r.add("esri-iPhone",o),r$r.add("esri-geolocation",!!navigator.geolocation);}r$r.add("esri-canvas-svg-support",!r$r("trident")),r$r.add("esri-wasm","WebAssembly"in globalThis),r$r.add("esri-shared-array-buffer",(()=>{const e="SharedArrayBuffer"in globalThis,a=!1===globalThis.crossOriginIsolated;return e&&!a})),r$r.add("esri-atomics","Atomics"in globalThis),r$r.add("esri-workers","Worker"in globalThis),r$r.add("web-feat:cache","caches"in globalThis),r$r.add("esri-workers-arraybuffer-transfer",!r$r("safari")||Number(r$r("safari"))>=12),r$r.add("featurelayer-simplify-thresholds",[.5,.5,.5,.5]),r$r.add("featurelayer-simplify-payload-size-factors",[1,1,4]),r$r.add("featurelayer-snapshot-enabled",!0),r$r.add("featurelayer-snapshot-point-min-threshold",8e4),r$r.add("featurelayer-snapshot-point-max-threshold",4e5),r$r.add("featurelayer-snapshot-point-coverage",.1),r$r.add("featurelayer-advanced-symbols",!1),r$r.add("featurelayer-pbf",!0),r$r.add("featurelayer-pbf-statistics",!1),r$r.add("feature-layers-workers",!0),r$r.add("feature-polyline-generalization-factor",1),r$r.add("mapview-transitions-duration",200),r$r.add("mapview-srswitch-adjust-rotation-scale-threshold",24e6),r$r.add("mapserver-pbf-enabled",!1),r$r("host-webworker")||r$r("host-browser")&&(r$r.add("esri-csp-restrictions",(()=>{try{new Function;}catch{return !0}return !1})),r$r.add("esri-image-decode",(()=>{if("decode"in new Image){const e=new Image;return e.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',void e.decode().then((()=>{r$r.add("esri-image-decode",!0,!0,!0);})).catch((()=>{r$r.add("esri-image-decode",!1,!0,!0);}))}return !1})),r$r.add("esri-url-encodes-apostrophe",(()=>{const e=window.document.createElement("a");return e.href="?'",e.href.includes("?%27")})));})();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t$p(r,n,t){if(r.slice)return r.slice(n,t);void 0===n?n=0:(n<0&&(n+=r.length),n=Math.min(r.length,Math.max(0,n))),void 0===t?t=r.length:(t<0&&(t+=r.length),t=Math.min(r.length,Math.max(0,t)));const o=Math.max(0,t-n),c=new(r.constructor)(o);for(let e=0;e<o;e++)c[e]=r[n+e];return c}function c$w(r){return r instanceof Int8Array||r&&r.constructor&&"Int8Array"===r.constructor.name}function e$x(r){return r instanceof Uint8Array||r&&r.constructor&&"Uint8Array"===r.constructor.name}function a$p(r){return r instanceof Uint8ClampedArray||r&&r.constructor&&"Uint8ClampedArray"===r.constructor.name}function u$u(r){return r instanceof Int16Array||r&&r.constructor&&"Int16Array"===r.constructor.name}function i$v(r){return r instanceof Uint16Array||r&&r.constructor&&"Uint16Array"===r.constructor.name}function f$s(r){return r instanceof Int32Array||r&&r.constructor&&"Int32Array"===r.constructor.name}function s$B(r){return r instanceof Uint32Array||r&&r.constructor&&"Uint32Array"===r.constructor.name}function y$j(r){return r instanceof Float32Array||r&&r.constructor&&"Float32Array"===r.constructor.name}function A$9(r){return r instanceof Float64Array||r&&r.constructor&&"Float64Array"===r.constructor.name}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function y$i(t,n){let e;if(n)for(e in t)t.hasOwnProperty(e)&&(void 0===t[e]?delete t[e]:t[e]instanceof Object&&y$i(t[e],!0));else for(e in t)t.hasOwnProperty(e)&&void 0===t[e]&&delete t[e];return t}function m$k(t){if(!t||"object"!=typeof t||"function"==typeof t)return t;const n=h$m(t);if(r$s(n))return n;if(b$a(t))return t.clone();if(j$d(t))return t.map(m$k);if(O$7(t))return t.clone();const r={};for(const e of Object.getOwnPropertyNames(t))r[e]=m$k(t[e]);return r}function b$a(t){return "function"==typeof t.clone}function j$d(t){return "function"==typeof t.map&&"function"==typeof t.forEach}function O$7(t){return "function"==typeof t.notifyChange&&"function"==typeof t.watch}function h$m(t){if(c$w(t)||e$x(t)||a$p(t)||u$u(t)||i$v(t)||f$s(t)||s$B(t)||y$j(t)||A$9(t))return t$p(t);if(t instanceof Date)return new Date(t.getTime());if(t instanceof ArrayBuffer){return t.slice(0,t.byteLength)}if(t instanceof Map){const n=new Map;return t.forEach(((t,e)=>{n.set(e,m$k(t));})),n}if(t instanceof Set){const n=new Set;return t.forEach((t=>{n.add(m$k(t));})),n}return null}function w$b(t,n){return t===n||"number"==typeof t&&isNaN(t)&&"number"==typeof n&&isNaN(n)||"function"==typeof(t||{}).getTime&&"function"==typeof(n||{}).getTime&&t.getTime()===n.getTime()||!1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n$l(r,n,t=!1){return e$w(r,n,t)}function t$o(r,n){if(null!=n)return n[r]||i$u(r.split("."),!1,n)}function o$w(r,n,t){const o=r.split("."),e=o.pop(),u=i$u(o,!0,t);u&&e&&(u[e]=n);}function i$u(r,n,t){let o=t;for(const i of r){if(null==o)return;if(!(i in o)){if(!n)return;o[i]={};}o=o[i];}return o}function e$w(n,t,o){return t?Object.keys(t).reduce((function(n,i){let u=n[i],c=t[i];return u===c?n:void 0===u?(n[i]=m$k(c),n):(Array.isArray(c)||Array.isArray(n)?(u=u?Array.isArray(u)?n[i]=u.concat():n[i]=[u]:n[i]=[],c&&(Array.isArray(c)||(c=[c]),o?c.forEach((r=>{-1===u.indexOf(r)&&u.push(r);})):n[i]=c.concat())):c&&"object"==typeof c?n[i]=e$w(u,c,o):n.hasOwnProperty(i)&&!t.hasOwnProperty(i)||(n[i]=c),n)}),n||{}):n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s$A{constructor(s,o={ignoreUnknown:!1,useNumericKeys:!1}){this.jsonToAPI=s,this.options=o,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this._invertMap(s),this.apiValues=this._getKeysSorted(this.apiToJSON),this.jsonValues=this._getKeysSorted(this.jsonToAPI),this.read=t=>this.fromJSON(t),this.write=(s,o,i)=>{const n=this.toJSON(s);void 0!==n&&o$w(i,n,o);},this.write.isJSONMapWriter=!0;}toJSON(t){if(this.apiToJSON.hasOwnProperty(t)){const s=this.apiToJSON[t];return this.options.useNumericKeys?+s:s}return this.options.ignoreUnknown?void 0:t}fromJSON(t){return this.jsonToAPI.hasOwnProperty(t)?this.jsonToAPI[t]:this.options.ignoreUnknown?void 0:t}_invertMap(t){const s={};for(const o in t)s[t[o]]=o;return s}_getKeysSorted(t){const s=[];for(const o in t)s.push(o);return s.sort(),s}}function o$v(){return function(t,o){return new s$A(t,{ignoreUnknown:!0,...o})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var n$k,l$l,o$u;let e$v,i$t;const t$n=null!=(n$k=null==(l$l=globalThis.esriConfig)?void 0:l$l.locale)?n$k:null==(o$u=globalThis.dojoConfig)?void 0:o$u.locale;function u$t(){var n,l;return null!=(n=null!=t$n?t$n:null==(l=globalThis.navigator)?void 0:l.language)?n:"en"}function a$o(){return void 0===i$t&&(i$t=u$t()),i$t}const d$i=[];function f$r(n){return d$i.push(n),{remove(){d$i.splice(d$i.indexOf(n),1);}}}const g$f=[];function h$l(n){return g$f.push(n),{remove(){d$i.splice(g$f.indexOf(n),1);}}}function b$9(){var n;const l=null!=(n=e$v)?n:u$t();i$t!==l&&(i$t=l,[...g$f].forEach((n=>{n.call(null,l);})),[...d$i].forEach((n=>{n.call(null,l);})));}null==globalThis.addEventListener||globalThis.addEventListener("languagechange",b$9);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r$q={year:"numeric",month:"numeric",day:"numeric"},n$j={year:"numeric",month:"long",day:"numeric"},a$n={year:"numeric",month:"short",day:"numeric"},h$k={year:"numeric",month:"long",weekday:"long",day:"numeric"},m$j={hour:"numeric",minute:"numeric"},i$s={...m$j,second:"numeric"},s$z={"short-date":r$q,"short-date-short-time":{...r$q,...m$j},"short-date-short-time-24":{...r$q,...m$j,hour12:!1},"short-date-long-time":{...r$q,...i$s},"short-date-long-time-24":{...r$q,...i$s,hour12:!1},"short-date-le":r$q,"short-date-le-short-time":{...r$q,...m$j},"short-date-le-short-time-24":{...r$q,...m$j,hour12:!1},"short-date-le-long-time":{...r$q,...i$s},"short-date-le-long-time-24":{...r$q,...i$s,hour12:!1},"long-month-day-year":n$j,"long-month-day-year-short-time":{...n$j,...m$j},"long-month-day-year-short-time-24":{...n$j,...m$j,hour12:!1},"long-month-day-year-long-time":{...n$j,...i$s},"long-month-day-year-long-time-24":{...n$j,...i$s,hour12:!1},"day-short-month-year":a$n,"day-short-month-year-short-time":{...a$n,...m$j},"day-short-month-year-short-time-24":{...a$n,...m$j,hour12:!1},"day-short-month-year-long-time":{...a$n,...i$s},"day-short-month-year-long-time-24":{...a$n,...i$s,hour12:!1},"long-date":h$k,"long-date-short-time":{...h$k,...m$j},"long-date-short-time-24":{...h$k,...m$j,hour12:!1},"long-date-long-time":{...h$k,...i$s},"long-date-long-time-24":{...h$k,...i$s,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":m$j,"long-time":i$s},l$k=o$v()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});l$k.toJSON.bind(l$k);l$k.fromJSON.bind(l$k);const u$s={ar:"ar-u-nu-latn-ca-gregory"};let c$v=new WeakMap,D$a=s$z["short-date-short-time"];function T$5(t){const o=t||D$a;if(!c$v.has(o)){const t=a$o(),r=u$s[a$o()]||t;c$v.set(o,new Intl.DateTimeFormat(r,o));}return c$v.get(o)}function L$5(t,o){return T$5(o).format(t)}h$l((()=>{c$v=new WeakMap,D$a=s$z["short-date-short-time"];}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a$m={ar:"ar-u-nu-latn"};let e$u=new WeakMap,o$t={};function i$r(n){const i=n||o$t;if(!e$u.has(i)){const t=a$o(),o=a$m[a$o()]||t;e$u.set(i,new Intl.NumberFormat(o,n));}return q$8(e$u.get(i))}function m$i(t,n){return i$r(n).format(t)}h$l((()=>{e$u=new WeakMap,o$t={};}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var r$p;const s$y={apiKey:void 0,applicationUrl:null==(r$p=globalThis.location)?void 0:r$p.href,assetsPath:"",fontsUrl:"https://static.arcgis.com/fonts",geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",portalUrl:"https://www.arcgis.com",routeServiceUrl:"https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{httpsDomains:["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"],interceptors:[],maxUrlLength:2e3,proxyRules:[],proxyUrl:null,timeout:6e4,trustedServers:[],useIdentity:!0},log:{interceptors:[],level:null}};if(globalThis.esriConfig&&(n$l(s$y,globalThis.esriConfig,!0),delete s$y.has),!s$y.assetsPath){const e="4.23.7";s$y.assetsPath=`https://js.arcgis.com/${e.slice(0,-2)}/@arcgis/core/assets`;}s$y.baseUrl&&console.warn("[esri.config]","baseUrl has been replaced by assetsPath"),Object.defineProperty(s$y,"baseUrl",{set(){console.warn("[esri.config]","baseUrl has been replaced by assetsPath");}}),s$y.request.corsEnabledServers=[],s$y.request.corsEnabledServers.push=function(){return console.warn("[esri.config]","request.corsEnabledServers is not supported and will be removed in a future release. See http://esriurl.com/cors8664"),0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const e$t=/\{([^\}]+)\}/g;function n$i(t){return null==t?"":t}function r$o(r,o){return r.replace(e$t,"object"==typeof o?(e,r)=>n$i(t$o(r,o)):(t,e)=>n$i(o(e)))}function c$u(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o$s={info:0,warn:1,error:2,none:3};class s$x{constructor(e){this.level=null,this._module="",this._parent=null,this.writer=null,this._loggedMessages={error:new Map,warn:new Map,info:new Map},null!=e.level&&(this.level=e.level),null!=e.writer&&(this.writer=e.writer),this._module=e.module,s$x._loggers[this.module]=this;const t=this.module.lastIndexOf(".");-1!==t&&(this._parent=s$x.getLogger(this.module.slice(0,t)));}get module(){return this._module}get parent(){return this._parent}error(...e){this._log("error","always",...e);}warn(...e){this._log("warn","always",...e);}info(...e){this._log("info","always",...e);}errorOnce(...e){this._log("error","once",...e);}warnOnce(...e){this._log("warn","once",...e);}infoOnce(...e){this._log("info","once",...e);}errorOncePerTick(...e){this._log("error","oncePerTick",...e);}warnOncePerTick(...e){this._log("warn","oncePerTick",...e);}infoOncePerTick(...e){this._log("info","oncePerTick",...e);}get test(){const e=this;return {loggedMessages:e._loggedMessages,clearLoggedWarnings:()=>e._loggedMessages.warn.clear()}}static get testSingleton(){return {resetLoggers(e={}){const t=s$x._loggers;return s$x._loggers=e,t},set throttlingDisabled(e){s$x._throttlingDisabled=e;}}}static getLogger(e){let t=s$x._loggers[e];return t||(t=new s$x({module:e})),t}_log(t,r,...o){if(!this._matchLevel(t))return;if("always"!==r&&!s$x._throttlingDisabled){const e=this._argsToKey(o),n=this._loggedMessages[t].get(e);if("once"===r&&null!=n||"oncePerTick"===r&&n&&n>=s$x._tickCounter)return;this._loggedMessages[t].set(e,s$x._tickCounter),s$x._scheduleTickCounterIncrement();}for(const s of s$y.log.interceptors)if(s(t,this.module,...o))return;this._inheritedWriter()(t,this.module,...o);}_parentWithMember(e,r){let o=this;for(;r$s(o);){const r=o[e];if(r$s(r))return r;o=o.parent;}return r}_inheritedWriter(){return this._parentWithMember("writer",this._consoleWriter)}_consoleWriter(e,t,...r){console[e](`[${t}]`,...r);}_matchLevel(t){const r=s$y.log.level?s$y.log.level:"warn";return o$s[this._parentWithMember("level",r)]<=o$s[t]}_argsToKey(...e){const t=(e,t)=>"object"!=typeof t||Array.isArray(t)?t:"[Object]";return c$u(JSON.stringify(e,t))}static _scheduleTickCounterIncrement(){s$x._tickCounterScheduled||(s$x._tickCounterScheduled=!0,Promise.resolve().then((()=>{s$x._tickCounter++,s$x._tickCounterScheduled=!1;})));}}s$x._loggers={},s$x._tickCounter=0,s$x._tickCounterScheduled=!1,s$x._throttlingDisabled=!1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i$q=s$x.getLogger("esri.intl");function s$w(t,r,n={}){const{format:o={}}=n;return r$o(t,(t=>u$r(t,r,o)))}function u$r(t,e,n){let o,i;const s=t.indexOf(":");if(-1===s?o=t.trim():(o=t.slice(0,s).trim(),i=t.slice(s+1).trim()),!o)return "";const u=t$o(o,e);if(null==u)return "";const m=n[i]||n[o];return m?c$t(u,m):i?a$l(u,i):f$q(u)}function c$t(t,r){switch(r.type){case"date":return L$5(t,r.intlOptions);case"number":return m$i(t,r.intlOptions);default:return i$q.warn("missing format descriptor for key {key}"),f$q(t)}}function a$l(t,r){switch(r.toLowerCase()){case"dateformat":return L$5(t);case"numberformat":return m$i(t);default:return i$q.warn(`inline format is unsupported since 4.12: ${r}`),/^(dateformat|datestring)/i.test(r)?L$5(t):/^numberformat/i.test(r)?m$i(t):f$q(t)}}function f$q(t){switch(typeof t){case"string":return t;case"number":return m$i(t);case"boolean":return ""+t;default:return t instanceof Date?L$5(t):""}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e$s(e,s){return e.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(function(e,n){if(""===n)return "$";const i=t$o(n,s),r=null==i?"":i;if(void 0===r)throw new Error(`could not find key "${n}" in template`);return r.toString()}))}class s$v{constructor(t,n,i){this.name=t,this.details=i,this.message=void 0,this instanceof s$v&&(this.message=n&&e$s(n,i)||"");}toString(){return "["+this.name+"]: "+this.message}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s$u extends s$v{constructor(e,t,r){if(super(e,t,r),!(this instanceof s$u))return new s$u(e,t,r)}toJSON(){if(null!=this.details)try{return {name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,((t,r)=>{if(r&&"object"==typeof r&&"function"==typeof r.toJSON)return r;try{return m$k(r)}catch(s){return "[object]"}})))}}catch(r){throw s$x.getLogger("esri.core.Error").error(r),r}return {name:this.name,message:this.message,details:this.details}}static fromJSON(e){return new s$u(e.name,e.message,e.details)}}s$u.prototype.type="error";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e$r(e){return {setTimeout:(t,o)=>{const r=e.setTimeout(t,o);return {remove:()=>e.clearTimeout(r)}}}}const t$m=e$r(globalThis);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e$q(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function r$n(r,t,n){if(!e$q(r))throw new TypeError("target is not a Evented or EventTarget object");if("on"in r)return r.on(t,n);if(Array.isArray(t)){const e=t.slice();for(const t of e)r.addEventListener(t,n);return {remove(){for(const t of e)r.removeEventListener(t,n);}}}return r.addEventListener(t,n),{remove(){r.removeEventListener(t,n);}}}function t$l(t,n,o){if(!e$q(t))throw new TypeError("target is not a Evented or EventTarget object");if("once"in t)return t.once(n,o);const i=r$n(t,n,(e=>{i.remove(),o.call(t,e);}));return {remove(){i.remove();}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function f$p(t){return new Promise(((e,n)=>{try{t(e,n);}catch(r){Promise.resolve().then((()=>n(r)));}}))}function m$h(t="Aborted"){return new s$u("AbortError",t)}function a$k(t,e="Aborted"){if(p$i(t))throw m$h(e)}function h$j(t){return r$s(t)?"aborted"in t?t:t.signal:t}function p$i(t){const e=h$j(t);return r$s(e)&&e.aborted}function w$a(t){if(!g$e(t))throw t}function v$c(t,e){const r=h$j(t);if(!t$q(r)){if(!r.aborted)return t$l(r,"abort",(()=>e()));e();}}function g$e(t){return t&&"AbortError"===t.name}function E$8(){let t=null;const e=new Promise(((e,n)=>{t={promise:void 0,resolve:e,reject:n};}));return t.promise=e,t}function y$h(t){if(!t)return;if("function"!=typeof t.forEach){const e=Object.keys(t);return y$h(e.map((e=>t[e]))).then((t=>{const n={};return e.forEach(((e,r)=>n[e]=t[r])),n}))}const e=t;return f$p((t=>{const n=[];let r=e.length;0===r&&t(n),e.forEach((e=>{const o={promise:e||Promise.resolve(e)};n.push(o),o.promise.then((t=>{o.value=t;})).catch((t=>{o.error=t;})).then((()=>{--r,0===r&&t(n);}));}));}))}function $$5(t,e,n){const r=new AbortController;return v$c(n,(()=>r.abort())),new Promise(((n,o)=>{let i=setTimeout((()=>{i=0,n(e);}),t);v$c(r,(()=>{i&&(clearTimeout(i),o(m$h()));}));}))}function D$9(t){return t&&"function"==typeof t.then}function O$6(t){return D$9(t)?t:Promise.resolve(t)}function U$4(t,e=-1){let n,r,o,i,c=null;const s=(...l)=>{if(n){r=l,i&&i.reject(m$h()),i=E$8();const t=q$8(i.promise);if(c){const t=c;c=null,t.abort();}return t}if(o=i||E$8(),i=null,e>0){const r=new AbortController;n=O$6(t(...l,r.signal));const o=n;$$5(e).then((()=>{n===o&&(i?r.abort():c=r);}));}else n=1,n=O$6(t(...l));const f=()=>{const t=r;r=o=n=c=null,null!=t&&s(...t);},a=n,h=o;return a.then(f,f),a.then(h.resolve,h.reject),q$8(h.promise)};return s}function q$7(){let e,n;const r=new Promise(((t,r)=>{e=t,n=r;})),o=t=>{e(t);};return o.resolve=t=>e(t),o.reject=t=>n(t),o.timeout=(e,n)=>t$m.setTimeout((()=>o.reject(n)),e),o.promise=r,o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const s$t=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,o$r={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function i$p(t){var e;return null!=(e=o$r[t])&&e}const a$j=[],c$s=new Map;function d$h(t){for(const e of c$s.keys())m$g(t.pattern,e)&&c$s.delete(e);}function l$j(t){return a$j.includes(t)||(d$h(t),a$j.unshift(t)),{remove(){const e=a$j.indexOf(t);e>-1&&(a$j.splice(e,1),d$h(t));}}}async function u$q(t){const e=a$o();c$s.has(t)||c$s.set(t,f$o(t,e));const n=c$s.get(t);return await _$b.add(n),n}function h$i(t){if(!s$t.test(t))return null;const[,e,n]=s$t.exec(t),r=e+(n?"-"+n.toUpperCase():"");return i$p(r)?r:i$p(e)?e:null}async function f$o(e,n){const r=[];for(const t of a$j)if(m$g(t.pattern,e))try{return await t.fetchMessageBundle(e,n)}catch(s){r.push(s);}if(r.length)throw new s$u("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:r});throw new s$u("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}function m$g(t,e){return "string"==typeof t?e.startsWith(t):t.test(e)}h$l((()=>{c$s.clear();}));const _$b=new class{constructor(){this._numLoading=0;}async waitForAll(){this._dfd&&await this._dfd.promise;}add(t){return this._increase(),t.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=E$8());}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const s$s=s$x.getLogger("esri.core.urlUtils"),u$p=s$y.request,c$r="esri/config: esriConfig.request.proxyUrl is not set.",l$i=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,f$n=/^\s*http:/i,a$i=/^\s*https:/i,h$h=/^\s*file:/i,p$h=/:\d+$/,d$g=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,g$d=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),m$f=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");class y$g{constructor(t=""){this.uri=t,this.scheme=null,this.authority=null,this.path=null,this.query=null,this.fragment=null,this.user=null,this.password=null,this.host=null,this.port=null;let n=q$8(this.uri.match(g$d));this.scheme=n[2]||(n[1]?"":null),this.authority=n[4]||(n[3]?"":null),this.path=n[5],this.query=n[7]||(n[6]?"":null),this.fragment=n[9]||(n[8]?"":null),null!=this.authority&&(n=q$8(this.authority.match(m$f)),this.user=n[3]||null,this.password=n[4]||null,this.host=n[6]||n[7],this.port=n[9]||null);}toString(){return this.uri}}const $$4={},x$9=new y$g(s$y.applicationUrl);let w$9=x$9;const O$5=q$6();let U$3=O$5;const b$8=()=>w$9;function q$6(){const t=q$8(w$9.path),n=t.substring(0,t.lastIndexOf(t.split("/")[t.split("/").length-1]));return `${`${w$9.scheme}://${w$9.host}${null!=w$9.port?`:${w$9.port}`:""}`}${n}`}function j$c(t){const n={path:null,query:null},e=new y$g(t),r=t.indexOf("?");return null===e.query?n.path=t:(n.path=t.substring(0,r),n.query=v$b(e.query)),e.fragment&&(n.hash=e.fragment,null===e.query&&(n.path=n.path.substring(0,n.path.length-(e.fragment.length+1)))),n}function v$b(t){const n=t.split("&"),e={};for(const r of n){if(!r)continue;const t=r.indexOf("=");let n,o;t<0?(n=decodeURIComponent(r),o=""):(n=decodeURIComponent(r.slice(0,t)),o=decodeURIComponent(r.slice(t+1)));let i=e[n];"string"==typeof i&&(i=e[n]=[i]),Array.isArray(i)?i.push(o):e[n]=o;}return e}function L$4(t){return t&&"object"==typeof t&&"toJSON"in t&&"function"==typeof t.toJSON}function I$7(t,n){return t?n&&"function"==typeof n?Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(n(e,t[e])))).join("&"):Object.keys(t).map((e=>{const r=t[e];if(null==r)return "";const o=encodeURIComponent(e)+"=",i=n&&n[e];return i?o+encodeURIComponent(i(r)):Array.isArray(r)?r.map((t=>L$4(t)?o+encodeURIComponent(JSON.stringify(t)):o+encodeURIComponent(t))).join("&"):L$4(r)?o+encodeURIComponent(JSON.stringify(r)):o+encodeURIComponent(r)})).filter((t=>t)).join("&"):""}function A$8(t=!1){let e,r=u$p.proxyUrl;if("string"==typeof t){e=ht(t);const n=J$3(t);n&&(r=n.proxyUrl);}else e=!!t;if(!r)throw s$s.warn(c$r),new s$u("urlutils:proxy-not-set",c$r);e&&$t()&&(r=mt(r));return j$c(r)}const B$5={path:"",query:""};function P$5(t){const n=t.indexOf("?");return -1!==n?(B$5.path=t.slice(0,n),B$5.query=t.slice(n+1)):(B$5.path=t,B$5.query=null),B$5}function k$9(t){return t=(t=xt(t=bt(t=P$5(t).path),!0)).toLowerCase()}function E$7(t){const n={proxyUrl:t.proxyUrl,urlPrefix:k$9(t.urlPrefix)},e=u$p.proxyRules,r=n.urlPrefix;let o=e.length;for(let i=0;i<e.length;i++){const t=e[i].urlPrefix;if(0===r.indexOf(t)){if(r.length===t.length)return -1;o=i;break}0===t.indexOf(r)&&(o=i+1);}return e.splice(o,0,n),o}function J$3(t){const n=u$p.proxyRules,e=k$9(t);for(let r=0;r<n.length;r++)if(0===e.indexOf(n[r].urlPrefix))return n[r]}function W$2(t){const n=n=>null==n||n instanceof RegExp&&n.test(t)||"string"==typeof n&&t.startsWith(n),e=u$p.interceptors;if(e)for(const r of e)if(Array.isArray(r.urls)){if(r.urls.some(n))return r}else if(n(r.urls))return r;return null}function z$6(t,n,e=!1){const r=Lt(t),o=Lt(n);return !(!e&&r.scheme!==o.scheme)&&(null!=r.host&&null!=o.host&&(r.host.toLowerCase()===o.host.toLowerCase()&&r.port===o.port))}function D$8(t){if("string"==typeof t){if(!K$2(t))return !0;t=Lt(t);}if(z$6(t,w$9))return !0;const n=u$p.trustedServers||[];for(let e=0;e<n.length;e++){const r=M$b(n[e]);for(let n=0;n<r.length;n++)if(z$6(t,r[n]))return !0}return !1}function M$b(t){return $$4[t]||(at(t)||ft(t)?$$4[t]=[new y$g(Q$4(t))]:$$4[t]=[new y$g(`http://${t}`),new y$g(`https://${t}`)]),$$4[t]}function Q$4(t,n=U$3,e){return ft(t)?e&&e.preserveProtocolRelative?t:"http"===w$9.scheme&&w$9.authority===H$5(t).slice(2)?`http:${t}`:`https:${t}`:at(t)?t:q$8(G$7("/"===t[0]?wt(n):n,t))}function F$5(t){return t=jt(t=Rt(t=qt(t=Q$4(t=t.trim()))))}function G$7(...t){const n=t.filter(r$s);if(!n||!n.length)return;const e=[];if(K$2(n[0])){const t=n[0],r=t.indexOf("//");-1!==r&&(e.push(t.slice(0,r+1)),dt(n[0])&&(e[0]+="/"),n[0]=t.slice(r+2));}else "/"===n[0][0]&&e.push("");const r=n.reduce(((t,n)=>n?t.concat(n.split("/")):t),[]);for(let o=0;o<r.length;o++){const t=r[o];".."===t&&e.length>0&&".."!==e[e.length-1]?e.pop():(!t&&o===r.length-1||t&&("."!==t||0===e.length))&&e.push(t);}return e.join("/")}function H$5(t,n=!1){if(V$2(t)||X$4(t))return null;let e=t.indexOf("://");if(-1===e&&ft(t))e=2;else {if(-1===e)return null;e+=3;}const r=t.indexOf("/",e);return -1!==r&&(t=t.slice(0,r)),n&&(t=xt(t,!0)),t}function K$2(t){return ft(t)||at(t)}function V$2(t){return null!=t&&"blob:"===t.slice(0,5)}function X$4(t){return "data:"===t.slice(0,5)}function Z$3(t){return btoa(String.fromCharCode.apply(null,t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function ft(t){return null!=t&&void 0!==t&&"/"===t[0]&&"/"===t[1]}function at(t){return l$i.test(t)}function ht(t){return a$i.test(t)||"https"===w$9.scheme&&ft(t)}function pt(t){return f$n.test(t)||"http"===w$9.scheme&&ft(t)}function dt(t){return h$h.test(t)}function mt(t){return ft(t)?`https:${t}`:t.replace(f$n,"https:")}function yt(){return "http"===w$9.scheme}function $t(){return "https"===w$9.scheme}function xt(t,n=!1){return ft(t)?t.slice(2):(t=t.replace(l$i,""),n&&t.length>1&&"/"===t[0]&&"/"===t[1]&&(t=t.slice(2)),t)}function wt(t){const n=t.indexOf("//"),e=t.indexOf("/",n+2);return -1===e?t:t.slice(0,e)}function bt(t){return t&&"/"===t[t.length-1]?t:`${t}/`}function qt(t){if(/^https?:\/\//i.test(t)){const n=P$5(t);t=(t=n.path.replace(/\/{2,}/g,"/")).replace("/","//"),n.query&&(t+=`?${n.query}`);}return t}function Rt(t){return t.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}function jt(t){const n=u$p.httpsDomains;if(!pt(t))return t;const e=t.indexOf("/",7);let r;if(r=-1===e?t:t.slice(0,e),r=r.toLowerCase().slice(7),p$h.test(r)){if(!r.endsWith(":80"))return t;r=r.slice(0,-3),t=t.replace(":80","");}return yt()&&r===w$9.authority&&!d$g.test(t)||($t()&&r===w$9.authority||n&&n.some((t=>r===t||r.endsWith(`.${t}`)))||$t()&&!J$3(t))&&(t=mt(t)),t}function Lt(t){return "string"==typeof t?new y$g(Q$4(t)):(t.scheme||(t.scheme=w$9.scheme),t)}function St(t,n,e){const r=j$c(t),o=r.query||{};return o[n]=String(e),`${r.path}?${I$7(o)}`}function Bt(t,n){const e=j$c(t),r=e.query||{};for(const i in n)r[i]=n[i];const o=I$7(r);return o?`${e.path}?${o}`:e.path}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let n$h;function o$q(e){n$h=e;}r$r("host-webworker")||(r$r("edge")||r$r("trident"))&&console.warn("Deprecated browser - see http://esriurl.com/oldbrowser");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t$k=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function r$m(c){const r=H$5(c,!0);return r&&r.endsWith(".arcgis.com")&&!t$k.includes(r)&&!c.endsWith("/sharing/rest/generateToken")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t$j(t,i,s=!1,c){return new Promise(((d,a)=>{if(p$i(c))return void a(n$g());let m=()=>{v(),a(new Error(`Unable to load ${i}`));},l=()=>{const e=t;v(),d(e);},u=()=>{if(!t)return;const e=t;v(),e.src="",a(n$g());};const v=()=>{r$r("esri-image-decode")||(t.removeEventListener("error",m),t.removeEventListener("load",l)),m=null,l=null,t=null,r$s(c)&&c.removeEventListener("abort",u),u=null,s&&URL.revokeObjectURL(i);};r$s(c)&&c.addEventListener("abort",u),r$r("esri-image-decode")?t.decode().then(l,m):(t.addEventListener("error",m),t.addEventListener("load",l));}))}function n$g(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function C$5(e,t){var r;const o=X$4(e),i=V$2(e);i||o||(e=F$5(e));const l={url:e,requestOptions:{...e$z(t)}};let u=W$2(e);if(u){const e=await K$1(u,l);if(null!=e)return {data:e,getHeader:_$a,requestOptions:l.requestOptions,url:l.url};u.after||u.error||(u=null);}if(e=l.url,"image"===(t=l.requestOptions).responseType){if(r$r("host-webworker")||r$r("host-node"))throw R$6("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),l)}else if(o)throw R$6("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),l);if("head"===t.method){if(t.body)throw R$6("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),l);if(o||i)throw R$6("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),l)}if(await H$4(),E$6)return E$6.execute(e,t);const h=new AbortController;v$c(t,(()=>h.abort()));const f={controller:h,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:u,params:l,redoRequest:!1,useIdentity:L$3.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},y=await z$5(f);return null==(r=u)||null==r.after||r.after(y),y}let E$6;const L$3=s$y.request,U$2="FormData"in globalThis,j$b=[499,498,403,401],P$4=["COM_0056","COM_0057","SB_0008"],D$7=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],_$a=()=>null,F$4=Symbol();function I$6(e){const t=H$5(e);t&&!C$5._corsServers.includes(t)&&C$5._corsServers.push(t);}function M$a(e){const t=H$5(e);return !t||t.endsWith(".arcgis.com")||C$5._corsServers.includes(t)||D$8(t)}function R$6(e,t,s,n){let a="Error";const u={url:s.url,requestOptions:s.requestOptions,getHeader:_$a,ssl:!1};if(t instanceof s$u)return t.details?(t.details=m$k(t.details),t.details.url=s.url,t.details.requestOptions=s.requestOptions):t.details=u,t;if(t){const e=n&&(e=>n.headers.get(e)),r=n&&n.status,s=t.message;s&&(a=s),e&&(u.getHeader=e),u.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,u.subCode=t.subcode,u.messageCode=t.messageCode,"string"==typeof t.details?u.messages=[t.details]:u.messages=t.details,u.raw=F$4 in t?t[F$4]:t;}return g$e(t)?m$h():new s$u(e,a,u)}async function H$4(){r$r("host-webworker")?E$6||(E$6=await import('./request.js')):C$5._abortableFetch||(C$5._abortableFetch=globalThis.fetch.bind(globalThis));}async function A$7(){n$h||await import('./IdentityManager.js');}async function B$4(r){const s=r.params.url,o=r.params.requestOptions,n=r.controller.signal,a=o.body;let i=null,l=null,c=null;if(U$2&&"HTMLFormElement"in globalThis&&(a instanceof FormData?i=a:a instanceof HTMLFormElement&&(l=a,i=new FormData(l))),"string"==typeof a&&(c=a),r.fetchOptions={cache:o.cacheBust&&!C$5._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:o.headers||{},method:"head"===o.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:n},(i||c)&&(r.fetchOptions.body=i||c),"anonymous"===o.authMode&&(r.useIdentity=!1),r.hasToken=!!(/token=/i.test(s)||o.query&&o.query.token||i&&i.get&&i.get("token")||l&&l.elements.token),!r.hasToken&&s$y.apiKey&&r$m(s)&&(o.query||(o.query={}),o.query.token=s$y.apiKey,r.hasToken=!0),r.useIdentity&&!r.hasToken&&!r.credentialToken&&!N$5(s)&&!p$i(n)){let e;"immediate"===o.authMode?(await A$7(),e=await n$h.getCredential(s,{signal:n}),r.credential=e):"no-prompt"===o.authMode?(await A$7(),e=await n$h.getCredential(s,{prompt:!1,signal:n}).catch((()=>{})),r.credential=e):n$h&&(e=n$h.findCredential(s)),e&&(r.credentialToken=e.token,r.useSSL=!!e.ssl);}}function N$5(e){return D$7.some((t=>t.test(e)))}async function $$3(e){let r=e.params.url;const o=e.params.requestOptions,n=e.fetchOptions,a=V$2(r)||X$4(r),i=o.responseType||"json",u=a?0:null!=o.timeout?o.timeout:L$3.timeout;let p=!1;if(!a){e.useSSL&&(r=mt(r)),o.cacheBust&&"default"===n.cache&&(r=St(r,"request.preventCache",Date.now()));let a={...o.query};e.credentialToken&&(a.token=e.credentialToken);let i=I$7(a);r$r("esri-url-encodes-apostrophe")&&(i=i.replace(/'/g,"%27"));const l=r.length+1+i.length;let u;p="delete"===o.method||"post"===o.method||"put"===o.method||!!o.body||l>L$3.maxUrlLength;const c=o.useProxy||!!J$3(r);if(c){const e=A$8(r);u=e.path,!p&&u.length+1+l>L$3.maxUrlLength&&(p=!0),e.query&&(a={...e.query,...a});}if("HEAD"===n.method&&(p||c)){if(p){if(l>L$3.maxUrlLength)throw R$6("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw R$6("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(c)throw R$6("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(p?(n.method="delete"===o.method?"DELETE":"put"===o.method?"PUT":"POST",o.body?r=Bt(r,a):(n.body=I$7(a),n.headers["Content-Type"]="application/x-www-form-urlencoded")):r=Bt(r,a),c&&(e.useProxy=!0,r=`${u}?${r}`),a.token&&U$2&&n.body instanceof FormData){const e=n.body;e.set?e.set("token",a.token):e.append("token",a.token);}if(o.hasOwnProperty("withCredentials"))e.withCredentials=o.withCredentials;else if(!z$6(r,b$8()))if(D$8(r))e.withCredentials=!0;else if(n$h){const s=n$h.findServerInfo(r);s&&s.webTierAuth&&(e.withCredentials=!0);}e.withCredentials&&(n.credentials="include");}let m,x,v=0,E=!1;u>0&&(v=setTimeout((()=>{E=!0,e.controller.abort();}),u));try{if("native-request-init"===o.responseType)x=n,x.url=r;else if("image"!==o.responseType||"default"!==n.cache||"GET"!==n.method||p||W$1(o.headers)||!a&&!e.useProxy&&L$3.proxyUrl&&!M$a(r)){if(m=await C$5._abortableFetch(r,n),e.useProxy||I$6(r),"native"===o.responseType)x=m;else if("HEAD"!==n.method)if(m.ok){switch(i){case"array-buffer":x=await m.arrayBuffer();break;case"blob":case"image":x=await m.blob();break;default:x=await m.text();}if(v&&(clearTimeout(v),v=0),"json"===i||"xml"===i||"document"===i)if(x)switch(i){case"json":x=JSON.parse(x);break;case"xml":x=G$6(x,"application/xml");break;case"document":x=G$6(x,"text/html");}else x=null;if(x){if("array-buffer"===i||"blob"===i){const e=m.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&x["blob"===i?"size":"byteLength"]<=750)try{const e=await new Response(x).json();e.error&&(x=e);}catch{}}"image"===i&&x instanceof Blob&&(x=await X$3(URL.createObjectURL(x),e,!0));}}else x=await m.text();}else x=await X$3(r,e);}catch(j){if("AbortError"===j.name){if(E)throw new Error("Timeout exceeded");throw m$h("Request canceled")}if(!(!m&&j instanceof TypeError&&L$3.proxyUrl)||o.body||"delete"===o.method||"head"===o.method||"post"===o.method||"put"===o.method||e.useProxy||M$a(r))throw j;e.redoRequest=!0,E$7({proxyUrl:L$3.proxyUrl,urlPrefix:H$5(r)});}finally{v&&clearTimeout(v);}return [m,x]}async function K$1(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let o,n;try{n=await e.before(t);}catch(s){o=R$6("request:interceptor",s,t);}if((n instanceof Error||n instanceof s$u)&&(o=R$6("request:interceptor",n,t)),o)throw e.error&&e.error(o),o;return n}}function W$1(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return !0;return !1}function G$6(e,t){let r;try{r=(new DOMParser).parseFromString(e,t);}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function z$5(e){var r,s;let o,n;await B$4(e);try{do{[o,n]=await $$3(e);}while(!await J$2(e,o,n))}catch(l){const t=R$6("request:server",l,e.params,o);throw t.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(t),t}const a=e.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(a)&&!e.hasToken&&!e.credentialToken&&null!=(r=n)&&null!=(s=r.user)&&s.username&&!D$8(a)){const e=H$5(a,!0);e&&L$3.trustedServers.push(e);}const i=e.credential;if(i&&n$h){const e=n$h.findServerInfo(i.server);let r=e&&e.owningSystemUrl;if(r){r=r.replace(/\/?$/,"/sharing");const e=n$h.findCredential(r,i.userId);e&&-1===n$h._getIdenticalSvcIdx(r,e)&&e.resources.unshift(r);}}return {data:n,getHeader:o?e=>o.headers.get(e):_$a,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}async function J$2(e,r,s){if(e.redoRequest)return e.redoRequest=!1,!1;const o=e.params.requestOptions;if(!r||"native"===o.responseType||"native-request-init"===o.responseType)return !0;let n,a,i,l;if(!r.ok)throw n=new Error(`Unable to load ${r.url} status: ${r.status}`),n[F$4]=s,n;null!=s&&s.error&&(n=s.error),n&&(a=Number(n.code),i=n.hasOwnProperty("subcode")?Number(n.subcode):null,l=n.messageCode,l=l&&l.toUpperCase());const u=o.authMode;if(403===a&&(4===i||n.message&&n.message.toLowerCase().indexOf("ssl")>-1&&-1===n.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===a)&&-1!==j$b.indexOf(a)&&!N$5(e.params.url)&&(403!==a||-1===P$4.indexOf(l)&&(null==i||2===i&&e.credentialToken))){await A$7();try{const r=await n$h.getCredential(e.params.url,{error:R$6("request:server",n,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=r,e.credentialToken=r.token,e.useSSL=e.useSSL||r.ssl,!1}catch(c){if("no-prompt"===u)return e.credential=null,e.credentialToken=null,!1;n=c;}}if(n)throw n;return !0}function X$3(e,t,r=!1){const s=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.src=e,t$j(o,e,r,s)}C$5._abortableFetch=null,C$5._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function o$p(e,n,o,i){const a=n.exec(o);if(!a)throw new s$u("esri-intl:invalid-bundle",`Bundle id "${o}" is not compatible with the pattern "${n}"`);const c=a[1]?`${a[1]}/`:"",l=a[2],w=h$i(i),h=`${c}${l}.json`,u=w?`${c}${l}_${w}.json`:h;let f;try{f=await s$r(e(u));}catch(d){if(u===h)throw new s$u("intl:unknown-bundle",`Bundle "${o}" cannot be loaded`,{error:d});try{f=await s$r(e(h));}catch(d){throw new s$u("intl:unknown-bundle",`Bundle "${o}" cannot be loaded`,{error:d})}}return f}async function s$r(t){if(r$s(c$q.fetchBundleAsset))return c$q.fetchBundleAsset(t);const r=await C$5(t,{responseType:"text"});return JSON.parse(r.data)}class i$o{constructor({base:e="",pattern:t,location:n=new URL(window.location.href)}){let r;r="string"==typeof n?e=>new URL(e,new URL(n,window.location.href)).href:n instanceof URL?e=>new URL(e,n).href:n,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=r,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`);}fetchMessageBundle(e,t){return o$p(this.getAssetUrl,this.matcher,e,t)}}function a$h(e){return new i$o(e)}const c$q={};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i$n=s$x.getLogger("esri.assets");function a$g(t){if(!s$y.assetsPath)throw i$n.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s$u("assets:path-not-set","config.assetsPath is not set");return G$7(s$y.assetsPath,t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
l$j(a$h({pattern:"esri/",location:a$g}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e$p(e,t,r,o){var c,f=arguments.length,n=f<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(n=(f<3?c(n):f>3?c(t,r,n):c(t,r))||n);return f>3&&n&&Object.defineProperty(t,r,n),n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r$l(n,t,r){const o=n.get(t);if(void 0!==o)return o;const u=r();return n.set(t,u),u}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r$k=s$x.getLogger("esri.core.Accessor");function t$i(e){return null==e?e:new Date(e)}function o$o(e){return null==e?e:!!e}function u$o(e){return null==e?e:e.toString()}function a$f(e){return null==e?e:(e=parseFloat(e),isNaN(e)?0:e)}function s$q(e){return null==e?e:Math.round(parseFloat(e))}function i$m(e){return e&&e.constructor&&void 0!==e.constructor.__accessorMetadata__}function l$h(e,n){return null!=n&&e&&!(n instanceof e)}function c$p(e){return e&&"isCollection"in e}function f$m(e){return e&&e.Type?"function"==typeof e.Type?e.Type:e.Type.base:null}function p$g(e,n){if(!n||!n.constructor||!c$p(n.constructor))return y$f(e,n)?n:new e(n);const r=f$m(e.prototype.itemType),t=f$m(n.constructor.prototype.itemType);return r?t?r===t?n:r.prototype.isPrototypeOf(t.prototype)?new e(n):(y$f(e,n),n):new e(n):n}function y$f(e,n){return !!i$m(n)&&(r$k.error("Accessor#set","Assigning an instance of '"+(n.declaredClass||"unknown")+"' which is not a subclass of '"+g$c(e)+"'"),!0)}function v$a(e,n){return null==n?n:c$p(e)?p$g(e,n):l$h(e,n)?y$f(e,n)?n:new e(n):n}function g$c(e){return e&&e.prototype&&e.prototype.declaredClass||"unknown"}const d$f=new WeakMap;function h$g(e){switch(e){case Number:return a$f;case S$7:return s$q;case Boolean:return o$o;case String:return u$o;case Date:return t$i;default:return r$l(d$f,e,(()=>v$a.bind(null,e)))}}function b$7(e,n){const r=h$g(e);return 1===arguments.length?r:r(n)}function m$e(e,n,r){return 1===arguments.length?m$e.bind(null,e):n?Array.isArray(n)?n.map((n=>e(n,r))):[e(n,r)]:n}function w$8(e,n){return 1===arguments.length?m$e(b$7.bind(null,e)):m$e(b$7.bind(null,e),n)}function A$6(e,n,r){return 0!==n&&Array.isArray(r)?r.map((r=>A$6(e,n-1,r))):e(r)}function $$2(e,n,r){if(2===arguments.length)return $$2.bind(null,e,n);if(!r)return r;let t=n,o=r=A$6(e,n,r);for(;t>0&&Array.isArray(o);)t--,o=o[0];if(void 0!==o)for(let u=0;u<t;u++)r=[r];return r}function j$a(e,n,r){return 2===arguments.length?$$2(b$7.bind(null,e),n):$$2(b$7.bind(null,e),n,r)}function k$8(e){return !!Array.isArray(e)&&!e.some((n=>{const r=typeof n;return !("string"===r||"number"===r||"function"===r&&e.length>1)}))}function M$9(e,n){if(2===arguments.length)return M$9(e).call(null,n);const t=new Set,o=e.filter((e=>"function"!=typeof e)),u=e.filter((e=>"function"==typeof e));for(const r of e)"string"!=typeof r&&"number"!=typeof r||t.add(r);let a=null,s=null;return (e,n)=>{if(null==e)return e;const i=typeof e,c="string"===i||"number"===i;return c&&(t.has(e)||u.some((e=>"string"===i&&e===String||"number"===i&&e===Number)))||"object"===i&&u.some((n=>!l$h(e,n)))?e:(c&&o.length?(a||(a=o.map((e=>"string"==typeof e?`'${e}'`:`${e}`)).join(", ")),r$k.error("Accessor#set",`'${e}' is not a valid value for this property, only the following values are valid: ${a}`)):"object"==typeof e&&u.length?(s||(s=u.map((e=>g$c(e))).join(", ")),r$k.error("Accessor#set",`'${e}' is not a valid value for this property, value must be one of ${s}`)):r$k.error("Accessor#set",`'${e}' is not a valid value for this property`),n&&(n.valid=!1),null)}}function N$4(e,n){if(2===arguments.length)return N$4(e).call(null,n);const t={},o=[],u=[];for(const r in e.typeMap){const n=e.typeMap[r];t[r]=b$7(n),o.push(g$c(n)),u.push(r);}const a=()=>`'${o.join("', '")}'`,s=()=>`'${u.join("', '")}'`,c="string"==typeof e.key?n=>n[e.key]:e.key;return n=>{if(e.base&&!l$h(e.base,n))return n;if(null==n)return n;const o=c(n)||e.defaultKeyValue,u=t[o];if(!u)return r$k.error("Accessor#set",`Invalid property value, value needs to be one of ${a()}, or a plain object that can autocast (having .type = ${s()})`),null;if(!l$h(e.typeMap[o],n))return n;if("string"==typeof e.key&&!i$m(n)){const r={};for(const t in n)t!==e.key&&(r[t]=n[t]);return u(r)}return u(n)}}class S$7{}function _$9(e){if(!e||!("type"in e))return !1;switch(e.type){case"native":case"array":case"one-of":return !0}return !1}function B$3(e){switch(e.type){case"native":return b$7(e.value);case"array":return m$e(B$3(e.value));case"one-of":return C$4(e);default:return null}}function C$4(e){let n=null;return (t,o)=>F$3(t,e)?t:(null==n&&(n=D$6(e)),r$k.error("Accessor#set",`Invalid property value, value needs to be of type ${n}`),o&&(o.valid=!1),null)}function D$6(e){switch(e.type){case"native":switch(e.value){case Number:return "number";case String:return "string";case Boolean:return "boolean";case S$7:return "integer";case Date:return "date";default:return g$c(e.value)}case"array":return `array of ${D$6(e.value)}`;case"one-of":{const n=e.values.map((e=>D$6(e)));return `one of ${n.slice(0,n.length-1)} or ${n[n.length-1]}`}}return "unknown"}function F$3(e,n){if(null==e)return !0;switch(n.type){case"native":switch(n.value){case Number:case S$7:return "number"==typeof e;case Boolean:return "boolean"==typeof e;case String:return "string"==typeof e}return e instanceof n.value;case"array":return !!Array.isArray(e)&&!e.some((e=>!F$3(e,n.value)));case"one-of":return n.values.some((n=>F$3(e,n)))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r$j(r){return n$f((()=>r.forEach((r=>r$s(r)&&r.remove()))))}function n$f(e){return {remove:()=>{e&&(e(),e=void 0);}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e$o(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null}function i$l(r,n){return null!=r&&r.metadatas&&null!=r.metadatas[n]}function u$n(r,n,t){if(t){return a$e(r,n,{policy:t,path:""})}return a$e(r,n,null)}function a$e(r,e,i){return e?Object.keys(e).reduce((function(r,o){let u=null,l="merge";if(i&&(u=i.path?`${i.path}.${o}`:o,l=i.policy(u)),"replace"===l)return r[o]=e[o],r;if(void 0===r[o])return r[o]=m$k(e[o]),r;let f=r[o],s=e[o];if(f===s)return r;if(Array.isArray(s)||Array.isArray(r))f=f?Array.isArray(f)?r[o]=f.concat():r[o]=[f]:r[o]=[],s&&(Array.isArray(s)||(s=[s]),s.forEach((r=>{-1===f.indexOf(r)&&f.push(r);})));else if(s&&"object"==typeof s)if(i){const n=i.path;i.path=q$8(u),r[o]=a$e(f,s,i),i.path=n;}else r[o]=a$e(f,s,null);else r.hasOwnProperty(o)&&!e.hasOwnProperty(o)||(r[o]=s);return r}),r||{}):r}function f$l(r){return Array.isArray(r)?r:r.split(".")}function s$p(r){return r.indexOf(",")>-1?r.split(",").map((r=>r.trim())):[r.trim()]}function c$o(r){if(Array.isArray(r)){const n=[];for(const t of r)n.push(...s$p(t));return n}return s$p(r)}function y$e(n,t,e,i){const o=c$o(t);if(1!==o.length){const t=o.map((r=>i(n,r,e)));return r$j(t)}return i(n,o[0],e)}function h$f(r){let n=!1;return ()=>{n||(n=!0,r());}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e$n(t,e){const i="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(i,10);if(!isNaN(t))return Array.isArray(e)?e[t]:e.getItemAt(t)}const o=e$o(e);return i$l(o,i)?o.get(i):e[i]}function i$k(t,n,r){if(null==t)return t;const o=e$n(n[r],t);return !o&&r<n.length-1?void 0:r===n.length-1?o:i$k(o,n,r+1)}function o$n(n,r,o=0){return "string"==typeof r&&-1===r.indexOf(".")?e$n(r,n):i$k(n,f$l(r),o)}function u$m(t,n){return o$n(t,n)}function s$o(t,n){return void 0!==o$n(n,t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class o$m{constructor(t){this.autoDestroy=!1,this.properties=t;}}function n$e(r){let n=r.constructor.__accessorMetadata__;const c=Object.prototype.hasOwnProperty.call(r.constructor,"__accessorMetadata__");if(n){if(!c){const e=Object.create(n.properties),c=n.autoDestroy;for(const r in e)e[r]=m$k(e[r]);n=new o$m(e),n.autoDestroy=c,Object.defineProperty(r.constructor,"__accessorMetadata__",{value:n,enumerable:!1,configurable:!0,writable:!0});}}else n=new o$m({}),Object.defineProperty(r.constructor,"__accessorMetadata__",{value:n,enumerable:!1,configurable:!0,writable:!0});return q$8(r.constructor.__accessorMetadata__)}function c$n(t){return n$e(t).properties}function s$n(t,e){const r=c$n(t);let o=r[e];return o||(o=r[e]={}),o}function i$j(t,e){return u$n(t,e,_$8)}const p$f=/^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;function _$8(t){return p$f.test(t)?"replace":"merge"}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n$d(o,r,t){if(o&&r)if("object"==typeof r)for(const e of Object.getOwnPropertyNames(r))n$d(o,e,r[e]);else {if(-1!==r.indexOf(".")){const s=r.split("."),i=s.splice(s.length-1,1)[0];return void n$d(u$m(o,s),i,t)}const i=o.__accessor__;null!=i&&s$m(r,i),o[r]=t;}}function s$m(t,e){if(r$r("esri-unknown-property-errors")&&!i$i(t,e))throw new s$u("set:unknown-property",c$m(t,e))}function i$i(o,r){return null!=r.metadatas[o]}function c$m(o,r){return "setting unknown property '"+o+"' on instance of "+r.host.declaredClass}s$x.getLogger("esri.core.accessorSupport.set");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function d$e(n={}){return (o,i)=>{if(o===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${o.name}.${i}. Accessor does not support static properties.`);const s=Object.getOwnPropertyDescriptor(o,i),a=s$n(o,i);s&&(s.get||s.set?(a.get=s.get||a.get,a.set=s.set||a.set):"value"in s&&("value"in n&&s$x.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${i}" on "${o.constructor.name}" already defined in the metadata`,n),a.value=n.value=s.value)),null!=n.readOnly&&(a.readOnly=n.readOnly);const c=n.aliasOf;if(c){const t="string"==typeof c?c:c.source,e="string"==typeof c?null:!0===c.overridable;let r;a.dependsOn=[t],a.get=function(){let e=u$m(this,t);if("function"==typeof e){r||(r=t.split(".").slice(0,-1).join("."));const n=u$m(this,r);n&&(e=e.bind(n));}return e},a.readOnly||(a.set=e?function(t){void 0!==t?this._override(i,t):this._clearOverride(i);}:function(e){n$d(this,t,e);});}const p=n.type,u=n.types;a.cast||(p?a.cast=h$e(p):u&&(Array.isArray(u)?a.cast=m$e(N$4(u[0])):a.cast=N$4(u))),n.range&&(a.cast=v$9(a.cast,n.range)),i$j(a,n);}}function y$d(t,e,r){const n=s$n(t,r);n.json||(n.json={});let o=n.json;return void 0!==e&&(o.origins||(o.origins={}),o.origins[e]||(o.origins[e]={}),o=o.origins[e]),o}function h$e(t){let e=0,r=t;if(_$9(t))return B$3(t);for(;Array.isArray(r)&&1===r.length&&"string"!=typeof r[0]&&"number"!=typeof r[0];)r=r[0],e++;const l=r;if(k$8(l))return 0===e?M$9(l):$$2(M$9(l),e);if(1===e)return w$8(l);if(e>1)return j$a(l,e);const f=t;return f.from?f.from:b$7(f)}function v$9(t,e){return r=>{let n=+t(r);return null!=e.step&&(n=Math.round(n/e.step)*e.step),null!=e.min&&(n=Math.max(e.min,n)),null!=e.max&&(n=Math.min(e.max,n)),n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o$l=Object.prototype.toString;function r$i(n){const o="__accessorMetadata__"in n?b$7(n):n;return function(...t){if(t.push(o),"number"==typeof t[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16");return e$m.apply(this,t)}}function e$m(t,o,r,e){s$n(t,o).cast=e;}function i$h(t){return function(o,r){s$n(o,t).cast=o[r];}}function c$l(...t){if(3!==t.length||"string"!=typeof t[1])return 1===t.length&&"[object Function]"===o$l.call(t[0])?r$i(t[0]):1===t.length&&"string"==typeof t[0]?i$h(t[0]):void 0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function o$k(o,e,t){let a,c;return void 0===e||Array.isArray(e)?(c=o,t=e,a=[void 0]):(c=e,a=Array.isArray(o)?o:[o]),(o,e)=>{const d=o.constructor.prototype;a.forEach((a=>{const s=y$d(o,a,c);s.read&&"object"==typeof s.read||(s.read={}),s.read.reader=d[e],t&&(s.read.source=(s.read.source||[]).concat(t));}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var I$5;!function(I){I[I.INITIALIZING=0]="INITIALIZING",I[I.CONSTRUCTING=1]="CONSTRUCTING",I[I.CONSTRUCTED=2]="CONSTRUCTED";}(I$5||(I$5={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var i$g;!function(i){i[i.Dirty=1]="Dirty",i[i.Overriden=2]="Overriden",i[i.Computing=4]="Computing",i[i.NonNullable=8]="NonNullable",i[i.HasDefaultValue=16]="HasDefaultValue",i[i.DepTrackingInitialized=32]="DepTrackingInitialized",i[i.AutoTracked=64]="AutoTracked",i[i.ExplicitlyTracking=128]="ExplicitlyTracking";}(i$g||(i$g={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let e$l,i$f=[];const c$k=s$x.getLogger("esri.core.Accessor");function l$g(t){void 0!==e$l&&e$l.onObservableAccessed(t);}let a$d=!1,f$k=!1;function g$b(t,n,r){if(a$d)return p$e(t,n,r);d$d(t);const o=n.call(r);return m$d(),o}function u$l(t,n){return g$b(void 0,t,n)}function p$e(t,n,r){const o=a$d;a$d=!0,d$d(t);let e=null;try{e=n.call(r);}catch(i){f$k&&c$k.error(i);}return m$d(),a$d=o,e}function d$d(t){e$l=t,i$f.push(t);}function m$d(){const t=i$f.pop();e$l=i$f.length>0?i$f[i$f.length-1]:void 0,void 0!==t&&t.onTrackingEnd();}function y$c(t,n){if(n.flags&i$g.DepTrackingInitialized)return;const r=f$k;f$k=!1,n.flags&i$g.AutoTracked?p$e(n,n.metadata.get,t):h$d(t,n),f$k=r;}const A$5=[];function h$d(t,r){r.flags&i$g.ExplicitlyTracking||(r.flags|=i$g.ExplicitlyTracking,p$e(r,(()=>{const o=r.metadata.dependsOn||A$5;for(const r of o)if("string"==typeof r&&-1===r.indexOf("."))k$7(t,r,!1);else {const o=f$l(r);for(let n=0,r=t;n<o.length&&null!=r&&"object"==typeof r;++n)r=k$7(r,o[n],n!==o.length-1);}})),r.flags&=~i$g.ExplicitlyTracking);}function k$7(t,n,o){const e="?"===n[n.length-1]?n.slice(0,-1):n;if(null!=t.getItemAt||Array.isArray(t)){const n=parseInt(e,10);if(!isNaN(n))return Array.isArray(t)?t[n]:t.getItemAt(n)}const i=e$o(t),c=null==i?void 0:i.properties.get(e);return c&&(l$g(c),y$c(t,c)),o?t[e]:void 0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n$c(n){if(n.json&&n.json.origins){const o=n.json.origins,e={"web-document":["web-scene","web-map"]};for(const n in e)if(o[n]){const s=o[n];e[n].forEach((n=>{o[n]=s;})),delete o[n];}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t$h extends s$v{constructor(e,s,r){if(super(e,s,r),!(this instanceof t$h))return new t$h(e,s,r)}}t$h.prototype.type="warning";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e$k(e){return !!e&&e.prototype&&e.prototype.declaredClass&&0===e.prototype.declaredClass.indexOf("esri.core.Collection")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i$e=s$x.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");function p$d(t,r,n){var o,i;t&&(!n&&!r.read||null!=(o=r.read)&&o.reader||!1===(null==(i=r.read)?void 0:i.enabled)||d$c(t)&&o$w("read.reader",u$k(t),r));}function u$k(t){var e;const r=null!=(e=t.ndimArray)?e:0;if(r>1)return c$j(t);if(1===r)return a$c(t);if("type"in t&&l$f(t.type)){var n,o;const e=null==(n=t.type.prototype)||null==(o=n.itemType)?void 0:o.Type,r=a$c("function"==typeof e?{type:e}:{types:e});return (e,n,o)=>{const i=r(e,n,o);return i?new t.type(i):i}}return s$l(t)}function s$l(t){return "type"in t?y$b(t.type):j$9(t.types)}function y$b(t){return t.prototype.read?(e,r,n)=>{if(null==e)return e;const o=typeof e;if("object"!==o)return void i$e.error(`Expected JSON value of type 'object' to deserialize type '${t.prototype.declaredClass}', but got '${o}'`);const p=new t;return p.read(e,n),p}:t.fromJSON}function f$j(t,e,r,n){return 0!==n&&Array.isArray(e)?e.map((e=>f$j(t,e,r,n-1))):t(e,void 0,r)}function c$j(t){var e;const r=s$l(t),n=f$j.bind(null,r),o=null!=(e=t.ndimArray)?e:0;return (t,e,r)=>{if(null==t)return t;t=n(t,r,o);let i=o,p=t;for(;i>0&&Array.isArray(p);)i--,p=p[0];if(void 0!==p)for(let n=0;n<i;n++)t=[t];return t}}function a$c(t){const e=s$l(t);return (t,r,n)=>{if(null==t)return t;if(Array.isArray(t)){const r=[];for(const o of t){const t=e(o,void 0,n);void 0!==t&&r.push(t);}return r}const o=e(t,void 0,n);return void 0!==o?[o]:void 0}}function l$f(t){if(!e$k(t))return !1;const e=t.prototype.itemType;return !(!e||!e.Type)&&("function"==typeof e.Type?v$8(e.Type):m$c(e.Type))}function d$c(t){return "types"in t?m$c(t.types):v$8(t.type)}function v$8(t){return !Array.isArray(t)&&(!!t&&t.prototype&&("read"in t.prototype||"fromJSON"in t||l$f(t)))}function m$c(t){for(const e in t.typeMap){if(!v$8(t.typeMap[e]))return !1}return !0}function j$9(t){var e;let n=null;const o=null!=(e=t.errorContext)?e:"type";return (e,p,u)=>{if(null==e)return e;const s=typeof e;if("object"!==s)return void i$e.error(`Expected JSON value of type 'object' to deserialize, but got '${s}'`);n||(n=g$a(t));const y=t.key;if("string"!=typeof y)return;const f=e[y],c=f?n[f]:t.defaultKeyValue?t.typeMap[t.defaultKeyValue]:void 0;if(!c){const t=`Type '${f||"unknown"}' is not supported`;return u&&u.messages&&e&&u.messages.push(new t$h(`${o}:unsupported`,t,{definition:e,context:u})),void i$e.error(t)}const a=new c;return a.read(e,u),a}}function g$a(t){const e={};for(const i in t.typeMap){var r,o;const p=t.typeMap[i],u=n$e(p.prototype);if("function"==typeof t.key)continue;const s=u.properties[t.key];if(!s)continue;null!=(r=s.json)&&r.type&&Array.isArray(s.json.type)&&1===s.json.type.length&&"string"==typeof s.json.type[0]&&(e[s.json.type[0]]=p);const y=null==(o=s.json)?void 0:o.write;if(!y||!y.writer){e[i]=p;continue}const f=y.target,c="string"==typeof f?f:t.key,a={};y.writer(i,a,c),a[c]&&(e[a[c]]=p);}return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e$j(e){if(e.json||(e.json={}),o$j(e.json),n$b(e.json),r$h(e.json),e.json.origins)for(const t in e.json.origins)o$j(e.json.origins[t]),n$b(e.json.origins[t]),r$h(e.json.origins[t]);return !0}function r$h(e){e.name&&(e.read&&"object"==typeof e.read?void 0===e.read.source&&(e.read.source=e.name):e.read={source:e.name},e.write&&"object"==typeof e.write?void 0===e.write.target&&(e.write.target=e.name):e.write={target:e.name});}function o$j(e){"boolean"==typeof e.read?e.read={enabled:e.read}:"function"==typeof e.read?e.read={enabled:!0,reader:e.read}:e.read&&"object"==typeof e.read&&void 0===e.read.enabled&&(e.read.enabled=!0);}function n$b(e){"boolean"==typeof e.write?e.write={enabled:e.write}:"function"==typeof e.write?e.write={enabled:!0,writer:e.write}:e.write&&"object"==typeof e.write&&void 0===e.write.enabled&&(e.write.enabled=!0);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i$d=s$x.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer");function o$i(r,t){var e;if(!t.write||t.write.writer||!1===t.write.enabled&&!t.write.overridePolicy)return;const i=null!=(e=null==r?void 0:r.ndimArray)?e:0;r&&(1===i||"type"in r&&e$k(r.type))?t.write.writer=a$b:i>1?t.write.writer=w$7(i):t.types?Array.isArray(t.types)?t.write.writer=s$k(t.types[0]):t.write.writer=u$j(t.types):t.write.writer=l$e;}function u$j(r){return (t,e,n,i)=>t?f$i(t,r,i)?l$e(t,e,n,i):void 0:l$e(t,e,n,i)}function f$i(t,e,n){for(const r in e.typeMap)if(t instanceof e.typeMap[r])return !0;if(null!=n&&n.messages){var o,u;const f=null!=(o=e.errorContext)?o:"type",s=`Values of type '${null!=(u="function"!=typeof e.key?t[e.key]:t.declaredClass)?u:"Unknown"}' cannot be written`;n&&n.messages&&t&&n.messages.push(new s$u(`${f}:unsupported`,s,{definition:t,context:n})),i$d.error(s);}return !1}function s$k(r){return (t,e,n,i)=>{if(!t||!Array.isArray(t))return l$e(t,e,n,i);return l$e(t.filter((t=>f$i(t,r,i))),e,n,i)}}function l$e(r,t,n,i){o$w(n,p$c(r,i),t);}function p$c(r,t){return r&&"function"==typeof r.write?r.write({},t):r&&"function"==typeof r.toJSON?r.toJSON():"number"==typeof r?y$a(r):r}function y$a(r){return r===-1/0?-Number.MAX_VALUE:r===1/0?Number.MAX_VALUE:isNaN(r)?null:r}function a$b(r,t,n,i){let o;null===r?o=null:r&&"function"==typeof r.map?(o=r.map((r=>p$c(r,i))),"function"==typeof o.toArray&&(o=o.toArray())):o=[p$c(r,i)],o$w(n,o,t);}function c$i(r,t,e){return 0!==e&&Array.isArray(r)?r.map((r=>c$i(r,t,e-1))):p$c(r,t)}function w$7(r){return function(t,n,i,o){let u;if(null===t)u=null;else {u=c$i(t,o,r);let e=r,n=u;for(;e>0&&Array.isArray(n);)e--,n=n[0];if(void 0!==n)for(let r=0;r<e;r++)u=[u];}o$w(i,u,n);}}

function o$h(r,n){return a$a(r,"read",n)}function s$j(r,n){return a$a(r,"write",n)}function a$a(r,n,e){let t=r&&r.json;if(r&&r.json&&r.json.origins&&e){const i=r.json.origins[e.origin];i&&("any"===n||n in i)&&(t=i);}return t}function p$b(r){const n=y$9(r);if(r.json.origins)for(const t in r.json.origins){const o=r.json.origins[t],s=o.types?f$h(o):n;p$d(s,o,!1),o.types&&!o.write&&r.json.write&&r.json.write.enabled&&(o.write={...r.json.write}),o$i(s,o);}p$d(n,r.json,!0),o$i(n,r.json);}function y$9(r){return r.json.types?u$i(r.json):r.type?j$8(r):u$i(r)}function f$h(r){return r.type?j$8(r):u$i(r)}function j$8(n){if(!n.type)return;let e=0,t=n.type;for(;Array.isArray(t)&&!k$8(t);)t=t[0],e++;return {type:t,ndimArray:e}}function u$i(r){if(!r.types)return;let n=0,e=r.types;for(;Array.isArray(e);)e=e[0],n++;return {types:e,ndimArray:n}}function c$h(r){e$j(r)&&(n$c(r),p$b(r));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const s$i=new Set,i$c=new Set;function n$a(e){return r=>{r.prototype.declaredClass=e,c$g(r);const o=[],n=[];let a=r.prototype;for(;a;)a.hasOwnProperty("initialize")&&!s$i.has(a.initialize)&&(s$i.add(a.initialize),o.push(a.initialize)),a.hasOwnProperty("destroy")&&!i$c.has(a.destroy)&&(i$c.add(a.destroy),n.push(a.destroy)),a=Object.getPrototypeOf(a);s$i.clear(),i$c.clear();class l extends r{constructor(...e){if(super(...e),this.constructor===l&&"function"==typeof this.postscript){if(o.length&&Object.defineProperty(this,"initialize",{enumerable:!1,configurable:!0,value(){for(let e=o.length-1;e>=0;e--)o[e].call(this);}}),n.length){let e=!1;Object.defineProperty(this,"destroy",{enumerable:!1,configurable:!0,value(){if(!e){e=!0;for(let e=0;e<n.length;e++)n[e].call(this);}}});}this.postscript(...e);}}}return l.__accessorMetadata__=n$e(r.prototype),l.prototype.declaredClass=e,l}}function a$9(e,t){return null==t.get?function(){const t=this.__accessor__.properties.get(e);if(void 0===t)return;l$g(t);const o=this.__accessor__.store;return o.has(e)?o.get(e):t.metadata.value}:function(){const t=this.__accessor__.properties.get(e);if(void 0!==t)return t.getComputed()}}function c$g(r){const s=r.prototype,i=n$e(s).properties,n={};for(const t of Object.getOwnPropertyNames(i)){const r=i[t];c$h(r),n[t]={enumerable:!0,configurable:!0,get:a$9(t,r),set(o){const s=this.__accessor__;if(void 0!==s){if(!Object.isFrozen(this)){if(s.initialized&&r.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${t}' of ${this.declaredClass}`);if(s.lifecycle===I$5.CONSTRUCTED&&r.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${t}' of ${this.declaredClass}`);s.set(t,o);}}else Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:o});}};}Object.defineProperties(r.prototype,n);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r$g(r,o,e){let i,n;return void 0===o?(n=r,i=[void 0]):"string"!=typeof o?(n=r,i=[void 0],e=o):(n=o,i=Array.isArray(r)?r:[r]),(r,o)=>{const p=r.constructor.prototype;for(const c of i){const i=y$d(r,c,n);i.write&&"object"==typeof i.write||(i.write={}),e&&(i.write.target=e),i.write.writer=p[o];}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const e$i=new Set;function i$b(n,i,o=!1){o&&e$i.has(i)||(o&&e$i.add(i),n.warn(`🛑 DEPRECATED - ${i}`));}function t$g(e,i,o={}){if(r$r("esri-deprecation-warnings")){const{moduleName:n}=o;s$h(e,`Function: ${(n?n+"::":"")+i+"()"}`,o);}}function s$h(e,o,t={}){if(r$r("esri-deprecation-warnings")){const{replacement:n,version:r,see:s,warnOnce:a}=t;let c=o;n&&(c+=`\n\t🛠️ Replacement: ${n}`),r&&(c+=`\n\t⚙️ Version: ${r}`),s&&(c+=`\n\t🔗 See ${s} for more details.`),i$b(e,c,a);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t$f(t){return t&&t.release&&"function"==typeof t.release}function i$a(t){return t&&t.acquire&&"function"==typeof t.acquire}class e$h{constructor(t,i,e,o=1,s=0){if(this.ctor=t,this.acquireFunction=i,this.releaseFunction=e,this.allocationSize=o,this._pool=new Array(s),this._initialSize=s,this.ctor)for(let n=0;n<s;n++)this._pool[n]=new this.ctor;this.allocationSize=Math.max(o,1);}destroy(){this.prune(0);}acquire(...t){let o;if(e$h.test.disabled)o=new this.ctor;else {if(0===this._pool.length){const t=this.allocationSize;for(let i=0;i<t;i++)this._pool[i]=new this.ctor;}o=this._pool.pop();}return this.acquireFunction?this.acquireFunction(o,...t):i$a(o)&&o.acquire(...t),o}release(i){i&&!e$h.test.disabled&&(this.releaseFunction?this.releaseFunction(i):t$f(i)&&i.release(),this._pool.push(i));}prune(t=this._initialSize){if(!(t>=this._pool.length)){for(let i=t;i<this._pool.length;++i){const t=this._pool[i];this._dispose(t);}this._pool.length=t;}}_dispose(t){t.dispose&&"function"==typeof t.dispose&&t.dispose();}}e$h.test={disabled:!1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var r$f;!function(e){e[e.DEFAULTS=0]="DEFAULTS",e[e.COMPUTED=1]="COMPUTED",e[e.SERVICE=2]="SERVICE",e[e.PORTAL_ITEM=3]="PORTAL_ITEM",e[e.WEB_SCENE=4]="WEB_SCENE",e[e.WEB_MAP=5]="WEB_MAP",e[e.USER=6]="USER";}(r$f||(r$f={}));function t$e(e){switch(e){case"defaults":return r$f.DEFAULTS;case"service":return r$f.SERVICE;case"portal-item":return r$f.PORTAL_ITEM;case"web-scene":return r$f.WEB_SCENE;case"web-map":return r$f.WEB_MAP;case"user":return r$f.USER}}function n$9(E){switch(E){case r$f.DEFAULTS:return "defaults";case r$f.SERVICE:return "service";case r$f.PORTAL_ITEM:return "portal-item";case r$f.WEB_SCENE:return "web-scene";case r$f.WEB_MAP:return "web-map";case r$f.USER:return "user"}return q$8(void 0)}function c$f(e){return n$9(e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s$g{constructor(r,s){this._observers=r,this._observer=s;}remove(){C$6(this._observers,this._observer);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class o$g{constructor(t,s,e){this.properties=t,this.propertyName=s,this.metadata=e,this._observers=null,this._accessed=null,this._handles=null,this.flags=i$g.Dirty|(e.nonNullable?i$g.NonNullable:0)|(e.hasOwnProperty("value")?i$g.HasDefaultValue:0)|(void 0===e.get?i$g.DepTrackingInitialized:0)|(void 0===e.dependsOn?i$g.AutoTracked:0);}destroy(){this._accessed=null,this._observers=null,this._clearObservationHandles();}getComputed(){l$g(this);const l=this.properties.store,o=this.propertyName,a=this.flags,h=l.get(o);if(a&i$g.Computing)return h;if(~a&i$g.Dirty&&l.has(o))return h;this.flags|=i$g.Computing;const d=this.properties.host;let c;a&i$g.AutoTracked?c=g$b(this,this.metadata.get,d):(h$d(d,this),c=this.metadata.get.call(d)),l.set(o,c,r$f.COMPUTED);const u=l.get(o);return u===h?this.flags&=~i$g.Dirty:u$l(this.commit,this),this.flags&=~i$g.Computing,u}onObservableAccessed(t){t!==this&&(null===this._accessed&&(this._accessed=[]),this._accessed.includes(t)||this._accessed.push(t));}onTrackingEnd(){this._clearObservationHandles(),this.flags|=i$g.DepTrackingInitialized;const t=this._accessed;if(null===t)return;let s=this._handles;null===s&&(s=this._handles=[]);for(let e=0;e<t.length;++e)s.push(t[e].observe(this));t.length=0;}observe(t){return null===this._observers&&(this._observers=[]),this._observers.includes(t)||this._observers.push(t),new s$g(this._observers,t)}notifyChange(){this.onInvalidated(),this.onCommitted();}invalidate(){this.onInvalidated();}onInvalidated(){~this.flags&i$g.Overriden&&(this.flags|=i$g.Dirty);const t=this._observers;if(null!==t)for(let s=0;s<t.length;++s)t[s].onInvalidated();}commit(){this.flags&=~i$g.Dirty,this.onCommitted();}onCommitted(){if(null===this._observers)return;const t=this._observers.slice();for(let s=0;s<t.length;++s)t[s].onCommitted();}_clearObservationHandles(){const t=this._handles;if(null!==t){for(let s=0;s<t.length;++s)t[s].remove();t.length=0;}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t$d{constructor(){this._values=new Map,this.multipleOriginsSupported=!1;}clone(s){const r=new t$d;return this._values.forEach(((t,i)=>{s&&s.has(i)||r.set(i,m$k(t));})),r}get(e){return this._values.get(e)}originOf(){return r$f.USER}keys(){return [...this._values.keys()]}set(e,s){this._values.set(e,s);}delete(e){this._values.delete(e);}has(e){return this._values.has(e)}forEach(e){this._values.forEach(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function d$b(t,e,s){return void 0!==t}function g$9(t,e,s,r){return void 0!==t&&(!(null==s&&t.flags&i$g.NonNullable)||(!1))}function m$b(t){return t&&"function"==typeof t.destroy}s$x.getLogger("esri.core.accessorSupport.Properties");class v$7{constructor(t){this.host=t,this.properties=new Map,this.ctorArgs=null,this.destroyed=!1,this.lifecycle=I$5.INITIALIZING,this.store=new t$d,this._origin=r$f.USER;const e=this.host.constructor.__accessorMetadata__,s=e.properties;for(const i in s){const t=new o$g(this,i,s[i]);this.properties.set(i,t);}this.metadatas=s,this._autoDestroy=e.autoDestroy;}initialize(){this.lifecycle=I$5.CONSTRUCTING;}constructed(){this.lifecycle=I$5.CONSTRUCTED;}destroy(){if(this.destroyed=!0,this._autoDestroy)for(const[t,e]of this.properties){const s=this.internalGet(t);s&&m$b(s)&&(s.destroy(),~e.flags&i$g.NonNullable&&this._internalSet(e,null)),e.destroy();}else for(const[t,e]of this.properties)e.destroy();}get initialized(){return this.lifecycle!==I$5.INITIALIZING}get(t){const e=this.properties.get(t);if(e.metadata.get)return e.getComputed();l$g(e);const s=this.store;return s.has(t)?s.get(t):e.metadata.value}originOf(t){const e=this.store.originOf(t);if(void 0===e){const e=this.properties.get(t);if(void 0!==e&&e.flags&i$g.HasDefaultValue)return "defaults"}return n$9(e)}has(t){return !!this.properties.has(t)&&this.store.has(t)}keys(){return [...this.properties.keys()]}internalGet(t){const e=this.properties.get(t);if(d$b(e))return this.store.has(t)?this.store.get(t):e.metadata.value}internalSet(t,e){const s=this.properties.get(t);d$b(s)&&this._internalSet(s,e);}getDependsInfo(t,e,s){const i=this.properties.get(e);if(!d$b(i))return "";const o=new Set,n=g$b({onObservableAccessed:t=>o.add(t),onTrackingEnd:()=>{}},(()=>{var e;return null==(e=i.metadata.get)?void 0:e.call(t)}));let a=`${s}${t.declaredClass.split(".").pop()}.${e}: ${n}\n`;if(0===o.size)return a;s+="  ";for(const l of o){if(!(l instanceof o$g))continue;const t=l.properties.host,e=l.propertyName,i=e$o(t);a+=i?i.getDependsInfo(t,e,s):`${s}${e}: undefined\n`;}return a}setAtOrigin(t,e,s){const i=this.properties.get(t);if(d$b(i))return this._setAtOrigin(i,e,s)}isOverridden(t){const e=this.properties.get(t);return void 0!==e&&!!(e.flags&i$g.Overriden)}clearOverride(t){const e=this.properties.get(t);void 0!==e&&e.flags&i$g.Overriden&&(e.flags&=~i$g.Overriden,e.notifyChange());}override(t,e){const s=this.properties.get(t);if(!g$9(s,t,e))return;const i=s.metadata.cast;if(i){const t=this._cast(i,e),{valid:s,value:r}=t;if(I$4.release(t),!s)return;e=r;}s.flags|=i$g.Overriden,this._internalSet(s,e);}set(t,e){const s=this.properties.get(t);if(!g$9(s,t,e))return;const i=s.metadata.cast;if(i){const t=this._cast(i,e),{valid:s,value:r}=t;if(I$4.release(t),!s)return;e=r;}const r=s.metadata.set;r?r.call(this.host,e):this._internalSet(s,e);}setDefaultOrigin(t){this._origin=t$e(t);}getDefaultOrigin(){return n$9(this._origin)}notifyChange(t){const e=this.properties.get(t);void 0!==e&&e.notifyChange();}invalidate(t){const e=this.properties.get(t);void 0!==e&&e.invalidate();}commit(t){const e=this.properties.get(t);void 0!==e&&e.commit();}_internalSet(t,e){const s=this.lifecycle!==I$5.INITIALIZING?this._origin:r$f.DEFAULTS;this._setAtOrigin(t,e,s);}_setAtOrigin(e,s,i){const r=this.store,o=e.propertyName;r.has(o,i)&&w$b(s,r.get(o))&&~e.flags&i$g.Overriden&&i===r.originOf(o)||(e.invalidate(),r.set(o,s,i),e.commit(),y$c(this.host,e));}_cast(t,e){const s=I$4.acquire();return s.valid=!0,s.value=e,t&&(s.value=t.call(this.host,e,s)),s}}class y$8{constructor(){this.value=null,this.valid=!0;}acquire(){this.valid=!0;}release(){this.value=null;}}const I$4=new e$h(y$8);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r$e(e){e.length=0;}class t$c{constructor(t=50,o=50){this._pool=new e$h(Array,void 0,r$e,o,t);}acquire(){return this._pool.acquire()}release(e){this._pool.release(e);}prune(){this._pool.prune(0);}static acquire(){return o$f.acquire()}static release(e){return o$f.release(e)}static prune(){o$f.prune();}}const o$f=new t$c(100);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t$b extends e$h{constructor(){super(...arguments),this._set=new Set;}destroy(){super.destroy(),this._set=y$l();}acquire(...e){const s=super.acquire(...e);return this._set.delete(s),s}release(e){e&&!this._set.has(e)&&(super.release(e),this._set.add(e));}_dispose(e){this._set.delete(e),super._dispose(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o$e=[];function t$a(t){o$e.push(t),1===o$e.length&&queueMicrotask((()=>{const t=o$e.slice();o$e.length=0;for(const o of t)o();}));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t$9=29;class e$g{constructor(e,s=t$9){this.name=e,this._counter=0,this._items=new Array(s);}record(t){this._items[++this._counter%this._items.length]=t;}get median(){return this._items.slice().sort(((t,e)=>t-e))[Math.floor(this._items.length/2)]}get average(){return this._items.reduce(((t,e)=>t+e),0)/this._items.length}get last(){return this._items[this._counter%this._items.length]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var o$d;!function(o){const t=(o,t,n,e)=>{let i=t,c=t;const l=n>>>1,r=o[i-1];for(;c<=l;){c=i<<1,c<n&&e(o[c-1],o[c])<0&&++c;const t=o[c-1];if(e(t,r)<=0)break;o[i-1]=t,i=c;}o[i-1]=r;},n=(o,t)=>o<t?-1:o>t?1:0;function e(o,e,i,c){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===c&&(c=n);for(let n=i>>>1;n>e;n--)t(o,n,i,c);const l=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,l,n,c);}}function*i(o,e,i,c){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===c&&(c=n);for(let n=i>>>1;n>e;n--)t(o,n,i,c),yield;const l=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,l,n,c),yield;}}o.sort=e,o.iterableSort=i;}(o$d||(o$d={}));const t$8=o$d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const e$f=1.5,l$d=1.1;class n$8{constructor(h){this.data=[],this._length=0,this._allocator=void 0,this._deallocator=()=>null,this._shrink=()=>{},this._hint=new w$c,h&&(h.initialSize&&(this.data=new Array(h.initialSize)),h.allocator&&(this._allocator=h.allocator),void 0!==h.deallocator&&(this._deallocator=h.deallocator),h.shrink&&(this._shrink=()=>r$d(this)));}toArray(){return this.data.slice(0,this.length)}filter(t){const h=new Array;for(let i=0;i<this._length;i++){const s=this.data[i];t(s)&&h.push(s);}return h}getItemAt(t){if(!(t<0||t>=this._length))return this.data[t]}get length(){return this._length}set length(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length]);return}this._length=t;}else {if(this._deallocator)for(let h=t;h<this._length;++h)this.data[h]=this._deallocator(this.data[h]);this._length=t,this._shrink();}}clear(){this.length=0;}prune(){this.clear(),this.data=[];}push(t){this.data[this._length++]=t;}pushArray(t,h=t.length){for(let i=0;i<h;i++)this.data[this._length++]=t[i];}fill(t,h){for(let i=0;i<h;i++)this.data[this._length++]=t;}pushNew(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));const t=this.data[this._length];return ++this._length,t}unshift(t){this.data.unshift(t),this._length++,r$d(this);}pop(){if(0===this.length)return;const t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t}remove(t){const i=b$b(this.data,t,this.length,this._hint);if(-1!==i)return this.data.splice(i,1),this.length=this.length-1,t}removeUnordered(t){const h=v$d(this.data,t,this.length,this._hint);return void 0!==h&&(this.length=this.length-1),this._shrink(),h}removeUnorderedIndex(t){if(!(t>=this.length||t<0))return this.swapElements(t,this.length-1),this.pop()}removeUnorderedMany(t,h=t.length,i){this.length=O$8(this.data,t,this.length,h,this._hint,i),this._shrink();}front(){if(0!==this.length)return this.data[0]}back(){if(0!==this.length)return this.data[this.length-1]}swapElements(t,h){t>=this.length||h>=this.length||t===h||([this.data[t],this.data[h]]=[this.data[h],this.data[t]]);}sort(t){t$8.sort(this.data,0,this.length,t);}iterableSort(t){return t$8.iterableSort(this.data,0,this.length,t)}some(t,h){for(let i=0;i<this.length;++i)if(t.call(h,this.data[i],i,this.data))return !0;return !1}filterInPlace(t,h){let i=0;for(let s=0;s<this._length;++s){const a=this.data[s];t.call(h,a,s,this.data)&&(this.data[s]=this.data[i],this.data[i]=a,i++);}if(this._deallocator)for(let s=i;s<this._length;s++)this.data[s]=this._deallocator(this.data[s]);return this._length=i,this._shrink(),this}forAll(t,h){const i=this.length,s=this.data;for(let a=0;a<i;++a)t.call(h,s[a],a,s);}forEach(t,h){for(let i=0;i<this.length;++i)t.call(h,this.data[i],i,this.data);}map(t,h){const i=new Array(this.length);for(let s=0;s<this.length;++s)i[s]=t.call(h,this.data[s],s,this.data);return i}reduce(t,h){let i=h;for(let s=0;s<this.length;++s)i=t(i,this.data[s],s,this.data);return i}has(t){const h=this.length,i=this.data;for(let s=0;s<h;++s)if(i[s]===t)return !0;return !1}}function r$d(t){t.data.length>e$f*t.length&&(t.data.length=Math.floor(t.length*l$d));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n$7(n){return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class m$a{constructor(e){this.callback=e,this.isActive=!0;}remove(){this.isActive=!1;}}let l$c=0;const u$h={time:n$7(0),deltaTime:n$7(0),elapsedFrameTime:n$7(0),frameDuration:n$7(0)},f$g=["prepare","preRender","render","postRender","update","finish"],h$c=[],d$a=new n$8;const k$6={frameTasks:d$a,willDispatch:!1,clearFrameTasks:j$7,dispatch:b$6,executeFrameTasks:D$5};function v$6(e){const r=new m$a(e);return h$c.push(r),k$6.willDispatch||(k$6.willDispatch=!0,t$a(b$6)),r}function j$7(e=!1){d$a.forAll((e=>{e.removed=!0;})),e&&_$7();}function D$5(e){const t=n$7(e-l$c);l$c=e;const r=1e3/60,s=Math.max(0,t-r);for(let n=0;n<f$g.length;n++){const o=performance.now(),a=f$g[n];d$a.forAll((o=>{var c;if(o.paused||o.removed)return;0===n&&o.ticks++;o.phases[a]&&(u$h.time=e,u$h.deltaTime=0===o.ticks?n$7(0):t,u$h.elapsedFrameTime=n$7(performance.now()-e),u$h.frameDuration=n$7(r-s),null==(c=o.phases[a])||c.call(o,u$h));})),M$8[n].record(performance.now()-o);}_$7(),q$5.record(performance.now()-e);}const g$8=new n$8;function _$7(){d$a.forAll((e=>{e.removed&&g$8.push(e);})),d$a.removeUnorderedMany(g$8.data,g$8.length),g$8.clear();}function b$6(){for(;h$c.length;){const t=q$8(h$c.shift());t.isActive&&t.callback();}k$6.willDispatch=!1;}const M$8=f$g.map((e=>new e$g(e))),q$5=new e$g("total");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let t$7=0;function e$e(){return ++t$7}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s$f{constructor(s){this._notify=s,this._accessed=[],this._handles=[],this._invalidCount=0;}destroy(){this._accessed.length=0,this.clear();}onInvalidated(){this._invalidCount++;}onCommitted(){const s=this._invalidCount;if(1===s)return this._invalidCount=0,void this._notify();this._invalidCount=s>0?s-1:0;}onObservableAccessed(s){this._accessed.includes(s)||this._accessed.push(s);}onTrackingEnd(){const s=this._handles,t=this._accessed;for(let e=0;e<t.length;++e)s.push(t[e].observe(this));t.length=0;}clear(){const s=this._handles;for(let t=0;t<s.length;++t)s[t].remove();s.length=0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let r$c=!1;const e$d=[];function o$c(e,o){let u=new s$f(s),l=null,f=!1;function s(){if(!u||f)return;if(r$c)return void i$9(s);const t=l;u.clear(),r$c=!0,f=!0,l=g$b(u,e),f=!1,r$c=!1,o(l,t),c$e();}function m(){u&&(u.destroy(),u=null,l=null);}return f=!0,l=g$b(u,e),f=!1,{remove:m}}function u$g(r,e){let o=new s$f(l),u=null;function l(){e(u,c);}function i(){o&&(o.destroy(),o=null),u=null;}function c(){return o?(o.clear(),u=g$b(o,r),u):null}return c(),{remove:i}}function i$9(n){e$d.includes(n)||e$d.unshift(n);}function c$e(){for(;e$d.length;)e$d.pop()();}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var d$9;!function(e){e[e.Untracked=0]="Untracked",e[e.Tracked=1]="Tracked";}(d$9||(d$9={}));class h$b{constructor(){this.uid=e$e(),this.removed=!1,this.type=null,this.oldValue=null,this.callback=null,this.getValue=null,this.target=null,this.path=null,this.equals=null;}static acquireUntracked(e,r,o,l,n){return this.pool.acquire(d$9.Untracked,e,r,o,l,n,w$b)}static acquireTracked(e,t,r,o){return this.pool.acquire(d$9.Tracked,e,t,r,null,null,o)}notify(e,t){this.type===d$9.Untracked?this.callback.call(this.target,e,t,this.path,this.target):this.callback.call(null,e,t);}acquire(e,t,r,o,l,i,s){this.uid=e$e(),this.removed=!1,this.type=e,this.oldValue=t,this.callback=r,this.getValue=o,this.target=l,this.path=i,this.equals=s;}release(){this.target=this.path=this.oldValue=this.callback=this.getValue=null,this.uid=e$e(),this.removed=!0;}}h$b.pool=new t$b(h$b);const f$f=new t$c,m$9=new Set;let p$a;function v$5(e){m$9.delete(e),m$9.add(e),p$a||(p$a=v$6(q$4));}function g$7(e){if(e.removed)return;const t=e.oldValue,r=e.getValue();e.equals(t,r)||(e.oldValue=r,e.notify(r,t));}function _$6(e){for(const t of m$9.values())t.target===e&&(t.removed=!0);}function q$4(){let e=10;for(;p$a&&e--;){p$a=null;const e=j$6(),t=f$f.acquire();for(const r of e){const e=r.uid;g$7(r),e===r.uid&&r.removed&&t.push(r);}for(const r of m$9)r.removed&&(t.push(r),m$9.delete(r));for(const r of t)h$b.pool.release(r);f$f.release(t),f$f.release(e),y$7.forEach((e=>e()));}}function j$6(){const e=f$f.acquire();e.length=m$9.size;let t=0;for(const r of m$9)e[t]=r,++t;return m$9.clear(),e}const y$7=new Set;function U$1(e,t,r){let o=y$e(e,t,r,((e,t,r)=>{let l,n,s=u$g((()=>o$n(e,t)),((i,s)=>{e.__accessor__.destroyed||l&&l.uid!==n?o.remove():(l||(l=h$b.acquireUntracked(i,r,s,e,t),n=l.uid),v$5(l));}));return {remove:h$f((()=>{s.remove(),l&&(l.uid!==n||l.removed||(l.removed=!0,v$5(l)),l=null),o=s=null;}))}}));return o}function b$5(e,r,o){const l=y$e(e,r,o,((e,r,o)=>{let n=!1;return o$c((()=>o$n(e,r)),((i,s)=>{e.__accessor__.destroyed?l.remove():n||(n=!0,w$b(s,i)||o.call(e,i,s,r,e),n=!1);}))}));return l}function T$4(e,t,r,o=!1){return !e.__accessor__||e.__accessor__.destroyed?{remove(){}}:o?b$5(e,t,r):U$1(e,t,r)}function w$6(e,t,r){let o,l,n=u$g(e,((e,i)=>{o&&o.uid!==l?n.remove():(o||(o=h$b.acquireTracked(e,t,i,r),l=o.uid),v$5(o));}));return {remove:h$f((()=>{n.remove(),o&&(o.uid!==l||o.removed||(o.removed=!0,v$5(o)),o=null),n=null;}))}}function S$6(e,t,r){let o=!1;return o$c(e,((e,l)=>{o||(o=!0,r(l,e)||t(e,l),o=!1);}))}function A$4(e,r,o=!1,l=w$b){return o?S$6(e,r,l):w$6(e,r,l)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function u$f(t){if(null==t)return {value:t};if(Array.isArray(t))return {type:[t[0]],value:null};switch(typeof t){case"object":return t.constructor&&t.constructor.__accessorMetadata__||t instanceof Date?{type:t.constructor,value:t}:t;case"boolean":return {type:Boolean,value:t};case"string":return {type:String,value:t};case"number":return {type:Number,value:t};case"function":return {type:t,value:null};default:return}}class h$a{constructor(...t){if(this.constructor===h$a)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{enumerable:!1,value:new v$7(this)}),t.length>0&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,t));}static createSubclass(t={}){if(Array.isArray(t))throw new Error("Multi-inheritance unsupported since 4.16");const{properties:r,declaredClass:e,constructor:s}=t;delete t.declaredClass,delete t.properties,delete t.constructor;const c=this;class i extends c{constructor(...t){super(...t),this.inherited=null,s&&s.apply(this,t);}}n$e(i.prototype);for(const o in t){const r=t[o];i.prototype[o]="function"==typeof r?function(...t){const e=this.inherited;let s;this.inherited=function(...t){if(c.prototype[o])return c.prototype[o].apply(this,t)};try{s=r.apply(this,t);}catch(i){throw this.inherited=e,i}return this.inherited=e,s}:t[o];}for(const o in r){const t=u$f(r[o]);d$e(t)(i.prototype,o);}return n$a(e)(i)}postscript(t){const r=this.__accessor__,e=r.ctorArgs||t;r.initialize(),e&&(this.set(e),r.ctorArgs=null),r.constructed(),this.initialize();}initialize(){}destroy(){this.destroyed||(_$6(this),this.__accessor__.destroy());}get initialized(){return this.__accessor__&&this.__accessor__.initialized||!1}get constructed(){return this.__accessor__&&this.__accessor__.lifecycle===I$5.CONSTRUCTED||!1}get destroyed(){return this.__accessor__&&this.__accessor__.destroyed||!1}commitProperty(t){this.get(t);}get(t){return u$m(this,t)}hasOwnProperty(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)}isInstanceOf(e){return t$g(s$x.getLogger(this.declaredClass),"isInstanceOf",{replacement:"Use instanceof directly",version:"4.16"}),this instanceof e}keys(){return this.__accessor__?this.__accessor__.keys():[]}set(t,r){return n$d(this,t,r),this}watch(t,r,e){return T$4(this,t,r,e)}_clearOverride(t){return this.__accessor__.clearOverride(t)}_override(t,r){return this.__accessor__.override(t,r)}_isOverridden(t){return this.__accessor__.isOverridden(t)}notifyChange(t){this.__accessor__.notifyChange(t);}_get(t){return this.__accessor__.internalGet(t)}_set(t,r){return this.__accessor__.internalSet(t,r),this}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class e$c{constructor(){this._values=new Map,this.multipleOriginsSupported=!1;}clone(r){const l=new e$c;return this._values.forEach(((e,n)=>{r&&r.has(n)||l.set(n,m$k(e.value),e.origin);})),l}get(i,r){r=this._normalizeOrigin(r);const e=this._values.get(i);return null==r||(null==e?void 0:e.origin)===r?null==e?void 0:e.value:void 0}originOf(i){var e,l;return null!=(e=null==(l=this._values.get(i))?void 0:l.origin)?e:r$f.USER}keys(i){i=this._normalizeOrigin(i);const r=[...this._values.keys()];return null==i?r:r.filter((r=>{var e;return (null==(e=this._values.get(r))?void 0:e.origin)===i}))}set(i,e,n){if((n=this._normalizeOrigin(n))===r$f.DEFAULTS){const r=this._values.get(i);if(r&&null!=r.origin&&r.origin>n)return}this._values.set(i,new l$b(e,n));}delete(i,r){var e;null!=(r=this._normalizeOrigin(r))&&(null==(e=this._values.get(i))?void 0:e.origin)!==r||this._values.delete(i);}has(i,r){var e;return null!=(r=this._normalizeOrigin(r))?(null==(e=this._values.get(i))?void 0:e.origin)===r:this._values.has(i)}forEach(i){this._values.forEach((({value:r},e)=>i(r,e)));}_normalizeOrigin(i){if(null!=i)return i===r$f.DEFAULTS?i:r$f.USER}}class l$b{constructor(i,r){this.value=i,this.origin=r;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e$b(e,r,n){r.keys().forEach((e=>{n.set(e,r.get(e),r$f.DEFAULTS);}));const o=e.metadatas;Object.keys(o).forEach((r=>{e.internalGet(r)&&n.set(r,e.internalGet(r),r$f.DEFAULTS);}));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function s$e(e,r,n){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return !1;const o=e.read.source;if("string"==typeof o){if(o===r)return !0;if(o.indexOf(".")>-1&&0===o.indexOf(r)&&s$o(o,n))return !0}else for(const s of o){if(s===r)return !0;if(s.indexOf(".")>-1&&0===s.indexOf(r)&&s$o(s,n))return !0}return !1}function i$8(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)}function f$e(e,t,r,o,f){let a=o$h(t[r],f);i$8(a)&&(e[r]=!0);for(const i of Object.getOwnPropertyNames(t))a=o$h(t[i],f),s$e(a,r,o)&&(e[i]=!0);}function a$8(e,t,r,n){const s=r.metadatas,i=a$a(s[t],"any",n),f=i&&i.default;if(void 0===f)return;const a="function"==typeof f?f.call(e,t,n):f;void 0!==a&&r.set(t,a);}const c$d={origin:"service"};function u$e(t,o,s=c$d){if(!o||"object"!=typeof o)return;const i=e$o(t),u=i.metadatas,d={};for(const e of Object.getOwnPropertyNames(o))f$e(d,u,e,o,s);i.setDefaultOrigin(s.origin);for(const r of Object.getOwnPropertyNames(d)){const f=o$h(u[r],s).read,a=f&&f.source;let c;c=a&&"string"==typeof a?o$n(o,a):o[r],f&&f.reader&&(c=f.reader.call(t,c,o,s)),void 0!==c&&i.set(r,c);}if(!s||!s.ignoreDefaults){i.setDefaultOrigin("defaults");for(const e of Object.getOwnPropertyNames(u))d[e]||a$8(t,e,i,s);}i.setDefaultOrigin("user");}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a$7=s$x.getLogger("esri.core.accessorSupport.write");function f$d(r,e,t,i,o){var n,s;const u={};return null==(n=e.write)||null==(s=n.writer)||s.call(r,i,u,t,o),u}function p$9(r,t,i,s,u,l){if(!s||!s.write)return !1;const f=r.get(i);if(!u&&s.write.overridePolicy){const e=s.write.overridePolicy.call(r,f,i,l);void 0!==e&&(u=e);}if(u||(u=s.write),!u||!1===u.enabled)return !1;if((null===f&&!u.allowNull&&!u.writerEnsuresNonNull||void 0===f)&&u.isRequired){const t=new s$u("web-document-write:property-required",`Missing value for required property '${i}' on '${r.declaredClass}'`,{propertyName:i,target:r});return t&&l&&l.messages?l.messages.push(t):t&&!l&&a$7.error(t.name,t.message),!1}if(void 0===f)return !1;if(null===f&&!u.allowNull&&!u.writerEnsuresNonNull)return !1;if((!t.store.multipleOriginsSupported||t.store.originOf(i)===r$f.DEFAULTS)&&c$c(r,i,l,s,f))return !1;if(!u.ignoreOrigin&&l&&l.origin&&t.store.multipleOriginsSupported){if(t.store.originOf(i)<t$e(l.origin))return !1}return !0}function c$c(e,t,i,o,n){const s=o.default;if(void 0===s)return !1;if(null!=o.defaultEquals)return o.defaultEquals(n);if("function"==typeof s){if(Array.isArray(n)){const o=s.call(e,t,i);return l$m(o,n)}return !1}return s===n}function d$8(r,e,t){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return u$n(e,r.toJSON());const o=e$o(r),n=o.metadatas;for(const s in n){const g=s$j(n[s],t);if(!p$9(r,o,s,g,void 0,t))continue;const d=r.get(s),m=f$d(r,g,g.write&&"string"==typeof g.write.target?g.write.target:s,d,t);var a,c;if(Object.keys(m).length>0)e=u$n(e,m),null!=t&&null!=(a=t.resources)&&null!=(c=a.pendingOperations)&&c.length&&Promise.all(t.resources.pendingOperations).then((()=>u$n(e,m))),t&&t.writtenProperties&&t.writtenProperties.push({target:r,propName:s,oldOrigin:c$f(o.store.originOf(s)),newOrigin:t.origin});}return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const u$d=t=>{let u=class extends t{constructor(...r){super(...r);const t=q$8(e$o(this)),i=t.store,p=new e$c;t.store=p,e$b(t,i,p);}read(r,t){u$e(this,r,t);}write(r={},t){return d$8(this,r,t)}toJSON(r){return this.write({},r)}static fromJSON(r,t){return n$6.call(this,r,t)}};return u=e$p([n$a("esri.core.JSONSupport")],u),u.prototype.toJSON.isDefaultToJSON=!0,u};function n$6(r,t){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");const s=new this;return s.read(r,t),s}let l$a=class extends(u$d(h$a)){};l$a=e$p([n$a("esri.core.JSONSupport")],l$a);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var S$5;!function(S){S[S.CGCS2000=4490]="CGCS2000",S[S.GCSMARS2000=104971]="GCSMARS2000",S[S.GCSMARS2000_SPHERE=104905]="GCSMARS2000_SPHERE",S[S.GCSMOON2000=104903]="GCSMOON2000";}(S$5||(S$5={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let o$b;const r$b={values:[1,.3048,.3048006096012192,.3047972654,.9143917962,.201166195164,.9143984146160287,.3047994715386762,20.11676512155263,20.11678249437587,.9143985307444408,.91439523,.3047997101815088,20.1168,20.116756,5e4,15e4],units:["Meter","Foot","Foot_US","Foot_Clarke","Yard_Clarke","Link_Clarke","Yard_Sears","Foot_Sears","Chain_Sears","Chain_Benoit_1895_B","Yard_Indian","Yard_Indian_1937","Foot_Gold_Coast","Chain","Chain_Sears_1922_Truncated","50_Kilometers","150_Kilometers"],2066:5,2136:12,2155:2,2157:0,2158:0,2159:12,2160:12,2204:2,2219:0,2220:0,2254:2,2255:2,2256:1,2265:1,2266:1,2267:2,2268:2,2269:1,2270:1,2271:2,2272:2,2273:1,2294:0,2295:0,2314:3,2899:2,2900:2,2901:1,2909:1,2910:1,2911:2,2912:2,2913:1,2914:1,2992:1,2993:0,2994:1,3080:1,3089:2,3090:0,3091:2,3102:2,3141:0,3142:0,3167:14,3359:2,3360:0,3361:1,3362:0,3363:2,3364:0,3365:2,3366:3,3404:2,3405:0,3406:0,3407:3,3439:0,3440:0,3479:1,3480:0,3481:1,3482:0,3483:1,3484:0,3485:2,3486:0,3487:2,3488:0,3489:0,3490:2,3491:0,3492:2,3493:0,3494:2,3495:0,3496:2,3497:0,3498:2,3499:0,3500:2,3501:0,3502:2,3503:0,3504:2,3505:0,3506:2,3507:0,3508:2,3509:0,3510:2,3511:0,3512:2,3513:0,3514:0,3515:2,3516:0,3517:2,3518:0,3519:2,3520:0,3521:2,3522:0,3523:2,3524:0,3525:2,3526:0,3527:2,3528:0,3529:2,3530:0,3531:2,3532:0,3533:2,3534:0,3535:2,3536:0,3537:2,3538:0,3539:2,3540:0,3541:2,3542:0,3543:2,3544:0,3545:2,3546:0,3547:2,3548:0,3549:2,3550:0,3551:2,3552:0,3553:2,3582:2,3583:0,3584:2,3585:0,3586:2,3587:0,3588:1,3589:0,3590:1,3591:0,3592:0,3593:1,3598:2,3599:0,3600:2,3605:1,3606:0,3607:0,3608:2,3609:0,3610:2,3611:0,3612:2,3613:0,3614:2,3615:0,3616:2,3617:0,3618:2,3619:0,3620:2,3621:0,3622:2,3623:0,3624:2,3625:0,3626:2,3627:0,3628:2,3629:0,3630:2,3631:0,3632:2,3633:0,3634:1,3635:0,3636:1,3640:2,3641:0,3642:2,3643:0,3644:1,3645:0,3646:1,3647:0,3648:1,3649:0,3650:2,3651:0,3652:2,3653:0,3654:2,3655:0,3656:1,3657:0,3658:2,3659:0,3660:2,3661:0,3662:2,3663:0,3664:2,3668:2,3669:0,3670:2,3671:0,3672:2,3673:0,3674:2,3675:0,3676:1,3677:2,3678:0,3679:1,3680:2,3681:0,3682:1,3683:2,3684:0,3685:0,3686:2,3687:0,3688:2,3689:0,3690:2,3691:0,3692:2,3696:2,3697:0,3698:2,3699:0,3700:2,3793:0,3794:0,3812:0,3854:0,3857:0,3920:0,3978:0,3979:0,3991:2,3992:2,4026:0,4037:0,4038:0,4071:0,4082:0,4083:0,4087:0,4088:0,4217:2,4414:0,4415:0,4417:0,4434:0,4437:0,4438:2,4439:2,4462:0,4467:0,4471:0,4474:0,4559:0,4647:0,4822:0,4826:0,4839:0,5018:0,5048:0,5167:0,5168:0,5221:0,5223:0,5234:0,5235:0,5243:0,5247:0,5266:0,5316:0,5320:0,5321:0,5325:0,5337:0,5361:0,5362:0,5367:0,5382:0,5383:0,5396:0,5456:0,5457:0,5469:0,5472:4,5490:0,5513:0,5514:0,5523:0,5559:0,5588:1,5589:3,5596:0,5627:0,5629:0,5641:0,5643:0,5644:0,5646:2,5654:2,5655:2,5659:0,5700:0,5825:0,5836:0,5837:0,5839:0,5842:0,5844:0,5858:0,5879:0,5880:0,5887:0,5890:0,6128:1,6129:1,6141:1,6204:0,6210:0,6211:0,6307:0,6312:0,6316:0,6362:0,6391:1,6405:1,6406:0,6407:1,6408:0,6409:1,6410:0,6411:2,6412:0,6413:2,6414:0,6415:0,6416:2,6417:0,6418:2,6419:0,6420:2,6421:0,6422:2,6423:0,6424:2,6425:0,6426:2,6427:0,6428:2,6429:0,6430:2,6431:0,6432:2,6433:0,6434:2,6435:0,6436:2,6437:0,6438:2,6439:0,6440:0,6441:2,6442:0,6443:2,6444:0,6445:2,6446:0,6447:2,6448:0,6449:2,6450:0,6451:2,6452:0,6453:2,6454:0,6455:2,6456:0,6457:2,6458:0,6459:2,6460:0,6461:2,6462:0,6463:2,6464:0,6465:2,6466:0,6467:2,6468:0,6469:2,6470:0,6471:2,6472:0,6473:2,6474:0,6475:2,6476:0,6477:2,6478:0,6479:2,6484:2,6485:0,6486:2,6487:0,6488:2,6489:0,6490:2,6491:0,6492:2,6493:0,6494:1,6495:0,6496:1,6497:0,6498:0,6499:1,6500:0,6501:2,6502:0,6503:2,6504:0,6505:2,6506:0,6507:2,6508:0,6509:0,6510:2,6515:1,6516:0,6518:0,6519:2,6520:0,6521:2,6522:0,6523:2,6524:0,6525:2,6526:0,6527:2,6528:0,6529:2,6530:0,6531:2,6532:0,6533:2,6534:0,6535:2,6536:0,6537:2,6538:0,6539:2,6540:0,6541:2,6542:0,6543:2,6544:0,6545:1,6546:0,6547:1,6548:0,6549:2,6550:0,6551:2,6552:0,6553:2,6554:0,6555:2,6556:0,6557:1,6558:0,6559:1,6560:0,6561:1,6562:0,6563:2,6564:0,6565:2,6566:0,6567:0,6568:2,6569:0,6570:1,6571:0,6572:2,6573:0,6574:2,6575:0,6576:2,6577:0,6578:2,6582:2,6583:0,6584:2,6585:0,6586:2,6587:0,6588:2,6589:0,6590:2,6591:0,6592:0,6593:2,6594:0,6595:2,6596:0,6597:2,6598:0,6599:2,6600:0,6601:2,6602:0,6603:2,6605:2,6606:0,6607:2,6608:0,6609:2,6610:0,6611:0,6612:2,6613:0,6614:2,6615:0,6616:2,6617:0,6618:2,6633:2,6646:0,6703:0,6784:0,6785:1,6786:0,6787:1,6788:0,6789:1,6790:0,6791:1,6792:0,6793:1,6794:0,6795:1,6796:0,6797:1,6798:0,6799:1,6800:0,6801:1,6802:0,6803:1,6804:0,6805:1,6806:0,6807:1,6808:0,6809:1,6810:0,6811:1,6812:0,6813:1,6814:0,6815:1,6816:0,6817:1,6818:0,6819:1,6820:0,6821:1,6822:0,6823:1,6824:0,6825:1,6826:0,6827:1,6828:0,6829:1,6830:0,6831:1,6832:0,6833:1,6834:0,6835:1,6836:0,6837:1,6838:0,6839:1,6840:0,6841:1,6842:0,6843:1,6844:0,6845:1,6846:0,6847:1,6848:0,6849:1,6850:0,6851:1,6852:0,6853:1,6854:0,6855:1,6856:0,6857:1,6858:0,6859:1,6860:0,6861:1,6862:0,6863:1,6867:0,6868:1,6870:0,6875:0,6876:0,6879:0,6880:2,6884:0,6885:1,6886:0,6887:1,6915:0,6922:0,6923:2,6924:0,6925:2,6962:0,6984:0,6991:0,7128:2,7131:0,7132:2,7142:0,7257:0,7258:2,7259:0,7260:2,7261:0,7262:2,7263:0,7264:2,7265:0,7266:2,7267:0,7268:2,7269:0,7270:2,7271:0,7272:2,7273:0,7274:2,7275:0,7276:2,7277:0,7278:2,7279:0,7280:2,7281:0,7282:2,7283:0,7284:2,7285:0,7286:2,7287:0,7288:2,7289:0,7290:2,7291:0,7292:2,7293:0,7294:2,7295:0,7296:2,7297:0,7298:2,7299:0,7300:2,7301:0,7302:2,7303:0,7304:2,7305:0,7306:2,7307:0,7308:2,7309:0,7310:2,7311:0,7312:2,7313:0,7314:2,7315:0,7316:2,7317:0,7318:2,7319:0,7320:2,7321:0,7322:2,7323:0,7324:2,7325:0,7326:2,7327:0,7328:2,7329:0,7330:2,7331:0,7332:2,7333:0,7334:2,7335:0,7336:2,7337:0,7338:2,7339:0,7340:2,7341:0,7342:2,7343:0,7344:2,7345:0,7346:2,7347:0,7348:2,7349:0,7350:2,7351:0,7352:2,7353:0,7354:2,7355:0,7356:2,7357:0,7358:2,7359:0,7360:2,7361:0,7362:2,7363:0,7364:2,7365:0,7366:2,7367:0,7368:2,7369:0,7370:2,7877:0,7878:0,7882:0,7883:0,7887:0,7899:0,7991:0,7992:0,8035:2,8036:2,8058:0,8059:0,8082:0,8083:0,8088:0,8090:0,8091:2,8092:0,8093:2,8095:0,8096:2,8097:0,8098:2,8099:0,8100:2,8101:0,8102:2,8103:0,8104:2,8105:0,8106:2,8107:0,8108:2,8109:0,8110:2,8111:0,8112:2,8113:0,8114:2,8115:0,8116:2,8117:0,8118:2,8119:0,8120:2,8121:0,8122:2,8123:0,8124:2,8125:0,8126:2,8127:0,8128:2,8129:0,8130:2,8131:0,8132:2,8133:0,8134:2,8135:0,8136:2,8137:0,8138:2,8139:0,8140:2,8141:0,8142:2,8143:0,8144:2,8145:0,8146:2,8147:0,8148:2,8149:0,8150:2,8151:0,8152:2,8153:0,8154:2,8155:0,8156:2,8157:0,8158:2,8159:0,8160:2,8161:0,8162:2,8163:0,8164:2,8165:0,8166:2,8167:0,8168:2,8169:0,8170:2,8171:0,8172:2,8173:0,8177:2,8179:0,8180:2,8181:0,8182:2,8184:0,8185:2,8187:0,8189:2,8191:0,8193:2,8196:0,8197:2,8198:0,8200:2,8201:0,8202:2,8203:0,8204:2,8205:0,8206:2,8207:0,8208:2,8209:0,8210:2,8212:0,8213:2,8214:0,8216:2,8218:0,8220:2,8222:0,8224:2,8225:0,8226:2,8311:0,8312:1,8313:0,8314:1,8315:0,8316:1,8317:0,8318:1,8319:0,8320:1,8321:0,8322:1,8323:0,8324:1,8325:0,8326:1,8327:0,8328:1,8329:0,8330:1,8331:0,8332:1,8333:0,8334:1,8335:0,8336:1,8337:0,8338:1,8339:0,8340:1,8341:0,8342:1,8343:0,8344:1,8345:0,8346:1,8347:0,8348:1,8352:0,8353:0,8379:0,8380:2,8381:0,8382:2,8383:0,8384:2,8385:0,8387:2,8391:0,8395:0,8433:0,8441:0,8455:0,8456:0,8531:2,8682:0,8686:0,8687:0,8692:0,8693:0,8826:0,8903:0,8950:0,8951:0,9039:0,9040:0,9141:0,9149:0,9150:0,9191:0,9221:0,9222:0,9249:0,9250:0,9252:0,9254:0,9265:0,9284:0,9285:0,9300:0,9354:0,9367:0,9373:0,9377:0,9387:0,9391:0,9456:0,9473:0,9498:0,9674:0,9678:0,9680:0,9709:0,9712:0,9713:0,9716:0,9741:0,9748:2,9749:2,9761:0,9766:0,20499:0,20538:0,20539:0,20790:0,20791:0,21291:0,21292:0,21500:0,21817:0,21818:0,22032:0,22033:0,22091:0,22092:0,22332:0,22391:0,22392:0,22700:0,22770:0,22780:0,22832:0,23090:0,23095:0,23239:0,23240:0,23433:0,23700:0,24047:0,24048:0,24100:3,24200:0,24305:0,24306:0,24382:10,24383:0,24500:0,24547:0,24548:0,24571:9,24600:0,25e3:0,25231:0,25884:0,25932:0,26237:0,26331:0,26332:0,26432:0,26591:0,26592:0,26632:0,26692:0,27120:0,27200:0,27291:6,27292:6,27429:0,27492:0,27493:0,27500:0,27700:0,28232:0,28600:0,28991:0,28992:0,29100:0,29101:0,29220:0,29221:0,29333:0,29635:0,29636:0,29701:0,29738:0,29739:0,29849:0,29850:0,29871:8,29872:7,29873:0,29874:0,30200:5,30339:0,30340:0,30591:0,30592:0,30791:0,30792:0,30800:0,31028:0,31121:0,31154:0,31170:0,31171:0,31370:0,31528:0,31529:0,31600:0,31700:0,31838:0,31839:0,31900:0,31901:0,32061:0,32062:0,32098:0,32099:2,32100:0,32104:0,32161:0,32766:0,53048:0,53049:0,54090:0,54091:0,65061:2,65062:2,65161:0,65163:0,102041:2,102064:11,102068:15,102069:16,102118:2,102119:1,102120:2,102121:2,102217:2,102218:0,102219:2,102220:2,102378:1,102379:1,102380:0,102381:1,102589:2,102599:2,102600:2,102604:2,102647:0,102704:2,102705:2,102706:0,102759:1,102760:1,102761:2,102762:0,102763:2,102764:0,102765:0,102766:2,102962:0,102963:0,102970:1,102974:2,102993:0,102994:0,102995:2,102996:2,103015:0,103016:2,103017:0,103018:2,103025:0,103026:0,103027:2,103028:2,103035:0,103036:0,103037:2,103038:2,103039:0,103040:0,103041:2,103042:2,103043:0,103044:0,103045:2,103046:2,103047:0,103048:0,103049:2,103050:2,103051:0,103052:2,103053:0,103054:2,103055:0,103056:2,103057:0,103058:0,103059:2,103060:2,103061:0,103062:0,103063:2,103064:2,103069:2,103070:0,103071:0,103072:2,103073:2,103086:0,103087:0,103088:2,103089:2,103094:1,103095:0,103096:2,103103:0,103104:2,103105:0,103106:2,103121:0,103122:2,103123:0,103124:0,103125:1,103126:1,103127:0,103128:0,103129:2,103130:2,103131:0,103132:0,103133:2,103134:2,103135:0,103136:0,103137:1,103138:1,103139:0,103140:2,103141:0,103142:2,103143:0,103144:2,103145:0,103146:1,103147:0,103148:0,103149:2,103150:2,103151:0,103152:2,103172:0,103173:2,103174:0,103175:0,103176:2,103177:2,103178:0,103179:0,103180:2,103181:2,103182:0,103183:0,103184:2,103185:2,103228:0,103229:0,103230:2,103231:2,103250:0,103251:2,103252:0,103253:2,103260:0,103261:0,103262:2,103263:2,103270:0,103271:0,103272:2,103273:2,103274:0,103275:0,103276:2,103277:2,103278:0,103279:0,103280:2,103281:2,103282:0,103283:0,103284:2,103285:2,103286:0,103287:2,103288:0,103289:2,103290:0,103291:2,103292:0,103293:0,103294:2,103295:2,103296:0,103297:0,103298:2,103299:2,103376:2,103377:0,103378:0,103379:2,103380:2,103393:0,103394:0,103395:2,103396:2,103472:0,103473:1,103474:0,103475:2,103482:0,103483:2,103484:0,103485:2,103500:0,103501:2,103502:0,103503:0,103504:1,103505:1,103506:0,103507:0,103508:2,103509:2,103510:0,103511:0,103512:2,103513:2,103514:0,103515:2,103516:0,103517:2,103518:0,103519:2,103520:0,103521:1,103522:0,103523:0,103524:2,103525:2,103526:0,103527:2,103561:2,103562:2,103563:0,103564:0,103565:2,103566:2,103567:0,103568:0,103569:2,103570:2,103584:0,103585:2,103586:0,103587:2,103588:1,103589:0,103590:2,103591:1,103592:0,103593:2,103594:1,103695:2};for(o$b=2e3;o$b<=2045;o$b++)r$b[o$b]=0;for(o$b=2056;o$b<=2065;o$b++)r$b[o$b]=0;for(o$b=2067;o$b<=2135;o$b++)r$b[o$b]=0;for(o$b=2137;o$b<=2154;o$b++)r$b[o$b]=0;for(o$b=2161;o$b<=2170;o$b++)r$b[o$b]=0;for(o$b=2172;o$b<=2193;o$b++)r$b[o$b]=0;for(o$b=2195;o$b<=2198;o$b++)r$b[o$b]=0;for(o$b=2200;o$b<=2203;o$b++)r$b[o$b]=0;for(o$b=2205;o$b<=2217;o$b++)r$b[o$b]=0;for(o$b=2222;o$b<=2224;o$b++)r$b[o$b]=1;for(o$b=2225;o$b<=2250;o$b++)r$b[o$b]=2;for(o$b=2251;o$b<=2253;o$b++)r$b[o$b]=1;for(o$b=2257;o$b<=2264;o$b++)r$b[o$b]=2;for(o$b=2274;o$b<=2279;o$b++)r$b[o$b]=2;for(o$b=2280;o$b<=2282;o$b++)r$b[o$b]=1;for(o$b=2283;o$b<=2289;o$b++)r$b[o$b]=2;for(o$b=2290;o$b<=2292;o$b++)r$b[o$b]=0;for(o$b=2308;o$b<=2313;o$b++)r$b[o$b]=0;for(o$b=2315;o$b<=2491;o$b++)r$b[o$b]=0;for(o$b=2494;o$b<=2866;o$b++)r$b[o$b]=0;for(o$b=2867;o$b<=2869;o$b++)r$b[o$b]=1;for(o$b=2870;o$b<=2888;o$b++)r$b[o$b]=2;for(o$b=2891;o$b<=2895;o$b++)r$b[o$b]=2;for(o$b=2896;o$b<=2898;o$b++)r$b[o$b]=1;for(o$b=2902;o$b<=2908;o$b++)r$b[o$b]=2;for(o$b=2915;o$b<=2920;o$b++)r$b[o$b]=2;for(o$b=2921;o$b<=2923;o$b++)r$b[o$b]=1;for(o$b=2924;o$b<=2930;o$b++)r$b[o$b]=2;for(o$b=2931;o$b<=2962;o$b++)r$b[o$b]=0;for(o$b=2964;o$b<=2968;o$b++)r$b[o$b]=2;for(o$b=2969;o$b<=2973;o$b++)r$b[o$b]=0;for(o$b=2975;o$b<=2991;o$b++)r$b[o$b]=0;for(o$b=2995;o$b<=3051;o$b++)r$b[o$b]=0;for(o$b=3054;o$b<=3079;o$b++)r$b[o$b]=0;for(o$b=3081;o$b<=3088;o$b++)r$b[o$b]=0;for(o$b=3092;o$b<=3101;o$b++)r$b[o$b]=0;for(o$b=3106;o$b<=3138;o$b++)r$b[o$b]=0;for(o$b=3146;o$b<=3151;o$b++)r$b[o$b]=0;for(o$b=3153;o$b<=3166;o$b++)r$b[o$b]=0;for(o$b=3168;o$b<=3172;o$b++)r$b[o$b]=0;for(o$b=3174;o$b<=3203;o$b++)r$b[o$b]=0;for(o$b=3294;o$b<=3358;o$b++)r$b[o$b]=0;for(o$b=3367;o$b<=3403;o$b++)r$b[o$b]=0;for(o$b=3408;o$b<=3416;o$b++)r$b[o$b]=0;for(o$b=3417;o$b<=3438;o$b++)r$b[o$b]=2;for(o$b=3441;o$b<=3446;o$b++)r$b[o$b]=2;for(o$b=3447;o$b<=3450;o$b++)r$b[o$b]=0;for(o$b=3451;o$b<=3459;o$b++)r$b[o$b]=2;for(o$b=3460;o$b<=3478;o$b++)r$b[o$b]=0;for(o$b=3554;o$b<=3559;o$b++)r$b[o$b]=0;for(o$b=3560;o$b<=3570;o$b++)r$b[o$b]=2;for(o$b=3571;o$b<=3581;o$b++)r$b[o$b]=0;for(o$b=3594;o$b<=3597;o$b++)r$b[o$b]=0;for(o$b=3601;o$b<=3604;o$b++)r$b[o$b]=0;for(o$b=3637;o$b<=3639;o$b++)r$b[o$b]=0;for(o$b=3665;o$b<=3667;o$b++)r$b[o$b]=0;for(o$b=3693;o$b<=3695;o$b++)r$b[o$b]=0;for(o$b=3701;o$b<=3727;o$b++)r$b[o$b]=0;for(o$b=3728;o$b<=3739;o$b++)r$b[o$b]=2;for(o$b=3740;o$b<=3751;o$b++)r$b[o$b]=0;for(o$b=3753;o$b<=3760;o$b++)r$b[o$b]=2;for(o$b=3761;o$b<=3773;o$b++)r$b[o$b]=0;for(o$b=3775;o$b<=3777;o$b++)r$b[o$b]=0;for(o$b=3779;o$b<=3781;o$b++)r$b[o$b]=0;for(o$b=3783;o$b<=3785;o$b++)r$b[o$b]=0;for(o$b=3788;o$b<=3791;o$b++)r$b[o$b]=0;for(o$b=3797;o$b<=3802;o$b++)r$b[o$b]=0;for(o$b=3814;o$b<=3816;o$b++)r$b[o$b]=0;for(o$b=3825;o$b<=3829;o$b++)r$b[o$b]=0;for(o$b=3832;o$b<=3841;o$b++)r$b[o$b]=0;for(o$b=3844;o$b<=3852;o$b++)r$b[o$b]=0;for(o$b=3873;o$b<=3885;o$b++)r$b[o$b]=0;for(o$b=3890;o$b<=3893;o$b++)r$b[o$b]=0;for(o$b=3907;o$b<=3912;o$b++)r$b[o$b]=0;for(o$b=3942;o$b<=3950;o$b++)r$b[o$b]=0;for(o$b=3968;o$b<=3970;o$b++)r$b[o$b]=0;for(o$b=3973;o$b<=3976;o$b++)r$b[o$b]=0;for(o$b=3986;o$b<=3989;o$b++)r$b[o$b]=0;for(o$b=3994;o$b<=3997;o$b++)r$b[o$b]=0;for(o$b=4048;o$b<=4051;o$b++)r$b[o$b]=0;for(o$b=4056;o$b<=4063;o$b++)r$b[o$b]=0;for(o$b=4093;o$b<=4096;o$b++)r$b[o$b]=0;for(o$b=4390;o$b<=4398;o$b++)r$b[o$b]=0;for(o$b=4399;o$b<=4413;o$b++)r$b[o$b]=2;for(o$b=4418;o$b<=4433;o$b++)r$b[o$b]=2;for(o$b=4455;o$b<=4457;o$b++)r$b[o$b]=2;for(o$b=4484;o$b<=4489;o$b++)r$b[o$b]=0;for(o$b=4491;o$b<=4554;o$b++)r$b[o$b]=0;for(o$b=4568;o$b<=4589;o$b++)r$b[o$b]=0;for(o$b=4652;o$b<=4656;o$b++)r$b[o$b]=0;for(o$b=4766;o$b<=4800;o$b++)r$b[o$b]=0;for(o$b=5014;o$b<=5016;o$b++)r$b[o$b]=0;for(o$b=5069;o$b<=5072;o$b++)r$b[o$b]=0;for(o$b=5105;o$b<=5130;o$b++)r$b[o$b]=0;for(o$b=5173;o$b<=5188;o$b++)r$b[o$b]=0;for(o$b=5253;o$b<=5259;o$b++)r$b[o$b]=0;for(o$b=5269;o$b<=5275;o$b++)r$b[o$b]=0;for(o$b=5292;o$b<=5311;o$b++)r$b[o$b]=0;for(o$b=5329;o$b<=5331;o$b++)r$b[o$b]=0;for(o$b=5343;o$b<=5349;o$b++)r$b[o$b]=0;for(o$b=5355;o$b<=5357;o$b++)r$b[o$b]=0;for(o$b=5387;o$b<=5389;o$b++)r$b[o$b]=0;for(o$b=5459;o$b<=5463;o$b++)r$b[o$b]=0;for(o$b=5479;o$b<=5482;o$b++)r$b[o$b]=0;for(o$b=5518;o$b<=5520;o$b++)r$b[o$b]=0;for(o$b=5530;o$b<=5539;o$b++)r$b[o$b]=0;for(o$b=5550;o$b<=5552;o$b++)r$b[o$b]=0;for(o$b=5562;o$b<=5583;o$b++)r$b[o$b]=0;for(o$b=5623;o$b<=5625;o$b++)r$b[o$b]=2;for(o$b=5631;o$b<=5639;o$b++)r$b[o$b]=0;for(o$b=5649;o$b<=5653;o$b++)r$b[o$b]=0;for(o$b=5663;o$b<=5680;o$b++)r$b[o$b]=0;for(o$b=5682;o$b<=5685;o$b++)r$b[o$b]=0;for(o$b=5875;o$b<=5877;o$b++)r$b[o$b]=0;for(o$b=5896;o$b<=5899;o$b++)r$b[o$b]=0;for(o$b=5921;o$b<=5940;o$b++)r$b[o$b]=0;for(o$b=6050;o$b<=6125;o$b++)r$b[o$b]=0;for(o$b=6244;o$b<=6275;o$b++)r$b[o$b]=0;for(o$b=6328;o$b<=6348;o$b++)r$b[o$b]=0;for(o$b=6350;o$b<=6356;o$b++)r$b[o$b]=0;for(o$b=6366;o$b<=6372;o$b++)r$b[o$b]=0;for(o$b=6381;o$b<=6387;o$b++)r$b[o$b]=0;for(o$b=6393;o$b<=6404;o$b++)r$b[o$b]=0;for(o$b=6480;o$b<=6483;o$b++)r$b[o$b]=0;for(o$b=6511;o$b<=6514;o$b++)r$b[o$b]=0;for(o$b=6579;o$b<=6581;o$b++)r$b[o$b]=0;for(o$b=6619;o$b<=6624;o$b++)r$b[o$b]=0;for(o$b=6625;o$b<=6627;o$b++)r$b[o$b]=2;for(o$b=6628;o$b<=6632;o$b++)r$b[o$b]=0;for(o$b=6634;o$b<=6637;o$b++)r$b[o$b]=0;for(o$b=6669;o$b<=6692;o$b++)r$b[o$b]=0;for(o$b=6707;o$b<=6709;o$b++)r$b[o$b]=0;for(o$b=6720;o$b<=6723;o$b++)r$b[o$b]=0;for(o$b=6732;o$b<=6738;o$b++)r$b[o$b]=0;for(o$b=6931;o$b<=6933;o$b++)r$b[o$b]=0;for(o$b=6956;o$b<=6959;o$b++)r$b[o$b]=0;for(o$b=7005;o$b<=7007;o$b++)r$b[o$b]=0;for(o$b=7057;o$b<=7070;o$b++)r$b[o$b]=2;for(o$b=7074;o$b<=7082;o$b++)r$b[o$b]=0;for(o$b=7109;o$b<=7118;o$b++)r$b[o$b]=0;for(o$b=7119;o$b<=7127;o$b++)r$b[o$b]=1;for(o$b=7374;o$b<=7376;o$b++)r$b[o$b]=0;for(o$b=7528;o$b<=7586;o$b++)r$b[o$b]=0;for(o$b=7587;o$b<=7645;o$b++)r$b[o$b]=2;for(o$b=7692;o$b<=7696;o$b++)r$b[o$b]=0;for(o$b=7755;o$b<=7787;o$b++)r$b[o$b]=0;for(o$b=7791;o$b<=7795;o$b++)r$b[o$b]=0;for(o$b=7799;o$b<=7801;o$b++)r$b[o$b]=0;for(o$b=7803;o$b<=7805;o$b++)r$b[o$b]=0;for(o$b=7825;o$b<=7831;o$b++)r$b[o$b]=0;for(o$b=7845;o$b<=7859;o$b++)r$b[o$b]=0;for(o$b=8013;o$b<=8032;o$b++)r$b[o$b]=0;for(o$b=8065;o$b<=8068;o$b++)r$b[o$b]=1;for(o$b=8518;o$b<=8529;o$b++)r$b[o$b]=2;for(o$b=8533;o$b<=8536;o$b++)r$b[o$b]=2;for(o$b=8538;o$b<=8540;o$b++)r$b[o$b]=2;for(o$b=8677;o$b<=8679;o$b++)r$b[o$b]=0;for(o$b=8836;o$b<=8840;o$b++)r$b[o$b]=0;for(o$b=8857;o$b<=8859;o$b++)r$b[o$b]=0;for(o$b=8908;o$b<=8910;o$b++)r$b[o$b]=0;for(o$b=9154;o$b<=9159;o$b++)r$b[o$b]=0;for(o$b=9205;o$b<=9218;o$b++)r$b[o$b]=0;for(o$b=9271;o$b<=9273;o$b++)r$b[o$b]=0;for(o$b=9295;o$b<=9297;o$b++)r$b[o$b]=0;for(o$b=9356;o$b<=9360;o$b++)r$b[o$b]=0;for(o$b=9404;o$b<=9407;o$b++)r$b[o$b]=0;for(o$b=9476;o$b<=9482;o$b++)r$b[o$b]=0;for(o$b=9487;o$b<=9494;o$b++)r$b[o$b]=0;for(o$b=9697;o$b<=9699;o$b++)r$b[o$b]=0;for(o$b=20002;o$b<=20032;o$b++)r$b[o$b]=0;for(o$b=20062;o$b<=20092;o$b++)r$b[o$b]=0;for(o$b=20135;o$b<=20138;o$b++)r$b[o$b]=0;for(o$b=20248;o$b<=20258;o$b++)r$b[o$b]=0;for(o$b=20348;o$b<=20358;o$b++)r$b[o$b]=0;for(o$b=20436;o$b<=20440;o$b++)r$b[o$b]=0;for(o$b=20822;o$b<=20824;o$b++)r$b[o$b]=0;for(o$b=20904;o$b<=20932;o$b++)r$b[o$b]=0;for(o$b=20934;o$b<=20936;o$b++)r$b[o$b]=0;for(o$b=21004;o$b<=21032;o$b++)r$b[o$b]=0;for(o$b=21035;o$b<=21037;o$b++)r$b[o$b]=0;for(o$b=21095;o$b<=21097;o$b++)r$b[o$b]=0;for(o$b=21148;o$b<=21150;o$b++)r$b[o$b]=0;for(o$b=21207;o$b<=21264;o$b++)r$b[o$b]=0;for(o$b=21307;o$b<=21364;o$b++)r$b[o$b]=0;for(o$b=21413;o$b<=21423;o$b++)r$b[o$b]=0;for(o$b=21453;o$b<=21463;o$b++)r$b[o$b]=0;for(o$b=21473;o$b<=21483;o$b++)r$b[o$b]=0;for(o$b=21780;o$b<=21782;o$b++)r$b[o$b]=0;for(o$b=21891;o$b<=21894;o$b++)r$b[o$b]=0;for(o$b=21896;o$b<=21899;o$b++)r$b[o$b]=0;for(o$b=22171;o$b<=22177;o$b++)r$b[o$b]=0;for(o$b=22181;o$b<=22187;o$b++)r$b[o$b]=0;for(o$b=22191;o$b<=22197;o$b++)r$b[o$b]=0;for(o$b=22234;o$b<=22236;o$b++)r$b[o$b]=0;for(o$b=22521;o$b<=22525;o$b++)r$b[o$b]=0;for(o$b=22991;o$b<=22994;o$b++)r$b[o$b]=0;for(o$b=23028;o$b<=23038;o$b++)r$b[o$b]=0;for(o$b=23830;o$b<=23853;o$b++)r$b[o$b]=0;for(o$b=23866;o$b<=23872;o$b++)r$b[o$b]=0;for(o$b=23877;o$b<=23884;o$b++)r$b[o$b]=0;for(o$b=23886;o$b<=23894;o$b++)r$b[o$b]=0;for(o$b=23946;o$b<=23948;o$b++)r$b[o$b]=0;for(o$b=24311;o$b<=24313;o$b++)r$b[o$b]=0;for(o$b=24342;o$b<=24347;o$b++)r$b[o$b]=0;for(o$b=24370;o$b<=24374;o$b++)r$b[o$b]=10;for(o$b=24375;o$b<=24381;o$b++)r$b[o$b]=0;for(o$b=24718;o$b<=24721;o$b++)r$b[o$b]=0;for(o$b=24817;o$b<=24821;o$b++)r$b[o$b]=0;for(o$b=24877;o$b<=24882;o$b++)r$b[o$b]=0;for(o$b=24891;o$b<=24893;o$b++)r$b[o$b]=0;for(o$b=25391;o$b<=25395;o$b++)r$b[o$b]=0;for(o$b=25828;o$b<=25838;o$b++)r$b[o$b]=0;for(o$b=26191;o$b<=26195;o$b++)r$b[o$b]=0;for(o$b=26391;o$b<=26393;o$b++)r$b[o$b]=0;for(o$b=26701;o$b<=26722;o$b++)r$b[o$b]=0;for(o$b=26729;o$b<=26799;o$b++)r$b[o$b]=2;for(o$b=26801;o$b<=26803;o$b++)r$b[o$b]=2;for(o$b=26811;o$b<=26813;o$b++)r$b[o$b]=2;for(o$b=26847;o$b<=26870;o$b++)r$b[o$b]=2;for(o$b=26891;o$b<=26899;o$b++)r$b[o$b]=0;for(o$b=26901;o$b<=26923;o$b++)r$b[o$b]=0;for(o$b=26929;o$b<=26946;o$b++)r$b[o$b]=0;for(o$b=26948;o$b<=26998;o$b++)r$b[o$b]=0;for(o$b=27037;o$b<=27040;o$b++)r$b[o$b]=0;for(o$b=27205;o$b<=27232;o$b++)r$b[o$b]=0;for(o$b=27258;o$b<=27260;o$b++)r$b[o$b]=0;for(o$b=27391;o$b<=27398;o$b++)r$b[o$b]=0;for(o$b=27561;o$b<=27564;o$b++)r$b[o$b]=0;for(o$b=27571;o$b<=27574;o$b++)r$b[o$b]=0;for(o$b=27581;o$b<=27584;o$b++)r$b[o$b]=0;for(o$b=27591;o$b<=27594;o$b++)r$b[o$b]=0;for(o$b=28191;o$b<=28193;o$b++)r$b[o$b]=0;for(o$b=28348;o$b<=28358;o$b++)r$b[o$b]=0;for(o$b=28402;o$b<=28432;o$b++)r$b[o$b]=0;for(o$b=28462;o$b<=28492;o$b++)r$b[o$b]=0;for(o$b=29118;o$b<=29122;o$b++)r$b[o$b]=0;for(o$b=29168;o$b<=29172;o$b++)r$b[o$b]=0;for(o$b=29177;o$b<=29185;o$b++)r$b[o$b]=0;for(o$b=29187;o$b<=29195;o$b++)r$b[o$b]=0;for(o$b=29900;o$b<=29903;o$b++)r$b[o$b]=0;for(o$b=30161;o$b<=30179;o$b++)r$b[o$b]=0;for(o$b=30491;o$b<=30494;o$b++)r$b[o$b]=0;for(o$b=30729;o$b<=30732;o$b++)r$b[o$b]=0;for(o$b=31251;o$b<=31259;o$b++)r$b[o$b]=0;for(o$b=31265;o$b<=31268;o$b++)r$b[o$b]=0;for(o$b=31275;o$b<=31279;o$b++)r$b[o$b]=0;for(o$b=31281;o$b<=31297;o$b++)r$b[o$b]=0;for(o$b=31461;o$b<=31469;o$b++)r$b[o$b]=0;for(o$b=31491;o$b<=31495;o$b++)r$b[o$b]=0;for(o$b=31917;o$b<=31922;o$b++)r$b[o$b]=0;for(o$b=31965;o$b<=32e3;o$b++)r$b[o$b]=0;for(o$b=32001;o$b<=32003;o$b++)r$b[o$b]=2;for(o$b=32005;o$b<=32031;o$b++)r$b[o$b]=2;for(o$b=32033;o$b<=32060;o$b++)r$b[o$b]=2;for(o$b=32064;o$b<=32067;o$b++)r$b[o$b]=2;for(o$b=32074;o$b<=32077;o$b++)r$b[o$b]=2;for(o$b=32081;o$b<=32086;o$b++)r$b[o$b]=0;for(o$b=32107;o$b<=32130;o$b++)r$b[o$b]=0;for(o$b=32133;o$b<=32158;o$b++)r$b[o$b]=0;for(o$b=32164;o$b<=32167;o$b++)r$b[o$b]=2;for(o$b=32180;o$b<=32199;o$b++)r$b[o$b]=0;for(o$b=32201;o$b<=32260;o$b++)r$b[o$b]=0;for(o$b=32301;o$b<=32360;o$b++)r$b[o$b]=0;for(o$b=32601;o$b<=32662;o$b++)r$b[o$b]=0;for(o$b=32664;o$b<=32667;o$b++)r$b[o$b]=2;for(o$b=32701;o$b<=32761;o$b++)r$b[o$b]=0;for(o$b=53001;o$b<=53004;o$b++)r$b[o$b]=0;for(o$b=53008;o$b<=53019;o$b++)r$b[o$b]=0;for(o$b=53021;o$b<=53032;o$b++)r$b[o$b]=0;for(o$b=53034;o$b<=53037;o$b++)r$b[o$b]=0;for(o$b=53042;o$b<=53046;o$b++)r$b[o$b]=0;for(o$b=53074;o$b<=53080;o$b++)r$b[o$b]=0;for(o$b=54001;o$b<=54004;o$b++)r$b[o$b]=0;for(o$b=54008;o$b<=54019;o$b++)r$b[o$b]=0;for(o$b=54021;o$b<=54032;o$b++)r$b[o$b]=0;for(o$b=54034;o$b<=54037;o$b++)r$b[o$b]=0;for(o$b=54042;o$b<=54046;o$b++)r$b[o$b]=0;for(o$b=54048;o$b<=54053;o$b++)r$b[o$b]=0;for(o$b=54074;o$b<=54080;o$b++)r$b[o$b]=0;for(o$b=54098;o$b<=54101;o$b++)r$b[o$b]=0;for(o$b=102001;o$b<=102040;o$b++)r$b[o$b]=0;for(o$b=102042;o$b<=102063;o$b++)r$b[o$b]=0;for(o$b=102065;o$b<=102067;o$b++)r$b[o$b]=0;for(o$b=102070;o$b<=102117;o$b++)r$b[o$b]=0;for(o$b=102122;o$b<=102216;o$b++)r$b[o$b]=0;for(o$b=102221;o$b<=102377;o$b++)r$b[o$b]=0;for(o$b=102382;o$b<=102388;o$b++)r$b[o$b]=0;for(o$b=102389;o$b<=102398;o$b++)r$b[o$b]=2;for(o$b=102399;o$b<=102444;o$b++)r$b[o$b]=0;for(o$b=102445;o$b<=102447;o$b++)r$b[o$b]=2;for(o$b=102448;o$b<=102458;o$b++)r$b[o$b]=0;for(o$b=102459;o$b<=102468;o$b++)r$b[o$b]=2;for(o$b=102469;o$b<=102499;o$b++)r$b[o$b]=0;for(o$b=102500;o$b<=102519;o$b++)r$b[o$b]=1;for(o$b=102520;o$b<=102524;o$b++)r$b[o$b]=0;for(o$b=102525;o$b<=102529;o$b++)r$b[o$b]=2;for(o$b=102530;o$b<=102588;o$b++)r$b[o$b]=0;for(o$b=102590;o$b<=102598;o$b++)r$b[o$b]=0;for(o$b=102601;o$b<=102603;o$b++)r$b[o$b]=0;for(o$b=102605;o$b<=102628;o$b++)r$b[o$b]=0;for(o$b=102629;o$b<=102646;o$b++)r$b[o$b]=2;for(o$b=102648;o$b<=102700;o$b++)r$b[o$b]=2;for(o$b=102701;o$b<=102703;o$b++)r$b[o$b]=0;for(o$b=102707;o$b<=102730;o$b++)r$b[o$b]=2;for(o$b=102733;o$b<=102758;o$b++)r$b[o$b]=2;for(o$b=102767;o$b<=102900;o$b++)r$b[o$b]=0;for(o$b=102901;o$b<=102933;o$b++)r$b[o$b]=2;for(o$b=102934;o$b<=102950;o$b++)r$b[o$b]=13;for(o$b=102951;o$b<=102960;o$b++)r$b[o$b]=0;for(o$b=102965;o$b<=102969;o$b++)r$b[o$b]=0;for(o$b=102971;o$b<=102973;o$b++)r$b[o$b]=0;for(o$b=102975;o$b<=102989;o$b++)r$b[o$b]=0;for(o$b=102990;o$b<=102992;o$b++)r$b[o$b]=1;for(o$b=102997;o$b<=103002;o$b++)r$b[o$b]=0;for(o$b=103003;o$b<=103008;o$b++)r$b[o$b]=2;for(o$b=103009;o$b<=103011;o$b++)r$b[o$b]=0;for(o$b=103012;o$b<=103014;o$b++)r$b[o$b]=2;for(o$b=103019;o$b<=103021;o$b++)r$b[o$b]=0;for(o$b=103022;o$b<=103024;o$b++)r$b[o$b]=2;for(o$b=103029;o$b<=103031;o$b++)r$b[o$b]=0;for(o$b=103032;o$b<=103034;o$b++)r$b[o$b]=2;for(o$b=103065;o$b<=103068;o$b++)r$b[o$b]=0;for(o$b=103074;o$b<=103076;o$b++)r$b[o$b]=0;for(o$b=103077;o$b<=103079;o$b++)r$b[o$b]=1;for(o$b=103080;o$b<=103082;o$b++)r$b[o$b]=0;for(o$b=103083;o$b<=103085;o$b++)r$b[o$b]=2;for(o$b=103090;o$b<=103093;o$b++)r$b[o$b]=0;for(o$b=103097;o$b<=103099;o$b++)r$b[o$b]=0;for(o$b=103100;o$b<=103102;o$b++)r$b[o$b]=2;for(o$b=103107;o$b<=103109;o$b++)r$b[o$b]=0;for(o$b=103110;o$b<=103112;o$b++)r$b[o$b]=2;for(o$b=103113;o$b<=103116;o$b++)r$b[o$b]=0;for(o$b=103117;o$b<=103120;o$b++)r$b[o$b]=2;for(o$b=103153;o$b<=103157;o$b++)r$b[o$b]=0;for(o$b=103158;o$b<=103162;o$b++)r$b[o$b]=2;for(o$b=103163;o$b<=103165;o$b++)r$b[o$b]=0;for(o$b=103166;o$b<=103168;o$b++)r$b[o$b]=1;for(o$b=103169;o$b<=103171;o$b++)r$b[o$b]=2;for(o$b=103186;o$b<=103188;o$b++)r$b[o$b]=0;for(o$b=103189;o$b<=103191;o$b++)r$b[o$b]=2;for(o$b=103192;o$b<=103195;o$b++)r$b[o$b]=0;for(o$b=103196;o$b<=103199;o$b++)r$b[o$b]=2;for(o$b=103200;o$b<=103224;o$b++)r$b[o$b]=0;for(o$b=103225;o$b<=103227;o$b++)r$b[o$b]=1;for(o$b=103232;o$b<=103237;o$b++)r$b[o$b]=0;for(o$b=103238;o$b<=103243;o$b++)r$b[o$b]=2;for(o$b=103244;o$b<=103246;o$b++)r$b[o$b]=0;for(o$b=103247;o$b<=103249;o$b++)r$b[o$b]=2;for(o$b=103254;o$b<=103256;o$b++)r$b[o$b]=0;for(o$b=103257;o$b<=103259;o$b++)r$b[o$b]=2;for(o$b=103264;o$b<=103266;o$b++)r$b[o$b]=0;for(o$b=103267;o$b<=103269;o$b++)r$b[o$b]=2;for(o$b=103300;o$b<=103375;o$b++)r$b[o$b]=0;for(o$b=103381;o$b<=103383;o$b++)r$b[o$b]=0;for(o$b=103384;o$b<=103386;o$b++)r$b[o$b]=1;for(o$b=103387;o$b<=103389;o$b++)r$b[o$b]=0;for(o$b=103390;o$b<=103392;o$b++)r$b[o$b]=2;for(o$b=103397;o$b<=103399;o$b++)r$b[o$b]=0;for(o$b=103400;o$b<=103471;o$b++)r$b[o$b]=2;for(o$b=103476;o$b<=103478;o$b++)r$b[o$b]=0;for(o$b=103479;o$b<=103481;o$b++)r$b[o$b]=2;for(o$b=103486;o$b<=103488;o$b++)r$b[o$b]=0;for(o$b=103489;o$b<=103491;o$b++)r$b[o$b]=2;for(o$b=103492;o$b<=103495;o$b++)r$b[o$b]=0;for(o$b=103496;o$b<=103499;o$b++)r$b[o$b]=2;for(o$b=103528;o$b<=103543;o$b++)r$b[o$b]=0;for(o$b=103544;o$b<=103548;o$b++)r$b[o$b]=2;for(o$b=103549;o$b<=103551;o$b++)r$b[o$b]=0;for(o$b=103552;o$b<=103554;o$b++)r$b[o$b]=1;for(o$b=103555;o$b<=103557;o$b++)r$b[o$b]=2;for(o$b=103558;o$b<=103560;o$b++)r$b[o$b]=0;for(o$b=103571;o$b<=103573;o$b++)r$b[o$b]=0;for(o$b=103574;o$b<=103576;o$b++)r$b[o$b]=2;for(o$b=103577;o$b<=103580;o$b++)r$b[o$b]=0;for(o$b=103581;o$b<=103583;o$b++)r$b[o$b]=2;for(o$b=103595;o$b<=103694;o$b++)r$b[o$b]=0;for(o$b=103696;o$b<=103699;o$b++)r$b[o$b]=0;for(o$b=103700;o$b<=103793;o$b++)r$b[o$b]=2;for(o$b=103794;o$b<=103872;o$b++)r$b[o$b]=0;for(o$b=103900;o$b<=103971;o$b++)r$b[o$b]=2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t$6={102113:!0,102100:!0,3857:!0,3785:!0},_$5={102113:!0,102100:!0,3857:!0,3785:!0,4326:!0},l$9='PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',M$7=[-20037508.342788905,20037508.342788905],S$4=[-20037508.342787,20037508.342787],d$7={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:M$7,origin:S$4,dx:1e-5},102100:{wkTemplate:l$9,valid:M$7,origin:S$4,dx:1e-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:M$7,origin:S$4,dx:1e-5},3857:{wkTemplate:l$9,valid:M$7,origin:S$4,dx:1e-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104971:{wkTemplate:'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104905:{wkTemplate:'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5}};function E$5(e,i){return !t$q(e)&&!t$q(i)&&(e===i||(null!=e.wkid||null!=i.wkid?e.wkid===i.wkid||k$5(e)&&k$5(i)||null!=i.latestWkid&&e.wkid===i.latestWkid||null!=e.latestWkid&&i.wkid===e.latestWkid:!(!e.wkt||!i.wkt)&&e.wkt.toUpperCase()===i.wkt.toUpperCase()))}function R$5(e){return I$3(e)&&e.wkid?d$7[e.wkid]:null}function o$a(e){return !!I$3(e)&&(e.wkid?null==r$b[e.wkid]:!!e.wkt&&!!/^\s*GEOGCS/i.test(e.wkt))}function G$5(e){return I$3(e)&&4326===e.wkid}function k$5(e){return I$3(e)&&null!=e.wkid&&!0===t$6[e.wkid]}function T$3(e){return I$3(e)&&32662===e.wkid}function w$5(e){return e===S$5.GCSMARS2000||e===S$5.GCSMARS2000_SPHERE}function P$3(e){return I$3(e)&&null!=e.wkid&&w$5(e.wkid)}function C$3(e){return e===S$5.GCSMOON2000}function s$d(e){return I$3(e)&&null!=e.wkid&&C$3(e.wkid)}function p$8(e){return I$3(e)&&null!=e.wkid&&!0===_$5[e.wkid]}function I$3(r){return r$s(r)&&(null!=r.wkid&&r.wkid>=2e3||null!=r.wkt)}const c$b={wkid:4326,wkt:r$o(d$7[4326].wkTemplate,{Central_Meridian:"0.0"})},D$4={wkid:102100,latestWkid:3857},O$4={wkid:32662};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var y$6;let S$3=y$6=class extends l$a{constructor(e){super(e),this.latestWkid=null,this.wkid=null,this.wkt=null,this.vcsWkid=null,this.latestVcsWkid=null,this.imageCoordinateSystem=null;}static fromJSON(e){if(!e)return null;if(e.wkid){if(102100===e.wkid)return y$6.WebMercator;if(4326===e.wkid)return y$6.WGS84}const t=new y$6;return t.read(e),t}normalizeCtorArgs(e){if(e&&"object"==typeof e)return e;return {["string"==typeof e?"wkt":"wkid"]:e}}get isWGS84(){return G$5(this)}get isWebMercator(){return k$5(this)}get isGeographic(){return o$a(this)}get isWrappable(){return p$8(this)}writeWkt(e,t){this.wkid||(t.wkt=e);}clone(){if(this===y$6.WGS84)return y$6.WGS84;if(this===y$6.WebMercator)return y$6.WebMercator;const e=new y$6;return null!=this.wkid?(e.wkid=this.wkid,null!=this.latestWkid&&(e.latestWkid=this.latestWkid),null!=this.vcsWkid&&(e.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(e.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(e.wkt=this.wkt),this.imageCoordinateSystem&&(e.imageCoordinateSystem=m$k(this.imageCoordinateSystem)),e}equals(e){if(null==e)return !1;if(this.imageCoordinateSystem||e.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==e.imageCoordinateSystem)return !1;const{id:t,referenceServiceName:r}=e.imageCoordinateSystem,{geodataXform:i}=e.imageCoordinateSystem,o=this.imageCoordinateSystem;return null==t||i?JSON.stringify(o)===JSON.stringify(e.imageCoordinateSystem):r?o.id===t&&o.referenceServiceName===r:o.id===t}return E$5(this,e)}toJSON(e){return this.write(void 0,e)}};S$3.GCS_NAD_1927=null,S$3.WGS84=null,S$3.WebMercator=null,S$3.PlateCarree=null,e$p([d$e({readOnly:!0})],S$3.prototype,"isWGS84",null),e$p([d$e({readOnly:!0})],S$3.prototype,"isWebMercator",null),e$p([d$e({readOnly:!0})],S$3.prototype,"isGeographic",null),e$p([d$e({readOnly:!0})],S$3.prototype,"isWrappable",null),e$p([d$e({type:S$7,json:{write:!0}})],S$3.prototype,"latestWkid",void 0),e$p([d$e({type:S$7,json:{write:!0,origins:{"web-scene":{write:{overridePolicy(){return {isRequired:null===this.wkt}}}}}}})],S$3.prototype,"wkid",void 0),e$p([d$e({type:String,json:{origins:{"web-scene":{write:{overridePolicy(){return {isRequired:null===this.wkid}}}}}}})],S$3.prototype,"wkt",void 0),e$p([r$g("wkt"),r$g("web-scene","wkt")],S$3.prototype,"writeWkt",null),e$p([d$e({type:S$7,json:{write:!0}})],S$3.prototype,"vcsWkid",void 0),e$p([d$e({type:S$7,json:{write:!0}})],S$3.prototype,"latestVcsWkid",void 0),e$p([d$e()],S$3.prototype,"imageCoordinateSystem",void 0),S$3=y$6=e$p([n$a("esri.geometry.SpatialReference")],S$3),S$3.prototype.toJSON.isDefaultToJSON=!0,S$3.GCS_NAD_1927=new S$3({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),S$3.WGS84=new S$3(c$b),S$3.WebMercator=new S$3(D$4),S$3.PlateCarree=new S$3(O$4),Object.freeze&&(Object.freeze(S$3.GCS_NAD_1927),Object.freeze(S$3.WGS84),Object.freeze(S$3.WebMercator));const k$4=S$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let c$a=class extends l$a{constructor(...e){super(...e),this.type=null,this.hasM=!1,this.hasZ=!1,this.spatialReference=k$4.WGS84;}get cache(){return this.commitProperty("spatialReference"),{}}get extent(){return null}readSpatialReference(e,r){if(e instanceof k$4)return e;if(null!=e){const t=new k$4;return t.read(e,r),t}return e}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}clearCache(){this.notifyChange("cache");}getCacheValue(e){return this.cache[e]}setCacheValue(e,r){this.cache[e]=r;}};e$p([d$e()],c$a.prototype,"type",void 0),e$p([d$e({readOnly:!0})],c$a.prototype,"cache",null),e$p([d$e({readOnly:!0})],c$a.prototype,"extent",null),e$p([d$e({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c$a.prototype,"hasM",void 0),e$p([d$e({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c$a.prototype,"hasZ",void 0),e$p([d$e({type:k$4,json:{write:!0}})],c$a.prototype,"spatialReference",void 0),e$p([o$k("spatialReference")],c$a.prototype,"readSpatialReference",null),c$a=e$p([n$a("esri.geometry.Geometry")],c$a);const p$7=c$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n$5(n,r,u,t){var l;(n.x=n.x+r,n.y=n.y+u,null!=t)&&(n.z=(null!=(l=n.z)?l:0)+t);return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t$5(t,n){const s=t.x-n.x,r=t.y-n.y,a=t.hasZ&&n.hasZ?t.z-n.z:0;return Math.sqrt(s*s+r*r+a*a)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class i$7{constructor(i,s,t,e){this.semiMajorAxis=i,this.flattening=s,this.outerAtmosphereRimWidth=t;const h=1-this.flattening;this.semiMinorAxis=this.semiMajorAxis*h,this.halfSemiMajorAxis=this.semiMajorAxis/2,this.halfCircumference=Math.PI*this.semiMajorAxis,this.metersPerDegree=this.halfCircumference/180,this.inverseFlattening=1/(1-this.flattening)-1,this.eccentricitySquared=e||2*this.flattening-this.flattening*this.flattening,this.meanRadiusSemiAxes=(2*this.semiMajorAxis+this.semiMinorAxis)/3;}get radius(){return this.semiMajorAxis}}const s$c=new i$7(6378137,1/298.257223563,3e5,.006694379990137799),t$4=new i$7(3396190,1/169.8944472236118,23e4),e$a=new i$7(1737400,0,0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o$9=57.29577951308232,u$c=.017453292519943;function l$8(n){return n*o$9}function p$6(n){return n*u$c}function h$9(n){return null!=n.wkid||null!=n.wkt}const m$8=[0,0];function x$8(n,t,e,i,r){const s=n,a=r;if(a.spatialReference=e,"x"in s&&"x"in a)[a.x,a.y]=t(s.x,s.y,m$8,i);else if("xmin"in s&&"xmin"in a)[a.xmin,a.ymin]=t(s.xmin,s.ymin,m$8,i),[a.xmax,a.ymax]=t(s.xmax,s.ymax,m$8,i);else if("paths"in s&&"paths"in a||"rings"in s&&"rings"in a){const n="paths"in s?s.paths:s.rings,e=[];let r;for(let s=0;s<n.length;s++){const a=n[s];r=[],e.push(r);for(let n=0;n<a.length;n++)r.push(t(a[n][0],a[n][1],[0,0],i)),a[n].length>2&&r[n].push(a[n][2]),a[n].length>3&&r[n].push(a[n][3]);}"paths"in a?a.paths=e:a.rings=e;}else if("points"in s&&"points"in a){const n=s.points,e=[];for(let r=0;r<n.length;r++)e[r]=t(n[r][0],n[r][1],[0,0],i),n[r].length>2&&e[r].push(n[r][2]),n[r].length>3&&e[r].push(n[r][3]);a.points=e;}return r}function g$6(n,t){const e=n&&(h$9(n)?n:n.spatialReference),i=t&&(h$9(t)?t:t.spatialReference);return !(n&&"type"in n&&"mesh"===n.type||t&&"type"in t&&"mesh"===t.type||!e||!i)&&(!!E$5(i,e)||(k$5(i)&&G$5(e)||k$5(e)&&G$5(i)))}function M$6(i,o){if(t$q(i))return null;const u=i.spatialReference,l=o&&(h$9(o)?o:o.spatialReference);return g$6(u,l)?E$5(u,l)?m$k(i):k$5(l)?x$8(i,y$5,k$4.WebMercator,!1,m$k(i)):G$5(l)?x$8(i,d$6,k$4.WGS84,!1,m$k(i)):null:null}function y$5(n,t,e=[0,0]){t>89.99999?t=89.99999:t<-89.99999&&(t=-89.99999);const r=p$6(t);return e[0]=p$6(n)*s$c.radius,e[1]=s$c.halfSemiMajorAxis*Math.log((1+Math.sin(r))/(1-Math.sin(r))),e}function d$6(n,t,e=[0,0],r=!1){const s=l$8(n/s$c.radius);return e[0]=r?s:s-360*Math.floor((s+180)/360),e[1]=l$8(Math.PI/2-2*Math.atan(Math.exp(-t/s$c.radius))),e}function R$4(t,i=!1,r=m$k(t)){return x$8(t,y$5,k$4.WebMercator,i,r)}function j$5(t,i=!1,r=m$k(t)){return x$8(t,d$6,k$4.WGS84,i,r)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var f$c;const g$5=[0,0];function x$7(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}const w$4=s$x.getLogger("esri.geometry.Point");let b$4=f$c=class extends p$7{constructor(...e){super(...e),this.x=0,this.y=0,this.z=void 0,this.m=void 0,this.type="point";}static copy(e,t){t._set("x",e._get("x")),t._set("y",e._get("y")),t._set("z",e._get("z")),t._set("m",e._get("m"));const r=e._get("spatialReference");t._set("spatialReference",Object.isFrozen(r)?r:r.clone());}normalizeCtorArgs(e,t,r,s,i){let o;if(Array.isArray(e))o=e,i=t,e=o[0],t=o[1],r=o[2],s=o[3];else if(e&&"object"==typeof e){if(o=e,e=null!=o.x?o.x:o.longitude,t=null!=o.y?o.y:o.latitude,r=o.z,s=o.m,(i=o.spatialReference)&&"esri.geometry.SpatialReference"!==i.declaredClass&&(i=new k$4(i)),null!=o.longitude||null!=o.latitude)if(null==o.longitude)w$4.warn(".longitude=","Latitude was defined without longitude");else if(null==o.latitude)w$4.warn(".latitude=","Longitude was defined without latitude");else if(!o.declaredClass&&i&&i.isWebMercator){const r=y$5(o.longitude,o.latitude,g$5);e=r[0],t=r[1];}}else x$7(r)?(i=r,r=null):x$7(s)&&(i=s,s=null);const a={x:e,y:t};return null==a.x&&null!=a.y?w$4.warn(".y=","Y coordinate was defined without an X coordinate"):null==a.y&&null!=a.x&&w$4.warn(".x=","X coordinate was defined without a Y coordinate"),null!=i&&(a.spatialReference=i),null!=r&&(a.z=r),null!=s&&(a.m=s),a}get cache(){return this.commitProperty("x"),this.commitProperty("y"),this.commitProperty("z"),this.commitProperty("m"),this.commitProperty("spatialReference"),{}}get hasM(){return void 0!==this.m}set hasM(e){e!==(void 0!==this._get("m"))&&(this._set("m",e?0:void 0),this._set("hasM",e));}get hasZ(){return void 0!==this.z}set hasZ(e){e!==(void 0!==this._get("z"))&&(this._set("z",e?0:void 0),this._set("hasZ",e));}get latitude(){const{spatialReference:e,x:t,y:r}=this;if(e){if(e.isWebMercator)return d$6(t,r,g$5)[1];if(e.isGeographic)return r}return null}set latitude(e){const{spatialReference:t,x:r}=this;t&&(t.isWebMercator?this._set("y",y$5(r,e,g$5)[1]):t.isGeographic&&this._set("y",e),this._set("latitude",e));}get longitude(){const{x:e,y:t,spatialReference:r}=this;if(r){if(r.isWebMercator)return d$6(e,t,g$5)[0];if(r.isGeographic)return e}return null}set longitude(e){const{y:t,spatialReference:r}=this;r&&(r.isWebMercator?this._set("x",y$5(e,t,g$5)[0]):r.isGeographic&&this._set("x",e),this._set("longitude",e));}writeX(e,t,r){t[r]=isNaN(e)?"NaN":e;}readX(e){return "string"==typeof e?NaN:e}clone(){const e=new f$c;return e.x=this.x,e.y=this.y,e.z=this.z,e.m=this.m,e.spatialReference=this.spatialReference,e}copy(e){return f$c.copy(e,this),this}equals(e){if(t$q(e))return !1;const{x:t,y:s,z:i,m:o,spatialReference:a}=this,{z:n,m:l}=e;let{x:c,y:p,spatialReference:u}=e;if(!a.equals(u))if(a.isWebMercator&&u.isWGS84)[c,p]=y$5(c,p),u=a;else {if(!a.isWGS84||!u.isWebMercator)return !1;[c,p]=d$6(c,p),u=a;}return t===c&&s===p&&i===n&&o===l&&a.wkid===u.wkid}offset(e,t,r){return n$5(this,e,t,r)}normalize(){if(!this.spatialReference)return this;const e=R$5(this.spatialReference);if(!e)return this;let t=this.x;const[r,s]=e.valid,i=2*s;let o;return t>s?(o=Math.ceil(Math.abs(t-s)/i),t-=o*i):t<r&&(o=Math.ceil(Math.abs(t-r)/i),t+=o*i),this._set("x",t),this}distance(e){return t$5(this,e)}toArray(){const e=this.hasZ,t=this.hasM;return e&&t?[this.x,this.y,this.z,this.m]:e?[this.x,this.y,this.z]:t?[this.x,this.y,this.m]:[this.x,this.y]}toJSON(e){return this.write({},e)}};e$p([d$e({readOnly:!0})],b$4.prototype,"cache",null),e$p([d$e({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],b$4.prototype,"hasM",null),e$p([d$e({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],b$4.prototype,"hasZ",null),e$p([d$e({type:Number})],b$4.prototype,"latitude",null),e$p([d$e({type:Number})],b$4.prototype,"longitude",null),e$p([d$e({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),c$l((e=>isNaN(e)?e:a$f(e)))],b$4.prototype,"x",void 0),e$p([r$g("x")],b$4.prototype,"writeX",null),e$p([o$k("x")],b$4.prototype,"readX",null),e$p([d$e({type:Number,json:{write:!0}})],b$4.prototype,"y",void 0),e$p([d$e({type:Number,json:{write:{overridePolicy(){return {enabled:this.hasZ}}}}})],b$4.prototype,"z",void 0),e$p([d$e({type:Number,json:{write:{overridePolicy(){return {enabled:this.hasM}}}}})],b$4.prototype,"m",void 0),b$4=f$c=e$p([n$a("esri.geometry.Point")],b$4),b$4.prototype.toJSON.isDefaultToJSON=!0;const j$4=b$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n$4(){return [0,0,0]}function t$3(n){return [n[0],n[1],n[2]]}function r$a(n,t,r){return [n,t,r]}function e$9(t){const r=n$4(),e=Math.min(3,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u$b(n,t){return new Float64Array(n,t,3)}function a$6(){return n$4()}function o$8(){return r$a(1,1,1)}function s$b(){return r$a(1,0,0)}function c$9(){return r$a(0,1,0)}function i$6(){return r$a(0,0,1)}const f$b=a$6(),l$7=o$8(),_$4=s$b(),N$3=c$9(),O$3=i$6();Object.freeze({__proto__:null,create:n$4,clone:t$3,fromValues:r$a,fromArray:e$9,createView:u$b,zeros:a$6,ones:o$8,unitX:s$b,unitY:c$9,unitZ:i$6,ZEROS:f$b,ONES:l$7,UNIT_X:_$4,UNIT_Y:N$3,UNIT_Z:O$3});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a$5=1e-6,t$2=Math.random,e$8=Math.PI/180,n$3=180/Math.PI;function s$a(a){return a*e$8}function o$7(a){return a*n$3}function r$9(t,e){return Math.abs(t-e)<=a$5*Math.max(1,Math.abs(t),Math.abs(e))}Object.freeze({__proto__:null,EPSILON:a$5,RANDOM:t$2,toRadian:s$a,toDegree:o$7,equals:r$9});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function s$9(t){const n=t[0],a=t[1],s=t[2];return Math.sqrt(n*n+a*a+s*s)}function r$8(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function o$6(t,n,a,s){return t[0]=n,t[1]=a,t[2]=s,t}function u$a(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t}function c$8(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function e$7(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function i$5(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function h$8(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function M$5(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function f$a(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t}function l$6(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t}function m$7(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function d$5(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t}function b$3(t,n,a,s){return t[0]=n[0]+a[0]*s,t[1]=n[1]+a[1]*s,t[2]=n[2]+a[2]*s,t}function q$3(t,n){const a=n[0]-t[0],s=n[1]-t[1],r=n[2]-t[2];return Math.sqrt(a*a+s*s+r*r)}function x$6(t,n){const a=n[0]-t[0],s=n[1]-t[1],r=n[2]-t[2];return a*a+s*s+r*r}function p$5(t){const n=t[0],a=t[1],s=t[2];return n*n+a*a+s*s}function v$4(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function g$4(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function j$3(t,n){const a=n[0],s=n[1],r=n[2];let o=a*a+s*s+r*r;return o>0&&(o=1/Math.sqrt(o),t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o),t}function z$4(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function _$3(t,n,a){const s=n[0],r=n[1],o=n[2],u=a[0],c=a[1],e=a[2];return t[0]=r*e-o*c,t[1]=o*u-s*e,t[2]=s*c-r*u,t}function y$4(t,n,a,s){const r=n[0],o=n[1],u=n[2];return t[0]=r+s*(a[0]-r),t[1]=o+s*(a[1]-o),t[2]=u+s*(a[2]-u),t}function A$3(t,n,a,s,r,o){const u=o*o,c=u*(2*o-3)+1,e=u*(o-2)+o,i=u*(o-1),h=u*(3-2*o);return t[0]=n[0]*c+a[0]*e+s[0]*i+r[0]*h,t[1]=n[1]*c+a[1]*e+s[1]*i+r[1]*h,t[2]=n[2]*c+a[2]*e+s[2]*i+r[2]*h,t}function D$3(t,n,a,s,r,o){const u=1-o,c=u*u,e=o*o,i=c*u,h=3*o*c,M=3*e*u,f=e*o;return t[0]=n[0]*i+a[0]*h+s[0]*M+r[0]*f,t[1]=n[1]*i+a[1]*h+s[1]*M+r[1]*f,t[2]=n[2]*i+a[2]*h+s[2]*M+r[2]*f,t}function E$4(t,n){n=n||1;const s=2*t$2()*Math.PI,r=2*t$2()-1,o=Math.sqrt(1-r*r)*n;return t[0]=Math.cos(s)*o,t[1]=Math.sin(s)*o,t[2]=r*n,t}function I$2(t,n,a){const s=n[0],r=n[1],o=n[2];return t[0]=a[0]*s+a[4]*r+a[8]*o+a[12],t[1]=a[1]*s+a[5]*r+a[9]*o+a[13],t[2]=a[2]*s+a[6]*r+a[10]*o+a[14],t}function L$2(t,n,a){const s=n[0],r=n[1],o=n[2];return t[0]=s*a[0]+r*a[3]+o*a[6],t[1]=s*a[1]+r*a[4]+o*a[7],t[2]=s*a[2]+r*a[5]+o*a[8],t}function P$2(t,n,a){const s=a[0],r=a[1],o=a[2],u=a[3],c=n[0],e=n[1],i=n[2];let h=r*i-o*e,M=o*c-s*i,f=s*e-r*c,l=r*f-o*M,m=o*h-s*f,d=s*M-r*h;const b=2*u;return h*=b,M*=b,f*=b,l*=2,m*=2,d*=2,t[0]=c+h+l,t[1]=e+M+m,t[2]=i+f+d,t}function O$2(t,n,a,s){const r=[],o=[];return r[0]=n[0]-a[0],r[1]=n[1]-a[1],r[2]=n[2]-a[2],o[0]=r[0],o[1]=r[1]*Math.cos(s)-r[2]*Math.sin(s),o[2]=r[1]*Math.sin(s)+r[2]*Math.cos(s),t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function Q$3(t,n,a,s){const r=[],o=[];return r[0]=n[0]-a[0],r[1]=n[1]-a[1],r[2]=n[2]-a[2],o[0]=r[2]*Math.sin(s)+r[0]*Math.cos(s),o[1]=r[1],o[2]=r[2]*Math.cos(s)-r[0]*Math.sin(s),t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function R$3(t,n,a,s){const r=[],o=[];return r[0]=n[0]-a[0],r[1]=n[1]-a[1],r[2]=n[2]-a[2],o[0]=r[0]*Math.cos(s)-r[1]*Math.sin(s),o[1]=r[0]*Math.sin(s)+r[1]*Math.cos(s),o[2]=r[2],t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function k$3(t,n){r$8(w$3,t),r$8(B$2,n),j$3(w$3,w$3),j$3(B$2,B$2);const a=z$4(w$3,B$2);return a>1?0:a<-1?Math.PI:Math.acos(a)}const w$3=n$4(),B$2=n$4();function C$2(t){return "vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function F$2(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function G$4(t,a){if(t===a)return !0;const s=t[0],r=t[1],o=t[2],u=a[0],c=a[1],e=a[2];return Math.abs(s-u)<=a$5*Math.max(1,Math.abs(s),Math.abs(u))&&Math.abs(r-c)<=a$5*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(o-e)<=a$5*Math.max(1,Math.abs(o),Math.abs(e))}function H$3(t,n,a){const s=a[0]-n[0],r=a[1]-n[1],o=a[2]-n[2];let u=s*s+r*r+o*o;return u>0?(u=1/Math.sqrt(u),t[0]=s*u,t[1]=r*u,t[2]=o*u,t):(t[0]=0,t[1]=0,t[2]=0,t)}const J$1=c$8,K=e$7,N$2=i$5,S$2=q$3,X$2=x$6,Y$2=s$9,Z$2=p$5;Object.freeze({__proto__:null,length:s$9,copy:r$8,set:o$6,add:u$a,subtract:c$8,multiply:e$7,divide:i$5,ceil:h$8,floor:M$5,min:f$a,max:l$6,round:m$7,scale:d$5,scaleAndAdd:b$3,distance:q$3,squaredDistance:x$6,squaredLength:p$5,negate:v$4,inverse:g$4,normalize:j$3,dot:z$4,cross:_$3,lerp:y$4,hermite:A$3,bezier:D$3,random:E$4,transformMat4:I$2,transformMat3:L$2,transformQuat:P$2,rotateX:O$2,rotateY:Q$3,rotateZ:R$3,angle:k$3,str:C$2,exactEquals:F$2,equals:G$4,direction:H$3,sub:J$1,mul:K,div:N$2,dist:S$2,sqrDist:X$2,len:Y$2,sqrLen:Z$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function a$4(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function r$7(t,n,a,r,s){return t[0]=n,t[1]=a,t[2]=r,t[3]=s,t}function s$8(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function u$9(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function o$5(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function e$6(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function c$7(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function i$4(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function h$7(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t}function M$4(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t}function f$9(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function l$5(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function m$6(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}function d$4(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2],u=n[3]-t[3];return Math.sqrt(a*a+r*r+s*s+u*u)}function b$2(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2],u=n[3]-t[3];return a*a+r*r+s*s+u*u}function x$5(t){const n=t[0],a=t[1],r=t[2],s=t[3];return Math.sqrt(n*n+a*a+r*r+s*s)}function q$2(t){const n=t[0],a=t[1],r=t[2],s=t[3];return n*n+a*a+r*r+s*s}function p$4(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function v$3(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function g$3(t,n){const a=n[0],r=n[1],s=n[2],u=n[3];let o=a*a+r*r+s*s+u*u;return o>0&&(o=1/Math.sqrt(o),t[0]=a*o,t[1]=r*o,t[2]=s*o,t[3]=u*o),t}function _$2(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function j$2(t,n,a,r){const s=n[0],u=n[1],o=n[2],e=n[3];return t[0]=s+r*(a[0]-s),t[1]=u+r*(a[1]-u),t[2]=o+r*(a[2]-o),t[3]=e+r*(a[3]-e),t}function w$2(t,a){let r,s,u,o,e,c;a=a||1;do{r=2*t$2()-1,s=2*t$2()-1,e=r*r+s*s;}while(e>=1);do{u=2*t$2()-1,o=2*t$2()-1,c=u*u+o*o;}while(c>=1);const i=Math.sqrt((1-e)/c);return t[0]=a*r,t[1]=a*s,t[2]=a*u*i,t[3]=a*o*i,t}function y$3(t,n,a){const r=n[0],s=n[1],u=n[2],o=n[3];return t[0]=a[0]*r+a[4]*s+a[8]*u+a[12]*o,t[1]=a[1]*r+a[5]*s+a[9]*u+a[13]*o,t[2]=a[2]*r+a[6]*s+a[10]*u+a[14]*o,t[3]=a[3]*r+a[7]*s+a[11]*u+a[15]*o,t}function z$3(t,n,a){const r=n[0],s=n[1],u=n[2],o=a[0],e=a[1],c=a[2],i=a[3],h=i*r+e*u-c*s,M=i*s+c*r-o*u,f=i*u+o*s-e*r,l=-o*r-e*s-c*u;return t[0]=h*i+l*-o+M*-c-f*-e,t[1]=M*i+l*-e+f*-o-h*-c,t[2]=f*i+l*-c+h*-e-M*-o,t[3]=n[3],t}function A$2(t){return "vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function D$2(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function E$3(n,a){const r=n[0],s=n[1],u=n[2],o=n[3],e=a[0],c=a[1],i=a[2],h=a[3];return Math.abs(r-e)<=a$5*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(s-c)<=a$5*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(u-i)<=a$5*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(o-h)<=a$5*Math.max(1,Math.abs(o),Math.abs(h))}const L$1=u$9,k$2=o$5,B$1=e$6,C$1=d$4,F$1=b$2,G$3=x$5,H$2=q$2;Object.freeze({__proto__:null,copy:a$4,set:r$7,add:s$8,subtract:u$9,multiply:o$5,divide:e$6,ceil:c$7,floor:i$4,min:h$7,max:M$4,round:f$9,scale:l$5,scaleAndAdd:m$6,distance:d$4,squaredDistance:b$2,length:x$5,squaredLength:q$2,negate:p$4,inverse:v$3,normalize:g$3,dot:_$2,lerp:j$2,random:w$2,transformMat4:y$3,transformQuat:z$3,str:A$2,exactEquals:D$2,equals:E$3,sub:L$1,mul:k$2,div:B$1,dist:C$1,sqrDist:F$1,len:G$3,sqrLen:H$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const u$8=new Float32Array(1);function e$5(n,t,r){return Math.min(Math.max(n,t),r)}function M$3(n){return n*Math.PI/180}function m$5(n){return 180*n/Math.PI}function b$1(n){return Math.asin(e$5(n,-1,1))}function k$1(n){return u$8[0]=n,u$8[0]}k$1(34028234663852886e22);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function T$2(e){return new k$4({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const G$2=T$2(s$c),I$1=T$2(t$4),E$2=T$2(e$a),R$2=new k$4({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${s$c.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const f$8=s$c.radius*Math.PI/200,d$3=/UNIT\[([^\]]+)\]\]$/i,U=r$b,q$1=/UNIT\[([^\]]+)\]/i,p$3=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]);o$v()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"});function H$1(e,s=s$c.metersPerDegree){return L(e,!0)||s}function L(e,s=!1){let r,t,i=null;if(null!=e&&("object"==typeof e?(r=e.wkid,t=e.wkt):"number"==typeof e?r=e:"string"==typeof e&&(t=e)),r){if(w$5(r))return t$4.metersPerDegree;if(C$3(r))return e$a.metersPerDegree;i=U.values[U[r]],!i&&s&&p$3.has(r)&&(i=f$8);}else t&&(V$1(t)?i=W(d$3.exec(t),i):Q$2(t)&&(i=W(q$1.exec(t),i)));return i}function W(e,s){return e&&e[1]?$$1(e[1]):s}function $$1(e){return parseFloat(e.split(",")[1])}function Q$2(e){return /^GEOCCS/i.test(e)}function V$1(e){return /^PROJCS/i.test(e)}const se$1={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},re={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"};o$v()(se$1);o$v()(re);o$v()({...se$1,...re});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n$2(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t}function s$7(t,a,n,s,r,o,h,M,u,e,c,i,f,b,l,m,x){return t[0]=a,t[1]=n,t[2]=s,t[3]=r,t[4]=o,t[5]=h,t[6]=M,t[7]=u,t[8]=e,t[9]=c,t[10]=i,t[11]=f,t[12]=b,t[13]=l,t[14]=m,t[15]=x,t}function r$6(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function o$4(t,a){if(t===a){const n=a[1],s=a[2],r=a[3],o=a[6],h=a[7],M=a[11];t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=n,t[6]=a[9],t[7]=a[13],t[8]=s,t[9]=o,t[11]=a[14],t[12]=r,t[13]=h,t[14]=M;}else t[0]=a[0],t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=a[1],t[5]=a[5],t[6]=a[9],t[7]=a[13],t[8]=a[2],t[9]=a[6],t[10]=a[10],t[11]=a[14],t[12]=a[3],t[13]=a[7],t[14]=a[11],t[15]=a[15];return t}function h$6(t,a){const n=a[0],s=a[1],r=a[2],o=a[3],h=a[4],M=a[5],u=a[6],e=a[7],c=a[8],i=a[9],f=a[10],b=a[11],l=a[12],m=a[13],x=a[14],q=a[15],p=n*M-s*h,g=n*u-r*h,d=n*e-o*h,R=s*u-r*M,S=s*e-o*M,T=r*e-o*u,y=c*m-i*l,j=c*x-f*l,v=c*q-b*l,D=i*x-f*m,I=i*q-b*m,O=f*q-b*x;let P=p*O-g*I+d*D+R*v-S*j+T*y;return P?(P=1/P,t[0]=(M*O-u*I+e*D)*P,t[1]=(r*I-s*O-o*D)*P,t[2]=(m*T-x*S+q*R)*P,t[3]=(f*S-i*T-b*R)*P,t[4]=(u*v-h*O-e*j)*P,t[5]=(n*O-r*v+o*j)*P,t[6]=(x*d-l*T-q*g)*P,t[7]=(c*T-f*d+b*g)*P,t[8]=(h*I-M*v+e*y)*P,t[9]=(s*v-n*I-o*y)*P,t[10]=(l*S-m*d+q*p)*P,t[11]=(i*d-c*S-b*p)*P,t[12]=(M*j-h*D-u*y)*P,t[13]=(n*D-s*j+r*y)*P,t[14]=(m*g-l*R-x*p)*P,t[15]=(c*R-i*g+f*p)*P,t):null}function M$2(t,a){const n=a[0],s=a[1],r=a[2],o=a[3],h=a[4],M=a[5],u=a[6],e=a[7],c=a[8],i=a[9],f=a[10],b=a[11],l=a[12],m=a[13],x=a[14],q=a[15];return t[0]=M*(f*q-b*x)-i*(u*q-e*x)+m*(u*b-e*f),t[1]=-(s*(f*q-b*x)-i*(r*q-o*x)+m*(r*b-o*f)),t[2]=s*(u*q-e*x)-M*(r*q-o*x)+m*(r*e-o*u),t[3]=-(s*(u*b-e*f)-M*(r*b-o*f)+i*(r*e-o*u)),t[4]=-(h*(f*q-b*x)-c*(u*q-e*x)+l*(u*b-e*f)),t[5]=n*(f*q-b*x)-c*(r*q-o*x)+l*(r*b-o*f),t[6]=-(n*(u*q-e*x)-h*(r*q-o*x)+l*(r*e-o*u)),t[7]=n*(u*b-e*f)-h*(r*b-o*f)+c*(r*e-o*u),t[8]=h*(i*q-b*m)-c*(M*q-e*m)+l*(M*b-e*i),t[9]=-(n*(i*q-b*m)-c*(s*q-o*m)+l*(s*b-o*i)),t[10]=n*(M*q-e*m)-h*(s*q-o*m)+l*(s*e-o*M),t[11]=-(n*(M*b-e*i)-h*(s*b-o*i)+c*(s*e-o*M)),t[12]=-(h*(i*x-f*m)-c*(M*x-u*m)+l*(M*f-u*i)),t[13]=n*(i*x-f*m)-c*(s*x-r*m)+l*(s*f-r*i),t[14]=-(n*(M*x-u*m)-h*(s*x-r*m)+l*(s*u-r*M)),t[15]=n*(M*f-u*i)-h*(s*f-r*i)+c*(s*u-r*M),t}function u$7(t){const a=t[0],n=t[1],s=t[2],r=t[3],o=t[4],h=t[5],M=t[6],u=t[7],e=t[8],c=t[9],i=t[10],f=t[11],b=t[12],l=t[13],m=t[14],x=t[15];return (a*h-n*o)*(i*x-f*m)-(a*M-s*o)*(c*x-f*l)+(a*u-r*o)*(c*m-i*l)+(n*M-s*h)*(e*x-f*b)-(n*u-r*h)*(e*m-i*b)+(s*u-r*M)*(e*l-c*b)}function e$4(t,a,n){const s=a[0],r=a[1],o=a[2],h=a[3],M=a[4],u=a[5],e=a[6],c=a[7],i=a[8],f=a[9],b=a[10],l=a[11],m=a[12],x=a[13],q=a[14],p=a[15];let g=n[0],d=n[1],R=n[2],S=n[3];return t[0]=g*s+d*M+R*i+S*m,t[1]=g*r+d*u+R*f+S*x,t[2]=g*o+d*e+R*b+S*q,t[3]=g*h+d*c+R*l+S*p,g=n[4],d=n[5],R=n[6],S=n[7],t[4]=g*s+d*M+R*i+S*m,t[5]=g*r+d*u+R*f+S*x,t[6]=g*o+d*e+R*b+S*q,t[7]=g*h+d*c+R*l+S*p,g=n[8],d=n[9],R=n[10],S=n[11],t[8]=g*s+d*M+R*i+S*m,t[9]=g*r+d*u+R*f+S*x,t[10]=g*o+d*e+R*b+S*q,t[11]=g*h+d*c+R*l+S*p,g=n[12],d=n[13],R=n[14],S=n[15],t[12]=g*s+d*M+R*i+S*m,t[13]=g*r+d*u+R*f+S*x,t[14]=g*o+d*e+R*b+S*q,t[15]=g*h+d*c+R*l+S*p,t}function c$6(t,a,n){const s=n[0],r=n[1],o=n[2];let h,M,u,e,c,i,f,b,l,m,x,q;return a===t?(t[12]=a[0]*s+a[4]*r+a[8]*o+a[12],t[13]=a[1]*s+a[5]*r+a[9]*o+a[13],t[14]=a[2]*s+a[6]*r+a[10]*o+a[14],t[15]=a[3]*s+a[7]*r+a[11]*o+a[15]):(h=a[0],M=a[1],u=a[2],e=a[3],c=a[4],i=a[5],f=a[6],b=a[7],l=a[8],m=a[9],x=a[10],q=a[11],t[0]=h,t[1]=M,t[2]=u,t[3]=e,t[4]=c,t[5]=i,t[6]=f,t[7]=b,t[8]=l,t[9]=m,t[10]=x,t[11]=q,t[12]=h*s+c*r+l*o+a[12],t[13]=M*s+i*r+m*o+a[13],t[14]=u*s+f*r+x*o+a[14],t[15]=e*s+b*r+q*o+a[15]),t}function i$3(t,a,n){const s=n[0],r=n[1],o=n[2];return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t[3]=a[3]*s,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*o,t[9]=a[9]*o,t[10]=a[10]*o,t[11]=a[11]*o,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t}function f$7(t,n,s,r){let o,h,M,u,e,c,i,f,b,l,m,x,q,p,g,d,R,S,T,y,j,v,D,I,O=r[0],P=r[1],A=r[2],_=Math.sqrt(O*O+P*P+A*A);return _<a$5?null:(_=1/_,O*=_,P*=_,A*=_,o=Math.sin(s),h=Math.cos(s),M=1-h,u=n[0],e=n[1],c=n[2],i=n[3],f=n[4],b=n[5],l=n[6],m=n[7],x=n[8],q=n[9],p=n[10],g=n[11],d=O*O*M+h,R=P*O*M+A*o,S=A*O*M-P*o,T=O*P*M-A*o,y=P*P*M+h,j=A*P*M+O*o,v=O*A*M+P*o,D=P*A*M-O*o,I=A*A*M+h,t[0]=u*d+f*R+x*S,t[1]=e*d+b*R+q*S,t[2]=c*d+l*R+p*S,t[3]=i*d+m*R+g*S,t[4]=u*T+f*y+x*j,t[5]=e*T+b*y+q*j,t[6]=c*T+l*y+p*j,t[7]=i*T+m*y+g*j,t[8]=u*v+f*D+x*I,t[9]=e*v+b*D+q*I,t[10]=c*v+l*D+p*I,t[11]=i*v+m*D+g*I,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function b(t,a,n){const s=Math.sin(n),r=Math.cos(n),o=a[4],h=a[5],M=a[6],u=a[7],e=a[8],c=a[9],i=a[10],f=a[11];return a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[4]=o*r+e*s,t[5]=h*r+c*s,t[6]=M*r+i*s,t[7]=u*r+f*s,t[8]=e*r-o*s,t[9]=c*r-h*s,t[10]=i*r-M*s,t[11]=f*r-u*s,t}function l$4(t,a,n){const s=Math.sin(n),r=Math.cos(n),o=a[0],h=a[1],M=a[2],u=a[3],e=a[8],c=a[9],i=a[10],f=a[11];return a!==t&&(t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=o*r-e*s,t[1]=h*r-c*s,t[2]=M*r-i*s,t[3]=u*r-f*s,t[8]=o*s+e*r,t[9]=h*s+c*r,t[10]=M*s+i*r,t[11]=u*s+f*r,t}function m$4(t,a,n){const s=Math.sin(n),r=Math.cos(n),o=a[0],h=a[1],M=a[2],u=a[3],e=a[4],c=a[5],i=a[6],f=a[7];return a!==t&&(t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=o*r+e*s,t[1]=h*r+c*s,t[2]=M*r+i*s,t[3]=u*r+f*s,t[4]=e*r-o*s,t[5]=c*r-h*s,t[6]=i*r-M*s,t[7]=f*r-u*s,t}function x$4(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function q(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function p$2(t,n,s){let r,o,h,M=s[0],u=s[1],e=s[2],c=Math.sqrt(M*M+u*u+e*e);return c<a$5?null:(c=1/c,M*=c,u*=c,e*=c,r=Math.sin(n),o=Math.cos(n),h=1-o,t[0]=M*M*h+o,t[1]=u*M*h+e*r,t[2]=e*M*h-u*r,t[3]=0,t[4]=M*u*h-e*r,t[5]=u*u*h+o,t[6]=e*u*h+M*r,t[7]=0,t[8]=M*e*h+u*r,t[9]=u*e*h-M*r,t[10]=e*e*h+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function g$2(t,a){const n=Math.sin(a),s=Math.cos(a);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function d$2(t,a){const n=Math.sin(a),s=Math.cos(a);return t[0]=s,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function R$1(t,a){const n=Math.sin(a),s=Math.cos(a);return t[0]=s,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function S$1(t,a,n){const s=a[0],r=a[1],o=a[2],h=a[3],M=s+s,u=r+r,e=o+o,c=s*M,i=s*u,f=s*e,b=r*u,l=r*e,m=o*e,x=h*M,q=h*u,p=h*e;return t[0]=1-(b+m),t[1]=i+p,t[2]=f-q,t[3]=0,t[4]=i-p,t[5]=1-(c+m),t[6]=l+x,t[7]=0,t[8]=f+q,t[9]=l-x,t[10]=1-(c+b),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function T$1(t,a){const n=y$2,s=-a[0],r=-a[1],o=-a[2],h=a[3],M=a[4],u=a[5],e=a[6],c=a[7],i=s*s+r*r+o*o+h*h;return i>0?(n[0]=2*(M*h+c*s+u*o-e*r)/i,n[1]=2*(u*h+c*r+e*s-M*o)/i,n[2]=2*(e*h+c*o+M*r-u*s)/i):(n[0]=2*(M*h+c*s+u*o-e*r),n[1]=2*(u*h+c*r+e*s-M*o),n[2]=2*(e*h+c*o+M*r-u*s)),S$1(t,a,n),t}const y$2=n$4();function j$1(t,a){return t[0]=a[12],t[1]=a[13],t[2]=a[14],t}function v$2(t,a){const n=a[0],s=a[1],r=a[2],o=a[4],h=a[5],M=a[6],u=a[8],e=a[9],c=a[10];return t[0]=Math.sqrt(n*n+s*s+r*r),t[1]=Math.sqrt(o*o+h*h+M*M),t[2]=Math.sqrt(u*u+e*e+c*c),t}function D$1(t,a){const n=a[0]+a[5]+a[10];let s=0;return n>0?(s=2*Math.sqrt(n+1),t[3]=.25*s,t[0]=(a[6]-a[9])/s,t[1]=(a[8]-a[2])/s,t[2]=(a[1]-a[4])/s):a[0]>a[5]&&a[0]>a[10]?(s=2*Math.sqrt(1+a[0]-a[5]-a[10]),t[3]=(a[6]-a[9])/s,t[0]=.25*s,t[1]=(a[1]+a[4])/s,t[2]=(a[8]+a[2])/s):a[5]>a[10]?(s=2*Math.sqrt(1+a[5]-a[0]-a[10]),t[3]=(a[8]-a[2])/s,t[0]=(a[1]+a[4])/s,t[1]=.25*s,t[2]=(a[6]+a[9])/s):(s=2*Math.sqrt(1+a[10]-a[0]-a[5]),t[3]=(a[1]-a[4])/s,t[0]=(a[8]+a[2])/s,t[1]=(a[6]+a[9])/s,t[2]=.25*s),t}function I(t,a,n,s){const r=a[0],o=a[1],h=a[2],M=a[3],u=r+r,e=o+o,c=h+h,i=r*u,f=r*e,b=r*c,l=o*e,m=o*c,x=h*c,q=M*u,p=M*e,g=M*c,d=s[0],R=s[1],S=s[2];return t[0]=(1-(l+x))*d,t[1]=(f+g)*d,t[2]=(b-p)*d,t[3]=0,t[4]=(f-g)*R,t[5]=(1-(i+x))*R,t[6]=(m+q)*R,t[7]=0,t[8]=(b+p)*S,t[9]=(m-q)*S,t[10]=(1-(i+l))*S,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function O$1(t,a,n,s,r){const o=a[0],h=a[1],M=a[2],u=a[3],e=o+o,c=h+h,i=M+M,f=o*e,b=o*c,l=o*i,m=h*c,x=h*i,q=M*i,p=u*e,g=u*c,d=u*i,R=s[0],S=s[1],T=s[2],y=r[0],j=r[1],v=r[2],D=(1-(m+q))*R,I=(b+d)*R,O=(l-g)*R,P=(b-d)*S,A=(1-(f+q))*S,_=(x+p)*S,w=(l+g)*T,E=(x-p)*T,F=(1-(f+m))*T;return t[0]=D,t[1]=I,t[2]=O,t[3]=0,t[4]=P,t[5]=A,t[6]=_,t[7]=0,t[8]=w,t[9]=E,t[10]=F,t[11]=0,t[12]=n[0]+y-(D*y+P*j+w*v),t[13]=n[1]+j-(I*y+A*j+E*v),t[14]=n[2]+v-(O*y+_*j+F*v),t[15]=1,t}function P$1(t,a){const n=a[0],s=a[1],r=a[2],o=a[3],h=n+n,M=s+s,u=r+r,e=n*h,c=s*h,i=s*M,f=r*h,b=r*M,l=r*u,m=o*h,x=o*M,q=o*u;return t[0]=1-i-l,t[1]=c+q,t[2]=f-x,t[3]=0,t[4]=c-q,t[5]=1-e-l,t[6]=b+m,t[7]=0,t[8]=f+x,t[9]=b-m,t[10]=1-e-i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function A$1(t,a,n,s,r,o,h){const M=1/(n-a),u=1/(r-s),e=1/(o-h);return t[0]=2*o*M,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o*u,t[6]=0,t[7]=0,t[8]=(n+a)*M,t[9]=(r+s)*u,t[10]=(h+o)*e,t[11]=-1,t[12]=0,t[13]=0,t[14]=h*o*2*e,t[15]=0,t}function _$1(t,a,n,s,r){const o=1/Math.tan(a/2);let h;return t[0]=o/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=r&&r!==1/0?(h=1/(s-r),t[10]=(r+s)*h,t[14]=2*r*s*h):(t[10]=-1,t[14]=-2*s),t}function w$1(t,a,n,s){const r=Math.tan(a.upDegrees*Math.PI/180),o=Math.tan(a.downDegrees*Math.PI/180),h=Math.tan(a.leftDegrees*Math.PI/180),M=Math.tan(a.rightDegrees*Math.PI/180),u=2/(h+M),e=2/(r+o);return t[0]=u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=0,t[7]=0,t[8]=-(h-M)*u*.5,t[9]=(r-o)*e*.5,t[10]=s/(n-s),t[11]=-1,t[12]=0,t[13]=0,t[14]=s*n/(n-s),t[15]=0,t}function E$1(t,a,n,s,r,o,h){const M=1/(a-n),u=1/(s-r),e=1/(o-h);return t[0]=-2*M,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*e,t[11]=0,t[12]=(a+n)*M,t[13]=(r+s)*u,t[14]=(h+o)*e,t[15]=1,t}function F(t,n,s,o){let h,M,u,e,c,i,f,b,l,m;const x=n[0],q=n[1],p=n[2],g=o[0],d=o[1],R=o[2],S=s[0],T=s[1],y=s[2];return Math.abs(x-S)<a$5&&Math.abs(q-T)<a$5&&Math.abs(p-y)<a$5?r$6(t):(f=x-S,b=q-T,l=p-y,m=1/Math.sqrt(f*f+b*b+l*l),f*=m,b*=m,l*=m,h=d*l-R*b,M=R*f-g*l,u=g*b-d*f,m=Math.sqrt(h*h+M*M+u*u),m?(m=1/m,h*=m,M*=m,u*=m):(h=0,M=0,u=0),e=b*u-l*M,c=l*h-f*u,i=f*M-b*h,m=Math.sqrt(e*e+c*c+i*i),m?(m=1/m,e*=m,c*=m,i*=m):(e=0,c=0,i=0),t[0]=h,t[1]=e,t[2]=f,t[3]=0,t[4]=M,t[5]=c,t[6]=b,t[7]=0,t[8]=u,t[9]=i,t[10]=l,t[11]=0,t[12]=-(h*x+M*q+u*p),t[13]=-(e*x+c*q+i*p),t[14]=-(f*x+b*q+l*p),t[15]=1,t)}function Q$1(t,a,n,s){const r=a[0],o=a[1],h=a[2],M=s[0],u=s[1],e=s[2];let c=r-n[0],i=o-n[1],f=h-n[2],b=c*c+i*i+f*f;b>0&&(b=1/Math.sqrt(b),c*=b,i*=b,f*=b);let l=u*f-e*i,m=e*c-M*f,x=M*i-u*c;return b=l*l+m*m+x*x,b>0&&(b=1/Math.sqrt(b),l*=b,m*=b,x*=b),t[0]=l,t[1]=m,t[2]=x,t[3]=0,t[4]=i*x-f*m,t[5]=f*l-c*x,t[6]=c*m-i*l,t[7]=0,t[8]=c,t[9]=i,t[10]=f,t[11]=0,t[12]=r,t[13]=o,t[14]=h,t[15]=1,t}function k(t){return "mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function z$2(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2+t[9]**2+t[10]**2+t[11]**2+t[12]**2+t[13]**2+t[14]**2+t[15]**2)}function N$1(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t[9]=a[9]+n[9],t[10]=a[10]+n[10],t[11]=a[11]+n[11],t[12]=a[12]+n[12],t[13]=a[13]+n[13],t[14]=a[14]+n[14],t[15]=a[15]+n[15],t}function X$1(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t[9]=a[9]-n[9],t[10]=a[10]-n[10],t[11]=a[11]-n[11],t[12]=a[12]-n[12],t[13]=a[13]-n[13],t[14]=a[14]-n[14],t[15]=a[15]-n[15],t}function Y$1(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12]*n,t[13]=a[13]*n,t[14]=a[14]*n,t[15]=a[15]*n,t}function Z$1(t,a,n,s){return t[0]=a[0]+n[0]*s,t[1]=a[1]+n[1]*s,t[2]=a[2]+n[2]*s,t[3]=a[3]+n[3]*s,t[4]=a[4]+n[4]*s,t[5]=a[5]+n[5]*s,t[6]=a[6]+n[6]*s,t[7]=a[7]+n[7]*s,t[8]=a[8]+n[8]*s,t[9]=a[9]+n[9]*s,t[10]=a[10]+n[10]*s,t[11]=a[11]+n[11]*s,t[12]=a[12]+n[12]*s,t[13]=a[13]+n[13]*s,t[14]=a[14]+n[14]*s,t[15]=a[15]+n[15]*s,t}function B(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]&&t[9]===a[9]&&t[10]===a[10]&&t[11]===a[11]&&t[12]===a[12]&&t[13]===a[13]&&t[14]===a[14]&&t[15]===a[15]}function C(t,n){if(t===n)return !0;const s=t[0],r=t[1],o=t[2],h=t[3],M=t[4],u=t[5],e=t[6],c=t[7],i=t[8],f=t[9],b=t[10],l=t[11],m=t[12],x=t[13],q=t[14],p=t[15],g=n[0],d=n[1],R=n[2],S=n[3],T=n[4],y=n[5],j=n[6],v=n[7],D=n[8],I=n[9],O=n[10],P=n[11],A=n[12],_=n[13],w=n[14],E=n[15];return Math.abs(s-g)<=a$5*Math.max(1,Math.abs(s),Math.abs(g))&&Math.abs(r-d)<=a$5*Math.max(1,Math.abs(r),Math.abs(d))&&Math.abs(o-R)<=a$5*Math.max(1,Math.abs(o),Math.abs(R))&&Math.abs(h-S)<=a$5*Math.max(1,Math.abs(h),Math.abs(S))&&Math.abs(M-T)<=a$5*Math.max(1,Math.abs(M),Math.abs(T))&&Math.abs(u-y)<=a$5*Math.max(1,Math.abs(u),Math.abs(y))&&Math.abs(e-j)<=a$5*Math.max(1,Math.abs(e),Math.abs(j))&&Math.abs(c-v)<=a$5*Math.max(1,Math.abs(c),Math.abs(v))&&Math.abs(i-D)<=a$5*Math.max(1,Math.abs(i),Math.abs(D))&&Math.abs(f-I)<=a$5*Math.max(1,Math.abs(f),Math.abs(I))&&Math.abs(b-O)<=a$5*Math.max(1,Math.abs(b),Math.abs(O))&&Math.abs(l-P)<=a$5*Math.max(1,Math.abs(l),Math.abs(P))&&Math.abs(m-A)<=a$5*Math.max(1,Math.abs(m),Math.abs(A))&&Math.abs(x-_)<=a$5*Math.max(1,Math.abs(x),Math.abs(_))&&Math.abs(q-w)<=a$5*Math.max(1,Math.abs(q),Math.abs(w))&&Math.abs(p-E)<=a$5*Math.max(1,Math.abs(p),Math.abs(E))}function G$1(t){const n=a$5,s=t[0],r=t[1],o=t[2],h=t[4],M=t[5],u=t[6],e=t[8],c=t[9],i=t[10];return Math.abs(1-(s*s+h*h+e*e))<=n&&Math.abs(1-(r*r+M*M+c*c))<=n&&Math.abs(1-(o*o+u*u+i*i))<=n}const H=e$4,J=X$1;Object.freeze({__proto__:null,copy:n$2,set:s$7,identity:r$6,transpose:o$4,invert:h$6,adjoint:M$2,determinant:u$7,multiply:e$4,translate:c$6,scale:i$3,rotate:f$7,rotateX:b,rotateY:l$4,rotateZ:m$4,fromTranslation:x$4,fromScaling:q,fromRotation:p$2,fromXRotation:g$2,fromYRotation:d$2,fromZRotation:R$1,fromRotationTranslation:S$1,fromQuat2:T$1,getTranslation:j$1,getScaling:v$2,getRotation:D$1,fromRotationTranslationScale:I,fromRotationTranslationScaleOrigin:O$1,fromQuat:P$1,frustum:A$1,perspective:_$1,perspectiveFromFieldOfView:w$1,ortho:E$1,lookAt:F,targetTo:Q$1,str:k,frob:z$2,add:N$1,subtract:X$1,multiplyScalar:Y$1,multiplyScalarAndAdd:Z$1,exactEquals:B,equals:C,isOrthoNormal:G$1,mul:H,sub:J});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t$1=[0,0];function r$5(t,r){return !!r$s(r)&&f$6(t,r.x,r.y,r.z)}function o$3(n,t){const{xmin:r,ymin:i,zmin:o,xmax:u,ymax:e,zmax:c}=t;return n.hasZ&&t.hasZ?f$6(n,r,i,o)&&f$6(n,r,e,o)&&f$6(n,u,e,o)&&f$6(n,u,i,o)&&f$6(n,r,i,c)&&f$6(n,r,e,c)&&f$6(n,u,e,c)&&f$6(n,u,i,c):f$6(n,r,i)&&f$6(n,r,e)&&f$6(n,u,e)&&f$6(n,u,i)}function u$6(n,t){return f$6(n,t[0],t[1])}function e$3(n,t){return f$6(n,t[0],t[1],t[2])}function f$6(n,t,r,i){return t>=n.xmin&&t<=n.xmax&&r>=n.ymin&&r<=n.ymax&&(null==i||!n.hasZ||i>=n.zmin&&i<=n.zmax)}function c$5(n,r){return t$1[1]=r.y,t$1[0]=r.x,m$3(n,t$1)}function m$3(n,t){return s$6(n.rings,t)}function s$6(n,t){if(!n)return !1;if(x$3(n))return a$3(!1,n,t);let r=!1;for(let i=0,o=n.length;i<o;i++)r=a$3(r,n[i],t);return r}function x$3(n){return !Array.isArray(n[0][0])}function a$3(n,t,r){const[i,o]=r;let u=n,e=0;for(let f=0,c=t.length;f<c;f++){e++,e===c&&(e=0);const[n,r]=t[f],[m,s]=t[e];(r<o&&s>=o||s<o&&r>=o)&&n+(o-r)/(s-r)*(m-n)<i&&(u=!u);}return u}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function i$2(t,e){return r$5(t,e)}function o$2(n,t){const e=n.hasZ&&t.hasZ;let r,i,o;if(n.xmin<=t.xmin){if(r=t.xmin,n.xmax<r)return !1}else if(r=n.xmin,t.xmax<r)return !1;if(n.ymin<=t.ymin){if(i=t.ymin,n.ymax<i)return !1}else if(i=n.ymin,t.ymax<i)return !1;if(e&&t.hasZ)if(n.zmin<=t.zmin){if(o=t.zmin,n.zmax<o)return !1}else if(o=n.zmin,t.zmax<o)return !1;return !0}function f$5(n,t){const{points:i,hasZ:o}=t,f=o?e$3:u$6;for(const e of i)if(f(n,e))return !0;return !1}const s$5=[0,0],c$4=[0,0],m$2=[0,0],u$5=[0,0],l$3=[s$5,c$4,m$2,u$5],a$2=[[m$2,s$5],[s$5,c$4],[c$4,u$5],[u$5,m$2]];function x$2(n,r){s$5[0]=n.xmin,s$5[1]=n.ymax,c$4[0]=n.xmax,c$4[1]=n.ymax,m$2[0]=n.xmin,m$2[1]=n.ymin,u$5[0]=n.xmax,u$5[1]=n.ymin;for(const e of l$3)if(m$3(r,e))return !0;for(const t of r.rings){if(!t.length)continue;let r=t[0];if(u$6(n,r))return !0;for(let i=1;i<t.length;i++){const o=t[i];if(u$6(n,o)||p$1(r,o,a$2))return !0;r=o;}}return !1}function y$1(n,t){s$5[0]=n.xmin,s$5[1]=n.ymax,c$4[0]=n.xmax,c$4[1]=n.ymax,m$2[0]=n.xmin,m$2[1]=n.ymin,u$5[0]=n.xmax,u$5[1]=n.ymin;const r=t.paths;for(const i of r){if(!r.length)continue;let t=i[0];if(u$6(n,t))return !0;for(let r=1;r<i.length;r++){const o=i[r];if(u$6(n,o)||p$1(t,o,a$2))return !0;t=o;}}return !1}const h$5=[0,0];function g$1(n){for(let t=0;t<n.length;t++){const e=n[t];for(let i=0;i<e.length-1;i++){const r=e[i],o=e[i+1];for(let e=t+1;e<n.length;e++)for(let t=0;t<n[e].length-1;t++){const i=n[e][t],f=n[e][t+1];if(z$1(r,o,i,f,h$5)&&!(h$5[0]===r[0]&&h$5[1]===r[1]||h$5[0]===i[0]&&h$5[1]===i[1]||h$5[0]===o[0]&&h$5[1]===o[1]||h$5[0]===f[0]&&h$5[1]===f[1]))return !0}}const r=e.length;if(!(r<=4))for(let n=0;n<r-3;n++){let t=r-1;0===n&&(t=r-2);const i=e[n],o=e[n+1];for(let r=n+2;r<t;r++){const n=e[r],t=e[r+1];if(z$1(i,o,n,t,h$5)&&!(h$5[0]===i[0]&&h$5[1]===i[1]||h$5[0]===n[0]&&h$5[1]===n[1]||h$5[0]===o[0]&&h$5[1]===o[1]||h$5[0]===t[0]&&h$5[1]===t[1]))return !0}}}return !1}function p$1(n,t,e){for(let r=0;r<e.length;r++)if(z$1(n,t,e[r][0],e[r][1]))return !0;return !1}function z$1(n,t,e,r,i){const[o,f]=n,[s,c]=t,[m,u]=e,[l,a]=r,x=l-m,y=o-m,h=s-o,g=a-u,p=f-u,z=c-f,G=g*h-x*z;if(0===G)return !1;const Z=(x*p-g*y)/G,P=(h*p-z*y)/G;return Z>=0&&Z<=1&&P>=0&&P<=1&&(i&&(i[0]=o+Z*(s-o),i[1]=f+Z*(c-f)),!0)}function G(n){switch(n){case"esriGeometryEnvelope":case"extent":return o$2;case"esriGeometryMultipoint":case"multipoint":return f$5;case"esriGeometryPoint":case"point":return i$2;case"esriGeometryPolygon":case"polygon":return x$2;case"esriGeometryPolyline":case"polyline":return y$1}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var u$4;function f$4(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}function d$1(t,i,e){return null==i?e:null==e?i:t(i,e)}let z=u$4=class extends p$7{constructor(...t){super(...t),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0;}normalizeCtorArgs(t,i,e,s,n){return f$4(t)?{spatialReference:t,xmin:0,ymin:0,xmax:0,ymax:0}:"object"==typeof t?(t.spatialReference=null==t.spatialReference?k$4.WGS84:t.spatialReference,t):{xmin:t,ymin:i,xmax:e,ymax:s,spatialReference:null==n?k$4.WGS84:n}}static fromBounds(t,i){return new u$4({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:i})}static fromPoint(t){return new u$4({xmin:t.x,ymin:t.y,zmin:t.z,xmax:t.x,ymax:t.y,zmax:t.z,spatialReference:t.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const t=new j$4({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference});return this.hasZ&&(t.z=.5*(this.zmin+this.zmax)),this.hasM&&(t.m=.5*(this.mmin+this.mmax)),t}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(t){const i=this.center;return null!=t.z&&this.hasZ?this.offset(t.x-i.x,t.y-i.y,t.z-i.z):this.offset(t.x-i.x,t.y-i.y)}clone(){const t=new u$4;return t.xmin=this.xmin,t.ymin=this.ymin,t.xmax=this.xmax,t.ymax=this.ymax,t.spatialReference=this.spatialReference,null!=this.zmin&&(t.zmin=this.zmin,t.zmax=this.zmax),null!=this.mmin&&(t.mmin=this.mmin,t.mmax=this.mmax),t}contains(t){if(!t)return !1;const i=this.spatialReference,e=t.spatialReference;return i&&e&&!i.equals(e)&&g$6(i,e)&&(t=i.isWebMercator?R$4(t):j$5(t,!0)),"point"===t.type?r$5(this,t):"extent"===t.type&&o$3(this,t)}equals(t){if(this===t)return !0;if(t$q(t))return !1;const e=this.spatialReference,s=t.spatialReference;return e&&s&&!e.equals(s)&&g$6(e,s)&&(t=e.isWebMercator?R$4(t):j$5(t,!0)),this.xmin===t.xmin&&this.ymin===t.ymin&&this.zmin===t.zmin&&this.mmin===t.mmin&&this.xmax===t.xmax&&this.ymax===t.ymax&&this.zmax===t.zmax&&this.mmax===t.mmax}expand(t){const i=.5*(1-t),e=this.width*i,s=this.height*i;if(this.xmin+=e,this.ymin+=s,this.xmax-=e,this.ymax-=s,this.hasZ){const t=(this.zmax-this.zmin)*i;this.zmin+=t,this.zmax-=t;}if(this.hasM){const t=(this.mmax-this.mmin)*i;this.mmin+=t,this.mmax-=t;}return this}intersects(t){if(t$q(t))return !1;"mesh"===t.type&&(t=t.extent);const e=this.spatialReference,s=t.spatialReference;e&&s&&!e.equals(s)&&g$6(e,s)&&(t=e.isWebMercator?R$4(t):j$5(t,!0));return G(t.type)(this,t)}normalize(){const t=this._normalize(!1,!0);return Array.isArray(t)?t:[t]}offset(t,i,e){return this.xmin+=t,this.ymin+=i,this.xmax+=t,this.ymax+=i,null!=e&&(this.zmin+=e,this.zmax+=e),this}shiftCentralMeridian(){return this._normalize(!0)}union(t){return this===t||(this.xmin=Math.min(this.xmin,t.xmin),this.ymin=Math.min(this.ymin,t.ymin),this.xmax=Math.max(this.xmax,t.xmax),this.ymax=Math.max(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=d$1(Math.min,this.zmin,t.zmin),this.zmax=d$1(Math.max,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=d$1(Math.min,this.mmin,t.mmin),this.mmax=d$1(Math.max,this.mmax,t.mmax))),this}intersection(t){return this===t?this:t$q(t)||!this.intersects(t)?null:(this.xmin=Math.max(this.xmin,t.xmin),this.ymin=Math.max(this.ymin,t.ymin),this.xmax=Math.min(this.xmax,t.xmax),this.ymax=Math.min(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=d$1(Math.max,this.zmin,t.zmin),this.zmax=d$1(Math.min,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=d$1(Math.max,this.mmin,t.mmin),this.mmax=d$1(Math.min,this.mmax,t.mmax)),this)}toJSON(t){return this.write({},t)}_shiftCM(t=R$5(this.spatialReference)){if(!t||!this.spatialReference)return this;const i=this.spatialReference,s=this._getCM(t);if(s){const n=i.isWebMercator?j$5(s):s;this.xmin-=s.x,this.xmax-=s.x,i.isWebMercator||(n.x=this._normalizeX(n.x,t).x),this.spatialReference=new k$4(r$o(i.isWGS84?t.altTemplate:t.wkTemplate,{Central_Meridian:n.x}));}return this}_getCM(t){let i=null;const[e,s]=t.valid,n=this.xmin,m=this.xmax;return n>=e&&n<=s&&(m>=e&&m<=s)||(i=this.center),i}_normalize(t,i,e){const s=this.spatialReference;if(!s)return this;if(!(e=e||R$5(s)))return this;const n=this._getParts(e).map((t=>t.extent));if(n.length<2)return n[0]||this;if(n.length>2)return t?this._shiftCM(e):this.set({xmin:e.valid[0],xmax:e.valid[1]});if(t)return this._shiftCM(e);if(i)return n;let m=!0,r=!0;return n.forEach((t=>{t.hasZ||(m=!1),t.hasM||(r=!1);})),{rings:n.map((t=>{const i=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(m){const e=(t.zmax-t.zmin)/2;for(let t=0;t<i.length;t++)i[t].push(e);}if(r){const e=(t.mmax-t.mmin)/2;for(let t=0;t<i.length;t++)i[t].push(e);}return i})),hasZ:m,hasM:r,spatialReference:s}}_getParts(t){let i=this.cache._parts;if(!i){i=[];const{ymin:e,ymax:s,spatialReference:n}=this,m=this.width,r=this.xmin,a=this.xmax;let h;t=t||R$5(n);const[o,x]=t.valid;h=this._normalizeX(this.xmin,t);const p=h.x,c=h.frameId;h=this._normalizeX(this.xmax,t);const y=h.x,f=h.frameId,d=p===y&&m>0;if(m>2*x){const t=new u$4(r<a?p:y,e,x,s,n),m=new u$4(o,e,r<a?y:p,s,n),h=new u$4(0,e,x,s,n),l=new u$4(o,e,0,s,n),d=[],z=[];t.contains(h)&&d.push(c),t.contains(l)&&z.push(c),m.contains(h)&&d.push(f),m.contains(l)&&z.push(f);for(let i=c+1;i<f;i++)d.push(i),z.push(i);i.push({extent:t,frameIds:[c]},{extent:m,frameIds:[f]},{extent:h,frameIds:d},{extent:l,frameIds:z});}else p>y||d?i.push({extent:new u$4(p,e,x,s,n),frameIds:[c]},{extent:new u$4(o,e,y,s,n),frameIds:[f]}):i.push({extent:new u$4(p,e,y,s,n),frameIds:[c]});this.cache._parts=i;}const e=this.hasZ,s=this.hasM;if(e||s){const t={};e&&(t.zmin=this.zmin,t.zmax=this.zmax),s&&(t.mmin=this.mmin,t.mmax=this.mmax);for(let e=0;e<i.length;e++)i[e].extent.set(t);}return i}_normalizeX(t,i){const[e,s]=i.valid,n=2*s;let m,r=0;return t>s?(m=Math.ceil(Math.abs(t-s)/n),t-=m*n,r=m):t<e&&(m=Math.ceil(Math.abs(t-e)/n),t+=m*n,r=-m),{x:t,frameId:r}}};e$p([d$e({readOnly:!0})],z.prototype,"cache",null),e$p([d$e({readOnly:!0})],z.prototype,"center",null),e$p([d$e({readOnly:!0})],z.prototype,"extent",null),e$p([d$e({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],z.prototype,"hasM",null),e$p([d$e({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],z.prototype,"hasZ",null),e$p([d$e({readOnly:!0})],z.prototype,"height",null),e$p([d$e({readOnly:!0})],z.prototype,"width",null),e$p([d$e({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],z.prototype,"xmin",void 0),e$p([d$e({type:Number,json:{write:!0}})],z.prototype,"ymin",void 0),e$p([d$e({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return {enabled:this.hasM}}}}})],z.prototype,"mmin",void 0),e$p([d$e({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return {enabled:this.hasZ}}}}})],z.prototype,"zmin",void 0),e$p([d$e({type:Number,json:{write:!0}})],z.prototype,"xmax",void 0),e$p([d$e({type:Number,json:{write:!0}})],z.prototype,"ymax",void 0),e$p([d$e({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return {enabled:this.hasM}}}}})],z.prototype,"mmax",void 0),e$p([d$e({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return {enabled:this.hasZ}}}}})],z.prototype,"zmax",void 0),z=u$4=e$p([n$a("esri.geometry.Extent")],z),z.prototype.toJSON.isDefaultToJSON=!0;const M$1=z;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function h$4(h,a,s=!1){let{hasM:t,hasZ:e}=h;Array.isArray(a)?4!==a.length||t||e?3===a.length&&s&&!t?(e=!0,t=!1):3===a.length&&t&&e&&(t=!1,e=!1):(t=!0,e=!0):(e=!e&&a.hasZ&&(!t||a.hasM),t=!t&&a.hasM&&(!e||a.hasZ)),h.hasZ=e,h.hasM=t;}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var h$3;function l$2(t){return (s,e)=>null==s?e:null==e?s:t(s,e)}function c$3(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}let u$3=h$3=class extends p$7{constructor(...t){super(...t),this.points=[],this.type="multipoint";}normalizeCtorArgs(t,s){if(!t&&!s)return null;const e={};Array.isArray(t)?(e.points=t,e.spatialReference=s):c$3(t)?e.spatialReference=t:(t.points&&(e.points=t.points),t.spatialReference&&(e.spatialReference=t.spatialReference),t.hasZ&&(e.hasZ=t.hasZ),t.hasM&&(e.hasM=t.hasM));const i=e.points&&e.points[0];return i&&(void 0===e.hasZ&&void 0===e.hasM?(e.hasZ=i.length>2,e.hasM=!1):void 0===e.hasZ?e.hasZ=i.length>3:void 0===e.hasM&&(e.hasM=i.length>3)),e}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const t=this.points;if(!t.length)return null;const s=new M$1,e=this.hasZ,i=this.hasM,r=e?3:2,o=t[0],a=l$2(Math.min),p=l$2(Math.max);let h,c,u,m,[f,y]=o,[d,g]=o;for(let n=0,l=t.length;n<l;n++){const s=t[n],[o,l]=s;if(f=a(f,o),y=a(y,l),d=p(d,o),g=p(g,l),e&&s.length>2){const t=s[2];h=a(h,t),u=p(u,t);}if(i&&s.length>r){const t=s[r];c=a(c,t),m=p(m,t);}}return s.xmin=f,s.ymin=y,s.xmax=d,s.ymax=g,s.spatialReference=this.spatialReference,e?(s.zmin=h,s.zmax=u):(s.zmin=null,s.zmax=null),i?(s.mmin=c,s.mmax=m):(s.mmin=null,s.mmax=null),s}writePoints(t,e){e.points=m$k(this.points);}addPoint(t){return h$4(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this.notifyChange("points"),this}clone(){const t={points:m$k(this.points),spatialReference:this.spatialReference};return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new h$3(t)}getPoint(t){if(!this._validateInputs(t))return null;const s=this.points[t],e={x:s[0],y:s[1],spatialReference:this.spatialReference};let i=2;return this.hasZ&&(e.z=s[2],i=3),this.hasM&&(e.m=s[i]),new j$4(e)}removePoint(t){if(!this._validateInputs(t))return null;const s=new j$4(this.points.splice(t,1)[0],this.spatialReference);return this.notifyChange("points"),s}setPoint(t,s){return this._validateInputs(t)?(h$4(this,s),Array.isArray(s)||(s=s.toArray()),this.points[t]=s,this.notifyChange("points"),this):this}toJSON(t){return this.write({},t)}_validateInputs(t){return null!=t&&t>=0&&t<this.points.length}};e$p([d$e({readOnly:!0})],u$3.prototype,"cache",null),e$p([d$e()],u$3.prototype,"extent",null),e$p([d$e({type:[[Number]],json:{write:{isRequired:!0}}})],u$3.prototype,"points",void 0),e$p([r$g("points")],u$3.prototype,"writePoints",null),u$3=h$3=e$p([n$a("esri.geometry.Multipoint")],u$3),u$3.prototype.toJSON.isDefaultToJSON=!0;const m$1=u$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let o$1,r$4=null;function n$1(){return !!r$4}function _(){return !!r$r("esri-wasm")}function P(){return o$1||(o$1=import('./pe-wasm.js').then((e=>e.p)).then((({default:t})=>t({locateFile:t=>a$g(`esri/geometry/support/${t}`)}))).then((e=>{N(e);})),o$1)}var s$4,E,i$1;!function(e){function t(e,t,o){r$4.ensureCache.prepare();const n=A(o),_=o===n,P=r$4.ensureFloat64(n),s=r$4._pe_geog_to_proj(r$4.getPointer(e),t,P);return s&&d(o,t,P,_),s}function o(e,o,r,_){switch(_){case E.PE_TRANSFORM_P_TO_G:return n(e,o,r);case E.PE_TRANSFORM_G_TO_P:return t(e,o,r)}return 0}function n(e,t,o){return _(e,t,o,0)}function _(e,t,o,n){r$4.ensureCache.prepare();const _=A(o),P=o===_,s=r$4.ensureFloat64(_),E=r$4._pe_proj_to_geog_center(r$4.getPointer(e),t,s,n);return E&&d(o,t,s,P),E}e.geogToProj=t,e.projGeog=o,e.projToGeog=n,e.projToGeogCenter=_;}(s$4||(s$4={})),function(e){function t(){e.PE_BUFFER_MAX=r$4.PeDefs.prototype.PE_BUFFER_MAX,e.PE_NAME_MAX=r$4.PeDefs.prototype.PE_NAME_MAX,e.PE_MGRS_MAX=r$4.PeDefs.prototype.PE_MGRS_MAX,e.PE_USNG_MAX=r$4.PeDefs.prototype.PE_USNG_MAX,e.PE_DD_MAX=r$4.PeDefs.prototype.PE_DD_MAX,e.PE_DDM_MAX=r$4.PeDefs.prototype.PE_DDM_MAX,e.PE_DMS_MAX=r$4.PeDefs.prototype.PE_DMS_MAX,e.PE_UTM_MAX=r$4.PeDefs.prototype.PE_UTM_MAX,e.PE_PARM_MAX=r$4.PeDefs.prototype.PE_PARM_MAX,e.PE_TYPE_NONE=r$4.PeDefs.prototype.PE_TYPE_NONE,e.PE_TYPE_GEOGCS=r$4.PeDefs.prototype.PE_TYPE_GEOGCS,e.PE_TYPE_PROJCS=r$4.PeDefs.prototype.PE_TYPE_PROJCS,e.PE_TYPE_GEOGTRAN=r$4.PeDefs.prototype.PE_TYPE_GEOGTRAN,e.PE_TYPE_COORDSYS=r$4.PeDefs.prototype.PE_TYPE_COORDSYS,e.PE_TYPE_UNIT=r$4.PeDefs.prototype.PE_TYPE_UNIT,e.PE_TYPE_LINUNIT=r$4.PeDefs.prototype.PE_TYPE_LINUNIT,e.PE_STR_OPTS_NONE=r$4.PeDefs.prototype.PE_STR_OPTS_NONE,e.PE_STR_AUTH_NONE=r$4.PeDefs.prototype.PE_STR_AUTH_NONE,e.PE_STR_AUTH_TOP=r$4.PeDefs.prototype.PE_STR_AUTH_TOP,e.PE_STR_NAME_CANON=r$4.PeDefs.prototype.PE_STR_NAME_CANON,e.PE_PARM_X0=r$4.PeDefs.prototype.PE_PARM_X0,e.PE_PARM_ND=r$4.PeDefs.prototype.PE_PARM_ND,e.PE_TRANSFORM_1_TO_2=r$4.PeDefs.prototype.PE_TRANSFORM_1_TO_2,e.PE_TRANSFORM_2_TO_1=r$4.PeDefs.prototype.PE_TRANSFORM_2_TO_1,e.PE_TRANSFORM_P_TO_G=r$4.PeDefs.prototype.PE_TRANSFORM_P_TO_G,e.PE_TRANSFORM_G_TO_P=r$4.PeDefs.prototype.PE_TRANSFORM_G_TO_P,e.PE_HORIZON_RECT=r$4.PeDefs.prototype.PE_HORIZON_RECT,e.PE_HORIZON_POLY=r$4.PeDefs.prototype.PE_HORIZON_POLY,e.PE_HORIZON_LINE=r$4.PeDefs.prototype.PE_HORIZON_LINE,e.PE_HORIZON_DELTA=r$4.PeDefs.prototype.PE_HORIZON_DELTA;}e.init=t;}(E||(E={})),function(e){const t={},o={},n=e=>{if(e){const t=e.getType();switch(t){case E.PE_TYPE_GEOGCS:e=r$4.castObject(e,r$4.PeGeogcs);break;case E.PE_TYPE_PROJCS:e=r$4.castObject(e,r$4.PeProjcs);break;case E.PE_TYPE_GEOGTRAN:e=r$4.castObject(e,r$4.PeGeogtran);break;default:t&E.PE_TYPE_UNIT&&(e=r$4.castObject(e,r$4.PeUnit));}}return e};function _(){r$4.PeFactory.prototype.initialize(null);}function P(e){return s(E.PE_TYPE_COORDSYS,e)}function s(e,o){let _=null,P=t[e];if(P||(P={},t[e]=P),P.hasOwnProperty(String(o)))_=P[o];else {const t=r$4.PeFactory.prototype.factoryByType(e,o);r$4.compare(t,r$4.NULL)||(_=t,P[o]=_);}return _=n(_),_}function i(e,t){let _=null,P=o[e];if(P||(P={},o[e]=P),P.hasOwnProperty(t))_=P[t];else {const o=r$4.PeFactory.prototype.fromString(e,t);r$4.compare(o,r$4.NULL)||(_=o,P[t]=_);}return _=n(_),_}function p(e){return s(E.PE_TYPE_GEOGCS,e)}function u(e){return s(E.PE_TYPE_GEOGTRAN,e)}function c(e){return r$4.PeFactory.prototype.getCode(e)}function a(e){return s(E.PE_TYPE_PROJCS,e)}function g(e){return s(E.PE_TYPE_UNIT,e)}e.initialize=_,e.coordsys=P,e.factoryByType=s,e.fromString=i,e.geogcs=p,e.geogtran=u,e.getCode=c,e.projcs=a,e.unit=g;}(i$1||(i$1={}));let p=null;var u$2,c$2,a$1,g,T,f$3,O,S,l$1;function N(e){function t(e,t,o){e[t]=o(e[t]);}r$4=e,E.init(),u$2.init(),T.init(),O.init(),S.init(),p=class extends r$4.PeGCSExtent{destroy(){r$4.destroy(this);}};const o=[r$4.PeDatum,r$4.PeGeogcs,r$4.PeGeogtran,r$4.PeObject,r$4.PeParameter,r$4.PePrimem,r$4.PeProjcs,r$4.PeSpheroid,r$4.PeUnit];for(const r of o)t(r.prototype,"getName",(e=>function(){return e.call(this,new Array(E.PE_NAME_MAX))}));for(const P of [r$4.PeGeogtran,r$4.PeProjcs])t(P.prototype,"getParameters",(e=>function(){const t=new Array(E.PE_PARM_MAX);let o=e.call(this);for(let e=0;e<t.length;e++){const n=r$4.getValue(o,"*");t[e]=n?r$4.wrapPointer(n,r$4.PeParameter):null,o+=Int32Array.BYTES_PER_ELEMENT;}return t}));t(r$4.PeHorizon.prototype,"getCoord",(e=>function(){const t=this.getSize();if(!t)return null;const o=[];return d(o,t,e.call(this)),o})),t(r$4.PeGTlistExtendedEntry.prototype,"getEntries",(e=>{const t=r$4._pe_getPeGTlistExtendedGTsSize();return function(){let o=null;const n=e.call(this);if(!r$4.compare(n,r$4.NULL)){o=[n];const e=this.getSteps();if(e>1){const _=r$4.getPointer(n);for(let n=1;n<e;n++)o.push(r$4.wrapPointer(_+t*n,r$4.PeGTlistExtendedGTs));}}return o}}));const n=r$4._pe_getPeHorizonSize(),_=e=>function(){let t=this._cache;if(t||(t=new Map,this._cache=t),t.has(e))return t.get(e);let o=null;const _=e.call(this);if(!r$4.compare(_,r$4.NULL)){o=[_];const e=_.getNump();if(e>1){const t=r$4.getPointer(_);for(let _=1;_<e;_++)o.push(r$4.wrapPointer(t+n*_,r$4.PeHorizon));}}return t.set(e,o),o};t(r$4.PeProjcs.prototype,"horizonGcsGenerate",_),t(r$4.PeProjcs.prototype,"horizonPcsGenerate",_),r$4.PeObject.prototype.toString=function(e=E.PE_STR_OPTS_NONE){r$4.ensureCache.prepare();const t=r$4.getPointer(this),o=r$4.ensureInt8(new Array(E.PE_BUFFER_MAX));return r$4.UTF8ToString(r$4._pe_object_to_string_ext(t,e,o))};}function y(e){if(!e)return;const t=r$4.getClass(e);if(!t)return;const o=r$4.getCache(t);if(!o)return;const n=r$4.getPointer(e);n&&delete o[n];}function M(e,t){const o=[],n=new Array(t);for(let _=0;_<e;_++)o.push(r$4.ensureInt8(n));return o}function A(e){let t;return Array.isArray(e[0])?(t=[],e.forEach((e=>{t.push(e[0],e[1]);}))):t=e,t}function d(e,t,o,n=!1){if(n)for(let _=0;_<2*t;_++)e[_]=r$4.getValue(o+_*Float64Array.BYTES_PER_ELEMENT,"double");else {const n=0===e.length;for(let _=0;_<t;_++)n&&(e[_]=new Array(2)),e[_][0]=r$4.getValue(o,"double"),e[_][1]=r$4.getValue(o+Float64Array.BYTES_PER_ELEMENT,"double"),o+=2*Float64Array.BYTES_PER_ELEMENT;}}!function(e){let t;function o(){e.PE_GTLIST_OPTS_COMMON=r$4.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,t=r$4._pe_getPeGTlistExtendedEntrySize();}function n(e,o,n,_,P,s){let E=null;const i=new r$4.PeInteger(s);try{const p=r$4.PeGTlistExtended.prototype.getGTlist(e,o,n,_,P,i);if((s=i.val)&&(E=[p],s>1)){const e=r$4.getPointer(p);for(let o=1;o<s;o++)E.push(r$4.wrapPointer(e+t*o,r$4.PeGTlistExtendedEntry));}}finally{r$4.destroy(i);}return E}e.init=o,e.getGTlist=n;}(u$2||(u$2={})),function(e){function t(e){if(e&&e.length){for(const t of e)y(t),t.getEntries().forEach((e=>{y(e);const t=e.getGeogtran();y(t),t.getParameters().forEach(y),[t.getGeogcs1(),t.getGeogcs2()].forEach((e=>{y(e);const t=e.getDatum();y(t),y(t.getSpheroid()),y(e.getPrimem()),y(e.getUnit());}));}));r$4.PeGTlistExtendedEntry.prototype.Delete(e[0]);}}e.destroy=t;}(c$2||(c$2={})),function(e){function t(e,t,o,n,_){r$4.ensureCache.prepare();const P=A(o),s=o===P,E=r$4.ensureFloat64(P);let i=0;n&&(i=r$4.ensureFloat64(n));const p=r$4._pe_geog_to_geog(r$4.getPointer(e),t,E,i,_);return p&&d(o,t,E,s),p}e.geogToGeog=t;}(a$1||(a$1={})),function(e){const t=(e,t,o,n,_,P)=>{let s,i;switch(r$4.ensureCache.prepare(),e){case"dd":s=r$4._pe_geog_to_dd,i=E.PE_DD_MAX;break;case"ddm":s=r$4._pe_geog_to_ddm,i=E.PE_DDM_MAX;break;case"dms":s=r$4._pe_geog_to_dms,i=E.PE_DMS_MAX;}let p=0;t&&(p=r$4.getPointer(t));const u=A(n),c=r$4.ensureFloat64(u),a=M(o,i),g=s(p,o,c,_,r$4.ensureInt32(a));if(g)for(let E=0;E<o;E++)P[E]=r$4.UTF8ToString(a[E]);return g},o=(e,t,o,n,_)=>{let P;switch(r$4.ensureCache.prepare(),e){case"dd":P=r$4._pe_dd_to_geog;break;case"ddm":P=r$4._pe_ddm_to_geog;break;case"dms":P=r$4._pe_dms_to_geog;}let s=0;t&&(s=r$4.getPointer(t));const E=n.map((e=>r$4.ensureString(e))),i=r$4.ensureInt32(E),p=r$4.ensureFloat64(new Array(2*o)),u=P(s,o,i,p);return u&&d(_,o,p),u};function n(e,o,r,n,_){return t("dms",e,o,r,n,_)}function _(e,t,r,n){return o("dms",e,t,r,n)}function P(e,o,r,n,_){return t("ddm",e,o,r,n,_)}function s(e,t,r,n){return o("ddm",e,t,r,n)}function i(e,o,r,n,_){return t("dd",e,o,r,n,_)}function p(e,t,r,n){return o("dd",e,t,r,n)}e.geogToDms=n,e.dmsToGeog=_,e.geogToDdm=P,e.ddmToGeog=s,e.geogToDd=i,e.ddToGeog=p;}(g||(g={})),function(e){function t(){e.PE_MGRS_STYLE_NEW=r$4.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=r$4.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=r$4.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=r$4.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=r$4.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES;}function o(e,t,o,n,_,P,s){r$4.ensureCache.prepare();let i=0;e&&(i=r$4.getPointer(e));const p=A(o),u=r$4.ensureFloat64(p),c=M(t,E.PE_MGRS_MAX),a=r$4.ensureInt32(c),g=r$4._pe_geog_to_mgrs_extended(i,t,u,n,_,P,a);if(g)for(let E=0;E<t;E++)s[E]=r$4.UTF8ToString(c[E]);return g}function n(e,t,o,n,_){r$4.ensureCache.prepare();let P=0;e&&(P=r$4.getPointer(e));const s=o.map((e=>r$4.ensureString(e))),E=r$4.ensureInt32(s),i=r$4.ensureFloat64(new Array(2*t)),p=r$4._pe_mgrs_to_geog_extended(P,t,E,n,i);return p&&d(_,t,i),p}e.init=t,e.geogToMgrsExtended=o,e.mgrsToGeogExtended=n;}(T||(T={})),function(e){function t(e,t,o,n,_,P,s){r$4.ensureCache.prepare();let i=0;e&&(i=r$4.getPointer(e));const p=A(o),u=r$4.ensureFloat64(p),c=M(t,E.PE_MGRS_MAX),a=r$4.ensureInt32(c),g=r$4._pe_geog_to_usng(i,t,u,n,_,P,a);if(g)for(let E=0;E<t;E++)s[E]=r$4.UTF8ToString(c[E]);return g}function o(e,t,o,n){r$4.ensureCache.prepare();let _=0;e&&(_=r$4.getPointer(e));const P=o.map((e=>r$4.ensureString(e))),s=r$4.ensureInt32(P),E=r$4.ensureFloat64(new Array(2*t)),i=r$4._pe_usng_to_geog(_,t,s,E);return i&&d(n,t,E),i}e.geogToUsng=t,e.usngToGeog=o;}(f$3||(f$3={})),function(e){function t(){e.PE_UTM_OPTS_NONE=r$4.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=r$4.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=r$4.PeNotationUtm.prototype.PE_UTM_OPTS_NS;}function o(e,t,o,n,_){r$4.ensureCache.prepare();let P=0;e&&(P=r$4.getPointer(e));const s=A(o),i=r$4.ensureFloat64(s),p=M(t,E.PE_UTM_MAX),u=r$4.ensureInt32(p),c=r$4._pe_geog_to_utm(P,t,i,n,u);if(c)for(let E=0;E<t;E++)_[E]=r$4.UTF8ToString(p[E]);return c}function n(e,t,o,n,_){r$4.ensureCache.prepare();let P=0;e&&(P=r$4.getPointer(e));const s=o.map((e=>r$4.ensureString(e))),E=r$4.ensureInt32(s),i=r$4.ensureFloat64(new Array(2*t)),p=r$4._pe_utm_to_geog(P,t,E,n,i);return p&&d(_,t,i),p}e.init=t,e.geogToUtm=o,e.utmToGeog=n;}(O||(O={})),function(e){const t=new Map;function o(){e.PE_PCSINFO_OPTION_NONE=r$4.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=r$4.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=r$4.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=r$4.PePCSInfo.prototype.PE_POLE_POINT;}function n(o,n=e.PE_PCSINFO_OPTION_DOMAIN){let _,P;return t.has(o)&&(P=t.get(o),P[n]&&(_=P[n])),_||(_=r$4.PePCSInfo.prototype.generate(o,n),P||(P=[],t.set(o,P)),P[n]=_),_}e.init=o,e.generate=n;}(S||(S={})),function(e){function t(){return r$4.PeVersion.prototype.version_string()}e.versionString=t;}(l$1||(l$1={}));const R=Object.freeze({__proto__:null,get _pe(){return r$4},isLoaded:n$1,isSupported:_,load:P,get PeCSTransformations(){return s$4},get PeDefs(){return E},get PeFactory(){return i$1},get PeGCSExtent(){return p},get PeGTlistExtended(){return u$2},get PeGTlistExtendedEntry(){return c$2},get PeGTTransformations(){return a$1},get PeNotationDms(){return g},get PeNotationMgrs(){return T},get PeNotationUsng(){return f$3},get PeNotationUtm(){return O},get PePCSInfo(){return S},get PeVersion(){return l$1},_init:N});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e$2(n,t){const e=t[0]-n[0],r=t[1]-n[1];if(n.length>2&&t.length>2){const o=n[2]-t[2];return Math.sqrt(e*e+r*r+o*o)}return Math.sqrt(e*e+r*r)}function r$3(n,t,e){const r=n[0]+e*(t[0]-n[0]),o=n[1]+e*(t[1]-n[1]);return n.length>2&&t.length>2?[r,o,n[2]+e*(t[2]-n[2])]:[r,o]}function i(n,t){return r$3(n,t,.5)}function f$2(n,t,e){const r=n.length;let o=0,i=0,s=0;for(let l=0;l<r;l++){const f=n[l],u=n[(l+1)%r];let h=2;o+=f[0]*u[1]-u[0]*f[1],f.length>2&&u.length>2&&e&&(i+=f[0]*u[2]-u[0]*f[2],h=3),f.length>h&&u.length>h&&t&&(s+=f[0]*u[h]-u[0]*f[h]);}return o<=0&&i<=0&&s<=0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e$1(n){return n?o(n.rings,n.hasZ):null}function o(n,t){if(!n||!n.length)return null;const l=[],e=[],o=t?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0];for(let h=0,i=n.length;h<i;h++){const l=r$2(n[h],t,o);l&&e.push(l);}if(e.sort(((n,l)=>{let e=n[2]-l[2];return 0===e&&t&&(e=n[4]-l[4]),e})),e.length&&(l[0]=e[0][0],l[1]=e[0][1],t&&(l[2]=e[0][3]),(l[0]<o[0]||l[0]>o[1]||l[1]<o[2]||l[1]>o[3]||t&&(l[2]<o[4]||l[2]>o[5]))&&(l.length=0)),!l.length){const e=n[0]&&n[0].length?h$2(n[0],t):null;if(!e)return null;l[0]=e[0],l[1]=e[1],t&&e.length>2&&(l[2]=e[2]);}return l}function r$2(n,t,l){let e=0,o=0,r=0,h=0,i=0;const u=n.length?n[0][0]:0,g=n.length?n[0][1]:0,s=n.length&&t?n[0][2]:0;for(let f=0;f<n.length;f++){const c=n[f],m=n[(f+1)%n.length],[x,a,y]=c,d=x-u,p=a-g,v=t?y-s:void 0,[z,Z,j]=m,U=z-u,b=Z-g,k=t?j-s:void 0,q=d*b-U*p;if(h+=q,e+=(d+U)*q,o+=(p+b)*q,t&&c.length>2&&m.length>2){const n=d*k-U*v;r+=(v+k)*n,i+=n;}x<l[0]&&(l[0]=x),x>l[1]&&(l[1]=x),a<l[2]&&(l[2]=a),a>l[3]&&(l[3]=a),t&&(y<l[4]&&(l[4]=y),y>l[5]&&(l[5]=y));}if(h>0&&(h*=-1),i>0&&(i*=-1),!h)return null;h*=.5,i*=.5;const c=[e/(6*h)+u,o/(6*h)+g,h];return t&&(l[4]===l[5]||0===i?(c[3]=(l[4]+l[5])/2,c[4]=0):(c[3]=r/(6*i)+s,c[4]=i)),c}function h$2(l,e){const o=e?[0,0,0]:[0,0],r=e?[0,0,0]:[0,0];let h=0,i$1=0,u=0,g=0;for(let s=0,c=l.length;s<c-1;s++){const c=l[s],f=l[s+1];if(c&&f){o[0]=c[0],o[1]=c[1],r[0]=f[0],r[1]=f[1],e&&c.length>2&&f.length>2&&(o[2]=c[2],r[2]=f[2]);const l=e$2(o,r);if(l){h+=l;const n=i(c,f);i$1+=l*n[0],u+=l*n[1],e&&n.length>2&&(g+=l*n[2]);}}}return h>0?e?[i$1/h,u/h,g/h]:[i$1/h,u/h]:l.length?l[0]:null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function l(n){return (t,e)=>null==t?e:null==e?t:n(t,e)}const r$1=l(Math.min),u$1=l(Math.max);function h$1(n,t,e,o){const i=e?3:2;if(!t.length||!t[0].length)return null;let l,c,f,h,[g,s]=t[0][0],[x,m]=t[0][0];for(let a=0;a<t.length;a++){const n=t[a];for(let t=0;t<n.length;t++){const a=n[t],[d,v]=a;if(g=r$1(g,d),s=r$1(s,v),x=u$1(x,d),m=u$1(m,v),e&&a.length>2){const n=a[2];l=r$1(l,n),c=u$1(c,n);}if(o&&a.length>i){const n=a[i];f=r$1(l,n),h=u$1(c,n);}}}return e?o?(n[0]=g,n[1]=s,n[2]=l,n[3]=f,n[4]=x,n[5]=m,n[6]=c,n[7]=h,n.length=8,n):(n[0]=g,n[1]=s,n[2]=l,n[3]=x,n[4]=m,n[5]=c,n.length=6,n):o?(n[0]=g,n[1]=s,n[2]=f,n[3]=x,n[4]=m,n[5]=h,n.length=6,n):(n[0]=g,n[1]=s,n[2]=x,n[3]=m,n.length=4,n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const x$1=[];function a(n,i,t,u){return {xmin:n,ymin:i,xmax:t,ymax:u}}function c$1(n,i,t,u,m,o){return {xmin:n,ymin:i,zmin:t,xmax:u,ymax:m,zmax:o}}function s$3(n,i,t,u,m,o){return {xmin:n,ymin:i,mmin:t,xmax:u,ymax:m,mmax:o}}function e(n,i,t,u,m,o,r,x){return {xmin:n,ymin:i,zmin:t,mmin:u,xmax:m,ymax:o,zmax:r,mmax:x}}function f$1(n,i=!1,t=!1){return i?t?e(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]):c$1(n[0],n[1],n[2],n[3],n[4],n[5]):t?s$3(n[0],n[1],n[2],n[3],n[4],n[5]):a(n[0],n[1],n[2],n[3])}function v$1(n){const{hasZ:t,hasM:u,rings:m}=n,o=h$1(x$1,m,t,u);return o?f$1(o,t,u):null}function h(n){const{hasZ:t,hasM:u,paths:m}=n,o=h$1(x$1,m,t,u);return o?f$1(o,t,u):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var x;function j(t){return !Array.isArray(t[0])}let w=x=class extends p$7{constructor(...t){super(...t),this.rings=[],this.type="polygon";}static fromExtent(t){const r=t.clone().normalize(),e=t.spatialReference;let s=!1,i=!1;for(const o of r)o.hasZ&&(s=!0),o.hasM&&(i=!0);const n={rings:r.map((function(t){const r=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(s&&t.hasZ){const e=t.zmin+.5*(t.zmax-t.zmin);for(let t=0;t<r.length;t++)r[t].push(e);}if(i&&t.hasM){const e=t.mmin+.5*(t.mmax-t.mmin);for(let t=0;t<r.length;t++)r[t].push(e);}return r})),spatialReference:e};return s&&(n.hasZ=!0),i&&(n.hasM=!0),new x(n)}normalizeCtorArgs(t,r){let e,s,i=null,n=null;return t&&!Array.isArray(t)?(i=t.rings?t.rings:null,r||(t.spatialReference?r=t.spatialReference:t.rings||(r=t)),e=t.hasZ,s=t.hasM):i=t,i=i||[],r=r||k$4.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),n=i[0]&&i[0][0],n&&(void 0===e&&void 0===s?(e=n.length>2,s=n.length>3):void 0===e?e=s?n.length>3:n.length>2:void 0===s&&(s=e?n.length>3:n.length>2)),{rings:i,spatialReference:r,hasZ:e,hasM:s}}get cache(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get centroid(){const t=e$1(this);if(!t||isNaN(t[0])||isNaN(t[1])||this.hasZ&&isNaN(t[2]))return null;const r=new j$4;return r.x=t[0],r.y=t[1],r.spatialReference=this.spatialReference,this.hasZ&&(r.z=t[2]),r}get extent(){const{spatialReference:t}=this,r=v$1(this);if(!r)return null;const e=new M$1(r);return e.spatialReference=t,e}get isSelfIntersecting(){return g$1(this.rings)}writeRings(t,r){r.rings=m$k(this.rings);}addRing(t){if(!t)return;const r=this.rings,e=r.length;if(j(t)){const s=[];for(let r=0,e=t.length;r<e;r++)s[r]=t[r].toArray();r[e]=s;}else r[e]=t.concat();return this.notifyChange("rings"),this}clone(){const t=new x;return t.spatialReference=this.spatialReference,t.rings=m$k(this.rings),t.hasZ=this.hasZ,t.hasM=this.hasM,t}equals(t){if(this===t)return !0;if(t$q(t))return !1;const e=this.spatialReference,n=t.spatialReference;if(r$s(e)!==r$s(n))return !1;if(r$s(e)&&r$s(n)&&!e.equals(n))return !1;if(this.rings.length!==t.rings.length)return !1;const o=([t,r,e,s],[i,n,o,a])=>t===i&&r===n&&(null==e&&null==o||e===o)&&(null==s&&null==a||s===a);for(let s=0;s<this.rings.length;s++){const e=this.rings[s],i=t.rings[s];if(!l$m(e,i,o))return !1}return !0}contains(t){if(!t)return !1;const r=M$6(t,this.spatialReference);return c$5(this,r$s(r)?r:t)}isClockwise(t){let r;return r=j(t)?t.map((t=>this.hasZ?this.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y])):t,f$2(r,this.hasM,this.hasZ)}getPoint(t,r){if(!this._validateInputs(t,r))return null;const e=this.rings[t][r],s=this.hasZ,i=this.hasM;return s&&!i?new j$4(e[0],e[1],e[2],void 0,this.spatialReference):i&&!s?new j$4(e[0],e[1],void 0,e[2],this.spatialReference):s&&i?new j$4(e[0],e[1],e[2],e[3],this.spatialReference):new j$4(e[0],e[1],this.spatialReference)}insertPoint(t,r,e){return this._validateInputs(t,r,!0)?(h$4(this,e),Array.isArray(e)||(e=e.toArray()),this.rings[t].splice(r,0,e),this.notifyChange("rings"),this):this}removePoint(t,r){if(!this._validateInputs(t,r))return null;const e=new j$4(this.rings[t].splice(r,1)[0],this.spatialReference);return this.notifyChange("rings"),e}removeRing(t){if(!this._validateInputs(t,null))return null;const r=this.rings.splice(t,1)[0],e=this.spatialReference,s=r.map((t=>new j$4(t,e)));return this.notifyChange("rings"),s}setPoint(t,r,e){return this._validateInputs(t,r)?(h$4(this,e),Array.isArray(e)||(e=e.toArray()),this.rings[t][r]=e,this.notifyChange("rings"),this):this}_validateInputs(t,r,e=!1){if(null==t||t<0||t>=this.rings.length)return !1;if(null!=r){const s=this.rings[t];if(e&&(r<0||r>s.length))return !1;if(!e&&(r<0||r>=s.length))return !1}return !0}toJSON(t){return this.write({},t)}};e$p([d$e({readOnly:!0})],w.prototype,"cache",null),e$p([d$e({readOnly:!0})],w.prototype,"centroid",null),e$p([d$e({readOnly:!0})],w.prototype,"extent",null),e$p([d$e({readOnly:!0})],w.prototype,"isSelfIntersecting",null),e$p([d$e({type:[[[Number]]],json:{write:{isRequired:!0}}})],w.prototype,"rings",void 0),e$p([r$g("rings")],w.prototype,"writeRings",null),w=x=e$p([n$a("esri.geometry.Polygon")],w),w.prototype.toJSON.isDefaultToJSON=!0;const v=w;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var c;function u(t){return !Array.isArray(t[0])}let f=c=class extends p$7{constructor(...t){super(...t),this.paths=[],this.type="polyline";}normalizeCtorArgs(t,e){let s,r,i=null,a=null;return t&&!Array.isArray(t)?(i=t.paths?t.paths:null,e||(t.spatialReference?e=t.spatialReference:t.paths||(e=t)),s=t.hasZ,r=t.hasM):i=t,i=i||[],e=e||k$4.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),a=i[0]&&i[0][0],a&&(void 0===s&&void 0===r?(s=a.length>2,r=!1):void 0===s?s=!r&&a.length>3:void 0===r&&(r=!s&&a.length>3)),{paths:i,spatialReference:e,hasZ:s,hasM:r}}get cache(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const{spatialReference:t}=this,e=h(this);if(!e)return null;const s=new M$1(e);return s.spatialReference=t,s}writePaths(t,s){s.paths=m$k(this.paths);}addPath(t){if(!t)return;const e=this.paths,s=e.length;if(u(t)){const r=[];for(let e=0,s=t.length;e<s;e++)r[e]=t[e].toArray();e[s]=r;}else e[s]=t.concat();return this.notifyChange("paths"),this}clone(){const t=new c;return t.spatialReference=this.spatialReference,t.paths=m$k(this.paths),t.hasZ=this.hasZ,t.hasM=this.hasM,t}getPoint(t,e){if(!this._validateInputs(t,e))return null;const s=this.paths[t][e],r=this.hasZ,i=this.hasM;return r&&!i?new j$4(s[0],s[1],s[2],void 0,this.spatialReference):i&&!r?new j$4(s[0],s[1],void 0,s[2],this.spatialReference):r&&i?new j$4(s[0],s[1],s[2],s[3],this.spatialReference):new j$4(s[0],s[1],this.spatialReference)}insertPoint(t,e,s){return this._validateInputs(t,e,!0)?(h$4(this,s),Array.isArray(s)||(s=s.toArray()),this.paths[t].splice(e,0,s),this.notifyChange("paths"),this):this}removePath(t){if(!this._validateInputs(t,null))return null;const e=this.paths.splice(t,1)[0],s=this.spatialReference,r=e.map((t=>new j$4(t,s)));return this.notifyChange("paths"),r}removePoint(t,e){if(!this._validateInputs(t,e))return null;const s=new j$4(this.paths[t].splice(e,1)[0],this.spatialReference);return this.notifyChange("paths"),s}setPoint(t,e,s){return this._validateInputs(t,e)?(h$4(this,s),Array.isArray(s)||(s=s.toArray()),this.paths[t][e]=s,this.notifyChange("paths"),this):this}_validateInputs(t,e,s=!1){if(null==t||t<0||t>=this.paths.length)return !1;if(null!=e){const r=this.paths[t];if(s&&(e<0||e>r.length))return !1;if(!s&&(e<0||e>=r.length))return !1}return !0}toJSON(t){return this.write({},t)}};e$p([d$e({readOnly:!0})],f.prototype,"cache",null),e$p([d$e({readOnly:!0})],f.prototype,"extent",null),e$p([d$e({type:[[[Number]]],json:{write:{isRequired:!0}}})],f.prototype,"paths",void 0),e$p([r$g("paths")],f.prototype,"writePaths",null),f=c=e$p([n$a("esri.geometry.Polyline")],f),f.prototype.toJSON.isDefaultToJSON=!0;const m=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r=s$c.radius,n=s$c.eccentricitySquared,s$2={a1:r*n,a2:r*n*r*n,a3:r*n*n/2,a4:r*n*r*n*2.5,a5:r*n+r*n*n/2,a6:1-n};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let s$1=0;class t{constructor(t=null){this.uid=s$1++,t?(this._wkt=void 0!==t.wkt?t.wkt:null,this._wkid=void 0!==t.wkid?t.wkid:-1,this._isInverse=void 0!==t.isInverse&&!0===t.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1);}static fromGE(s){const i=new t;return i._wkt=s.wkt,i._wkid=s.wkid,i._isInverse=s.isInverse,i}get wkt(){return this._wkt}set wkt(t){this._wkt=t,this.uid=s$1++;}get wkid(){return this._wkid}set wkid(t){this._wkid=t,this.uid=s$1++;}get isInverse(){return this._isInverse}set isInverse(t){this._isInverse=t,this.uid=s$1++;}getInverse(){const s=new t;return s._wkt=this.wkt,s._wkid=this._wkid,s._isInverse=!this.isInverse,s}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s{constructor(s){if(this.steps=[],this._cached_projection={},this._chain="",this._gtlistentry=null,s&&s.steps)for(const i of s.steps)i instanceof t?this.steps.push(i):this.steps.push(new t({wkid:i.wkid,wkt:i.wkt,isInverse:i.isInverse}));}static cacheKey(t,s){return [void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():"",void 0!==s.wkid&&null!==s.wkid?s.wkid.toString():"-1",void 0!==s.wkt&&null!==s.wkt?s.wkt.toString():""].join(",")}static fromGE(i){const e=new s;let n="";for(const s of i.steps){const i=t.fromGE(s);e.steps.push(i),n+=i.uid.toString()+",";}return e._cached_projection={},e._gtlistentry=null,e._chain=n,e}getInverse(){const t=new s;t.steps=[];for(let s=this.steps.length-1;s>=0;s--){const i=this.steps[s];t.steps.push(i.getInverse());}return t}getGTListEntry(){let t="";for(const s of this.steps)t+=s.uid.toString()+",";return t!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=t),this._gtlistentry}assignCachedGe(t,i,e){this._cached_projection[s.cacheKey(t,i)]=e;}getCachedGeTransformation(t,i){let e="";for(const s of this.steps)e+=s.uid.toString()+",";e!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=e);const n=this._cached_projection[s.cacheKey(t,i)];return void 0===n?null:n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let Z=null,V=null,X=null,D={};function Q(n){return t$q(X)&&(X=Promise.all([P(),import('./geometryEngineBase.js').then((n=>n.g)),import('./hydrated.js')])),X.then((([,e,{hydratedAdapter:t}])=>{a$k(n),V=t,Z=e.default,Z._enableProjection(R);}))}function Y(n,e,t=null){return Array.isArray(n)?0===n.length?[]:$(V,n,n[0].spatialReference,e,t):$(V,[n],n.spatialReference,e,t)[0]}function $(n,e,t,r,l=null){if(t$q(t)||t$q(r))return e;if(on(t,r,l))return e.map((n=>e$z(En(n,t,r))));if(t$q(l)){const n=s.cacheKey(t,r);void 0!==D[n]?l=D[n]:(l=nn(t,r,null),t$q(l)&&(l=new s),D[n]=l);}if(t$q(Z))throw new tn;return Z._project(n,e,t,r,l)}function nn(n,e,t=null){if(t$q(Z))throw new tn;if(t$q(n)||t$q(e))return null;const r=Z._getTransformation(V,n,e,t,null==t?void 0:t.spatialReference);return null!==r?s.fromGE(r):null}class tn extends s$u{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()");}}var rn;function on(n,e,t){return !t&&(!!E$5(n,e)||I$3(n)&&I$3(e)&&!!Oe(n,e,he))}function En(n,e,t){return n?"x"in n?cn(n,e,new j$4,t,0):"xmin"in n?Mn(n,e,new M$1,t,0):"rings"in n?Pn(n,e,new v,t,0):"paths"in n?fn(n,e,new m,t,0):"points"in n?An(n,e,new m$1,t,0):null:null}function cn(n,e,t,r,l){Be[0]=n.x,Be[1]=n.y;const u=n.z;return Be[2]=void 0!==u?u:l,Fn(Be,e,0,Be,r,0,1)?(t.x=Be[0],t.y=Be[1],t.spatialReference=r,void 0===u?(t.z=void 0,t.hasZ=!1):(t.z=Be[2],t.hasZ=!0),void 0===n.m?(t.m=void 0,t.hasM=!1):(t.m=n.m,t.hasM=!0),t):null}function An(n,e,t,r,l){const{points:u,hasZ:o,hasM:s}=n,i=[],a=u.length,E=[];for(const C of u)E.push(C[0],C[1],o?C[2]:l);if(!Fn(E,e,0,E,r,0,a))return null;for(let C=0;C<a;++C){const n=3*C,e=E[n],t=E[n+1];o&&s?i.push([e,t,E[n+2],u[C][3]]):o?i.push([e,t,E[n+2]]):s?i.push([e,t,u[C][2]]):i.push([e,t]);}return t.points=i,t.spatialReference=r,t.hasZ=o,t.hasM=s,t}function fn(n,e,t,r,l){const{paths:u,hasZ:o,hasM:s}=n,i=[];return dn(u,o,s,e,i,r,l)?(t.paths=i,t.spatialReference=r,t.hasZ=o,t.hasM=s,t):null}function Pn(n,e,t,r,l){const{rings:u,hasZ:o,hasM:s}=n,i=[];return dn(u,o,s,e,i,r,l)?(t.rings=i,t.spatialReference=r,t.hasZ=o,t.hasM=s,t):null}function Mn(n,e,t,r,l){const{xmin:u,ymin:o,xmax:s,ymax:i,hasZ:a,hasM:E}=n;if(!Gn(u,o,a?n.zmin:l,e,Be,r))return null;t.xmin=Be[0],t.ymin=Be[1],a&&(t.zmin=Be[2]);return Gn(s,i,a?n.zmax:l,e,Be,r)?(t.xmax=Be[0],t.ymax=Be[1],a&&(t.zmax=Be[2]),E&&(t.mmin=n.mmin,t.mmax=n.mmax),t.spatialReference=r,t):null}function Gn(n,e,t,r,l,u){return Ie[0]=n,Ie[1]=e,Ie[2]=t,Fn(Ie,r,0,l,u,0,1)}function Fn(n,e,t,r,l,o,s=1){const i=Oe(e,l,he);if(t$q(i))return !1;if(i===zn){if(n===r&&t===o)return !0;const e=t+3*s;for(let l=t,u=o;l<e;l++,u++)r[u]=n[l];return !0}const a=t+3*s;for(let u=t,E=o;u<a;u+=3,E+=3)i(n,u,r,E);return !0}function dn(n,e,t,r,l,u,o=0){const s=new Array;for(const a of n)for(const n of a)s.push(n[0],n[1],e?n[2]:o);if(!Fn(s,r,0,s,u,0,s.length/3))return !1;let i=0;l.length=0;for(const a of n){const n=new Array;for(const r of a)e&&t?n.push([s[i++],s[i++],s[i++],r[3]]):e?n.push([s[i++],s[i++],s[i++]]):t?(n.push([s[i++],s[i++],r[2]]),i++):(n.push([s[i++],s[i++]]),i++);l.push(n);}return !0}function Kn(n,e){return e.spatialReference===n?e.spatialReferenceId:(e.spatialReference=n,"metersPerUnit"in e&&(e.metersPerUnit=H$1(n,1)),n.wkt===G$2.wkt?e.spatialReferenceId=rn.SPHERICAL_ECEF:G$5(n)?e.spatialReferenceId=rn.WGS84:k$5(n)?e.spatialReferenceId=rn.WEB_MERCATOR:T$3(n)?e.spatialReferenceId=rn.PLATE_CARREE:n.wkt===R$2.wkt?e.spatialReferenceId=rn.WGS84_ECEF:n.wkid===S$5.CGCS2000?e.spatialReferenceId=rn.CGCS2000:n.wkt===I$1.wkt?e.spatialReferenceId=rn.SPHERICAL_MARS_PCPF:n.wkt===E$2.wkt?e.spatialReferenceId=rn.SPHERICAL_MOON_PCPF:P$3(n)?e.spatialReferenceId=rn.GCSMARS2000:s$d(n)?e.spatialReferenceId=rn.GCSMOON2000:e.spatialReferenceId=rn.UNKNOWN)}function zn(n,e,t,r){n!==t&&(t[r++]=n[e++],t[r++]=n[e++],t[r]=n[e]);}function bn(n,e,t,r){t[r++]=Fe*(n[e++]/s$c.radius),t[r++]=Fe*(Math.PI/2-2*Math.atan(Math.exp(-n[e++]/s$c.radius))),t[r]=n[e];}function kn(n,e,t,r){bn(n,e,t,r),ie(t,r,t,r);}function vn(n,e,t,r){bn(n,e,t,r),fe(t,r,t,r);}function qn(n,t,r,l,u){const o=.4999999*Math.PI,s=e$5(me*n[t+1],-o,o),i=Math.sin(s);r[l++]=me*n[t]*u.radius,r[l++]=u.halfSemiMajorAxis*Math.log((1+i)/(1-i)),r[l]=n[t+2];}function Zn(n,e,t,r){qn(n,e,t,r,s$c);}!function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",n[n.WGS84=2]="WGS84",n[n.WEB_MERCATOR=3]="WEB_MERCATOR",n[n.WGS84_ECEF=4]="WGS84_ECEF",n[n.CGCS2000=5]="CGCS2000",n[n.WGS84_COMPARABLE_LON_LAT=6]="WGS84_COMPARABLE_LON_LAT",n[n.SPHERICAL_MARS_PCPF=7]="SPHERICAL_MARS_PCPF",n[n.GCSMARS2000=8]="GCSMARS2000",n[n.SPHERICAL_MOON_PCPF=9]="SPHERICAL_MOON_PCPF",n[n.GCSMOON2000=10]="GCSMOON2000",n[n.LON_LAT=11]="LON_LAT",n[n.PLATE_CARREE=12]="PLATE_CARREE";}(rn||(rn={}));const Vn=s$c.radius*Math.PI/180,Xn=180/(s$c.radius*Math.PI);function Dn(n,e,t,r){t[r]=n[e]*Vn,t[r+1]=n[e+1]*Vn,t[r+2]=n[e+2];}function Jn(n,e,t,r){t[r]=n[e]*Xn,t[r+1]=n[e+1]*Xn,t[r+2]=n[e+2];}function Qn(n,e,t,r){bn(n,e,t,r),Dn(t,r,t,r);}function Yn(n,e,t,r){Se(n,e,t,r),Dn(t,r,t,r);}function $n(n,e,t,r){ce(n,e,t,r),Dn(t,r,t,r);}function ne(n,e,t,r){Jn(n,e,t,r),ie(t,r,t,r);}function ee(n,e,t,r){Jn(n,e,t,r),Zn(t,r,t,r);}function te(n,e,t,r){Jn(n,e,t,r),fe(t,r,t,r);}function ue(n,e,t,r,l){const u=l+n[e+2],o=me*n[e+1],s=me*n[e],i=Math.cos(o);t[r++]=Math.cos(s)*i*u,t[r++]=Math.sin(s)*i*u,t[r]=Math.sin(o)*u;}function oe(n,e,t,r){ue(n,e,t,r,e$a.radius);}function se(n,e,t,r){ue(n,e,t,r,t$4.radius);}function ie(n,e,t,r){ue(n,e,t,r,s$c.radius);}function ae(n,e,t,r,u){const o=n[e],s=n[e+1],i=n[e+2],a=Math.sqrt(o*o+s*s+i*i),E=b$1(i/(0===a?1:a)),C=Math.atan2(s,o);t[r++]=Fe*C,t[r++]=Fe*E,t[r]=a-u;}function Ee(n,e,t,r){ae(n,e,t,r,e$a.radius);}function Ce(n,e,t,r){ae(n,e,t,r,t$4.radius);}function ce(n,e,t,r){ae(n,e,t,r,s$c.radius);}function Re(n,e,t,r){ce(n,e,t,r),Zn(t,r,t,r);}function Ae(n,e,t,r){ce(n,e,t,r),fe(t,r,t,r);}function _e(n,e,t,r,l){const u=me*n[e],o=me*n[e+1],s=n[e+2],i=Math.sin(o),a=Math.cos(o),E=l.radius/Math.sqrt(1-l.eccentricitySquared*i*i);t[r++]=(E+s)*a*Math.cos(u),t[r++]=(E+s)*a*Math.sin(u),t[r++]=(E*(1-l.eccentricitySquared)+s)*i;}function fe(n,e,t,r){_e(n,e,t,r,s$c);}function Se(n,e,t,r){const l=s$2,u=n[e],o=n[e+1],s=n[e+2];let i,a,E,C,c,R,A,_,f,S,P,L,M,O,p,N,G,W,h,T,m;i=Math.abs(s),a=u*u+o*o,E=Math.sqrt(a),C=a+s*s,c=Math.sqrt(C),T=Math.atan2(o,u),R=s*s/C,A=a/C,O=l.a2/c,p=l.a3-l.a4/c,A>.3?(_=i/c*(1+A*(l.a1+O+R*p)/c),h=Math.asin(_),S=_*_,f=Math.sqrt(1-S)):(f=E/c*(1-R*(l.a5-O-A*p)/c),h=Math.acos(f),S=1-f*f,_=Math.sqrt(S)),P=1-s$c.eccentricitySquared*S,L=s$c.radius/Math.sqrt(P),M=l.a6*L,O=E-L*f,p=i-M*_,G=f*O+_*p,N=f*p-_*O,W=N/(M/P+G),h+=W,m=G+N*W/2,s<0&&(h=-h),t[r++]=Fe*T,t[r++]=Fe*h,t[r]=m;}function Pe(n,e,t,r){Se(n,e,t,r),ie(t,r,t,r);}function Le(n,e,t,r){Se(n,e,t,r),Zn(t,r,t,r);}const Me={[rn.WGS84]:{[rn.CGCS2000]:null,[rn.GCSMARS2000]:null,[rn.GCSMOON2000]:null,[rn.LON_LAT]:zn,[rn.WGS84_COMPARABLE_LON_LAT]:zn,[rn.SPHERICAL_ECEF]:ie,[rn.SPHERICAL_MARS_PCPF]:null,[rn.SPHERICAL_MOON_PCPF]:null,[rn.UNKNOWN]:null,[rn.WEB_MERCATOR]:Zn,[rn.PLATE_CARREE]:Dn,[rn.WGS84]:zn,[rn.WGS84_ECEF]:fe},[rn.CGCS2000]:{[rn.CGCS2000]:zn,[rn.GCSMARS2000]:null,[rn.GCSMOON2000]:null,[rn.LON_LAT]:zn,[rn.WGS84_COMPARABLE_LON_LAT]:zn,[rn.SPHERICAL_ECEF]:ie,[rn.SPHERICAL_MARS_PCPF]:null,[rn.SPHERICAL_MOON_PCPF]:null,[rn.UNKNOWN]:null,[rn.WEB_MERCATOR]:null,[rn.PLATE_CARREE]:Dn,[rn.WGS84]:null,[rn.WGS84_ECEF]:fe},[rn.GCSMARS2000]:{[rn.CGCS2000]:null,[rn.GCSMARS2000]:zn,[rn.GCSMOON2000]:null,[rn.LON_LAT]:zn,[rn.WGS84_COMPARABLE_LON_LAT]:null,[rn.SPHERICAL_ECEF]:null,[rn.SPHERICAL_MARS_PCPF]:se,[rn.SPHERICAL_MOON_PCPF]:null,[rn.UNKNOWN]:null,[rn.WEB_MERCATOR]:null,[rn.PLATE_CARREE]:null,[rn.WGS84]:null,[rn.WGS84_ECEF]:null},[rn.GCSMOON2000]:{[rn.CGCS2000]:null,[rn.GCSMARS2000]:null,[rn.GCSMOON2000]:zn,[rn.LON_LAT]:zn,[rn.WGS84_COMPARABLE_LON_LAT]:null,[rn.SPHERICAL_ECEF]:null,[rn.SPHERICAL_MARS_PCPF]:null,[rn.SPHERICAL_MOON_PCPF]:oe,[rn.UNKNOWN]:null,[rn.WEB_MERCATOR]:null,[rn.PLATE_CARREE]:null,[rn.WGS84]:null,[rn.WGS84_ECEF]:null},[rn.WEB_MERCATOR]:{[rn.CGCS2000]:null,[rn.GCSMARS2000]:null,[rn.GCSMOON2000]:null,[rn.LON_LAT]:bn,[rn.WGS84_COMPARABLE_LON_LAT]:bn,[rn.SPHERICAL_ECEF]:kn,[rn.SPHERICAL_MARS_PCPF]:null,[rn.SPHERICAL_MOON_PCPF]:null,[rn.UNKNOWN]:null,[rn.WEB_MERCATOR]:zn,[rn.PLATE_CARREE]:Qn,[rn.WGS84]:bn,[rn.WGS84_ECEF]:vn},[rn.WGS84_ECEF]:{[rn.CGCS2000]:Se,[rn.GCSMARS2000]:null,[rn.GCSMOON2000]:null,[rn.LON_LAT]:Se,[rn.WGS84_COMPARABLE_LON_LAT]:Se,[rn.SPHERICAL_ECEF]:Pe,[rn.SPHERICAL_MARS_PCPF]:null,[rn.SPHERICAL_MOON_PCPF]:null,[rn.UNKNOWN]:null,[rn.WEB_MERCATOR]:Le,[rn.PLATE_CARREE]:Yn,[rn.WGS84]:Se,[rn.WGS84_ECEF]:zn},[rn.SPHERICAL_ECEF]:{[rn.CGCS2000]:ce,[rn.GCSMARS2000]:null,[rn.GCSMOON2000]:null,[rn.LON_LAT]:ce,[rn.WGS84_COMPARABLE_LON_LAT]:ce,[rn.SPHERICAL_ECEF]:zn,[rn.SPHERICAL_MARS_PCPF]:null,[rn.SPHERICAL_MOON_PCPF]:null,[rn.UNKNOWN]:null,[rn.WEB_MERCATOR]:Re,[rn.PLATE_CARREE]:$n,[rn.WGS84]:ce,[rn.WGS84_ECEF]:Ae},[rn.SPHERICAL_MARS_PCPF]:{[rn.CGCS2000]:null,[rn.GCSMARS2000]:Ce,[rn.GCSMOON2000]:null,[rn.LON_LAT]:Ce,[rn.WGS84_COMPARABLE_LON_LAT]:null,[rn.SPHERICAL_ECEF]:null,[rn.SPHERICAL_MARS_PCPF]:zn,[rn.SPHERICAL_MOON_PCPF]:null,[rn.UNKNOWN]:null,[rn.WEB_MERCATOR]:null,[rn.PLATE_CARREE]:null,[rn.WGS84]:null,[rn.WGS84_ECEF]:null},[rn.SPHERICAL_MOON_PCPF]:{[rn.CGCS2000]:null,[rn.GCSMARS2000]:null,[rn.GCSMOON2000]:Ee,[rn.LON_LAT]:Ee,[rn.WGS84_COMPARABLE_LON_LAT]:null,[rn.SPHERICAL_ECEF]:null,[rn.SPHERICAL_MARS_PCPF]:null,[rn.SPHERICAL_MOON_PCPF]:zn,[rn.UNKNOWN]:null,[rn.WEB_MERCATOR]:null,[rn.PLATE_CARREE]:null,[rn.WGS84]:null,[rn.WGS84_ECEF]:null},[rn.UNKNOWN]:{[rn.CGCS2000]:null,[rn.GCSMARS2000]:null,[rn.GCSMOON2000]:null,[rn.LON_LAT]:null,[rn.WGS84_COMPARABLE_LON_LAT]:null,[rn.SPHERICAL_ECEF]:null,[rn.SPHERICAL_MARS_PCPF]:null,[rn.SPHERICAL_MOON_PCPF]:null,[rn.UNKNOWN]:zn,[rn.WEB_MERCATOR]:null,[rn.PLATE_CARREE]:null,[rn.WGS84]:null,[rn.WGS84_ECEF]:null},[rn.LON_LAT]:{[rn.CGCS2000]:zn,[rn.GCSMARS2000]:zn,[rn.GCSMOON2000]:zn,[rn.LON_LAT]:zn,[rn.WGS84_COMPARABLE_LON_LAT]:zn,[rn.SPHERICAL_ECEF]:ie,[rn.SPHERICAL_MARS_PCPF]:se,[rn.SPHERICAL_MOON_PCPF]:oe,[rn.UNKNOWN]:null,[rn.WEB_MERCATOR]:Zn,[rn.PLATE_CARREE]:Dn,[rn.WGS84]:zn,[rn.WGS84_ECEF]:fe},[rn.WGS84_COMPARABLE_LON_LAT]:{[rn.CGCS2000]:null,[rn.GCSMARS2000]:null,[rn.GCSMOON2000]:null,[rn.LON_LAT]:zn,[rn.WGS84_COMPARABLE_LON_LAT]:zn,[rn.SPHERICAL_ECEF]:ie,[rn.SPHERICAL_MARS_PCPF]:null,[rn.SPHERICAL_MOON_PCPF]:null,[rn.UNKNOWN]:null,[rn.WEB_MERCATOR]:null,[rn.PLATE_CARREE]:Dn,[rn.WGS84]:zn,[rn.WGS84_ECEF]:fe},[rn.PLATE_CARREE]:{[rn.CGCS2000]:Jn,[rn.GCSMARS2000]:null,[rn.GCSMOON2000]:null,[rn.LON_LAT]:Jn,[rn.WGS84_COMPARABLE_LON_LAT]:Jn,[rn.SPHERICAL_ECEF]:ne,[rn.SPHERICAL_MARS_PCPF]:null,[rn.SPHERICAL_MOON_PCPF]:null,[rn.UNKNOWN]:null,[rn.WEB_MERCATOR]:ee,[rn.PLATE_CARREE]:zn,[rn.WGS84]:Jn,[rn.WGS84_ECEF]:te}};function Oe(n,e,t=Ne()){return t$q(n)||t$q(e)?null:pe(n,e,t).projector}function pe(n,e,t){if(t$q(n)||t$q(e)||t.source.spatialReference===n&&t.dest.spatialReference===e)return t;const r=Kn(n,t.source),l=Kn(e,t.dest);return r===rn.UNKNOWN&&l===rn.UNKNOWN?E$5(n,e)?t.projector=zn:t.projector=null:t.projector=Me[r][l],t}function Ne(){return {source:{spatialReference:null,spatialReferenceId:rn.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:rn.UNKNOWN,metersPerUnit:1},projector:zn}}const he=Ne(),me=M$3(1),Fe=m$5(1),Ie=n$4(),Be=n$4();

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

createCommonjsModule(function (module, exports) {
(function (global, factory) {
	factory(exports) ;
}(commonjsGlobal, (function (exports) {
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
var isBrowser = typeof window !== 'undefined';
// allow consuming libraries to provide their own Promise implementations
var utils = {
    Promise: isBrowser ? window['Promise'] : undefined
};

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
var DEFAULT_VERSION = '4.23';
var NEXT = 'next';
function parseVersion(version) {
    if (version.toLowerCase() === NEXT) {
        return NEXT;
    }
    var match = version && version.match(/^(\d)\.(\d+)/);
    return match && {
        major: parseInt(match[1], 10),
        minor: parseInt(match[2], 10)
    };
}
/**
 * Get the CDN url for a given version
 *
 * @param version Ex: '4.23' or '3.40'. Defaults to the latest 4.x version.
 */
function getCdnUrl(version) {
    if (version === void 0) { version = DEFAULT_VERSION; }
    return "https://js.arcgis.com/" + version + "/";
}
/**
 * Get the CDN url for a the CSS for a given version and/or theme
 *
 * @param version Ex: '4.23', '3.40', or 'next'. Defaults to the latest 4.x version.
 */
function getCdnCssUrl(version) {
    if (version === void 0) { version = DEFAULT_VERSION; }
    var baseUrl = getCdnUrl(version);
    var parsedVersion = parseVersion(version);
    if (parsedVersion !== NEXT && parsedVersion.major === 3) {
        // NOTE: at 3.11 the CSS moved from the /js folder to the root
        var path = parsedVersion.minor <= 10 ? 'js/' : '';
        return "" + baseUrl + path + "esri/css/esri.css";
    }
    else {
        // assume 4.x
        return baseUrl + "esri/themes/light/main.css";
    }
}

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
function createStylesheetLink(href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    return link;
}
function insertLink(link, before) {
    if (before) {
        // the link should be inserted before a specific node
        var beforeNode = document.querySelector(before);
        beforeNode.parentNode.insertBefore(link, beforeNode);
    }
    else {
        // append the link to then end of the head tag
        document.head.appendChild(link);
    }
}
// check if the css url has been injected or added manually
function getCss(url) {
    return document.querySelector("link[href*=\"" + url + "\"]");
}
function getCssUrl(urlOrVersion) {
    return !urlOrVersion || parseVersion(urlOrVersion)
        // if it's a valid version string return the CDN URL
        ? getCdnCssUrl(urlOrVersion)
        // otherwise assume it's a URL and return that
        : urlOrVersion;
}
// lazy load the CSS needed for the ArcGIS API
function loadCss(urlOrVersion, before) {
    var url = getCssUrl(urlOrVersion);
    var link = getCss(url);
    if (!link) {
        // create & load the css link
        link = createStylesheetLink(url);
        insertLink(link, before);
    }
    return link;
}

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
var defaultOptions = {};
function createScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.setAttribute('data-esri-loader', 'loading');
    return script;
}
// add a one-time load handler to script
// and optionally add a one time error handler as well
function handleScriptLoad(script, callback, errback) {
    var onScriptError;
    if (errback) {
        // set up an error handler as well
        onScriptError = handleScriptError(script, errback);
    }
    var onScriptLoad = function () {
        // pass the script to the callback
        callback(script);
        // remove this event listener
        script.removeEventListener('load', onScriptLoad, false);
        if (onScriptError) {
            // remove the error listener as well
            script.removeEventListener('error', onScriptError, false);
        }
    };
    script.addEventListener('load', onScriptLoad, false);
}
// add a one-time error handler to the script
function handleScriptError(script, callback) {
    var onScriptError = function (e) {
        // reject the promise and remove this event listener
        callback(e.error || new Error("There was an error attempting to load " + script.src));
        // remove this event listener
        script.removeEventListener('error', onScriptError, false);
    };
    script.addEventListener('error', onScriptError, false);
    return onScriptError;
}
// allow the user to configure default script options rather than passing options to `loadModules` each time
function setDefaultOptions(options) {
    if (options === void 0) { options = {}; }
    defaultOptions = options;
}
// get the script injected by this library
function getScript() {
    return document.querySelector('script[data-esri-loader]');
}
// has ArcGIS API been loaded on the page yet?
function isLoaded() {
    var globalRequire = window['require'];
    // .on() ensures that it's Dojo's AMD loader
    return globalRequire && globalRequire.on;
}
// load the ArcGIS API on the page
function loadScript(options) {
    if (options === void 0) { options = {}; }
    // we would have liked to use spread like { ...defaultOptions, ...options }
    // but TS would inject a polyfill that would require use to configure rollup w content: 'window'
    // if we have another occasion to use spread, let's do that and replace this for...in
    var opts = {};
    [defaultOptions, options].forEach(function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                opts[prop] = obj[prop];
            }
        }
    });
    // URL to load
    var version = opts.version;
    var url = opts.url || getCdnUrl(version);
    return new utils.Promise(function (resolve, reject) {
        var script = getScript();
        if (script) {
            // the API is already loaded or in the process of loading...
            // NOTE: have to test against scr attribute value, not script.src
            // b/c the latter will return the full url for relative paths
            var src = script.getAttribute('src');
            if (src !== url) {
                // potentially trying to load a different version of the API
                reject(new Error("The ArcGIS API for JavaScript is already loaded (" + src + ")."));
            }
            else {
                if (isLoaded()) {
                    // the script has already successfully loaded
                    resolve(script);
                }
                else {
                    // wait for the script to load and then resolve
                    handleScriptLoad(script, resolve, reject);
                }
            }
        }
        else {
            if (isLoaded()) {
                // the API has been loaded by some other means
                // potentially trying to load a different version of the API
                reject(new Error("The ArcGIS API for JavaScript is already loaded."));
            }
            else {
                // this is the first time attempting to load the API
                var css = opts.css;
                if (css) {
                    var useVersion = css === true;
                    // load the css before loading the script
                    loadCss(useVersion ? version : css, opts.insertCssBefore);
                }
                // create a script object whose source points to the API
                script = createScript(url);
                // _currentUrl = url;
                // once the script is loaded...
                handleScriptLoad(script, function () {
                    // update the status of the script
                    script.setAttribute('data-esri-loader', 'loaded');
                    // return the script
                    resolve(script);
                }, reject);
                // load the script
                document.body.appendChild(script);
            }
        }
    });
}

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
// wrap Dojo's require() in a promise
function requireModules(modules) {
    return new utils.Promise(function (resolve, reject) {
        // If something goes wrong loading the esri/dojo scripts, reject with the error.
        var errorHandler = window['require'].on('error', reject);
        window['require'](modules, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // remove error handler
            errorHandler.remove();
            // Resolve with the parameters from dojo require as an array.
            resolve(args);
        });
    });
}
// returns a promise that resolves with an array of the required modules
// also will attempt to lazy load the ArcGIS API if it has not already been loaded
function loadModules(modules, loadScriptOptions) {
    if (loadScriptOptions === void 0) { loadScriptOptions = {}; }
    if (!isLoaded()) {
        // script is not yet loaded, is it in the process of loading?
        var script = getScript();
        var src = script && script.getAttribute('src');
        if (!loadScriptOptions.url && src) {
            // script is still loading and user did not specify a URL
            // in this case we want to default to the URL that's being loaded
            // instead of defaulting to the latest 4.x URL
            loadScriptOptions.url = src;
        }
        // attempt to load the script then load the modules
        return loadScript(loadScriptOptions).then(function () { return requireModules(modules); });
    }
    else {
        // script is already loaded, just load the modules
        return requireModules(modules);
    }
}

/*
  Copyright (c) 2017 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
// re-export the functions that are part of the public API

exports.utils = utils;
exports.loadModules = loadModules;
exports.getScript = getScript;
exports.isLoaded = isLoaded;
exports.loadScript = loadScript;
exports.setDefaultOptions = setDefaultOptions;
exports.loadCss = loadCss;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=esri-loader.js.map
});

/*
 *   Copyright (c) 2022 Esri
 *   All rights reserved.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */
const languageMap = new Map([
  ['ar', 'ar'],
  ['bg', 'bg'],
  ['bs', 'bs'],
  ['ca', 'ca'],
  ['cs', 'cs'],
  ['da', 'da'],
  ['de', 'de'],
  ['el', 'el'],
  ['en', 'en'],
  ['es', 'es'],
  ['et', 'et'],
  ['fi', 'fi'],
  ['fr', 'fr'],
  ['he', 'he'],
  ['hr', 'hr'],
  ['hu', 'hu'],
  ['id', 'id'],
  ['it', 'it'],
  ['ja', 'ja'],
  ['ko', 'ko'],
  ['lt', 'lt'],
  ['lv', 'lv'],
  ['nb', 'nb'],
  ['nl', 'nl'],
  ['pl', 'pl'],
  ['pt-br', 'pt-BR'],
  ['pt-pt', 'pt-PT'],
  ['ro', 'ro'],
  ['ru', 'ru'],
  ['sk', 'sk'],
  ['sl', 'sl'],
  ['sr', 'sr'],
  ['sv', 'sv'],
  ['th', 'th'],
  ['tr', 'tr'],
  ['uk', 'uk'],
  ['vi', 'vi'],
  ['zh-cn', 'zh-CN'],
  ['zh-hk', 'zh-HK'],
  ['zh-tw', 'zh-TW'],
]);

// https://medium.com/stencil-tricks/implementing-internationalisation-i18n-with-stencil-5e6559554117
function getComponentClosestLanguage(element) {
  var _a, _b, _c;
  const closestElement = (_a = element.closest('[lang]')) !== null && _a !== void 0 ? _a : (_c = (_b = element.shadowRoot) === null || _b === void 0 ? void 0 : _b.ownerDocument) === null || _c === void 0 ? void 0 : _c.documentElement;
  // language set by the calling application or browser. defaults to english.
  const lang = ((closestElement === null || closestElement === void 0 ? void 0 : closestElement.lang) || (navigator === null || navigator === void 0 ? void 0 : navigator.language) || 'en').toLowerCase();
  if (languageMap.has(lang)) {
    return languageMap.get(lang);
  }
  else {
    // "ru-RU" maps to "ru" use case
    if (languageMap.has(lang.slice(0, 2))) {
      return languageMap.get(lang.slice(0, 2));
    }
    else {
      return 'en';
    }
  }
}
function fetchLocaleStringsForComponent(componentName, locale) {
  return new Promise((resolve, reject) => {
    fetch(getAssetPath(`../assets/t9n/${componentName}/resources_${locale}.json`)).then(result => {
      if (result.ok)
        resolve(result.json());
      else
        reject();
    }, () => reject());
  });
}
async function getLocaleComponentStrings(element) {
  const componentName = element.tagName.toLowerCase();
  const componentLanguage = getComponentClosestLanguage(element);
  let strings;
  try {
    strings = await fetchLocaleStringsForComponent(componentName, componentLanguage);
  }
  catch (e) {
    console.warn(`no locale for ${componentName} (${componentLanguage}) loading default locale en.`);
    strings = await fetchLocaleStringsForComponent(componentName, 'en');
  }
  return [strings, componentLanguage];
}

const instantAppsSocialShareCss = ":host{display:block;--instant-apps-social-share-width--s:200px;--instant-apps-social-share-width--m:280px;--instant-apps-social-share-width--l:320px;--instant-apps-social-share-width-horizontal--s:300px;--instant-apps-social-share-width-horizontal--m:380px;--instant-apps-social-share-width-horizontal--l:420px;--instant-apps-social-share-background-color:transparent;--instant-apps-social-share-popover-button-background-color:transparent;--instant-apps-social-share-popover-button-icon-color:var(--calcite-ui-icon-color);--instant-apps-social-share-embed-border:1px solid $border;--instant-apps-social-share-embed-text-area-text:#468540}:host .instant-apps-social-share__popover-button{background-color:var(--instant-apps-social-share-popover-button-background-color)}:host .instant-apps-social-share__popover-button calcite-icon{color:var(--instant-apps-social-share-popover-button-icon-color)}:host .instant-apps-social-share__dialog{box-sizing:border-box;height:auto;padding:10px 0;border-radius:5px}:host .instant-apps-social-share__dialog-embed{border:var(--instant-apps-social-share-embed-border);background-color:var(--instant-apps-social-share-background-color)}:host .instant-apps-social-share__options{margin:0;padding:1% 0 0 0;list-style-type:none}:host .instant-apps-social-share__options li{box-sizing:border-box;display:flex;align-items:center;width:100%;padding:5%;transition:background-color 0.15s ease-out 0s}:host .instant-apps-social-share__options li .instant-apps-social-share__icon,:host .instant-apps-social-share__options li .instant-apps-social-share__option-text{display:inline-block}:host .instant-apps-social-share__options li .instant-apps-social-share__icon{display:flex;align-items:center}:host .instant-apps-social-share__options li .instant-apps-social-share__option-text{width:85%;margin-left:10px;word-break:break-word}:host .instant-apps-social-share__options li:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}:host .instant-apps-social-share__tip{box-sizing:border-box;padding:0 5% 1% 5%}:host .instant-apps-social-share__tip-header{display:flex;align-items:center;color:#007ac2;margin:8px 0 5px 0}:host .instant-apps-social-share__tip-header calcite-icon{margin-right:5px}:host .instant-apps-social-share__tip-content{line-height:17px;margin:0;padding-top:2%}:host .instant-apps-social-share__success{display:flex;flex-direction:column;padding:15px}:host .instant-apps-social-share__success-header{display:flex;align-items:center;font-weight:bold;margin-bottom:10px}:host .instant-apps-social-share__success-icon{display:flex;align-items:center;margin-right:5px}:host .instant-apps-social-share__success-icon calcite-icon{color:var(--calcite-ui-success)}:host .instant-apps-social-share__success-message{line-height:16px}:host .instant-apps-social-share__embed{box-sizing:border-box;width:100%;padding:5%;margin-bottom:10px;border-top:1px solid #d3d3d3}:host .instant-apps-social-share__embed-header{display:flex;align-items:center;margin-bottom:5px}:host .instant-apps-social-share__embed-header calcite-icon{margin-right:5px}:host .instant-apps-social-share__embed-code-text-area{border:1px solid #d3d3d3}:host .instant-apps-social-share__embed-code-text-area textarea{box-sizing:border-box;padding:4%;border:none;resize:none;background:transparent;width:100%;font-family:var(--calcite-sans-family);color:var(--calcite-ui-text-1)}:host .instant-apps-social-share__embed-code-text-area button{display:flex;align-items:center;text-align:start;width:100%;border:none;border-top:1px solid #d3d3d3;background-color:transparent;line-height:16px;font-weight:400;padding:3%;color:var(--calcite-ui-text-1)}:host .instant-apps-social-share__embed-code-text-area button calcite-icon{color:#007ac2;margin-right:3px}:host .instant-apps-social-share__embed-code-text-area button:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2);transition:background-color 0.15s ease-out 0s}:host .instant-apps-social-share__embed-text-area-text{font-weight:600;color:var(--instant-apps-social-share-embed-text-area-text)}:host .instant-apps-social-share__embed-dimensions{display:flex;justify-content:space-between;margin-top:10px}:host .instant-apps-social-share__embed-dimensions-input{width:47%;box-sizing:border-box}:host .instant-apps-social-share__embed-dimensions-input input{border:1px solid #d3d3d3;width:100%;height:25px;font-family:var(--calcite-sans-family)}:host .instant-apps-social-share__layout--horizontal .instant-apps-social-share__options{display:flex;justify-content:space-around;margin-bottom:8%}:host .instant-apps-social-share__layout--horizontal .instant-apps-social-share__options li{flex-direction:column;padding:0}:host .instant-apps-social-share__layout--horizontal .instant-apps-social-share__options li .instant-apps-social-share__option-text{white-space:nowrap;margin-left:0;margin-top:10px;text-align:center}:host .instant-apps-social-share__layout--horizontal .instant-apps-social-share__options li:hover{background-color:unset}:host([scale=s]) .instant-apps-social-share__dialog{width:var(--instant-apps-social-share-width--s)}:host([scale=s]) .instant-apps-social-share__icon{width:16px;height:16px}:host([scale=s]) .instant-apps-social-share__option-text{font-size:var(--calcite-font-size--1)}:host([scale=s]) .instant-apps-social-share__dialog.instant-apps-social-share__layout--horizontal{width:var(--instant-apps-social-share-width-horizontal--s)}:host([scale=s]) .instant-apps-social-share__tip-header,:host([scale=s]) .instant-apps-social-share__tip-content,:host([scale=s]) .instant-apps-social-share__embed-header,:host([scale=s]) .instant-apps-social-share__embed-dimensions-input{font-size:var(--calcite-font-size--2)}:host([scale=m]) .instant-apps-social-share__dialog{width:var(--instant-apps-social-share-width--m)}:host([scale=m]) .instant-apps-social-share__icon{width:24px;height:24px}:host([scale=m]) .instant-apps-social-share__option-text{font-size:var(--calcite-font-size-0)}:host([scale=m]) .instant-apps-social-share__dialog.instant-apps-social-share__layout--horizontal{width:var(--instant-apps-social-share-width-horizontal--m)}:host([scale=m]) .instant-apps-social-share__tip-header,:host([scale=m]) .instant-apps-social-share__tip-content,:host([scale=m]) .instant-apps-social-share__embed-header,:host([scale=m]) .instant-apps-social-share__embed-dimensions-input{font-size:var(--calcite-font-size--1)}:host([scale=l]) .instant-apps-social-share__dialog{width:var(--instant-apps-social-share-width--l)}:host([scale=l]) .instant-apps-social-share__icon{width:32px;height:32px}:host([scale=l]) .instant-apps-social-share__option-text{font-size:var(--calcite-font-size-1)}:host([scale=l]) .instant-apps-social-share__dialog.instant-apps-social-share__layout--horizontal{width:var(--instant-apps-social-share-width-horizontal--l)}:host([scale=l]) .instant-apps-social-share__tip-header,:host([scale=l]) .instant-apps-social-share__tip-content,:host([scale=l]) .instant-apps-social-share__embed-header,:host([scale=l]) .instant-apps-social-share__embed-dimensions-input{font-size:var(--calcite-font-size-0)}";

const base = 'instant-apps-social-share';
const CSS = {
  base,
  dialog: `${base}__dialog`,
  dialogEmbed: `${base}__dialog-embed`,
  dialogContent: `${base}__dialog-content`,
  options: `${base}__options`,
  tipContainer: `${base}__tip`,
  tipHeader: `${base}__tip-header`,
  tipContent: `${base}__tip-content`,
  icon: `${base}__icon`,
  optionText: `${base}__option-text`,
  popoverButton: `${base}__popover-button`,
  layout: {
    vertical: `${base}__layout--vertical`,
    horizontal: `${base}__layout--horizontal`,
  },
  success: {
    container: `${base}__success`,
    header: `${base}__success-header`,
    message: `${base}__success-message`,
    icon: `${base}__success-icon`,
  },
  embed: {
    container: `${base}__embed`,
    header: `${base}__embed-header`,
    embedCode: {
      container: `${base}__embed-code`,
      textArea: `${base}__embed-code-text-area`,
      copyButton: `${base}__embed-code-copy-button`,
    },
    textAreaText: `${base}__embed-text-area-text`,
    dimensions: {
      container: `${base}__embed-dimensions`,
      input: `${base}__embed-dimensions-input`,
    },
  },
};
const SOCIAL_URL_TEMPLATES = {
  facebook: 'https://www.facebook.com/sharer/sharer.php?u={url}',
  twitter: 'https://twitter.com/intent/tweet?text={text}&url={url}',
  linkedIn: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
};
const SHORTEN_API = 'https://arcg.is/prod/shorten';
let InstantAppsSocialShare$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    // PUBLIC PROPERTIES
    this.mode = 'popover';
    this.shareUrl = window.location.href;
    this.shareText = '';
    this.embed = false;
    this.shareButtonColor = 'neutral';
    this.iframeInnerText = '';
    this.displayTipText = true;
    this.socialMedia = true;
    this.shareIconsLayout = 'vertical';
    this.scale = 'm';
    this.defaultUrlParams = null;
    // mode = 'popover'
    this.opened = false;
    this.copied = false;
    // mode = 'inline'
    this.inlineCopyLinkOpened = false;
    this.inlineCopyEmbedOpened = false;
    this.embedWidth = 400;
    this.embedHeight = 600;
  }
  componentDidLoad() {
    var _a, _b;
    this.getMessages();
    this.setupAutoCloseListeners();
    if (this.mode === 'popover' && this.opened) {
      this.popoverRef.toggle(true);
    }
    if (this.embed) {
      (_a = this.embedWidthRef) === null || _a === void 0 ? void 0 : _a.addEventListener('change', this.updateDimensions.bind(this, 'width'));
      (_b = this.embedHeightRef) === null || _b === void 0 ? void 0 : _b.addEventListener('change', this.updateDimensions.bind(this, 'height'));
    }
  }
  disconnectedCallback() {
    var _a, _b, _c;
    document.documentElement.removeEventListener('click', this.autoCloseCallback.bind(this));
    if (this.mode === 'popover') {
      this.popoverRef.removeEventListener('click', this.stopPropagationCallback.bind(this));
      this.popoverRef.removeEventListener('calcitePopoverClose', this.resetPopoverCopyState.bind(this));
    }
    else {
      (_a = this.embedWidthRef) === null || _a === void 0 ? void 0 : _a.removeEventListener('change', this.updateDimensions.bind(this));
      (_b = this.embedHeightRef) === null || _b === void 0 ? void 0 : _b.removeEventListener('change', this.updateDimensions.bind(this));
      (_c = this.dialogContentRef) === null || _c === void 0 ? void 0 : _c.removeEventListener('click', this.stopPropagationCallback.bind(this));
    }
  }
  async getMessages() {
    const messages = await getLocaleComponentStrings(this.el);
    this.messages = messages[0];
  }
  setupAutoCloseListeners() {
    var _a, _b, _c;
    document.documentElement.addEventListener('click', this.autoCloseCallback.bind(this));
    if (this.mode === 'popover') {
      (_a = this.popoverRef) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.stopPropagationCallback.bind(this));
      (_b = this.popoverRef) === null || _b === void 0 ? void 0 : _b.addEventListener('calcitePopoverClose', this.resetPopoverCopyState.bind(this));
    }
    else {
      (_c = this.dialogContentRef) === null || _c === void 0 ? void 0 : _c.addEventListener('click', this.stopPropagationCallback.bind(this));
    }
  }
  autoCloseCallback() {
    var _a, _b, _c;
    if (this.mode === 'popover') {
      this.opened = false;
      (_a = this.popoverRef) === null || _a === void 0 ? void 0 : _a.toggle(this.opened);
    }
    else {
      (_b = this.copyLinkPopoverRef) === null || _b === void 0 ? void 0 : _b.toggle(false);
      this.inlineCopyLinkOpened = false;
      (_c = this.copyEmbedPopoverRef) === null || _c === void 0 ? void 0 : _c.toggle(false);
      this.inlineCopyEmbedOpened = false;
    }
  }
  stopPropagationCallback(event) {
    event.stopPropagation();
  }
  resetPopoverCopyState() {
    setTimeout(() => {
      this.copied = false;
    }, 200);
  }
  updateDimensions(type) {
    var _a, _b;
    if (type === 'width') {
      const value = (_a = this.embedWidthRef) === null || _a === void 0 ? void 0 : _a.value;
      this.embedWidth = parseInt(value);
    }
    else {
      const value = (_b = this.embedHeightRef) === null || _b === void 0 ? void 0 : _b.value;
      this.embedHeight = parseInt(value);
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const content = this.copied && this.mode === 'popover' ? (this.renderSuccess()) : (h$n("div", { class: CSS.dialogContent }, this.renderOptions(), this.displayTipText ? this.renderTip() : null, this.embed ? this.renderEmbed() : null));
    const layoutClass = this.shareIconsLayout === 'vertical' ? ` ${CSS.layout.vertical}` : ` ${CSS.layout.horizontal}`;
    const dialogContent = (h$n("div", { ref: el => (this.dialogContentRef = el), class: `${CSS.dialog}${layoutClass}` }, content));
    return (h$n(Host, null, this.mode === 'popover'
      ? [
        h$n("calcite-popover", { ref: (el) => (this.popoverRef = el), label: (_b = (_a = this.messages) === null || _a === void 0 ? void 0 : _a.share) === null || _b === void 0 ? void 0 : _b.label, "reference-element": "shareButton", placement: "bottom-start", scale: this.scale }, dialogContent),
        h$n("calcite-button", { onClick: this.togglePopover.bind(this), id: "shareButton", class: CSS.popoverButton, color: this.shareButtonColor, appearance: "transparent", label: (_d = (_c = this.messages) === null || _c === void 0 ? void 0 : _c.share) === null || _d === void 0 ? void 0 : _d.label, title: (_f = (_e = this.messages) === null || _e === void 0 ? void 0 : _e.share) === null || _f === void 0 ? void 0 : _f.label, scale: this.scale }, h$n("calcite-icon", { icon: "share", scale: "m" })),
      ]
      : [
        dialogContent,
        h$n("calcite-popover", { ref: (el) => (this.copyLinkPopoverRef = el), label: (_h = (_g = this.messages) === null || _g === void 0 ? void 0 : _g.share) === null || _h === void 0 ? void 0 : _h.label, "reference-element": "copyToClipboard", placement: "trailing", scale: this.scale }, this.renderSuccess()),
        h$n("calcite-popover", { ref: (el) => (this.copyEmbedPopoverRef = el), label: (_k = (_j = this.messages) === null || _j === void 0 ? void 0 : _j.share) === null || _k === void 0 ? void 0 : _k.label, "reference-element": "copyEmbedToClipboard", placement: "trailing", scale: this.scale }, this.renderEmbedSuccess()),
      ]));
  }
  renderSuccess() {
    var _a;
    const success = (_a = this.messages) === null || _a === void 0 ? void 0 : _a.success;
    return (h$n("div", { class: CSS.success.container }, h$n("span", { class: CSS.success.header }, h$n("span", { class: CSS.success.icon }, h$n("calcite-icon", { icon: "check-circle-f", scale: this.scale })), success === null || success === void 0 ? void 0 :
      success.label), h$n("span", { class: CSS.success.message }, success === null || success === void 0 ? void 0 : success.url)));
  }
  renderEmbedSuccess() {
    var _a;
    const success = (_a = this.messages) === null || _a === void 0 ? void 0 : _a.success;
    return (h$n("div", { class: CSS.success.container }, h$n("span", { class: CSS.success.header }, h$n("span", { class: CSS.success.icon }, h$n("calcite-icon", { icon: "check-circle-f", scale: this.scale })), success === null || success === void 0 ? void 0 :
      success.label), h$n("span", { class: CSS.success.message }, success === null || success === void 0 ? void 0 : success.embed)));
  }
  renderOptions() {
    var _a, _b, _c, _d, _e;
    const options = (_a = this.messages) === null || _a === void 0 ? void 0 : _a.options;
    return (h$n("ul", { class: CSS.options, role: "menu" }, h$n("li", { id: "copyToClipboard", onClick: this.handleShareItem.bind(this, 'link'), role: "menuitem" }, h$n("span", { class: CSS.icon }, h$n("calcite-icon", { icon: "link", scale: this.scale })), h$n("span", { class: CSS.optionText }, (_b = options === null || options === void 0 ? void 0 : options.link) === null || _b === void 0 ? void 0 : _b.label)), this.socialMedia
      ? [
        h$n("li", { onClick: this.handleShareItem.bind(this, 'facebook'), role: "menuitem" }, h$n("span", { class: CSS.icon }, this.renderFacebookIcon()), h$n("span", { class: CSS.optionText }, (_c = options === null || options === void 0 ? void 0 : options.facebook) === null || _c === void 0 ? void 0 : _c.label)),
        h$n("li", { onClick: this.handleShareItem.bind(this, 'twitter'), role: "menuitem" }, h$n("span", { class: CSS.icon }, this.renderTwitterIcon()), h$n("span", { class: CSS.optionText }, (_d = options === null || options === void 0 ? void 0 : options.twitter) === null || _d === void 0 ? void 0 : _d.label)),
        h$n("li", { onClick: this.handleShareItem.bind(this, 'linkedIn'), role: "menuitem" }, h$n("span", { class: CSS.icon }, this.renderLinkedInIcon()), h$n("span", { class: CSS.optionText }, (_e = options === null || options === void 0 ? void 0 : options.linkedIn) === null || _e === void 0 ? void 0 : _e.label)),
      ]
      : null));
  }
  renderFacebookIcon() {
    return (h$n("svg", { height: "100%", style: { fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '2' }, version: "1.1", viewBox: "0 0 512 512", width: "100%", xmlns: "http://www.w3.org/2000/svg" }, h$n("g", null, h$n("path", { d: "M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z", style: { fill: '#1877f2', fillRule: 'nonzero' } }), h$n("path", { d: "M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z", style: { fill: '#fff', fillRule: 'nonzero' } }))));
  }
  renderTwitterIcon() {
    return (h$n("svg", { height: "100%", style: { fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '2' }, version: "1.1", viewBox: "0 0 512 512", width: "100%", xmlns: "http://www.w3.org/2000/svg" }, h$n("rect", { height: "400", style: { fill: 'none' }, width: "400", x: "56", y: "56" }), h$n("path", { d: "M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104", style: { fill: '#1da1f2', fillRule: 'nonzero' } })));
  }
  renderLinkedInIcon() {
    return (h$n("svg", { height: "100%", style: { fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '2' }, version: "1.1", viewBox: "0 0 512 512", width: "100%", xmlns: "http://www.w3.org/2000/svg" }, h$n("g", { id: "g5891" }, h$n("path", { d: "M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z", id: "background", style: { fill: '#2867b2' } }), h$n("g", { id: "shapes" }, h$n("rect", { height: "257.962", id: "rect11", style: { fill: '#fff' }, width: "85.76", x: "61.053", y: "178.667" }), h$n("path", { d: "M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z", id: "path13-0", style: { fill: '#fff', fillRule: 'nonzero' } }), h$n("path", { d: "M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z", id: "path15", style: { fill: '#fff', fillRule: 'nonzero' } })))));
  }
  renderTip() {
    var _a;
    const info = (_a = this.messages) === null || _a === void 0 ? void 0 : _a.info;
    return (h$n("div", { class: CSS.tipContainer }, h$n("span", { class: CSS.tipHeader }, h$n("calcite-icon", { icon: "lightbulb", scale: this.scale }), h$n("span", null, info === null || info === void 0 ? void 0 : info.label)), h$n("p", { class: CSS.tipContent }, info === null || info === void 0 ? void 0 : info.tooltip)));
  }
  renderEmbed() {
    var _a, _b, _c;
    const embedMessages = (_a = this.messages) === null || _a === void 0 ? void 0 : _a.embed;
    return (h$n("div", { class: CSS.embed.container }, h$n("span", { class: CSS.embed.header }, h$n("calcite-icon", { icon: "code", scale: this.scale }), h$n("span", null, (_c = (_b = this.messages) === null || _b === void 0 ? void 0 : _b.embed) === null || _c === void 0 ? void 0 : _c.label)), h$n("div", { class: CSS.embed.embedCode.container }, h$n("div", { class: CSS.embed.embedCode.textArea }, h$n("textarea", { ref: el => (this.embedCodeRef = el), cols: 30, rows: 5, readonly: true, value: this.getEmbedCode() }), h$n("button", { id: "copyEmbedToClipboard", onClick: this.copyEmbedCode.bind(this), class: CSS.embed.embedCode.copyButton }, h$n("calcite-icon", { icon: "copy", scale: this.scale }), h$n("span", null, embedMessages === null || embedMessages === void 0 ? void 0 : embedMessages.copy))), h$n("span", { class: CSS.embed.textAreaText }, h$n("slot", { name: "text-area-text" })), h$n("div", { class: CSS.embed.dimensions.container }, h$n("label", { class: CSS.embed.dimensions.input }, h$n("span", null, embedMessages === null || embedMessages === void 0 ? void 0 : embedMessages.width), h$n("input", { ref: el => (this.embedWidthRef = el), type: "number", value: this.embedWidth })), h$n("label", { class: CSS.embed.dimensions.input }, h$n("span", null, embedMessages === null || embedMessages === void 0 ? void 0 : embedMessages.height), h$n("input", { ref: el => (this.embedHeightRef = el), type: "number", value: this.embedHeight }))))));
  }
  togglePopover(event) {
    event.stopPropagation();
    this.opened = !this.opened;
    this.popoverRef.toggle(this.opened);
  }
  closePopover() {
    this.opened = false;
    this.popoverRef.toggle(this.opened);
  }
  async handleShareItem(type) {
    var _a, _b;
    this.shareUrl = await this.generateShareUrl();
    let shortenedUrl = null;
    // Detects Safari - If Safari, do not shorten URL due to Safari not allowing clipboard copy after network requests
    const isChrome = (_a = navigator === null || navigator === void 0 ? void 0 : navigator.userAgent) === null || _a === void 0 ? void 0 : _a.includes('Chrome');
    const isSafari = (_b = navigator === null || navigator === void 0 ? void 0 : navigator.userAgent) === null || _b === void 0 ? void 0 : _b.includes('Safari');
    const doNotShortenUrl = isSafari !== undefined && isSafari && isChrome !== undefined && !isChrome;
    if (!doNotShortenUrl) {
      shortenedUrl = await this.shortenUrl(this.shareUrl);
    }
    const urlToUse = shortenedUrl ? shortenedUrl : this.shareUrl;
    switch (type) {
      case 'link':
        navigator.clipboard.writeText(urlToUse);
        if (this.embed) {
          this.copyEmbedPopoverRef.toggle(false);
          this.inlineCopyEmbedOpened = false;
        }
        if (this.mode === 'inline') {
          this.copyLinkPopoverRef.toggle(true);
        }
        this.inlineCopyLinkOpened = true;
        this.copied = true;
        return;
      case 'facebook':
      case 'twitter':
      case 'linkedIn':
        const urlData = {
          url: encodeURI(urlToUse),
        };
        const data = type === 'twitter' ? Object.assign(Object.assign({}, urlData), { text: this.shareText }) : urlData;
        const url = s$w(SOCIAL_URL_TEMPLATES[type], data);
        if (this.mode === 'popover') {
          this.closePopover();
        }
        window.open(encodeURI(url), '_blank');
        return;
    }
  }
  async shortenUrl(url) {
    var _a, _b;
    const request = await C$5(SHORTEN_API, {
      query: {
        longUrl: url,
        f: 'json',
      },
    });
    const shortUrl = (_b = (_a = request === null || request === void 0 ? void 0 : request.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.url;
    if (shortUrl) {
      return shortUrl.replace('http://', 'https://');
    }
  }
  getEmbedCode() {
    return `<iframe src="${this.shareUrl}" width="${this.embedWidth}" height="${this.embedHeight}" frameborder="0" style="border:0" allowfullscreen>${this.iframeInnerText}</iframe>`;
  }
  copyEmbedCode() {
    navigator.clipboard.writeText(this.getEmbedCode());
    this.copyLinkPopoverRef.toggle(false);
    this.inlineCopyLinkOpened = false;
    this.copyEmbedPopoverRef.toggle(true);
    this.inlineCopyEmbedOpened = true;
  }
  // VIEW LOGIC
  async generateShareUrl() {
    var _a;
    // If view is not ready
    if (!this.view || !((_a = this.view) === null || _a === void 0 ? void 0 : _a.ready)) {
      return this.shareUrl;
    }
    // Use x/y values and the spatial reference of the view to instantiate a geometry point
    const { x, y } = this.view.center;
    const { spatialReference } = this.view;
    const updatedSpatialReference = new k$4(Object.assign({}, spatialReference.toJSON()));
    const centerPoint = new j$4({
      x,
      y,
      spatialReference: updatedSpatialReference,
    });
    // Use pointToConvert to project point. Once projected, pass point to generate the share URL parameters
    const point = await this.processPoint(centerPoint);
    return this.generateShareUrlParams(point);
  }
  async processPoint(point) {
    const { isWGS84, isWebMercator } = point.spatialReference;
    // If spatial reference is WGS84 or Web Mercator, use longitude/latitude values to generate the share URL parameters
    if (isWGS84 || isWebMercator) {
      return point;
    }
    const outputSpatialReference = new k$4({
      wkid: 4326,
    });
    await Q();
    const projectedPoint = Y(point, outputSpatialReference);
    return projectedPoint;
  }
  generateShareUrlParams(point) {
    const { longitude, latitude } = point;
    if (longitude === undefined || latitude === undefined) {
      return this.shareUrl;
    }
    const roundedLon = this.roundValue(longitude);
    const roundedLat = this.roundValue(latitude);
    const { zoom } = this.view;
    const roundedZoom = this.roundValue(zoom);
    const graphic = this.view.get('popup.selectedFeature');
    let layerId;
    let oid;
    if (graphic) {
      const featureLayer = graphic.get('layer');
      layerId = featureLayer.id;
      oid = graphic.attributes[featureLayer.objectIdField];
    }
    const hiddenLayers = this.view.map.allLayers
      .filter(layer => !layer.visible)
      .toArray()
      .map(featureLayer => featureLayer.id)
      .toString()
      .replaceAll(',', ';');
    const { type } = this.view;
    const { defaultUrlParams } = this;
    const url = new URL(this.shareUrl);
    const { searchParams } = url;
    // Resets existing URL params
    if (searchParams.get('center'))
      searchParams.delete('center');
    if (searchParams.get('level'))
      searchParams.delete('level');
    if (searchParams.get('selectedFeature'))
      searchParams.delete('selectedFeature');
    if (searchParams.get('hiddenLayers'))
      searchParams.delete('hiddenLayers');
    if (searchParams.get('viewpoint'))
      searchParams.delete('viewpoint');
    // Checks if view.type is 3D, if so, set 3D url parameters
    if (type === '3d') {
      // viewpoint=cam:{camera.position.longitude},{camera.position.latitude},{camera.position.z};{camera.heading},{camera.tilt}
      const { camera } = this.view;
      const { heading, position, tilt } = camera;
      const { longitude, latitude, z } = position;
      const viewpoint_Values = {
        longitude: this.roundValue(longitude, 8),
        latitude: this.roundValue(latitude, 8),
        z: this.roundValue(z, 3),
        heading: this.roundValue(heading, 3),
        tilt: this.roundValue(tilt, 3),
      };
      const viewpointVal = `cam:${viewpoint_Values.longitude},${viewpoint_Values.latitude},${viewpoint_Values.z};${viewpoint_Values.heading},${viewpoint_Values.tilt}`;
      if ((defaultUrlParams === null || defaultUrlParams === void 0 ? void 0 : defaultUrlParams.viewpoint) !== false)
        url.searchParams.set('viewpoint', viewpointVal);
      if (layerId && oid && (defaultUrlParams === null || defaultUrlParams === void 0 ? void 0 : defaultUrlParams.selectedFeature) !== false)
        url.searchParams.set('selectedFeature', `${layerId};${oid}`);
      if (hiddenLayers && (defaultUrlParams === null || defaultUrlParams === void 0 ? void 0 : defaultUrlParams.hiddenLayers) !== false)
        url.searchParams.set('hiddenLayers', hiddenLayers);
      url.search = decodeURIComponent(url.search);
      return url.href;
    }
    // Otherwise, just return original url for 2D
    if ((defaultUrlParams === null || defaultUrlParams === void 0 ? void 0 : defaultUrlParams.center) !== false)
      url.searchParams.set('center', `${roundedLon};${roundedLat}`);
    if ((defaultUrlParams === null || defaultUrlParams === void 0 ? void 0 : defaultUrlParams.level) !== false)
      url.searchParams.set('level', `${roundedZoom}`);
    if (layerId && oid && (defaultUrlParams === null || defaultUrlParams === void 0 ? void 0 : defaultUrlParams.selectedFeature) !== false)
      url.searchParams.set('selectedFeature', `${layerId};${oid}`);
    if (hiddenLayers && (defaultUrlParams === null || defaultUrlParams === void 0 ? void 0 : defaultUrlParams.selectedFeature) !== false)
      url.searchParams.set('hiddenLayers', hiddenLayers);
    url.search = decodeURIComponent(url.search);
    return url.href;
  }
  roundValue(val, decimalPoints = 4) {
    return parseFloat(val.toFixed(decimalPoints));
  }
  get el() { return this; }
  static get style() { return instantAppsSocialShareCss; }
};
InstantAppsSocialShare$1 = /*@__PURE__*/ proxyCustomElement(InstantAppsSocialShare$1, [1, "instant-apps-social-share", {
    "mode": [513],
    "shareUrl": [1025, "share-url"],
    "shareText": [513, "share-text"],
    "embed": [516],
    "shareButtonColor": [513, "share-button-color"],
    "iframeInnerText": [513, "iframe-inner-text"],
    "view": [16],
    "displayTipText": [516, "display-tip-text"],
    "socialMedia": [516, "social-media"],
    "shareIconsLayout": [513, "share-icons-layout"],
    "scale": [513],
    "defaultUrlParams": [16],
    "messages": [32],
    "opened": [32],
    "copied": [32],
    "inlineCopyLinkOpened": [32],
    "inlineCopyEmbedOpened": [32],
    "embedWidth": [32],
    "embedHeight": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["instant-apps-social-share"];
  components.forEach(tagName => { switch (tagName) {
    case "instant-apps-social-share":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InstantAppsSocialShare$1);
      }
      break;
  } });
}

const InstantAppsSocialShare = InstantAppsSocialShare$1;
const defineCustomElement = defineCustomElement$1;

export { r$n as $, A$4 as A, s$f as B, g$b as C, w$a as D, E$8 as E, l$n as F, f$r as G, c$l as H, y$h as I, InstantAppsSocialShare, u$q as J, s$w as K, l$a as L, M$1 as M, N$4 as N, n$h as O, y$i as P, Q$4 as Q, y$g as R, j$c as S, q$7 as T, U$4 as U, v$c as V, p$i as W, z$6 as X, C$5 as Y, v$b as Z, Z$3 as _, m$1 as a, I$7 as a0, s$y as a1, F$5 as a2, J$3 as a3, t$o as a4, Bt as a5, o$q as a6, e$p as b, s$g as c, e$h as d, defineCustomElement, e$z as e, b$7 as f, d$e as g, h$a as h, m$k as i, j$4 as j, v$6 as k, l$g as l, m, n$a as n, m$h as o, g$e as p, q$8 as q, r$j as r, s$u as s, t$c as t, a$r as u, v, s$x as w, n$f as x, a$g as y, s$h as z };
