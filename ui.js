// Connects the calculator form in index.html to calculate() from calculator.js.

const calcForm = document.getElementById("calc-form");
const resultOutput = document.getElementById("result");

calcForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    resultOutput.textContent = `Result: ${calculate(num1, operator, num2)}`;
});
