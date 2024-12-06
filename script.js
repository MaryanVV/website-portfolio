const track = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems; // Avanza al siguiente
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
});

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Regresa al anterior
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
});
