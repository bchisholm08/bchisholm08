// Function to smoothly scroll to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the button when scrolled down a certain distance
window.onscroll = function() {
    const button = document.getElementById("backToTopButton");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};
