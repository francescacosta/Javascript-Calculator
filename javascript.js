var ac = document.getElementById("AC");
var maininput = document.getElementsByClassName("input")[0];
var formula = document.getElementsByClassName("input")[0];

//keypad numbers
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
 maininput.innerHTML = "0"
 formula.innerHTML = "0"
}
