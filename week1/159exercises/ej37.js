function lowerupper(str){
    if(str.length < 3){
        return str.toUpperCase();

    }

    firstpart = (str.substring(0, 3)).toLowerCase();
    lastpart = (str.substring(3, str.length));

    return firstpart + lastpart;
}

console.log(lowerupper("hello")); // Output: "hello"
console.log(lowerupper("HELLO")); // Output: "helLO"
console.log(lowerupper("Ha")); // Output: "HA"
