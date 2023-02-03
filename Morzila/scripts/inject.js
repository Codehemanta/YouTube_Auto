//YouTube Auto by @thegayen - https://github.com/Codehemanta/YouTube_Auto/ - @YoutubeAuto
//License - https://github.com/Codehemanta/YouTube_Auto/blob/main/LICENSE ( JS: Mozilla Public License 2.0 )


setInterval(()=>{
  chrome.runtime.onMessage.addListener(function (request) {
      if (request=="adsblockon") {
        //localStorage.removeItem("adsblock");
        localStorage.setItem("adsblock", "on");
      }
      if (request=="adsblockoff") {
        //localStorage.removeItem("adsblock");
        localStorage.setItem("adsblock", "off");
       }

      if (request=="subscribeon") {
        //localStorage.removeItem("adsblock");
        localStorage.setItem("subscribe", "on");}
      if (request=="subscribeoff") {
        //localStorage.removeItem("adsblock");
        localStorage.setItem("subscribe", "off");
       }

      if (request=="likeon") {
        //localStorage.removeItem("adsblock");
        localStorage.setItem("like", "on");}
      if (request=="likeoff") {
        //localStorage.removeItem("adsblock");
        localStorage.setItem("like", "off");
       }
  })
  if (localStorage.subscribe=="on") {
    console.log("Subscribe Run...");
    sub = document.getElementsByClassName("ytd-subscribe-button-renderer")[1];
    subscribeduse = document.querySelector(".style-scope.ytd-subscribe-button-renderer[subscribed]");
    if (sub && !(subscribeduse)) {
      sub.click();
    }
  }

  if (localStorage.like=="on") {
      console.log("Like Run...");
      likebtn = document.querySelector("#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button");
      if (likebtn && likebtn.getAttribute("aria-pressed") == "false") {
        likebtn.click();console.log("Auto Like");
      }

  }

  if (localStorage.adsblock=="on") {
      console.log("Adsblock Run...");
      const btn=document.querySelector(".ytp-ad-skip-button");
      if(btn) {btn.click();}
      if( document.querySelector('.ad-showing') ) {
            const video=document.querySelector('video')
            if( ! video)  return;
            if(btn) {
              btn.click()
            } else {
              video.currentTime = isNaN(video.duration) ? 0 : video.duration
            }
      }
  }

},300);





