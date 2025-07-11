specifiedCharacter = function (str, char, pos)
{
  if(pos=='b')//Before
    return str.substring(str.indexOf(char) + 1);
  else if(pos=='a') //After
    return str.substring(0, str.indexOf(char));
  else
    return str;  
}

console.log(specifiedCharacter('w3resource: JavaScript Exercises', ':','a'));
console.log(specifiedCharacter('w3resource: JavaScript Exercises', 'E','b'));