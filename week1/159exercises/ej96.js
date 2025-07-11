function sumDif(arr) {
    var result = 0;
    for (var i = 1; i < arr.length; i++) {
        result += Math.abs(arr[i] - arr[i - 1]);// Calculate the absolute difference
    }
    return result;
}

console.log(sumDif([1, 2, 3, 2, -5]));  
console.log(sumDif([1, 2, 3, 2, -5, 10]));
console.log(sumDif([1, 2, 3, 2, -5, 10, 20]));