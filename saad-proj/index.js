const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftArr = document.querySelector('.arrow-left');
const rightArr = document.querySelector('.arrow-right');

let slideIndex = 0;
slides[slideIndex].classList.add('active');

leftArr.addEventListener('click', arrowLeft);
rightArr.addEventListener('click', arrowRight);

function arrowLeft() {
    slides[slideIndex].classList.remove('active');

    slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
    slides[slideIndex].classList.add('active');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function arrowRight() {
    slides[slideIndex].classList.remove('active');

    slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
    slides[slideIndex].classList.add('active');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}






