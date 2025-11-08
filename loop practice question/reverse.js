let num = 768;
let rev = 0;
let temp = num;

while (temp > 0) {
  rev = rev * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}

console.log("\nReverse of", num, "is", rev);
