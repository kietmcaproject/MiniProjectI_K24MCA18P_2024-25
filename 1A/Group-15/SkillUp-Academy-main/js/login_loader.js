// this is loader for login
const logoutModal = document.getElementById('logoutModal');
function openModal() {
    logoutModal.style.display = 'flex'; 
}
function closeModal() {
    logoutModal.style.display = 'none';
}
openModal();
document.getElementById('homeButton').addEventListener('click', closeModal);
document.getElementById('loginButton').addEventListener('click', closeModal);
