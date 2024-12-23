import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js"; 
import { doc, getDoc, deleteDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { firebaseInit } from "./firebase_initalization.js";

// Initialize Firebase
firebaseInit();
const db = getFirestore();
const auth = getAuth();

// Defining special user ID
const specialUserId = "S4XcnlLbmYUR4um91HQx910qEtC3"; 

async function getSpecialUserName() {
    const specialUserDoc = await getDoc(doc(db, "users", specialUserId));
    return specialUserDoc.exists() ? specialUserDoc.data().name : "Special User";
}

async function getAllUsersDetails(currentUser, specialUserName) {
    document.getElementById("table").style.display = 'table';

    try {
        const usersCollection = collection(db, 'users');
        const snapshot = await getDocs(usersCollection);

        const tableBody = document.getElementById("tableBody");
        tableBody.innerHTML = ''; 
        let serialNo = 1;

        snapshot.forEach((doc) => {
            const userData = doc.data();
            const userRow = document.createElement("tr");

            const checkboxCell = document.createElement("td");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            if (doc.id === specialUserId) {
                checkbox.addEventListener("click", (e) => {
                    if (currentUser.uid === specialUserId) {
                        e.preventDefault();
                        alert(`You can't select ${specialUserName} for deletion.`);
                    }
                });
            }

            checkboxCell.appendChild(checkbox); 

            // Create cells for user details
            const serialCell = document.createElement("td");
            const idCell = document.createElement("td");
            const nameCell = document.createElement("td");
            const addressCell = document.createElement("td");
            const contactCell = document.createElement("td");
            const emailCell = document.createElement("td");
            const courseCell = document.createElement("td");

            // Fill the cells with data
            serialCell.textContent = serialNo++; // Serial number
            idCell.textContent = doc.id; // Document ID
            nameCell.textContent = userData.name || "N/A"; // User name
            addressCell.textContent = userData.address || "N/A"; // User address
            contactCell.textContent = userData.phone || "N/A"; // User contact number
            emailCell.textContent = userData.email || "N/A"; // User email
            courseCell.textContent = userData.course || "N/A"; // User course

            // Append cells to the row
            userRow.appendChild(checkboxCell); // Append checkbox cell
            userRow.appendChild(serialCell);
            userRow.appendChild(idCell);
            userRow.appendChild(nameCell);
            userRow.appendChild(addressCell);
            userRow.appendChild(courseCell);
            userRow.appendChild(contactCell);
            userRow.appendChild(emailCell);
            tableBody.appendChild(userRow); // Append the row to the table body
        });

    } catch (error) {
        console.error("Error fetching user details:", error);
    }
}

// Check authentication state before fetching user details
onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is authenticated
        if (user.uid === specialUserId) {
            const specialUserName = await getSpecialUserName();
            console.log("Special user authenticated. Displaying all user details.");
            getAllUsersDetails(user, specialUserName);
        } else {
            console.error("User does not have permission to view user details.");
        }
    } else {
        // User is not authenticated
        console.error("User is not authenticated.");
    }
});

// Function to handle delete button click
document.getElementById("delete-btn").onclick = async function () {
    const checkboxes = document.querySelectorAll("tbody input[type='checkbox']:checked");

    if (checkboxes.length === 0) {
        alert("Please select at least one user to delete.");
        return;
    }

    const userIdsToDelete = [];
    checkboxes.forEach(checkbox => {
        const row = checkbox.closest("tr");
        const userId = row.children[2].textContent; // Assuming User ID is in the third cell

        // Ensure the special user ID is not added to the deletion list
        if (userId !== specialUserId) {
            userIdsToDelete.push(userId);
        }
    });

    const confirmation = confirm("Are you sure you want to delete the selected user(s)? This action cannot be undone.");
    if (confirmation) {
        try {
            for (const userId of userIdsToDelete) {
                await deleteDoc(doc(db, 'users', userId)); // Delete user from Firestore
                console.log(`User ${userId} deleted successfully.`);
            }
            alert("Selected user(s) deleted successfully.");
            getAllUsersDetails(user, await getSpecialUserName()); // Refresh the table after deletion
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Error deleting user(s): " + error.message);
        }
    }
};

// Add event listener to toggle delete button visibility
const tableBody = document.getElementById("tableBody");
tableBody.addEventListener("change", function () {
    const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");
    const deleteBtn = document.getElementById("delete-btn");
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked && !checkbox.disabled);

    deleteBtn.style.display = isChecked ? 'block' : 'none'; // Show button if any non-disabled checkbox is checked
});
