// import firestore and fire base
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-storage.js";
import { firebaseInit } from "./firebase_initalization.js";

firebaseInit();
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

// Check authentication
onAuthStateChanged(auth, async (user) => {
  const userDetailElement = document.getElementById("userDetail");
  const imageContainer = document.getElementById("imageContainer");

  if (user) {
    try {
      const userImagesRef = ref(storage, `user/${user.uid}/`);

      const result = await listAll(userImagesRef);
      const imagePromises = result.items.map((imageRef) => getDownloadURL(imageRef));

      const imageUrls = await Promise.all(imagePromises);
      displayImages(imageUrls);

      const userRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        userDetailElement.innerHTML = `
          <h3>Email: ${userData.email}</h3>
          <h3>Name: ${userData.name}</h3>
          <h3>Address: ${userData.address}</h3>
          <h3>Phone: ${userData.phone}</h3>
          <h3>Course: ${userData.course}</h3>
        `;
      } else {
        console.log("User document not found!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    console.log("No user is signed in.");
    userDetailElement.innerHTML = `<h3>Please log in to view your profile.</h3>`;
    setTimeout(() => {
      window.location.href = "/html/login.html";
    }, 3000);
  }
});

//display images
function displayImages(imageUrls) {
  const imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = "";

  imageUrls.forEach((url) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "User Image";
    img.style.width = "150px";
    img.style.margin = "10px";
    imageContainer.appendChild(img);
  });
}
