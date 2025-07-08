function largest(num1, num2){
    if (num1 < 40 || num1 > 60 || num2 < 40 || num2 > 60) {
        return"Numbers don't fit in range";
    }else {
        return num1 > num2 ? num1 : num2;
    }
}

console.log(largest(46, 60));
console.log(largest(70, 95));
console.log(largest(50, 89));
