reverseWords = function test(text) {
   if (text.length === 0) {
    return 'String should not be empty!'
     }
   if (typeof text !== 'string'){
       return 'It must be a string.'
     }

   var words = [];

  words = text.match(/\S+/g);// Split the input text into an array of words that matches non-whitespace characters
  var reverse_word = "";
  for (var i = 0; i < words.length; i++) {
     reverse_word += words[i].split('').reverse().join('') + " ";
  }
  return reverse_word
}
console.log(reverseWords("abc"))  
console.log(reverseWords("JavaScript Exercises"))  
console.log(reverseWords(1234))  