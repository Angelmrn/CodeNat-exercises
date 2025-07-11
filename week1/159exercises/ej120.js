function pointInside (a, b, x, y, r) {
    // Calculate the squared distance between the center of the circle (x, y) and the point (a, b)
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;

    if (dist_points < r) {
        return true; 
    }
    return false;
}

console.log(pointInside(0, 0, 2, 4, 6)); 
console.log(pointInside(0, 0, 6, 8, 6));
console.log(pointInside(0, 0, 2, 4, 5));
console.log(pointInside(0, 0, 2, 4, 4)); 