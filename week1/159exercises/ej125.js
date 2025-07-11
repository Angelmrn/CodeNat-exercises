function longestStrArr(arr) {

  var max_str = arr[0].length;
  var final = arr[0];

  for (var i = 1; i < arr.length; i++) {
    var maxi = arr[i].length;
    // Compare the length of the current string with the maximum length found so far
    if (maxi > max_str) {
      final = arr[i];
      max_str = maxi;
    }
  }

  return final;
}

console.log(longestStrArr(["ab", "a", "abcd"]));
console.log(longestStrArr(["ab", "ab", "ab"]));
console.log(longestStrArr(["abc", "ab", "abcd"]));