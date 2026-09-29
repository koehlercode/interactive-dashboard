// Put your JavaScript code in this file

// Array of at least 6 possible Magic Eight Ball answers
let answers = [
    "It is certain.",
    "Yes, definitely.",
    "Without a doubt.",
    "Ask again later.",
    "Cannot predict now.",
    "My sources say no."
];

// Function to generate a random index and display the corresponding answer
function displayAnswer() {
    // Generate a random index based on array length
    let index = Math.floor(Math.random() * answers.length);
    
    // Display the circle div and set its content to the selected answer
    document.getElementById("circle").style.display = "block";
    document.getElementById("circle").innerHTML = answers[index];
}

// Event listener for mousedown on the "ball" image
document.getElementById("ball").addEventListener("mousedown", function() {
    // Check if a question is entered into the question input field
    if (document.getElementById("question").value == "") {
        alert("Please enter a question.");
    } else {
        displayAnswer();
    }
});

// Event listener for click on the "reset" button to hide the answer circle
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("circle").style.display = "none";
});