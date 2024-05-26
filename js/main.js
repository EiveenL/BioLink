const typingText = document.getElementById('typing-text');
const hiddenText = document.getElementById('hidden-text').textContent;
const textLength = hiddenText.length; // Get the length of the text

let currentPosition = 0;
let isDeleting = false;
let typingInterval;
let erasingInterval;

function typeWriter() {
  if (isDeleting) return; // Don't type while erasing

  typingText.textContent = hiddenText.substring(0, currentPosition) + "|";
  currentPosition++;

  if (currentPosition === textLength) {
    isDeleting = true;
    clearInterval(typingInterval);
    erasingInterval = setInterval(eraseText, 80); // Start erasing after typing
  }
}

function eraseText() {
  typingText.textContent = hiddenText.substring(0, currentPosition) + "|"; // Add blinking emoji
  currentPosition--;

  if (currentPosition === 0) {
    isDeleting = false;
    clearInterval(erasingInterval);
    typingInterval = setInterval(typeWriter, 70); // Start typing again after erasing

    // Add a delay before starting typing again
    setTimeout(() => {
      typingText.textContent = "|"; // Clear the blinking emoji
      currentPosition = 0; // Reset the position
    }, 500); // Adjust the delay as needed (in milliseconds)
  }
}

typingInterval = setInterval(typeWriter, 70);




