//take number of days and convert in year month and remaining days
let day=Number(prompt("enter a day"))
let year= parseInt(day/365)
let reday= parseInt(day%365)
let month= parseInt(reday/30)
alert(`${year} year: ${month} month: ${reday} reday:`);
