
// function sayMyName() {
//     console.log("N");
//     console.log("A");
//     console.log("V");
//     console.log("E");
//     console.log("E");
//     console.log("N");
// }

//sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(10,20);


function addTwoNumbers(number1,number2){
    return number1+number2;
}

const result = addTwoNumbers(10,20);

//console.log(result)


function loginMessage(username){
    return `${username} just logged in`;
}

//console.log(loginMessage("Naveen")); //if no argumnet is passed then it will show "UNDEFINED"



function calculateCartPrice(...num1){      // ... rest operator or spread operator
    return num1;
}

console.log(calculateCartPrice(200,400,600));


function calculateCartPrice1(val1,val2,...num1){      
    return num1;
}

console.log(calculateCartPrice1(200,400,600,2000));

const user = {
    usename : "Naveen",
    price : 999
}

function handleObject(anyObject){
    console.log(`Usename is ${anyObject.usename} and price is ${anyObject.price}`)
}

//handleObject(user)
handleObject({
    usename:"Shreyas",
    price:440
})

const myNewArray = [40 , 80 , 120 , 160 ];

function returnSecondElement(getArray){
    return getArray[1];
}

console.log(returnSecondElement(myNewArray))