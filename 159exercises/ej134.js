function reverseAlphabetOrder(str) {

    var result = [];

    for (var i = 0; i < str.length; i++) {
        var strOrder = str.charCodeAt(i) - 'a'.charCodeAt(0);
        var strReverse = 25 - strOrder + 'a'.charCodeAt(0);
        result.push(String.fromCharCode(strReverse)); // Convert the character code back to character and add it to the result array
    }
    return result.join("");
}

console.log(reverseAlphabetOrder("abcxyz"));
console.log(reverseAlphabetOrder("python")); 
console.log(reverseAlphabetOrder("javascript"));

