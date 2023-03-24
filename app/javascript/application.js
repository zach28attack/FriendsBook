// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

("use strict");

// NAVBAR
// dropdown functionality

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownToggle.addEventListener("click", () => {
  dropdownContent.classList.toggle("hidden");
  dropdownContent.classList.toggle("show");
});

//FORM MODALS
//find form template
function findFormTemplate(event, query) {
  return event.target.closest(".card").querySelector(query).content;
}

// select all form buttons and assign event listeners
const triggerModals = document.querySelectorAll("#trigger-modal");

triggerModals.forEach((triggerModal) => {
  triggerModal.addEventListener("click", (event) => {
    const formTemplate = findFormTemplate(event, "#edit_friend-form");
    // Get the form element from the fragment
    const form = formTemplate.querySelector("#form");
    const formModal = document.querySelector(".form-modal");
    if (form && !document.body.contains(formModal)) {
      document.body.appendChild(form);
      form.querySelector("header").innerHTML += "<h1>Edit Friend</h1>";
    }
  });
});

const addFriendTriggerModal = document.querySelector(
  "#add_friend_trigger-modal"
);
addFriendTriggerModal.addEventListener("click", () => {
  const formTemplate = document.querySelector("#new_friend-form").content;
  // get form element from fragment
  const form = formTemplate.querySelector("#form");
  const formModal = document.querySelector(".form-modal");
  if (form && !document.body.contains(formModal)) {
    document.body.appendChild(form);
    form.querySelector("header").innerHTML += "<h1>Add Friend</h1>";
  }

  // TODOs \\

  // Add modal class to form and add page effects w CSS

  // remove modal if user clicks exit button or clicks off of modal

  // when form is submitted and the window resets ,
  // set window location at the location the user clicked the form
});
