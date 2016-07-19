//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.

var guest;
var donuts;




guest = parseInt(prompt( "Enter Guest" ));
donuts = parseInt(prompt( "Enter Donuts" ));

if (guest =< donuts){
  return "Breath easy, there are enough donuts"
} else if (guest > donuts) {
  return "Go on a donut run... there are too many people!!"
};