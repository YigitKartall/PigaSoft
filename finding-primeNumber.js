let number1 =Number(prompt("Please enter a number: "));
let result =true;
for(let i=2; i<=Math.floor(number1/2); i++){
    if(number1%i ==0){
        result=false;
        break;
    }
}

if(result){
    alert(number1+ " is a prime number. ");
}
else{
    alert(number1+ " is not a prime number. ");
}