function sumOfCubes(n) {

  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += Math.pow(i, 3);
  }
  return sum; 
}


console.log(sumOfCubes(1));
console.log(sumOfCubes(2)); 
console.log(sumOfCubes(3));
console.log(sumOfCubes(4)); 