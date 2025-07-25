// === Frases posibles para mostrar aleatoriamente ===
const frases = [
  "5MP de pura nostalgia digital",
  "Cuando el CCD tenía más alma que los megapíxeles",
  "120 MP o simplemente 5MP",
  "El auténtico #nofilter era tener una Coolpix",
  "¿Recuerdas el sonido del obturador digital?",
  "VHS O SD ",
  "Fotografía slow-tech en la era hiperdigital",
  "Toj mire esta en mi pagina hola jajaja pongame 100 me desbele haciendo solo la intro ",
  "¿Recuerdas a las Cybershoot, Coolpix , Easyshare, Power shot .....?",
];

const titleText = document.getElementById("titleText");
const slideshow = document.getElementById("slideshow");
const btn = document.getElementById("btnContainer");

// === Mostrar frase aleatoria ===
function mostrarFraseAleatoria() {
  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
  titleText.innerText = fraseAleatoria;
}
mostrarFraseAleatoria();

// === Slideshow ===
const imagenes = ['Handy.jpg', 'JVC.jpg', 'maxresdefault.jpg',  'sddefault.jpg', '2583685735.jpg',  ];
let index = 0;

function cambiarImagen() {
  slideshow.style.backgroundImage = `url(${imagenes[index]})`;
  index = (index + 1) % imagenes.length;
}

cambiarImagen();
setInterval(cambiarImagen, 5000);




setTimeout(() => {
  const btn = document.getElementById('btnContainer');
  btn.classList.add('show');
}, 2000);

setTimeout(() => {
  const btn = document.getElementById('btnContainer');
  btn.style.display = 'block';
  btn.style.animation = 'fadeInLento 6s ease forwards';
  // o si usas una clase con animación, usa esto:
  // btn.classList.add('show');
}, 2000);


console.clear();
Splitting();
