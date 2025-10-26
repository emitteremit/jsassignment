const paragraph = document.getElementById("answer");
const highScoreElement = document.getElementById("highScore");
const button1 = document.getElementById("myBtn1");
const button2 = document.getElementById("myBtn2");
const userInput = document.getElementById("userInput");
const minNum = 10;
const maxNum = 25;
const maxAttempts = 6;
let score = 15;
let highScore = 0;
let attempts = 0;
let machineGuessNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

console.log(machineGuessNumber);

button2.style.display = "none";
highScoreElement.style.display = "none";

const guess = () => {
  attempts++;
  const getUserInput = userInput.value.trim();

  if (getUserInput === "") {
    paragraph.textContent = "Your input is not meant to be empty, Please enter a valid number";
    attempts--;
    return;
  }

  if (isNaN(getUserInput)) {
    paragraph.textContent = "Your input should be a number not an Alphabet please";
    attempts--;
    return;
  }

  const getUserInputToNumber = Number(getUserInput);

  if (getUserInputToNumber > maxNum || getUserInputToNumber < minNum) {
    paragraph.textContent = `Please enter a number between ${minNum} and ${maxNum}`;
    attempts--;
    return;
  }

  if (machineGuessNumber === getUserInputToNumber) {
    paragraph.textContent = `Congratulations! You guessed it right in ${attempts} tries you scored ${score} points`;
    highScore += 15;
    highScoreElement.textContent = `Highest Score: ${highScore}`;
    highScoreElement.style.display = "block";
    button1.style.display = "none";
    button2.style.display = "inline-block";
  }
  else if (attempts >= maxAttempts) {
    paragraph.textContent = `Game over! all guesses were wrong The right number is ${machineGuessNumber} you scored 0 poimts`;
    highScoreElement.textContent = `Highest Score: ${highScore}`;
    highScoreElement.style.display = "block";
    button1.style.display = "none";
    button2.style.display = "inline-block";
  }
  else {
    if (getUserInputToNumber > machineGuessNumber) {
      paragraph.textContent = `Not correct. You're too high. Attempts left: ${maxAttempts - attempts}`;
    } else {
      paragraph.textContent = `Not correct. You're too low. Attempts left: ${maxAttempts - attempts}`;
    }
  }
  userInput.value = "";
};

const resetGame = () => {
  machineGuessNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  attempts = 0;
  button1.style.display = "inline-block";
  button2.style.display = "none";
  paragraph.textContent = "";
  userInput.value = "";
  highScoreElement.style.display = "block";
  console.log(machineGuessNumber);
};

button1.addEventListener("click", guess);
button2.addEventListener("click", resetGame);