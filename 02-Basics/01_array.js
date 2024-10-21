// Arrays

const myArr = [ 1, 2, 3, 4, 5 ];
const heros = [ "Vashista", "Vishwamitra", "Bharadwaja"];

const arr = new Array(1,2,3,4)

console.log(myArr[2])


// array methods

myArr.push(6);
myArr.push(7);
myArr.pop();

myArr.unshift(9);
myArr.unshift(8);       //pushes element to front

myArr.shift();       //pops front element

//console.log(myArr);
console.log(myArr.includes(8))
console.log(myArr.indexOf(4))


const newArray = myArr.join();

console.log(myArr);
console.log(newArray);
console.log(typeof newArray);

const myn1 = myArr.slice(1,3);

console.log(myn1);

const myn2 = myArr.splice(1,3);

console.log(myn2);
console.log(myArr)

