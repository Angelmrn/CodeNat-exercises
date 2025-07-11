function threenum(num1, num2, num3){
    if(num1 === num2 && num2 === num3){
        return 30;
    }else if(num1 === num2 || num2 == num3 || num1 == num3){
        return 40;
    }else{
        return 20;
    }
}

console.log(threenum(2, 2, 2)); //Output: 30
console.log(threenum(2, 2, 3)); //Output: 40
console.log(threenum(2, 3, 4)); //Output: 20