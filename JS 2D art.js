document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('darkModeButton');
    const headerElements = document.querySelectorAll('h1, p');
    const imageElements = document.querySelectorAll('.image-container h2, .image-container p, .info-area');

    darkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        // Check if dark mode is active and update button text
        const isDarkMode = document.body.classList.contains('dark-mode');
        darkModeButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

        // Toggle dark-mode class on header elements
        headerElements.forEach(element => {
            element.classList.toggle('dark-mode', isDarkMode);
        });

        // Toggle dark-mode class on image elements
        imageElements.forEach(element => {
            element.classList.toggle('dark-mode', isDarkMode);
        });
    });
});
