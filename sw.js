if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const t=e=>s(e,o),l={module:{uri:o},exports:d,require:t};i[o]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BoMLU-72.js",revision:null},{url:"assets/index-CJVTq1T9.css",revision:null},{url:"index.html",revision:"ea1c759a7f9236957f4df97d5f5e7e1a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"1eda3fe0927b3a624edadb9f91a8e76e"},{url:"pwa/pwa-192x192.png",revision:"ffec0a7262eebe46c634efdb38990b1c"},{url:"pwa/pwa-512x512.png",revision:"6b168d1b1e9fe76da2f0280b65368b87"},{url:"img/CcZ.svg",revision:"7dba9d2f62b7018260765494e7bb3dbd"},{url:"manifest.webmanifest",revision:"90e43926fbe5938836e625d9d06825c1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
