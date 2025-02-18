// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvf1FH6npbeEU9rep0g9XProcMuecsMcA",
  authDomain: "tranzact-seguros.firebaseapp.com",
  projectId: "tranzact-seguros",
  storageBucket: "tranzact-seguros.firebasestorage.app",
  messagingSenderId: "823381022418",
  appId: "1:823381022418:web:b176b52c922ad378be7f0b",
  measurementId: "G-WMFRDY4QZT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

console.log(app);
console.log(db);

//Firebase CLI
//npm install -g firebase-tools
//firebase login
//firebase init
//firebase deploy