// Get the elements
const paragraph = document.getElementById("toggle");
const hideButton = document.getElementById("hideBtn");
const showButton = document.getElementById("showBtn");

// Add event listeners to buttons
hideButton.addEventListener("click", () => {
  paragraph.style.display = "none";
});

showButton.addEventListener("click", () => {
  paragraph.style.display = "block";
});

let timerInterval;
let seconds = 0;

// Function to start timer
function startTimer() {
  timerInterval = setInterval(function () {
    seconds++;
    document.getElementById("timer").textContent = seconds;
  }, 1000);
}

// Function to stop timer
function stopTimer() {
  clearInterval(timerInterval);
}
