function stringLengthSort(arr) {
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            //compare i and j elements of the array
            if (arr[i].length > arr[j].length) {
                var temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = temp; 
            }
        }
    }
    return arr;
}


console.log(stringLengthSort(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]));
console.log(stringLengthSort(["apple", "banana", "kiwi", "grape", "orange"]));
console.log(stringLengthSort(["short", "longer", "longest", "tiny"]));