/*
*
* then interprets saving throws of said class into insults via another access
* Travis Carlen.
* 11.21.2022
*/

var comicNumber = 99;

function getComic(){
  $.ajax({
      url: "https://xkcd.com/" + comicNumber + "/info.0.json",
      type: "GET",
      dataType : "json",
      success: function(data) {
          formatComic(data);
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
      }
  })
}

var outputDiv = document.getElementById("output");

function formatComic(data){
  output.innerHTML = "";
  var newTitle = createTitle(data);
  output.appendChild(newTitle);
  var newComic = createComic(data);
  output.appendChild(newComic);
}

function createTitle(data){
  var newEl = document.createElement("p");
  newEl.innerHTML = data.title;
  return newEl;
}

function createComic(data){
  var newEl = document.createElement("img");
  newEl.src = data.img;
  return newEl;
}
// Using the core $.ajax() method

getComic();

document.getElementById("previous").addEventListener("click", function(){
  comicNumber += 1;
  getComic();
});
document.getElementById("next").addEventListener("click", function(){
  comicNumber -= 1;
  getComic();
});
