/*
* fizzBuzzBoom (and Bang) generator.
* Travis Carlen.
* 11.14.2022
*/

function* fizzBuzzBoom(maxNum, factors){
  for (var num = 0; num < maxNum; num++){
    var outputStr = "";
    for (var factor in factors){
      if (num % factor == 0 ){
        outputStr += factors[factor];
      }
    }
    if (outputStr){
      outputStr = " - " + outputStr + "!";
    }
    yield num.toString() + outputStr;
  }
}

var factorSet = {3:"Fizz",4:"Buzz",5:"Boom",7:"Bang"};

document.getElementById("submit").addEventListener("click", function(){
  $("#output-0").empty();
  $("#output-1").empty();
  $("#output-2").empty();
  $("#output-3").empty();
  var i = 0;
  var input = parseInt(document.getElementById('input').value);
  for (let n of fizzBuzzBoom(input,factorSet)){
    $("#output-"+(i%4).toString()).append("<p>" + n + "</p>");
    i++;
  }
  $("#output-3").append("<br>");
})
