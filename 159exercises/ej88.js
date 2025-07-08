function similardivisor(num1, num2, divisor) {
  if (num1 % divisor === 0 && num2 % divisor === 0 || 
      num1 % divisor !== 0 && num2 % divisor !== 0) {
    return true; 
  }else{
    return false;
  }
}


console.log(similardivisor(10, 25, 5));
console.log(similardivisor(10, 20, 4)); 
console.log(similardivisor(10, 20, 5));