// password generator
let passwordgen = "abcdefghij1234567890!@#$%&**"
let passBut = document.getElementById("myBtn")
let getUserUl = document.getElementById("myUl")
const generatePass = () => {
    document.getElementById("myUl").textContent = "";
    let getInput = document.getElementById("myInput").value
    let passGenerated = " "
    let passwordGeneratorLength = getInput;
    console.log(passwordGeneratorLength);
    for (let i = 0; i < getInput; ++i) {
        let machineGenerator = Math.floor(Math.random() * passwordGeneratorLength);
        passGenerated += passwordgen[machineGenerator];
    }
    console.log(passGenerated)
    console.log("password is about to be generated")
    getUserUl.innerHTML += `<li>${passGenerated}</li>`
    if (getInput > 20) {
        getUserUl.textContent = `you want me to generate password of this long will u remember? anyway this is it (${passGenerated})`
    }
    if (getInput > 30) {
        getUserUl.textContent = "you should only generate a password from 4 to 30"
    }
    if (getInput < 1 || getInput < 4) {
        getUserUl.textContent = "you should only generate a password from 4 to 30"
    }
    if (getInput === "") {
        getUserUl.textContent = "your input is empty input valid inputs"
    }
    if (isNaN(getInput)) {
        getUserUl.textContent = "your input is meant to be a number pls"
    }
    document.getElementById("myInput").value = "";
}
passBut.addEventListener("click", generatePass);

// color generator
let button = document.getElementById("generateBtn");
let box = document.getElementById("colorBox");
button.addEventListener("click", () => {
    const color = getRandomHexColor();
    box.style.backgroundColor = color;
    box.textContent = `color: ${color}`
})
const getRandomHexColor = () => {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const styling = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "20px",
    padding: "20px"
}
const boxStyling = {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "10px",
    padding: "30px",
    marginTop: "30px"
}
Object.assign(box.style, boxStyling)
Object.assign(button.style, styling)