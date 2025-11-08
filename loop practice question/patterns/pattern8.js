// 1
// 10
// 101
// 1010
// 10101
for(let i=0; i<5; i++){
  let line="";
  for(let j=0; j<=i; j++){
    line += (j % 2 == 0 ? 1 : 0);
  }
  console.log(line);
}

