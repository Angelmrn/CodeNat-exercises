function concatstr(str1, str2){
    modstr1 = str1.substring(1, str1.length);// Remove the first character
    modstr2 = str2.substring(1, str2.length);// Remove the first character
    return modstr1 + modstr2;
}

console.log(concatstr("PHP", "JS"));
console.log(concatstr("A", "B"));
console.log(concatstr("AA", "BB"));