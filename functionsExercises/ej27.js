function Palindrome(str1) {

    var rev = str1.split("").reverse().join("");// Split the string into an array of characters, reverse it, and join it back into a string
    return str1 == rev;
}

function longestPalindrome(str1) {
    var max_length = 0, longestP = '';

    for (var i = 0; i < str1.length; i++) {
        var subs = str1.substr(i, str1.length);

        for (var j = subs.length; j >= 0; j--) {
            var sub_subs_str = subs.substr(0, j);

            // Continue to the next iteration if the sub-substring has length 0 or 1
            if (sub_subs_str.length <= 1)
                continue;

            if (Palindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;// Update the maximum length if the current palindrome is longer
                    longestP = sub_subs_str;// Update the longest palindrome found
                }
            }
        }
    }
    return longestP;
}

console.log(longestPalindrome("abracadabra"));
console.log(longestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 
console.log(longestPalindrome("ABCDDCBA"));