const form = document.getElementById('registrationForm');
const message = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (form.checkValidity()) {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
    form.reset();
  } else {
    message.textContent = "Please fill in all required fields correctly.";
    message.style.color = "red";
  }
});
