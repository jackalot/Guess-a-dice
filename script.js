const diceSidesElement = document.getElementById("diceSides");
const guessElement = document.getElementById("YourGuess");
const submitButton = document.getElementById("submitBtn");
const answerBox = document.getElementById("Answer");

function getRandomInt(max) {
  // Returns a random integer between 1 and max (inclusive)
  return Math.floor(Math.random() * max) + 1;
}

submitButton.addEventListener("click", () => {
  const diceSides = parseInt(diceSidesElement.value);
  const userGuess = parseInt(guessElement.value);

  // Check for valid inputs
  if (isNaN(diceSides) || isNaN(userGuess) || diceSides < 1) {
    answerBox.textContent = "❌ Please enter valid numbers.";
    return;
  }

  const rolledNumber = getRandomInt(diceSides);

  if (rolledNumber === userGuess) {
    answerBox.textContent = `🎲 You rolled a ${rolledNumber}. You Win!`;
  } else {
    answerBox.textContent = `🎲 You rolled a ${rolledNumber}. You Lose.`;
  }
});
