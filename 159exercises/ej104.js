function difbetwarr(arr, n) {
    var max_val = -1; 
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) { 
            var x = Math.abs(arr[i] - arr[j]);//x = the absolute difference between two elements
            if (x <= n) {//if the absolute difference is less than or equal to n
                max_val = Math.max(max_val, x);
            }
        }
    }
    return max_val; 
}


console.log(difbetwarr([12, 10, 33, 34], 10));
console.log(difbetwarr([12, 10, 33, 34], 24));
console.log(difbetwarr([12, 10, 33, 44], 40)); 