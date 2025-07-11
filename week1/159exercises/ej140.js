function sameDigit(num) {

  var first = num % 10; 
  while (num) {
    if (num % 10 !== first) return false;
    num = Math.floor(num / 10);
  }
  return true;
}
console.log(sameDigit(1234)); 
console.log(sameDigit(4444444444));