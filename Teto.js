// === Frases posibles para mostrar aleatoriamente ===
const frases = [
  "¿Nostalgia acaso?",
  "¿Antes era mejor no?....",
  "120 MP o simplemente 5MP",
  "Ser uno más? o tener el vibe",
  "So can you wonder for a spell and live in parallel",
  "VHS O SD ",
  "FLash? Porsupuesto",
  "Personalidad claro",
  "Toj mire esta en mi pagina hola jajaja pongame 100 me desbele haciendo solo la intro ",
  "Cybershoot, coolpix , easyshare, power shoo y mas.....",
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