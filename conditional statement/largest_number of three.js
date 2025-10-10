//largest of three number  using nested if
let num1=Number(prompt("enter a number 1"))
let num2=Number(prompt("enter a number 2"))
let num3=Number(prompt("enter a number 3"))

if(num1>num2 &&num1>num3)
{
   
alert("number 1 is large")
}
  else if(num2>num1&&num2>num3)
    {
    alert("number 2 is large")

   }
else if (num3>num1&&num3>num2)
{
    alert("number 3 is large")
}
else{
    alert("all number is equal")
}


