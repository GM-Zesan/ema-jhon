// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyK3h7GUrjjSWKTr_T2I1HmrOKS9eqtgk",
    authDomain: "ema-john-simple-2a540.firebaseapp.com",
    projectId: "ema-john-simple-2a540",
    storageBucket: "ema-john-simple-2a540.appspot.com",
    messagingSenderId: "246629740907",
    appId: "1:246629740907:web:0473e4818a340397d65c2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;