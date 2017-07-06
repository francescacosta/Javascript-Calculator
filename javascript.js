
// Screen Inputs
var mainInput = document.getElementsByClassName("input")[0];
var formulaInput = document.getElementsByClassName("formula")[0];

// Function buttons
var ac = document.getElementById("AC");
var ce = document.getElementById("CE");

// Formula buttons
var divide = document.getElementById("divide");
var padAdd = document.getElementById("add");

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
var formula = [];

// Functions

var setMainInput = function (value) {
  if (main === '0' && value === '0') {
    return;
  } else if (main === '0' && value != '0') {
     main = '';
  } else if (value === '.' && main.indexOf('.') >= 0) {
    return;
  }
 if (main.length >= 7) {
   return;
 }
  main += value;

  refreshMainInput(); 
}

var setFormulaInput = function (value) {
  formula.push(main)
  formula.push(value)

  resetMain();
  refreshFormulaInput();
}

var refreshMainInput = function () {
  mainInput.innerHTML = main;
}

var refreshFormulaInput = function () {
  if (formula.length === 0) {
    formulaInput.innerHTML = '0';
  } else {
    formulaInput.innerHTML = formula.join(' ');
  };
}

var resetMain = function() {
  main = '0';
  refreshMainInput();
}

var resetFormula = function () {
  formula = [];
  refreshFormulaInput();
}

ac.onclick = function() {
  resetMain();
  resetFormula();
}

ce.onclick = function() {
 mainInput.innerHTML = "0";

divide.onclick = function() {
 setFormulaInput('&divide;')
}

pad0.onclick = function() {
 setMainInput("0");
}

pad1.onclick = function() {
  setMainInput("1");
}

pad2.onclick = function() {
  setMainInput("2");
}

pad3.onclick = function() {
  setMainInput("3");
}

pad4.onclick = function() {
  setMainInput("4");
}

pad5.onclick = function() {
  setMainInput("5");
}

pad6.onclick = function() {
  setMainInput("6");
}

pad7.onclick = function() {
  setMainInput("3");
}

pad8.onclick = function() {
  setMainInput("8");
}

pad9.onclick = function() {
  setMainInput("9");
}

padDot.onclick = function() {
  setMainInput(".");
}

padAdd.onclick = function() {
  setFormulaInput('+')
}
