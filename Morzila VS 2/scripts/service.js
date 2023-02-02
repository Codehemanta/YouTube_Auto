alert("fdg");
chrome.runtime.onStartup.addListener(async () => {
  var a = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"enabled": true}, function(options){
            resolve(options.enabled);
      })
  });

  const enabled = await a;
  console.log(enabled);
  if (enabled) {
    await enable();
  } else {
    await disable();
  }
});

chrome.runtime.onMessage.addListener(async (request, sender) => {
  switch (request.action) {
    case "INSERT_CSS_RULE": {
      return chrome.tabs.insertCSS(sender.tab.id,{ 
        file: `${request.rule}.css`
      });
    }
    default:
      throw new Error(`Unknown Action: ${request.action}`);
  }
});


chrome.runtime.onInstalled.addListener(async (details) => {
  switch (details.reason) {
    case chrome.runtime.OnInstalledReason.INSTALL:
      return chrome.storage.sync.set({
        installDate: Date.now(),
        installVersion: chrome.runtime.getManifest().version,
      });
    case chrome.runtime.OnInstalledReason.UPDATE:
      return chrome.storage.sync.set({
        updateDate: Date.now(),
      });
  }
});



chrome.storage.onChanged.addListener(async (changes, namespace) => {
  if (namespace !== "sync") return;

  if (changes.enabled) {
    if (changes.enabled.newValue) {
      await enable();
    } else {
      await disable();
    }
  }
});

chrome.storage.onChanged.addListener(async (changes, namespace) => {
  if (namespace !== "sync") return;

  if (changes.videolike) {
    if (changes.videolike.newValue) {
      await reloadAffectedTab();
    }else {
      await reloadAffectedTab();
    }
  }
});

chrome.storage.onChanged.addListener(async (changes, namespace) => {
  if (namespace !== "sync") return;

  if (changes.videosubscribe) {
    if (changes.videosubscribe.newValue) {
      await reloadAffectedTab();
    }else {
      await reloadAffectedTab();
    }
  }
});



/**
 * Enables this extension core
 * @returns Promise
 */

async function enable() {
  chrome.browserAction.setIcon({
    path: {
      32: "../images/icon-32.png",
      38: "../images/icon-38.png",
      128: "../images/icon-128.png",
    },
  });
  reloadAffectedTab();
}

/**
 * @returns Promise
 */

async function disable() {
  chrome.browserAction.setIcon({
    path: {
      32: "../images/icon-disabled-32.png",
      38: "../images/icon-disabled-38.png",
      128: "../images/icon-disabled-128.png",

    },
  });
  reloadAffectedTab();
}

/**
 * @returns Promise
 */
async function reloadAffectedTab() {
  // const [currentTab] = chrome.tabs.query({
  //   active: true,
  //   url: "*://*.youtube.com/*",
  // });
  // const isTabAffected = Boolean(currentTab?.url);
  // if (isTabAffected) {
  //   return chrome.tabs.reload();
  // }

  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //    return chrome.tabs.reload();
  // });
  chrome.tabs.query({url: "*://*.youtube.com/*"}, function(tab) {
   // reload tab with one of the methods from linked answer
   chrome.tabs.reload(tab[0].id) 
  });
}
