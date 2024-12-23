import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { firebaseInit } from "./firebase_initalization.js";
import { showMsg } from "./universal_showMsgFn.js";
import { showAutoClosePopup } from "./showPopUp.js";

// Initialize Firestore and Authentication
firebaseInit();
const db = getFirestore();
const auth = getAuth();

const updateForm = document.getElementById("updateForm");

// Check if user is authenticated
onAuthStateChanged(auth, (user) => {
  if (user) {
    updateForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!user) {
        showAutoClosePopup("No user is signed in.");
        return;
      }

      const updatedName = document.getElementById("update-name").value;
      const updatedAddress = document.getElementById("update-addr").value;
      const updatedMob = document.getElementById("update-mob").value;
      const updatedCourse = document.getElementById("update-course").value;

      const updatedData = {};
      if (updatedName) updatedData.name = updatedName;
      if (updatedAddress) updatedData.address = updatedAddress;
      if (updatedMob) updatedData.phone = updatedMob;
      if (updatedCourse) updatedData.course = updatedCourse;

      const userRef = doc(db, 'users', user.uid);

      setDoc(userRef, updatedData, { merge: true })
        .then(() => {
          showAutoClosePopup("User profile updated successfully!");
          setTimeout(() => {
            window.location.href = "/html/index.html";
          }, 5000);
        })
        .catch((error) => {
          console.error("Error updating user profile:", error);
          showAutoClosePopup("Error updating profile. Please try again.");
        });
    });
  } else {
    showAutoClosePopup("Please log in to update your profile.");
    setTimeout(() => {
      window.location.href="login.html"
    }, 4000);
  }
});
