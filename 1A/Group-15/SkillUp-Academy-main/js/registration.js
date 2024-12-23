// Import Firestore functions
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { firebaseInit } from "./firebase_initalization.js";
// import { showMsg } from "./universal_showMsgFn.js";


firebaseInit();
const db = getFirestore();
const auth = getAuth();




export function registrationAllDetails(user, name, password) {
  var address = document.getElementById("signup-addr").value;
  var mob = document.getElementById("signup-mob").value;
  var course = document.getElementById("signup-course").value;

  setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    name: name, 
    email: user.email,
    address: address,
    phone: mob,
    course: course,
    password: password, 
  })
    .then(() => {
      console.log("User details added to Firestore.");
    })
    .catch((error) => {
      console.error("Error adding user details to Firestore: ", error);
    });
  return;
}

