// Register the service worker
// Code adapted from: https://github.com/cmda-minor-web/progressive-web-apps-2021/blob/master/examples/node-simple/public/js/script.js
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(registration => { 
                return registration.update();
            })
            .catch(error => console.log(error));
    });
}

window.addEventListener('offline', () => offline("It looks like you're offline. Check your internet connection."));
window.addEventListener('online', () => online());

if (window.navigator.onLine) {
    online();
  } else {
    offline("You are offline. Luckily for you, we saved a copy of this page!");
  }

function offline(message) {
    const banner = document.querySelectorAll("div.offline");
    const main = document.querySelector("main");

    if(banner.length == 0 && main) {
        const offlineInfoBox = document.createElement("div");
        offlineInfoBox.classList.add("offline");
        
        const offlineInfo = document.createElement("p");
        offlineInfo.textContent = message;
        offlineInfoBox.appendChild(offlineInfo);
        main.prepend(offlineInfoBox);
    }
}

function online(){
    const banner = document.querySelectorAll("div.offline");
    const main = document.querySelector("main");

    if(banner.length > 0) {
        main.removeChild(banner[0]);
    }
}