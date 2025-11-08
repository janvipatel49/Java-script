//fibonacci series-- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
//0+1=1, 1+1=2 , 1+2=3, 2+3=5......

let num=Number(prompt("enter aa number "))

let i;
 let a=0;
 let b=1;
 let next;
 for(i=1;i<=num;i++)
 {
    console.log(a);
   next=a+b;
   a=b;
   b=next;
 
 }


