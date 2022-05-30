

importScripts('https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging.js')

firebase.initializeApp({
    messagingSenderId: "527282622748"
})

const initMessaging = firebase.messaging()