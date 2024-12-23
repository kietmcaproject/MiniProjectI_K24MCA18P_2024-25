import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { showMsg } from "./universal_showMsgFn.js";
import { firebaseInit } from "./firebase_initalization.js";
import { showAutoClosePopup } from "./showPopUp.js";

// initialise firebase
firebaseInit();
const db = getFirestore();

// Login 
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); 
// input email-password
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // authentication
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      //logged in
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userName = userDoc.exists() ? userDoc.data().name : null;

      //welcome message
      if (userName) {
        showAutoClosePopup("Welcome back, " + userName + "!",5000);
      } else {
        showAutoClosePopup("Welcome back!",4000);
      }

      // Go to home page
      setTimeout(() => {
        window.location.href = "/html/courses.html";
      }, 5000);
    })
    .catch((error) => {
      const errorMessage = error.message;
      showAutoClosePopup("Sorry, username or password is not correct!\n Please try again.");
      document.getElementById('login-email').value = "";
      document.getElementById('login-password').value = ""; 
    });
});
