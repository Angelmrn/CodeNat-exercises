function evenOcurrence(arr, num) {

    var result = 0; 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] !== num) {
            result++; 
        }
        if (arr[i] === num) { 
            return result; 
        }
    }
    return -1; 
}


console.log(evenOcurrence([1, 2, 3, 4, 5, 6, 7, 8], 5));  
console.log(evenOcurrence([1, 3, 5, 6, 7, 8], 6)); 
console.log(evenOcurrence([1, 2, 3, 4, 5, 6, 7, 8], 8));
console.log(evenOcurrence([1, 2, 3, 4, 5, 6, 7, 8], 2));