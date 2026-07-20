const CACHE="france2026-v2-7-0";
const ASSETS=["./","index.html","styles.css","app.js","manifest.webmanifest","icon-192.png","icon-512.png","cyclistes-hero.jpg","jour-07-colmar-aspach-le-bas.gpx","jour-08-aspach-le-bas-lisle-sur-le-doubs.gpx","jour-09-lisle-sur-le-doubs-besancon.gpx","aeronavette-reservation.pdf"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match("./"))))});
