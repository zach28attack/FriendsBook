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
function findFormTemplate(event, query) {
  return event.target.closest(".card").querySelector(query).content;
}
function getFormModal() {
  return document.querySelector(".form-modal");
}

// add event listener for edit friend
document.addEventListener("click", (e) => {
  // check if the clicked target matches the edit button
  if (e.target.matches("#trigger-modal")) {
    // grab the form inside of the template
    const formTemplate = findFormTemplate(e, "#edit_friend-form");
    const form = formTemplate.querySelector("#form");
    // if form isn't rendered but exists, render form modal
    if (form && !document.querySelector(".form-modal")) {
      // clone form and append to body
      document.body.appendChild(form.cloneNode(true));
      // insert HTML to top of form modal
      document.querySelector("#form").querySelector("header").innerHTML =
        "<h1>Edit Friend</h1>";
    }

    // close modal if user clicks off of form
    getFormModal().addEventListener("click", (e) => {
      if (e.target === document.querySelector(".form-modal").children[0]) {
        // remove duplicated form from body
        document.body.removeChild(getFormModal());
      }
    });

    // close modal if user presses escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (getFormModal()) {
          // remove duplicated form from body
          document.body.removeChild(getFormModal());
        }
      }
    });
  }
});

document
  .querySelector("#add_friend_trigger-modal")
  .addEventListener("click", () => {
    // display form modal
    const formTemplate = document.querySelector("#new_friend-form").content;
    const form = formTemplate.querySelector("#form");
    // if form isn't rendered but exists, render form modal
    if (form && !document.body.contains(getFormModal())) {
      document.body.appendChild(form.cloneNode(true));
      document.querySelector("#form").querySelector("header").innerHTML +=
        "<h1>Add Friend</h1>";

      // remove form modal
      getFormModal().addEventListener("click", (e) => {
        if (e.target === getFormModal()) {
          // remove duplicated form from body
          document.body.removeChild(getFormModal());
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          if (getFormModal()) {
            document.body.removeChild(getFormModal());
          }
        }
      });
    }
  });
