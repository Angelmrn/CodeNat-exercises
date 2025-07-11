function intrange50and99(num1, num2){
    if(num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99){
        return true;
    }else{
        return false;
    }
}

console.log(intrange50and99(12, 101)); // Output: false
console.log(intrange50and99(52, 80)); // Output: true
console.log(intrange50and99(15, 99)); // Output: true