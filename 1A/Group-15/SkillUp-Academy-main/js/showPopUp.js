function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function showAutoClosePopup(message, duration = 3000) {
    const popup = document.getElementById("autoClosePopup");
    const messageElement = document.getElementById("popupMessage");

    messageElement.textContent = message;
    popup.style.backgroundColor = getRandomColor();
    popup.style.display = "block";
    popup.style.opacity = "1";

    setTimeout(() => {
        popup.style.opacity = "0"; 
        setTimeout(() => {
            popup.style.display = "none"; 
        }, 500); 
    }, duration);
}
