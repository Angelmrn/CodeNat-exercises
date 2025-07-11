console.log("_______________________________________________________");
//Loop through the years from 2014 to 2050
for(var year = 2014; year <= 2050; year++){
    var date = new Date(year, 0, 1);
    if(date.getDay() === 0){// Check if January 1st is a Sunday (where Sunday corresponds to day index 0)
        console.log("1st January is begin a Sunday in " + year);
        }
}

console.log("_______________________________________________________");