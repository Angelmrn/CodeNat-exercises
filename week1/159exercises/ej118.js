function inRange(num1, range, num2) 
{
    return range >= num1 && range <= num2; 
}

console.log(inRange(1,2,3));
console.log(inRange(1,2,-3));
console.log(inRange(1.1,1.2,1.3));
console.log(inRange(1,2,1.5));