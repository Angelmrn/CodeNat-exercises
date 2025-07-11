function integerrange(int){
    if (int >= 40 && int <= 10000){
        return true;
    }else{
        return false;
    }
}

console.log(integerrange(45));
console.log(integerrange(79));
console.log(integerrange(30));