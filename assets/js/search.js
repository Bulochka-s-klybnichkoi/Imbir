var button = document.getElementsByClassName("header-search")[0];
var input = document.getElementsByClassName("header-field")[0];
var fieldOpened = false;

function searchButton() {
   input.style.transition = "opacity 250ms ease"
   input.style.opacity = 1;
   input.style.cursor = "text";
   button.removeEventListener("click", searchButton)
   button.addEventListener("click", searchButtonClose);
}

function searchButtonClose() {
   input.style.transition = "opacity 250ms ease"
   input.style.opacity = 0;
   input.style.cursor = "default";
   button.removeEventListener("click", searchButtonClose)
   button.AddEventListener("click", searchButton)
   
}
button.addEventListener("click", searchButton);