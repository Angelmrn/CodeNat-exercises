endsWith = function (input, string) {

    var index = input.length - string.length;// Calculate the starting index for the search

    return index >= 0 && input.indexOf(string, index) > -1;
}

console.log(endsWith('JS string exercises', 'exercises'));
console.log(endsWith('JS string exercises', 'string exercises'));