// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
for(let i=0; i<5; i++){
  let line="";
  let num=1;
  for(let j=0; j<=i; j++){
    line += num + " ";
    num = num * (i-j)/(j+1);
  }
  console.log(line);
}

