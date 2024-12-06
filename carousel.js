const track = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));

let currentIndex = 0; // Índice de la diapositiva actual

// Actualiza el carrusel mostrando solo un proyecto
function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Configurar las flechas
rightArrow.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Volver al inicio si estamos al final
  }
  updateCarousel();
});

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // Ir al final si estamos al inicio
  }
  updateCarousel();
});
