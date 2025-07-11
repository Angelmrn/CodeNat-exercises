function prefixSums(arr) {

  var new_arr = [];

  for (var i = 0; i < arr.length; i++) {
    new_arr[i] = 0;
    
    // Compute the prefix sum up to index 'i' in the input array
    for (var j = 0; j < i + 1; j++) {
      new_arr[i] += arr[j];
    }
  }

  return new_arr;
}

// Test cases
console.log(prefixSums([1, 2, 3, 4, 5]));
console.log(prefixSums([1, -2, 3, -4, 5]));
console.log(prefixSums([1, 2, -3, 4, 5]));
console.log(prefixSums([1, 2, 3, 4, -5]));