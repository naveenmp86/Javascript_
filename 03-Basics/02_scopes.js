let a = 10
const b = 20
var c = 30

if(true){
    let a = 150
    //const b = 20
     c = 400
     console.log("INNER : ",a)
}

// for(let i = 0 ; i < array.length() ; i++){
//     const element = array[i];
// }

console.log(a)
// console.log(b)
// console.log(c)



function one(){
    const username = "Naveen"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    //console.log(website);

    two()
}

one()

if(true) {
    const username = "Naveen"
    if(username === "Naveen") {
        const website =" youtube"
        console.log(username + website)
    }
    //console.log(website);
}


//+++++++++++++++++++++  Interesting +++++++++++++++++++++++++++++++++//


function addOne(num) {
    return num + 1;
}

console.log(addOne(5))

const addTwo = function(num1) {
    return num1 + 2;
}

console.log(addTwo(4))