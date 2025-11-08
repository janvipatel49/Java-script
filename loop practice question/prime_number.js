// prime number
let n = Number(prompt("Enter a number"));
let isPrime = true;

if (n <= 1) {
  isPrime = false;
}

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(n, "is a prime number");
} else {
  console.log(n, "is not a prime number");
}
