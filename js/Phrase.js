/** Class representing a phrase to be used in the game */ 
class Phrase {
    /**
     * @param {string} phrase string from the phraseStrings array
     */
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * @function addPhraseToDisplay displays boxes to represent the letters/words
     * iterates through each array item and create an <li> for each
     * applies the appropriate CSS class(es) and textContent (letter or space)
     * appends the <li> to the dipslay <ul>
     */
    addPhraseToDisplay() {
        this.phrase.split('').forEach((char) => {
            const liElement = document.createElement(`li`);

            if (char === ' ') {
                liElement.classList.add('space');
                liElement.textContent = ' ';
                charDisplay.appendChild(liElement);
            } else {
                liElement.classList.add('letter', 'hide', `${char}`);
                liElement.textContent = `${char}`;
                charDisplay.appendChild(liElement);
            }
        });
    }

    /**
     * @function checkLetter looks for player's letter in the activePhrase
     * @param {string} selectedLetter letter the player picked
     * @returns @type {boolean} indicates if the player's guess is in the activePhrase
     */
    checkLetter(selectedLetter) {
        if (this.phrase.split('').includes(selectedLetter)) {
            this.showMatchedLetter(selectedLetter);
            return true;
        } else {
            return false;
        }    
    }
   
    /**
     * @function showMatchedLetter displays player's correct guess in the appropriate box
     * removes the hide CSS class from each display box representing the matched letter
     * adds the show CSS class to each display box representing the matched letter
     * @param {string} matchedLetter player's correctly guessed letter
     */
    showMatchedLetter(matchedLetter) {
        /** @type {HTMLCollection} all <li> elements in the phrase display*/
        const charLis = charDisplay.children; 

        for (const li of charLis) {
            if (li.innerText === matchedLetter) {
                li.classList.remove('hide');
                li.classList.add('show');
            }
        }
    } 
}