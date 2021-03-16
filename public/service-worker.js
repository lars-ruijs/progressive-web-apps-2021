const CORE_CACHE = 1;
const CORE_CACHE_NAME = `core-v${CORE_CACHE}`;
const CORE_ASSETS = ["manifest.json","/css/styles.css","/img/earth-mars.png","/js/script.js", "/offline"];

// When service worker gets installed > add core assets to the cache
self.addEventListener('install', (event) => {
    console.log("Installed");
    event.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache => cache.addAll(CORE_ASSETS))
        .then(() => self.skipWaiting())
    );
});

// When activated, establish connection between client, service worker and server
self.addEventListener("activate", (event) => {
    console.log("Activated");
    event.waitUntil(clients.claim());
});

// On fetch > store page response in cache.
self.addEventListener("fetch", (event) => {
    const req = event.request;

    // If homepage is requested > store response inside cache > only serve when offline
    if(getPathName(req.url) == '/') {
        event.respondWith(
            caches.open(CORE_CACHE_NAME).then(cache => {
                return cache.match(event.request)
                    .then(response => {                     
                        return fetch(event.request)
                        .then(response => {
                            cache.put(event.request, response.clone());
                            return response;
                        });
                    }).catch(() => {
                        return caches.open(CORE_CACHE_NAME).then(async (cache) => {
                            // If request is stored in cache > show that, else > show offline page
                            const result = await cache.match(event.request);
                            if(result) {
                                return cache.match(event.request);
                            } else {
                                return cache.match('/offline');
                            }
                        });
                    });
            })
        );
    }

    // For all other pages > cache page and serve from cache if possible
    else {
        event.respondWith(
            caches.open(CORE_CACHE_NAME).then(cache => {
                return cache.match(event.request)
                    .then(response => {
                        if(response) {
                            return response;
                        }
                        return fetch(event.request)
                        .then(response => {
                            cache.put(event.request, response.clone());
                            return response;
                        });
                    }).catch(async (err) => {
                        // If not available from cache > show offline page
                        return caches.open(CORE_CACHE_NAME).then(cache => cache.match('/offline'));
                    });
            })
        );
    }
});

// Get path name from given url (e.g. from www.website.com/hello to /hello)
// Code adapted from https://github.com/cmda-minor-web/progressive-web-apps-2021/blob/master/examples/node-advanced-movies-example/src/service-worker.js
function getPathName(requestUrl) {
    const url = new URL(requestUrl);
    return url.pathname;
}