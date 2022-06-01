/*
  I Travis Carlen wrote the following code the 31st of May 2022.
*/

$("#goal").click(function() {
  $("#goalText").html("Overcome depression and do all missing labs (even if I won't get a grade for them).");
});

$("#challenge").click(function() {
  $("#challengeText").html("Avoid vomiting cause JQuery is gross as hell.");
});

$("#big").click(function() {
  var fontsize = parseInt($(this).css("font-size"));
  $(this).css({'font-size': fontsize + 10});
});
