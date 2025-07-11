function divint(num, div) {

    if (div == 1)
        return num;
    else {
        // Loop till the number is no longer divisible by the divisor
        while (num % div === 0) {
            num /= div; 
        }
        return num; 
    }
}


console.log(divint(-12, 2)); 
console.log(divint(13, 2)); 
console.log(divint(13, 1)); 
console.log(divint(12, 3));
console.log(divint(12, 4));