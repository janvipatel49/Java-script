// Simple Calculator using functions

function addNum(a, b) {
  return a + b;
}

function subNum(a, b) {
  return a - b;
}

function mulNum(a, b) {
  return a * b;
}

function divNum(a, b) {
  if (b === 0) return "Cannot divide by zero!";
  return a / b;
}

// Menu for user (simpler names)
let choice = prompt("Choose operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division");

// Taking input numbers
let n1 = parseFloat(prompt("Enter first number:"));
let n2 = parseFloat(prompt("Enter second number:"));

let result;

if (choice == 1) {
  result = addNum(n1, n2);
} else if (choice == 2) {
  result = subNum(n1, n2);
} else if (choice == 3) {
  result = mulNum(n1, n2);
} else if (choice == 4) {
  result = divNum(n1, n2);
} else {
  result = "Invalid choice!";
}

console.log("Result: " + result);
