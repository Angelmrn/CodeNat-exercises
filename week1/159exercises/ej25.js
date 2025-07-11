function divby3or7 (num){
    if(num % 3 == 0 || num % 7 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(divby3or7(12))//output: true
console.log(divby3or7(14))//output: true
console.log(divby3or7(10))//output: false
console.log(divby3or7(22))//output: false
