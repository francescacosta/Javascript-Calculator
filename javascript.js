
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

  setMain(main + value)
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

var setFormulaInput = function (value) {

  if (value === ' ÷ ' || value === ' + ' || value === ' − ' || value === ' × ' ) {
    main = '0';
    mainInput.innerHTML = main;
  }

  if (formula === '0' && value != '.') {
    formula = "";
  }

  setFormula(formula + value)
}

var resetMain = function () {
  setFormula(formula.slice(0, -main.length));

  if (formula === '') {
    setFormula('0')
  }

  setMain('0')
}

var setFormula = function (str) {
  formula = str;
  formulaInput.innerHTML = formula;
}

var setMain = function (str) {
  main = str;
  mainInput.innerHTML = main;
}

var calculateFormula = function () {
  var calculated = eval(formula.replace('÷', '/').replace('−', '-').replace('×', '*'));

  calculated = calculated.toString()

  setFormula(calculated)
  setMain(calculated)
}

// Keypad Events
ac.onclick = function() {
  resetMain();
  setFormula('0')
}

ce.onclick = function() {
  resetMain();
}

equals.onclick = function() {
  calculateFormula();
}

var symbolPadPress = function (symbol) {
  if (formula[formula.length - 1] === ' ') {
    return;
  }

  setFormulaInput(symbol);
}

var padPress = function(number) {
  if (canUpdateMain(number)) {
    setMainInput(number);
    setFormulaInput(number);
  }
}

// setting initial values - "Turning on calculator"
setMain('0')
setFormula('0')
