// for of

[" "," "," "]
[{ },{ },{ }]

const arr = [10 , 20 , 30 , 40 , 50];

for(const i in arr){
    //console.log(arr[i]);
}

const greetings = "Hello World"

for(const greet of greetings){
    //console.log(`greeting in ${greet}`);
}

const map = new Map()
map.set("IN","India")
map.set("EN","England")
map.set("SA","SouthAfrica")
map.set("NZ","Newzland")

//console.log(map)

for(const [key,value] of map){
    //console.log(key,":-",value);
}


const myObject = {
    game1 : 'NFS',
    game2 : 'GTA Vice city',
    game3 : 'GTA3'
}

// for (const [key,value] of myObject) {
//     console.log(key,":-",myObject[key]);
// }

