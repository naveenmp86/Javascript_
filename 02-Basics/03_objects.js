// singleten
//object cerate


// object literals

const mySym = Symbol("key1");

const JsUser = {
    name : "Naveen",
    "full name" : "Naveen M P",
    age : 20,
    [mySym] : "myKey1",
    location : "Bengaluru",
    email : "1by22cs119@bmsit.in",
    isLoggedIn : true
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "1by22cs119@bmsit.in";
Object.freeze(JsUser);
JsUser.email = "nmp19@gmail.com";

console.log(JsUser.email)

JsUser.greeting = Function ();
{
    console.log("Hello JS");
}

console.log(JsUser.greeting)