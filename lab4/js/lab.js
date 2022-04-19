//On Enter webpage
  //Instantiate menu list array
  //Instantiate cart list array
  //Instantiate all job objects into menu list
  //Total vairable for cost of cart
//On mouse press on objects
  //If object on menu list
    //Clone menu list item into cart list
    //Run update price function
  //If object in cart list
    //Modify object
    //Run update price function
  //Else do nothing
//Update Price Function (returns cost of cart)
  //Set cost of cart to 0
  //For each in cart list
    //Create var tempPrice at cost of object
    //For each modifier on object in cart list
      //modify tempPrice based on modifier
    //Add tempPrice to cost of cart
  //display cost of cart
//On press finalize button
  //Create text file to download
  //For each in cart list
    //Add item to text file
    //For each modifier on object in cart list
      //add breakline, indent and modifier to text file
    //add breakline
  //add result of Update Price Function() to file
  //download text file
