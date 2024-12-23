import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDepY37nZ8UcQXjdlW98PdiT02e22UvywM",
    authDomain: "login-signup-8f4ad.firebaseapp.com",
  databaseURL: "https://login-signup-8f4ad-default-rtdb.firebaseio.com",
  projectId: "login-signup-8f4ad",
  storageBucket: "login-signup-8f4ad.appspot.com",
  messagingSenderId: "193012154219",
  appId: "1:193012154219:web:0f0fb0d21e1ca76d53562e"
};

// Initialize Firebase
export function firebaseInit(){
    
const app = initializeApp(firebaseConfig);

}