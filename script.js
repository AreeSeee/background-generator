let color1= document.getElementById("color1");
let color2= document.getElementById("color2");
let gradient= document.getElementById("gradient");
let css=document.querySelector("h3");


function setGradient(){
	gradient.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

css.textContent=gradient.style.background + ";";



}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);