function addition() {
    var first=2;
    var second=3;
    sum = first + second;
    document.getElementById("math").innerHTML="2+3="+sum;
}

function subtraction() {
    first=2;
    second=3;
    dif=first-second;
    document.getElementById("math").innerHTML="2-3="+dif;
}

function multiplication() {
    var simple_math = 2*3;
    document.getElementById("math").innerHTML="2*3=" + simple_math;
}

function division() {
    var divi = 2 / 3;
    document.getElementById("math").innerHTML="2/3=" + divi;
}

function multi() {
    var lots = ((4*5)-6)+18-3;
    document.getElementById("lots_of_math").innerHTML= "Four times five, subtract 6, and then add 18 minus 3=" + lots;
}

function remain() {
    var rem=25%7;
    document.getElementById("lots_of_math").innerHTML=rem
}

function negate() {
    var N=24;
    document.getElementById("lots_of_math").innerHTML=-N;
}

function inc() {
    var I=44;
    I++;
    document.getElementById("i-d").innerHTML="Increment 44 by 1 is:" + I;
}

function dec() {
    var D=62;
    D--;
    document.getElementById("i-d").innerHTML="Decrement 62 by 1 is:" + D;
}

function randy() {
    R=(Math.random()*62);
    document.getElementById("rand").innerHTML=R;
}

function areacirc() {
    r=5;
    Area=(Math.PI)*(Math.pow(r, 2));
    document.getElementById("rad").innerHTML=Area;
    
}