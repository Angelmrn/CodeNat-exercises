function frequentNum(arr) {
  var ctr = [];
  var res = 0;
    // Initialize an array to count occurrences of numbers from 1 to 10
  for (var i = 0; i < 10; i++) {
    ctr.push(0);
  }

  for (var i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++;// Increment the count for the number at index arr[i] - 1
    if (ctr[arr[i] - 1] > ctr[res]) {
      res = arr[i] - 1;
    }
  }

  return res + 1;
}


console.log(frequentNum([1, 2, 3, 2, 2, 8, 1, 9])); 
console.log(frequentNum([1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10]));