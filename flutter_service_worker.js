'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9beaf2b87dbd5dc7505eac0573af8ea6",
"version.json": "a02c20b3655ac5a335223358e0abeca0",
"index.html": "9ffc77ea72a4083b1190fa67aabadf60",
"/": "9ffc77ea72a4083b1190fa67aabadf60",
"main.dart.js": "f347941f5f145a9e5a1b9ecea53d10c9",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "60271a2dd0c6d5d21f3d0da067dbe3af",
"assets/resources/images/expanses.png": "995ff74e4596473f67086622415a4ae4",
"assets/resources/images/clock2.png": "6f8ae3fb9e03cff4fa358e5b1f548c8f",
"assets/resources/images/nav_right.png": "706b163783558a24dd67c74007205395",
"assets/resources/images/check.png": "37b6bc6558648da7d26c4784a04a2b15",
"assets/resources/images/upward_arrow.png": "64596ef6b37c08d928791d0f1ffe1a14",
"assets/resources/images/arrow_circle_green.png": "094409cbd07e9d351e06901230fab47b",
"assets/resources/images/flash.png": "bd61c6f661896e5d3a382d90bee74e61",
"assets/resources/images/LogoTagline.png": "fd5068473c14aeec33929ede61ac7c14",
"assets/resources/images/satellite.png": "21f474114709629df9ccf55c93165d12",
"assets/resources/images/ok.png": "e27841cacb18c1be00a63aa3c0f75c3a",
"assets/resources/images/ok_save.png": "7f944f084f2716b5ed9756c9dc7629de",
"assets/resources/images/rotation.png": "64ed32aa82d48c8f4c78f7b733a0b8f6",
"assets/resources/images/projects.png": "d41b9026cb7c5d681dae6ebee2b5f81b",
"assets/resources/images/new_alert_icon.png": "65f50bf571d1da907ecee94b95e5dc64",
"assets/resources/images/sync_icon_green.png": "787268dd3222ab704f043cb621cf9067",
"assets/resources/images/clipboard.png": "b75cee735d1068505bd7fbc4abc292ce",
"assets/resources/images/up_green.png": "5d20a6e710da6ff2bd03527df27a2286",
"assets/resources/images/forward_arrow.png": "3d57931181bb00cc7edbe94f38465d2d",
"assets/resources/images/right_arrow.png": "bc4f22b9820a6f802d1d78e5f84ce4df",
"assets/resources/images/information_filled.png": "695b4efffa711060e845acb6c54e8470",
"assets/resources/images/sync_down_arrow.png": "3144e22f1bed19682b2313cd36b424b4",
"assets/resources/images/sync_icon.png": "0d8dca8213b93c173d1f2fc652379ace",
"assets/resources/images/no_data_image.png": "1997d9a2466ad299c9d3662bebe0b0ab",
"assets/resources/images/ok_sq.png": "6535fd67ea58814537f1cd4987301c44",
"assets/resources/images/Vector.png": "0f75e8235e4e7daf7ba7027c8a869828",
"assets/resources/images/settings_icon.png": "92feaf8c659c64250f6eaf046bf7d1a4",
"assets/resources/images/customers.json": "b01478c825288d5032ecc692e1494e8b",
"assets/resources/images/add_icon.png": "602cc650d48819905fe9e29bbe5ca061",
"assets/resources/images/cancel.png": "776bfd09c56f4b739b46b9fb6876f8d8",
"assets/resources/images/logout.png": "a7d6db64bc1025412879bc2254770231",
"assets/resources/images/downward_arrow.png": "af4ce0f6d53f3a9a58cb32617e055079",
"assets/resources/images/Username.png": "7597ada532842adaaa53d6561ca49a1c",
"assets/resources/images/nav_back.png": "0fe8f334d4f788b34bf380a31ce36ee5",
"assets/resources/images/sync_show_detail_down.png": "ba252bcf0bcf47b937ccdeb8e5fd74fc",
"assets/resources/images/Circle.png": "cbfe843eeccc1fb2e51351ab2a3673b3",
"assets/resources/images/orderEntry.png": "8d4cfd91b49f53f8b0cb3808256fb4f7",
"assets/resources/images/refresh%2520(2)%25201.png": "0efa77c87c320a3c8b18aabc3ead17e9",
"assets/resources/images/timeTracking.png": "cea4be3765e8b284d1fb1ddb60f15bf7",
"assets/resources/images/document_text.png": "5c410c40ef21e53fbeb9efa7ef3f7b32",
"assets/resources/images/sync_show_detail.png": "ecda449be4c244a74be6dcfdf3ea9168",
"assets/resources/images/sync_icon_red.png": "15309e0cca5b258274570e92fde58d4c",
"assets/resources/images/bed.png": "23f92c89aad7aa19257eaf4d0ab9cb4e",
"assets/resources/images/sport2.png": "70b47e01a83d16e0cb6a5be916543034",
"assets/resources/images/pdf-file.png": "8f4166b49463f8d581f277ab50749e51",
"assets/resources/images/minus_icon.png": "67fba56f25a8bffe4c75f6762bb61743",
"assets/resources/images/info_icon.png": "c6df9cd0bb07d16eb81db2ff8a32c6b6",
"assets/resources/images/sport.png": "2116711b234ba3632e0595267dfcafd7",
"assets/resources/images/information2.png": "f32120da8cffd0a0e847dcee4d7be7b0",
"assets/resources/images/Background.png": "c0e0c41d50a5a35122beb8fcc35d25dc",
"assets/resources/images/loader.gif": "9e4b53897fa3b3699d38f353b992bae3",
"assets/resources/images/documents.png": "a494273a0325021480ae7656a1bb0c6c",
"assets/resources/images/sync_up_arrow.png": "d1646046e85c6161d904fbf606664fd6",
"assets/resources/images/holiday.png": "25c67e3986d26ff0d5e1ede093933698",
"assets/resources/images/attached.png": "8d62424556f28e594ea8e119c766758f",
"assets/resources/images/united-kingdom.png": "aac0dfefc080856931658ea9c760534e",
"assets/resources/images/cuircle.png": "a0b9f17e3a50dc167c69fc36c0ffa7dd",
"assets/resources/images/Menu.png": "a53b3c55811408192da1889b5f4b8964",
"assets/resources/images/Dialog.png": "c81fac50423f5c4e4f3c8abfab257841",
"assets/resources/images/food.png": "f4b58a57abaa0affa4d1ec3eac97c369",
"assets/resources/images/Password.png": "d71e1a3deb6c00857dd73b9f40b9956b",
"assets/resources/images/done.png": "e03595dc20f2102b00c38f937260c2e1",
"assets/resources/images/worker.png": "d2fb2aeab68514ac0b090e24f8fc5b9f",
"assets/resources/images/germany.png": "85ca59c60c9179d7b3e9b6ab03b407c7",
"assets/resources/images/error.png": "09f839c4c15e739c3e1c5c99b3f04288",
"assets/resources/images/daily_report.png": "f5cc944c3166f351c9f5f254f1ea968e",
"assets/resources/images/nav_dashboard.png": "8fc57d9da9edbc3942bc9df864287779",
"assets/resources/images/Cloud.png": "f8879ad21b573d843ad4451e479b8528",
"assets/resources/images/logoNew.png": "5650ce034d685b379a68ab636ce33019",
"assets/resources/images/calendar.png": "d558c6e2831d9ddcc3392186b8a1b932",
"assets/resources/images/remove.png": "dc8a298218b01cb39958e045e14036f8",
"assets/resources/images/car.png": "617c2c79b726ed237076720782520ad6",
"assets/resources/images/profile.png": "b5db941f5fa52207cb85277f7bcb0971",
"assets/resources/images/appicon.png": "deb9ba49fba123076987fbc0f2203dda",
"assets/resources/images/infoboard.png": "40241a1167f91190688f5a9aa95c6a5d",
"assets/resources/images/speed_meter.png": "592361b5b9668e8784d17dd682580b36",
"assets/resources/images/sync.png": "3eaff6add60af0438355d169744becd5",
"assets/resources/images/clock.png": "36cac4588fc71524abd05fa05fce57b5",
"assets/resources/images/logo_tagline.png": "e8f60fada214e69de9cd039e32fa2842",
"assets/resources/images/done_anim.json": "8236ec340122ef5f47e712b0ee9af7f8",
"assets/resources/images/no-flash.png": "b7f26efa480d02a0d748a0ab00a7026c",
"assets/resources/images/overtime.png": "9a388cb376cf85fdba2662d3324ce204",
"assets/resources/images/arrow_circle.png": "06e22a71166990f8d98f24ebb97b1a1b",
"assets/resources/images/camera.png": "b0bee23cd8084865fefaf4dee9de7da8",
"assets/resources/images/monthlyStatements.png": "1e59a0d124ec1c242a9ebe41f41de2d8",
"assets/resources/images/dailyReport.png": "25a2cb42dc0439e68527a84084325a2c",
"assets/resources/images/downArrow.png": "837b64e66a74f58b666dfaaca6565427",
"assets/resources/images/refresh.png": "53966583829062839b3fc0d82b5c1a2d",
"assets/resources/images/cost.png": "d1ae71c1e93bb9341c04e107e89ab36a",
"assets/resources/images/arrow_circle2.gif": "139b38abea0b1ce49f44dde2a777b753",
"assets/resources/images/navi.png": "3d57931181bb00cc7edbe94f38465d2d",
"assets/resources/images/close.png": "3f903e73e029cbe06b3b18b3d1315e07",
"assets/AssetManifest.json": "039ec891d19b992cd9e250a7fff50936",
"assets/NOTICES": "1f35b3b6db6a97e7dce53b390be1326c",
"assets/FontManifest.json": "666898de76aeb0dc3e8c7a0c6f605983",
"assets/AssetManifest.bin.json": "099cdf38c52a441f346525cbb7e23cb5",
"assets/packages/timezone/data/latest_all.tzf": "5e6af46f7fdd153c308fc6531ba69d03",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ff713f7c705b567cc7ba7d4074fe01bb",
"assets/fonts/Nunito-ExtraBoldItalic.ttf": "5f67429d0ff76ec74d98b915439692ee",
"assets/fonts/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/fonts/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/fonts/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/fonts/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/fonts/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/fonts/Nunito-BoldItalic.ttf": "b21199decd37bf9a096e0f495bb20ffd",
"assets/fonts/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/fonts/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/fonts/Nunito-SemiBoldItalic.ttf": "59cf0995782240777656a355cf08b234",
"assets/fonts/Nunito-BlackItalic.ttf": "8bf9ce6e0c5434ca0ac97f90196d0c66",
"assets/fonts/MaterialIcons-Regular.otf": "61b541353faebade0e277945749dde8d",
"assets/fonts/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/fonts/Nunito-LightItalic.ttf": "55032f4e811253da318f967e0db3d7e9",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
