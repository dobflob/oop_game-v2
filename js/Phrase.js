/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.phraseArray = phrase.split('');
    }

    //takes the active phrase and creates list items for each character to display on screen (adds appropriate classes for space characters or letters)
    addPhraseToDisplay() {
        this.phraseArray.forEach((char) => {
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
        console.log(charDisplay);
    }

    checkLetter(selectedLetter) {
        if (this.phraseArray.includes(selectedLetter)) {
            return true;
        } else {
            return false;
        }    
    }
   /*  
    showMatchedLetter() {
        
    } */
}