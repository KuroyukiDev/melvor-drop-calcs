// Minimal Service Worker for PWA Installation
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Acts as a pass-through
  e.respondWith(fetch(e.request));
});