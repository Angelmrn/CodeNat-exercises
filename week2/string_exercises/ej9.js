capitalize = function (str)
{
  return str.replace(/\w\S*/g, 
    //For each word in the string, capitalize the first letter and convert the rest to lowercase
    function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});// Capitalize the first letter of each word and convert the rest to lowercase
}
console.log(capitalize('js string exercises'));