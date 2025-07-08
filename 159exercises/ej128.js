function roundNum(num) {

    while (num % 10) {
        num++;
    }
    return num;
}


console.log(roundNum(56));
console.log(roundNum(592));
console.log(roundNum(1000));