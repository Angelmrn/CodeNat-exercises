function detectType(value) {

  var types = [Function, RegExp, Number, String, Boolean, Object];// Array of data types to check against
  
  if (typeof value === "object" || typeof value === "function") {
    for (var i = 0; i < types.length; i++) {
      if (value instanceof types[i]) {
        return types[i];
      }
    }
  }else{
    return typeof value;
  }
}

console.log(detectType(12));
console.log(detectType('w3resource'));
console.log(detectType(false)); 