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


function getDayOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diff = date.getTime() - startOfYear.getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.floor(diff / oneDay);
}

/* messaging.onBackgroundMessage((payload) => {
    const todayIndex = getDayOfYear(new Date()) % detti.length;
    const dettoOfToday = detti.filter(d => d.id === todayIndex)[0];

    const notificationTitle = 'Detto di oggi';
    const notificationOptions = {
        body: dettoOfToday.detto,
        icon: `/pwa/pwa-64x64.png`,
        badge: `/pwa/pwa-64x64.png`,
    };

    return self.registration.getNotifications().then(
        (notifications) => {
            notifications.forEach((notification) => {
                notification.close();
            });
            self.registration.showNotification(notificationTitle, notificationOptions);
        });
}); */
