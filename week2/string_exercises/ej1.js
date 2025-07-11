is_string = function (input) {
  if (Object.prototype.toString.call(input) === '[object String]') // Check if the type of input is a string by examining its internal [[Class]] property
    return true;
  else
    return false;
}

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));