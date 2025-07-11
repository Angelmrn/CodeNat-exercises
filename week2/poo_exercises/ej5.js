class Shape{
    getArea(){
        throw new Error("Method 'getArea()' must be overridden in subclasses");
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }

    getArea(){
        return Math.PI * this.radius * this.radius;

    }
}

class Rectangle extends Shape{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
}

const circle = new Circle(5);
console.log("Circle area: " + circle.getArea());

const rectangle = new Rectangle(4, 6);
console.log("Rectangle area: " + rectangle.getArea());

const fig = new Shape();
console.log("Shape area: " + fig.getArea()); 