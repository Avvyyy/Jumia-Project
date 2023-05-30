// Get the nav_button element
const navButton = document.querySelector(".nav_button");

// Get the nav_link_div element directly under it
const navLinkDiv = navButton.nextElementSibling;

// When the nav_button is clicked, show the nav_link_div
navButton.addEventListener("click", () => {
  navLinkDiv.style.display = "block";
});
