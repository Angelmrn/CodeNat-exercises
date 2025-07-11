function sumint(num1, num2){
    if(num1 == num2){
        return (num1 + num2) * 3;
    }else{
        return num1 + num2;
    }
}

console.log(sumint(3, 3)); // Output: 18
console.log(sumint(3, 4)); // Output: 7