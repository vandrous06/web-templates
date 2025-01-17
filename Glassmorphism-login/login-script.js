document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        // Here you would typically send the login data to your server for authentication
        console.log('Login attempt:', { email, password, rememberMe });

        // For demonstration purposes, we'll just show an alert
        alert('Login successful!');
        form.reset();
    });
});

