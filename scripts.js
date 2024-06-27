let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].style.display = 'block';
}

slides.forEach((slide, index) => {
    if (index !== currentIndex) {
        slide.style.display = 'none';
    }
});

setInterval(showNextSlide, 3000);
