// sw.js — Service Worker Cache
const CACHE = 'cave-v1';
const ASSETS = ['/', '/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('script.google.com')) return; // ne pas cacher les appels API
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
