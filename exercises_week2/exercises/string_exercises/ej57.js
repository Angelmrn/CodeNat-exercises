const test = (input) => {
    if (input.length === 0) {
    return 'String should not be empty!'
   }
    if (typeof input !== 'string'){
       return 'It must be a string.'
     }
   const char_ctr = [...input].reduce((obj, el) => {// Convert the string into an array of characters and reduce it to an object with character counts
    obj[el] = obj[el] ? obj[el] + 1 : 1// Increment the count for each character or initialize it to 1 if it doesn't exist
    return obj
  }, {})
  // Check if there are at most one character with an odd count (indicating the possibility of a palindrome)
  return Object.values(char_ctr).filter(count => count % 2 !== 0).length <= 1
}

console.log(test("maamd"))  
console.log(test("civic"))  
console.log(test("IO"))     
console.log(test(12321))   