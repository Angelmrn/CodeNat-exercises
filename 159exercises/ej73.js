function reversearr(array) {
    
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);//takes each element and returns the element at the opposite index
}

console.log(reversearr([5, 4, 3]));  // Output: [3, 4, 5]
console.log(reversearr([1, 0, -1]));  // Output: [-1, 0, 1]
console.log(reversearr([2, 3, 1]));   // Output: [1, 3, 2] 