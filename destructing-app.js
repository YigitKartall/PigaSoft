let langs = ["C#","C++","JavaScript","Python"]
// let lang1,lang2,lang3,lang4
// lang1= langs[0]
// lang2= langs[1]
// lang3= langs[2]
// lang4= langs[3]

let[lang1,lang2,lang3,lang4]= langs

console.log(lang1,lang2,lang3,lang4)

const toCalculate= (a,b)=>{
    const addition = a+b
    const substraction = a-b
    const multiplication = a*b
    const division = a/b
    const array = [addition,substraction,multiplication,division]
    return array
}
let [a,b,c,d]= toCalculate(10,2)
console.log(a,b,c,d)