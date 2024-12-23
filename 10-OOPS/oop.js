const user = {
    username: "Naveen",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got User deatils from database");
        //console.log(`username:${this.username}`);
        console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


// Here "new" is constructor function
// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    return this;
}

const userOne = new User("Naveen", 8, true);
const userTwo = new User("Shreyas", 12, false);
console.log(userOne.constructor);
//console.log(userTwo);