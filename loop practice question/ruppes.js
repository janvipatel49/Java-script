// 3. WAP to find Rupees and Paisa from any rupees of 12.50 
// Input: 
//  12.50  
// Output: 
//            12 Rupees 
//  50 Paisa 
let r = Number(prompt("Enter amount in rupees (like 12.50):"));

let rupees = Math.floor(r);            // integer part → rupees
let paisa = Math.round((r - rupees) * 100); // decimal part → paisa

console.log(rupees, "Rupees");
console.log(paisa, "Paisa");

