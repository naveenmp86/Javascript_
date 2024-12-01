// if

if(2 == "2"){
    console.log("Hello")
}

const isUserLogged = true

if(isUserLogged){
    console.log("Inside")
}

//<, >, <=, >=, ==, !=, ===, !==

const score = 200

if(score > 100) {
    var power = "fly"
    console.log(`${power}`);
}

console.log(`${power}`);

var balance = 200

if(balance < 50) {
    console.log("less than 50")
}else if(balance < 75) {
    console.log("less than 75")
}else if(balance < 100) {
    console.log("less than 100")
}else
    console.log("less than 300")


const UserLoggedin = true
const debitCard = true
const loggedInFromGoogle = false

if(UserLoggedin && debitCard && 2==3){
    console.log("Allow")
}

if(loggedInFromGoogle || UserLoggedin){
    console.log("User logged in ")
}
