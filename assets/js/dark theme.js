currentTime = new Date("2021-10-10T17:00");
var mainHeader = document.getElementsByClassName("main-header")[0];

if (18 >= currentTime.getHours() >= 6) {
   localStorage.setItem("theme", "light");
   updateTheme();
}
else {
   localStorage.setItem("theme", "dark");
   updateTheme();
}

function updateTheme() {
   if (localStorage.getItem("theme") == "dark") {
      mainHeader.classList.add("dark");
   }
   else {
      mainHeader.classList.remove("dark");
   }
}