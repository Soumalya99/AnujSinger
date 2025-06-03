const CACHE_NAME = 'site-media-cache-v2';
const MAX_CACHE_ITEMS = 50; // Adjust as needed

const urlsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/music.html',
    '/gallery.html',
    '/newsMedia.html',
    '/digitalpr.html',
    '/src'
    // Add specific small assets (css, js, images) here for pre-caching
];

// Utility: Limit cache size
async function limitCacheSize(cacheName, maxItems) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    if (keys.length > maxItems) {
        await cache.delete(keys[0]);
        await limitCacheSize(cacheName, maxItems);
    }
}

// Utility: Check if request is for a large file (video/audio)
function isLargeMediaRequest(request) {
    const url = new URL(request.url);
    return (
        url.pathname.endsWith('.mp4') ||
        url.pathname.endsWith('.webm') ||
        url.pathname.endsWith('.mov') ||
        url.pathname.endsWith('.avi') ||
        url.pathname.endsWith('.mkv') ||
        url.pathname.endsWith('.mp3') ||
        url.pathname.endsWith('.wav')
    );
}

// Install event - cache essential files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
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
    self.clients.claim();
});

// Fetch event - smart caching
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    // Exclude large media files from caching
    if (isLargeMediaRequest(event.request)) {
        // Let the network handle it directly
        return;
    }

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // Stale-while-revalidate: Serve cache, update in background
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