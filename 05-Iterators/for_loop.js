// for

//********syntax***********
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }



// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }


// for (let i = 0; i < 5; i++) {
//     console.log(`Outer Loop ${i}`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`Inner Loop ${i} , Inner loop ${j}`)   
//     }
// }



myArray = ["Naveen","Shreyas","Anusha"];
console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}




/*************  BREAK and CONTINUE ******************/

// for (let index = 0; index < 10; index++) {
//     if(index == 5){
//         console.log("5 Detected");
//         break;
//     }
//     console.log(`Number is ${index}`);
    
// }


for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log("5 Detected");
        continue;
    }
    console.log(`Number is ${index}`);
    
}