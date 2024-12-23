import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-storage.js";
import { firebaseInit } from "./firebase_initalization.js";

// Initialize Firebase Storage and Authentication
firebaseInit();
const storage = getStorage();
const auth = getAuth();

// Function to retrieve and display all images for a user
export function fetchAndDisplayAllImages() {
  // Check if the user is authenticated
  const user = auth.currentUser;
  if (!user) {
    console.error("User is not authenticated. Cannot retrieve images.");
    return;
  }

  // Define the storage reference path using the user's UID
  const userImagesRef = ref(storage, `user/${user.uid}/`);

  // Retrieve all files in the user's folder
  listAll(userImagesRef)
    .then((result) => {
      // Create an array of download URL promises
      const imagePromises = result.items.map((imageRef) => getDownloadURL(imageRef));

      // Wait for all download URLs to be retrieved
      return Promise.all(imagePromises);
    })
    .then((imageUrls) => {
      // Pass the array of URLs to the display function
      displayImages(imageUrls);
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
}

// Function to display multiple images
function displayImages(imageUrls) {
  const imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = ""; // Clear existing images

  imageUrls.forEach((url) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "User Image";
    img.style.width = "150px";
    img.style.margin = "10px";
    imageContainer.appendChild(img);
  });
}

// Attach fetchAndDisplayAllImages to the global window object for easy access
window.fetchAndDisplayAllImages = fetchAndDisplayAllImages;
