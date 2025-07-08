function logicalNOR(a, b) {
  return (!a && !b); // Returns true only if both a and b are false
}

console.log(logicalNOR(true, false));  
console.log(logicalNOR(false, false)); 
console.log(logicalNOR(true, true));