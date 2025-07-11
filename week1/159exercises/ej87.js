function checkingarray(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {  
    for (var j = i; j < arr1.length; j++) {
      
      var result = true;
      var temp = arr1[i];
        // Swap elements at indices i and j
      arr1[i] = arr1[j];
      arr1[j] = temp;
        //compare the two arrays
      for (var k = 0; k < arr1.length; k++) {
        // If any element does not match, set result to false
        if (arr1[k] !== arr2[k]) {
          result = false;
          break;
        }
      }
      // If the arrays match, return true
      if (result) {
        return true;
      }

      // Restore the original order by swapping back elements
      arr1[j] = arr1[i];
      arr1[i] = temp;
    }
  }

  // If no match is found, return false
  return false;
}


console.log(checkingarray([10, 20, 30], [10, 20, 30]));  
console.log(checkingarray([10, 20, 30], [30, 10, 20]));   
console.log(checkingarray([10, 20, 30, 40], [10, 30, 20, 40]));  
console.log(checkingarray([10, 20, 30, 40], [10, 20, 30, 40]));
console.log(checkingarray([10, 20, 30, 40], [10, 20, 40, 30])); 