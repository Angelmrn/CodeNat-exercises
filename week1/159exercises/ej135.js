function removeDuplicate(str) {

  var arr_char = str.split("");
  var result_arr = [];

  for (var i = 0; i < arr_char.length; i++) {
    //Compare the first occurrence and last occurrence of each character
    if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
      result_arr.push(arr_char[i]);// If the character is unique, add it to result_arr
  }

  return result_arr.join("");
}

console.log(removeDuplicate("abcdabc"));
console.log(removeDuplicate("python"));
console.log(removeDuplicate("abcabc"));
console.log(removeDuplicate("1365451"));
console.log(removeDuplicate("aabbccddeeffgghh"));