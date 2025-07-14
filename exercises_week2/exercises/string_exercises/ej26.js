removeFirstOcc = function (str, occ) {

    var index = str.indexOf(occ);// Find the index of the first occurrence of occ within str
    if (index === -1) {// If occ is not found, return the original string
        return str;
    }
    return str.slice(0, index) + str.slice(index + occ.length);
}

console.log(removeFirstOcc("The quick brown fox jumps over the lazy dog", 'the'));
console.log(removeFirstOcc("The quick brown fox jumps over the lazy dog", 'fox'));