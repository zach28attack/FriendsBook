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
    const form = formTemplate.querySelector("#form");
    const formModal = document.querySelector(".form-modal");

    if (form && !document.body.contains(formModal)) {
      document.body.appendChild(form.cloneNode(true));
      form.querySelector("header").innerHTML += "<h1>Edit Friend</h1>";
    }
    // remove form modal
    document.querySelector(".form-modal").addEventListener("click", (event) => {
      const formModal = document.querySelector(".form-modal");
      if (formModal) {
        document.body.removeChild(formModal);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        const formModal = document.querySelector(".form-modal");
        if (formModal) {
          document.body.removeChild(formModal);
        }
      }
    });
  });
});

const addFriendTriggerModal = document.querySelector(
  "#add_friend_trigger-modal"
);
addFriendTriggerModal.addEventListener("click", () => {
  // display form modal
  const formTemplate = document.querySelector("#new_friend-form").content;
  const form = formTemplate.querySelector("#form");
  const formModal = document.querySelector(".form-modal");
  if (form && !document.body.contains(formModal)) {
    document.body.appendChild(form.cloneNode(true));
    document.querySelector("#form").querySelector("header").innerHTML +=
      "<h1>Add Friend</h1>";

    // remove form modal
    document.querySelector(".form-modal").addEventListener("click", (event) => {
      document.querySelector("#form").remove(form);
      console.log(event.target);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        const formModal = document.querySelector(".form-modal");
        if (formModal) {
          document.body.removeChild(formModal);
        }
      }
    });
  }
});
