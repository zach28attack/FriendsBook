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

// select all form buttons and assign event listeners
const triggerModals = document.querySelectorAll("#trigger-modal");
triggerModals.forEach((triggerModal) => {
  triggerModal.addEventListener("click", function (event) {
    // grab the template from whuch button was clicked into doc. fragment
    const formTemplate = event.target
      .closest(".card")
      .querySelector("#edit-friend-form").content;

    // Get the form element from the fragment
    const form = formTemplate.querySelector("#form");
    console.log(form);

    // Add the form to the page
    document.body.appendChild(form);

    // TODOs \\

    // Add modal class to form and add page effects

    // remove modal if user clicks exit button or clicks off of modal

    // when form is submitted and the window resets ,
    // set window location at the location the user clicked the form
  });
});
