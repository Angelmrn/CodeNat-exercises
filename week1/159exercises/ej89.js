function check_arithmetic_Expression(num1, num2, num3) {

  return num1 + num2 == num3 || 
         num1 * num2 == num3 || 
         num1 / num2 == num3 || 
         num1 - num2 == num3;
}


console.log(check_arithmetic_Expression(10, 25, 35));   
console.log(check_arithmetic_Expression(10, 25, 250));  
console.log(check_arithmetic_Expression(30, 25, 5));   
console.log(check_arithmetic_Expression(100, 25, 4.0)); 
console.log(check_arithmetic_Expression(100, 25, 25));  