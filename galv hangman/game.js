// This function resets all of the parameters of the game so the user does not need to refresh the page after winning/losing
function resetGame () {
    resetUI();
    gameAnswer = chooseWord();
    gameShownAnswer = blanksFromAnswer(gameAnswer);
    hangmanState = 0;
    drawWord(gameShownAnswer);
}

// This is how the game is started upon page load and how it will be refreshed upon victory/defeat
$(document).ready(resetGame);
function win (gameAnswer) { alert('You win! The answer was ' + gameAnswer.toUpperCase() + '! \n Press OK to play again');  resetGame() ;}
function lose () { alert('Oh no, you lose!'); resetGame(); }

// Takes the character the user types into the Input box and starts all of the Hangman Logic
function doKeypress () {
    var tempChar = $('#letter-input').val().toLowerCase();  // Sanitizes user input to be lower case
    var tempString = "";
    $('#letter-input').val("");     // Resets the input box to be blank

    // Game logic: checks user input against the randomly chosen word
    tempString = guessLetter( tempChar, gameShownAnswer, gameAnswer );
    if ( tempString != gameShownAnswer ) {  // If guess is correct...
        updateWord( tempString );
        gameShownAnswer = tempString;
        if ( gameShownAnswer === gameAnswer ) {
            win(gameAnswer);
        }
    } else {    // If guess is incorrect...
        wrongLetter(tempChar);
        drawSequence[ hangmanState++ ]();
        // console.log(drawSequence[hangmanState]());
        if ( hangmanState === drawSequence.length) {
            lose();
        }
    }
}

// .keyup is jQuery that only registers a keypress once the key has been lifted.
// This ensures the game only registers one input character at a time.
$('#letter-input').keyup( doKeypress );
