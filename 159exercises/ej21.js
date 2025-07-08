function addpy(str){
    if(str === null || str === undefined || str.substring(0,2) === "py"){ 
        return str;
    }else{
        return "py" + str;
    }
}

console.log(addpy("python")); // Output: python
console.log(addpy("pyjava")); // Output: pyjava
console.log(addpy("java")); // Output: pyjava
console.log(addpy("")); // Output: py
console.log(addpy(null)); // Output: null