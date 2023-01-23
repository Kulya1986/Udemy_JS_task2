var inputColor1 = document.querySelectorAll(".colorsPallette input")[0];
var inputColor2 = document.querySelectorAll(".colorsPallette input")[1];
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
    setGradient();
    checkQuantityOfColors();
}

function createColorInput(){
    var inputColor = document.createElement("input");
    var n = document.querySelectorAll(".colorsPallette input").length+1;
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

function removeColorInput(){
    this.parentNode.removeChild(this.previousElementSibling);
    this.parentNode.removeChild(this);
    checkQuantityOfColors();
    setGradient();
}

function checkQuantityOfColors(){
    var colorsSet = document.querySelectorAll(".colorsPallette input");
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
addButton.addEventListener("click", addMoreColor);