if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(n[a])return;let t={};const o=e=>s(e,a),r={module:{uri:a},exports:t,require:o};n[a]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Random-Choice-PWA/_next/static/05DOcjljU7C00ndicZ5GK/_buildManifest.js",revision:"05DOcjljU7C00ndicZ5GK"},{url:"/Random-Choice-PWA/_next/static/05DOcjljU7C00ndicZ5GK/_middlewareManifest.js",revision:"05DOcjljU7C00ndicZ5GK"},{url:"/Random-Choice-PWA/_next/static/05DOcjljU7C00ndicZ5GK/_ssgManifest.js",revision:"05DOcjljU7C00ndicZ5GK"},{url:"/Random-Choice-PWA/_next/static/chunks/579-f1bafe486d740ba8.js",revision:"05DOcjljU7C00ndicZ5GK"},{url:"/Random-Choice-PWA/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"05DOcjljU7C00ndicZ5GK"},{url:"/Random-Choice-PWA/_next/static/chunks/main-625d934310f9f927.js",revision:"05DOcjljU7C00ndicZ5GK"},{url:"/Random-Choice-PWA/_next/static/chunks/pages/_app-6ce06d6e4927faa0.js",revision:"05DOcjljU7C00ndicZ5GK"},{url:"/Random-Choice-PWA/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"05DOcjljU7C00ndicZ5GK"},{url:"/Random-Choice-PWA/_next/static/chunks/pages/index-80e5015b77801702.js",revision:"05DOcjljU7C00ndicZ5GK"},{url:"/Random-Choice-PWA/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"05DOcjljU7C00ndicZ5GK"},{url:"/Random-Choice-PWA/_next/static/chunks/webpack-745f6437e35f2101.js",revision:"05DOcjljU7C00ndicZ5GK"},{url:"/Random-Choice-PWA/_next/static/css/2c16aa060992952f.css",revision:"05DOcjljU7C00ndicZ5GK"},{url:"/Random-Choice-PWA/icons/favicon.png",revision:"d0954f6eb8b2de3450740af22c985a02"},{url:"/Random-Choice-PWA/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/Random-Choice-PWA/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/Random-Choice-PWA/manifest.json",revision:"cf8238ebee75282830ad4ff9852faa32"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/Random-Choice-PWA",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
