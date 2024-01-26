/**
 * Variables relating to the phrases used in the game
 * @type {array} @name phraseStrings array of strings 
 * @type {array} @name phrases array of @type {Phrase} instances
 */
const phraseStrings = [
    'Once in a blue moon',
    'Piece of cake',
    'Raining cats and dogs',
    'When pigs fly',
    'Poke the bear',
    'Blow off steam',
    'Throw in the towel',
    'A shot in the dark',
    'Let the cat out of the bag',
    'Back against a wall',
    'Saved by the bell',
    'Break a leg',
    'Barking up the wrong tree',
    'Spill the beans',
    'Under the weather'
];
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
// - code comments: it's best practice for development code to be well commented. replace provided comments iwth your own to briefly describe your code
// - code readability: readability is second only to functionality. double-check your code to ensure the spacing and indentation are consistent
// - cross-browser consistency: to pass, your project only needs to work in chrome, but it's common for developers to test their projects in multiple browsers to know how they will perform out in the wild
// - QA testing: this is the keystone step in the development process:
// -- -- open and run your app
// -- -- open the Chrome DevTools console
// -- -- pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise

