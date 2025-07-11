successor = function (str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz',
        result = str;

    while(str.length >= 0) {
        // Get the last character
        var last = str.charAt(--str.length),
            next = '', 
            carry = false;

        // Check if the last character is a letter
        if (isNaN(last)) {
            var index = alphabet.indexOf(last.toLowerCase());
            // If the character is not in the alphabet
            if (index === -1) {
                next = last;
                carry = true;
            }
            else {
                // Determine if the last character was uppercase
                var isUpperCase = last === last.toUpperCase();
        
                next = alphabet.charAt((index + 1) % alphabet.length);
            
                if (isUpperCase) {
                    next = next.toUpperCase();
                }
                carry = index + 1 >= alphabet.length;
                if (carry && str.length === 0) {
                    var added = isUpperCase ? 'A' : 'a'; // Determine the case of the added character
                    result = added + next + result.slice(1); 
                    break;
                }
            }
        }
        else { // If the last character is a digit
            next = +last + 1; // Get the next digit
            if(next > 9) {
                next = 0; 
                carry = true; 
            }

            if (carry && str.length === 0) {
                result = '1' + next + result.slice(1); 
                break;
            }
        }
        result = result.slice(0, str.length) + next + result.slice(str.length + 1);
        if (!carry) {
            break;
        }
    }
    return result;
}

console.log(successor('abcd'));
console.log(successor('3456'))