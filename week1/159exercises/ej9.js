
today = new Date();// Get the current date


var christmas = new Date(today.getFullYear(), 11, 25);//Date for Christmas of the current year

// Check if the current date is after December 25th
if (today.getMonth() == 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);//set Christmas for the next year
}  

// Calculate the difference in days between today and Christmas
var one_day = 1000 * 60 * 60 * 24;

// Log the number of days left until Christmas to the console
console.log(Math.ceil((christmas.getTime() - today.getTime()) / (one_day)) +
    " days left until Christmas!"); 