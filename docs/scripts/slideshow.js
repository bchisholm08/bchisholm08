const poppyPics = [
    "images/poppy1.jpg",
    "images/poppy2.jpg",
    "images/poppy3.jpg"
];

let currentIndex = 0;
const slideshowElement = document.getElementById("slideshow");

function showNextImage() {
    currentIndex = (currentIndex + 1) % poppyPics.length;
    slideshowElement.src = poppyPics[currentIndex];
}

setInterval(showNextImage, 6000);
