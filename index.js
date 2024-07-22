//Prototype
let a = {
    name2: "Muhammad",
    age: 15,
    run: () => {
        console.log("a run");
    }
}
let p = {
    run: () => {
        console.log(("p run"));
    }
}
p.__proto__ = {
    name: "Patrick"
}
a.__proto__ = p
a.run()
console.log(a.name)

//Classes and Constructor

class RailwayForm {
    constructor(name, train, address) {
        this.name = name
        this.train = train
        this.address = address
    }
    submit() {
        console.log(`${this.name}, Your form is submitted for train number ${this.train} from ${this.address} :)`);
    }
    cancel() {
        this.train = "No trains has been assigned"
        console.log(`${this.name}, Your form is cancelled for train number ${this.train} :(`);
    }
    // info(name, train) {
    //     this.name = name
    //     this.train = train
    // }
}

//Create a form
let person1 = new RailwayForm("muhammad", 12345, "Mumbai")
let person2 = new RailwayForm("john", 67890, "Delhi")
let person3 = new RailwayForm("rohan", 33455, "Jaipur")

//Fill info
// person1.info("Muhammad", 12345)
// person2.info("John", 67890)

//Status of form
person1.submit()
person2.cancel()

//Inheritance and Extends

class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    run() {
        console.log(`${this.name} is running`);
    }
    colorName() {
        console.log(`This is the ${this.color} of ${this.name}`);
    }
}

class Monkey extends Animal {
    eatBanana() {
        console.log(`${this.name} is eating banana`);
    }
}

let animal1 = new Animal("Tommy", "Black")
let animal2 = new Monkey("Sam", "Grey")

animal1.run()
animal2.eatBanana()

//Method Overriding and Super

class Employee {
    login() {
        console.log(`Employee has logged in`);
    }
    logout() {
        console.log(`Employee has logged out`);
    }
    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves => Auto Approved`);
    }
}
class Programmer extends Employee {
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeaves(leaves) {
        super.requestLeaves(leaves + 1)
        console.log("One extra Granted");
        // console.log(`Employee has requested ${leaves + 1} leaves (One Extra)`);
    }
}

let employee1 = new Programmer()
employee1.login()
employee1.requestLeaves(3)