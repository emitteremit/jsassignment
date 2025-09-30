let getbutton = document.getElementById("myBtn")
let paragraph = document.getElementById("answer")
getbutton.addEventListener("click", () => {
    let getInput = document.getElementById("ourInput").value.trim();
    let monthduration = document.getElementById("monthDuration").value.trim();
    let getMonthDuration = parseFloat(monthduration);
    let getInputToNumber = parseFloat(getInput);
    let Interest = ((15) * getInputToNumber);
    let monthlyInterest = Interest /100;
    let TotalRepayment = (getInputToNumber + monthlyInterest);
    let monthlyRepayment = TotalRepayment / getMonthDuration;
    monthlyRepayment = Math.round(monthlyRepayment)
    let monthsToRepay = TotalRepayment / monthlyRepayment;
    monthsToRepay = Math.round(monthsToRepay)
    if (!isNaN(getInputToNumber) && !isNaN(getMonthDuration) && getInputToNumber !== "" && getMonthDuration !== "") {
        paragraph.textContent = `you are borrowing $${getInputToNumber} for ${getMonthDuration} months your total repayment is $${TotalRepayment} while your monthly repayment is $${monthlyRepayment} for ${monthsToRepay} months`
    }
    if (getInput === "" || monthduration === "") {
        paragraph.textContent = "you input can't be empty please input valid input";
    }
    if (isNaN(monthduration) || isNaN(getInput)) {

        paragraph.textContent = "your input must be a number, please correct it";
    }

    document.getElementById("ourInput").value = "";
    document.getElementById("monthDuration").value = "";
})