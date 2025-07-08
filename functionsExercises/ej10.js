function identityMatrix(n) {
    // Iterate through each row
    for (var i = 0; i < n; i++) {
        // Iterate through each column
        for (var j = 0; j < n; j++) {
            // Check if the current position is on the diagonal (i equals j)
            if (i === j) {
                console.log(' 1 ');
            } else {
                console.log(' 0 ');
            }
        }
        console.log('_________________________');
    }
}

identityMatrix(3); 