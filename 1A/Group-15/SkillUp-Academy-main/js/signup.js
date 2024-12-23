import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js"; 
import { showMsg } from "./universal_showMsgFn.js"; 
import { firebaseInit } from "./firebase_initalization.js"; 
import { registrationAllDetails } from "./Registration.js";
import { showAutoClosePopup } from "./showPopUp.js";

// Initialize Firebase
firebaseInit();

const auth = getAuth();

// Check if a user is already registered
// auth.onAuthStateChanged((user) => {
//   if (user) {
//     showMsg("You are already registered. Redirecting to the home screen...");
//     setTimeout(() => {
//       window.location.href = "index.html"; // Redirect to the home screen
//     }, 3000);
//   }
// });

function isValidPassword(password) {
  const minLength = 6;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  return (
    password.length >= minLength &&
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    numberRegex.test(password) &&
    specialCharRegex.test(password)
  );
}

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function (e) {
  e.preventDefault();

  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;
  var password1 = document.getElementById("signup-password1").value;
  var name = document.getElementById("signup-name").value;

  if (password !== password1) {
    showAutoClosePopup("Your Passwords do not match!");
    return;
  }

  if (!isValidPassword(password)) {
    showAutoClosePopup("Password does not meet the criteria.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      
      // Send verification email
      sendEmailVerification(user).then(() => {
        showAutoClosePopup("A verification email has been sent. Please verify your email to proceed.");
        showVerificationPopup();

        // Check email verification 
        const checkEmailVerification = setInterval(() => {
          user.reload()
            .then(() => {
              if (user.emailVerified) {
                clearInterval(checkEmailVerification);
                closeVerificationPopup();

                registrationAllDetails(user, name, password);

                showAutoClosePopup("Email verified successfully! Registration complete.");
                
                // // Show the image upload section
                // document.getElementById("imageUploadSection").style.display = "block"; // Show the image upload section
                // document.getElementById("uploadImageButton").style.display = "block"; // Show upload button
                // document.getElementById("displayImage").style.display = "block"; // Show the display image element
              }
            })
            .catch((error) => {
              console.error("Error checking verification status:", error);
            });
        }, 5000);
      });
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        showAutoClosePopup("This email is already in use. Please verify or use a different email.");
      } else {
        console.error("Error creating user:", error.message);
        showAutoClosePopup("Error: " + error.message);
      }
    });
});

// Function blocking popup
function showVerificationPopup() {
  const popup = document.createElement("div");
  popup.id = "verificationPopup";
  popup.style.position = "fixed";
  popup.style.top = "0";
  popup.style.left = "0";
  popup.style.width = "100%";
  popup.style.height = "100%";
  popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  popup.style.color = "white";
  popup.style.display = "flex";
  popup.style.flexDirection = "column";
  popup.style.justifyContent = "center";
  popup.style.alignItems = "center";
  popup.style.zIndex = "1000";
  popup.innerHTML = `
    <h2>Please Verify Your Email</h2>
    <p>We have sent a verification email to your inbox. Please verify your email to complete registration.</p>
  `;
  document.body.appendChild(popup);
}

function closeVerificationPopup() {
  const popup = document.getElementById("verificationPopup");
  if (popup) {
    popup.remove();
  }
}
