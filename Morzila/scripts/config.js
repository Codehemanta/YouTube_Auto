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
  });
}


chrome.runtime.onMessage.addListener(async (request, sender) => {
  switch (request.action) {
    case "INSERT_CSS_RULE": {
      chrome.tabs.query({url: "*://*.youtube.com/*"}, function(tab) {
         chrome.tabs.reload(tab[0].id);
      });
      if (localStorage.ads == "true") {
        console.log("Run Adsblock...")
        reloadAdsblock();
      }
      console.log(localStorage.ads);
    }
  }
});