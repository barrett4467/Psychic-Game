var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var attemptsRemaining = 10;
var wins = 0;
var losses = 0;
var currentLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; //gives random word
var lettersGuessed = 0; 
var resetLettersGuessed = " "

document.onkeyup = function(event) {
    var letterGuessed = event.key; //key user presses
    for (i = 0; i < currentLetter.length; i++) {
        console.log(currentLetter);
        if (currentLetter === letterGuessed){
            alert("You Did It!!");
            wins++
        } else if (currentLetter != letterGuessed){
            var holder = [];
            holder.push(letterGuessed);
            
            document.getElementById("guesses-so-far").textContent= holder[i];
                //probs an appendChild somewhere in here 

        } else {
            alert("Loser, Loser!!");
        }
    }

}

