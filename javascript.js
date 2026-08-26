// Variables for numbers and operator

let firstNumber = "";
let operator = "";
let secondNumber = "";

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear")

// Filling the variables

digitButtons.forEach((button) =>{
	button.addEventListener("click", () => {

		if (operator === ""){
			if (button.textContent === "." && firstNumber.includes(".")){
				return;
			}
			firstNumber += button.textContent;
			display.textContent = firstNumber;
		} else{
			if (button.textContent === "." && secondNumber.includes(".")){
				return;
			}
			secondNumber += button.textContent;
			display.textContent = secondNumber;
		}
		
	});
})

operatorButtons.forEach((button) =>{
	button.addEventListener("click", () => {
		
		// Allow negative as first number
		if(firstNumber ==="" && button.textContent === "-"){
			firstNumber = "-";
			display.textContent = firstNumber;
			return;
		}

		// Don't allow other operators before first
		if(firstNumber === ""){
			return;
		}

		// Allow negative second number
		if(operator !== "" && secondNumber === "" && button.textContent === "-"){
			secondNumber = "-";
			display.textContent = secondNumber;
			return;
		}

		// If an operator already exist, change it
		if(operator !== "" && secondNumber === ""){
			operator = button.textContent;
			return;
		}
		operator = button.textContent;
	});
})

// Operates when "=" pressed

equalsButton.addEventListener("click", () =>{
	const result = operate(operator, Number(firstNumber), Number(secondNumber));

	display.textContent = result;

	firstNumber = result;
	operator = "";
	secondNumber = "";
})

// Clear Button

clearButton.addEventListener("click", () =>{
	firstNumber = "";
	operator = "";
	secondNumber = "";

	display.textContent ="0"
})

// Operator Functions

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
	return a * b;
}

const divide = function(a,b){
    if (b===0){
		return "Cannot divide by zero";
	}
	return a / b;
}

function operate(operator, a, b){
	if (operator === "+"){
		return add(a,b);
	} else if (operator === "-"){
		return subtract(a,b);
	} else if (operator === "×"){
		return multiply(a,b);
	} else if (operator === "÷"){
		return divide(a,b);
	} else {
		return "Invalid Operator";
	}
}

