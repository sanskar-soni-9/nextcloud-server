/*! For license information please see core-maintenance.js.license?v=95598040a8a6085f4a6b */
(()=>{"use strict";var e,t={77748:(e,t,n)=>{var o=n(65043),r=n(63814),i=n(96763);const a=(0,r.aU)()+"/status.php",l=()=>{i.info("checking the Nextcloud maintenance status"),o.Ay.get(a).then((e=>e.data)).then((e=>{if(!1===e.maintenance)return i.info("Nextcloud is not in maintenance mode anymore -> reloading"),void window.location.reload();i.info("Nextcloud is still in maintenance mode"),setTimeout(l,2e4)})).catch(i.error.bind(void 0))};l()}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],i=e[u][2];for(var l=!0,d=0;d<n.length;d++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.e=()=>Promise.resolve(),o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=2076,(()=>{o.b=document.baseURI||self.location.href;var e={2076:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,a=n[0],l=n[1],d=n[2],c=0;if(a.some((t=>0!==e[t]))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(d)var u=d(o)}for(t&&t(n);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0;var r=o.O(void 0,[4208],(()=>o(77748)));r=o.O(r)})();
//# sourceMappingURL=core-maintenance.js.map?v=95598040a8a6085f4a6b