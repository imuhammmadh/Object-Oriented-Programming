// //Prototype
// let a = {
//     name2: "Muhammad",
//     age: 15,
//     run: () => {
//         console.log("a run");
//     }
// }
// let p = {
//     run: () => {
//         console.log(("p run"));
//     }
// }
// p.__proto__ = {
//     name: "Patrick"
// }
// a.__proto__ = p
// a.run()
// console.log(a.name)

//Classes

class RailwayForm {
    submit() {
        console.log(`${this.name}, Your form is submitted for train number ${this.train} :)`);
    }
    cancel() {
        console.log(`${this.name}, Your form is cancelled for train number ${this.train} :(`);
    }
    info(name, train) {
        this.name = name
        this.train = train
    }
}

//Create a form
let person1 = new RailwayForm()
let person2 = new RailwayForm()
let person2b = new RailwayForm()

//Fill info
person1.info("Muhammad", 12345)
person2.info("John", 67890)
person2b.info("John", 10000)

//Status of form
person1.submit()
person2b.submit()
person2.cancel()

