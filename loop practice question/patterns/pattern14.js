// 1
// * *
// 1 2 3
// * * * *
// 1 2 3 4 5
for(let i=1; i<=5; i++){
  let line="";
  if(i%2==0){
    line = "* ".repeat(i);
  } else {
    for(let j=1; j<=i; j++){
      line += j + " ";
    }
  }
  console.log(line);
}
