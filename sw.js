if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>s(e,d),c={module:{uri:d},exports:o,require:t};i[d]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DG2dlFAU.js",revision:null},{url:"assets/index-DgBT0nnC.css",revision:null},{url:"firebase-messaging-sw.js",revision:"f53a0a2bcd94c9427924fecb90af9d4f"},{url:"index.html",revision:"4d20611d4d022449f92a238778e3b84c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"1eda3fe0927b3a624edadb9f91a8e76e"},{url:"pwa/pwa-192x192.png",revision:"ffec0a7262eebe46c634efdb38990b1c"},{url:"pwa/pwa-512x512.png",revision:"6b168d1b1e9fe76da2f0280b65368b87"},{url:"img/CcZ.svg",revision:"7dba9d2f62b7018260765494e7bb3dbd"},{url:"manifest.webmanifest",revision:"18c8b9fac90ade6ec18fcf7634a28d93"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
