let currentTime = new Date();
let hour = currentTime.getHours();
hour = Number(prompt("what says the time"))
let userName = "Temitope"

if (hour >= 7 && hour <= 12) {
    alert(`Good morning ${userName}`);
}
else if(hour >= 4 && hour <= 7) {
    alert(`Good morning ${userName}`);
}
else if(hour >= 1 && hour <= 4) {
    alert(`This is mid night go and sleep ${userName}`);
}
else if (hour >= 13 && hour <= 16) {
    alert(`Good afternoon ${userName}`);
}
else if (hour >= 17 && hour <= 24) {
    alert(`Good evening ${userName}`);
}
else {
    alert(`This is not a proper time ${userName} input correct time, the time you input is invalid`);
}
