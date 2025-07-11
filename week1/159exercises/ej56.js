function divisionformat(num1, num2){
    if (num1 === 0 || num2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    var result = num1 / num2;
    var format = result.toLocaleString(undefined, {maximumFractionDigits: 2});
    return format;

}

console.log(divisionformat(1000, 3)); // "333.33"
console.log(divisionformat(1000, 0)); // "Error: Division by zero is not allowed."
console.log(divisionformat(1000000, 107)); // "9,345.79"