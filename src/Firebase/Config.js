// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDicHqbYmMJ6G7hhYA5BjO2UZvbolu4ypo",
    authDomain: "alta-pinta-store.firebaseapp.com",
    projectId: "alta-pinta-store",
    storageBucket: "alta-pinta-store.appspot.com",
    messagingSenderId: "923549024648",
    appId: "1:923549024648:web:b976186c0011dc6b2c7a3d",
    measurementId: "G-HXZ222JKDY"
};

// Initialize Firebase
initializeApp(firebaseConfig);