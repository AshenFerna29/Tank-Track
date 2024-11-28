window.addEventListener('load', () => {
    const splash = document.getElementById('Splash');

    setTimeout(() => {
        splash.classList.add('hidden');
    }, 3000); // Show splash screen for 3 seconds

    splash.addEventListener('transitionend', () => {
        window.location.href = 'LoginPage.html'; // Redirect after transition
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById("Loginbtn");

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            window.location.href = 'HomePage.html';
        });
    }
});
