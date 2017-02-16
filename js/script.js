
var link = document.querySelector(".contact-link");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storage) {
         login.value = storage;
         password.focus();
       } else {
         login.focus();
       }
});
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");

});
form.addEventListener("submit", function(event) {
  if (!login.value || !email.value) {
  event.preventDefault();
  console.log("лалала");
} else {
  localStorage.setItem("login", login.value);
}
});
