domReady(() => {
  bindCheckboxes()
  initRateButton()
  sendmessage()
  translateHTML()

})


function domReady (callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback, false);
  }
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

function initRateButton() {
  document.querySelector('.teaser').href = `https://microsoftedge.microsoft.com/addons/detail/youtube-auto/${chrome.runtime.id}/reviews`;
}
var adstxt,liketxt,subtxt;
function sendmessage() {
  if (localStorage.ads) {
    chrome.tabs.query({active: true, currentWindow: true},
      function (tabs) {chrome.tabs.sendMessage(tabs[0].id, 'adsblockon')})     

  }
  if (localStorage.ads=="false") {
    chrome.tabs.query({active: true, currentWindow: true},
      function (tabs) {chrome.tabs.sendMessage(tabs[0].id, 'adsblockoff')})
  }


  if (localStorage.subscribe) {
    chrome.tabs.query({active: true, currentWindow: true},
      function (tabs) {chrome.tabs.sendMessage(tabs[0].id, 'subscribeon')})
      
  }
  if (localStorage.subscribe=="false") {
    chrome.tabs.query({active: true, currentWindow: true},
      function (tabs) {chrome.tabs.sendMessage(tabs[0].id, 'subscribeoff')}) 
     
  }

  if (localStorage.like) {
    chrome.tabs.query({active: true, currentWindow: true},
      function (tabs) {chrome.tabs.sendMessage(tabs[0].id, 'likeon')}) 
   
  }
  if (localStorage.like=="false") {
    chrome.tabs.query({active: true, currentWindow: true},
      function (tabs) {chrome.tabs.sendMessage(tabs[0].id, 'likeoff')}) 
   
  }

  
}

function translateHTML (dataKey = 'message') {
  for (const $element of document.getElementsByTagName('*')) {
    if ($element.dataset && $element.dataset[dataKey]) {
      $element.innerHTML = chrome.i18n.getMessage($element.dataset[dataKey])
    }
  }
}

setInterval(sendmessage,300);


