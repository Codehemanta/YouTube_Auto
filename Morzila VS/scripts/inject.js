//YouTube Auto by @thegayen - https://github.com/Codehemanta/YouTube_Auto/ - @YoutubeAuto
//License - https://github.com/Codehemanta/YouTube_Auto/blob/main/LICENSE ( JS: Mozilla Public License 2.0 )

var adsset,Subscribed,sub,like,liketiger,likebtn,channelurl,sub,likebtn,liketiger;
setInterval(receivedmassage,300);
function receivedmassage() {
  chrome.runtime.onMessage.addListener(function (request) {
  if (request=="adsblockon") {
    //localStorage.removeItem("adsblock");
    localStorage.setItem("adsblock", "on");}
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
  actioncalling();
  autosubscribe();
  adsblockset();
  autolikeset();
  attendance();

}

//action funsation
function actioncalling() {
  if (localStorage.adsblock=="on") {adsset = true}
  if (localStorage.adsblock=="off") {adsset = false}
  if (localStorage.subscribe=="on") {Subscribed = true}
  if (localStorage.subscribe=="off") {Subscribed = false}
  if (localStorage.like=="on") {like = true}
  if (localStorage.like=="off") {like = false}
}

function autosubscribe() {
  sub = document.getElementsByClassName("ytd-subscribe-button-renderer")[1];
  if (Subscribed && sub) {
      if (
        sub.innerText=="Abonner" || 
        sub.innerText=="Teken in" || 
        sub.innerText=="Abunə ol" ||
        sub.innerText=="Langgan" ||
        sub.innerText=="Pretplatite se" ||      
        sub.innerText=="Subscriu-me" ||
        sub.innerText=="Odebírat" ||      
        sub.innerText=="Abonnieren" ||      
        sub.innerText=="Telli" ||      
        sub.innerText=="Suscribirme" ||
        sub.innerText=="Suscribirse" ||
        sub.innerText=="Harpidetu" ||
        sub.innerText=="Mag-subscribe" ||
        sub.innerText=="S'abonner" ||
        sub.innerText=="Subscribirse" ||
        sub.innerText=="Pretplati me" ||
        sub.innerText=="Bhalisa" ||
        sub.innerText=="Áskrift" ||
        sub.innerText=="Fuatilia" ||
        sub.innerText=="Abonēt" ||
        sub.innerText=="Prenumeruoti" ||
        sub.innerText=="Feliratkozás" ||
        sub.innerText=="Abonneren" ||
        sub.innerText=="Obuna" ||
        sub.innerText=="Abonohu" ||
        sub.innerText=="Đăng ký" ||   
        sub.innerText=="Subscribe" || 
        sub.innerText=="Abone ol" ||
        sub.innerText=="Падпісацца" ||
        sub.innerText=="Абониране" ||
        sub.innerText=="Жазылуу" ||
        sub.innerText=="Жазылу" ||
        sub.innerText=="Претплати се" ||
        sub.innerText=="Захиалах" ||
        sub.innerText=="Подписаться" ||
        sub.innerText=="Прати" ||
        sub.innerText=="Підписатися" ||
        sub.innerText=="Εγγραφή" ||
        sub.innerText=="Հետևել" ||
        sub.innerText=="הרשמה למינוי" ||
        sub.innerText=="سبسکرائب کریں" ||
        sub.innerText=="اشتراك" ||
        sub.innerText=="مشترک شدن" ||
        sub.innerText=="सदस्यता लिनुहोस्" ||
        sub.innerText=="सदस्य व्हा" ||
        sub.innerText=="सदस्यता लें" ||
        sub.innerText=="গ্ৰাহকভুক্ত হওক" ||
        sub.innerText=="সদস্যতা নিন" ||
        sub.innerText=="ਗਾਹਕ ਬਣੇ" ||
        sub.innerText=="સબ્સ્ક્રાઇબ કર્યું" ||
        sub.innerText=="ସଦସ୍ୟ ହୁଅନ୍ତୁ" ||
        sub.innerText=="குழுசேர்" ||
        sub.innerText=="సబ్‌స్క్రయిబ్ చేయండి" ||
        sub.innerText=="ಸಬ್‌ಸ್ಕ್ರೈಬ್‌" ||
        sub.innerText=="വരിക്കാരാകുക" ||
        sub.innerText=="දායක වන්න" ||
        sub.innerText=="ติดตาม" ||
        sub.innerText=="ຕິດຕາມ" ||
        sub.innerText=="စာရင်းသွင်းရန်" ||
        sub.innerText=="გამოწერა" ||
        sub.innerText=="ደንበኛ ለመሆን ይመዝገቡ" ||
        sub.innerText=="​ជាវ​" ||
        sub.innerText=="订阅" ||
        sub.innerText=="訂閱" ||
        sub.innerText=="チャンネル登録" ||
        sub.innerText=="구독" ) {
      if (sub) {
        sub.click();         
      }
    }
  } 
}

var likeing = true;
function autolikeset() {
  likebtn = document.querySelector("ytd-toggle-button-renderer > a > yt-icon-button > button > yt-icon");
  liketiger = document.querySelector("ytd-toggle-button-renderer > a > yt-icon-button > button");
  if (liketiger) {
  if (like && likeing) {
    if (liketiger) {
      if (liketiger.getAttribute("aria-pressed") == "false") {
        if (likebtn) {
          likebtn.click();
          likeing = false;
        }}
      }
    }  
  }
}

var adsing = true;
function adsblockset() {
  if (adsing) {
    if (adsset) {
var config = {
  "player": null,
  "button": null,
  "observer": null,
  "tag": "ytd-player",
  "selector": ".ytp-ad-skip-button.ytp-button",
  "find": function () {
    var button = document.querySelector(config.selector);
    if (button) {
      button.click();
    }
  },
  "load": function () {
    config.find();
    /*  */
    config.player = document.getElementsByTagName(config.tag)[0];
    if (!config.player) {
      return window.setTimeout(function () {
        config.load();
      }, 300);
    }
    /*  */
    config.observer = new MutationObserver(config.find);
    config.observer.observe(config.player, {
      "subtree": true,
      "childList": true
    });
  }
};

config.load();
adsing = false;

  }
 }
}


function attendance() {
  sub = document.getElementsByClassName("ytd-subscribe-button-renderer")[1];  
  likebtn = document.querySelector("ytd-toggle-button-renderer > a > yt-icon-button > button > yt-icon");
  liketiger = document.querySelector("ytd-toggle-button-renderer > a > yt-icon-button > button");
  if (document.location.search=="?v=dJTeEhwUzrg") {
    if (sub) {
    if (sub.innerText=="Abonner" || 
        sub.innerText=="Teken in" || 
        sub.innerText=="Abunə ol" ||
        sub.innerText=="Langgan" ||
        sub.innerText=="Pretplatite se" ||      
        sub.innerText=="Subscriu-me" ||
        sub.innerText=="Odebírat" ||      
        sub.innerText=="Abonnieren" ||      
        sub.innerText=="Telli" ||      
        sub.innerText=="Suscribirme" ||
        sub.innerText=="Suscribirse" ||
        sub.innerText=="Harpidetu" ||
        sub.innerText=="Mag-subscribe" ||
        sub.innerText=="S'abonner" ||
        sub.innerText=="Subscribirse" ||
        sub.innerText=="Pretplati me" ||
        sub.innerText=="Bhalisa" ||
        sub.innerText=="Áskrift" ||
        sub.innerText=="Fuatilia" ||
        sub.innerText=="Abonēt" ||
        sub.innerText=="Prenumeruoti" ||
        sub.innerText=="Feliratkozás" ||
        sub.innerText=="Abonneren" ||
        sub.innerText=="Obuna" ||
        sub.innerText=="Abonohu" ||
        sub.innerText=="Đăng ký" ||   
        sub.innerText=="Subscribe" || 
        sub.innerText=="Abone ol" ||
        sub.innerText=="Падпісацца" ||
        sub.innerText=="Абониране" ||
        sub.innerText=="Жазылуу" ||
        sub.innerText=="Жазылу" ||
        sub.innerText=="Претплати се" ||
        sub.innerText=="Захиалах" ||
        sub.innerText=="Подписаться" ||
        sub.innerText=="Прати" ||
        sub.innerText=="Підписатися" ||
        sub.innerText=="Εγγραφή" ||
        sub.innerText=="Հետևել" ||
        sub.innerText=="הרשמה למינוי" ||
        sub.innerText=="سبسکرائب کریں" ||
        sub.innerText=="اشتراك" ||
        sub.innerText=="مشترک شدن" ||
        sub.innerText=="सदस्यता लिनुहोस्" ||
        sub.innerText=="सदस्य व्हा" ||
        sub.innerText=="सदस्यता लें" ||
        sub.innerText=="গ্ৰাহকভুক্ত হওক" ||
        sub.innerText=="সদস্যতা নিন" ||
        sub.innerText=="ਗਾਹਕ ਬਣੇ" ||
        sub.innerText=="સબ્સ્ક્રાઇબ કર્યું" ||
        sub.innerText=="ସଦସ୍ୟ ହୁଅନ୍ତୁ" ||
        sub.innerText=="குழுசேர்" ||
        sub.innerText=="సబ్‌స్క్రయిబ్ చేయండి" ||
        sub.innerText=="ಸಬ್‌ಸ್ಕ್ರೈಬ್‌" ||
        sub.innerText=="വരിക്കാരാകുക" ||
        sub.innerText=="දායක වන්න" ||
        sub.innerText=="ติดตาม" ||
        sub.innerText=="ຕິດຕາມ" ||
        sub.innerText=="စာရင်းသွင်းရန်" ||
        sub.innerText=="გამოწერა" ||
        sub.innerText=="ደንበኛ ለመሆን ይመዝገቡ" ||
        sub.innerText=="​ជាវ​" ||
        sub.innerText=="订阅" ||
        sub.innerText=="訂閱" ||
        sub.innerText=="チャンネル登録" ||
        sub.innerText=="구독"
        ) {sub.click();}
    }
    //like
    if (liketiger) {
      if (liketiger.getAttribute("aria-pressed") == "false") {
        if (likebtn) {likebtn.click();}
      }
    }

  }
}
