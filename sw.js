const CACHE_NAME = 'my-cards-v1';
const urlsToCache = [
  '/',
  '/index.html', '/menu.html' , '/nam.html' ,  '/99menu.html' , // Или ваш основной HTML-файл
  // Пропишите сюда все важные CSS/JS/картинки, которые хотите кэшировать:
  'https://static.tildacdn.info/css/tilda-grid-3.0.min.css',
  'https://static.tildacdn.info/img/tildafavicon.ico',
'https://static.tildacdn.info/tild3939-6562-4430-a635-323531373131/-/resizeb/20x/ee52bfa348f9314055a4.jpg',
'https://static.tildacdn.info/tild6133-6236-4936-b031-346363616164/-/resizeb/20x/IMG_7626.PNG' ,
'https://static.tildacdn.info/tild3436-6561-4363-b136-646438346564/-/resizeb/20x/i.jpg' , 
'https://static.tildacdn.info/tild3338-3165-4738-b066-653537346236/-/resizeb/20x/Who-is-Allah-4.jpg' , 
'https://static.tildacdn.info/tild6537-3339-4766-a262-653839373761/-/resizeb/20x/maxresdefault.jpg' , 
'https://static.tildacdn.info/tild6534-6433-4137-b262-356365616234/-/resizeb/20x/noroot.png' , 
'https://static.tildacdn.info/tild3530-6439-4238-a166-316362663236/-/resizeb/20x/noroot.png'

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
