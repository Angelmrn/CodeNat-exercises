function samelastdigit(int1, int2, int3){
    if(int1 <0 || int2 < 0 || int3 < 0){
        return "Negative numbers are not allowed";
    }else if(int1 % 10 === int2 % 10 && int2 %10 === int3 %10){
        return true;
    }else{
        return false;
    }
}

console.log(samelastdigit(102, 302, 2));
console.log(samelastdigit(20, 22, 45)); 
console.log(samelastdigit(20, 22, -45));