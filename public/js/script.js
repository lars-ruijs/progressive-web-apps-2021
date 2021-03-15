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