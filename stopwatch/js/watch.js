const playStopWatch = document.getElementById("startBtn");
const resetStopWatch = document.getElementById("resetBtn");



//variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// leading zero digits
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

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

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    };
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    };
    if(hours < 10){
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    };

    let timeDisplay = document.getElementById("timer").innerText = 
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds; 
} 

// window.setInterval(stopWatch, 1000);