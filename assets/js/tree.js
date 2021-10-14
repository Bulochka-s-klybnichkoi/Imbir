var leaf2 = document.getElementsByClassName("leaf2-container")[0];
leaf2.addEventListener("click", leaf2Click);

function leaf2Click() {
   leaf2.style.transform = "translate(-168px, -283px) rotate(-53deg)";
   leaf2.style.transition = "transform 900ms ease"
}