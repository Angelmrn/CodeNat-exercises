function hashDivby3(str) {

  var digitSum = 0, 
    numleft = '0'.charCodeAt(),
    numright = '9'.charCodeAt(),
    result = [],
    mask_data = str.split(''),
    hash_pos = -1;

  for (var i = 0; i < mask_data.length; i++) {
    // Check if the character is a digit between '0' and '9'
    if (numleft <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= numright) {
      digitSum += mask_data[i].charCodeAt() - numleft; 
    } else {
      hash_pos = i; 
    }
  }

  // Loop through numbers 0 to 9 to replace '#' with digits making the number divisible by 3
  for (var i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) { 
      mask_data[hash_pos] = String.fromCharCode(numleft + i);
      result.push(mask_data.join(''));
    }
  }

  return result;
}

console.log(hashDivby3("2#0"));
console.log(hashDivby3("4#2"));
console.log(hashDivby3("1#2"));
