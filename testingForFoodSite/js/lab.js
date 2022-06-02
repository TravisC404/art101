/*
  I Travis Carlen wrote the following code the 10th of May 2022.
*/

// Other global variables of mine
var name = '';

// Grabbing all importent element from the website
fetch('js/recipes.JSON').then(res => res.json()).then(data => console.log(data));
