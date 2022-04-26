/*
  I Travis Carlen wrote the following code the 26th of April 2022.
  - based off the code provided by Wes Modes
*/
myGames = [
  "Caves of Qud",
  "Skullgirls 2nd Encore",
  "Stardew Valley",
  "Super Auto Pets",
  "Mystery Chronicle: One Way Heroics",
  "Xenoblade Chronicles",
  "Cadence of Hyrule",
  "Hollow Knight"
];

myMainGame = {
  name: "Hollow Knight",
  genre: "Metroidvania",
  theme: "Bugs",
  year: 2017,
  age: function(){
    return 2022 - this.year;
  }
}

//Screw you I'm putting a for loop in
document.writeln("Games Recently Played: ");
for (i = 0; i < myGames.length; i++){
  document.writeln(myGames[i]);
  if (i < myGames.length - 1){
      document.writeln(", ");
  }
}
document.writeln("</br>");
document.writeln("My Favorite Game: <pre>" + JSON.stringify(myMainGame, null, '\t') + "</pre>");
document.writeln("Wow! " + myMainGame.name + " is " + myMainGame.age() + " years old!")
