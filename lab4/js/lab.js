/*
* A whole lot of psuedocode that we wish was this simple, everyone would make a pokemon game if that was the case.
*
* @file This file is the psuedocode for a pokemon battle.
* @author Travis Carlen.
*
* @since 10.12.2022
*/

//Pokemon Battle
  //Start Battle, place both player and enemy pokemon on screen
  //Battle Loop
  //Get Player Input
    //If “attack,” save attack data. If “item,” run item usage. If “flee” and is not a trainer battle, roll flee chance. If the flee is successful, end the battle loop.
  //If player attack
    //Compare Player and Enemy Speeds
    //If player first, run player attack then enemy attack
    //If enemy first, run enemy attack then player attack
    //Else
      //Run enemy attack
  //Check hp of pokemon on field, if hp 0, faint
  //Check the number of pokemon on each side, if 0 on either, end battle loop.
  //If Trainer pokemon is 0, blackout and end combat scene
  //If Opponent pokemon is 0, declare the player winner and end combat scene.
  //Else, player has fled and end combat scene.
