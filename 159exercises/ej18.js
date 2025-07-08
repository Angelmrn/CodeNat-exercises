function numOrsum50(num1, num2){
    return ((num1 == 50 || num2 == 50) || (num1 + num2 == 50));
}

console.log(numOrsum50(50, 20)); // Output: true
console.log(numOrsum50(20, 30)); // Output: true
console.log(numOrsum50(20, 40)); // Output: false