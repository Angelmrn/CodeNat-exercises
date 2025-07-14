countSubstring = function (str, sub_str) 
{
    str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return str.length + 1;// If sub_str is empty, return the length of str + 1
    }

    subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');// Escape special characters in sub_str to use it in a regular expression
    
    return (str.match(new RegExp(subStr, 'gi')) || []).length;// Count occurrences of sub_str in str using a case-insensitive regular expression
}

console.log(countSubstring("The quick brown fox jumps over the lazy dog", 'the'));
console.log(countSubstring("The quick brown fox jumps over the lazy dog", 'fox'));
console.log(countSubstring("The quick brown fox jumps over the lazy dog", '')); // Test with an empty substring
