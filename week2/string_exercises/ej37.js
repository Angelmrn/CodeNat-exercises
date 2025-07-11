compareStrings = function (str1, str2) {

    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(compareStrings('abcd', 'AbcD')); 
console.log(compareStrings('ABCD', 'Abce')); 