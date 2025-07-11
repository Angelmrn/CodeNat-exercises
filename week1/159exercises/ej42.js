function typeofnumbers(num1, num2, num3){
    if (num2 > num1 && num3 > num2){
        return "strict mode";
    }else if(num3 > num2){
        return "Soft mode";
    }else{
        return "No mode";
    }
}

console.log(typeofnumbers(1, 2, 3)); // strict mode
console.log(typeofnumbers(3, 2, 1)); // No mode
console.log(typeofnumbers(24, 22, 31)); // No mode