// Set letter array

var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//Set variables for wins, losses, guesses, and empty variable for user input 
var winNumber = 0;
var lossNumber = 0;
var guessNumber = 9;
var guessedLetters = []; 


//Comp picks a random letter       
var randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
console.log(randomLetter);

//Function - on key press, log key and
document.onkeypress = function (event) {
    var userGuess = event.key;

    //Update the user input array    
    guessedLetters.push(userGuess);

    //If user guesses the right letter win count goes up, guess number resets to 9, user guess array is emptied    
    if (userGuess === randomLetter) {
        winNumber++;
        guessNumber = 9;
        guessedLetters = [];
        resetGame();

    //If user guess is wrong the guess number goes down    
    } else {
        guessNumber--;
    }

    //Once the guess number hits 0 the loss number goes up by one, and the guess number and user guess array are reset
    if (guessNumber === 0) {
        lossNumber++;
        guessNumber = 9;
        guessedLetters = [];
        resetGame();
    }

    //Prints everyhing to index file
    document.getElementById('wins').innerHTML = "Wins: " + winNumber;
    document.getElementById('losses').innerHTML = "losses: " + lossNumber;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guessNumber;
    document.getElementById('guessedLetters').innerHTML = "Guessed letters: " + guessedLetters;

}

function resetGame(){
    var randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
    console.log(randomLetter);
} 