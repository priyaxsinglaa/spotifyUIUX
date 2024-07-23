document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the value of the email input
    var email = document.getElementById('email').value;
  
    // Validate email format
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Redirect to the main page passing the email as a query parameter
    window.location.href = 'page.html?email=' + encodeURIComponent(email);
  });
  
  // Function to validate email format
  function isValidEmail(email) {
    // This is a simple email validation regex, you can use more complex ones if needed
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', function() {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

/*//////////////////////music bar/////////// */
document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const volumeSlider = document.getElementById("volume-slider");
  
    // Set initial volume
    audioPlayer.volume = volumeSlider.value / 100;
  
    // Update volume when slider is changed
    volumeSlider.addEventListener("input", function() {
      audioPlayer.volume = volumeSlider.value / 100;
    });
  });


// Get the elements
const toggleButton = document.getElementById('toggleButton');
const list = document.getElementById('list');

// Add event listener to the toggle button
toggleButton.addEventListener('click', function() {
    // Toggle visibility of the list
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
    // if (list.classList.contains("hidden")) {
    //     list.classList.remove("hidden");
    // } else {
    //     list.classList.add("hidden");
    // }
});
