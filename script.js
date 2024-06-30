let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        document.getElementById("startStopBtn").innerHTML = "Stop";
        running = true;
    } else {
        clearInterval(tInterval);
        document.getElementById("startStopBtn").innerHTML = "Start";
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    document.getElementById("display").innerHTML = "00:00:00.000";
    document.getElementById("startStopBtn").innerHTML = "Start";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "00" + milliseconds : (milliseconds < 100) ? "0" + milliseconds : milliseconds;

    document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
