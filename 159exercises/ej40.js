function checkifis8(int1, int2){
    
    if(int1 === 8 || int2 === 8 || (int1+int2) == 8 || Math.abs(int1 - int2) == 8){
        return true;
    }else{
          return false;
    }
  
}

console.log(checkifis8(8, 2)); // Output: true
console.log(checkifis8(24, 32)); // Output: true
console.log(checkifis8(2, 10)); // Output: true
console.log(checkifis8(2, 3)); // Output: false