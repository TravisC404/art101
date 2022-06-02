/*
  I Travis Carlen wrote the following code the 2nd of June 2022.
*/

// All used global data
var recipesArray = fetch('js/recipes.JSON').then(response => response.json());
var recipeDictionary = {};
var ingredientInput = [];
console.log(recipesArray);
console.log("Updated Version 4.0");

//Turns the imported recipe data into a dictionary organized by ingredients
function dictionizeRecipes(){
  for (i = 0; i < recipesArray.length; i++){
    for (k = 0; k < recipesArray[i].ingredients.length; k++){
      recipeDictionary[recipesArray[i].ingredients[k]] = recipesArray[i];
    }
  }
}

//Gets ingredient input from site elements, stores into ingredientInput array
function getInput(){

}

//


dictionizeRecipes();
console.log(recipesArray);
