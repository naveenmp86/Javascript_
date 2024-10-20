const score = 400
console.log(score);



const balance = new Number(400)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(2))



const otherNumber = 28.845213
console.log(otherNumber.toPrecision(4))


const amount = 1200000
console.log(amount.toLocaleString('en-IN'))
console.log("\n")

// ******************* MATH ****************************

// console.log(Math)
// console.log(Math.abs(-4));                          //Returns positive value
// console.log(Math.round(96.8));                     //Returns round off value
// console.log(Math.max(24,48,96,78,84));            //Returns max value among set
// console.log(Math.min(11,8,7,-4,6,18));           //Returns min value among set
// console.log(Math.floor(8.85));                  //Returns the greatest integer less than or equal to its numeric value
// console.log(Math.ceil(8.85));                  //Returns the smallest integer greater than or equal to its numeric value
//console.log(Math.random())                    //Returns pseudoRandom between 0 & 1


console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10))
console.log(Math.floor(Math.random() * 10) + 1)


const min = 10;
const max = 20;

console.log( Math.floor ( Math.random() * ( max - min + 1 ) + min ) )