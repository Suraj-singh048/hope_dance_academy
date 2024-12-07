// Function to toggle the mobile menu visibility
function toggleNavbar() {
    var menu = document.getElementById("mobileMenu");
    // Toggle the display of the menu
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Close the mobile menu if the user clicks outside of it (or the hamburger button)
document.addEventListener("click", function(event) {
    var menu = document.getElementById("mobileMenu");
    var hamburger = document.querySelector(".hamburger"); // Hamburger button
    var navbar = document.querySelector(".navbar_mobile"); // Navbar container

    // Check if the click is outside the menu and the hamburger button
    if (menu.style.display === "block" && !menu.contains(event.target) && !hamburger.contains(event.target) && !navbar.contains(event.target)) {
        menu.style.display = "none"; // Close the menu
    }
});
