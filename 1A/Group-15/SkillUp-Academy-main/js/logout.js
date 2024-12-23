// // Variable to track user visits
// let userVisitCount = sessionStorage.getItem('userVisitCount') || 0;
// userVisitCount = Number(userVisitCount) + 1;
// sessionStorage.setItem('userVisitCount', userVisitCount);

// // Get message element
// const messageElement = document.getElementById('message');

// // Function to set colorful text
// function setColorfulText(text) {
//     return Array.from(text).map((char) => {
//         const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
//         return `<span style="color: ${color};">${char}</span>`;
//     }).join('');
// }

// // Determine the message based on visit count
// // if (userVisitCount === 1) {
//     // messageElement.innerHTML = setColorfulText('Welcome');
// // } else {
//     // }
//     // if(userVisitCount>1)
//         messageElement.innerHTML = setColorfulText('Thank You');

// // Modal elements
// const modal = document.getElementById('logoutModal');
// const homeButton = document.getElementById('homeButton');
// const loginButton = document.getElementById('loginButton');

// // Show the modal when the user clicks logout
// // Button actions
// homeButton.onclick = function() {
//     modal.style.display = 'none'; // Close the modal
//     window.location.href = 'index.html'; // Navigate to home page
// };

// loginButton.onclick = function() {
//     modal.style.display = 'none'; // Close the modal
//     window.location.href = 'login.html'; // Navigate to login page
// };

// // Close the modal if user clicks outside of the modal content
// window.onclick = function(event) {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// };
