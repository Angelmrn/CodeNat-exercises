function multVect(vect1, vect2) {

  var result = 0; 
  for (var i = 0; i < 3; i++) {
    result += vect1[i] * vect2[i]; 
  }

  return result; 
}


console.log(multVect([1, 2, 3], [1, 2, 3]));
console.log(multVect([2, 4, 6], [2, 4, 6])); 
console.log(multVect([1, 1, 1], [0, 1, -1]));
console.log(multVect([1, 2, 3], [0, 0, 0]));