/**
 * By @Codehemu - ( JS: MIT License)
 * License - https://github.com/hemucode/LICENSE ( CSS: MIT License)
 */
console.log(`[YouTube Auto™ v${chrome.runtime.getManifest().version} Enabled]`);
console.log(`Cloned by https://chrome.google.com/webstore/detail/${chrome.runtime.id}`)
// async function init() {
//    chrome.storage.sync.set({key: true}, function() {
//           console.log('Value is set to ');
//    });
//    chrome.storage.sync.get(['key'], function(result) {
//           console.log('Value currently is ' + result.key);
//     });

// }init();
console.log("run...")
// function init() {
//   try {
//     chrome.storage.sync.get({"videosubscribe":true}, function(options){
//             const videosubscribe = options.videosubscribe;
//             console.log(videosubscribe + " videosubscribe");
//             if (videosubscribe) {
//               console.log("videosubscribe Run...");
//                 setInterval(()=>{
//                   sub = document.getElementsByClassName("ytd-subscribe-button-renderer")[1];
//                   subscribeduse = document.querySelector(".style-scope.ytd-subscribe-button-renderer[subscribed]");
//                   if (sub && !(subscribeduse)) {
//                     sub.click();console.log("Subscribe");
//                   }
//                 },2000)
//             }
//     })




//     chrome.storage.sync.get({"videolike": true}, function(options){
//           const videolike = options.videolike;
//           console.log(videolike + " videolike");
//           if (videolike) {
//             console.log("videolike Run...");
//             setInterval(()=>{
//               likebtn = document.querySelector("#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button");
//               if (likebtn && likebtn.getAttribute("aria-pressed") == "false") {
//                 likebtn.click();console.log("Auto Like");
//               }
//             },2000)
//           }
//     })


//     chrome.storage.sync.get({"enabled": true}, function(options){
//           const enabled = options.enabled;
//           console.log(enabled + " enabled");
//           if (enabled) {
//           setInterval(()=>{
//               const btn=document.querySelector(".ytp-ad-skip-button");
//               if(btn) {btn.click();}
//               if( ! document.querySelector('.ad-showing') ) return
//                     const video=document.querySelector('video')
//                     if( ! video)  return
//                     if(btn) {
//                       btn.click()
//                     } else {
//                       video.currentTime = isNaN(video.duration) ? 0 : video.duration
//                     }
//           },300);
//           await Promise.all([injectStyles(), injectMainScript("sctipts/scriptlets.js")]);
//         }
//     })

//   }
//   catch(err) {
//     console.log(err.message);
//   }
 
// }
// init();

// /**
//  * @returns Promise
//  */

// function injectStyles() {
//   return chrome.runtime.sendMessage({
//     action: "INSERT_CSS_RULE",
//     rule: "content-style",
//   });
// }

// /**
//  * @returns Promise
//  */
// function injectMainScript(src) {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = chrome.runtime.getURL(src);
//     script.onload = function () {
//       this.remove();
//       resolve();
//     };
//     script.onerror = reject;
//     (document.head || document.documentElement).appendChild(script);
//   });
// }