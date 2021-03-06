/*
  I Travis Carlen wrote the following code the 10th of May 2022.
*/

// Other global variables of mine
var name = '';

// Grabbing all importent element from the website
var outputEl = document.getElementById("output");
var inputEl = document.getElementById("user-name");
var input2El = document.getElementById("auto-clear");
var buttonEl = document.getElementById("my-button");
var clearEl = document.getElementById("clear");
var additionalInputsEl = document.getElementById("added-forms");

// Creating editable outputs for output El
var new2El = document.createElement("p");

function prompted(){
  name = inputEl.value
}


function clearOutput(){
  outputEl.innerHTML = '';
}

function refreshAnagram(){
  // gets the prompt
  prompted();

  //checks if auto clear is on, then clears if true
  if (input2El.checked == true)
  {
    clearOutput();
  }
  // puts prompt into output div
  var new1El = document.createElement("p");
  new1El.id = "smol";
  if (name=="h"){
    new1El.innerHTML = "./Anagram -h" + "<br>&emsp;> Just input any string and it will do stuff, DON'T INPUT NULL";
    outputEl.appendChild(new1El);
  }
  else{
    new1El.innerHTML = "./Anagram -i\"" + name + "\"<br>&emsp;> " + anagramMe(name);
    outputEl.appendChild(new1El);
  }
  if (name.toLowerCase() == "null"){
    refreshAnagram();
  }
}

// Reasonable random with max, from 0 to max, inclusive
function RRWM(max){
  return Math.floor(Math.random() * (max+1));
}

// Creates an anagram using the Fisher-Yates Shuffle
function anagramMe(str){
  strLower = str.toLowerCase();
  var strArray = strLower.split('');
  var tempVal = ''
  for (i = strArray.length-1; i > 0; i--){ //only line edited from my implmentation in lab7, realized it wasn't always functioning right
    toSwap = RRWM(i);
    tempVal = strArray[i];
    strArray[i] = strArray[toSwap];
    strArray[toSwap] = tempVal;
  }
  strArray[0] = strArray[0].toUpperCase();
  var output = strArray.join('');
  return output;
}

// Assigning functions to buttons
buttonEl.addEventListener("click", refreshAnagram);
clearEl.addEventListener("click", clearOutput);
