var arrowL = document.getElementsByClassName("main-section3-arrows-left")[0];
var arrowR = document.getElementsByClassName("main-section3-arrows-right")[0];

var maxpiclength = 2000;
var picwidth = 1000;
var piclength = 0;
var canvas = document.getElementsByClassName("main-section3-slider-canvas")[0];


arrowL.addEventListener("click", previous);
arrowR.addEventListener("click", next);

function next() {
   if (piclength === -maxpiclength) {
      piclength = 0;
   }
   else {
      piclength = piclength - picwidth;
   }
   canvas.style.transform = `translateX(${piclength}px)`;
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
}

function previous() {
   if (piclength === 0) {
      piclength = -maxpiclength;
   }
   else {
      piclength = piclength + picwidth;
   }
   canvas.style.transform = `translateX(${piclength}px)`;
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
}

// balls

var ball1 = document.getElementsByClassName("main-section3-slider-canvas-img")[0];
var ball2 = document.getElementsByClassName("main-section3-slider-canvas-img")[1];
var ball3 = document.getElementsByClassName("main-section3-slider-canvas-img")[2];
var allBalls = document.getElementsByClassName("main-section3-slider-canvas-img");

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