// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

("use strict");

// NAVBAR JS
// dropdown functionality

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownToggle.addEventListener("click", () => {
  dropdownContent.classList.toggle("hidden");
  dropdownContent.classList.toggle("show");
});
