function mysentence() {
    var first = "It's been ";
    var second = "a hell ";
    var third = "of a day.";
    var complete = first.concat(second, third);
    document.getElementById("myelement").innerHTML = complete;
}

function myslice() {
    var big = "The quick brown fox jumps over the lazy dog." //document.getElementById("long");
    var part = big.slice(2,6);
    document.getElementById("short").innerHTML = part;
}

function funUpperCase() {
    var little = "Pee-Wee's Big Top";
    var upcase = little.toUpperCase();
    var seek = little.search("Big Top");
    //document.getElementById("change").innerHTML = upcase;
    document.getElementById("mysearch").innerHTML = seek;
}

function funToString() {
    var mynumb = 1024;
    var conv = mynumb.toString();
    document.getElementById("numtostr").innerHTML = conv;
}

function funPrecise() {
    var mynumb = 3.14151617;
    document.getElementById("myprecise").innerHTML = mynumb.toPrecision(6);
}

function funDollar() {
    var mydollar = 212.567879;
    var myfix = mydollar.toFixed(2);
    document.getElementById("twodecimal").innerHTML = myfix;
}

function funPrimative() {
    var mystring = "Whatchoo talking about Willis?";
    document.getElementById("primative").innerHTML = mystring.valueOf();
}