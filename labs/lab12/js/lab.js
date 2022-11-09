/*
* Creates fun buttons, yipee
* Travis Carlen.
* 11.7.2022
*/

var HouseArray = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
function sortingHat(str){
  console.log(str);
  len = str.length + 1;
  console.log(len);
  mod = len%HouseArray.length;
  return HouseArray[mod];
}
$("#sorting").click(function(){
  var name = document.getElementById('input').value;
  var house = sortingHat(name);
  document.getElementById('output').classList.add("show");
  setTimeout(function(){
      var housEl = document.createElement('p');
      housEl.id = "potterput";
      housEl.innerHTML = "WELCOME TO HOUSE " + house.toUpperCase() + "!!!!";
      $("#output").append(housEl);
      setTimeout(function(){
        housEl.classList.toggle("show");
      }, 1000);
  }, 2000);
});
