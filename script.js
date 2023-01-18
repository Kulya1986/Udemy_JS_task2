var inputColor1 = document.querySelector("#color1");
var inputColor2 = document.querySelector("#color2");
var h3CSS = document.querySelector("h3"); 
var body = document.querySelector("body"); 

function setGradient(){
    body.style.background = "linear-gradient(to right, " + inputColor1.value + ", " + inputColor2.value + ")";
    h3CSS.textContent = body.style.background + ";" ;
}

inputColor1.addEventListener("input", setGradient);
inputColor2.addEventListener("input", setGradient);