let start = document.getElementById("start")
let pause = document.getElementById("pause")
let stop = document.getElementById("stop")
let continueBtn = document.getElementById("contiue") 
let startup = 80;
let counts = document.getElementById("countDown")
let countdown;

continueBtn.style.display = "none";

const countDownFunc = () => {
    countdown = setInterval(() => {
        startup--
        counts.textContent = startup < 10 ? `0${startup}` : startup;
        if (startup < 1) {
            clearInterval(countdown)
            counts.textContent = "Time's up!"
        }
    }, 1000);
}

start.addEventListener("click", () => {
    countDownFunc()
    start.style.display = "none"
    pause.style.display = "block"
})

pause.addEventListener("click", () => {
    clearInterval(countdown)
    counts.textContent = "Paused"
    continueBtn.style.display = "block"
    pause.style.display = "none"
})

continueBtn.addEventListener("click", () => {
    countDownFunc()
    continueBtn.style.display = "none"
    pause.style.display = "block"
})

stop.addEventListener("click", () => {
    clearInterval(countdown)
    startup = 80;
    counts.textContent = startup.toString().padStart(2, '0')
    start.style.display = "block"
    pause.style.display = "none"
    continueBtn.style.display = "none"
})

const overall = {
    color: "white",
    background: "black",
    width:"100%",
    maxWidth: "500px",
    margin: "auto",
    borderRadius: "10px",
    marginTop: "180px",
    textAlign: "center",
    padding: "20px"
}
Object.assign(document.getElementById("all").style, overall)