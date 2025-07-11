lowerEveryWord = function (str) {
    return str.replace(/\w\S*/g, 
        function(txt) {// Go through each word in the string
        return txt.substr(0).toLowerCase();
    });
}
console.log(lowerEveryWord('JS STRING EXERCISES'));