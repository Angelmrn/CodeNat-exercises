function reverseNum(num){
    num = num.toString().split("").reverse().join("");
    return num;
}
//change the return type to number
console.log(Number(reverseNum(12345))); // Output: "54321"