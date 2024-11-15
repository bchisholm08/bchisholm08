// Select all carousel items
const items = document.querySelectorAll('.carousel-item');

// Keep track of item index
let currentIndex = 0;

// show the active item based on index
function showCarouselItem(index) {
    items.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

// event listeners for next/previous buttons
document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Loop to start if at end
    showCarouselItem(currentIndex);
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop to end if at start
    showCarouselItem(currentIndex);
});
// first initially
showCarouselItem(currentIndex);
