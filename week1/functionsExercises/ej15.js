function exponent(num, expo) {

    var total = 1;
    for (var i = 1; i <= expo; i++) {
        total = num * total;
    }

    return total;
}

console.log(exponent(2, 3)); 
console.log(exponent(5, 4)); 
