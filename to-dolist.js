// Get DOM elements
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("tasklist");
const errorParagraph = document.getElementById("paragraph");
const taskInput = document.getElementById("myInputList");
const startTimeInput = document.getElementById("startTime");
const endTimeInput = document.getElementById("endTime");

let taskToEdit;

// Function to format time
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs}H:${mins}M:${secs}S`;
}

// Function to create task element
function createTaskElement(task, countSec) {
    const taskElement = document.createElement("li");
    taskElement.innerHTML = `
        <span style="flex-grow: 1;">${task}</span>
        <div style="text-align: center; flex-grow: 1;">
            <span id="duration">${formatTime(countSec)}</span>
        </div>
        <div style="flex-grow: 1; text-align: center;">
            <button style="border: none; background-color: transparent; color:#A4193D; border-radius:5px; background-color:#FFDFB9;" id="edit-btn"><i class="fa fa-edit"></i></button>
            <button style="border: none; background-color: transparent; color:#A4193D; border-radius:5px; background-color:#FFDFB9;" id="remove-btn"><i class="fa fa-trash"></i></button>
            <button style="border: none; background-color: transparent; color:#A4193D; border-radius:5px; background-color:#FFDFB9;" id="done-btn"><i class="fa fa-check"></i></button>
        </div>
    `;
    taskElement.style.display = "flex";
    taskElement.style.justifyContent = "space-between";
    taskElement.style.alignItems = "center";
    taskElement.style.marginTop = "10px";

    const countDown = setInterval(() => {
        countSec--;
        if (countSec < 0) {
            clearInterval(countDown);
            taskElement.querySelector("#duration").textContent = "Completed";
        } else {
            taskElement.querySelector("#duration").textContent = formatTime(countSec);
        }
    }, 1000);

    taskElement.querySelector("#edit-btn").addEventListener("click", () => {
        taskToEdit = taskElement;
        const taskText = taskElement.querySelector("span:nth-child(1)").textContent;
        const timeText = taskElement.querySelector("#duration").textContent;
        taskInput.value = taskText;
        taskList.removeChild(taskElement);
        clearInterval(countDown);
    });

    taskElement.querySelector("#remove-btn").addEventListener("click", () => {
        const check = confirm(`Do you wish to delete ${task} from your list?`);
        if (check) {
            taskList.removeChild(taskElement);
            clearInterval(countDown);
        }
    });

    taskElement.querySelector("#done-btn").addEventListener("click", () => {
        taskElement.querySelector("#duration").textContent = "Completed";
        clearInterval(countDown);
    });

    return taskElement;
}

// Function to add task
// Function to add task
function addTask() {
    const task = taskInput.value.trim();
    const startTime = startTimeInput.value.trim();
    const endTime = endTimeInput.value.trim();

    if (task !== "" && startTime !== "" && endTime !== "") {
        const startTimeParts = startTime.split(":");
        const endTimeParts = endTime.split(":");
        const startSeconds = parseInt(startTimeParts[0]) * 3600 + parseInt(startTimeParts[1]) * 60;
        const endSeconds = parseInt(endTimeParts[0]) * 3600 + parseInt(endTimeParts[1]) * 60;
        const countSec = endSeconds - startSeconds;

        if (countSec > 0) {
            if (taskToEdit) {
                taskToEdit.querySelector("span:nth-child(1)").textContent = task;
                taskToEdit.querySelector("#duration").textContent = formatTime(countSec);
                taskList.appendChild(taskToEdit);
                taskToEdit = null;
            } else {
                const taskElement = createTaskElement(task, countSec);
                taskList.appendChild(taskElement);
            }

            taskInput.value = "";
            startTimeInput.value = "";
            endTimeInput.value = "";
            errorParagraph.textContent = "";
        } else {
            errorParagraph.textContent = "End time must be later than start time.";
        }
    } else {
        errorParagraph.textContent = "Your input is empty or invalid. Please enter valid input.";
    }
}

// Create header
const header = document.createElement("li");
header.innerHTML = `
    <p style="flex-grow: 1;">Task</p>
    <p style="flex-grow: 1; text-align: center;">Duration</p>
    <p style="flex-grow: 1; text-align: center;">Adjustment</p>
`;
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.fontWeight = "bold";
header.style.borderBottom = "1px solid #ccc";

taskList.appendChild(header);

// Event listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});