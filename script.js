const diceSidesElement = document.getElementById("diceSides");
const guessElement = document.getElementById("YourGuess");
const submitButton = document.getElementById("submitBtn");
const answerBox = document.getElementById("Answer");
const correctTicker = document.getElementById("Correct");
const wrongTicker = document.getElementById("Wrong");
const amountTicker = document.getElementById("diceSides");
let Correct = 0;
let Wrong = 0;

function getRandomInt(max) {
  // Returns a random integer between 1 and max (inclusive)
  return Math.floor(Math.random() * max) + 1;
}

submitButton.addEventListener("click", () => {
  const diceSides = parseInt(diceSidesElement.value);
  const userGuess = parseInt(guessElement.value);
const diceAmount = parseInt(amountTicker.value);
  // Validate inputs
  if (isNaN(diceSides) || isNaN(userGuess) || diceSides < 1) {
    answerBox.textContent = "❌ Please enter valid numbers.";
    return;
  }
for(let i = 0; i < diceAmount; i++)
	{
  const rolledNumber = getRandomInt(diceSides);

  if (rolledNumber === userGuess) {
    answerBox.textContent = `🎲 You rolled a ${rolledNumber}. You Win!`;
    Correct++;
    correctTicker.textContent = Correct;
  } else {
    answerBox.textContent = `🎲 You rolled a ${rolledNumber}. You Lose.`;
    Wrong++;
    wrongTicker.textContent = Wrong;
  }
	}
});
