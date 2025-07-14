class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    getArea(){
        return this.w * this.h;
    }

    getPerimeter(){
        return 2 * (this.w + this.h);
    }
}

const rectangle1 = new Rectangle(5, 10);
const rectangle2 = new Rectangle(7, 3);

console.log("Rectangle 1 Area: " + rectangle1.getArea())
console.log("Rectangle 1 Perimeter: " + rectangle1.getPerimeter())
console.log("Rectangle 2 Area: " + rectangle2.getArea())
console.log("Rectangle 2 Perimeter: " + rectangle2.getPerimeter())
