HexadecimalToASCII = function (str) {
    var hex = str.toString();
    var str1 = '';
    for (var i = 0; i < hex.length; i += 2) {
        str1 += String.fromCharCode(parseInt(hex.substr(i, 2), 16));//Extract two characters from the hexadecimal string and convert them to their ASCII equivalent
    }
    return str1;
}
console.log(HexadecimalToASCII('3132'));   // Output: '12'
console.log(HexadecimalToASCII('313030')); // Output: '100'
console.log(HexadecimalToASCII('48656c6c6f20576f726c6421')); // Output: 'Hello World!'