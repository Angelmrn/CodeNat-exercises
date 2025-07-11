function letterOccurrence(str1) {

  var dict = {};

  str1.replace(/\S/g, function(l) {//go through each letter non-whitespace character
    dict[l] = (isNaN(dict[l]) ? 1 : dict[l] + 1);//if the character appears for the first time set it to 1, otherwise increment it
  });

  return dict;
}

console.log(letterOccurrence("The quick brown fox jumps over the lazy dog")); 