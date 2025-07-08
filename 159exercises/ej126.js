function maxEven(arr) {
  // Sort the array in descending order
  arr.sort((x, y) => y - x);

  for (var i = 0; i < arr.length; i++) {
    // Check if the current number is even
    if (arr[i] % 2 == 0)
      return arr[i]; 
    }
}

console.log(maxEven([20, 40, 200]));
console.log(maxEven([20, 40, 200, 301]));
console.log(maxEven([20, 40, 200, 302, 100]));