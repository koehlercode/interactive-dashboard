let myTasks = [];
let nextTaskId = 1;

// Function to calculate weekly task goals and update the UI
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Calculate weekly goal based on 5 workdays per week
    let weeklyGoal = dailyGoal * 5;

    // Calculate total goal including bonus tasks
    let totalGoal = weeklyGoal + bonusTasks;

    // Build output message string
    let output = "User: " + userName + "<br>Total Weekly Goal: " + totalGoal;

    // Display output in the HTML paragraph with id "goal-message"
    document.getElementById("goal-message").innerHTML = output;
}

// Function to log the task list as JSON
function logTasks() {
    console.log(JSON.stringify(myTasks));
}

// Function to add a task
function addTask(taskName, priority, isImportant) {
    // Create a task object
    let task = {
        id: nextTaskId,
        name: taskName,
        priority: priority,
        isImportant: isImportant,
        isCompleted: false
    };

    // Add the task object to the array
    myTasks.push(task);
    nextTaskId++;

    // Update the task list on the webpage
    displayTasks();

    // Log the updated task list
    logTasks();
}

// Function to display tasks using DOM nodes
function displayTasks() {
    let userTasks = document.getElementById("user-tasks");

    // Clear the current displayed tasks
    userTasks.innerHTML = "";

    // Create a list item for each task
    myTasks.forEach(function(task) {
        let listItem = document.createElement("li");
        listItem.style.padding = "10px";
        listItem.style.marginBottom = "10px";
        listItem.style.border = "1px solid #cccccc";
        listItem.style.borderRadius = "5px";

        // Apply styling based on task priority
        if (task.priority === "High") {
            listItem.style.borderLeft = "6px solid #dc3545";
        } else if (task.priority === "Medium") {
            listItem.style.borderLeft = "6px solid #ffc107";
        } else {
            listItem.style.borderLeft = "6px solid #198754";
        }

        // Create the task name
        let taskText = document.createElement("span");
        taskText.textContent = task.name + " - " + task.priority + " Priority";

        // Highlight important tasks in red
        if (task.isImportant) {
            taskText.style.color = "red";
            taskText.style.fontWeight = "bold";
        }

        // Apply a strikethrough to completed tasks
        if (task.isCompleted) {
            taskText.style.textDecoration = "line-through";
            taskText.style.color = task.isImportant ? "red" : "#777777";
        }

        listItem.appendChild(taskText);

        // Create a checkbox to mark the task complete
        let completeLabel = document.createElement("label");
        completeLabel.style.display = "block";
        completeLabel.style.marginTop = "8px";

        let completeCheckbox = document.createElement("input");
        completeCheckbox.type = "checkbox";
        completeCheckbox.checked = task.isCompleted;
        completeCheckbox.style.marginRight = "5px";

        completeCheckbox.addEventListener("change", function() {
            task.isCompleted = completeCheckbox.checked;
            displayTasks();
            logTasks();
        });

        completeLabel.appendChild(completeCheckbox);
        completeLabel.appendChild(document.createTextNode("Completed"));
        listItem.appendChild(completeLabel);

        // Create a checkbox to mark the task important
        let importantLabel = document.createElement("label");
        importantLabel.style.display = "block";
        importantLabel.style.marginTop = "5px";

        let importantCheckbox = document.createElement("input");
        importantCheckbox.type = "checkbox";
        importantCheckbox.checked = task.isImportant;
        importantCheckbox.style.marginRight = "5px";

        importantCheckbox.addEventListener("change", function() {
            task.isImportant = importantCheckbox.checked;
            displayTasks();
            logTasks();
        });

        importantLabel.appendChild(importantCheckbox);
        importantLabel.appendChild(document.createTextNode("Important"));
        listItem.appendChild(importantLabel);

        // Create an Edit button
        let editButton = document.createElement("button");
        editButton.type = "button";
        editButton.textContent = "Edit";
        editButton.style.marginTop = "8px";
        editButton.style.marginRight = "5px";

        editButton.addEventListener("click", function() {
            let updatedName = prompt("Edit task name:", task.name);

            if (updatedName !== null && updatedName.trim() !== "") {
                task.name = updatedName.trim();
                displayTasks();
                logTasks();
            }
        });

        listItem.appendChild(editButton);

        // Create a Delete button for this task
        let deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.style.marginTop = "8px";

        deleteButton.addEventListener("click", function() {
            myTasks = myTasks.filter(function(item) {
                return item.id !== task.id;
            });

            displayTasks();
            logTasks();
        });

        listItem.appendChild(deleteButton);

        // Add the task to the webpage
        userTasks.appendChild(listItem);
    });
}

// Function to delete the entire task list
function deleteTaskList() {
    myTasks = [];
    displayTasks();
    logTasks();
}

// Run after the HTML document has loaded
document.addEventListener("DOMContentLoaded", function() {
    // Weekly goal calculator
    let goalBtn = document.getElementById("goal-btn");

    goalBtn.addEventListener("click", function(event) {
        // Prevent form submission and page refresh
        event.preventDefault();

        let userName = document.getElementById("user-name").value;
        let dailyGoal = Number(document.getElementById("daily-goal").value);
        let bonusTasks = Number(document.getElementById("weekly-bonus").value);

        weeklyGoal(userName, dailyGoal, bonusTasks);
    });

    // Create the list that will display tasks
    let userTasks = document.getElementById("user-tasks");

    // Add task form
    let taskForm = document.getElementById("task-entry-form");

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let taskName = document.getElementById("task-name").value.trim();
        let priority = document.getElementById("task-priority").value;
        let isImportant = document.getElementById("task-important").checked;

        // Do not add an empty task
        if (taskName === "") {
            alert("Please enter a task name.");
            return;
        }

        addTask(taskName, priority, isImportant);

        // Reset the form fields
        taskForm.reset();
    });

    // Delete the entire task list
    let deleteListButton = document.getElementById("delete-task-list");

    deleteListButton.addEventListener("click", function() {
        if (myTasks.length > 0) {
            let confirmDelete = confirm("Are you sure you want to delete all tasks?");

            if (confirmDelete) {
                deleteTaskList();
            }
        }
    });
});