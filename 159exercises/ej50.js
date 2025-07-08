function capitalletter(str){
    str = str.split(" ");
    for(var i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}

console.log(capitalletter("hello world")); // "Hello World"
console.log(capitalletter("javaScript is fun")); // "JavaScript Is Fun"