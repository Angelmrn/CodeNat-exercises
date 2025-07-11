commonSubsequence = function (text1, text2) {

  // Create a 2D array 'result' with dimensions (text1.length + 1) x (text2.length + 1) filled with null values
  const result = new Array(text1.length + 1).fill(null)
    .map(() => new Array(text2.length + 1).fill(null))
  
  function test(end1, end2) {
    if (end1 === -1 || end2 === -1) {
      return 0
    }
    // If the value at the current indices in 'result' array is not null, return that value
    if (result[end1][end2] !== null) {
      return result[end1][end2]
    }
    // If the characters at the current indices in 'text1' and 'text2' are equal
    if (text1[end1] === text2[end2]) {
      result[end1][end2] = 1 + test(end1 - 1, end2 - 1)
      return result[end1][end2]
    } else {
      // If the characters are not equal, recursively call 'test' with decremented indices
      result[end1][end2] = Math.max(
        test(end1 - 1, end2),
        test(end1, end2 - 1)
      )
      return result[end1][end2]
    }
  }
  // Start the recursive function 'test' with indices at the end of 'text1' and 'text2'
  return test(text1.length - 1, text2.length - 1)
}

console.log(commonSubsequence("abcda", "abcdef")) 
console.log(commonSubsequence("ABCD", "ACBAD")) 
console.log(commonSubsequence("pqr", "pqr")) 
console.log(commonSubsequence("pqr", "abc")) 