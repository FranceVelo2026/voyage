const CACHE="france2026-v2-1-jour7";
const ASSETS=["./","index.html","styles.css","app.js","manifest.webmanifest","icon-192.png","icon-512.png","cyclistes-hero.jpg","gare-strasbourg-airbnb.gpx","jour-05-strasbourg-obernai.gpx","jour-06-obernai-colmar-via-hauller.gpx","jour-07-colmar-brunstatt-didenheim.gpx"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match("./"))))});
