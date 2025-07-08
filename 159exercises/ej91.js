function consecutivesum(arr, num) {
  let result = 0;
  let temp_sum = 0;
  for (var i = 0; i < num - 1; i++) {
    temp_sum += arr[i];
  }
  
  for (var i = num - 1; i < arr.length; i++) {
    temp_sum += arr[i];
    if (temp_sum > result) {
      result = temp_sum;
    }
    temp_sum -= arr[i - num + 1];
  }
  return result;
}

console.log(consecutivesum([1, 2, 3, 14, 5], 2))
console.log(consecutivesum([2, 3, 5, 1, 6], 3))
console.log(consecutivesum([9, 3, 5, 1, 7], 2))