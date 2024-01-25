/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    //takes the active phrase and creates list items for each character to display on screen (adds appropriate classes for space characters or letters)
    addPhraseToDisplay(phrase) {
        
        const charArray = phrase.split('');
        console.log(charArray);
        
        charArray.forEach((char) => {
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
  /*   
    checkLetter() {

    }

    showMatchedLetter() {
        
    } */
}