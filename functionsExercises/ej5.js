function FirstUppercase(str) {

  var arr = str.split(' ');
  var newStr = [];

  for (var i = 0; i < arr.length; i++) {
    newStr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));// Capitalize the first letter of each word
  }
  return newStr.join(' ');
}

console.log(FirstUppercase("the quick brown fox")); 
console.log(FirstUppercase("hello world"));