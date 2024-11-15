// Array of Poppy's pictures
const poppyPics = [
    "images/poppy1.jpg",
    "images/poppy2.jpg",
    "images/poppy3.jpg"
];

// Slideshow logic
let currentIndex = 0;
const slideshowElement = document.getElementById("slideshow");

function showNextImage() {
    currentIndex = (currentIndex + 1) % poppyPics.length;
    slideshowElement.src = poppyPics[currentIndex];
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);
