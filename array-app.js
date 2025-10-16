// let names=["Enes","Yigit","Ahmet","Mehmet","Emir"];

// names.forEach(function(name){
//     console.log(name);
// });

// for(let i=0; i<names.length; i++){
//     console.log(names[i]);
// }

let cars=["bmw","toyota","renault","mercedes","porsche"];
//push method
console.log(cars.length);
let arrayLength = cars.push("opel");
console.log(cars);
console.log(arrayLength);

console.log("*******")

//unshift method
cars.unshift("hyundai");
console.log(cars);

//pop method
cars.pop;
let removedValue = cars.pop;
console.log(cars);
console.log(removedValue);
