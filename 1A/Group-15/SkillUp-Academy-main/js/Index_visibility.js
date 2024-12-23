import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js"; 
import { firebaseInit } from "./firebase_initalization.js";
import { showAutoClosePopup } from "./showPopUp.js";

firebaseInit();
const auth = getAuth();

const specialUserId = "S4XcnlLbmYUR4um91HQx910qEtC3"; // ID for special access to Mentorship

function updateNavbar(user) {
    const navItems = {
        navContainer: document.querySelector(".nav_items"),
        profileSection: document.getElementById("profileSection"),
        mentorship: document.querySelector(".nav-mentorship"),
        signup: document.querySelector(".nav-signup"),
        login: document.querySelector(".nav-login"),
        updateProfile: document.querySelector(".nav-update-profile"),
        userDetails: document.querySelector(".nav-user-details"),
        logout: document.querySelector(".nav-logout"),
    };

    if (user) {
        // User is logged in
        navItems.navContainer.classList.remove("nav-right"); // Align left for logged-in users
        navItems.signup.style.display = "none";
        navItems.login.style.display = "none";
        navItems.updateProfile.style.display = "inline-block";
        navItems.userDetails.style.display = "inline-block";
        navItems.logout.style.display = "inline-block";
        navItems.profileSection.style.display = "flex";
        
        // Check if user ID matches specialUserId to show Mentorship
        if (user.uid === specialUserId) {
            navItems.mentorship.style.display = "inline-block"; // Show Mentorship for special user
        } else {
            navItems.mentorship.style.display = "none"; // Hide for regular users
        }
    } else {
        // User is logged out
        // showAutoClosePopup("You'r Logged out!", 3000);
        navItems.navContainer.classList.add("nav-right"); // Align right for logged-out users
        navItems.signup.style.display = "inline-block";
        navItems.login.style.display = "inline-block";
        navItems.updateProfile.style.display = "none";
        navItems.userDetails.style.display = "none";
        navItems.logout.style.display = "none";
        navItems.profileSection.style.display = "none";
        navItems.mentorship.style.display = "none";
    }
}

onAuthStateChanged(auth, (user) => {
    updateNavbar(user);
});
