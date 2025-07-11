camelizeString = function (str) {
    return str.replace(/\W+(.)/g, 
        function(match, chr) {// For each match of one or more non-word characters followed by a character
        return chr.toUpperCase();// Convert the character to uppercase
    });
}

// Output the result of camelize function for different input strings
console.log(camelizeString("JavaScript Exercises"));
console.log(camelizeString("JavaScript exercises"));
console.log(camelizeString("JavaScriptExercises"));
