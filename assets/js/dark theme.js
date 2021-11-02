var currentTime = new Date("10-10-20:00");
var body = document.body;

var mainHeader = document.getElementsByClassName("main-header")[0];
var headerLogo = document.getElementsByClassName("header-logo")[0];
var links = [...document.getElementsByClassName("header-nav-pages-item-link")];

var panel = document.getElementsByClassName("panel")[0];
var panelIcon = document.getElementsByClassName("panel-icon")[0];

var section1 = document.getElementsByClassName("main-section1")[0];
var section1Header = document.getElementsByClassName("main-section1-header")[0];
var section1Image = document.getElementsByClassName("main-section1-img-wrapper-item")[0];
var section1ImageHeader = document.getElementsByClassName("main-section1-img-wrapper-text")[0];
var section1Descriptions = [...document.getElementsByClassName("main-section1-description-item")];

var section2 = document.getElementsByClassName("main-section2")[0];
var section2Header = document.getElementsByClassName("main-section2-header")[0];
var section2Buttons = [...document.getElementsByClassName("main-section2-buttons-item-button")];

var section3 = document.getElementsByClassName("main-section3")[0];
var section3SliderImgs = [...document.getElementsByClassName("main-section3-slider-canvas-img")];
var section3Slider = document.getElementsByClassName("main-section3-slider")[0];

var footer = document.getElementsByClassName("footer")[0];
var footerTitle = document.getElementsByClassName("footer-title-header")[0];
var footerIcon = document.getElementsByClassName("footer-title-icon")[0];
var footerLinks = [...document.getElementsByClassName("footer-links-item-link")];
var comma = document.getElementsByClassName("comma")[0];


var root = document.documentElement.style;


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
      body.classList.add("dark");
      // header
      mainHeader.classList.add("dark");
      headerLogo.src = "assets/img/header/logo-dark.png";
      links.forEach(setDarkToLinks);
      function setDarkToLinks(link) {
         link.classList.add("dark");
      }
      // links[links.length - (links.length - 1)].classList.add("dark");
      // links[links.length - (links.length - 2)].classList.add("dark");
      // links[links.length - (links.length - 3)].classList.add("dark");
      // links[links.length - (links.length - 4)].classList.add("dark");
      // links[links.length - (links.length - 5)].classList.add("dark");
      searchButton.src = "assets/img/header/search-dark.svg";
      searchInput.classList.add("dark");
      // panel
      root.setProperty("--panelBackgroundColor", "var(--brownOrangeDarkColor)")
      root.setProperty("--panelBorderColor", "var(--orangeBrownColor)")
      root.setProperty("--panelIconsBackgroundColor", "#533b1f")
      root.setProperty("--panelIconsBackgroundHoverColor", "var(--brownDarkColor)")
      root.setProperty("--panelIconsBorderColor", "var(--orangeBrownColor)");
      // section 1
      section1.classList.add("dark");
      section1Header.classList.add("dark");
      section1Image.src = "assets/img/section1/img dark.png"
      section1ImageHeader.classList.add("dark");
      section1Descriptions.forEach(setDarkToDescriptions)
      function setDarkToDescriptions(description) {
         description.classList.add("dark");
      }
      // section1Descriptions[0].classList.add("dark");
      // section1Descriptions[section1Descriptions.length - (section1Descriptions.length - 1)].classList.add("dark");
      // section1Descriptions[section1Descriptions.length - (section1Descriptions.length - 2)].classList.add("dark");
      // section 2
      section2.classList.add("dark");
      section2Header.classList.add("dark");
      section2Buttons.forEach(setDarkToButtons);
      function setDarkToButtons (button) {
         button.classList.add("dark");
      }
      // section 3
      section3.classList.add("dark");
      section3Slider.classList.add("dark");
      section3Header.classList.add("dark");
      for (var h = 0; h < 3; h++) {
         section3SliderImgs[h].src = "assets/img/section3/slider" + h + " dark.jpg";
      }
      arrowL.src = "assets/img/section3/arrow dark.svg";
      arrowR.src = "assets/img/section3/arrow dark.svg";
      balls.forEach(setDarkToBalls);
      function setDarkToBalls(ball) {
         ball.classList.add("dark");
      }

      // footer
      root.setProperty("--footerBackgroundColor", "#301d0bc5");
      footerTitle.classList.add("dark");
      footerIcon.src = "assets/img/footer/icon dark.svg";
      footerLinks.forEach(setDarkToFooterLinks);
      function setDarkToFooterLinks(link) {
         link.classList.add("dark");
      }
      comma.classList.add("dark");
   }
   else {
      body.classList.remove("dark");
      // header
      mainHeader.classList.remove("dark");
      headerLogo.src = "assets/img/header/logo-light.png";
      links.forEach(setDarkToLinks);
      function setDarkToLinks(link) {
         link.classList.remove("dark");
      }
      // links[links.length - (links.length - 1)].classList.remove("dark");
      // links[links.length - (links.length - 2)].classList.remove("dark");
      // links[links.length - (links.length - 3)].classList.remove("dark");
      // links[links.length - (links.length - 4)].classList.remove("dark");
      // links[links.length - (links.length - 5)].classList.remove("dark");
      searchButton.src = "assets/img/header/search-light.svg";
      searchInput.classList.remove("dark");
      // panel
      root.setProperty("--panelBackgroundColor", "white");
      root.setProperty("--panelBorderColor", "#00000000")
      root.setProperty("--panelIconsBackgroundColor", "#00000000");
      root.setProperty("--panelIconsBackgroundHoverColor", "var(--lightBrownColor)")
      root.setProperty("--panelIconsBorderColor", "var(--lightBrownColor)");
      // section 1
      section1.classList.remove("dark");
      section1Header.classList.remove("dark");
      section1Image.src = "assets/img/section1/img.png";
      section1ImageHeader.classList.remove("dark");
      section1Descriptions.forEach(setDarkToDescriptions);
      function setDarkToDescriptions(description) {
         description.classList.remove("dark");
      }
      // section1Descriptions[0].classList.remove("dark");
      // section1Descriptions[section1Descriptions.length - (section1Descriptions.length - 1)].classList.remove("dark");
      // section1Descriptions[section1Descriptions.length - (section1Descriptions.length - 2)].classList.remove("dark");
      // section 2
      section2.classList.remove("dark");
      section2Header.classList.remove("dark");
      section2Buttons.forEach(setDarkToButtons);
      function setDarkToButtons (button) {
         button.classList.remove("dark");
      }
      // section 3
      section3.classList.remove("dark");
      section3Slider.classList.remove("dark");
      section3Header.classList.remove("dark");
      for (var h = 0; h < 3; h++) {
         section3SliderImgs[h].src = "assets/img/section3/slider" + h + ".jpg";
      }
      arrowL.src = "assets/img/section3/arrow.svg";
      arrowR.src = "assets/img/section3/arrow.svg";
      balls.forEach(setDarkToBalls);
      function setDarkToBalls(ball) {
         ball.classList.remove("dark");
      }

      // footer
      root.setProperty("--footerBackgroundColor", "#00000093");
      footerTitle.classList.remove("dark");
      footerIcon.src = "assets/img/footer/icon.svg";
      footerLinks.forEach(setDarkToFooterLinks);
      function setDarkToFooterLinks(link) {
         link.classList.remove("dark");
      }
      comma.classList.remove("dark");
   }
}

