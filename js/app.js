/**
 * @type {array} @name phrases array of @type {Phrase} instances
 */
const phrases = phraseStrings.map(phrase => new Phrase(phrase));

/**
 * Variables to hold HTML elements needed for handling user interactions and updating content on the screen
 * @type {HTMLElement} @name charDisplay the unordered list that holds an li for each character in the game's activePhrase
 * @type {HTMLElement} @name overlay the overlay screen shown at the start and end of the game
 * @type {HTMLElement} @name start_button has the event listener to know when to start a new game
 * @type {HTMLElement} @name keyboard the container that holds the rows of keyboard keys displayed on screen
 */
const charDisplay = document.querySelector('#phrase ul');
const overlay = document.querySelector('#overlay');
const start_button = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');

/**
 * Variables relating to the game's scoring
 * @type {HTMLElement} @name scoreboardOl the <ol> that holds the player's lives
 * @type {HTMLCollection} @name lives the collection of <li> elements that make up the <ol>
 * @type {number} @name maxTries sets max number of tries the player has (updates dynamically if more lives are added to the <ol>)
 */
const scoreboardOl = document.querySelector('#scoreboard ol');
const lives = scoreboardOl.children;
const maxTries = lives.length;

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
keyboard.addEventListener('click', e => {
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
});

// // FINISHING THE PROJECT


// - cross-browser consistency: to pass, your project only needs to work in chrome, but it's common for developers to test their projects in multiple browsers to know how they will perform out in the wild


