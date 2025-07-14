changeCases = function (str) {

    return str.replace(/([a-z]+)|([A-Z]+)/g, 
        function(match, chr) {
        // For each match, if chr (lowercase letter) exists, convert it to uppercase; otherwise, convert the match (uppercase letter) to lowercase
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(changeCases('AaBbc'));
console.log(changeCases('aAbBcC'));