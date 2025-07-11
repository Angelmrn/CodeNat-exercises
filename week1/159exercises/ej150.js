function swap_adjacent_digits(num) {
    
    if (num.toString().length % 2 != 0) {
        return false;
    }

    var result = 0;
    var x = 1;

    while (num != 0) {
       
        var dg1 = num % 10,
            dg2 = ((num - dg1) / 10) % 10;

        result += x * (10 * dg1 + dg2);
        num = Math.floor(num / 100);
        x *= 100;
    }
    return result; 
}


console.log(swap_adjacent_digits(15));  
console.log(swap_adjacent_digits(1234));  
console.log(swap_adjacent_digits(123456));  
console.log(swap_adjacent_digits(12345));  