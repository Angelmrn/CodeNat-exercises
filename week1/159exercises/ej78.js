function arrwith1or3(arr){
    // Check if the array do not contains either 1 or 3
    if(arr.indexOf(1) == -1 && arr.indexOf(3) == -1){
        return true;
    }else{
        return false;
    }

}

console.log(arrwith1or3([7, 8])); 
console.log(arrwith1or3([3, 2]));  
console.log(arrwith1or3([0, 1])); 
console.log(arrwith1or3([2, 4]));
console.log(arrwith1or3([5, 6])); 