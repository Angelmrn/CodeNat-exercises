trimSpaces =function (str) {

    return str.replace(/^\s+|\s+$/g, '');// Remove leading and trailing spaces
}

console.log(trimSpaces('w3resource '));     
console.log(trimSpaces(' w3resource'));     
console.log(trimSpaces(' w3resource  '));  