function noequalnum(num1, num2, num3) {
  
  if ((num1 !== num2) && (num1 !== num3) && (num2 !== num3)) {
    return "Three numbers are unequal.";
  }

  if(num1 === num2){
    return num3;
  }else if(num1 === num3){
    return num2;
  }else{
    return num1;
  }
}

console.log(noequalnum(1, 2, 2));
console.log(noequalnum(1, 1, 2));
console.log(noequalnum(1, 2, 3));