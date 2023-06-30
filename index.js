  const plusButton = document.querySelector(".operator_plus");
  const minusButton = document.querySelector(".operator_minus");
  const multiplyButton = document.querySelector(".operator_multiplying");
  const divideButton = document.querySelector(".operator_divide");
  const equal = document.querySelector(".equals");
  const display = document.querySelector(".display");
  const clear = document.querySelector(".clear");
  const numbers = document.querySelectorAll(".number");
  const operators = document.querySelectorAll(".operator");
  let isOperatorClicked = false;

  let a = '';
  let b = '';
  let symbol = '';

  //** handling with numbers */
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      let buttonNumber = number.textContent;

      if (!isOperatorClicked) {
        a = Number(a + buttonNumber); // convert the concatenated string to a number
        display.textContent = a; // displaying A

        console.log(`A: ${Number (a)} ${typeof a} ${isOperatorClicked}`);
      } else {
        display.textContent = ''; // clearing display after clicking A number
        b = Number(b + buttonNumber);
        display.textContent = b; // displaying B

        console.log(`B: ${Number (b)} ${typeof b} ${isOperatorClicked}`);
      }
    });
  });

  //** handling with symbols */
  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      //** dealing with multyple operations */
      if (a && b) {
        a = operate(symbol, a, b);
        b = '';
        display.textContent = a;
        console.log(a)
        console.log(b)
      }
      
      isOperatorClicked = true;
      symbol = operator.textContent;
    });
  });
  

  //* basic math operations */
  const addNumbers = (a, b) => a + b;
  const subtractNumbers = (a, b) => a - b;
  const multiplyNumbers = (a, b) => a * b;
  const divideNumbers = (a, b) => (a === 0 || b === 0) ? 'Undefined' : a / b;


  //** operating with operands depends on a symbol */
  const operate = (symbol, a, b) => {
    switch (symbol) {
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
    display.textContent = '';
    a = '';
    b = '';
    symbol = '';
    isOperatorClicked = false;
  });

  equal.addEventListener("click", () => {
    if (a && b && symbol) {
      a = operate(symbol, a, b);
      display.textContent = a;
      b = '';
      symbol = '';
      isOperatorClicked = false;
    }
  });