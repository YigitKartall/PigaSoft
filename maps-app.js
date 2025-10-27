const map1= new Map();
let value;
map1.set(42 , "Konya")
map1.set(70, "Karaman")
map1.set(35, "İzmir")
map1.set(34,"İstanbul")

console.log(map1.get(42))

value= map1.size;
console.log(value);

for(let [key,value] of map1){
    console.log(key,value)
}
for(let key of map1.keys()){
    console.log(key)
}
for(let value of map1.values()){
    console.log(value)
}

//Converting map to array

const array = Array.from(map1);
console.log(map1)

//Converting array to map
const array2 = [[34,"İstanbul"],[42 , "Konya"],[35, "İzmir"],[70, "Karaman"]]

const myMap= new Map(array2)
console.log(myMap)