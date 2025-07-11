class Animal {
    constructor(species, sound){
        this.species = species;
        this.sound = sound;
    }

    makeSound(){
        console.log(this.sound);
    }
}

class Dog extends Animal{
    constructor(species, sound, color){
        super(species, sound);
        this.color = color;
    }

    makeSound(){
    super.makeSound();
    console.log("Color: " + this.color);
    }
}


const dog1 = new Dog("Dog", "Woof", "Brown");
dog1.makeSound();
