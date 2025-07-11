function increasingSequence(num) {
  var arr_num = ('' + num).split('');// Convert the number to a string and split it into an array of digits
  
  for (var i = 0; i < arr_num.length - 1; i++) {
    
    if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1])) {
      return false; 
    }
  }
  return true; 
}

// Test cases
console.log(increasingSequence(123));
console.log(increasingSequence(1223));
console.log(increasingSequence(45677));
console.log(increasingSequence(123456789));