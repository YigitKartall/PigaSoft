let names=["Ali","Veli","Yusuf","Betül","Ceyda"];
names.forEach(function(name){
    console.log(name)  
})

for(let name in names){
    console.log(name)
}
for(let name in names){
    console.log(name, names[name])
}

for(let namex of names){
    console.log(namex)
}