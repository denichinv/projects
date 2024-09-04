document.addEventListener("DOMContentLoaded", function () {

  // DOM Elements Selection
  const operand1 = document.getElementById("operand1");
  const operand2 = document.getElementById("operand2");
  const addButton = document.getElementById("add");
  const subtractButton = document.getElementById("subtract");
  const multiplyButton = document.getElementById("multiply");
  const divideButton = document.getElementById("divide");
  const calculateButton = document.getElementById("calculate");
  const resultDisplay = document.getElementById("result");
  const clearButton = document.getElementById("clear");

  // Calculation Functions

  function performCalculation(operation) {
    // Parse input values as floating-point numbers
    const num1 = parseFloat(operand1.value);
    const num2 = parseFloat(operand2.value);

    // Check for invalid inputs
    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid input. Please enter valid numbers";
    }
    
    // Perform the operation based on the specified type
    switch (operation) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        // Check for division by zero
        if (num2 === 0) {
          return "Error: Division by zero";
        }
        return num1 / num2;
      default:
        return "Invalid operation";
    }
  }
 
  // Event listener for the "Add" button
  addButton.addEventListener("click", () => {
    resultDisplay.textContent = performCalculation("add");
  });

  // Event listener for the "Subtract" button
  subtractButton.addEventListener("click", () => {
    resultDisplay.textContent = performCalculation("subtract");
  });

  // Event listener for the "Multiply" button
  multiplyButton.addEventListener("click", () => {
    resultDisplay.textContent = performCalculation("multiply");
  });

  // Event listener for the "Divide" button
  divideButton.addEventListener("click", () => {
    resultDisplay.textContent = performCalculation("divide");
  });

  // Event listener for the "Calculate" button (default operation)
  calculateButton.addEventListener("click", () => {
    resultDisplay.textContent = performCalculation();
  });

  // Event listener for the "Clear" button
  clearButton.addEventListener("click", () => {
    // Clear the input fields and result display
    operand1.value = "";
    operand2.value = "";
    resultDisplay.textContent = "";
  });
  // Event listener for keyboard shortcuts
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "+":
        resultDisplay.textContent = performCalculation("add");
        break;
      case "-":
        resultDisplay.textContent = performCalculation("subtract");
        break;
      case "*":
        resultDisplay.textContent = performCalculation("multiply");
        break;
      case "/":
        resultDisplay.textContent = performCalculation("divide");
        break;
      case "Enter":
        resultDisplay.textContent = performCalculation();
        break;
    }
  });
});
