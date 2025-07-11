function firstandlast(str, int) {

    return (str.substring(0, int) + str.substring(str.length - int));// Concatenate the first 'int' characters and the last 'int' characters
}

console.log(firstandlast("JavaScript", 2));
console.log(firstandlast("JavaScript", 3));