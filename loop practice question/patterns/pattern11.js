// 0
// 1 1
// 0 0 0
// 1 1 1 1
// 0 0 0 0 0
for(let i=1; i<=5; i++){
  let line="";
  for(let j=1; j<=i; j++){
    line += (i%2==0 ? "1 " : "0 ");
  }
  console.log(line);
}
