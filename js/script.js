// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice;
var computerChoice;
var randomNumber = 0;


$("#shoot").click(function() {
    userChoice = $("#input").val();
    $("#userChoice").text(userChoice);

    randomNumber = Math.random();
    if (randomNumber <= .4) {
        computerChoice = "rock";
    }
    else if (randomNumber > .4 && randomNumber < .7) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    
    $("#computerChoice").text(computerChoice);
    
    if (userChoice === computerChoice) {
        $("#result").html("Tie!");
    }
    else if ((userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "rock" && computerChoice === "scissors")) {
        $("#result").html("You win!");
    }
    else if ((userChoice === "scissors" && computerChoice === "rock") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "rock" && computerChoice === "paper")) {
        $("#result").html("Computer wins!");
    }
});

// DOCUMENT READY FUNCTION BELOW
