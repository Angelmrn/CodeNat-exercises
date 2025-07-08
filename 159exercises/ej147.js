function sumDigitsFromString(str) {

  var sum = 0; 

  for (var i = 0; i < str.length; i++) {
    if (/[0-9]/.test(str[i])){
        sum += parseInt(str[i]);
    }
  }
  return sum;
}

console.log(sumDigitsFromString("abcd12efg9"));
console.log(sumDigitsFromString("w3resource"));
console.log(sumDigitsFromString("12345"));
console.log(sumDigitsFromString("a1b2c3d4e5f6g7h8i9j0"));