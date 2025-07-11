function roundNumIndex(arr) {

  var result = 0; 

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      result = i;
    }
  }
  return result;
}

console.log(roundNumIndex([1, 22, 30, 54, 56]));  
console.log(roundNumIndex([1, 22, 32, 54, 56]));    
console.log(roundNumIndex([1, 22, 32, 54, 60]));
console.log(roundNumIndex([1, 70, 32, 54, 22]));