function numPrimefactors(num) {
 
  var is_prime = function(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
        }
        return true;
    }

  const result = [];
  
  // Loop through numbers from 2 to 'num'
  for (let i = 2; i <= num; i++) {
    // While 'i' is a prime factor and divides 'num' evenly
    while (is_prime(i) && num % i === 0) {
    // Check if 'i' is not already in the result array
      if (!result.includes(i)) result.push(i);
      num /= i; 
    }
  }
  return result;
}

// Test cases
console.log(numPrimefactors(100));
console.log(numPrimefactors(101));
console.log(numPrimefactors(103));
console.log(numPrimefactors(104));
console.log(numPrimefactors(105));