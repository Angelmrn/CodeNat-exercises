uncapitalizeStr = function (str)
{ 
  return str.replace(/\w\S*/g, 
    function(txt)// go through each word in the string
       {
          return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();// convert the first character to lowercase and the rest to lowercase
       });
}

console.log(uncapitalizeStr('Js String Exercises'));
console.log(uncapitalizeStr('PHP Exercises. Python Exercises.'));