capitalize = function(str1){

  return str1.charAt(0).toUpperCase() + str1.slice(1);// Capitalize the first character and concatenate it with the rest of the string
}    
console.log(capitalize('js string exercises'));
console.log(capitalize('javaScript string exercises'));