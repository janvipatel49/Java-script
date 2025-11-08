//factorial number---numbers ka multiplication
let num=(prompt("enter a number"))
let i;
fact=1;
for(i=1;i<=num;i++)
{
    fact=fact*i;
}
alert(`factorial  of num  ${num} is ${fact}`)