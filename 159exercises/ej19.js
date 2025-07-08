function testinteger(num){
    return ((Math.abs(100 - num) <= 20) || (Math.abs(400 - num) <= 20));
}
console.log(testinteger(10));  // Output: true
console.log(testinteger(120)); // Output: true
console.log(testinteger(90));  // Output: true
console.log(testinteger(200)); // Output: false