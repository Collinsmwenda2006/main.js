// Mini-Project: Calculator
// Supports + - * / % ** and handles division by zero.

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        return "Error: cannot divide by zero";
    }
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || Number.isNaN(num1) || Number.isNaN(num2)) {
        return "Error: both inputs must be numbers";
    }
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}

function runCalculatorDemo() {
    console.group("Calculator");
    console.log("10 + 5 =", calculate(10, "+", 5));    // 15
    console.log("10 - 5 =", calculate(10, "-", 5));    // 5
    console.log("10 * 5 =", calculate(10, "*", 5));    // 50
    console.log("10 / 5 =", calculate(10, "/", 5));    // 2
    console.log("10 / 0 =", calculate(10, "/", 0));    // error message
    console.log("10 % 3 =", calculate(10, "%", 3));    // 1
    console.log("10 % 0 =", calculate(10, "%", 0));    // error message
    console.log("2 ** 8 =", calculate(2, "**", 8));    // 256
    console.log("10 ^ 2 =", calculate(10, "^", 2));    // Invalid operator
    console.groupEnd();
}

runCalculatorDemo();
