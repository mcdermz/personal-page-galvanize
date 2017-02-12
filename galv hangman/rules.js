// List of words the game can choose from
var words = ['cat', 'tree', 'swing', 'around', 'scientist'];

// Function that randomly chooses word as the Answer
function chooseWord () {
    return words[Math.floor(Math.random() * words.length)];
}

// Converts the Answer's letters into underscores
function blanksFromAnswer ( answerWord ) {  
    var result = ""; 
    for ( i in answerWord ) {
        result = "_" + result;
    }
    return result;
}

// These two functions reveal an underscore as a letter if it is correctly guessed (later defined as the user input) 
function alterAt ( n, c, originalString ) {
    return originalString.substr(0,n) + c + originalString.substr(n+1,originalString.length);
}
function guessLetter( letter, shown, answer ) {
    var checkIndex = 0;
    
    checkIndex = answer.indexOf(letter);
    while ( checkIndex >= 0 ) {
        shown = alterAt( checkIndex, letter, shown );
        checkIndex = answer.indexOf(letter, checkIndex + 1);
    }
    return shown;
}