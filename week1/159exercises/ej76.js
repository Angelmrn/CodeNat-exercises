function newarr2(arr){
    var newArr = [];
    if(arr.length < 2){
        return "Array must have at least two elements";
    }else{
        newArr.push(arr[0], arr[arr.length -1]); // Push the first and last elements of arr into newArr
    }
    return newArr;
}

console.log(newarr2([20, 20, 30])); // Output: [20, 30]
console.log(newarr2([5, 2, 7, 8])); // Output: [5, 8]
console.log(newarr2([17, 12, 34, 78])); // Output: [17, 78]
console.log(newarr2([1, 2, 3, 4, 5])); // Output: [1, 5]
console.log(newarr2([10, 20, 30, 40, 50])); // Output: [10, 50]
console.log(newarr2([1])); // Output: "Array must have at least two elements"