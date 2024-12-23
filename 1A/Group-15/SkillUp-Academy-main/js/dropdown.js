function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");

    // Check if the dropdown is already open
    if (dropdown.classList.contains("show-dropdown")) {
        // If open, close it
        dropdown.classList.remove("show-dropdown");
    } else {
        // If closed, open it
        dropdown.classList.add("show-dropdown");
    }
}
