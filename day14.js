const userName = document.getElementById("userName");
const email = document.getElementById("email");
const passWord = document.getElementById("passWord");
let form = document.getElementById("form");
const checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const checkUsername = /^[a-zA-Z]{7,}$/;
const checkPassWord = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*?&])[a-zA-Z\d@$!%?&]{8,}/;
const error = document.getElementById("errorEmail");
const errorUserName = document.getElementById("errorUserName");
const errorPassWord = document.getElementById("errorPassWord");
const button = document.getElementById("myBtn");
const submitted = document.getElementById("submitted");
const formAll = document.getElementById("formAll")
const formSubmitted = document.getElementById("formSubmitted")
const remove = document.getElementById("goBack")
let smallLetter = document.getElementById("smallLetter")
let capitalLetter = document.getElementById("capitalLetter")
let checknum = document.getElementById("num")
formSubmitted.style.display = "none";
let sevenChacter = document.getElementById("sevenChacter")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //email
    if (email.value === "") {
        error.textContent = " required";
    }
    else if (!checkEmail.test(email.value.trim())) {
        error.textContent = "email must contain '@' and a domain";
    }
    else {
        error.textContent = ""
    }
    //userName
    if (userName.value === "") {
        errorUserName.textContent = " required";
    }
    else if (!checkUsername.test(userName.value.trim())) {
        errorUserName.textContent = "Username must be at least 6 characters includes only uppercase and lowercase letters"
    }
    else {
        errorUserName.textContent = ""
    }
    //password
    if (passWord.value === "") {
        errorPassWord.textContent = " required";
    }
    else if (!checkPassWord.test(passWord.value.trim())) {
        errorPassWord.textContent = "password must be at least 7 character, include uppercase, lowerCase,Number and special character(@#)"
    }
    else {
        if (checkUsername.test(userName.value.trim()) && checkEmail.test(email.value.trim())) {
            form.style.display = "none"
            formAll.style.display = "none"
            const worall = {
                width: "100%",
                maxWidth: "600px",
                backgroundColor: "white",
                boxShadow: "0px 0px 5px 1px rgb(210, 209, 209)",
                marginTop: "130px",
                height: "400px",
            }
            formSubmitted.style.display = "block"
            submitted.style.display = ""
            userName.value = ""
            email.value = ""
            passWord.value = ""
            Object.assign(formSubmitted.style, worall)
        }
    }
})
checknum.style.color = "red"
sevenChacter.style.color = "red"
capitalLetter.style.color = "red"
passWord.addEventListener("input", () => {
    if (passWord.value.match(/[a-z]/) && passWord.value.match(/[A-Z]/)) {
        capitalLetter.style.color = "green"
    }
    else {
        capitalLetter.style.color = "red"
    }
    if (passWord.value.match(/\d/) && passWord.value.match(/[@$!%*?&]/)) {
        checknum.style.color = "green";
    }
    else {
        checknum.style.color = "red"
    }
    if (passWord.value.match(/^.{8,}$/)) {
        sevenChacter.style.color = "green"
    }
    else {
        sevenChacter.style.color = "red"
    }
})
const errorStyling = {
    color: "rgb(255, 0, 0)",
}
const errorUserNameStyling = {
    color: "rgb(255, 0, 0)",
}
const errorPassWordStyling = {
    color: "rgb(255, 0, 0)",
}
const overall = {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "white",
    boxShadow: "0px 0px 5px 1px rgb(210, 209, 209)",
    marginTop: "130px",
    height: "100%",
    maxHeight: "80vh",
    marginBottom :"20px",
}
Object.assign(formAll.style, overall)
Object.assign(error.style, errorStyling)
Object.assign(errorUserName.style, errorUserNameStyling)
Object.assign(errorPassWord.style, errorPassWordStyling)
const gobackToInput = () => {
    form.style.display = "block"
    formSubmitted.style.display = "none"
}
remove.addEventListener("click", () => {
    formSubmitted.style.display = "none"
    formAll.style.display = "block"
    form.style.display = "block"
})