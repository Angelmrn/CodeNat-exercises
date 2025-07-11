truncateWords = function (str, limit) {
    return str.split(" ").splice(0,limit).join(" ");// Split the string into words, take the first 'limit' words, and join them back into a string
}

console.log(truncateWords('The quick brown fox jumps over the lazy dog', 4));
console.log(truncateWords('The quick brown fox jumps over the lazy dog', 8));