var inputColor1 = document.querySelectorAll(".colorsPallette input")[0];
var inputColor2 = document.querySelectorAll(".colorsPallette input")[1];
var removeImg1 = document.querySelectorAll(".colorsPallette img")[0];
var removeImg2 = document.querySelectorAll(".colorsPallette img")[1];
console.log(removeImg1);
console.log("OK");
console.log(removeImg2);


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
    colorSection.appendChild(createColorRemove());
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
    inputColor.setAttribute("class","colorsPallette__color");
    inputColor.setAttribute("value","#ff0000");
    inputColor.addEventListener("input",setGradient);
    return inputColor;
}

function createColorRemove(){
    var imgRemove = document.createElement("img");
    imgRemove.setAttribute("src","images/remove.png");
    imgRemove.setAttribute("alt","remove");
    imgRemove.setAttribute("class","colorsPallette__remove");
    imgRemove.addEventListener("click",removeColorInput);
    // inputColor.addEventListener("input",setGradient);
    return imgRemove;
}

function removeColorInput(){
    this.parentNode.removeChild(this.previousElementSibling);
    this.parentNode.removeChild(this);
}

window.addEventListener("load",setGradient);
inputColor1.addEventListener("input", setGradient);
inputColor2.addEventListener("input", setGradient);
removeImg1.addEventListener("click", removeColorInput);
removeImg2.addEventListener("click", removeColorInput);
addButton.addEventListener("click", addMoreColor);