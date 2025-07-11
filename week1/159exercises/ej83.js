function longeststr(str_ara) {
  var max = str_ara[0].length;// Inicialize the max length

  str_ara.map(val => max = Math.max(max, val.length))// Find the max length
  result = str_ara.filter(val => val.length == max);// Filter the array to get the longest strings
  return result;
}

console.log(longeststr(['a', 'ab', 'abc', 'abcd', 'abcde'])); 
console.log(longeststr(['a', 'ab', 'abc', 'abcd'])); 