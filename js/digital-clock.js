const displayTime = () => {

    // Create a new Date object
    const date = new Date();

    // Retrieve the current time
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Set the AM/PM session
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    // Add leading zeros when needed
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Get the clock container
    const container = document.getElementById("clock-face");

    // Format the time
    const time = hours + ":" + minutes + ":" + seconds + " " + session;

    // Display the time
    container.innerHTML = time;

    // Get and display the current date
    const calendarDate = date.toLocaleDateString();

    document.getElementById("calendar-date").innerHTML = calendarDate;
};

// Update the clock every second
setInterval(displayTime, 1000);