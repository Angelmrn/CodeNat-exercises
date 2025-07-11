function last3chartostart(str){
    if (str.length < 3){
        return str;
    }else{
        return str.slice(-3) + str.slice(0, -3);
    }

}

console.log(last3chartostart("Python"));
console.log(last3chartostart("JavaScript"));
console.log(last3chartostart("Hi")); 