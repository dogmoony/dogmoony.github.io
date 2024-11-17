// Toggle Menu Panel Visibility
const menuToggle = document.getElementById("menu-toggle");
const menuPanel = document.getElementById("menu-panel");

menuToggle.addEventListener("click", () => {
  menuPanel.classList.toggle("active"); // Add or remove 'active' class to slide panel
});

// Function to switch pages
function switchPage(pageId, event) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll(".menu-button");
  buttons.forEach((button) => button.classList.remove("active"));

  // Show the selected page
  document.getElementById(pageId).classList.add("active");

  // Add active class to the clicked button
  event.target.classList.add("active");
  menuPanel.classList.toggle("active");
}
