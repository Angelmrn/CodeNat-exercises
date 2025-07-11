function checkvalue(num1, num2){
    if((num1 < 0 && num2 > 0 ) || (num1 > 0 && num2 < 0)){
        return true;
    }else{
        return false;
    }
}

console.log(checkvalue(2, 2));  // Output: false
console.log(checkvalue(-2, 2)); // Output: true
console.log(checkvalue(2, -2)); // Output: true
console.log(checkvalue(-2, -2)); // Output: false