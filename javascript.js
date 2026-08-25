// Variables for numbers and operator

let firstNumber = "";
let operator = "";
let secondNumber = "";

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");

// Filling the variables

digitButtons.forEach((button) =>{
	button.addEventListener("click", () => {

		if (operator === ""){
			firstNumber += button.textContent;
			display.textContent = firstNumber;
		} else{
			secondNumber += button.textContent;
			display.textContent = secondNumber;
		}
		
	});
})

operatorButtons.forEach((button) =>{
	button.addEventListener("click", () => {
		operator = button.textContent;
	});
})

// Operates when "=" pressed

equalsButton.addEventListener("click", () =>{
	const result = operate(operator, Number(firstNumber), Number(secondNumber));

	display.textContent = result;
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

