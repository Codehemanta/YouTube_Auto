console.log("Subscribe Run...");
setInterval(()=>{
  sub = document.getElementsByClassName("ytd-subscribe-button-renderer")[1];
  subscribeduse = document.querySelector(".style-scope.ytd-subscribe-button-renderer[subscribed]");
  if (sub && !(subscribeduse)) {
    sub.click();
  }
},2000)