let text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic ipsam sunt repellendus rem dolore esse cum quod ea ab.";
let letter= prompt("Please enter a letter. ");
let result= letterCounter(letter);

alert("Number of letter is: "+result);

function letterCounter(letter){
    let total= 0;
    for(let i=0;i<text.length; i++){
        if(text.charAt(i)==letter){
            total+=1;
        }
    }
    return total;
}