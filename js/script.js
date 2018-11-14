// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;


$("#shoot").click(function(){
    var shoot = ("#input").val();
    $("#userChoice").text(shoot);
    
    randomNumber = Math.random();
    if (randomNumber > .4){
        computerChoice = "rock"   
    }
    else if (randomNumber > .4 && randomNumber < .7){
        computerChoice = "paper"
    }        
    else {
        computerChoice = "scissors"
    }
});

// DOCUMENT READY FUNCTION BELOW

