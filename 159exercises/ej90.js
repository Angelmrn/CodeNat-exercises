function greatiestNO(arr, num) {
  for (var i = 0; i < num; i++) {
    var max_index = i, temp = arr[i];        
	
    for (var j = i + 1; j < arr.length; j++) {
      // If the current element is greater than the element at max_index, update max_index
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }
    }
    // Swap the current element with the maximum element found
    arr[i] = arr[max_index];
    arr[max_index] = temp;
  }

 
  return arr[num - 1];
}

console.log(greatiestNO([1,2,6,4,5], 3));       
console.log(greatiestNO([-10,-25,-47,-36,0], 1)); 
console.log(greatiestNO([1,2,3,4,5], 5));
console.log(greatiestNO([1,2,3,4,5], 1));