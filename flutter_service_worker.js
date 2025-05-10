'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7641e16a0a35c87e7d5f837eff872c27",
"assets/AssetManifest.bin.json": "a94efe845a67a4434baf42146796850c",
"assets/AssetManifest.json": "7503957681ede968cf569f446f6f8366",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/android.svg": "5a63cacf11a6994ed01c25c23fe12ed9",
"assets/assets/icons/androidstudio.svg": "a13e01f551b7acbd5c7ce9900e2c3110",
"assets/assets/icons/app-store.svg": "f23a5fbb1a02e918f78fdea34e767789",
"assets/assets/icons/atlassian.svg": "69506130515d4da4e6d20ebfe56736fe",
"assets/assets/icons/dart.svg": "3ec7214e3782ce51b129a0883dc4bfbd",
"assets/assets/icons/email.svg": "3336e5bd0139e39d5188a277a5c86334",
"assets/assets/icons/fav.png": "59b5c3f68c256883bf3547435f739935",
"assets/assets/icons/fav.svg": "b4cf2de7db4c6b0389dbc801046c2076",
"assets/assets/icons/firebase.svg": "aa538860789950a85155b96ad2e7b9f1",
"assets/assets/icons/flutter.svg": "97307d22b63a6e4dc79191c33957de10",
"assets/assets/icons/git.svg": "bb373a841d803bdf607f16c19b6b9a5c",
"assets/assets/icons/github.svg": "d05063a25b477976de7d262ed5116198",
"assets/assets/icons/google-play.svg": "fbd0d395e4e9c8e61682269601efe1e4",
"assets/assets/icons/intellijIdea.svg": "704bef87f88a2cd37b0e8e305c7bfeaf",
"assets/assets/icons/java.svg": "09cde3466ae78f6d90c4ae961c15c757",
"assets/assets/icons/kotlin.svg": "a7735a82bb1788b6356ba6f03f8ebfc3",
"assets/assets/icons/link.svg": "d01ab46a5f26de6de9462254980ba0bc",
"assets/assets/icons/linkedIn.svg": "bf7d12838cb80d803d0fcab6f7490200",
"assets/assets/icons/mongo.svg": "ce756188f8cec48ed678bf47355ccf48",
"assets/assets/icons/node-js.svg": "b80b4aa003faabfd8e6bfdd0f0218de0",
"assets/assets/icons/phone.png": "eac09993fb9e334be076d28fe1c50e56",
"assets/assets/icons/phone.svg": "9c6d9111a23b9b088579a0e4dc47da9a",
"assets/assets/icons/ts.svg": "4587ff2e855213be79478702bcbe468e",
"assets/assets/icons/vscode.svg": "acc9758e0e6719ce516d8276fa033468",
"assets/assets/icons/whatsapp.svg": "9032b6cdb8ead03a3ab1958f2efa0776",
"assets/assets/projects/alef.png": "762cd62d440acc0f696534c5fd88efdc",
"assets/assets/projects/alfuttaim.png": "bf92c56f1799f2e4d268dd571bdb64ef",
"assets/assets/projects/aws_bazar.png": "6b219ac3c1661d21cb3f6dbb316bedf2",
"assets/assets/projects/chilliwack.png": "a609a4cd3ed0314622b73f505e810bc1",
"assets/assets/projects/logo.png": "c670f1c829e33661578e222b8c83f78d",
"assets/assets/projects/ozoon.png": "871c18a49cfea9902ba014a74632e743",
"assets/assets/projects/pagination.png": "27ee3f039edc2a7082f790162e7a18de",
"assets/assets/projects/range.png": "17a5da20d7b55293bc2be15ca7818928",
"assets/assets/projects/shams_captain.png": "edf8463af32b89ebf2b14b04ea5b70c3",
"assets/assets/projects/shams_customer.png": "736caac5d7d86fdafb675b0b595ddd44",
"assets/assets/projects/sorting.png": "7bf5fb50e06eec3d9dec8650ec8677ee",
"assets/FontManifest.json": "4e77ba140f5a13c442805044d45bcf95",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "690aa9392b1b754f622eebfa98d61baf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "263f481e977ec5913010593ef3a59205",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e2bdc95998e44e367ff3f74ea8457f93",
"icons/Icon-192.png": "e3075e122156ac328bef7ec0fcc27fd8",
"icons/Icon-512.png": "4fbb7b35dd1463dfbc290ad187d231aa",
"icons/Icon-maskable-192.png": "e3075e122156ac328bef7ec0fcc27fd8",
"icons/Icon-maskable-512.png": "4fbb7b35dd1463dfbc290ad187d231aa",
"index.html": "00d0a6c37f68504d8c18587c9006ace8",
"/": "00d0a6c37f68504d8c18587c9006ace8",
"main.dart.js": "6de5d2de0748a464dd7d4fe8c5a9a2e8",
"manifest.json": "f761265ce3f06f7e7dbea365e6a13f2e",
"version.json": "860787fe318a0b6b6d48212d372615b2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
