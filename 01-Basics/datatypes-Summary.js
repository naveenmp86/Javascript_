// Primitive Data Types

// 7-Types : String , Boolean , null , undefined , Number , Symbol , BigInt

const score = 100
const scoreValue = 212

let isLoggedIn = true
let isLoggedOut = false

let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId)
// console.log(id)

const bigNumber = 369258147852369n




// Reference (Non-Primitive)

// Arrays , Objects , Functions
 

const myHeros = ["Naveen","Santosh","Manju"];
console.table(myHeros)

let myObj = {
    name : "Naveen",
    age : 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)


// link to study
// https://262.ecma-international.org/5.1/#sec-11.4.3