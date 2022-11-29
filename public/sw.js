// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("static").then((cache) => {
      console.log("Opened cache");
      return cache.addAll([
        "/",
        "index.html",
        "src/App.css",
        "src/App.jsx",
        "src/main.jsx",
        "src/assets/images/ExpenseIt.png",
        "src/utilities/formatCurrency.js",
        "src/data/FAQs.json",
        "src/data/indexedDB.js",
        "src/context/GlobalState.js",
        "src/components/Accordion.jsx",
        "src/components/ContactForm.jsx",
        "src/components/DisplayFAQs.jsx",
        "src/components/DispalyTable.jsx",
        "src/components/ExpenseForm.jsx",
        "src/components/FetchExpense.jsx",
        "src/components/FetchIncome.jsx",
        "src/components/FinancialStatus.jsx",
        "src/components/Footer.jsx",
        "src/components/Header.jsx",
        "src/components/IncomeForm.jsx",
      ]);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request).then((res) => {
          return caches.open("dynamic").then((cache) => {
            cache.put(event.request.url, res.clone());
            return res;
          });
        });
      }
    })
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push("static");
  cacheWhitelist.push("dynamic");

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
