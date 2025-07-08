function identityMatrix(matrix_data) {

  for (var i = 0; i < matrix_data.length; i++) {
    rows = matrix_data.length;
    cols = matrix_data[i].length;
    if (rows != cols) {
      console.log("Matrix should be a square matrix");
      return false;
    }
  }
  // Loop to verify if the matrix is an identity matrix
  for (var i = 0; i < matrix_data.length; i++) {
    for (var j = 0; j < matrix_data.length; j++) {
        // Check if the diagonal elements are 1 and non-diagonal elements are 0
      if (matrix_data[i][j] !== 1 && i === j || matrix_data[i][j] && i !== j) {
        return false;
      }
    }
  }
  return true; 
}

console.log(identityMatrix([[1, 0, 0, 2], [0, 1, 0], [0, 0, 1]])); 
console.log(identityMatrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
console.log(identityMatrix([[1, 0, 1], [0, 1, 0], [0, 0, 1]])); 
console.log(identityMatrix([[1, 0, 0], [0, 2, 0], [0, 0, 1]])); 