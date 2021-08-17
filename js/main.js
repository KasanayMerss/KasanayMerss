const fila = document.querySelector('.contenedor-carousel');
const videos = document.querySelectorAll('.viedos');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

//-- flechas--//
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

//-- Paginaci0n --//
const numer0Paginas = Math.ceil(videos.lenght / 5);