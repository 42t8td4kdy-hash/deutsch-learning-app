const CACHE="deutsch-v3.5";
const ASSETS=[
  "./",
  "./index.html",
  "./assets/app.css",
  "./assets/app.js",
  "./data/course-data.js",
  "./data/curriculum.json",
  "./data/unit-1.json",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./assets/images/cologne.jpg",
  "./assets/images/brandenburg.jpg",
  "./assets/images/placement-cologne.jpg",
  "./assets/images/coffee.jpg",
  "./assets/images/neuschwanstein.jpg"
];

self.addEventListener("install",event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key.startsWith("deutsch-") && key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;

  if(event.request.mode==="navigate"){
    event.respondWith(
      fetch(event.request)
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put("./index.html",copy));
          return response;
        })
        .catch(()=>caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response=>{
        if(response && response.ok){
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(event.request,copy));
        }
        return response;
      })
      .catch(()=>caches.match(event.request))
  );
});
