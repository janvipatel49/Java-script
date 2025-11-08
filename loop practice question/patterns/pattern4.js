// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5
let n = 5;
for (let i = 5; i >= 1; i--) {
  let line = "";
  for (let j = i; j <= 5; j++) {
    line += j + " ";
  }
  console.log(line);
}

