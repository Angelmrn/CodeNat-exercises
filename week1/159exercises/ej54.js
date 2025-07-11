function countvowels(str){
    /*var conter = 0;
    for (var i = 0; i < str.length; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            conter++;
        }
    }
    return conter;
*/
    return str.replace(/[^aeiouAEIOU]/g, "").length;
    
}

console.log(countvowels("Python"));
console.log(countvowels("w3resource.com"));
console.log(countvowels("aeiou"));
console.log(countvowels("AEIOU")); 