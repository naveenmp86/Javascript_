//let myName = "Naveen   "

// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.trueLength);

const User = {
    name: "Chai",
    email: "xyz@gmail.com"
}

let myHeros = ["thor", "Hulk"];

let heroPower = {
    thor: "hammer",
    Hulk: "punch",

    getHulkPower: function(){
        // console.log(`hulk power is ${this.spiderman}`);
    }
}

Object.prototype.naveen = function(){
    // console.log(`Naveen is present in all objects`);
}

heroPower.naveen()

// Inheritance

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength();