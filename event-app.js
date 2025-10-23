onmousedown= mDown(this);
onmouseup=mUp(this)

function mUp(obj){
    obj.style.backgroundColor ="darksalmon";
    obj.innerHTML = "Release me"
}

function mDown(obj){
    obj.style.backgroundColor="coral";
    obj.innerHTML= "Thank You";
}

mDown();
mUp();