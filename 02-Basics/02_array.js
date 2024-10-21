//Merging two arrays


// *********** 1st METHOD **************
const marval_heros = ["thor" , "Ironman" , "spiderman"];
const dc_heros = ["superman", "flash" , "batman"]

//marval_heros.push(dc_heros);

// console.log(marval_heros)
// console.log(marval_heros[3])
// console.log(marval_heros[3][1])


// *********** 2nd METHOD **************
const allHeros = marval_heros.concat(dc_heros);
//console.log(allHeros)



// *********** 3rd METHOD **************
const all_heros = [...marval_heros,...dc_heros];
//console.log(all_heros)


// *********** 4th METHOD **************
const another_array = [1 , 2 , 3 , [4 , 5], [6 , 7 , [ 8 , 9]]]
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array)


console.log(Array.isArray("naveen"));
console.log(Array.from("Naveen"));
console.log(Array.from({name: "Naveen"}))


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))