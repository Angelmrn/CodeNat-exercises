function longestWord(str) {

  var array1 = str.match(/\w[a-z]{0,}/gi);// Split the string into words using a regular expression
  var result = array1[0];// Initialize the result with the first word

  for (var i = 1; i < array1.length; i++) {
    // If the current word is longer than the result, update the result
    if (result.length < array1[i].length) {
      result = array1[i];
    } 
  }

  return result;
}

console.log(longestWord('Web Development Tutorial'));
console.log(longestWord('The quick brown fox jumped over the lazy dog'));