/*
  I Travis Carlen wrote the following code the 2nd of June 2022.
*/

// All used global data
var recipesArray = [];
fetch('js/recipes.JSON')
  .then(response => response.json())
  .then(data => recipesArray = data);
var recipeDictionary = {};
var ingredientInput = ["Bread", "Peanut Butter"];
var outputArray = [];
console.log("Updated Version 0.3.7");



//Turns the imported recipe data into a dictionary organized by ingredients
function dictionizeRecipes(){
  console.log(recipesArray);
  for (i = 0; i < recipesArray.length; i++){
    for (k = 0; k < recipesArray[i].ingredients.length; k++){
      if (recipeDictionary[recipesArray[i].ingredients[k]]==null){
        recipeDictionary[recipesArray[i].ingredients[k]]=[];
      }
      recipeDictionary[recipesArray[i].ingredients[k]].push(recipesArray[i]);
    }
  }
  console.log(recipeDictionary);
}

//Gets ingredient input from site elements, stores into ingredientInput array
function getInput(){

}

//Build array based on ingredientInput, lightly sorted
function buildOutput(){
  for (i = 0; i < ingredientInput.length; i++){
      for (k = 0; k < recipeDictionary[ingredientInput[i]]; i++){
        if (outputArray.length!=0){
          var exists = false;
          for (n = 0; n < outputArray.length; n++){
            if (outputArray[n].name==recipeDictionary[ingredientInput[i]][k].name){
              exists = true;
              outputArray[n].priority += 1;
            }
          }
          if (!exists){
            outputArray.push(recipeDictionary[ingredientInput[i]][k]);
          }
        }
        else{
          outputArray.push(recipeDictionary[ingredientInput[i]][k]);
        }
      }
  }
  console.log("I ran :)");
}

//Build array based
function sortOutput(){

}

function buildSite(){

}

function processOutput(){
  //getInput();
  dictionizeRecipes();
  buildOutput();
  //sortOutput();
  //buildSite();
}


var buttonEl = document.getElementById("dictionize");
buttonEl.addEventListener("click", processOutput);
