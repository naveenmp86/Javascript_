const name = "Naveen";

const repoCount = 20;

console.log(`My Name is ${name} and my repo count is ${repoCount} `)

const gameName = new String("Krishna")

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));       //what value at given index

console.log(gameName.indexOf('r'))


const newString = gameName.substring(0,4);
console.log(newString)

const newString1 = gameName.slice(-7,4)
console.log(newString1)

const newString2 = "   Naveen    ";
console.log(newString2)
console.log(newString2.trim())

// link to study trim
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

let url = "https://naveen.com/naveenmp%20profile"
console.log(url.replace('%20','-'))

console.log(url.includes('naveen'))
console.log(url.includes('abd'))

let sName = " Royal Challengers Bengaluru is state team of Karnataka"
console.log(sName.split("-"))