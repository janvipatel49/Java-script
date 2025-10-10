//Profit and Loss Calculation
let cp=Number(prompt("enter a cost price"));
let sp=Number(prompt("enter a selling price"));

if(cp>sp){
    alert("loss");
}
else if(sp>cp)
{
    alert("profit")
}
else{
    alert(" equal profit or loss")
}