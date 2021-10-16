var arrowL = document.getElementsByClassName("main-section3-slider-arrows-left")[0];
var arrowR = document.getElementsByClassName("main-section3-slider-arrows-right")[0];

arrowR.style.marginLeft = picwidth - arrowL.style.width - arrowR.style.width - arrowL.style.marginleft - arrowR.style.marginright;

var picwidth = 1200;
var piclength = 0;
var canvas = document.getElementsByClassName("main-section3-slider-canvas")[0];
var img = document.getElementsByClassName("main-section3-slider-canvas-img");
var picsCount = img.length;
var maxpiclength = picwidth * (picsCount - 1);

arrowL.addEventListener("click", previous);
arrowR.addEventListener("click", next);

// arrowR.style.marginLeft = `${picwidth}px - ${arrowL.style.width - arrowR.style.width - arrowL.style.marginLeft - arrowR.style.marginRight}`;

function next() {
   if (piclength === -maxpiclength) {
      piclength = 0;
   }
   else {
      piclength = piclength - picwidth;
   }
   canvas.style.transform = `translateX(calc(${piclength} / 1920 * 100vw))`;
   canvas.style.transition = "transform 800ms ease"
   if (activeball == 1) {
      activeball = 2;
   }
   else if (activeball == 2) {
      activeball = 3;
   }
   else if (activeball == 3) {
      activeball = 1;
   }
   updateBalls()
   updateHeader()
}

function previous() {
   if (piclength === 0) {
      piclength = -maxpiclength;
   }
   else {
      piclength = piclength + picwidth;
   }
   canvas.style.transform = `translateX(calc(${piclength} / 1920 * 100vw))`;
   canvas.style.transition = "transform 800ms ease"
   if (activeball == 3) {
      activeball = 2;
   }
   else if (activeball == 2) {
      activeball = 1;
   }
   else if (activeball == 1) {
      activeball = 3;
   }
   updateBalls()
   updateHeader()
}

// Balls

var ball1 = document.getElementsByClassName("main-section3-slider-balls-item")[0];
var ball2 = document.getElementsByClassName("main-section3-slider-balls-item")[1];
var ball3 = document.getElementsByClassName("main-section3-slider-balls-item")[2];

function updateBalls() {
   if (activeball == 1) {
      passiveBalls()
      ball1.classList.add("active-ball")
   }
   else if (activeball == 2) {
      passiveBalls()
      ball2.classList.add("active-ball")
   }
   else if (activeball == 3) {
      passiveBalls()
      ball3.classList.add("active-ball")
   }
}

function passiveBalls() {
   ball1.classList.remove("active-ball");
   ball2.classList.remove("active-ball");
   ball3.classList.remove("active-ball");
}
 
ball1.classList.add("active-ball");
var activeball = 1;

// Header

var header = document.querySelector(".main-section3-header");
var slider = document.querySelector(".main-section3-slider");

function updateHeader() {
   if (activeball == 1) {
      header.classList.add("main-section3-header-transition");
      console.log("fak you");
      header.textContent = "Банановые сырники";
      header.classList.remove("main-section3-header-transition");
      
   }
   else if (activeball == 2) {
      header.classList.add("main-section3-header-transition");
      header.textContent = "Манная каша";
      header.classList.remove("main-section3-header-transition");
   }
   else if (activeball == 3) {
      header.classList.add("main-section3-header-transition");
      header.textContent = "хрень"
      header.classList.remove("main-section3-header-transition");
   }
}

slider.addEventListener("mouseenter", headerOpen)
slider.addEventListener("mouseleave", headerClose)

function headerOpen() {
   header.classList.add("main-section3-header-hover")
}

function headerClose() {
   header.classList.remove("main-section3-header-hover")
}