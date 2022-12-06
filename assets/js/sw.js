
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/assets/js/service-worker.js');
}

// document.querySelector('#logo').addEventListener('click', () => {
//   const iconUrl = document.querySelector('select').selectedOptions[0].value;
//   let imgElement = document.createElement('img');
//   imgElement.src = iconUrl;
//   document.querySelector('#container').appendChild(imgElement);
// });


// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
  prefix: 'aandcwindowcoverings.com',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// default to `networkFirst` strategy
workbox.routing.setDefaultHandler(workbox.strategies.networkFirst());

// let Workbox handle our precache list
// NOTE: This will be populated by jekyll-workbox-plugin.
workbox.precaching.precacheAndRoute([]);

// use `Stale-while-revalidate` strategy for images and fonts.
workbox.routing.registerRoute(
  /images/,
  workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
  /^https?:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate()
);
