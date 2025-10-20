//Adding Item

sessionStorage.setItem("350","Yigit");
sessionStorage.setItem("360","Ahmet");
sessionStorage.setItem("370","Mehmet");

//Removing Item

sessionStorage.removeItem("370");
console.log(sessionStorage);

//Getting Item

let gettedItem =sessionStorage.getItem("350");
console.log(gettedItem);

//Removing All Items

sessionStorage.clear();

//Writing Array on Session Storage

let names = ["Ali","Enes","Kübra","Adem","Ayşenur"];
sessionStorage.setItem("names",names);

let value =sessionStorage.getItem("names");
console.log(value);