let length = parseFloat(prompt("Enter length of rectangle:"));
let breadth = parseFloat(prompt("Enter breadth of rectangle:"));
let rectangleArea = (length, breadth) => length * breadth;

console.log("Area of rectangle: " + rectangleArea(length, breadth));
