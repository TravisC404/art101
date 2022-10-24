/*
* Sorts name alphebetically including capital letters, omitting spaces. Prints old name and new name to screen
* Travis Carlen.
* 10.17.2022
*/

function nameSort(name) {

  var inputWOSpace = name.toLowerCase().replaceAll(" ","")
  var inputArray = inputWOSpace.split('');

  var inputSorted = inputArray.sort();
  inputSorted[0] = inputSorted[0].toUpperCase();

  var output = inputSorted.join('');
  return output;
}

var input = window.prompt("Your name please :)");
document.writeln(input, " was your boring old name :( </br>","\"", nameSort(input),"\" is now your name :) </br>");
