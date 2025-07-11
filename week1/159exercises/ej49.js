function changeletter(str){
    var letter = str.split("");

    for(var i = 0; i < letter.length; i++){
        switch(letter[i]){
            case " ":
                break;
            case "z":
                letter[i] = "a";
                break;
            case "Z":
                letter[i] = "A";
                break;
            default:
                letter[i] = String.fromCharCode(1 + letter[i].charCodeAt(0));
        }
        switch(letter[i]){
            case "a": case"e": case"i": case"o": case"u":
                letter[i] = letter[i].toUpperCase();
        }
    }
    return letter.join("");
}

console.log(changeletter("PYTHON"));
console.log(changeletter("W3R"));
console.log(changeletter("php"));