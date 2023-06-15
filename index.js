const plusButton = document.querySelector('.operator_plus');
const minusButton = document.querySelector('.operator_minus');
const multiplyButton = document.querySelector('.operator_mult');
const divideButton = document.querySelector('.operator_divide');
const equal = document.querySelector('.equals');

const a = 2;
const b = 5;
const operator = '';


const addNumbers = (a, b) => {
	return a + b;
}

const subtractNumbers = (a, b) => {
	return a - b;
}

const multiplyNumbers = (a, b) => {
	return a * b;
}

const divideNumbers = (a, b) => {
	return a / b;
}

const operate = (operator, a, b) => {
	switch (operator) {
		case plusButton:
			return addNumbers(a, b);
			break;
		case minusButton:
			return subtractNumbers(a, b);
			break;
		case multiplyButton:
			return multiplyNumbers(a, b);
			break;
		case divideButton:
			return divideNumbers(a ,b);
			break;
	}
}


console.log(operate(minusButton, 6, 6));