const puzzleEl = document.querySelector("#puzzle");
const statusEl = document.querySelector("#status");
const game = new Hangman("Bonjour", 3);

// init the game to the browser window
puzzleEl.textContent = game.getPuzzle();
// init text message for game status;
statusEl.innerHTML = `Welcome to a game of Hangman! <br> Please enter a letter. <br> You have ${game.remainingGuesses} guesses remaining`;

// get the keypress from browser window as guess
window.addEventListener("keydown", function(e) {
  const guess = e.key;
  game.guessLetter(guess);

  // add the game to the browser window
  puzzleEl.textContent = game.getPuzzle();
  // add status to the window
  game.calculateStatus();
  statusEl.textContent = game.messageStatus();
  // add guessed letters to console.log
  console.log(game.guessedLetters);
});
