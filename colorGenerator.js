// password generator
let passwordgen = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%&*"
let passBut = document.getElementById("myBtn")
let getUserUl = document.getElementById("myUl")
let paragraph = document.getElementById("para")
const generatePass = () => {
    let getInput = document.getElementById("myInput").value
    let passwordGeneratorLength = parseInt(getInput);
    let passGenerated = ""
    console.log(passwordGeneratorLength);
    console.log("password is about to be generated")
    if (getInput === "") {
        // li.style.display = "none"
        paragraph.textContent = "your input is empty input valid inputs"
        return;
    }
    if (isNaN(getInput)) {
        paragraph.textContent = "your input is meant to be a number not an alphabets"
        li.style.display = "none"
        return;
    }
    if (getInput > 30) {
        paragraph.textContent = "you should only generate a password from 4 to 30"
        li.style.display = "none"
        return;
    }
    if (getInput < 4) {
        paragraph.textContent = "you should only generate a password from 4 to 30"
        li.style.display = "none"
        return;
    }
    for (let i = 0; i < passwordGeneratorLength; i++) {
        let machineGenerator = Math.floor(Math.random() * passwordgen.length);
        passGenerated += passwordgen[machineGenerator];
    }
    console.log(passGenerated)
    const li = document.createElement("li");
    li.textContent = passGenerated;
    li.style.listStyle = "none";
    getUserUl.style.color = "white";
    li.style.borderRadius = "5px";
    li.style.marginBottom = "10px";
    getUserUl.appendChild(li)
    document.getElementById("myInput").value = "";
    paragraph.textContent = ""
}
passBut.addEventListener("click", generatePass);

// color generator
let button = document.getElementById("generateBtn");
let box = document.getElementById("colorBox");
let clear = document.getElementById("clearColor");
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
clear.addEventListener("click", () => {
    box.style.backgroundColor = "black"
    box.style.color = "white"
    box.textContent = "Color Cleared"
})
const secondStyling = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "20px",
    padding: "20px",
}
Object.assign(clear.style, secondStyling)
Object.assign(box.style, boxStyling)
Object.assign(button.style, styling)