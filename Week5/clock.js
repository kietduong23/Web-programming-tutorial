
var running = false;
var timer = undefined;

function displayTime() {
    var current_date = new Date();
    var current_hour = current_date.getHours();
    var current_min = current_date.getMinutes();
    var current_second = current_date.getSeconds();

    const event = new Date ("1 Jan 2023");
    var total_seconds = (event - current_date) / 1000;
    var days = Math.floor(total_seconds / 3600 / 24);
    var hours = Math.floor(total_seconds / 3600) % 24;
    var mins = Math.floor(total_seconds / 60) % 60;
    var seconds = Math.floor(total_seconds) % 60;


    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (seconds < 10 ) {
        seconds = "0" + seconds;
    }
    if (current_min < 10) {
        current_min = "0" + current_min;
    }
    if (current_second < 10) {
        current_second = "0" + current_second;
    }

    document.querySelector("#time").innerHTML = "Current time: " + current_hour + " : " + current_min + " : " + current_second;
    document.querySelector("#countdown").innerHTML = "New Year Countdown: " + days + " days, " + hours + " hours, " + mins + " minutes, " + seconds + " seconds";
}

function startStop() {
    if (running == false) {
        timer = setInterval(displayTime, 1000);
        document.querySelector("#timer_btn").value = "Stop";
        running = true;
    } else {
        document.querySelector("#timer_btn").value = "Start";
        clearInterval(timer);
        running = false;
    }
}
