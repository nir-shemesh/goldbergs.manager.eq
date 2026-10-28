// Minimal service worker: required for Chrome to offer "Install app". Network-first, no caching of the app itself.
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(function(){ return new Response('<body style="background:#000;color:#fff;font-family:sans-serif;text-align:center;padding-top:30vh">No connection.<br>Please reconnect and reopen the app.</body>', {headers:{'Content-Type':'text/html'}}); }));
  }
});
