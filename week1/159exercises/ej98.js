function changeupplow(str) {
  var upper = 0; 
  var lower = 0;

  for (var i = 0; i < str.length; i++) {
    // Check if the current character is an uppercase 
    if (/[A-Z]/.test(str[i])) {
      upper++;
    } else {
      lower++; 
    }
  }
  if (lower > upper) {
    return str.toLowerCase(); 
  }else{
    return str.toUpperCase(); 
  }
}

console.log(changeupplow("Write"));
console.log(changeupplow("PHp")); 
console.log(changeupplow("JavaScript"));