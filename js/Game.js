/** Class representing a game of Phrase Hunter */ 
class Game {
    /**
     * @param {array} phrases array of Phrases
     * @type {number} missed number of wrong guesses the player has in this game
     * @type {Phrase} activePhrase phrase the player is trying to guess this game
     * @type {string} outcome set to either 'win' or 'lose' in @function gameOver  
     */
    constructor (phrases) {
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
        this.outcome = '';
    }

    /**
     * @function startGame starts a new game when event fires
     * removes the start screen overlay
     * sets the activePhrase the player will try to guess
     * adds empty boxes and spaces to display the activePhrase
     */
    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();    
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Gets a random phrase from the this.phrases
     * @returns {Phrase} to be used as the activePhrase
     */
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * 15);
        return phrases[randomIndex];
    }
    
    /**
     * @function handleInteraction handles logic when event fires:
     * disables the keyboard key that triggered the event
     * checks to see if the activePhrase includes the letter the player selected
     * if !match, calls @function removeLife
     * if match, calls @function checkForWin 
     * if winner, calls @function gameOver
     * @param {HTMLElement} keyElement target of the click event
     */
    handleInteraction(keyElement) {
        keyElement.disabled = true;

        /** @type {node} text of the target element*/
        const keyChar = keyElement.innerText;

        /** @type {boolean} true if selected letter is in the activePhrase*/
        const match = this.activePhrase.checkLetter(keyChar);
        

        if (!match) {
            keyElement.classList.add('wrong');
            this.removeLife();
        } else {
            keyElement.classList.add('chosen');

            /** @type {boolean} true if all letters in the activePhrase are revealed*/
            const winner = this.checkForWin();
            
            if (winner) {
                this.gameOver();
            }
        }
    }

    /**
     * @function removeLife removes a life or ends the game if no lives left
     * adds 1 to @type {number} missed
     * if player is out of lives, calls @function gameOver and sets @type {string} outcome
     * replaces liveHeart.png with lostHeart.png
     */
    removeLife() {
        this.missed += 1;
              
        if (this.missed === 5) {
            this.outcome = 'lose';
            this.gameOver();
        } else {
            lives[maxTries - this.missed].innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="30" width="30">';
        }
    }
    
    /**
     * @function checkForWin checks to see if all letters in the activePhrase are shown
     * if player won, sets @type {string} outcome
     * @returns @type {boolean} indicates if player won the game
     */
    checkForWin() {
        if (charDisplay.querySelectorAll('.hide').length === 0) {
            this.outcome = 'win';
            return true;
        } else {
            return false;
        }
    } 

    /**
     * @function gameOver resets variables, classes, etc in preparation for new game
     * displays the overlay screen
     * sets overlay class to value of @type {string} outcome
     * displays a message to the player based on the @type {string} outcome
     * removes letter display boxes (list items) 
     * removes disabled state from @type {HTMLElement} keyboard keys
     * removes chosen/wrong classes from @type {HTMLElement} keyboard keys
     */
    gameOver() {
        overlay.style.display = 'flex';
        overlay.classList = [''];
        overlay.classList.add(this.outcome);
        start_button.classList = [''];
        start_button.classList.add(this.outcome);

        if (this.outcome === 'win') {
            overlay.querySelector('#game-over-message').textContent = `Congrats! You Know Your Idioms!`;
        } else if (this.outcome === 'lose') {
            overlay.querySelector('#game-over-message').textContent = `Better Luck Next Time!`;
        }

        charDisplay.innerHTML = '';
        
        for (const li of lives) {
            li.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="30" width="30">';
        }

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