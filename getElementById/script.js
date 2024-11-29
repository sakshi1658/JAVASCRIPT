// Get the elements
const paragraph = document.getElementById('toggle');
const hideButton = document.getElementById('hideBtn');
const showButton = document.getElementById('showBtn');

// Add event listeners to buttons
hideButton.addEventListener('click', () => {
  paragraph.style.display = 'none';
});

showButton.addEventListener('click', () => {
  paragraph.style.display = 'block';
});