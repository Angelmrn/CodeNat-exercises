function sumn(int) {
  
  var sum = 0;
  var index = 0;

  while (sum <= int) {
    sum += index++; // Increment sum by the current index and then increment index
  }
  return index - 2; 
}

console.log(sumn(0));
console.log(sumn(11));
console.log(sumn(15));
