// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1
let n = 5;
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 5; j >= 6 - i; j--) {
    line += j + " ";
  }
  console.log(line);
}

