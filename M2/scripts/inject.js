/**
 * By @Codehemu - ( JS: MIT License)
 * License - https://github.com/hemucode/LICENSE ( CSS: MIT License)
 */
console.log(`[YouTube Auto™ v${chrome.runtime.getManifest().version}]`);
console.log(`Cloned by https://addons.mozilla.org/firefox/addon/youtubeauto/`)

function injectMSG() {
  return chrome.runtime.sendMessage({
    action: "INSERT",
    rule: "content-style",
  });
}
injectMSG();


