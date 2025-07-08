function sumis15(num1, num2){
    return ((num1 === 15 || num2 === 15)||
            (num1 + num2 === 15)||
            (Math.abs(num1 - num2) === 15));
}


console.log(sumis15(15, 9));
console.log(sumis15(25, 15));
console.log(sumis15(7, 8));
console.log(sumis15(25, 10));
console.log(sumis15(5, 9));
console.log(sumis15(7, 9));
console.log(sumis15(9, 25)); 