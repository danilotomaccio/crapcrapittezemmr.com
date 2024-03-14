importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyArxk42aqueMXlrzx163cskyu_HqXbJ7nw",
    authDomain: "detti-tricaricesi.firebaseapp.com",
    projectId: "detti-tricaricesi",
    storageBucket: "detti-tricaricesi.appspot.com",
    messagingSenderId: "122148054857",
    appId: "1:122148054857:web:cf7dfe33c2926c1bb7dc98",
    measurementId: "G-6BXMDTYNSC"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


function open(event, url) {
    event.waitUntil(async function () {
        if ('openWindow' in clients) {
            await clients.openWindow(url)
        }
    }());
}

self.addEventListener("notificationclick", (notificationEvent) => {
    console.log(notificationEvent);
    notificationEvent.notification.close();
    open(notificationEvent, `${self.origin}/#/`);
});


messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] ---->',
        payload
    );
    const notificationTitle = 'Detto del giorno 2';
    const notificationOptions = {
        body: JSON.stringify(payload),
        icon: '/pwa/pwa-64x64.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
