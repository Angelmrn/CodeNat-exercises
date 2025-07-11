function singledigit(num) {
    
    var digitSum = function(num) {
        var digit_sum = 0; 
        while (num) {
            digit_sum += num % 10; 
            num = Math.floor(num / 10); 
        }
        return digit_sum; 
    };
    var result = 0;
    while (num >= 10) {
        result += 1;
        num = digitSum(num);
    }

    return result; 
}

console.log(singledigit(123));  
console.log(singledigit(156));  
console.log(singledigit(9999));