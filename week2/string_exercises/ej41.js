capitalizeEveryWord = function (str) {
    return str.replace(/\w\S*/g, 
        function(txt) {// Go through each word in the string
        return txt.substr(0).toUpperCase();
    });
}
console.log(capitalizeEveryWord('js string exercises'));
console.log(capitalizeEveryWord('PHP Exercises. Python Exercises.'));