var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var attemptsRemaining = 10;
var wins = 0;
var losses = 0;
var currentLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; //gives random word
var pastGuesses = []; 


var directionsText = document.getElementById("directions");
var currentLetterText = document.getElementById("current-letter");
var attemptsRemainingText = document.getElementById("attempts-remaining");
var pastGuessesText = document.getElementById("past-guesses");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");

document.getElementById("directions").textContent = "Press any key to get started!";
document.getElementById("current-letter").textContent = "Current Letter: ";
document.getElementById("attempts-remaining").textContent = "Attempts Remaining: " + attemptsRemaining;
document.getElementById("wins").textContent = "Wins: " + wins;
document.getElementById("losses").textContent = "Losses: " + losses;
document.getElementById("past-guesses").textContent = "Letters Guessed: " + pastGuesses;

function reset (){
    alert("Next Round!");
    attemptsRemaining = 10;
    pastGuesses = 0;
    document.getElementById("current-letter").textContent = "Current Letter: ";
    currentLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

document.onkeyup = function(event) {
    var letterGuessed = event.key; //key user presses 
    for (i = 0; i < currentLetter.length; i++) {
        console.log(currentLetter);
        if (currentLetter === letterGuessed){
            alert("You Did It!!");
            document.getElementById("current-letter").textContent = "Current Letter: " + letterGuessed;
            document.getElementById("wins").textContent = wins++;
            reset();
        } else if (currentLetter != letterGuessed){
            var holder = [];
            pastGuesses.push(letterGuessed);
            
            document.getElementById("attempts-remaining").textContent = attemptsRemaining--
            document.getElementById("past-guesses").textContent = pastGuesses[i];
                //probs an appendChild somewhere in here 

        } else {
            alert("Loser, Loser!!");
        }

        if (attemptsRemaining === 0){
            document.getElementById("losses").textContent = losses++;
            document.getElementById("current-letter").textContent = "Current Letter: " + currentLetter;
            alert("You're not as psychic as you thought!! The letter was: " + currentLetter);
            reset();
        }

        directionsText.textContent = "Press any key to get started!";
        pastGuessesText.textContent = "Letters Guessed: " + pastGuesses;
        attemptsRemainingText.textContent = "Attempts Remaining: " + attemptsRemaining;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
    
    }

}

