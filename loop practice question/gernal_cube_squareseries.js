//general series like 
//Cube series = 1³, 2³, 3³ …----> 1 4 9 16
//Square series = 1², 2², 3²…--->1 8 27 64 

// Cube series
let cube = Number(prompt("Enter a number for cube series"));
console.log("Cube series:");

for (let i = 1; i <= cube; i++) {
  console.log(i * i * i); // cube 
}

// Square series
let square = Number(prompt("Enter a number for square series"));
console.log("Square series:");

for (let j = 1; j <= square; j++) {
  console.log(j * j); // square 
}
