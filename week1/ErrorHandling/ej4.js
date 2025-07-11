function onlyPositiveNum(num){
    if(num < 0){
        throw new Error("Error: Only positive numbers are allowed");
    }else{
        return num;
    }
}

console.log(onlyPositiveNum(5));
console.log(onlyPositiveNum(-3));