zeroFill = function (number, width, osign) {
    var num = '' + Math.abs(number),// Convert the number to a string and take its absolute value
        zerosN = width - num.length,// Calculate the number of zeros needed to fill the width
        sign = number >= 0;// Determine if the number is positive or negative

    return (sign ? (osign ? '+' : '') : '-') +// If the number is positive, add a plus sign if osign is true, otherwise add a minus sign
        Math.pow(10, Math.max(0, zerosN)).toString().substr(1) + num;// Create a string of zeros based on the calculated number of zeros needed and concatenate it with the number
}

console.log(zeroFill(120, 5, '-')); 
console.log(zeroFill(29, 4));
console.log(zeroFill(5, 3, true));