// Toggle dark mode. Safe no-op on pages without a .dark-mode-toggle element.
const toggle = document.querySelector('.dark-mode-toggle');
if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}
