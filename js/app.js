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
const charDisplay = document.querySelector('#phrase ul');

const overlay = document.querySelector('#overlay');
const start_button = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');

const scoreboardOl = document.querySelector('#scoreboard ol');
const lives = scoreboardOl.children;
let tries = 5;

start_button.addEventListener('click', () => {
    game = new Game(0, phrases, null);
    game.startGame();
    return game;
});

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

