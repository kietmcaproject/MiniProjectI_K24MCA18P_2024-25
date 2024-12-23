import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-storage.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { firebaseInit } from "./firebase_initalization.js";

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Firebase
    firebaseInit();
    const auth = getAuth();
    const storage = getStorage();
    const db = getFirestore(); // Initialize Firestore

    // Check authentication state
    onAuthStateChanged(auth, async (user) => {
        const profileLogo = document.getElementById("profileLogo");
        const guestMessage = document.getElementById("guestMessage");

        if (user) {
            try {
                // Get user details from Firestore
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);
                
                const userName = userDoc.exists() ? userDoc.data().name : "User"; // Default to "User" if name not available
                guestMessage.textContent = userName; // Set the user's name

                // Get user's profile image
                const profileImageRef = ref(storage, `user/${user.uid}/profile.jpg`);
                const url = await getDownloadURL(profileImageRef);
                profileLogo.src = url; // Set user's profile image
            } catch (error) {
                console.error("Error getting profile data:", error);
                profileLogo.src = "/images/user-profile-icon.jpg"; // Fallback to default image
            }
        } else {
            // User is not logged in
            guestMessage.textContent = "Hello"; // Default message
            profileLogo.src = "/images/user-profile-icon.jpg"; // Default profile image
        }
    });

    // Logout functionality
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", async () => {
            await auth.signOut();
            console.log("User logged out.");
        });
    } else {
        console.warn("Logout button not found.");
    }
});
