function onemultiple(num1, num2){
    // Check if either num1 or num2 is a multiple of 7 or 11, but not both
    if (!((num1 % 7 == 0 || num1 % 11 == 0) && (num2 % 7 == 0 || num2 % 11 == 0))) {
        return ((num1 % 7 == 0 || num1 % 11 == 0) || (num2 % 7 == 0 || num2 % 11 == 0));
    }else {
        return false;
    }
}


console.log(onemultiple(14, 21));
console.log(onemultiple(14, 20));
console.log(onemultiple(16, 20)); 