console.log("videolike Run...");
setInterval(()=>{
  likebtn = document.querySelector("#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button");
  if (likebtn && likebtn.getAttribute("aria-pressed") == "false") {
    likebtn.click();console.log("Auto Like");
  }
},2000)