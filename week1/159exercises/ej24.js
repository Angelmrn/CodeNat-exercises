function frontandback(str){
    fletter = str.substring(0,1);// Get the first letter of the string
    return fletter + str + fletter;

}

console.log(frontandback("a"))//Output: "aaa"
console.log(frontandback("ab"))//Output: "aaba"
console.log(frontandback("abc"))//Output: "aabca"