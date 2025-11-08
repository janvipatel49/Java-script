// 0
// 01
// 010
// 0101
// 01010
for(let i=0; i<5; i++){
  let line="";
  for(let j=0; j<=i; j++){
    line += (j % 2);
  }
  console.log(line);
}
