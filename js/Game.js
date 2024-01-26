class Game {
    constructor (phrases) {
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = this.getRandomPhrase();
        this.outcome = '';
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
            this.removeLife();
        } else {
            keyElement.classList.add('chosen');
            const winner = this.checkForWin();
            
            if (winner) {
                this.gameOver();
            }
        }
    }

    removeLife() {
        //remove a life when a user guesses and incorrect letter
        //call game over if the user has run out of lives
        this.missed += 1;
              
        if (this.missed === 5) {
            this.outcome = 'lose';
            this.gameOver();
        } else {
            tries = tries - 1;
            console.log(tries);
            lives[tries].innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">';
        }
    }
    
    checkForWin() {
        if (charDisplay.querySelectorAll('.hide').length === 0) {
            this.outcome = 'win';
            return true;
        } else {
            return false;
        }
    } 

    gameOver() {
        overlay.style.display = 'flex';
        overlay.classList.remove('start');
        overlay.classList.add(this.outcome);

        if (this.outcome === 'win') {
            overlay.querySelector('#game-over-message').textContent = `Congrats! You Know Your Idioms!`;
        } else {
            overlay.querySelector('#game-over-message').textContent = `Better Luck Next Time!`;
        }

        // remove all list items from the phrase display
        charDisplay.innerHTML = '';
        
        //reset lives by replacing heart images
        for (const li of lives) {
            li.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">';
        }
        //reset tries
        tries = 5;

        // remove disabled state from each keyboard key and added classes
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