alert("fdg");
function init() {
  return Promise.all([translate(), hydrate()]);
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

/**
 * @returns Promise
 */
function hydrate() {

   var a = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"enabled": true}, function(options){
            resolve(options.enabled);
        })
    });

  const enabled = await a;
  console.log(enabled);


  // Hydrate Logo
  const $logo = document.querySelector(".logo");
  $logo.style.filter = enabled ? "grayscale(0)" : "grayscale(100%)";
  $logo.style.opacity = enabled ? "1" : "0.7";


  // Hydrate Checkbox Label
  const $checkboxLabel = document.querySelector("[data-message=adsblock]");
  $checkboxLabel.textContent = chrome.i18n.getMessage(
    enabled ? "adsblock" : "adsunblock"
  );

  // Hydrate Checkbox Label
  const $enabledCheckbox = document.querySelector("input[name=ads]");
  $enabledCheckbox.checked = enabled;
  $enabledCheckbox.addEventListener("change", async (event) => {
    const enabled = event.currentTarget.checked;

    // Persist
    await chrome.storage.sync.set({ enabled });

    // Update Checkbox Label
    $checkboxLabel.textContent = chrome.i18n.getMessage(
      enabled ? "adsblock" : "adsunblock"
    );

    // Update Logo
    $logo.style.filter = enabled ? "grayscale(0)" : "grayscale(100%)";
    $logo.style.opacity = enabled ? "1" : "0.7";
  });


  var c = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"videolike": true}, function(options){
            resolve(options.videolike);
        })
    });

  const videolike = await c;
  console.log(videolike);



  // Hydrate Checkbox Label
  const $checkboxLabel_2 = document.querySelector("[data-message=autolike]");
  $checkboxLabel_2.textContent = chrome.i18n.getMessage(
    videolike ? "autolike" : "manuallike"
  );

  // Hydrate Checkbox Label
  const $enabledCheckbox_2 = document.querySelector("input[name=like]");
  $enabledCheckbox_2.checked = videolike;
  $enabledCheckbox_2.addEventListener("change", async (event) => {
    const videolike = event.currentTarget.checked;

    // Persist
    await chrome.storage.sync.set({ videolike });

    // Update Checkbox Label
    $checkboxLabel_2.textContent = chrome.i18n.getMessage(
      videolike ? "autolike" : "manuallike"
    );
  });



  var d = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"videosubscribe": true}, function(options){
            resolve(options.videosubscribe);
        })
  });

  const videosubscribe = await d;
  console.log(videosubscribe);

  const $checkboxLabel_S = document.querySelector("[data-message=autosubscribe]");
  $checkboxLabel_S.textContent = chrome.i18n.getMessage(
    videosubscribe ? "autosubscribe" : "manualsubscribe"
  );

  // Hydrate Checkbox Label
  const $enabledCheckbox_S = document.querySelector("input[name=subscribe]");
  $enabledCheckbox_S.checked = videosubscribe;
  $enabledCheckbox_S.addEventListener("change", async (event) => {
    const videosubscribe = event.currentTarget.checked;

    // Persist
    await chrome.storage.sync.set({ videosubscribe });

    // Update Checkbox Label
    $checkboxLabel_S.textContent = chrome.i18n.getMessage(
      videosubscribe ? "autosubscribe" : "manualsubscribe"
    );
  });
  document.querySelector(".teaser").href = `https://chrome.google.com/webstore/detail/${chrome.runtime.id}`

}

init();
