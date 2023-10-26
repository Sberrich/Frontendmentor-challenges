function validateEmail() {
    // Regular expression for email validation
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Get the message element
    let message = document.getElementById('error-msg');

    // Get the email input value
    let email = document.getElementById('error-inp').value;
    let emailerror = document.getElementById('error-inp');

    if (emailRegex.test(email)) {
      // Email is valid
      emailerror.style.background = ''
      message.style.display = 'none'; // Hide the error message
    } else {
      // Email is invalid
      emailerror.style.background = '#ff625733';
      message.style.display = 'block'; // Show the error message
    }
  }