
const galeria = document.querySelector('#galeria');
const btnIzquierda = document.querySelector('.flecha.izquierda');
const btnDerecha = document.querySelector('.flecha.derecha');

btnIzquierda.addEventListener('click', () => {
  galeria.scrollBy({
    left: -galeria.clientWidth / 3,
    behavior: 'smooth'
  });
});

btnDerecha.addEventListener('click', () => {
  galeria.scrollBy({
    left: galeria.clientWidth / 3,
    behavior: 'smooth'
  });
});
