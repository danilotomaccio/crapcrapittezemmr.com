if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const c=e=>s(e,d),t={module:{uri:d},exports:o,require:c};i[d]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DRmHVGNt.css",revision:null},{url:"assets/index-RPNCJpIj.js",revision:null},{url:"firebase-messaging-sw.js",revision:"21cd990237311d2f9767bf3cc55607d6"},{url:"index.html",revision:"28d0e2c8c6ce43dc84d1a8d2086a0aa1"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"1eda3fe0927b3a624edadb9f91a8e76e"},{url:"pwa/pwa-192x192.png",revision:"ffec0a7262eebe46c634efdb38990b1c"},{url:"pwa/pwa-512x512.png",revision:"6b168d1b1e9fe76da2f0280b65368b87"},{url:"img/CcZ.svg",revision:"7dba9d2f62b7018260765494e7bb3dbd"},{url:"manifest.webmanifest",revision:"18c8b9fac90ade6ec18fcf7634a28d93"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
