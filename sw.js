if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const f=e=>n(e,c),o={module:{uri:c},exports:a,require:f};i[c]=Promise.all(r.map((e=>o[e]||f(e)))).then((e=>(s(...e),a)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-7MSSLXDg.js",revision:null},{url:"assets/index-CchvMkDT.css",revision:null},{url:"firebase-messaging-sw.js",revision:"21cd990237311d2f9767bf3cc55607d6"},{url:"index.html",revision:"0a8710a98e09c4814e36f7880b8b5ac5"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"1eda3fe0927b3a624edadb9f91a8e76e"},{url:"pwa/pwa-192x192.png",revision:"baa2ae101bc7f471736d5359b2f9281a"},{url:"pwa/pwa-512x512.png",revision:"cb266de324089fae47055168eb77fca3"},{url:"img/CcZ.svg",revision:"fc3ecc7ed303760be146c863f9ffef0d"},{url:"img/apple-touch-icon-180x180.png",revision:"d22a448c2cb367abcb7219ae1504d5f8"},{url:"img/favicon.ico",revision:"0af1cf36d8e37876130427798495e8a1"},{url:"img/maskable-icon-512x512.png",revision:"bdf2ed501dce8c2d2f1646e26eabfd7c"},{url:"img/pwa-192x192.png",revision:"baa2ae101bc7f471736d5359b2f9281a"},{url:"img/pwa-512x512.png",revision:"cb266de324089fae47055168eb77fca3"},{url:"img/pwa-64x64.png",revision:"7388d7f3d191599bbf0de87fa5d91ee9"},{url:"manifest.webmanifest",revision:"18c8b9fac90ade6ec18fcf7634a28d93"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
