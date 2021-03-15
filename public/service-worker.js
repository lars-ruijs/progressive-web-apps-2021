const cacheName = "offline";
const cacheAssets = ["manifest.json","/css/styles.css","/img/earth-mars.png","/offline"];

self.addEventListener("install", (event) => {
    console.log("Installed");
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => cache.addAll(cacheAssets))
        .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    console.log("Activated");
    event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
    console.log("Fetching");
    
    event.respondWith(
        caches.match(event.request)
        .then(cachedRes => {
            if (cachedRes) {
                return cachedRes;
            }
            return fetch(event.request)
                .then((fetchRes) => fetchRes)
                .catch((err) => {
                    return caches.open(cacheName)
                    .then(cache => cache.match('/offline'));});
        })
    );
});