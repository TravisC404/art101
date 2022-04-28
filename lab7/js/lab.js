/*
  I Travis Carlen wrote the following code the 26th of April 2022.
  - based off the code provided by Wes Modes
*/
var name = '';

function prompted(){
  name = window.prompt("Enter your name here for processing: ");
  return name;
}

function sortString(str){
  // splits the string into an array
  var strArray = str.split('');
  // sorts the array
  strArray.sort();
  // turns the array back into a string
  var output = strArray.join('');
  return output;
}

prompted();

document.writeln("Let me make sure I heard you right, is your name <span id='crazyName'>" + sortString(name) + "</span></br>");
document.writeln("Did I get it wrong? Let me hear it again!</br>");

function refreshName(){
  // gets the prompt
  prompted();
  // slim shady easter egg
  if (name == 'chicka chicka slim shady')
  {
    document.getElementById('byebye').innerHTML = '<image src="img/slim.jpg"></image>';
  }
  else
  {
    // puts prompt into name slot
    document.getElementById('crazyName').innerHTML = sortString(name);
    document.getElementById('legalname').innerHTML = name;
  }
}

function refreshAnagram(){
  // gets the prompt
  prompted();
  // spy kids easter egg
  if (name == "Danger D'Amo")
  {
    document.getElementById('byebye').innerHTML = '<image src="img/slim.jpg"></image>';
  }
  else
  {
    // puts prompt into name slot
    document.getElementById('crazyName').innerHTML = anagramMe(name);
    document.getElementById('legalname').innerHTML = name;
  }
}

function refreshNametag(){
  document.getElementById('nameTagHere').innerHTML = "<div id='hello'><h1>Hello<h1><h3>My Name Is...</h3><div><h2 id='legalname'>______</h2></div></div>";
}



// Reasonable random with max, from 0 to max, inclusive
function RRWM(max){
  return Math.floor(Math.random() * (max + 1));
}


// Creates an anagram using the Fisher-Yates Shuffle
function anagramMe(str){
  strLower = str.toLowerCase();
  var strArray = strLower.split('');
  var tempVal = ''
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
