/*
  I Travis Carlen wrote the following code the 2nd of June 2022.
*/

// All used global data
var recipesArray = [];
fetch('js/recipes.JSON')
  .then(response => response.json())
  .then(data => recipesArray = data);
var recipeDictionary = {};
var ingredientInput = [];
console.log("Updated Version 0.3.5");



//Turns the imported recipe data into a dictionary organized by ingredients
function dictionizeRecipes(){
  console.log(recipesArray);
  for (i = 0; i < recipesArray.length; i++){
    for (k = 0; k < recipesArray[i].ingredients.length; k++){
      recipeDictionary[recipesArray[i].ingredients[k]].push(recipesArray[i]);
    }
  }
  console.log(recipeDictionary);
}

//Gets ingredient input from site elements, stores into ingredientInput array
function getInput(){

}
var buttonEl = document.getElementById("dictionize");
buttonEl.addEventListener("click", dictionizeRecipes);
