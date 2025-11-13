// Program to check if a number is prime using recursion 

function isPrime(num, i = 2) {
  if (num <= 2) return num === 2; 
  if (num % i === 0) return false; 
  if (i * i > num) return true;
  return isPrime(num, i + 1); 
}


let number = parseInt(prompt("Enter a number:"));


if (isPrime(number)) {
  console.log(number + " is a Prime number");
} else {
  console.log(number + " is NOT a Prime number");
}

