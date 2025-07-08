var today = new Date(); //Get the current date
var day = today.getDate();//Get the day of the month
var month = today.getMonth( ) + 1;//Get the month
var year = today.getFullYear();

//Add leading zero if day is less than 10
if(day < 10){
    day = "0" + day;
}

//Add leading zero if month is less than 10
if(month < 10){
    month = "0" + month;
}

//Format date as month-day-year
today = month + "-" + day + "-" + year;
console.log(today);

//Format date as month/day/year
today = month + "/" + day + "/" + year;
console.log(today);

//Format date as day-month-year
today = day + "-" + month + "-" + year;
console.log(today);

//Format date as day/month/year
today = day + "/" + month + "/" + year;
console.log(today);