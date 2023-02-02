/**
 * By @Codehemu - ( JS: MIT License)
 * License - https://github.com/hemucode/LICENSE ( CSS: MIT License)
 */
async function init() {
  try {
    var a = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"enabled": true}, function(options){
              resolve(options.enabled);
          })
      });

    const enabled = await a;
    console.log(enabled + " enabled");

    var d = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"videosubscribe":true}, function(options){
            resolve(options.videosubscribe);
        })
    });
    const videosubscribe = await d;
    console.log(videosubscribe + " videosubscribe");

    var c = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"videolike": true}, function(options){
            resolve(options.videolike);
        })
    });

    const videolike = await c;
    console.log(videolike + " videolike");

      if (videolike) {
        console.log("videolike Run...");
        setInterval(()=>{
          likebtn = document.querySelector("#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button");
          if (likebtn && likebtn.getAttribute("aria-pressed") == "false") {
            likebtn.click();console.log("Auto Like");
          }
        },2000)
    }

    if (videosubscribe) {
      console.log("videosubscribe Run...");
        setInterval(()=>{
          sub = document.getElementsByClassName("ytd-subscribe-button-renderer")[1];
          subscribeduse = document.querySelector(".style-scope.ytd-subscribe-button-renderer[subscribed]");
          if (sub && !(subscribeduse)) {
            sub.click();console.log("Subscribe");
          }
        },2000)
    }


    console.log(`[YouTube Auto™ v${chrome.runtime.getManifest().version} Enabled]`);
    console.log(`Cloned by https://chrome.google.com/webstore/detail/${chrome.runtime.id}`)


    // console.log(enabled);

    if (enabled) {
      setInterval(()=>{
          const btn=document.querySelector(".ytp-ad-skip-button");
          if(btn) {btn.click();}
          if( ! document.querySelector('.ad-showing') ) return
                const video=document.querySelector('video')
                if( ! video)  return
                if(btn) {
                  btn.click()
                } else {
                  video.currentTime = isNaN(video.duration) ? 0 : video.duration
                }
      },300);
      await Promise.all([injectStyles(), injectMainScript("sctipts/scriptlets.js")]);
    }

  }
  catch(err) {
    console.log(err.message);
  }
 
}
init();

/**
 * @returns Promise
 */

function injectStyles() {
    var css = document.createElement("style");
    var head = document.head;
    head.appendChild(css);

    css.type = 'text/css';

    css.innerText = `ytd-promoted-video-renderer, ytd-movie-offer-module-renderer, ytd-promoted-sparkles-web-renderer, ytd-promoted-sparkles-text-search-renderer, ytd-player-legacy-desktop-watch-ads-renderer { display: none !important; visibility: hidden !important; } #player-ads, #search-pva, #premium-yva, #masthead-ad, #feedmodule-PRO, #video-masthead, #watch-buy-urls, #sub-frame-error, #main-frame-error, #watch7-sidebar-ads, #feed-pyv-container, #shelf-pyv-container, #watch-branded-actions, #watch-channel-brand-div, #homepage-chrome-side-promo, #watch-channel-brand-div-text { display: none !important; visibility: hidden !important; } .iv-promo, .video-ads, .promoted-videos, .ytp-ad-progress, .ytp-ad-progress-list, .searchView.list-view, .html5-ad-progress-list, .watch-extra-info-right, .watch-extra-info-column, .lohp-pyv-shelf-container, .ytd-merch-shelf-renderer, .carousel-offer-url-container, .youtubeSuperLeaderBoardAdHolder, .youtubeSuperLeaderOverallAdArea, .ytd-movie-offer-module-renderer, .ytd-action-companion-ad-renderer { display: none !important; visibility: hidden !important; } iframe[id^=ad_], div[class*="-ad-v"], div[class*="-ads-"], a[href*="/adwords/"], a[href*="doubleclick.net"], iframe[src*="doubleclick.net"], a[href^="http://www.youtube.com/cthru?"], a[href^="https://www.youtube.com/cthru?"], a[onclick*="\"ping_url\":\"http://www.google.com/aclk?"] { display: none !important; visibility: hidden !important; } .badge-style-type-ad, .GoogleActiveViewElement, .sparkles-light-cta, .ytd-compact-promoted-video-renderer, .ytd-companion-slot-renderer, .ytd-player-legacy-desktop-watch-ads-renderer, .ytd-promoted-sparkles-text-search-renderer, .ytd-video-masthead-ad-v3-renderer, .ytp-ad-progress-list, [layout*="display-ad-"], #masthead-ad, #merch-shelf, #player-ads, #show-ad, #YtKevlarVisibilityIdentifier, a[href^="https://www.googleadservices.com/pagead/aclk?"], ytd-compact-promoted-video-renderer, ytd-companion-slot-renderer, ytd-display-ad-renderer, ytd-promoted-sparkles-text-search-renderer, ytd-promoted-sparkles-web-renderer, ytd-video-masthead-ad-advertiser-info-renderer, ytd-video-masthead-ad-v3-renderer, ytm-promoted-sparkles-web-renderer { display: none !important; }`;
}

/**
 * @returns Promise
 */
function injectMainScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL(src);
    script.onload = function () {
      this.remove();
      resolve();
    };
    script.onerror = reject;
    (document.head || document.documentElement).appendChild(script);
  });
}