// Variables for numbers and operator

let firstNumber = "";
let operator = "";
let secondNumber = "";
let justCalculated = false;
let previousOperator = "";
let previousNumber = "";

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");

// Filling the variables

digitButtons.forEach((button) =>{
	button.addEventListener("click", () => {

		if(justCalculated){
			firstNumber = "";
			secondNumber = "";
			operator = "";
			justCalculated = false;
		}

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

		// Don't allow other operators before first number
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

		// If an operator is added after after the second number
		if(operator !== "" && secondNumber !== ""){
			const result = operate(operator, Number(firstNumber), Number(secondNumber))

			display.textContent = result;

			firstNumber = result;
			secondNumber = "";
		}

		operator = button.textContent;
		justCalculated = false;
	});
})

// Operates when "=" pressed

equalsButton.addEventListener("click", () =>{
	if(firstNumber !== "" && operator !=="" && secondNumber !== ""){
		const result = operate(operator, Number(firstNumber), Number(secondNumber));

		display.textContent = result;

		previousOperator = operator;
		previousNumber = secondNumber;

		firstNumber = result;
		operator = "";
		secondNumber = "";
		justCalculated= true;

	}else if (justCalculated){
		const result = operate (previousOperator,Number(firstNumber),Number(previousNumber))
		display.textContent = result;

		if(typeof result !== "number"){
			firstNumber = "";
			operator = "";
			secondNumber = "";
			justCalculated = false;
			return
		}

		firstNumber=result;
		justCalculated=true;
	}
})

// Clear Button

clearButton.addEventListener("click", () =>{
	firstNumber = "";
	operator = "";
	secondNumber = "";
	justCalculated = false;
	previousNumber= "";
	previousOperator= "";

	display.textContent ="0"
})

// Backspace Button

backspaceButton.addEventListener("click", () => {

    if (justCalculated) {
        firstNumber = String(firstNumber).slice(0, -1);
        display.textContent = firstNumber || "0";
        justCalculated = false;
        return;
    }

    if (secondNumber !== "") {
        secondNumber = secondNumber.slice(0, -1);
        display.textContent = secondNumber || "0";

    } else if (operator !== "") {
        operator = "";
        display.textContent = firstNumber || "0";

    } else {
        firstNumber = firstNumber.slice(0, -1);
        display.textContent = firstNumber || "0";
    }
});

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
	let result;

	if (operator === "+"){
		result = add(a,b);
	} else if (operator === "-"){
		result = subtract(a,b);
	} else if (operator === "×"){
		result = multiply(a,b);
	} else if (operator === "÷"){
		result = divide(a,b);
	} else {
		return "Invalid Operator";
	}

	if (typeof result === "number"){
		return Math.round(result * 10000000000) / 10000000000;
	}

	return result;
}

