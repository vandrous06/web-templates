document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('forgotPasswordForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;

        // Here you would typically send the email to your server to handle the password reset process
        console.log('Password reset requested for:', email);

        // For demonstration purposes, we'll just show an alert
        alert('Password reset link sent to ' + email);
        form.reset();
    });
});

