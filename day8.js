// retirementcalculator
const Calculate = () => {
    let getYearOfBirth = document.getElementById("inputForRetirementage").value.trim();
    if (getYearOfBirth === "") {
        document.querySelector(".answer").textContent = "Please input a valid year of birth your input are invalid.";
        return;
    }
    if (isNaN(getYearOfBirth)) {
        document.querySelector(".answer").textContent = "Your input isn't number, input Numbers as your input";
        return;
    }

    let birthYear = Number(getYearOfBirth);
    let getCurrentYear = new Date().getFullYear();
    let age = getCurrentYear - birthYear;
    let retirementAge = 60;
    let remainingYears = retirementAge - age;

    let result = '';
    if (age < 60 && age >= 1) {
        result = `You are ${age} years old. You have ${remainingYears} years until retirement.`;
    }
    else if (age === 60) {
        result = `You are ${age} years old. You should retire this year.`;
    }
    else if (age > 60) {
        result = `You are ${age} years old. You should have retired ${Math.abs(remainingYears)} years ago.`;
    }
    else {
        result = "your input are invalid input valid input please.";
    }

    document.querySelector(".answer").textContent = result;
    document.getElementById("inputForRetirementage").value = " ";
}
// addition
const addition = () => {
    let getFirstNumber = document.getElementById("firstNumber").value.trim();
    let getSecondNumber = document.getElementById("secondNumber").value.trim();

    if (getFirstNumber === "" || getSecondNumber === "") {
        document.querySelector(".answer2").textContent = "Please input valid numbers.";
        return;
    }
    else if (isNaN(getFirstNumber) || isNaN(getSecondNumber)) {
        document.querySelector(".answer2").textContent = "your input are not numbers, input valid numbers.";
        return;
    }

    let getFirstNumberToNumber = Number(getFirstNumber);
    let getSecondNumberToNumber = Number(getSecondNumber);

    let sum = getFirstNumberToNumber + getSecondNumberToNumber;
    document.querySelector(".answer2").textContent = `The Addition of ${getFirstNumberToNumber} and ${getSecondNumberToNumber} is ${sum}`;
    document.querySelector(".operator").textContent = "+"

    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
}
//multiplication
const multiplication = () => {
    let getFirstNumberInMul = document.getElementById("firstNumber").value.trim();
    let getSecondNumberInmul = document.getElementById("secondNumber").value.trim();

    if (getFirstNumberInMul === "" || getSecondNumberInmul === "") {
        document.querySelector(".answer2").textContent = "Please input valid numbers.";
        return;
    }
    else if (isNaN(getFirstNumberInMul) || isNaN(getSecondNumberInmul)) {
        document.querySelector(".answer2").textContent = "your input are not numbers, input valid numbers.";
        return;
    }

    let getFirstNumberToNumberInMul = Number(getFirstNumberInMul);
    let getSecondNumberToNumberInMul = Number(getSecondNumberInmul);

    let multiply = getFirstNumberToNumberInMul * getSecondNumberToNumberInMul;
    document.querySelector(".answer2").textContent = `The Multiplication of ${getFirstNumberToNumberInMul} and ${getSecondNumberToNumberInMul} is ${multiply}`;
    document.querySelector(".operator").textContent = "*"

    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
}
// substraction
const substraction = () => {
    let getFirstNumberInSub = document.getElementById("firstNumber").value.trim();
    let getSecondNumberInSub = document.getElementById("secondNumber").value.trim();

    if (getFirstNumberInSub === "" || getSecondNumberInSub === "") {
        document.querySelector(".answer2").textContent = "Please input valid numbers.";
        return;
    }
    else if (isNaN(getFirstNumberInSub) || isNaN(getSecondNumberInSub)) {
        document.querySelector(".answer2").textContent = "your input are not numbers, input valid numbers.";
        return;
    }

    let getFirstNumberToNumberInSub = Number(getFirstNumberInSub);
    let getSecondNumberToNumberInSub = Number(getSecondNumberInSub);

    let substract = getFirstNumberToNumberInSub - getSecondNumberToNumberInSub;
    document.querySelector(".answer2").textContent = `The Substraction of ${getFirstNumberToNumberInSub} and ${getSecondNumberToNumberInSub} is ${substract}`;
    document.querySelector(".operator").textContent = "-"

    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
}
// division
const division = () => {
    let getFirstNumberInDiv = document.getElementById("firstNumber").value.trim();
    let getSecondNumberInDiv = document.getElementById("secondNumber").value.trim();

    if (getFirstNumberInDiv === "" || getSecondNumberInDiv === "") {
        document.querySelector(".answer2").textContent = "Please input valid numbers.";
        return;
    }
    else if(isNaN(getFirstNumberInDiv) || isNaN(getSecondNumberInDiv)){
        document.querySelector(".answer2").textContent = "your input are not numbers, input valid numbers.";
        return;
    }

    let getFirstNumberToNumberInDiv = Number(getFirstNumberInDiv);
    let getSecondNumberToNumberInDiv = Number(getSecondNumberInDiv);

    let divide = getFirstNumberToNumberInDiv / getSecondNumberToNumberInDiv;
    document.querySelector(".answer2").textContent = `The Division of ${ getFirstNumberToNumberInDiv } and ${ getSecondNumberToNumberInDiv } is ${ divide } `;
    document.querySelector(".operator").textContent = "/"

    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
}
