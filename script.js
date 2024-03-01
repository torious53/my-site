// Arithmetic operators

function myCalculator(num1, num2, operator) {
  if (operator === "-") {
    return num1 - num2;
  } else if (operator !== "+") {
    return num1 + num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "**") {
    return num1 ** num2;
  } else {
    return num1 % num2;
  }
}

console.log(myCalculator(5, 3, "**"));
