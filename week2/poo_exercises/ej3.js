class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails(){
        console.log("Make: " + this.make);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
    }
}

class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);// Call the parent constructor
        this.doors = doors;
    }

    getDetails(){
        super.getDetails();// Call the parent method
        console.log("Doors: " + this.doors);
    }
}
// Instance of Vehicle
const vehicle1 = new Vehicle("Honda", "Civic", 2018);
console.log("Vehicle Details:");
vehicle1.getDetails();

// Instance of Car
const car1 = new Car("Toyota", "Corolla", 2020, 4);
console.log("Car Details:");
car1.getDetails();