function Permutation(arr, num) {
    
    for (var i = 0; i < num; i++) {
        // Check if the number is in the array
        if (arr.indexOf(i + 1) < 0) {
            return false;
        }
    }
    return true;
}


console.log(Permutation([1, 2, 3, 4, 5], 5)); 
console.log(Permutation([1, 2, 3, 5], 5)); 
console.log(Permutation([1, 2, 3, 4, 5], 6));
console.log(Permutation([1, 2, 3, 4, 5], 4));