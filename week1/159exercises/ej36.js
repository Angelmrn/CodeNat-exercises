function samefinal(int1, int2, int3){
    if(int1 > 0 && int2 > 0 && int3 > 0){
        return int1 % 10 === int2 % 10 && int2 % 10 === int3 % 10;
    }else{
        return false;
    }
}

console.log(samefinal(12, 22, 32)); // Output: true
console.log(samefinal(12, 22, 33)); // Output: false
console.log(samefinal(12, 22, -32)); // Output: false
console.log(samefinal(10, 10, 10)); // Output: true
console.log(samefinal(9, 9, 9)); // Output: true