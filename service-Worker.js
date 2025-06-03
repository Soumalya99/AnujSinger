const CACHE_NAME = 'site-media-cache-v1';
const urlToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/music.html',
    '/gallery.html',
    '/newsMedia.html',
    '/images',
    '/digitalpr.html',


];

//Install event - cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlToCache);
        })
    )
});

//Activate event - delete old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

//Fetch event - serve cached files
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            const fetchPromise = fetch(event.request)
                .then(networkResponse => {
                    // Only cache valid responses
                    if (
                        networkResponse &&
                        networkResponse.status === 200 &&
                        networkResponse.type === 'basic'
                    ) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, responseClone);
                            limitCacheSize(CACHE_NAME, MAX_CACHE_ITEMS);
                        });
                    }
                    return networkResponse;
                })
                .catch(() => {
                    // Fallbacks for navigation or images
                    if (event.request.destination === 'document') {
                        return caches.match('/index.html');
                    }
                    if (event.request.destination === 'image') {
                        // Optionally, provide a fallback image
                        // return caches.match('/images/fallback.png');
                    }
                    return new Response('Network error occurred', {
                        status: 408,
                        statusText: 'Network Error'
                    });
                });

            // Serve cached response immediately, update in background
            return cachedResponse || fetchPromise;
        })
    );
});