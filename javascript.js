const image = document.querySelector('.aboutME2');

// Create an audio element
const audio = new Audio('powerUp.wav');

// Add click event listener to the image
image.addEventListener('click', function() {
  // Play the audio
  audio.play();
});

