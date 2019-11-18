function rrDictionary() {
    var car = {
        Year:2014,
        Make:"Ford",
        Model:"Focus",
        Trim:"SE",
        Color:"Red"
        //Trim:"SEL",
    };
    delete Car.Color;
    document.getElementById("dictionary").innerHTML=car.Color;
}