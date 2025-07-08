function trailing_zeros_factorial(n) {
    var result = 0; 
    // Loop through multiples of 5 to n
    for (var i = 5; i <= n; i += 5) { 
        var num = i; 
        // Count how many times 5 divides into the number
        while (num % 5 === 0) { 
            num /= 5; 
            result++;   
        }
    }
    return result;  
}


console.log(trailing_zeros_factorial(8));   
console.log(trailing_zeros_factorial(9)); 
console.log(trailing_zeros_factorial(10));  
console.log(trailing_zeros_factorial(11));
console.log(trailing_zeros_factorial(12));