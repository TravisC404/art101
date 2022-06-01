/*
  I Travis Carlen wrote the following code the 10th of May 2022.
*/

// Other global variables of mine
var name = '';

// Grabbing all importent element from the website
var outputEl = document.getElementById("output");
var rows = [
  [document.createElement("div"), document.createElement("div"), document.createElement("div")],
  [document.createElement("div"), document.createElement("div"), document.createElement("div")],
  [document.createElement("div"), document.createElement("div"), document.createElement("div")]
];

var row = document.createElement('div');
row.setAttribute("class", "row");

for (i = 0; i < rows.length; i++){
  for (x = 0; x < rows[i].length; x++){
    rows[i][x].setAttribute("class", "item");
    row.appendChild(rows[i][x]);
  }
  outputEl.appendChild(row);
  row = document.createElement('div');
  row.setAttribute("class", "row");
}

$(".item").click(function() {
  if ($(this).hasClass("item")){
    $(this).removeClass("item");
    $(this).addClass("item-clicked");
  }
  else{
    $(this).removeClass("item-clicked");
    $(this).addClass("item");
  }
});
