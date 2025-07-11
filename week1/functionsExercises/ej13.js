function factors(num) {

  var num_factors = [], i;

  // Iterate through numbers from 1 to the square root of num to find factors
  for (i = 1; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      num_factors.push(i);
      if (num / i !== i){
        num_factors.push(num / i);
      }
    }
  }
  // Sort the factors in ascending order
  num_factors.sort(function(x, y) {
    return x - y;
  });

  return num_factors;
}

console.log(factors(15));
console.log(factors(16));
console.log(factors(17));