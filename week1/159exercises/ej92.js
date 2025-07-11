function Adjacentiff(arr) {
  var max = -1;    
  var temp;         

  for (var i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1]);// Calculate the absolute difference
    max = Math.max(max, temp);// Update the maximum difference
  }

  return max;   
}

console.log(Adjacentiff([1, 2, 3, 8, 9]));   // 5
console.log(Adjacentiff([1, 2, 3, 18, 9]));  // 15
console.log(Adjacentiff([13, 2, 3, 8, 9]));  // 11 

