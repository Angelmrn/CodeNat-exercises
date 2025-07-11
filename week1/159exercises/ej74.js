function maxval(arr){
    max = arr[0] > arr[2] ? arr[0] : arr[2];//returns the maximum value between the first and third elements of the array

    arr[0] = max;
    arr[1] = max; 
    arr[2] = max; 

    return arr;

}

console.log(maxval([20, 30, 40]));
console.log(maxval([-7, -9, 0])); 
console.log(maxval([12, 10, 3]));