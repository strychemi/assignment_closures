
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  var buttons = $('button');
  var buttonListener = function(i) {
    $(buttons[i]).on('click', function() {
       $('#clicked-btn').text('You clicked button #' + i);
    });
  };

  for (var i = 0; i < buttons.length; i++) {
    buttonListener(i);
  }

};
/*
  The issue with assignment 1 was that the listener was refering to the "i" variable from the encasing for-loop, and since "i" was defined in the for-loop the listener just pulls the last incremented value of "i".

  The solution was to encapsulate the listener in a function outside of the loop and then call it in the loop while passing it "i" so each call of the function creates it's own closure and therefore will have access to the "i" arugment its passed.
*/


/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

assignments.two = function(){

  var viking = {  mood: undefined,
                  cheerUp: ( function() {
                          //This part works!
                          //Otherwise, it would be undefined
                          console.log('sad');
                          this.mood = "sad.";
                          $('#mood').text(this.mood);

                          var that = this;

                          //So what goes wrong here?
                          setTimeout( (function() {
                            //this.mood = "Happy!";
                            //viking.mood = "Happy!";
                            that.mood = "Happy!";
                            //THIS even runs correctly!
                            //What is UP with this? :(
                            console.log("Cheered Up!");
                          }), 1000);
                      })
           };



  viking.cheerUp();

  //waits an extra millisecond to make sure
  //that the other setTimeout has run.
  //The problem is NOT here
  setTimeout( function() {
    $('#mood').text(viking.mood);
  }, 1001);


};
/*
This was simply a scoping issue.
In line 46, "this.mood" was called within a different scope (i.e. the anynonymous function callback within the setTimeout method). "this" is different in this context.

The solution was to explicitly refer to the object's variable reference.
*/










// Don't touch this. Just the setup

$(document).ready(function(){


  assignments.one();
  assignments.two();


});
