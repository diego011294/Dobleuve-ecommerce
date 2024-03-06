// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }  from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhKWPzJ_5luWs5CbeztURhuQ1Zi0Bf9Zo",
    authDomain: "dobleuve.firebaseapp.com",
    projectId: "dobleuve",
    storageBucket: "dobleuve.appspot.com",
    messagingSenderId: "520360594753",
    appId: "1:520360594753:web:aba330d234af41932ba5c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)