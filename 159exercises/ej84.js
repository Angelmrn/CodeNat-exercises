function replacechar(str) {
  var chars = str.split("");

  for(var i = 0; i < chars.length; i++) { 
    var n = chars[i].charCodeAt() - 'a'.charCodeAt();// Convert character to a number (0-25)
    n = (n + 1) % 26;// Increment the number and wrap around using modulo 26
    chars[i] = String.fromCharCode(n + 'a'.charCodeAt()); 
  }
  return chars.join(""); 
}

console.log(replacechar("abcdxyz"));
console.log(replacechar("hello"));
console.log(replacechar("xyzabc"));