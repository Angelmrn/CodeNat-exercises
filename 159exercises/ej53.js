function abseparate(str){
    return (/a...b/).test(str) || (/b...a/).test(str); // Test if 'a' and 'b' are separated by exactly three characters

}

console.log(abseparate("Chainsbreak"));
console.log(abseparate("pane borrowed"));
console.log(abseparate("abCheck")); 
console.log(abseparate("ab"));

