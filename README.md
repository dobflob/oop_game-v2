# oop_game-v2
Treehouse Tech Degree Project 4: OOP Game - Phrase Hunter

## About my Project
This project is to learn and get comfortable with iterating through arrays and with creating objects as instances of a class. It also provided the freedom to customize the style of the project, which I took advantage of... :D

### Style Adjustments
- Lives were moved to the top left to match where you'd expect to see your lives when playing a video game
- A quit button was added to quickly exit back to the start screen
- A retro color palette was chosen to bring back the feel of oldschool arcade games
- Found a custom font on google that has an 8bit feel to match the theme
- I created my own version of the lives/lostlives hearts to look like 8bit graphics
- I created arrows to have on the start screne to look like 8bit graphics
- Hover states were added to all buttons
- Focus states were added to the Start and Quit buttons in case the player is tabbing through
- All colors were updated to fit with the updated color palette
- Variables were used where possible in the stylesheet to be consistent (and flexibly if I change colors later)

> *Project color palette found at [lospec](lospec.com/palette-list/tag/retro) and was created by user 'polyphrog'*

## Starting the Game
Players click the start button (or hit return when focused on the button).

The Start Button creates a new instance of the Game class and removes the overlay so the phrase hunter ui is visible to interact with. It also starts the new game, which triggers a random phrase to be selected and displayed on screen.

## Playing the Game
The current player can click on a letter displayed on the ui's keyboard or use their keyboard to enter a guess. Players lose a life for each wrong guess.

The game will check if the letter selected exists in the active phrase. 
- If the letter is a match, the letter will show in the appropriate display box(es) and the ui key will change to a green color and be disabled.
- If the letter is not a match, one heart (life) is lost and the ui key will change to an orange color and be disabled.

## Ending the Game
The game ends in one of 3 ways:
- The player runs out of lives (max of 5)
- The player correctly guesses all letters in the phrase
- The player chooses to quit the game

If the player wins, the overlay will come back. The background will be green and a message indicating the player won displays.

If the player loses, the overlay will come back. The background will be orange, and a message indicating the player lost displays.

If the player quits, the overlay will come back. The background will be the starting purple color. No message is displayed.

## Getting Started
Download the project files and open your local copy of index.html in Chrome or visit my github page [dobflob Githup Pages](https://dobflob.github.io/oop_game-v2)