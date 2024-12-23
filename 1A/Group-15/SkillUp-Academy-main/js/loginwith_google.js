import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

import { showMsg } from "./universal_showMsgFn.js";
import { showAutoClosePopup } from "./showPopUp.js";



const provider = new GoogleAuthProvider();



document.getElementById("googlelogin").addEventListener("click", loginWithGoogle);

function loginWithGoogle() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            showAutoClosePopup("welcome User! you are successfully Login from Google");

            //  Go on home page after login 
            setTimeout(() => {
                window.location.href = "/html/index.html";
            }, 5000);

            // console.log(result);
        }).catch((error) => {
            console.log(error);
        });
}
