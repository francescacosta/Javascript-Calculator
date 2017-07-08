
// Screen Inputs
var mainInput = document.getElementsByClassName("input")[0];
var formulaInput = document.getElementsByClassName("formula")[0];

// Function buttons
var ac = document.getElementById("AC");
var ce = document.getElementById("CE");
var equals = document.getElementById("equals");

// Screen Variables
var main = "0"
var formula = "0"

//Functions
var setMainInput = function (value) {
  if (main === '0' && value != '.') {
    main = "";
  }

  main += value;

  mainInput.innerHTML = main;
}

var canUpdateMain = function(value) {
  if (value === '.' && main.indexOf('.') >= 0) {
    return false;
  }

  if (main.length >= 7)  {
    return false;
  }

  return true;
}

var setFormula = function (value) {

  if (value === ' ÷ ' || value === ' + ' || value === ' − ' || value === ' × ' ) {
    main = '0';
    mainInput.innerHTML = main;
  }

  if (formula === '0' && value != '.') {
    formula = "";
  }

  formula += value
  formulaInput.innerHTML = formula;
}

var resetMain = function () {
  formula = formula.slice(0, -main.length);
  formulaInput.innerHTML = formula;

  if (formula === '') {
    formula = '0';
    formulaInput.innerHTML = formula;
  }

  main = '0';
  mainInput.innerHTML = main;
}

var resetFormula = function () {
  formula = '0';
  formulaInput.innerHTML = formula;
}

var calculateFormula = function () {
  var calculated = eval(formula.replace('÷', '/').replace('−', '-').replace('×', '*'));

  calculated = calculated.toString()

  formula = calculated;
  formulaInput.innerHTML = calculated;

  main = calculated;
  mainInput.innerHTML = calculated;
}

// Keypad Events
ac.onclick = function() {
  resetMain();
  resetFormula();
}

ce.onclick = function() {
  resetMain();
}

equals.onclick = function() {
  calculateFormula();
}

var symbolPadPress = function (symbol) {
  setFormula(symbol)
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
