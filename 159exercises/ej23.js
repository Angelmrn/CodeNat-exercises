function swapletters(str){
    if (str.length <= 1){
        return str;
    }

    str2 = str.substring(1, str.length - 1);//Get the middle letters
    return (str.charAt(str.length - 1)) + str2 + str.charAt(0);//Get the last letter + middle letters + first letter
}

console.log(swapletters("a"));
console.log(swapletters("ab"));
console.log(swapletters("abc"));