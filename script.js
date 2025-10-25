// script.js
const diceSidesElement = document.getElementById("diceSides");
const guessElement = document.getElementById("YourGuess");
const submitButton = document.getElementById("submitBtn");
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
submitButton.addEventListener("click", () => {
  const diceSides = diceSidesElement.value;
  const userGuess = guessElement.value;
  if (getRandomInt(diceSides) === userGuess) {
    console.log("You win");
  } else {
    console.log("You Lose");
  }
});
