// Import the functions you need from the SDKs you need
// import { getMessaging } from "firebase/messaging";
// import { initializeApp } from "firebase/app";
import firebase from "firebase";

// import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_4RmHEj7GJeq_tD6r-LbBVuJX87Sgpp0",
  authDomain: "fcmfinal-2ff15.firebaseapp.com",
  projectId: "fcmfinal-2ff15",
  storageBucket: "fcmfinal-2ff15.appspot.com",
  messagingSenderId: "527282622748",
  appId: "1:527282622748:web:1a317a1c92b39572ef2ad9"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
// console.log(app)
// const messaging = getMessaging(app)


// export default messaging;
export default firebase;