
Promise.all([skip(), injectMainScript("scripts/scriptlets.js")]);

function skip() {
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