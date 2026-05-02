// sw.js — Service Worker simplifié sans cache problématique
self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  // Ne rien intercepter — laisser le navigateur gérer normalement
  if (e.request.url.includes('script.google.com')) return;
});
