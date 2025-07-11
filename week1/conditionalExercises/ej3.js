var n1 = 1;
var n2 = 2;
var n3 = 3;

if (n1 > n2 && n1 > n3) {
    if (n2 > n3) {
        console.log(n1 + ", " + n2 + ", " + n3);
    } else {
        console.log(n1 + ", " + n3 + ", " + n2);
    }
} else if (n2 > n1 && n2 > n3) {
    if (n1 > n3) {
        console.log(n2 + ", " + n1 + ", " + n3);
    } else {
        console.log(n2 + ", " + n3 + ", " + n1);
    }
} else if (n3 > n1 && n3 > n2) {
    if (n1 > n2) {
        console.log(n3 + ", " + n1 + ", " + n2);
    } else {
        console.log(n3 + ", " + n2 + ", " + n1);
    }
} 