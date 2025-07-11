function evenDig(num) {

  var conter = 0;
  
  while (num) {
    
    conter += num % 2 === 0;// Increment 'conter' if the last digit of 'num' is even
    num = Math.floor(num / 10);// Remove the last digit by integer division
  }
  return conter; 
}

console.log(evenDig(123));
console.log(evenDig(1020));
console.log(evenDig(102));
console.log(evenDig(1234567890));
