'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/Assest/img/add.svg": "7c0639352879dcf876941cc1956caffd",
"assets/Assest/img/Avatar.svg": "dc5dc4559a359e80152997dd42ee3bf9",
"assets/Assest/img/Badge.svg": "405d8af3544e547c6ccf8f69bac6470c",
"assets/Assest/img/Bell.svg": "fd016355aa6c35d7d33c46ebf1e86cba",
"assets/Assest/img/CalendarCheck.svg": "724644f464bf50cf7544c66ad69f7461",
"assets/Assest/img/delete.svg": "86152717725ded91aea3247945fecdf3",
"assets/Assest/img/document-upload.svg": "c3964bf4e0a1776909899ed524c900d7",
"assets/Assest/img/down.svg": "dc8654b17b14471d671aa99733cb352e",
"assets/Assest/img/edit-text.svg": "15ab01387fd31a5357e615da28b371c0",
"assets/Assest/img/Extend.svg": "0593aff24b59eed9182ba7dea45e97f2",
"assets/Assest/img/frontdesk-w.svg": "d4c9c8ec113a8e2f9da7a4b3b680678d",
"assets/Assest/img/GearSix.svg": "2be783015ad0a83b761b5dcbc69eee94",
"assets/Assest/img/HandSoap.svg": "d18b745d6d8fb7dce60715ec2cf8b1fa",
"assets/Assest/img/hotelimg.svg": "b85447d372d8410e31ec020ed3f65831",
"assets/Assest/img/increment.svg": "67a304acff820447050a1ff7c1e341bf",
"assets/Assest/img/invoice.svg": "f60197df115ff5bdd220fe091aa1e737",
"assets/Assest/img/Landscape-Vector.svg": "8438f33f3cd7efb7605287a1a1c6a128",
"assets/Assest/img/logo.svg": "b8c985bca3c9ea2cb8f0cebc2afe8e62",
"assets/Assest/img/logout.svg": "c6bd7e2b77895be3eb21e5c75e6c6a3f",
"assets/Assest/img/logout1.svg": "c92a625acd7ae91f63940446f6ab8803",
"assets/Assest/img/luanch.png": "7c9b789983676a4c511543272129a3f7",
"assets/Assest/img/luanch.svg": "9b589be07a6a17da86a2b38ab0ef9b01",
"assets/Assest/img/minus.svg": "4b13c58765c85c87d85d7ae0b2e0af69",
"assets/Assest/img/Nodata.svg": "7794d59045bd23932e6fcf76a36c81d6",
"assets/Assest/img/Nointernet.svg": "9fef3f30e32a4f71b2e3c0ab13393f8a",
"assets/Assest/img/plus.svg": "4d920c74bf3008ef5a831843bee31de7",
"assets/Assest/img/Reports.svg": "0881e009369dcd09f9a8f0f4534080e5",
"assets/Assest/img/request.svg": "fca124225038eb0e9738c69ff72432e0",
"assets/Assest/img/service-b.svg": "45cfcc3710c38acba0cdce1ca5994349",
"assets/Assest/img/services.svg": "cc165c1ed1dc37c5403c058bfd87f978",
"assets/Assest/img/show.svg": "b46fb213f4cc6096cce8244d353a5aa2",
"assets/Assest/img/Somethingwrong.svg": "9bb9113a90ccb84688c0052005ac0ef7",
"assets/Assest/img/up.svg": "ded131cad784bfeb224d4c6d0bbebd11",
"assets/Assest/img/Vector.svg": "25ffdb8a02cba66990718188ef32787a",
"assets/Assest/img/walkin.svg": "331ae5aae445739cd6018c050e46b4be",
"assets/AssetManifest.bin": "98c6bd0a114d7cdbbbc5106bcac70ede",
"assets/AssetManifest.bin.json": "7b930da69cbc0b13b5216086c86b458f",
"assets/AssetManifest.json": "11d1047c89fc5379614e7fdad06e13d0",
"assets/FontManifest.json": "74977251ba163a06f3a6eaf7eae719f9",
"assets/fonts/lato/Lato-Black.ttf": "1233fdf19c04333c7f58af4eb8698452",
"assets/fonts/lato/Lato-Bold.ttf": "eb9532033c2adf99b1314611b5e9cd0e",
"assets/fonts/lato/Lato-Light.ttf": "90e1d3559ac52f7f0f77a86e1bfd632d",
"assets/fonts/lato/Lato-Medium.ttf": "863b7dcd5ec2c3923122af25ce0f7e4c",
"assets/fonts/lato/Lato-Regular.ttf": "3b9b99039cc0a98dd50c3cbfac57ccb2",
"assets/fonts/lato/Lato-SemiBold.ttf": "3c6cfb1aebd888a0eb4c8fba94140fa6",
"assets/fonts/lato/Lato-Thin.ttf": "eb1635403cd764912ca1e0af78735797",
"assets/fonts/MaterialIcons-Regular.otf": "3b0ca71562e06384210aa085ff7bbc95",
"assets/fonts/poppins/Poppins-Black.ttf": "8971d1710cbf4c91bca1b460aec154d7",
"assets/fonts/poppins/Poppins-Bold.ttf": "7940efc40d8e3b477e16cc41b0287139",
"assets/fonts/poppins/Poppins-Light.ttf": "3352653dedd571bbc490c8be132b38cd",
"assets/fonts/poppins/Poppins-Medium.ttf": "a4e11dda40531debd374e4c8b1dcc7f4",
"assets/fonts/poppins/Poppins-Regular.ttf": "731a28a413d642522667a2de8681ff35",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "e63b93dfac2600782654e2b87910d681",
"assets/fonts/poppins/Poppins-Thin.ttf": "735aa7d8e35b63068b9113ea2545f0c3",
"assets/NOTICES": "26c16dad8e8c04bc533e65bf72038076",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5189aa58a9f1f8037da30ee84d260c2b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3d6321c92965ddecb755366f5355c0a7",
"/": "3d6321c92965ddecb755366f5355c0a7",
"main.dart.js": "06a6742969c42e8fa42ab3b79a1adf61",
"manifest.json": "14baece330311b9e1f68cfb0a9796866",
"version.json": "82c85382ff1e4968f1ef5ac27a10f7bd"};
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
