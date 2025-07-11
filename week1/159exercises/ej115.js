const diagonalMatrix = (user_matrix) => {
    // Loop through each row 
    for (let i = 0; i < user_matrix.length; i++) {
        // Loop through each column 
        for (let j = 0; j < user_matrix.length; j++) {
            
            if (i !== j && user_matrix[i][j] !== 0) 
              return false; 
        }
    }
    return true; 
}

console.log(diagonalMatrix([[1, 0, 0], [0, 2, 0], [0, 0, 3]]));
console.log(diagonalMatrix([[1, 0, 0], [0, 2, 3], [0, 0, 3]])); 
console.log(diagonalMatrix([[1, 0, 0], [0, 2, 0], [0, 0, 1]]));