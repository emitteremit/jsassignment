const paragraph = document.getElementById("answer");
const button1 = document.getElementById("myBtn1");
const button2 = document.getElementById("myBtn2");
const userInput = document.getElementById("userInput");
const div = document.getElementById("whole")
const div2 = document.getElementById("whole2")
const body = document.getElementById("body")
const myCode = document.getElementById("code")
const minNum = 10;
const maxNum = 25;
const maxAttempts = 6;

let machineGuessNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
let attempts = 0;

console.log(machineGuessNumber);

button2.style.display = "none";

const guess = () => {
  const getUserInput = userInput.value.trim();

  if (getUserInput === "") {
    paragraph.textContent = "Your input is not meant to be empty, Please enter a valid number";
    return;
  }

  if (isNaN(getUserInput)) {
    paragraph.textContent = "Your input should be a number not an Alphabet please";
    return;
  }

  const getUserInputToNumber = Number(getUserInput);

  if (getUserInputToNumber > maxNum || getUserInputToNumber < minNum) {
    paragraph.textContent = `Please enter a number between ${minNum} and ${maxNum}`;  
    return;
  }

  attempts++;

  if (machineGuessNumber === getUserInputToNumber) {
    paragraph.textContent = `Congratulations!✅ You guessed it right in ${attempts} tries`;
    button1.style.display = "none";
    button2.style.display = "inline-block";
  } else if (attempts >= maxAttempts) {
    paragraph.textContent = `Game over! all guesses were wrong The right number is ${machineGuessNumber}`;
    button1.style.display = "none";
    button2.style.display = "inline-block";
  } else {
    paragraph.textContent = `Not correct❌. Attempts left: ${maxAttempts - attempts}`;
  }
  userInput.value = "";
  document.getElementById("userInput").value = ""
};

const resetGame = () => {
  machineGuessNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  attempts = 0;
  button1.style.display = "inline-block";
  button2.style.display = "none";
  paragraph.textContent = "";
  userInput.value = "";
  console.log(machineGuessNumber);
};
paragraph.style.color ="green"
const allabout = {
    background: "black",
    color: "white",
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    borderRadius: "10px",
    marginTop: '130px' ,
    boxShadow: "inset  0px 0px 10px white "

}
const allabout2 = {
    padding: '80px'
}
const input = {
    borderRadius:"10px",
    padding:"10px",
    width:"100%",
    maxWidth:"400px",
}
const aboutbutton = {
  border: "none",
  background: "white",
  borderRadius:"20px", 
  padding:"10px 40px",
  marginTop:"20px"
}
const aboutbutton2 = {
  border: "none",
  background: "white",
  borderRadius:"20px",
  padding:"10px 40px",
  marginTop:"20px"
}
body.style.background = "black"
const wholeCode = {
  background: "white",
  width: "100%",
  borderRadius: "10px",
  marginTop: "20px"
}
Object.assign(myCode.style, wholeCode)
Object.assign(div.style, allabout)
Object.assign(div2.style,allabout2)
Object.assign(userInput.style, input)
Object.assign(button1.style, aboutbutton)
Object.assign(button2.style,aboutbutton2)