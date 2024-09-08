let count = 0;

document.getElementById("increment-btn").onclick = function(){
    count+=1;
    document.getElementById("counter-value").innerHTML = count;
}

document.getElementById("decrement-btn").onclick = function(){
    if (count>0) {
        count-=1
    }
    document.getElementById("counter-value").innerHTML = count;
}

document.getElementById("reset-btn").onclick = function(){
    count=0;
    document.getElementById("counter-value").innerHTML = count;
}


