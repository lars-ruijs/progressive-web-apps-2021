// Register the service worker
// Code adapted from: https://github.com/cmda-minor-web/progressive-web-apps-2021/blob/master/examples/node-simple/public/js/script.js
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(registration => { 
                console.log("Service worker is geregistreerd");
                return registration.update();
            })
            .catch(error => console.log(error));
    });
}