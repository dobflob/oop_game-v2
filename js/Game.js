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
        //sets activePhrase property wtih the chosen phrase
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        //add phrase to the board by calling addPhraseToDisplay() method on the active phrase property
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        //getRandomPhrase() randomly retrieves one of the phrases stored in the phrases array and returns it
        const randomIndex = Math.floor(Math.random() * 15);
        return phrases[randomIndex];
    }
    
    //called when a user chooses a letter on the keyboard...
    handleInteraction(keyElement) {
        const keyChar = keyElement.innerText;
        //controls most of the game logic:
        //checks to see if the button clicked by the player matches a letter in the phrase and directs the game based on whether the player's guess is correct or incorrect
        const match = this.activePhrase.checkLetter(keyChar);
        keyElement.disabled = true;

        if (!match) {
            keyElement.classList.add('wrong');
        } else {
            keyElement.classList.add('chosen');
        }

        
        
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
        
        // remove all list items from the phrase display
        charDisplay.innerHTML = '';
        // removed disabled state from each keyboard key and chosen and wrong classes from the key button
        const keyRows = keyboard.children;
        for (const row of keyRows) {
            const keys = row.children;
            for (const key of keys) {
                key.disabled = false;
                key.classList.remove('chosen', 'wrong');
            }
        }
    }
}