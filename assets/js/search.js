var button = document.getElementsByClassName("header-search")[0];
var input = document.getElementsByClassName("header-field")[0];
var fieldOpened = false;

function searchButton() {
   if (input.classList.contains("header-field-active")) {
      input.classList.remove("header-field-active")
   }
   else {
      input.classList.add("header-field-active")
   }
}

button.addEventListener("click", searchButton);