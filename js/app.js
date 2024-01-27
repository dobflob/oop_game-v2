/**
 * @type {array} @name phrases array of @type {Phrase} instances
 */
const phrases = phraseStrings.map(phrase => new Phrase(phrase));

/**
 * Variables to hold HTML elements needed for handling user interactions and updating content on the screen
 * @type {HTMLElement} @name overlay the overlay screen at start/end of the game
 * @type {HTMLElement} @name gameOverMsg h1 message that displays text if player lost/won
 * @type {HTMLElement} @name start_button to attach event listener
 * @type {HTMLElement} @name quit_button to attach event listener
 * @type {HTMLElement} @name charDisplay <ul>> that holds an <li> for each character in the game's activePhrase
 * @type {HTMLElement} @name uiKeyboard the container that holds the rows of keyboard keys displayed on screen
 * @type {HTMLCollection} @name uiKeys the key elements within the ui keyboard
 */

const overlay = document.querySelector('#overlay');
const gameOverMsg = overlay.querySelector('#game-over-message');
const start_button = document.querySelector('#btn__reset');
const quit_button = document.querySelector('#btn__quit');
const charDisplay = document.querySelector('#phrase ul');
const uiKeyboard = document.querySelector('#qwerty');
const uiKeys = uiKeyboard.querySelectorAll('.keyrow > .key');

/**
 * Variables relating to the game's scoring
 * @type {HTMLElement} @name scoreboardOl the <ol> that holds the player's lives
 * @type {HTMLCollection} @name lives the collection of <li> elements that make up the <ol>
 * @type {number} @name maxTries sets max number of tries the player has (updates dynamically if more lives are added to the <ol>)
 */
const scoreboardOl = document.querySelector('#scoreboard ol');
const lives = scoreboardOl.children;
const maxTries = lives.length;

/** Click Events */
/**
 * @listens click 
 * @param {HTMLElement} e the start button
 */
start_button.addEventListener('click', () => {
    game = new Game(phrases);
    game.startGame();
    return game;
});

/**
 * @listens click 
 * @param {HTMLElement} e the specific key the user clicked
 */
uiKeyboard.addEventListener('click', e => {
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
});

/**
 * @listens click
 * @param {HTMLElement} e the quit button
 */
quit_button.addEventListener('click', () => {
    game.outcome = 'quit';
    game.gameOver();
});

/** Keyboard Events */
/**
 * @listens keyup
 * @param {HTMLElement} e the quit button
 * sends the matching ui key to @function handleInteraction if the key pressed is a letter, the game has started, and the key hasn't already been selected
 */
document.addEventListener('keyup', (e) => {
    const playerKey = e.key;
    const isValidEntry = /^[a-z]$/i.test(playerKey);

    if (isValidEntry && overlay.style.display === 'none') {         

        for (i = 0; i < uiKeys.length; i++) {
            if (playerKey === uiKeys[i].textContent && !uiKeys[i].disabled) {
                game.handleInteraction(uiKeys[i]);
                break;
            }
        }
    } 
});