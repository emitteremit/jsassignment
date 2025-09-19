let currentTime = new Date();
let hour = currentTime.getHours();
let userName = prompt("what is your name");
userName = userName.trim();

if (hour >= 4 && hour < 12  && userName !== "") {
    alert(`Good morning ${userName}`);
}
else if(hour >= 1 && hour <= 4 && userName !== "") {
    alert(`This is mid night go and sleep ${userName}`);
}
else if (hour >= 12 && hour <= 16 && userName !== "") {
    alert(`Good afternoon ${userName}`);
}
else if (hour >= 17 && hour <= 24 && userName !== "") {
    alert(`Good evening ${userName}`);
}
else{
    alert("You Name Is Empty, Please Reload")
}
 