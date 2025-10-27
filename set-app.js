const set1 = new Set();
set1.add(true)
set1.add(3.14)
set1.add("yigit")
set1.add(7)
set1.add({username:"enes", password:"1"});
set1.add([1,2,3,4])

console.log(set1)

for(let value of set1){
    console.log(value)
}
console.log(set1.size)
console.log(set1.has(7))

//Converting set to array
const values = Array.from(set1)
