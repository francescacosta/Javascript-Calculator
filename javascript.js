
// Screen Inputs
var mainInput = document.getElementsByClassName("input")[0];
var formulaInput = document.getElementsByClassName("formula")[0];

// Function buttons
var ac = document.getElementById("AC");
var ce = document.getElementById("CE");

// Formula buttons
var divide = document.getElementById("divide");
var add = document.getElementById("add");
var multiply = document.getElementById("multiply");
var subtract = document.getElementById("subtract");

// Screen Variables
var main = "0"
var formula = "0"

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
  if (formula.join('').length >= 20) {
    return;
  }

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
  resetMain();
}


divide.onclick = function() {
 setFormulaInput('&divide;')
}

multiply.onclick = function() {
 setFormulaInput('&times;')
}

subtract.onclick = function() {
 setFormulaInput('&minus;')
}

add.onclick = function() {
  setFormula(' + ');
}

var padPress = function(number) {
  if (canUpdateMain(number)) {
    setMainInput(number);
    setFormula(number);
  }
}

// setting initial values - "Turning on calculator"
mainInput.innerHTML = main;
formulaInput.innerHTML = formula;
