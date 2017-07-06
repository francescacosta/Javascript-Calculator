
// Sreen Inputs
var maininput = document.getElementsByClassName("input")[0];
var formula = document.getElementsByClassName("formula")[0];

//function buttons
var ac = document.getElementById("AC");
var ce = document.getElementById("CE");

//formula buttons
var divide = document.getElementById("/");

//keypad numbers
var pad0 = document.getElementById("0");
var pad1 = document.getElementById("1");
var pad2 = document.getElementById("2");
var pad3 = document.getElementById("3");
var pad4 = document.getElementById("4");
var pad5 = document.getElementById("5");
var pad6 = document.getElementById("6");
var pad7 = document.getElementById("7");
var pad8 = document.getElementById("8");
var pad9 = document.getElementById("9");


ac.onclick = function() {
 maininput.innerHTML = "0";
 formula.innerHTML = "0";
}

divide.onclick = function() {
 maininput.innerHTML = "&divide;";
 formula.innerHTML += " &divide;";
}

ce.onclick = function() {
 maininput.innerHTML = "0";
}

pad0.onclick = function() {
 maininput.innerHTML = "0";
 formula.innerHTML = "0";
}

pad1.onclick = function() {
 maininput.innerHTML = "1";
 formula.innerHTML = "1";
}

pad2.onclick = function() {
 maininput.innerHTML = "2";
 formula.innerHTML = "2";
}

pad3.onclick = function() {
 maininput.innerHTML = "3";
 formula.innerHTML += " 3";
}

pad4.onclick = function() {
 maininput.innerHTML = "4";
 formula.innerHTML = "4";
}

pad5.onclick = function() {
 maininput.innerHTML = "5";
 formula.innerHTML = "5";
}

pad6.onclick = function() {
 maininput.innerHTML = "6";
 formula.innerHTML = "6";
}

pad7.onclick = function() {
 maininput.innerHTML = "7";
 formula.innerHTML = "7";
}

pad8.onclick = function() {
 maininput.innerHTML = "8";
 formula.innerHTML = "8";
}

pad9.onclick = function() {
 maininput.innerHTML = "9";
 formula.innerHTML = "9";
}
