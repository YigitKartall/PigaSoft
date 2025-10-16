let product1 ={
    name: "Acer Swift",
    category: "Technology",
    price: 6219
}

let product2 ={
    name: "Acer Nitro 5",
    category: "Technology",
    price: 15.475
}

let product3 ={
    name: "Acer Gaming",
    category: "Technology",
    price: 13.999
}

let product4 ={
    name: "Lenovo V15",
    category: "Technology",
    price: 10.999
}

let product5 ={
    name: "Lenovo V14",
    category: "Technology",
    price: 4.399
}

let product6 ={
    name: "Lenovo Ideapad",
    category: "Technology",
    price: 4.515
}

let products= [product1,product2,product3,product4,product5,product6];
let filtredProducts= [];
let consumerProductName = prompt("Please enter product name.");

function setFiltredProducts(products){
    products.forEach(function(product){
        if(product.name.toUpperCase().includes(consumerProductName.toUpperCase,0)){
        filtredProducts.push(product);
        }
    });
}

function getFiltredProducts(products){
    products.forEach(function(product){
        console.log("********************")
        console.log("|"+product.name+"|"+product.price+"|"+product.category);
    })
}

setFiltredProducts(products);
getFiltredProducts(products);