import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { firebaseInit } from "./firebase_initalization.js";

// Initialize Firebase
firebaseInit();
const auth = getAuth();

// Track authentication status
let userAuthenticated = false;

onAuthStateChanged(auth, (user) => {
    userAuthenticated = !!user; // Set true if user exists, otherwise false
});

// Redirect to login page
window.redirectToLogin = function () {
    window.location.href = "login_for_courses.html"; // Update this to your login page URL
};

// Redirect to home page
window.goHome = function () {
    window.location.href = "index.html";
};

// Show the popup
window.showPopup = function () {
    document.getElementById("popup").style.display = "flex";
};

// Close the popup
window.closePopup = function () {
    document.getElementById("popup").style.display = "none";
};

// Add event listeners to course links
document.addEventListener("DOMContentLoaded", () => {
    const courseLinks = document.querySelectorAll(".course-link");

    courseLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            if (!userAuthenticated) {
                event.preventDefault(); // Prevent navigation if user is not authenticated
                showPopup(); // Show login popup
            }
        });
    });
});
