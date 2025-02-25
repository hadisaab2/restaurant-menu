/* eslint-disable no-restricted-globals */

const CACHE_NAME_PREFIX = "menugic-cache-"; // Prefix for restaurant-specific caches

self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME_PREFIX + "global").then((cache) => {
      return cache.addAll([
        "/", // Cache the root page
        "/offline.html", // Add an offline fallback page
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const restaurantName = url.hostname.includes("menugic.com") && url.hostname !== "www.menugic.com"
    ? url.hostname.split('.')[0]  // Extract restaurant from subdomain
    : url.pathname.split('/')[1] || "default"; // Extract from path

  const CACHE_NAME = `${CACHE_NAME_PREFIX}${restaurantName}`;

  if (event.request.method === "GET") {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          return cachedResponse || fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});
