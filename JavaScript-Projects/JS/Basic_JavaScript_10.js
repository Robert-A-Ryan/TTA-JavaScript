function Call_Loop() {
    var x = 0;
    var count ="";
    while (x < 10) {
        count += "<br>The number is " + x;
        x ++;
        document.getElementById("Loop").innerHTML = count;
    }
}

function funLength() {
    var sent = document.getElementById("test").innerText;
    var str = sent.length;
    document.getElementById("count").innerHTML = str;
}


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Flute", "Ford", "Focus"];
var content = "";
var x;
function for_Loop() {
    for (x=0; x < Instruments.length; x++) {
        content += Instruments[x] + "<br>";
    }
    document.getElementById("List").innerHTML = content;
}

function array_Function() {
    var Car_Model = [];
    Car_Model[0] = "Focus";
    Car_Model[1] = "QX60";
    Car_Model[2] = "Ram 1500";
    document.getElementById("Array").innerHTML = Car_Model[0];
}

function constant_function() {
    const myVehicle = {make:"Ford", model:"Focus", year:"2014", color:"Race Red"};
    myVehicle.color = "Baby Blue"
    myVehicle.price = "$12000.00"
    document.getElementById("Constant").innerHTML = "I have " + myVehicle.year + " " + myVehicle.make + " " + myVehicle.model;
    document.getElementById("ChangeConstant").innerHTML = "The " + myVehicle.color + " is priced at " + myVehicle.price + ".";
}


function funVariable() {
    var Bite = "Ouch!";
    document.getElementById("Beforefun").innerHTML = Bite;
        {let Bite = "I'm Bleeding";
        document.getElementById("Duringfun").innerHTML = Bite;}
    document.getElementById("Afterfun").innerHTML = Bite;
}


function funStart() {
    var trouble = 6 * 4;
    return document.getElementById("bet").innerHTML = trouble;
}

let campsite = {
    size: "500 square feet",
    location: "Shelton, WA",
    dues: "$1255.00 annually",
    price: "$25000.00",
    information : function() {
        return "The camping property is in " + this.location + ", the size of the lot is " + this.size + ". The price is "
        + this.price + ".";
    }
}

var Colors = ["Red", "Blue", "Green", "Yellow", "Violet", "Tan", "Orange", "Lime"];
var Colors_List = "";
var x;
function funBreakLoop() {
    for (x=0; x < Colors.length; x++) {
        if (x === 4) {break;}
        Colors_List += Colors[x] + "<br>";
    }
    document.getElementById("Break_Colors").innerHTML = Colors_List;
}
function funContinueLoop() {
    for (x=0; x < Colors.length; x++) {
        if (x === 4) {continue;}
        Colors_List += Colors[x] + "<br>";
    }
    document.getElementById("Continue_Colors").innerHTML = Colors_List;
}