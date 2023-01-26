var inputColor1 = document.querySelectorAll(".colorsPallette .colorsPallette__color")[0];
var inputColor2 = document.querySelectorAll(".colorsPallette .colorsPallette__color")[1];
var inputColor1Alpha = document.querySelectorAll(".colorsPallette .colorsPallette__color__alpha")[0];
var inputColor2Alpha = document.querySelectorAll(".colorsPallette .colorsPallette__color__alpha")[1];
var inputColor1Percent = document.querySelectorAll(".colorsPallette .colorsPallette__color__percent")[0];
var inputColor2Percent = document.querySelectorAll(".colorsPallette .colorsPallette__color__percent")[1];
var inputDirection = document.getElementById('gradDirection');
var h3CSS = document.querySelector("h3"); 
var body = document.querySelector("body");
var addButton = document.querySelector(".addColor");

function setGradient(){
    var colorsSet = document.querySelectorAll(".colorsPallette .colorsPallette__color");
    var colorSetAlpha = document.querySelectorAll(".colorsPallette .colorsPallette__color__alpha");
    var colorSetPercent = document.querySelectorAll(".colorsPallette .colorsPallette__color__percent");
    var l = document.querySelectorAll(".colorsPallette .colorsPallette__color").length;
    var backgroundStyleString = "linear-gradient("+inputDirection.value+"deg";
    var i=0;
    while (i<l)
    {
        backgroundStyleString +=", ";
        backgroundStyleString +=colorsSet[i].value;
        backgroundStyleString +=parseInt(colorSetAlpha[i].value).toString(16);
        backgroundStyleString +=" ";
        backgroundStyleString +=colorSetPercent[i].value;
        backgroundStyleString +="%";
        i++;
    }
    backgroundStyleString +=")";
    body.style.background = backgroundStyleString;
    h3CSS.textContent = body.style.background + ";" ;
}

function addMoreColor(){
    var colorSection=document.querySelector(".colorsPallette");
    var boxColor = createBoxContainer(), boxAlpha = createBoxContainer(), boxPercent = createBoxContainer(), boxRemove = createBoxContainer();
    boxColor.appendChild(createColorInput());
    boxAlpha.appendChild(createColorAlphaBar());
    boxPercent.appendChild(createColorPercentageBar());
    boxRemove.appendChild(createColorRemove());
    colorSection.appendChild(boxColor);
    colorSection.appendChild(boxAlpha);
    colorSection.appendChild(boxPercent);
    colorSection.appendChild(boxRemove);
    colorPercentageDependenciesOnAdd();
    setGradient();
    checkQuantityOfColors();
}

function createBoxContainer(){
    var divBox = document.createElement("div");
    return divBox;
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

function createColorPercentageBar(){
    var percentBar = document.createElement("input");
    var n = document.querySelectorAll(".colorsPallette .colorsPallette__color__percent").length+1;
    percentBar.setAttribute("type","range");
    percentBar.setAttribute("name","percent"+n);
    percentBar.setAttribute("class","colorsPallette__color__percent");
    percentBar.setAttribute("min","0");
    percentBar.setAttribute("max","100");
    percentBar.setAttribute("value","0");
    percentBar.setAttribute("title","Percentage");
    percentBar.addEventListener("input",setGradient);
    return percentBar;
}

function removeColorInput(){
    var i=3;
    var divBox = this.parentNode;
    while (i>0){
        divBox.parentNode.removeChild(divBox.previousElementSibling);
        i--;
    }
    divBox.parentNode.removeChild(divBox);
    checkQuantityOfColors();
    setGradient();
}

function colorPercentageDependenciesOnAdd(){
    var percentBarsSet = document.querySelectorAll(".colorsPallette .colorsPallette__color__percent");
    var colorsAmount = percentBarsSet.length;
    if (colorsAmount===3) percentBarsSet.forEach((element,i) => {
        if (i===0) element.value=33;
        else element.value=33+i*33;
        console.log(element);
    });
    if (colorsAmount===4) percentBarsSet.forEach((element,i) => {
        if (i===0) element.value=25;
        else element.value=25+i*25;
        console.log(element);
    });
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
inputColor1Percent.addEventListener("input", setGradient);
inputColor2Percent.addEventListener("input", setGradient);
inputDirection.addEventListener("input", setGradient);
addButton.addEventListener("click", addMoreColor);
