function repSpecifiedVal(arr, oldVal, newVal) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === oldVal) {
      arr[i] = newVal; 
    }
  }
  return arr; 
}

console.log(repSpecifiedVal([1, 2, 3, 2, 2, 8, 1, 9], 2, 5));  
console.log(repSpecifiedVal([1, 2, 3, 2, 2, 8, 1, 9], 1, 5));