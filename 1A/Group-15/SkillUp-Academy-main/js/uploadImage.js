import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";  
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-storage.js";
import { firebaseInit } from "./firebase_initalization.js";
import { showMsg } from "./universal_showMsgFn.js";
import { showAutoClosePopup } from "./showPopUp.js";

// Initialize Firebase & Authentication
firebaseInit();
const storage = getStorage();
const auth = getAuth();

let detailsVisible = false; 


function toggleDetails() {
  const additionalDetails = document.getElementById("additionalDetails");
  const moreDetailsText = document.getElementById("moreDetailsText");
  const toggleButton = document.getElementById("toggleDetailsButton");

  detailsVisible = !detailsVisible;

  if (detailsVisible) {
    additionalDetails.style.display = "block";
    moreDetailsText.style.display = "block";
    toggleButton.textContent = "Hide Update";
  } else {
    moreDetailsText.style.display = "none";
    toggleButton.textContent = "Show More Update";
  }
}

export function uploadImage(event) {
  const file = event.target.files[0];

  if (!file) {
    console.log("No file selected");
    return;
  }

  // Check user is authenticated
  const user = auth.currentUser;
  if (!user) {
    showAutoClosePopup("User is not authenticated. Cannot upload image.");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 4000);
    return;
  }

  const storageRef = ref(storage, `user/${user.uid}/profile.jpg`);

  getDownloadURL(storageRef)
    .then(() => {
      deleteObject(storageRef)
        .then(() => {
          console.log("Previous image deleted successfully");
          uploadNewImage(storageRef, file); 
        })
        .catch((error) => {
          console.error("Error deleting previous image:", error);
        });
    })
    .catch((error) => {
      if (error.code === "storage/object-not-found") {
        uploadNewImage(storageRef, file);
      } else {
        console.error("Error checking image existence:", error);
      }
    });
}

function uploadNewImage(storageRef, file) {
  const uploadTask = uploadBytesResumable(storageRef, file);

  //progress bar
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  progressBar.style.display = "block";
  progressBar.value = 0;
  progressText.style.display = "block";
  progressText.textContent = "Uploading... 0%";

  // progress increment
  let simulatedProgress = 0;
  const interval = setInterval(() => {
    simulatedProgress += 10;
    progressBar.value = simulatedProgress;
    progressText.textContent = `Uploading... ${simulatedProgress}%`;
    if (simulatedProgress >= 100) clearInterval(interval);
  }, 200);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
    },
    (error) => {
      console.error("Error uploading file:", error);
      progressBar.style.display = "none";
      progressText.style.display = "none";
      clearInterval(interval);
    },
    () => {
      progressBar.style.display = "none";
      progressText.style.display = "none";

      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        displayImage(downloadURL);
        showAutoClosePopup("Image updated successfully!");

        const userWantsToUploadMore = confirm("Do you want to edit more details? if yes press OK",5000);
        if (userWantsToUploadMore) {
          document.getElementById("updateForm").style.display = "block"; 
        } else {
          window.location.href = "index.html"; 
        }
      });
    }
  );
}

function displayImage(imageUrl) {
  const displayImageElement = document.getElementById("displayImage");
  displayImageElement.src = imageUrl;
  displayImageElement.style.display = "block";
}

// Attach uploadImage 
window.uploadImage = uploadImage;
window.toggleDetails = toggleDetails;
