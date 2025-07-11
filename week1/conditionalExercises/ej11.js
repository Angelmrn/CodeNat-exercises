var a = 360; 
var b = 336;  

var gcd;

while (a != b) {
    if (a > b) {
        a = a - b;
    } else {
        b = b - a;
    }
}

gcd = a;

console.log(gcd); 