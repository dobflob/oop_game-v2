/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor(missed, phrases, activePhrase) {
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase;
    }

    startGame() {
        //hides the start screen overlay
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        //calls getRandomPhrase()
        //sets activePhrase property wtih the chosen phrase
        //this.activePhrase = getRandomPhrase();
        //add phrase to the board by calling addPhraseToDisplay() method on the active phrase property
    }

  
    getRandomPhrase() {
        //getRandomPhrase() randomly retrieves one of the phrases stored in the phrases array and returns it
        const randomIndex = Math.floor(Math.random() * (phrases.length + 1));
        return phrases[randomIndex];
    }

    
    handleInteraction(letter) {
        console.log(letter);
        //controls most of the game logic:
        //checks to see if the button clicked by the player matches a letter in the phrase and directs the game based on whether the player's guess is correct or incorrect
        // - disable selected letter's onscreen keyboard button
        // - if the phrase does not include the letter, add the wrong class to the selected letter's keyboard button and call the removeLive() method
        // - if the phrase includes the guessed letter, add the chosen class to the selected letter's keyboard button and call the showMatchedLetter() method on the phrase; then call checkForWin()
        // - if the player has won the game, also call the gameOver() method
    }

    removeLife() {
        //remove a life from the scoreboard by replacing one of the liveHeart.png images with a lostHeart.png image and increments the missed property. if the player has five missed guesses (i.e. they are out of lives), then end the game by calling the gameOver() method
    }

    
    checkForWin() {
        //checks to see if the player has revealed all of the letters in the active phrase
    }

    
    gameOver() {
        //this method displays the original start screen overlay and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message and replaces the overlay's start class with either the win or lose class
        overlay.style.display = 'flex';    
    }
}