function newarr(arr1, arr2){
    var newArr = [];
    newArr.push(arr1[1], arr2[1]); // Push the second element of arr1 and arr2 into newArr
    return newArr;
    
}

console.log(newarr([1, 2, 3], [1, 5, 6]));    // Output: [2, 5]
console.log(newarr([3, 3, 3], [2, 8, 0]));    // Output: [3, 8]
console.log(newarr([4, 2, 7], [2, 4, 5]));    // Output: [2, 4] 
console.log(newarr([1, 2, 3], [4, 5, 6]));    // Output: [2, 5]
console.log(newarr([10, 20, 30], [40, 50, 60])); // Output: [20, 50]