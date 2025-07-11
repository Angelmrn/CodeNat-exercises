isUpperCase = function (str, index) {

    return str.charAt(index).toUpperCase() === str.charAt(index);//compare the character at the specified index with its uppercase version
}
console.log(isUpperCase('Js STRING EXERCISES', 1));
console.log(isUpperCase('Js STRING EXERCISES', 2));