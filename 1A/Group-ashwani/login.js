// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiOU7UM-u4ULJKa3ELmZk-I3MjtZeYCgQ",
    authDomain: "fir-61e78.firebaseapp.com",
    projectId: "fir-61e78",
    storageBucket: "fir-61e78.firebasestorage.app",
    messagingSenderId: "232267931813",
    appId: "1:232267931813:web:ecad7609795e16d5aa2d4c",
    measurementId: "G-GF51KDT11D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//  submit
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {

    event.preventDefault()

    // inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // alert(5)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Logging in...")
            window.location.href = "index.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})

// close button
    // Get the close button by its ID
    const closeButton = document.getElementById('close');

    // Add an event listener to the button to redirect to the homepage when clicked
    closeButton.addEventListener('click', function() {
      window.location.href = "index.html"; // Redirect to the homepage (adjust if needed)
    });

    // // To open login first
    // firebase.auth().onAuthStateChanged((user)=>{
    //     if(user){
    //         location.replace("index.html")
    //     }
    // })


    