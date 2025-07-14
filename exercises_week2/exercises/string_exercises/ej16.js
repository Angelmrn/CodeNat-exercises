textTruncate = function(str, length, type) {
    if (length == null) {// set default length to 100 
      length = 100;
    }
    if (type == null) {// set default type to '...'
      type = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - type.length) + type;//Substring the string to the specified length and append the type
    } else {
      return str;
    }
  };
console.log(textTruncate('We are doing JS string exercises.'))
console.log(textTruncate('We are doing JS string exercises.',19))
console.log(textTruncate('We are doing JS string exercises.',15,'!!'))