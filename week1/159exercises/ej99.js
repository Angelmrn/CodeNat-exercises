function stringMatch(str1, str2) {
  var first_set = str1.split('');
  var second_set = str2.split('');
  var result = true;

  first_set.sort();
  second_set.sort();

  for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
    if (first_set[i] !== second_set[i]) {
      result = false; 
    }
  }

  return result; 
}

console.log(stringMatch("xyz", "zyx"));
console.log(stringMatch("xyz", "zyp"));
console.log(stringMatch("xyz", "xyzz"));