const playStopWatch = document.getElementById("startBtn");
const resetStopWatch = document.getElementById("resetBtn");



//variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

//stopwatch function

function stopWatch (){
    seconds++
    if (seconds / 60 === 1){
        seconds = 0;
        minutes ++;
        
        if(minutes / 60 === 1){
            minutes = 0;
            hours ++
        }
    }

    let timeDisplay = document.getElementById("timer").innerText = 
    hours + ":" + minutes + ":" + seconds; 
} 