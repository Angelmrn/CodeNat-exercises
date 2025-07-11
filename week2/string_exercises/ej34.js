titleCase = function  (str) {
  if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();

 return str.replace(/\w\S*/g, function(txt)// Convert the first character of each word to uppercase and the rest to lowercase
 {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log(titleCase('PHP exercises. python exercises.'));
