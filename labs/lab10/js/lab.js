/*
* Creates elements and injects them into an output div after the page has loaded
* Travis Carlen.
* 11.2.2022
*/
function nameSort(name) {

  var inputWOSpace = name.toLowerCase().replaceAll(" ","")
  var inputArray = inputWOSpace.split('');

  var inputSorted = inputArray.sort();
  inputSorted[0] = inputSorted[0].toUpperCase();

  var output = inputSorted.join('');
  return output;
}

function RRWM(max){
  return Math.floor(Math.random() * (max + 1));
}

function anagramMe(str){
  strLower = str.toLowerCase();
  var strArray = strLower.split('');
  var tempVal = '';
  for (i = strArray.length; i > 0; i--){
    toSwap = RRWM(i);
    tempVal = strArray[i];
    strArray[i] = strArray[toSwap];
    strArray[toSwap] = tempVal;
  }
  strArray[0] = strArray[0].toUpperCase();
  var output = strArray.join('');
  return output;
}

var myButton = document.getElementById('my-button');
var myForm = document.getElementById('user-name');
var output = document.getElementById('output');
myButton.onclick = function(){
  var realoutput = document.createElement('p');
  realoutput.innerHTML = "Your new legal name is: " + nameSort(myForm.value) + ", enjoy!";
  output.innerHTML = '';
  output.appendChild(realoutput);
};
var myOtherButton = document.getElementById('my-other-button');
myOtherButton.onclick = function(){
  var realoutput = document.createElement('p');
  realoutput.innerHTML = "Your new secret anagram is: " + anagramMe(myForm.value) + ", enjoy!";
  output.innerHTML = '';
  output.appendChild(realoutput);
}
