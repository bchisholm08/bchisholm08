const toggle = document.querySelector('.dark-mode-toggle');
// Add event listener to toggle dark mode class on body
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
