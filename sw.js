const CACHE_NAME = "herta_cache";
const urlsToCache = ["/", "/style.css", "/img/hertaa1.webp", "/img/hertaa2.webp", "/img/card.webp", "/audio/kuruto.mp3", "/audio/kuru1.mp3", "/audio/kuru2.mp3", ];
self.addEventListener("install", (event)=>{
    event.waitUntil(caches.open(CACHE_NAME).then((cache)=>{
        return cache.addAll(urlsToCache);
    }
    ));
}
);
self.addEventListener("fetch", (event)=>{
    event.respondWith(caches.match(event.request).then((response)=>{
        if (response) {
            return response;
        }
        return fetch(event.request);
    }
    ));
}
);
self.addEventListener("activate", (event)=>{
    event.waitUntil(caches.keys().then((cacheNames)=>{
        return Promise.all(cacheNames.map((cacheName)=>{
            if (cacheName !== CACHE_NAME) {
                return caches.delete(cacheName);
            }
        }
        ));
    }
    ));
}
);
