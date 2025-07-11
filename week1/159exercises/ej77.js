function arrwith1or3(arr){
    // Check if the array contains either 1 or 3
    //Returns the index number of the first occurrence of 1 or 3, or -1 if neither is present
    if(arr.indexOf(1) !== -1 || arr.indexOf(3) !== -1){
        return true;
    }else{
        return false;
    }

}

console.log(arrwith1or3([1, 5]));    
console.log(arrwith1or3([2, 3]));    
console.log(arrwith1or3([7, 5]));    
console.log(arrwith1or3([1, 2, 3])); 
console.log(arrwith1or3([4, 5]));