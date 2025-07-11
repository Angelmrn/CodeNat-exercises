function copielast3(str){
    if(str.length >= 3){
        return (str.substring(str.length - 3).repeat(3));
    }else{
        return false;
    }
}

console.log(copielast3("Python 3.0"));
console.log(copielast3("JS"));
console.log(copielast3("JavaScript")); 