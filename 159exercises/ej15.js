function difference(num){
    if(num <= 13){
        return 13 - num;
    }else{
        return (num - 13) * 2;
    }
}

console.log(difference(32))
console.log(difference(11))