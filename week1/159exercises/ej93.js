function maxdiff(arr) {
    var maxDif = 0;   // Initialize the variable to store the maximum difference

    // Iterate through the array elements
    for(var i = 0; i < arr.length; i++) {
        //Only consider elements that are not i
        for(var k = 0; k !== i && k < arr.length; k++) {
            var diff = Math.abs(arr[i] - arr[k]);// Calculate the absolute difference  
            maxDif = Math.max(maxDif, diff); 
        }
    }
    
    return maxDif;   
}


console.log(maxdiff([1, 2, 3, 8, 9]));  
console.log(maxdiff([1, 2, 3, 18, 9]));  
console.log(maxdiff([13, 2, 3, 8, 9]));  