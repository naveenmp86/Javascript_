//singleton Object
//const tinderUser = new Object();  

//non singleton object
const tinderUser={}

tinderUser.id = "abc123";
tinderUser.name = "Naveen";
tinderUser.loggedIn = true;

//console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname :{
        username:{
            firstname : "Naveen",
            lastname : "Padiyappanavar",
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.username)
// console.log(regularUser.fullname.username.firstname)


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};

//const obj3 = {obj1,obj2};

//const obj3 = Object.assign(obj1,obj2);

const obj3={...obj1,...obj2};
//console.log(obj3)


const user =[
    {
        id:"123",
        name : "Naveen"
    },
    {
        id:"123",
        name : "Naveen"
    },
    {
        id:"123",
        name : "Naveen"
    },
]

//console.log(user[1].id)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('loggedIn'))


const course = {
    coursename : "Javascript",
    price : 999,
    CourseInstructor : "Hitesh"
}

//console.log(course.CourseInstructor)

const {CourseInstructor : i , price : p } = course;

console.log(i)
console.log(p)

// API and json

{
    "coursename" : "Javascript"
    "price" : "free",
    "CourseInstructor" : "Hitesh"
}

[
    {},
    {},
    {}
]