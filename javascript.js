
// Screen Inputs
var mainInput = document.getElementsByClassName("input")[0];
var formulaInput = document.getElementsByClassName("formula")[0];

// Function buttons
var ac = document.getElementById("AC");
var ce = document.getElementById("CE");

// Formula buttons
var divide = document.getElementById("divide");

// Keypad numbers
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

var padDot = document.getElementById("dot");

// Screen Variables
var main = '0';
var formula = '0';

// Functions
var refreshMainInput = function () {
  mainInput.innerHTML = main;
  formula.innerHTML = formula;
}

var resetAll = function () {
 main.innerHTML = "0"
}

var setMainInput = function (value) {
  if (main === '0' && value === '0') {
    return;
  } else if (main === '0' && value != '0') {
     main = '';
  } else if (value === '.' && main.indexOf('.') >= 0) {
    return;
  }
 if (main.length > 6) {
   formula.innerHTML = "MAX NUMBER LIMIT REACHED";
   return;
 }
  main += value;

  refreshMainInput();
}

ac.onclick = function() {
 mainInput.innerHTML = "0";
 formula.innerHTML += " 0";
}

divide.onclick = function() {
 mainInput.innerHTML = "&divide;";
 formula.innerHTML += " &divide;";
}

ce.onclick = function() {
 mainInput.innerHTML = "0";
}

pad0.onclick = function() {
 // main += "0";
 setMainInput("0");

 // formula.innerHTML = "0";
}

pad1.onclick = function() {
  // main += "1";
  setMainInput("1");
}

pad2.onclick = function() {
 mainInput.innerHTML = "2";
 formula.innerHTML = "2";
}

pad3.onclick = function() {
 mainInput.innerHTML = "3";
 formula.innerHTML += " 3";
}

pad4.onclick = function() {
 mainInput.innerHTML = "4";
 formula.innerHTML = "4";
}

pad5.onclick = function() {
 mainInput.innerHTML = "5";
 formula.innerHTML = "5";
}

pad6.onclick = function() {
 mainInput.innerHTML = "6";
 formula.innerHTML = "6";
}

pad7.onclick = function() {
 mainInput.innerHTML = "7";
 formula.innerHTML = "7";
}

pad8.onclick = function() {
 mainInput.innerHTML = "8";
 formula.innerHTML = "8";
}

pad9.onclick = function() {
 mainInput.innerHTML = "9";
 formula.innerHTML = "9";
}

padDot.onclick = function() {
  setMainInput(".");
}
