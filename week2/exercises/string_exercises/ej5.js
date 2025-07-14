abbrev_name = function (str1) {

    var splitNames = str1.trim().split(" ");// Split the input string into an array of names using whitespace as the separator
    
    if (splitNames.length > 1) {
        return (splitNames[0] + " " + splitNames[1].charAt(0) + ".");// If there are multiple names, return the first name and the first letter of the second name followed by a dot
    }
    return splitNames[0];
};
console.log(abbrev_name("Robin Singh"));
console.log(abbrev_name("John Doe"));