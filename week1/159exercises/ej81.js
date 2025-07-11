function addingdigits(int){
    return int % 10 + Math.floor(int/10)//int % 10 gives the last digit, Math.floor(int/10) gives the rest of the number
}

console.log(addingdigits(25));  
console.log(addingdigits(50));  
console.log(addingdigits(99));
