function specificranges(num1, num2){
    if((num1>= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) || (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)){
        return true;
    }else{
        return false;
    }
    
}


console.log(specificranges(44,56));
console.log(specificranges(70, 95));
console.log(specificranges(50, 89));