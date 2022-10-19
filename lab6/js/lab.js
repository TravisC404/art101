/*
* Writes make, model, color and year of car to website. Calculates age of car on fixed year and outputs to website
* Travis Carlen.
* 10.17.2022
*/

myTransport = ["Bus","Bike","Walking","Car"];

myMainRide = {
    make:"GMC",
    model: "Yukon",
    color: "Gray",
    year: 2016,
    age: function(){
        return 2019 - age;
    }
}
document.writeln("Kinds of transport I use:", myTransport, "</br>") 
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
