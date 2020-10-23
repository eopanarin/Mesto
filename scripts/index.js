const editButton = document.querySelector(".profile__edit-btn");
const closeButton = document.querySelector(".popup__close");
const submitButton = document.querySelector(".popup__submit");

const popup = document.querySelector(".popup");
const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_job");
const userName = document.querySelector(".profile__name");
const userJob = document.querySelector(".profile__about");

function togglePopup() {
  popup.classList.toggle("popup_opened");
}

function eventPopup(evt) {
  if (!popup.classList.contains("popup_opened")) {
    nameInput.value = userName.textContent;
    jobInput.value == userJob.textContent;
    togglePopup();
  }
}

function submitPopup(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  togglePopup();
}

editButton.addEventListener("click", eventPopup);
closeButton.addEventListener("click", togglePopup);
formElement.addEventListener("submit", submitPopup);
