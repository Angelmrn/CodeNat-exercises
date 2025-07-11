function lowerTriangularmatrix(matrix) {

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            // Check if the element is above the diagonal
            if (j > i && matrix[i][j] !== 0) {
                return false;
            }	
        }
    }
    return true;
}

console.log(lowerTriangularmatrix([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
console.log(lowerTriangularmatrix([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));
console.log(lowerTriangularmatrix([[1, 0, 0],[2, 0, 0], [0, 3, 0]]));