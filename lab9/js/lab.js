/*
  I Travis Carlen wrote the following code the 8th of May 2022.
*/

// Grabbing the output element from the website
var outputEl = document.getElementById("output");

// Creating new elements to be placed within the website
var new1El = document.createElement("p");
var new2El = document.createElement("h1");
var new3El = document.createElement("p");

// Assigning text to the newly created elements
new1El.innerHTML = "Woah! I (the paragraph element) was made in JavaScript!"
new2El.innerHTML = "WOOO HOOO!";
new3El.innerHTML = "I was added last, but I cut in line!";

// Appending the new elements to the website
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
outputEl.insertBefore(new3El, outputEl.firstChild);
