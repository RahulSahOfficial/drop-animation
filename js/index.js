// Constants 
const m=15,n=20;
const divGrid=document.getElementsByClassName("drop");
const speedInput=document.getElementById("speed");
const lengthInput=document.getElementById("length");
const probabilityInput=document.getElementById("prob");

// Variables 
let colorCnt=0,dropSpeed=200,dropLen=4,dropProb=10,play;
let grid = Array.from({ length: m }, () => new Array(n).fill(0));

// Event Listeners 
speedInput.addEventListener("input",()=>{
    dropSpeed=1000/speedInput.value;
    clearTimeout(play);
    startAnimation();
})
lengthInput.addEventListener("input",()=>{
    dropLen=lengthInput.value;
})
probabilityInput.addEventListener("input",()=>{
    dropProb=probabilityInput.value;
})

//Starting Animation
startAnimation()