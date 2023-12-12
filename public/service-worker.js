// const installEvent = () => {
// 	self.addEventListener("install", () => {
// 		console.log("service worker installed")
// 	})
// }
// installEvent()

// const activateEvent = () => {
// 	self.addEventListener("activate", () => {
// 		console.log("service worker activated")
// 	})
// }
// activateEvent()

// const cacheName = "v1"
// const cacheableUrls = ["/", "/clicker", "/leaderboard"]

// const cacheClone = async (e) => {
// 	const res = await fetch(e.request)
// 	const resClone = res.clone()

// 	const cache = await caches.open(cacheName)
// 	await cache.put(e.request, resClone)
// 	return res
// }

// const fetchEvent = () => {
// 	self.addEventListener("fetch", (e) => {
// 		e.respondWith(
// 			cacheClone(e)
// 				.catch(() => caches.match(e.request))
// 				.then((res) => res)
// 		)
// 	})
// }

// fetchEvent()

const CACHE_NAME = "my-cache"

const urlsToCache = ["/", "/clicker", "/leaderboard"]

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache)
		})
	)
})

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request)
		})
	)
})
