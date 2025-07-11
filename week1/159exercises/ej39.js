function returnbase(num1, num2){
    sum = num1 + num2;
    if(sum >= 50 && sum <= 80){
        return 65;
    }else if(sum <50){
        return "Sum is less than 50";
    }else{
        return 80;
    }
}

console.log(returnbase(20, 30)); // output: 65
console.log(returnbase(20, 40)); // output: 65
console.log(returnbase(90, 80)); // output: 80
console.log(returnbase(-30, 20)); // output: "Sum is less than 50"