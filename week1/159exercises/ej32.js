function closestNumber(num1,num2){
    if(num1 === num2){
        return false;
    }else if (num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

console.log(closestNumber(90, 89));
console.log(closestNumber(-89, -90));
console.log(closestNumber(90, 90));