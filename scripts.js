// let person1 = {
//     name: "Tamara Stringer",
//     sayHello: function () {
//         console.log(`Hello! My name is ${this.name}.`)
//     }
// }
// let person2 = {
//     name: "Meschelle Stringer",
//     sayHello: function () {
//         console.log(`Hello! My name is ${this.name}.`)
//     }
// }
// let person3 = {
//     name: "Diane Gibb",
//     sayHello: function () {
//         console.log(`Hello! My name is ${this.name}.`)
//     }
// }
// let person4 = {
//     name: "Keelan Gibb",
//     sayHello: function () {
//         console.log(`Hello! My name is ${this.name}.`)
//     }
// }
// let person5 = {
//     name: "Tinsley Landers",
//     sayHello: function () {
//         console.log(`Hello! My name is ${this.name}.`)
//     }
// }
// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

// function Person (name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }

// Person.prototype.sayHello = function () {
//     console.log (`Hello! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`)
// }

// let person1 = new Person ("Tamara Stringer", "Birmingham", 30);
// let person2 = new Person ("Meschelle Stringer", "Austin", 28);
// let person3 = new Person ("Diane Gibb", "Birmingham", 57);
// let person4 = new Person ("Keelan Gibb", "Oceanside", 19);
// let person5 = new Person ("Tinsley Landers", "Austin", 1.5);

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

// class Person {
//     constructor (name, city, age) {
//         this.name = name;
//         this.city = city;
//         this.age = age;
//     }
//     sayHello () {
//         console.log(`Hello! My name is ${this.name}. I am ${this.age} years old and I live in ${this.city}.`)
//     }
// }

// let person1 = new Person ("Tamara Stringer", "Birmingham", 30);
// let person2 = new Person ("Meschelle Stringer", "Austin", 28);
// let person3 = new Person ("Diane Gibb", "Birmingham", 57);
// let person4 = new Person ("Keelan Gibb", "Oceanside", 19);
// let person5 = new Person ("Tinsley Landers", "Austin", 1.5);

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

class Vehicle {
    constructor(type, manufacturer, wheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle() {
        console.log(`Type: ${this.type} manufactured by: ${this.manufacturer} number of wheels: ${this.wheels}`)
    }
}

let vehicle1 = new Vehicle("Camry", "Toyota", 4)
vehicle1.aboutVehicle();

class Truck extends Vehicle {
    constructor(type, manufacturer, wheels, doors, truckBed) {
        super(type, manufacturer, wheels);
        this.doors = doors;
        this.truckBed = truckBed;
    }
    aboutVehicle() {
        if (this.truckBed == true) {
            console.log(`number of wheels: ${this.wheels}, number of doors: ${this.doors} truckbed: Yes`)
        } else {
            console.log(`This is not a truck!`)
        }
    }
}
let truck1 = new Truck("Silverado", "Chevy", 4, 4, true);
truck1.aboutVehicle();

class Sedan extends Vehicle {
    constructor (type, manufacturer, wheels, mpg, size) {
        super (type, manufacturer, wheels)
        this.mpg = mpg;
        this.size = size;
        size = true;
    }
    aboutVehicle() {
        if (this.size == true) {
            console.log(`This is a small sedan that gets ${this.mpg} mpg.`)
        } else {
            console.log(`This is a medium sedan that gets ${this.mpg} mpg.`)
        }
    }
}
let sedan1 = new Sedan ("Optima", "Kia", 4, 35, false);
sedan1.aboutVehicle();