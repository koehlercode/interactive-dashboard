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

// Add event listener to the button once the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    let goalBtn = document.getElementById("goal-btn");

    goalBtn.addEventListener("click", function (event) {
        // Prevent form submission/page refresh
        event.preventDefault();

        // Retrieve and convert form input values
        let userName = document.getElementById("user-name").value;
        let dailyGoal = Number(document.getElementById("daily-goal").value);
        let bonusTasks = Number(document.getElementById("weekly-bonus").value);

        // Call weeklyGoal function with form input values
        weeklyGoal(userName, dailyGoal, bonusTasks);
    });
});