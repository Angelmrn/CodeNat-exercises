function Second_Greatest_Lowest(arr) {

  arr.sort(function(x, y) {// Sort the array in ascending order
    return x - y;
  });

  var uniqa = [arr[0]];
  var result = [];

  for (var j = 1; j < arr.length; j++) {
    if (arr[j - 1] !== arr[j]) {
      uniqa.push(arr[j]);// Push unique elements into the uniqa array
    }
  }
  result.push(uniqa[1], uniqa[uniqa.length - 2]);// Push the second lowest and second greatest elements into the result array
  return result.join(',');
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5])); 
console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5, 6]));