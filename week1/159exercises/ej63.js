function middlethree(str) {
    if (str.length % 2 !== 0) {
        mid = (str.length + 1) / 2;
        return str.slice(mid - 2, mid + 1);
    }else{
         return str;
    }
   
}


console.log(middlethree('abcdefg'));
console.log(middlethree('HTML5'));
console.log(middlethree('Python'));
console.log(middlethree('PHP'));
console.log(middlethree('Exercises')); 