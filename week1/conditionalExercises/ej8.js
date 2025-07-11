function happyNumber(num) {
    var m, n;
    var c = [];

    while (num !== 1 && c[num] !== true) {//while the number is not 1 and it has not been seen before
        c[num] = true;//mark the number as seen
        m = 0;// Reset the sum of squares for the new number

        while (num > 0) {
            n = num % 10;// Get the last digit of the number
            m += n * n;
            num = (num - n) / 10;// Remove the last digit from the number
        }
        num = m;
    }
    return (num === 1);
}

var cnt = 5;
var num = 1;
var hnum = '';

while (cnt-- > 0) {
    while (!happyNumber(num))// Check if the number is happy
        num++;

    hnum = hnum + (num + ", ");// Append the happy number to the string
    num++;
}
console.log('First 5 happy numbers are: ' + hnum); 