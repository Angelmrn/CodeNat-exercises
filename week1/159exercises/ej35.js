function checkchar(str, char){
    let count = 0;
    for(let i = 0 ; i < str.length; i++){
        if ((str.charAt(i) == char) &&(i >= 1 && i <= 3)){
            count = 1;
            break;
        }
    }
    if (count == 1){
        return true;
    } else {
        return false;
    }
}

console.log(checkchar("hello", "e")); // true
console.log(checkchar("Python", "y")); // true
console.log(checkchar("JavaScript", "a")); // true
console.log(checkchar("Console", "C")); // false
