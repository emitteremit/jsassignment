const Calculate = () => {
    let firstNumberToNum = prompt("input your first number").trim();
    let Operator = prompt("input the type of operator you want to make use of")
    let seNumber = prompt("input your second number").trim();
    if(isNaN(firstNumberToNum) || isNaN(seNumber)){
        alert("one of your value is not a number")
    }
    else if(firstNumberToNum === "" || seNumber === ""){
        alert("your inputs are empty")
    }
    else if(Operator ==="/"){
        firstNumberToNum = Number(firstNumberToNum);
        seNumber = Number(seNumber);
        let division = firstNumberToNum / seNumber;
        alert(`the division between ${firstNumberToNum} and ${seNumber} is ${division}`);
    }
    else if(Operator === "+"){
        firstNumberToNum = Number(firstNumberToNum);
        seNumber = Number(seNumber);
        let sum = firstNumberToNum + seNumber;
        alert(`the additon of ${firstNumberToNum} and ${seNumber} is ${sum}`)
    }
    else if(Operator === "-"){
        firstNumberToNum = Number(firstNumberToNum);
        seNumber = Number(seNumber);
        substraction = firstNumberToNum - seNumber;
        alert(`the substraction of ${firstNumberToNum} and ${seNumber} is ${substraction}`)
    }
    else if(Operator === "*"){
        firstNumberToNum = Number(firstNumberToNum);
        seNumber = Number(seNumber);
        multiplication = firstNumberToNum * seNumber;
        alert(`the mulitiplication of ${firstNumberToNum} and ${seNumber} is ${multiplication}`)
    }
    else{
        alert("check your input ")
    }
}