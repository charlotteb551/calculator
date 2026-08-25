// Variables for numbers and operator

let firstNumber = "";
let operator = "";
let secondNumber = "";

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");

digitButtons.forEach((button) =>{
	button.addEventListener("click", () => {
		firstNumber += button.textContent;
		display.textContent = firstNumber;
	});
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

