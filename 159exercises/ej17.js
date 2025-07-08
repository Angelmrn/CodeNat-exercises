function diference(num){
    if (num > 19){
        return (num - 19) * 3;
    }else{
        return 19 - num;
    }
}

console.log(diference(32)); // Output: 39
console.log(diference(11)); // Output: 8
console.log(diference(19)); // Output: 0