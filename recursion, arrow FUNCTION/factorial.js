// Program to find factorial using recursion 

function factorial(n) {
  if (n === 0 || n === 1) return 1; 
  return n * factorial(n - 1);
}

let num = parseInt(prompt("Enter a number:"));

console.log("Factorial of " + num + " is: " + factorial(num));

