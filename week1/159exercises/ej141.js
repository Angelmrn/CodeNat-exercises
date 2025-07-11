function sameElementInArrays(arra1, arra2) {

  var total = 0; 

  for (var i = 0; i < arra1.length; i++) {
    for (var j = 0; j < arra2.length; j++) {
      if (arra1[i] === arra2[j]) {
        total++; 
      }
    }
  }
  return total; 
}

console.log(sameElementInArrays([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(sameElementInArrays([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(sameElementInArrays([1, 2, 3, 4], [11, 22, 33, 44]));
console.log(sameElementInArrays([1, 2, 3, 4], [0, 2, 3, 0, 5]));