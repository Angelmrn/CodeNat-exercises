function largestnumber(num1,num2,num3){
    if(num1 >= num2 && num1 >= num3){
        return num1;
    }else if(num2 >= num1 && num2 >= num3){
        return num2;
    }else {
        return num3;
    }
}

console.log(largestnumber(1,0,1));
console.log(largestnumber(0,-10,-20));
console.log(largestnumber(1000, 510, 440)); 
