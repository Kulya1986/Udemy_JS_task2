var inputColor1 = document.querySelector("#color1");
var inputColor2 = document.querySelector("#color2");
var h3CSS = document.querySelector("h3"); 
var body = document.querySelector("body");
var addButton = document.querySelector(".addColor");

function setGradient(){
    var colorsSet = document.querySelectorAll(".colorsPallette input");
    var l = document.querySelectorAll(".colorsPallette input").length;
    var backgroundStyleString = "linear-gradient(to right";
    var i=0;
    while (i<l)
    {
        backgroundStyleString +=", ";
        backgroundStyleString += colorsSet[i].value;
        i++;
    }
    backgroundStyleString +=")";
    body.style.background = backgroundStyleString;
    h3CSS.textContent = body.style.background + ";" ;
}

function addMoreColor(){
    var colorSection=document.querySelector(".colorsPallette");
    colorSection.appendChild(createColorInput());
    if (document.querySelectorAll(".colorsPallette input").length>=4)
    {
        addButton.setAttribute("disabled", "");
    }
}

function createColorInput(){
    var inputColor = document.createElement("input");
    var n = document.querySelectorAll(".colorsPallette input").length+1;
    inputColor.setAttribute("type","color");
    inputColor.setAttribute("name","color"+n);
    inputColor.setAttribute("id","color"+n);
    inputColor.setAttribute("value","#ff0000");
    inputColor.addEventListener("input",setGradient);
    return inputColor;
}

window.addEventListener("load",setGradient);
inputColor1.addEventListener("input", setGradient);
inputColor2.addEventListener("input", setGradient);
addButton.addEventListener("click", addMoreColor);