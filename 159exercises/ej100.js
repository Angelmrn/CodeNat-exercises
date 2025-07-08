function matcharray(arr1, arr2) {

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) != -1) {// Check if the element exists in the second array
      return true;
    }
  }
  return false; 
}

// Example usage
console.log(matcharray([1, 2, 3], [3, 4, 5])); 
console.log(matcharray([1, 2, 3], [5, 6, 7])); 
console.log(matcharray([1, 2, 3], [1, 2, 3]));