function LargerThanVal(val) {

   return function(evalue) {// The function takes an element (evalue) from the array
      return (evalue >= val);// Check if the element is greater than or equal to the given value
   };
}

var test1 = [11, 45, 4, 31, 64, 10].filter(LargerThanVal(10));
console.log(test1);
var test2 = [11, 45, 4, 31, 64, 10].filter(LargerThanVal(20));
console.log(test2);