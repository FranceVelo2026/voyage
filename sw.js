const CACHE="france2026-v2-9-8";
const ASSETS=["./","index.html","styles.css","app.js?v=2.9.8","manifest.webmanifest","icon-192.png","icon-512.png","cyclistes-hero.jpg","jour-07-colmar-aspach-le-bas.gpx","jour-08-aspach-le-bas-lisle-sur-le-doubs.gpx","jour-09-lisle-sur-le-doubs-besancon.gpx","jour-10-besancon-dole.gpx","jour-11-dole-marsannay-la-cote.gpx","jour-13-boucle-vignobles.gpx","jour-14-marsannay-la-cote-chagny.gpx","jour-15-chagny-tournus.gpx","jour-16-tournus-belleville-en-beaujolais.gpx","jour-17-belleville-en-beaujolais-givors-alternatif.gpx","jour-20-tain-le-pouzin.gpx","aeronavette-reservation.pdf"];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  const url=new URL(event.request.url);
  if(url.origin===location.origin&&(url.pathname.endsWith("/index.html")||url.pathname.endsWith("/app.js")||url.pathname.endsWith("/"))){
    event.respondWith(fetch(event.request,{cache:"no-store"}).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response;}).catch(()=>caches.match(event.request)));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
