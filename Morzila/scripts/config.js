var config = {};

config.log = false;

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};




function reloadAdsblock() {
  chrome.tabs.query({url: "*://*.youtube.com/*"}, function(tab) {
    chrome.tabs.reload(tab[0].id) ;
    chrome.tabs.insertCSS(tab[0].id,{ 
      file: `styles/inject.css`
    });
    chrome.tabs.insertCSS(tab[0].id,{ 
      file: `scripts/skip.js`
    });
  });
}

function reloadsubscribe() {
  chrome.tabs.query({url: "*://*.youtube.com/*"}, function(tab) {
    chrome.tabs.reload(tab[0].id) ;
    chrome.tabs.insertCSS(tab[0].id,{ 
      file: `scripts/subscribe.js`
    });
  });
}

function reloadlike() {
  chrome.tabs.query({url: "*://*.youtube.com/*"}, function(tab) {
    chrome.tabs.reload(tab[0].id) ;
    chrome.tabs.insertCSS(tab[0].id,{ 
      file: `scripts/like.js`
    });
  });
}

function checklocalStorage() {
  if (localStorage.ads == "true") {
      console.log("Run Adsblock...")
      reloadAdsblock();
  }
  if (localStorage.like == "true") {
      console.log("Run like...")
      reloadlike();
  }
  if (localStorage.ads == "true") {
      console.log("Run Adsblock...")
      reloadsubscribe();
  }
}


chrome.runtime.onMessage.addListener(async (request, sender) => {
  switch (request.action) {
    case "INSERT_CSS_RULE": {
      chrome.tabs.query({url: "*://*.youtube.com/*"}, function(tab) {
         chrome.tabs.reload(tab[0].id);
         checklocalStorage();
      });
    }
  }
});

