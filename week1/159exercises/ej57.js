function strcopies(str, num){
    if(num < 0){
        return false;
    }else{
        return str.repeat(num);
    }
}

console.log(strcopies("abc", 3)); // "abcabcabc"
console.log(strcopies("abc", -2)); // false
console.log(strcopies("abc", 0)); // ""