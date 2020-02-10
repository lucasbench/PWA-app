//cache the assets
const staticSipnotes = "sipnotes-site-v1" //declare name of cache staticSipnotes
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/maps/burgundyMap.jpg",
    "/images/maps/dunkids.jpg",
    "/images/maps/ItalyMap.jpg",
    "/images/maps/WhiteWineTastingGrid.jpg",
]

self.addEventListener("install", installEvent => { // listen to our cache "self is the serviceWorker"
    installEvent.waitUntil(  //waits for the action or the callback event to fire. when install is fired we callback the event
        caches.open(staticSipnotes).then(cache => { // once the cache API is ready we run the open method with as argument staticSipnotes
            cache.addAll(assets) // then the promise of cache to add all assets.
        })
    )
})
//fetch the assets
self.addEventListener("fetch", fetchEvent => { // we get our data back
    fetchEvent.respondWith ( // to prevent browser default response
        caches.match(fetchEvent.request).then(res => { //we apply the caches match to fetchEvent.request (which are our assets)
            return res || fetch(fetchEvent.request)
        })
    )
})
//Register the service Workers
if ("serviceWorker" in navigator) { //check if service worker is supported by browser
    window.addEventListener("load", function() { //listen to page load 
        navigator.serviceWorker 
            .register("/serviceWorker.js") //pass serviceWorker.js to navigator.serviceWorker.register() as a param
            .then(res => this.console.log("service worker registered"))
            .catch(err => this.console.log("service worker not registered", err))
    })
}