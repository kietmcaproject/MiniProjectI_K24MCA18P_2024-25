// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
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
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating Account...")
            window.location.href = "login.html";
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


    //get ref to database
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    set(ref(db, 'user/' + document.getElementById("username").value),{
        username: document.getElementById("username").value,
        phonenumber: document.getElementById("number").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    });
  })

// // Reference messages collection
// var messagesRef = firebase.database().ref('messages');

// // Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// // Submit form
// function submitForm(e){
//   e.preventDefault();

//   // Get values
//   var name = getInputVal('name');
// //   var company = getInputVal('company');
//   var phone = getInputVal('number');
//   var email = getInputVal('email');
//   var password = getInputVal('password');

//   // Save message
//   saveMessage(name, number, email, password);

//   // Show alert
//   document.querySelector('.alert').style.display = 'block';

//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);

//   // Clear form
//   document.getElementById('contactForm').reset();
// }

// // Function to get get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name, number, email, password){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name:name,
//     number:number,
//     email:email,
//     password:password
//   });
// }
