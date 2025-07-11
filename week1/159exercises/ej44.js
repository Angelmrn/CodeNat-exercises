function lessby20(num1, num2, num3){
    return ((num1 >= 20 && num1 < num2 && num1 < num3) ||
            (num2 >= 20 && num2 < num1 && num2 < num3) ||
            (num3 >= 20 && num3 < num1 && num3 < num2)
            );
}

console.log(lessby20(10, 30, 40));
console.log(lessby20(20, 10, 30));
console.log(lessby20(21, 66, 75));