isLowerCase = function (str, index) {

    return str.charAt(index).toLowerCase() === str.charAt(index);//compare the character at the specified index with its lowercase version
}
console.log(isLowerCase('Js STRING EXERCISES', 1));
console.log(isLowerCase('Js STRING EXERCISES', 2));