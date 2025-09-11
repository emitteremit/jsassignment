let scoreRequest =prompt("You Want To Know Your Grade? InPut your score");
let scoreRequestConNum = scoreRequest.trim();
let getUsersGrade = Number(scoreRequestConNum);

if (getUsersGrade >= 80 && getUsersGrade <= 100 && !isNaN(getUsersGrade)) {
    alert("based on your score your grade is (A)")
}
else if (getUsersGrade >= 70 && getUsersGrade <= 79 && !isNaN(getUsersGrade)) {
    alert("based on your score your grade is (B)")
} 
else if (getUsersGrade >= 60 && getUsersGrade <= 69 && !isNaN(getUsersGrade)) {
    alert("based on your score your grade is (C)")
}
else if (getUsersGrade >= 50 && getUsersGrade <= 59 && !isNaN(getUsersGrade)) {
    alert("based on your score your grade is (D)")
}
else if (getUsersGrade >= 1 && getUsersGrade <= 49 && !isNaN(getUsersGrade)) {
    alert("based on your score your grade is (F)")
}
else {
    alert("input score at the range of 0 - 100")
}


let ageRequest = prompt("What Is Your Age ");
let ageRequestConNum = ageRequest.trim();
let userAge = Number(ageRequestConNum);
let underAge = 18 - userAge;

if (userAge === 18 && !isNaN(userAge)) {
    alert("You Are 18 Years Old And You Are Old Enough To Drive")
}
else if(userAge > 18 && !isNaN(userAge)){
    alert(`You Are ${userAge} Years Old And You Are Old Enough To Drive.`)
}

else if(userAge >= 1 && userAge < 18 && !isNaN(userAge)){
    alert(`You Are ${userAge} Years Old. You Have ${underAge} years Left To Drive`)
}
else{
    alert("Your Input Is Invalid Input Right Value Please")
}

