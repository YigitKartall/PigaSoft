// console.log("yigit");
// setTimeout(()=> {
//     console.log("1000ms waited and started.")
// }, 1000);
// setTimeout(()=> {
//     console.log("500ms waited and started.")
// }, 500);
// setTimeout(()=> {
//     console.log("750ms waited and started.")
// }, 750);
// console.log("kartal")

function getName(callback){
    setTimeout(() =>{
        let name = "yigit";
        callback(name);
    }, 1000);
}
function getSurname(name){
    setTimeout(() =>{
        let surname = "kartal";
        console.log(name,surname);
    }, 500);
}
getName(getSurname);