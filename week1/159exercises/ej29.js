function intrange50and99(num1, num2, num3){
    if(num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99 || num3 >= 50 && num3 <= 99){
        return true;
    }else{
        return false;
    }
}

console.log(intrange50and99(50, 90, 99)); // Output: true
console.log(intrange50and99(5, 9, 100)); // Output: false
console.log(intrange50and99(65, 89, 199));//Output : true