//window.alert("Hello, World!");
//document.write("Hello, World, Again!");
//var A = "This is a string";
//document.write(A);
//var Bend = "Stretching is a good way to relax.";
//document.write(Bend);
//var Special = "This is Mark\'s car, he calls it \"Betsy\"";
//document.write(Special);
//document.write("The rumors of my death " + "are " + "greatly exagerated.");
//var ConC = "What " + "is your favorite color?";
//document.write(ConC);
var family = "The Ryans", dad = "Robert", mom = "Christen", son1 = "Bailey", son2 = "Connor";
//document.write(son2);
var family = family.fontcolor("green"), dad = dad.fontcolor("blue"), mom = mom.fontcolor("red"), son1 = son1.fontcolor("pink"), son2 = son2.fontcolor("orange");
document.write((family) + " are " +(dad) + ", " + (mom) + ", " + (son1) + " and " +(son2) + ".");
document.write(26*54);
function myFirstFunction() {
    var str="This text is green.";
    var result=str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML=result;
}