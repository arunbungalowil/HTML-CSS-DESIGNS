document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        if (!emailInput.value) {
            event.preventDefault(); // Prevent form submission
            errorMessage.classList.remove('visually-hidden-error'); // Show error message
        } else {
            errorMessage.classList.add('visually-hidden-error'); // Hide error message if email is filled
            emailInput.classList.remove('error'); // Remove error highlight
        }
    });
});
