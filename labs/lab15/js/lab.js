/*
*
*
*
*
*/
var input = $("#class-select");

$.ajax({
    url: "https://www.dnd5eapi.co/api/classes/",
    type: "GET",
    dataType : "json",
    success: function(data) {
        for (x in data.results){
          var tempChoice = document.createElement("option");
          tempChoice.value = data.results[x].index;
          tempChoice.append(data.results[x].name);
          $("#class-select").append(tempChoice);
        }
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
})

// Using the core $.ajax() method
statInsults = {
  "cha": "Wow! Your dm must love you.",
  "con": "Congrats on picking a class so overpowered it had to be nerfed with a shit saving throw!",
  "str": "LOOK AT ME I'M BIG AND STRONG AND USE ALL CAPITAL LETTERS. That's you right now, and you sound stupid.",
  "dex": "Oh how typical, did you pick this class cause you really wanted to be it, or because it has a dex saving throw?",
  "int": "I bet you think you're so smart. If you see double, it isn't a mistake, I just hate you twice as much",
  "wis": "I bet you think you're so smart. If you see double, it isn't a mistake, I just hate you twice as much"
}

var OutputDiv = $("#output");

function processSI(saving_throw){
  var newInsult = document.createElement("div");
  newInsult.append(statInsults[saving_throw.index])
  return newInsult;
}

function clearOutput(){
  OutputDiv.empty();
}

function callClassData(input){
  $.ajax({
      url: "https://www.dnd5eapi.co/api/classes/" + input,
      type: "GET",
      dataType : "json",
      success: function(data) {
          console.log(data);
          // do stuff
          clearOutput();
          var newOutput = document.createElement("div");
          newOutput.append(processSI(data.saving_throws[0]));
          newOutput.append(processSI(data.saving_throws[1]));
          OutputDiv.append(newOutput);
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
      }

  })
}

document.getElementById("sub-insult").addEventListener("click", function(){
  callClassData(input.val());
});
