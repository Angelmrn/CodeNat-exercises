//Define a fuction to determine leap year
function leapY(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

//Test
console.log(leapY(2016)); // true
console.log(leapY(2000)); // true
console.log(leapY(1700)); // false
console.log(leapY(1800)); // false
console.log(leapY(100));  // false