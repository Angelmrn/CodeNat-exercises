const alphanumericPalindrome = (str) => {
  if (typeof str !== 'string') {
    return 'It must be string';
  }
  const new_text = str.replace(/[^a-z0-9]+/ig, '').toLowerCase();

  const mid_index = new_text.length >> 1;// Calculate the midpoint index of the new string

  for (let i = 0; i < mid_index; i++) {
    if (new_text.at(i) !== new_text.at(~i)) {// Compare characters from the start and end of the string
      return false;
    }
  }
  return true;
}

console.log(alphanumericPalindrome('$22_|1372^2731|_22'));
console.log(alphanumericPalindrome('12%^&2'));
console.log(alphanumericPalindrome('234%$$%432'));
console.log(alphanumericPalindrome(1234));
console.log(alphanumericPalindrome('aba%$aba'));
console.log(alphanumericPalindrome('Aba%$aba'));