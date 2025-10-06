// take 7 subjects marks and find pr

let eng=Number(prompt("enter english mark"))

let math=Number(prompt("enter maths mark"))

let sci=Number(prompt("enter science mark"))

let san=Number(prompt("enter sanskrit mark"))

let hindi=Number(prompt("enter hindi mark"))

let computer=Number(prompt("enter computer mark"))

let guj=Number(prompt("enter gujrati mark"))

let total=(eng+math+sci+san+hindi+computer+guj)
let pr=total/700*100;
console.log(`prcentage is ${pr}%`);



