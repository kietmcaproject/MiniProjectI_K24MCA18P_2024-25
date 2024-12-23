// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail, fetchSignInMethodsForEmail } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

//web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDepY37nZ8UcQXjdlW98PdiT02e22UvywM",
    authDomain: "login-signup-8f4ad.firebaseapp.com",
    databaseURL: "https://login-signup-8f4ad-default-rtdb.firebaseio.com",
    projectId: "login-signup-8f4ad",
    storageBucket: "login-signup-8f4ad.appspot.com",
    messagingSenderId: "193012154219",
    appId: "1:193012154219:web:0f0fb0d21e1ca76d53562e"
};

// initialize firebase
initializeApp(firebaseConfig);

document.getElementById("back").onclick = function () {
    window.location.href = '/html/login.html';
};

document.getElementById("rbtn").onclick = function () {
    document.getElementById("confirm-popup").style.display = "block";
};

document.getElementById("yes-btn").onclick = function () {
    document.getElementById("confirm-popup").style.display = "none";
    document.getElementById("email-popup").style.display = "block";
};

document.getElementById("cancel-btn").onclick = function () {
    document.getElementById("confirm-popup").style.display = "none";
    window.location.href = '/html/login.html';
};

document.getElementById("send-btn").onclick = function () {
    const email = document.getElementById('reset-email').value;
    const auth = getAuth(); 

    if (email) {
        fetchSignInMethodsForEmail(auth, email)
            .then((methods) => {
                if (methods.length > 0) {
                    sendPasswordResetEmail(auth, email)
                        .then(() => {
                            showMessage("Password reset link has been sent to your email.");
                            clearInput();
                            setTimeout(() => {
                                window.location.href = '/html/login.html';
                            }, 5000);
                        })
                        .catch((error) => {
                            showMessage("Error sending email: " + error.message);
                        });
                } else {
                    showMessage("This email is not registered. Please register first.");
                    clearInput();
                    window.location.href = '/html/Registration.html';
                    
                }
            })
            .catch((error) => {
                showMessage("Error checking email: " + error.message);
            });
    } else {
        showMessage("Please provide an email address.");
    }
};

function showMessage(text) {
    const messagePopup = document.getElementById("message-popup");
    const messageText = document.getElementById("message-text");

    messageText.textContent = text;
    messagePopup.style.display = "block";

    setTimeout(() => {
        messagePopup.style.display = "none";
    }, 5000);
}

function clearInput() {
    document.getElementById('reset-email').value = '';
}
