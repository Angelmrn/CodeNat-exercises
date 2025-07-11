const test = (str) => { 
   if (str.length === 0) {
    return 'String should not be empty!'
   }
    if (typeof str !== 'string'){
       return 'It must be a string.'
     }

  const occurrence_Map = new Map()// Create a Map to store the occurrence count of each character

  for (const char of str) {
      // Increment the occurrence count of the current character in the Map, or set it to 1 if it doesn't exist
      occurrence_Map.set(char, occurrence_Map.get(char) + 1 || 1)
    }

  let max_char = { char: '', occur: -Infinity }

  for (const [char, occur] of occurrence_Map) {
    if (occur > max_char.occur) {
      max_char = { char, occur }// Update the max_char object if the current character's occurrence count is greater than the current maximum
    }
  }

  return max_char.char
}

console.log(test("Madam"))          
console.log(test("civic"))          
console.log(test("HellloL223LLL")) 
console.log(test(12321))            