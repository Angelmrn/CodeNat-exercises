function test_string(str) {

  var is_lower_case = function(symbol) {
    if ('a' <= symbol && symbol <= 'z') {
      return true;
    }
    return false;
  }

  var is_upper_case = function(symbol) {
    if ('A' <= symbol && symbol <= 'Z') {
      return true;
    }
    return false;
  }

  var lowStart = is_lower_case(str[0]);
  var upStart = is_upper_case(str[0]);

  if (!(lowStart || upStart)) {
    return false;
  }

  for (var i = 1; i < str.length; i++) {
    if (i % 2) {
      if (is_lower_case(str[i]) === lowStart ||
        is_upper_case(str[i]) === upStart) {
        return false; 
      }
    } else {
      if (is_lower_case(str[i]) !== lowStart ||
        is_upper_case(str[i]) !== upStart) {
        return false; 
      }
    }
  }

  return true; 
}

console.log(test_string('xYr'));   
console.log(test_string('XXyx'));  