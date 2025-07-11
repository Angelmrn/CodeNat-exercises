function arrIncreasing(num) {
    if (num.length === 1) {
        return true;
    }
    var num_direction = num[1] - num[0];

    for (var i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}

console.log(arrIncreasing([1, 2, 3]));
console.log(arrIncreasing([1, 2, 2]));
console.log(arrIncreasing([-3, -2, -1]));