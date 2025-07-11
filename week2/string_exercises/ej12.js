uncamelize = function (str, separator) {
  if(typeof(separator) == "undefined") {// Default separator is space
    separator = " ";
  }
  var str = str.replace(/[A-Z]/g, 
    function (letter){ // For each uppercase letter in the string
    return separator + letter.toLowerCase();// Convert the letter to lowercase and prepend it with the separator
  });
  return str.replace("/^" + separator + "/", '');
}
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
