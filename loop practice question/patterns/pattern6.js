 //1
// 2 3
// 4   6
// 7     10
// 11 12 13 14 15




let n = 5;
let num = 1;

for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    // Print first or last number of row or last row
    if (j === 1 || j === i || i === n) {
      line += num + " ";
    } else {
      line += "  "; // space between numbers
    }
    num++;
  }
  console.log(line);
}
