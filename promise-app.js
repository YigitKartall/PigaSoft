// let check = true;
// const promise1= new Promise((resolve, reject)=>{
//     if(check){
//         resolve("Promise successful.")
//     }else{
//         reject("Promise not successful.");
//     }
// })
// console.log(promise1)

let check = false;
function createPromise(){
    return new Promise((resolve, reject)=>{
        if(check){
            resolve("There is no any problem on promise.")
        }else{
            reject("There is a problem.")
        }
    })
}

createPromise()
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=> console.log("Always works."))