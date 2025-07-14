repeatString = function (string, count) 
  {
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
      {
        return('Error in string or count.');
      }
    count = count | 0; // Convert count to an integer

    return new Array(count + 1).join(string);// Repeat the string 'count' times
  }

console.log(repeatString('a', 4)); 
console.log(repeatString('a')); 
console.log(repeatString('a', -2)); 
console.log(repeatString('a', Infinity));