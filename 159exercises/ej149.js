function CapitalChange(str) {

    var newStr = "";
    
    for (var i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])){
            newStr += str[i].toLowerCase();
        }else{
            newStr += str[i].toUpperCase();
        }
    }
    return newStr; 
}


console.log(CapitalChange("w3resource")); 
console.log(CapitalChange("Germany")); 
console.log(CapitalChange("JaVaScRiPt"));