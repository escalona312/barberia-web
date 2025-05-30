// Array con tus imágenes
const images = [
    'img/lista1.jpg',
    'img/lista2.jpg', 
    'img/lista3.jpg'
];

let currentIndex = 0;
let hero;   
let dots;

// Función para inicializar cuando cargue la página
function initSlider() {
    hero = document.getElementById('hero');
    dots = document.querySelectorAll('.dot');
    
    // Iniciar con la primera imagen
    changeImage();
    
    // Cambiar cada 4 segundos
    setInterval(changeImage, 4000);
}

function changeImage() {
    hero.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // Actualizar puntos
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
    
    currentIndex = (currentIndex + 1) % images.length;
}

function currentSlide(index) {
    currentIndex = index;
    changeImage();
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', initSlider);