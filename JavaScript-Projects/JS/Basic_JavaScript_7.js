var glob = 24

function notbroken() {
    var loc = 12
    document.getElementById("inside").innerHTML= loc + glob;
}

function broken() {
    document.getElementById("outside").innerHTML = loc + 2;
}

function pick() {
    var ctime = Date.now();
    var say;
    if (ctime <= 12)
        {say = "Good Morning!";}
    else
        {say = "Good Evening!";}
    document.getElementById("MoFo").innerHTML = say;
}

function tsk() {
    var x = 24;
    var equal;
    if (x + glob > 49)
        {equal = "It is greater than 49.";}
    else
        {equal = "It is less than 49.";}
    document.getElementById("bigger").innerHTML = equal;
}

function guess() {
    var yournum, word;
    var mynumber = 32;
    yournum = document.getElementById("yournumber").value;
    if (yournum == mynumber)
        {word = "You guessed my favorite number.";}
    else
        {word = "You guessed incorrectly!";}
    document.getElementById("answer").innerHTML = word;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}