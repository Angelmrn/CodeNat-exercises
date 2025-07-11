const test = (input) => {
  if (typeof input !== 'string')
  {
    return 'It must be a string.'
  }
  const pattern = /^[A-Z][A-Za-z]*$/ // Only allow words that start with an uppercase letter followed by any combination of uppercase and lowercase letters
  return pattern.test(input)
}

console.log(test("XmlStream"))      
console.log(test("IOStream"))       
console.log(test("IEnumerable"))   
console.log(test("javascript"))     
console.log(test(12356))             