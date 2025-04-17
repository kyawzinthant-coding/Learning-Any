console.log("background loaded"); // for debug

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "save_link",
    title: "Save to Smart Linker",
    contexts: ["link"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "save_link" && info.linkUrl) {
    chrome.storage.local.get(["savedLinks"], (result) => {
      const existing = result.savedLinks || [];
      const updated = [...existing, info.linkUrl];
      chrome.storage.local.set({ savedLinks: updated }, () => {
        console.log("Link saved:", info.linkUrl);
      });
    });
  }
});

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   if (info.menuItemId === "save_link" && info.linkUrl) {
//     fetch("https://your-backend.com/api/links", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         url: info.linkUrl,
//         sourceTab: tab?.title,
//         savedAt: new Date().toISOString(),
//       }),
//     }).then(() => console.log("Link sent to server"));
//   }
// });
