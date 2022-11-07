/*
* Creates fun buttons, yipee
* Travis Carlen.
* 11.7.2022
*/
$("#intro").append("<button id='button1'>Wahoo!</button>");
$("#challenges").append("<button id='button2'>Yipee!</button>");
$("#results").append("<button id='button3'>Mario!</button>");

$("#button2").click(function(){
  $("#challenges").append("<p>No challenges here boss</p>");
});

$("#button1").click(function(){
  $("#button1").toggleClass("orange");
  $("#button2").toggleClass("orange");
  $("#button3").toggleClass("orange");
});

$("#button3").click(function(){
  $("body").toggleClass("mario");
});
