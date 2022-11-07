/** Injects navigation bar into location. Toggles the navigation bar display
***
***
***
***
***
**/

function show(){
  document.getElementById('nav-container').classList.toggle("active");
  return;
}

var Professions = ["Game Designer.","Animator.","Developer.","Web Designer."];
var profIndex = 0;
var namesIndex = 0;
var Names = ["Travis Carlen", "Travotavo"];
var profEl;
var nameEl;


function typeProcess() {
  profIndex +=1;
  if (profIndex >= Professions.length){
    profIndex = -1;
    namesIndex += 1;
    if (namesIndex >= Names.length){
      namesIndex = 0;
    }
    typingTimeloop("name", -1);
  }
  else{
    typingTimeloop("prof", -1);
  }
}

function typingTimeloop(space, direction){
  var workingEl;
  var workingName = "";
  switch(space){
    case "prof":
      workingEl = profEl;
      workingName = Professions[profIndex];
      break;
    case "name":
      workingEl = nameEl;
      workingName = Names[namesIndex];
      break;
  }
  if (direction==-1){
    if (workingEl.innerHTML.length == 0){
      setTimeout(function(){
        typingTimeloop(space, 1);
      }, 200);
      return;
    }
    try {
      workingEl.innerHTML = workingEl.innerHTML.substring(0, workingEl.innerHTML.length-1);
    } catch (e) {}
    setTimeout(function(){
      typingTimeloop(space, -1);
    }, 50);
    return;
  }
  if (workingEl.innerHTML!=workingName){
    try {
      workingEl.innerHTML = workingName.substring(0, workingEl.innerHTML.length + 1);
    } catch (e) {}
    setTimeout(function(){
      typingTimeloop(space, 1);
    }, 50);
    return;
  }
  return;
}
profEl = document.getElementById('_TTJ_P');
nameEl = document.getElementById('_TTN');
var time = 5;
//Setting a timer to run the above function, every second, converting time into milliseconds
setInterval(typeProcess, time*1000);
