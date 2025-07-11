function firsthalf(str){
    if (str.length % 2 == 0){
        return str.slice(0, str.length / 2);
    }else{
        return str;
    }
}

console.log(firsthalf("Python"));      
console.log(firsthalf("JavaScript"));  
console.log(firsthalf("PHP"));           
