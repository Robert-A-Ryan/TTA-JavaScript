function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are not tall enough":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride."
}

function OldEnough() {
    var age, old;
    age = document.getElementById("age").value;
    old = (age >= 18) ? "You are old enough":"You are still not old enough";
    document.getElementById("yesno").innerHTML= old + " to vote."
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Customer(fname, lname, phone, city) {
    this.Customer_fname = fname;
    this.Customer_lname = lname;
    this.Customer_phone = phone;
    this.Customer_city = city;
}

var one = new Customer("John", "Smith","(206) 235-5516","Renton");
var two = new Customer("Mary","Jane","(425) 223-5546","Bellevue");
var three = new Customer("Marsha","Johns","(253) 446-2210","Tacoma");
function fullname() {
    document.getElementById("New_and_This").innerHTML = "Our first customer is " + one.Customer_fname + " " + one.Customer_lname + " and they live in " + one.Customer_city;
}

function Family(First, Last, Age,) {
    this.Family_fname = First;
    this.Family_lname = Last;
    this.Family_age = Age;
}

var dad = new Family("Jack", "Ryan", 72)
var mom = new Family("Kathy", "Ryan", (70))

function MandD() {
     document.getElementById("myparents").innerHTML= "My dad is " + dad.Family_fname + " " + dad.Family_lname + " and he is " + dad.Family_age + " years old.";
}

function addup() {
    document.getElementById("mynum").innerHTML = upadd();
    function upadd() {
        var anynum = 63;
        function increaseby2() {
            (anynum += 2);
        }
        increaseby2();
        return anynum;
    }
}