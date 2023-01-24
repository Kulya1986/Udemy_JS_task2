var inputColor1 = document.querySelectorAll(".colorsPallette .colorsPallette__color")[0];
var inputColor2 = document.querySelectorAll(".colorsPallette .colorsPallette__color")[1];
var inputColor1Alpha = document.querySelectorAll(".colorsPallette .colorsPallette__color__alpha")[0];
var inputColor2Alpha = document.querySelectorAll(".colorsPallette .colorsPallette__color__alpha")[1];
var h3CSS = document.querySelector("h3"); 
var body = document.querySelector("body");
var addButton = document.querySelector(".addColor");

function setGradient(){
    var colorsSet = document.querySelectorAll(".colorsPallette .colorsPallette__color");
    var colorSetAlpha = document.querySelectorAll(".colorsPallette .colorsPallette__color__alpha");
    var l = document.querySelectorAll(".colorsPallette .colorsPallette__color").length;
    var backgroundStyleString = "linear-gradient(to right";
    var i=0;
    while (i<l)
    {
        backgroundStyleString +=", ";
        backgroundStyleString +=colorsSet[i].value;
        backgroundStyleString +=parseInt(colorSetAlpha[i].value).toString(16);
        i++;
    }
    backgroundStyleString +=")";
    body.style.background = backgroundStyleString;
    h3CSS.textContent = body.style.background + ";" ;
}

function addMoreColor(){
    var colorSection=document.querySelector(".colorsPallette");
    colorSection.appendChild(document.createElement("br"));
    colorSection.appendChild(creatColorLabel());
    colorSection.appendChild(createColorInput());
    colorSection.appendChild(createColorAlphaBar());
    colorSection.appendChild(createColorRemove());
    setGradient();
    checkQuantityOfColors();
}

function creatColorLabel(){
    var colorLabel = document.createElement("label");
    var n = document.querySelectorAll(".colorsPallette .colorsPallette__color").length+1;
    colorLabel.setAttribute("for","color"+n);
    colorLabel.textContent = "Color "+n;
    return colorLabel
}

function createColorInput(){
    var inputColor = document.createElement("input");
    var n = document.querySelectorAll(".colorsPallette .colorsPallette__color").length+1;
    inputColor.setAttribute("type","color");
    inputColor.setAttribute("name","color"+n);
    inputColor.setAttribute("class","colorsPallette__color");
    if (n===3) inputColor.setAttribute("value","#0000ff");
    if (n===4) inputColor.setAttribute("value","#ffff00");
    inputColor.addEventListener("input",setGradient);
    return inputColor;
}

function createColorRemove(){
    var imgRemove = document.createElement("img");
    imgRemove.setAttribute("src","images/remove.png");
    imgRemove.setAttribute("alt","remove");
    imgRemove.setAttribute("class","colorsPallette__remove");
    imgRemove.addEventListener("click",removeColorInput);
    return imgRemove;
}

function createColorAlphaBar(){
    var alphaBar = document.createElement("input");
    var n = document.querySelectorAll(".colorsPallette .colorsPallette__color__alpha").length+1;
    alphaBar.setAttribute("type","range");
    alphaBar.setAttribute("name","alpha"+n);
    alphaBar.setAttribute("class","colorsPallette__color__alpha");
    alphaBar.setAttribute("min","0");
    alphaBar.setAttribute("max","255");
    alphaBar.setAttribute("value","255");
    alphaBar.setAttribute("title","Alpha");
    alphaBar.addEventListener("input",setGradient);
    return alphaBar;
}

function removeColorInput(){
    var i=4;
    while (i>0){
        this.parentNode.removeChild(this.previousElementSibling);
        i--;
    }
    this.parentNode.removeChild(this);
    checkQuantityOfColors();
    setGradient();
}

function checkQuantityOfColors(){
    var colorsSet = document.querySelectorAll(".colorsPallette .colorsPallette__color");
    if (colorsSet.length>=4 && addButton.getAttribute("disabled")===null)
    {
        addButton.setAttribute("disabled", "");
    }
    else if (colorsSet.length>0 && addButton.getAttribute("disabled")!==null){
        addButton.removeAttribute("disabled");
    }
}

window.addEventListener("load",setGradient);
inputColor1.addEventListener("input", setGradient);
inputColor2.addEventListener("input", setGradient);
inputColor1Alpha.addEventListener("input",setGradient);
inputColor2Alpha.addEventListener("input",setGradient);
addButton.addEventListener("click", addMoreColor);