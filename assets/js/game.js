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

document.getElementById("directions").textContent = "Guess what letter I'm thinking of!";
document.getElementById("current-letter").textContent = "";
document.getElementById("attempts-remaining").textContent = "Attempts Remaining: " + attemptsRemaining;
document.getElementById("wins").textContent = "Wins: " + wins;
document.getElementById("losses").textContent = "Losses: " + losses;
document.getElementById("past-guesses").textContent = "Letters Guessed: " + pastGuesses;

function empty(){
    pastGuesses.length = 0;
}

function reset (){
    alert("Next Round!!");
    attemptsRemaining = 10;
    document.getElementById("current-letter").textContent = "";
    empty();
    currentLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}



document.onkeyup = function(event) {
    var letterGuessed = event.key; //key user presses 
    

    if (letterGuessed === "a" || letterGuessed === "b" || letterGuessed === "c" || letterGuessed === "d" || letterGuessed === "e" || letterGuessed === "f" || letterGuessed === "g" || letterGuessed === "h" || letterGuessed === "i" || letterGuessed === "j" || letterGuessed === "k" || letterGuessed === "l" || letterGuessed === "m" || letterGuessed === "n" || letterGuessed === "o" || letterGuessed === "p" || letterGuessed === "q" || letterGuessed === "r" || letterGuessed === "s" || letterGuessed === "t" || letterGuessed === "u" || letterGuessed === "v" || letterGuessed === "w" || letterGuessed === "x" || letterGuessed === "y" || letterGuessed ==="z"){
        for (i = 0; i < currentLetter.length; i++) {
        // var letter = alphabet;
        // if (letterGuessed === letter) {
            console.log(currentLetter);
            if (currentLetter === letterGuessed){
                alert("You Did It!!");
                document.getElementById("current-letter").textContent =  letterGuessed;
                document.getElementById("wins").textContent = wins++;
                setTimeout(function(){ reset(); }, 3000);

            } else if (currentLetter != letterGuessed){
                pastGuesses.push(letterGuessed);
                document.getElementById("attempts-remaining").textContent = attemptsRemaining--
                document.getElementById("past-guesses").textContent = pastGuesses[i];
                    
    
            } 
    
            if (attemptsRemaining === 0){
                document.getElementById("losses").textContent = losses++;
                document.getElementById("current-letter").textContent = currentLetter;
                alert("You're not as psychic as you thought!! The letter was: " + currentLetter);
                setTimeout(function(){ reset(); }, 3000);
            }
    
            directionsText.textContent = "Guess what letter I'm thinking of!";
            pastGuessesText.textContent = "Letters Guessed: " + pastGuesses;
            attemptsRemainingText.textContent = "Attempts Remaining: " + attemptsRemaining;
            winsText.textContent = "Wins: " + wins;
            lossesText.textContent = "Losses: " + losses;
        }
    } else{
        alert("Invalid Key! Try again!!");
    } 
}

    

  


