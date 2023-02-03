var config = {};

config.log = false;

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};


chrome.runtime.onMessage.addListener(async (request, sender) => {
  switch (request.action) {
    case "INSERT": {
      if (localStorage.ads == "true") {
            chrome.tabs.insertCSS(sender.tab.id,{ 
              file: `styles/inject.css`
            });
            chrome.tabs.executeScript(sender.tab.id,{ 
              file: `scripts/skip.js`
            });
      }
      if (localStorage.like == "true") {
          chrome.tabs.executeScript(sender.tab.id,{ 
            file: `scripts/like.js`
          });
      }
      if (localStorage.subscribe == "true") {
          chrome.tabs.executeScript(sender.tab.id,{ 
            file: `scripts/subscribe.js`
          });
      }
    }
  }
});

chrome.runtime.onMessage.addListener(async (request, sender) => {
  switch (request.action) {
    case "INSERT_CSS_RULE": {
      chrome.tabs.query({url: "*://*.youtube.com/*"}, function(tab) {
          chrome.tabs.reload(tab.id);
      });
    }
  }
});



