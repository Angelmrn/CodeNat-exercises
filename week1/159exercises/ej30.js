function checkscript(str){
    if (str.length < 6){
        return str;
    }
    
    let result = str;

    if(str.substring(10,4) == "Script"){
        result = str.substring(0, 4) + str.substring(10,str.length);

    }
    return result;
}

console.log(checkscript("JavaScript")); // Output: "Java"
console.log(checkscript("CoffeeScript")); // Output: "CoffeeScript"
console.log(checkscript("TypeScript")); // Output: "Type"
console.log(checkscript("Script")); // Output: "Script"