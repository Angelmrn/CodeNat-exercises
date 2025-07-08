function errDivbyZero(num, divisor){
    if(divisor === 0){
        throw new Error("Error: You can't divide by zero");
    }else{
        return num / divisor;
    }
}

console.log(errDivbyZero(10, 2)); 
console.log(errDivbyZero(10, 0));