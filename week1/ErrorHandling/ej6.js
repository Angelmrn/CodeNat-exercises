function errEmptyStr(str){
    if(str.length === 0){
        throw new Error("The string is empty");
    }else{
        return str;
    }
}

try{
    console.log(errEmptyStr("Hello"));
    console.log(errEmptyStr(""));
}catch(err){
    console.log("Error: ", err.message);
}