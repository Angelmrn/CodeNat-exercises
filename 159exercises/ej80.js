function swapelements(arr){
    if(arr.length < 2) {
        return "The array is too short"; 
    }else{
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];// Swap the first and last elements
    }
    return arr;
}

console.log(swapelements([1, 2, 3, 4]));
console.log(swapelements([0, 2, 1]));
console.log(swapelements([3])); 