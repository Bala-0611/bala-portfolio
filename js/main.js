// main.js - JavaScript Interactions

// Show alert when message form is submitted
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting me! I’ll get back to you soon ✉️");
      form.reset();
    });
  }
});