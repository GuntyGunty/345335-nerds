
var link = document.querySelector(".contact-link");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  login.focus();
});
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");

});
form.addEventListener("submit", function(event) {
  if (!login.value || !email.value) {
  event.preventDefault();
  console.log("лалала");
}
});
