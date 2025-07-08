function swapArr(arr) {

  // Check if the array length is even
  if ((arr.length % 2) !== 0) {
    return false;
  }
  // Swap the halves of the array
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i]; 
    arr[i] = arr[i + arr.length / 2];
    arr[i + arr.length / 2] = temp;
  }
  return arr; 
}

console.log(swapArr([1, 2, 3, 4, 5, 6]));
console.log(swapArr([1, 2, 3, 4, 5, 6, 7])); 