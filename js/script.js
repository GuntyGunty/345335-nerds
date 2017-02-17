
var link = document.querySelector(".contact-button");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");

});
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");

});
