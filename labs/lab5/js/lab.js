/*
* Writes make, model, color and year of car to website. Calculates age of car on fixed year and outputs to website
* Travis Carlen.
* 10.17.2022
*/

make = "GMC";
model = "Yukon";
color = "Gray";
year = 2016;
age = 2022 - year;

document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + "<br>");
