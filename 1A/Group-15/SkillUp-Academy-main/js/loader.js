var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  // Set a delay (e.g., 2 seconds) before hiding the loader
  setTimeout(function() {
    loader.style.display = "none";
  }, 1500); // 2000 milliseconds = 2 seconds
});