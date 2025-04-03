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

// Even though both symbols have the same description '123', they are not equal to each other. Each Symbol is unique by definition.

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


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory (Primitive) ----> copy
// Heap Memory (Non Primitive) ----> reference

let myName = "Naveen";
let myNewName = "Krishna";

console.log(myNewName)

let user1 = {
    Email : "abc@gmail.com",
}

let user2 = user1;

user2.Email = "naveen@gmail.com"
console.log(user1)
console.log(user2)

// Here, you're not creating a new copy of user1 for user2. Instead, you're making user2 reference the same object as user1.

// In JavaScript, objects are reference types. When you assign user1 to user2, both user1 and user2 point to the same object in memory.
