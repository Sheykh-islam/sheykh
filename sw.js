const CACHE_NAME = 'my-cards-v1';
const urlsToCache = [
  '/',
  '/index.html', '/menu.html' , '/nam.html' ,  '/99menu.html' , // Или ваш основной HTML-файл
  // Пропишите сюда все важные CSS/JS/картинки, которые хотите кэшировать:
  'https://static.tildacdn.info/css/tilda-grid-3.0.min.css',
  'https://static.tildacdn.info/img/tildafavicon.ico',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
