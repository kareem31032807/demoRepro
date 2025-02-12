let timerElement = document.getElementById("timer");
let timer =0 ;


function updateTimer() {
    timerElement.textContent = timer;
}


const increase = document.getElementById("increase")
 function Text(){
    timer++;
    updateTimer(); 
 }
 increase.addEventListener("click", Text)


 const reload = document.getElementById("reload")
 function noText(){
    timer = 0;
    updateTimer();
 }
 reload.addEventListener("click", noText )


const decrease = document.getElementById("decrease")
function decreasetext(){
    timer--;
    updateTimer();
}
decrease.addEventListener("click",decreasetext)