let count = 0;

document.getElementById("increment-btn").onclick = function(){
    count+=1;
    document.getElementById("counter-value").innerHTML = count;
}

//  here we are making function and  calling it on button click with onclick  event 
function  decrement(){
    count-=1;
    document.getElementById("counter-value").innerHTML = count; // this update the  value of counter with help of innerHTml () method
// document allow us  to access the element of the webpage & getelement byid() method is used to access the element of the webpage by id
}


// document.getElementById("decrement-btn").onclick = function(){
//     if (count==0) {
//         return 0;
//     }
//     count-=1
//     document.getElementById("counter-value").innerHTML = count;
// }

document.getElementById("reset-btn").onclick = function(){
    count=0;
    document.getElementById("counter-value").innerHTML = count;
}


