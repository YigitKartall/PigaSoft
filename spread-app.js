let numbers=[10,20,30,40]
function add(a,b,c,d){
    console.log(a+b+c+d)
}
//Eski Yöntem
add(numbers[0],numbers[1],numbers[2],numbers[3],)
//Yeni Yöntem
add(...numbers)

const langs1=["Java","C#"]
//const langs2=["Php","Python",langs1[0],langs1[1]]
const langs2=["Php","Python", ...langs1]
console.log(langs2)

let numbers2=[1,2,3,4,5,6,7,8,9]
let [a,b, ...otherNumbers]= numbers2
console.log(a,b,otherNumbers)