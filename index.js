//Prototype
let a = {
    name2: "Muhammad",
    age: 15,
    run: () => {
        alert("a run");
    }
}
let p = {
    run: () => {
        alert("p run");
    }
}
p.__proto__ = {
    name: "Patrick"
}
a.__proto__ = p
a.run()
console.log(a.name)