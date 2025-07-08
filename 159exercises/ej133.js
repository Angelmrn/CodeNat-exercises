function typeofFraction(num) {

  return Math.abs(num[0] / num[1]) < 1 ? "Proper fraction." // Return 'Proper fraction.' if the absolute value of the division is less than 1
    : "Improper fraction."; // Otherwise, return 'Improper fraction.'
}

console.log(typeofFraction([12, 300])); 
console.log(typeofFraction([2, 4])); 
console.log(typeofFraction([103, 3]));
console.log(typeofFraction([104, 2]));
console.log(typeofFraction([5, 40]));