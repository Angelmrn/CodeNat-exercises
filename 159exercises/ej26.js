function add3caracters(str){
    if(str.length <= 3){
        return false;

    }else{
       lastletters = str.substring(str.length - 3);// Get the last 3 letters of the string
       return lastletters + str + lastletters;
    }

}

console.log(add3caracters("ab"))//Output: false
console.log(add3caracters("abc"))//Output: false
console.log(add3caracters("abcd"))//Output: abcdabc