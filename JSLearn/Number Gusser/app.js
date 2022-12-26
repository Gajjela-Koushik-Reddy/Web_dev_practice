/* 
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Let player choose to play again
*/

/* 
What variables do we need?
we need
- min
- max
- winningNumber
*/

// Declare all the required variables
let min = 1,
    max = 10,
    guesses = 3;
    winningNumber = randomNumberGenerator(min, max);

// Declare all the UI Elements
const game = document.querySelector('#game');
const input = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const message = document.querySelector('.message');

// Display min and max in the UI
minNum.textContent = min;
maxNum.textContent = max;

// When submit button is clicked then do some operations on the entered number
guessBtn.addEventListener('click', playGame);

function playGame(e) {
    if(input.value === '') {
        showMessage('Please! Enter a value :(', 'red');
    }
    else {
        let inputVal = parseInt(input.value);
        if(inputVal >= min && inputVal <= max) {
            guesses -= 1;
            if(guesses > 0 && inputVal === winningNumber) {
                showMessage('YaY! you won :)', 'green');
            }
            else if (guesses > 0){
                showMessage(`Try Again! ${guesses} Guesses left.`, 'red');
            }
            else {
                input.disabled = true;
                showMessage('GameOver', 'red');
                
                // Change the value of submit to try again
                guessBtn.value = 'Try Again';

                //Write a function to reload the page
                guessBtn.addEventListener('click', pageReload);
            }
        }
        else {
            showMessage('Enter correct number', 'red');
        }
    }

e.preventDefault();
} 

function showMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
    input.style.borderColor = color;
}

function pageReload(e) {
    location.reload();
}

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}