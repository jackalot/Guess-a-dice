const diceSidesElement = document.getElementById("diceSides");
const guessElement = document.getElementById("YourGuess");
const submitButton = document.getElementById("submitBtn");
const answerBox = document.getElementById("Answer");
const correctTicker = document.getElementById("Correct");
const wrongTicker = document.getElementById("Wrong");
const amountTicker = document.getElementById("DiceAmount"); // Corrected ID reference
let Correct = 0;
let Wrong = 0;
guessElement.addEventListener("click", () => {
  guessElement.setAttribute("max", diceSidesElement.value);
});
function getRandomInt(max) {
  // Returns a random integer between 1 and max (inclusive)
  return Math.floor(Math.random() * max) + 1;
}

submitButton.addEventListener("click", () => {
  const diceSides = parseInt(diceSidesElement.value);
  const userGuess = parseInt(guessElement.value);
  const diceAmount = parseInt(amountTicker.value); // Fixed reference

  // Validate inputs
  if (
    isNaN(diceSides) ||
    isNaN(userGuess) ||
    isNaN(diceAmount) ||
    diceSides < 1 ||
    diceAmount < 1
  ) {
    answerBox.textContent = "❌ Please enter valid numbers.";
    return;
  }

  // Reset display for correct/wrong counters
  let currentWinCount = 0;
  let currentLoseCount = 0;

  for (let i = 0; i < diceAmount; i++) {
    const rolledNumber = getRandomInt(diceSides);

    if (rolledNumber === userGuess) {
      currentWinCount++;
    } else {
      currentLoseCount++;
    }
  }

  // Display results
  if (currentWinCount > 0) {
    answerBox.textContent = `🎲 You rolled ${currentWinCount} winning number(s)! You Win!`;
    Correct += currentWinCount;
    correctTicker.textContent = Correct;
  }

  if (currentLoseCount > 0) {
    answerBox.textContent += ` 🎲 You rolled ${currentLoseCount} losing number(s). You Lose.`;
    Wrong += currentLoseCount;
    wrongTicker.textContent = Wrong;
  }
});
