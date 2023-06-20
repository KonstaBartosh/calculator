const plusButton = document.querySelector(".operator_plus");
const minusButton = document.querySelector(".operator_minus");
const multiplyButton = document.querySelector(".operator_multiplying");
const divideButton = document.querySelector(".operator_divide");
const equal = document.querySelector(".equals");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let a = "";
let b = "";
let operand = "";
let isOperatorClicked = false;


numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let buttonNumber = number.textContent;

    if (!isOperatorClicked) {
      display.textContent += buttonNumber;
      a = Number(a + buttonNumber);
      console.log("A:" + typeof a);
    } else {
      display.textContent += buttonNumber; // concatenating numbers
      b = Number(b + buttonNumber); // convert the concatenated string to a number
      console.log("B:" + typeof b);
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    isOperatorClicked = true;

    operand = operator.textContent;
    display.textContent = "";
  });
});

//* basic math operators */
const addNumbers = (a, b) => a + b;
const subtractNumbers = (a, b) => a - b;
const multiplyNumbers = (a, b) => a * b;
const divideNumbers = (a, b) => a / b;

const operate = (operand, a, b) => {
  switch (operand) {
    case "+":
      return addNumbers(a, b);
    case "-":
      return subtractNumbers(a, b);
    case "x":
      return multiplyNumbers(a, b);
    case "÷":
      return divideNumbers(a, b);
    default:
  }
};

clear.addEventListener("click", () => {
  display.textContent = "";
  a = "";
  b = "";
	operand = "";
});

equal.addEventListener("click", () => {
  display.textContent = operate(operand, a, b);
	a = operate(operand, a, b);
	display.textContent = a;
	b = ""; // reset the value of `b` for the next calculation
	operand = ""; // reset the operand
	isOperatorClicked = false; // reset the operator clicked flag
});
