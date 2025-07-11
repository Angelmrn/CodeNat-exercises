function twoint(num1, num2) {
    var result = 0, 
        x = 1;

    while (num1 > 0 && num2 > 0) {
        result += x * ((num1 + num2) % 10); 
        num1 = Math.floor(num1 / 10); 
        num2 = Math.floor(num2 / 10); 
        x *= 10; 
    }
    return result;
}

console.log(twoint(222, 911)); 
console.log(twoint(200, 900)); 
console.log(twoint(123, 456));
console.log(twoint(0, 0));