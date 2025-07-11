function vowelCount(str) {

  var vowel_list = 'aeiouAEIOU';
  var vowelCont = 0;

  for (var i = 0; i < str.length; i++) {
    // Check if the current character is a vowel
    if (vowel_list.indexOf(str[i]) !== -1) {
      vowelCont += 1;
    }
  }
  return vowelCont;
}

console.log(vowelCount("The quick brown fox")); 
console.log(vowelCount("hello world"));
console.log(vowelCount("Web Development Tutorial"));