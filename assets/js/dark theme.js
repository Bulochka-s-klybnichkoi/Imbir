var currentTime = new Date("2021-10-10T20:00");
var mainHeader = document.getElementsByClassName("main-header")[0];
var headerLogo = document.getElementsByClassName("header-logo")[0];
var links = document.getElementsByClassName("header-nav-pages-item-link");

var section1 = document.getElementsByClassName("main-section1")[0];
var section1Header = document.getElementsByClassName("main-section1-header")[0];
var section1Descriptions = document.getElementsByClassName("main-section1-description-item");

var section2 = document.getElementsByClassName("main-section2")[0];
var section2Header = document.getElementsByClassName("main-section2-header")[0];


updateTheme();

if (currentTime.getHours() <= 18 && currentTime.getHours() >= 6) {
   localStorage.setItem("theme", "light");
   updateTheme();
}
else {
   localStorage.setItem("theme", "dark");
   updateTheme();
}

function updateTheme() {
   if (localStorage.getItem("theme") == "dark") {
      // header
      mainHeader.classList.add("dark");
      headerLogo.src = "assets/img/header/logo-dark.png";
      links[0].classList.add("dark");
      links[links.length - (links.length - 1)].classList.add("dark");
      links[links.length - (links.length - 2)].classList.add("dark");
      links[links.length - (links.length - 3)].classList.add("dark");
      links[links.length - (links.length - 4)].classList.add("dark");
      links[links.length - (links.length - 5)].classList.add("dark");
      searchButton.src = "assets/img/header/search-dark.svg";
      // section 1
      section1.classList.add("dark");
      section1Header.classList.add("dark");
      section1Descriptions[0].classList.add("dark");
      section1Descriptions[section1Descriptions.length - (section1Descriptions.length - 1)].classList.add("dark");
      section1Descriptions[section1Descriptions.length - (section1Descriptions.length - 2)].classList.add("dark");
      // section 2
      section2.classList.add("dark");
      section2Header.classList.add("dark");
   }
   else {
      mainHeader.classList.remove("dark");
   }
}

// var toggleButton = document.getElementsByClassName("panel-theme-toggle")[0];
// var autoButton = document.getElementsByClassName("panel-theme-auto")[0];

// localStorage.setItem("themeMode", "auto");

// toggleButton.addEventListener("click", "changeTo");