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

