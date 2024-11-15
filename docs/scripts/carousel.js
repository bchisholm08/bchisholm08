// Carousel script for research/projects
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showCarouselItem(index) {
    items.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showCarouselItem(currentIndex);
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showCarouselItem(currentIndex);
});

// Initial display
showCarouselItem(currentIndex);
