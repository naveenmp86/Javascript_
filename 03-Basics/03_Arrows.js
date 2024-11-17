const user = {
    username : "Naveen",
    age : 20,

    welcomeMessage : function(){
            console.log(`${this.username}, welcome to website`);
            console.log(this)
    }
}

user.welcomeMessage()
user.username = "Shreyas";
user.welcomeMessage()

console.log(this)

// function chai() {
//     let username = "Naveen"
//     console.log(this.username)
// }

// chai();


// const chai = function() {
//     let username = "Naveen"
//     console.log(this.username)
// }

const chai = () => {
    let username = "Naveen"
    console.log(this.username)
}

chai();


//+++++++++++++Explicit Return ++++++++++++++++++++

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }

//+++++++++Implicit return +++++++++++++++

//const addTwo = (num1,num2) =>  num1+num2;

//onst addTwo = (num1,num2) =>  (num1+num2);

const addTwo = (num1,num2) =>  ({username : "Naveen"});   // use parenthesis to return 


console.log(addTwo(6,8))

// myArray = [2 , 10, 8, 6, 4]

// myArray.foreach(() => {})