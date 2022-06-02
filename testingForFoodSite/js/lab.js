/*
  I Travis Carlen wrote the following code the 2nd of June 2022.
*/

function loadJSON(filePath) {
  // Load json file;
  var json = loadTextFileAjaxSync(filePath, "application/json");
  // Parse json
  return JSON.parse(json);
}

function loadTextFileAjaxSync(filePath, mimeType)
{
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.open("GET",filePath,false);
  if (mimeType != null) {
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType(mimeType);
    }
  }
  xmlhttp.send();
  if (xmlhttp.status==200 && xmlhttp.readyState == 4 )
  {
    return xmlhttp.responseText;
  }
  else {
    // TODO Throw exception
    return null;
  }
}

// All used global data
var recipesArray = loadJSON('js/recipes.json');
recipesArray = recipesArray.json();
  //.then(response => response.json())
  //.then(data => console.log(data));
var recipeDictionary = {};
var ingredientInput = [];
console.log(recipesArray);
console.log("Updated Version 0.3.3");



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
