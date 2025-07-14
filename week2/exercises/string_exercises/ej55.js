const test = (string) => {
  if (typeof string !== 'string') {
    return 'It must be a string.';
  }
  
  const result = new Set();
  
  for (const ch of string.toLowerCase()) {
    if (/[a-z]/.test(ch)) {
      result.add(ch);
    }
  }
  
  return result.size === 26;
};

// Test the `test` function with different input strings and log the results
console.log(test("The quick brown fox jumps over the lazy dog"));
console.log(test("Waltz, bad nymph, for quick jigs vex."));
console.log(test("The five boxing wizards jump quickly."));
console.log(test("The boxing wizards jump quickly."));
console.log(test(12356));