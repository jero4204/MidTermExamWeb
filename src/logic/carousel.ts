// Obtenemos las referencias a los botones y el contenedor del carrusel
const prevBtn = document.getElementById('prevBtn') as HTMLButtonElement;
const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;
const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;

// Inicializamos el índice actual del carrusel
let currentIndex: number = 0;

// Obtenemos la cantidad total de imágenes
const totalImages: number = document.querySelectorAll('.carousel-image').length;

// Función para mover el carrusel hacia la derecha (siguiente imagen)
nextBtn.addEventListener('click', () => {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});

// Función para mover el carrusel hacia la izquierda (imagen anterior)
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});