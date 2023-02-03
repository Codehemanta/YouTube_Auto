domReady(() => {
  bindCheckboxes()
  translate()
  initRateButton()
  init()
  initRateButton()
})


function domReady (callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback, false);
  }
}

function translate() {
  return new Promise((resolve) => {
    const elements = document.querySelectorAll("[data-message]");
    for (const element of elements) {
      const key = element.dataset.message;
      const message = chrome.i18n.getMessage(key);
      if (message) {
        element.textContent = message;
      } else {
        console.error("Missing chrome.i18n message:", key);
      }
    }
    resolve();
  });
}

function bindCheckboxes() {
  for (const $setting of document.querySelectorAll('.setting')) {
    const $input = $setting.querySelector('input')
    $input.checked = localStorage[$input.name] === 'true'
    $setting.addEventListener('change', (event) => {
      localStorage[$input.name] = $input.checked
    }, false)
  }
}
function injectMSG() {
  return chrome.runtime.sendMessage({
    action: "INSERT_CSS_RULE",
    rule: "content-style",
  });
}

function init(){
  if (localStorage.ads=="false") {
    document.querySelector("[data-message=adsblock]").textContent =chrome.i18n.getMessage("adsunblock");
  }
  
  if (localStorage.ads) {
    const enabled = localStorage.ads;
    const $logo = document.querySelector(".img");
    $logo.style.filter = enabled ? "grayscale(0)" : "grayscale(100%)";
    $logo.style.opacity = enabled ? "1" : "0.7";
    const $checkboxLabel = document.querySelector("[data-message=adsblock]");
    const $enabledCheckbox = document.querySelector("input[name=ads]");

    // Hydrate Checkbox Label

    $enabledCheckbox.addEventListener("change", (event) => {
      const enabled = event.currentTarget.checked;
      injectMSG();
      // Update Checkbox Label
     $checkboxLabel.textContent = chrome.i18n.getMessage(
        enabled ? "adsblock" : "adsunblock"
      );

      // Update Logo
      $logo.style.filter = enabled ? "grayscale(0)" : "grayscale(100%)";
      $logo.style.opacity = enabled ? "1" : "0.7";
    });
  }
   if (localStorage.subscribe=="false") {
    document.querySelector("[data-message=autosubscribe]").textContent = 
    chrome.i18n.getMessage("manualsubscribe");
  }
  if (localStorage.subscribe) {
      const videosubscribe = localStorage.subscribe;
      console.log("check" + videosubscribe);

      const $checkboxLabel_S = document.querySelector("[data-message=autosubscribe]");

      // Hydrate Checkbox Label
      const $enabledCheckbox_S = document.querySelector("input[name=subscribe]");
      $enabledCheckbox_S.addEventListener("change", (event) => {
        injectMSG();
        const videosubscribe = event.currentTarget.checked;
        $checkboxLabel_S.textContent = chrome.i18n.getMessage(
          videosubscribe ? "autosubscribe" : "manualsubscribe"
        );
      });
  }
    if (localStorage.like=="false") {
    document.querySelector("[data-message=autolike]").textContent = 
    chrome.i18n.getMessage("manuallike");
  }
  if (localStorage.like) {
      const videolike = localStorage.like;
      console.log(videolike);

      // Hydrate Checkbox Label
      const $checkboxLabel_2 = document.querySelector("[data-message=autolike]");

      // Hydrate Checkbox Label
      const $enabledCheckbox_2 = document.querySelector("input[name=like]");
      $enabledCheckbox_2.addEventListener("change", (event) => {
        injectMSG();
        const videolike = event.currentTarget.checked;

        // Update Checkbox Label
        $checkboxLabel_2.textContent = chrome.i18n.getMessage(
          videolike ? "autolike" : "manuallike"
        );
      });

  }
  
}


function initRateButton() {
  document.querySelector('.teaser').href = `https://addons.mozilla.org/firefox/addon/youtubeauto/`;
}






