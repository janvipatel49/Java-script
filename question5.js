// get amount of TV from user
// take total quantity
// for each quantity add 18% GST
// find final bill  
let amount=Number(prompt("enter a amount of tv"))
let total=Number(prompt("enter quantity"))
let subtotal=amount*total
let gst=subtotal*0.18

let final=subtotal+gst
console.log(final)
