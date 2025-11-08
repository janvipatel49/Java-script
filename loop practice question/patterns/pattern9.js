// 1
// 01
// 010
// 1010
// 01010
for(let i=1; i<=5; i++){
  let line="";
  for(let j=1; j<=i; j++){
    line += ((i+j)%2);
  }
  console.log(line);
}
