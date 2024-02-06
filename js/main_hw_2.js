var st;
var stColor;
var run = false;
var seconds = 0;
var minutes = 0;
var hours = 0;

var stopwatch = document.getElementById("stopwatch");
var startBtn = document.getElementById("start-btn");
var stopBtn = document.getElementById("stop-btn");
var resetBtn = document.getElementById("reset-btn");

startBtn.addEventListener("click", startIt);
stopBtn.addEventListener("click", stopIt);
resetBtn.addEventListener("click", resetIt);

function startIt() {
    if (!run) {
        st = setInterval(updateTime, 1000);
        run = true;
        changeColor();
        stColor = setInterval(changeColor, 5000);
    }
}

function stopIt() {
    if (run) {
        clearInterval(st);
        clearInterval(stColor);
        run = false;
    }
}

function resetIt() {
    stopIt();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateText();
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    updateText();
}

function updateText() {
    stopwatch.innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

function addZero(x) {
    if (x < 10) {
        x = `0${x}`;
    } else {
        x = x;
    }
    return x;
}

function changeColor() {
    stopwatch.style.textShadow = `0 0 10px ${getColor()}`;
}

var i = 0;

function getColor() {
    const Colors = ["orange", "yellow", "green", "blue", "purple", "#ff00b3", "red"];
    var color = Colors[i];
    i++;
    if (i == Colors.length) {
        i = 0;
    }
    return color;
}