var toggleButton = document.getElementsByClassName("panel-theme-toggle")[0];
var autoButton = document.getElementsByClassName("panel-theme-auto")[0];

// check if its first time entering the website
if (localStorage.getItem("themeMode") == null) {
   // the default setup is auto
   localStorage.setItem("themeMode", "auto");
   // change toggle button's color (changing source)
   toggleButton.src = "assets/img/panel/toggle deactivated.svg";
   // create variable "toggleButtonDeactivated" in local storage
   localStorage.setItem("toggleButtonDeactivated", "true")
}

// if its auto mode
if (localStorage.getItem("themeMode") == "auto") {
   // change toggle button's color (changing source)
   toggleButton.src = "assets/img/panel/toggle deactivated.svg";
   // change variable "toggleButtonDeactivated" in local storage
   localStorage.setItem("toggleButtonDeactivated", "true")
}

// if its custom mode
if (localStorage.getItem("themeMode") == "custom") {
   // change toggle button's color (changing source)
   toggleButton.src = "assets/img/panel/toggle.svg";
   // change variable "toggleButtonDeactivated" in local storage
   localStorage.setItem("toggleButtonDeactivated", "true")
}

// add event listener on auto button
autoButton.addEventListener("click", autoButtonScript);

// script for the auto button
function autoButtonScript() {
   if (localStorage.getItem("themeMode") == "auto") {
      localStorage.setItem("themeMode", "custom");
   }
   if (localStorage.getItem("themeMode") == "custom") {
      localStorage.setItem("themeMode", "auto")
      toggleButton.src = "assets/img/panel/toggle deactivated.svg";
      
   }
   location.reload();
}
// toggleButton.addEventListener("click", "changeTo");