/*
* Creates elements and injects them into an output div after the page has loaded
* Travis Carlen.
* 10.31.2022
*/

var outputEl = document.getElementById('output');

var new1El = document.createElement("p");

new1El.innerHTML = "What a wacky silly message";

new1El.style.color = "gray";

var new2El = document.createElement("p");

new2El.innerHTML = "This is not as silly nor as wacky";

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

var reverseEl = document.createElement('h3');

reverseEl.innerHTML = "This Element was created last, but it wanted to be first"

reverseEl.style.fontWeight = "bold";

outputEl.prepend(reverseEl);
