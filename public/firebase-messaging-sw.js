importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.1    /firebase-messaging.js')

firebaseApp.initializeApp({
    messagingSenderId: "527282622748"
})

const initMessaging = firebaseApp.messaging()