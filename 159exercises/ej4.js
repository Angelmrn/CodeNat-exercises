//Define the length of the triangle's sides
var side1 = 5;
var side2 = 6
var side3 = 7;

//Calculate the semi-perimeter
var sp = (side1 + side2 + side3) / 2;
//Calculate the area using Heron's formula
var area = Math.sqrt(sp * ((sp - side1) * (sp - side2) * (sp - side3)));

console.log("The area is: " + area);//Log the area of the triangle